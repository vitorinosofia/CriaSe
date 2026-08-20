import type { DesignTokens } from "../../types/tokens";
import { ColorInput } from "./ColorInput";

interface ColorsPanelProps = {
  tokens = DesignTokens;
    onChange = (newTokens : DesignTokens) => void
}

export function ColorsPanel({tokens, onChange}: ColorsPanelProps){
  function handlePrimaryColorChange(newColor:string){
    onChange({...tokens, colorPrimary: newColor});
  }

  return(
    <section classNmae="flex flex-col gap-3">
      <h2 classNmae="text-sm font-semibold uppercase text-gray-500"> Cores </h2>
      <ColorInput
      id="color-primary"
      label="Cor primária"
      value={tokens.colorPrimary}
      onCange={handlePrimaryColorChange} />
      </section>
  )
}