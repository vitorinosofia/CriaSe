import type { DesignTokens } from "../../types/tokens";
import { SelectInput } from "./SelectInput";

interface TypographyPanelProps {
    tokens: DesignTokens;
    onChange: (newTokens: DesignTokens) => void;

}

const FONT_SIZE_OPTIONS = ["14px", "16px", "18px", "20px"];
const FONT_FAMILY_OPTIONS = ["Inter", "Roboto", "Poppins"];

export function TypographyPanel({ tokens, onChange }: TypographyPanelProps) {
  function handleFontSizeChange(newSize: string) {
    onChange({ ...tokens, fontSizeMd: newSize });
  }
   function handleFontFamilyChange(newFamily: string) {
    onChange({ ...tokens, fontFamily: newFamily });
  }
  return(
    <section className="flex flex-col gap-3">
        <h2 className="text-sm font-smibold uppercase text=gray-500"> Tipografia </h2>
        <SelectInput
        id="font-size-md"
        label="Tamanho da fonte"
        value={tokens.fontSizeMd}
        options={FONT_SIZE_OPTIONS}
        onChange={handleFontSizeChange}
/>
  <SelectInput
        id="font-family"
        label="Família da fonte"
        value={tokens.fontFamily}
        options={FONT_FAMILY_OPTIONS}
        onChange={handleFontFamilyChange}
/>
</section>

  )
}