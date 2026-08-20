import type { DesignTokens } from "../../types/tokens";
import { SelectInput } from "./SelectInput";

interface SpacingPanelProps {
    tokens: DesignTokens;
    onChange: (newTokens: DesignTokens) => void;

}

const SPACING_SIZE_OPTIONS = ["14px", "16px", "18px", "20px"];


export function SpacingPanel({ tokens, onChange }: SpacingPanelProps) {
  function handleSpacingChange(newSize: string) {
    onChange({ ...tokens, spacingMd: newSize });
  }
 
  return(
    <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase text-gray-500"> Espaçamento </h2>
        <SelectInput
        id="Spacing"
        label="Tamanho do espaçamento"
        value={tokens.spacingMd}
        options={SPACING_SIZE_OPTIONS}
        onChange={handleSpacingChange}
/>

</section>

  )
}