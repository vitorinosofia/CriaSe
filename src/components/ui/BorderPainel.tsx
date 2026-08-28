import type { DesignTokens } from "../../types/tokens";
import { ColorInput } from "./ColorInput";
import { ButtonGroupInput } from "./ButtonGroupInput";

interface BorderPanelProps {
    tokens: DesignTokens;
    onChange: (newTokens: DesignTokens) => void;
    }
const BORDER_WIDTH_OPTIONS = ["0px", "1px", "2px", "3px", "4px", "5px"];
    export function BorderPanel({ tokens, onChange }: BorderPanelProps) {
         return (
    <section className="flex flex-col gap-5
    margin-4 ">
        <ButtonGroupInput
      
        label="Espessura da borda"
        value={tokens.borderWidth}
        options={BORDER_WIDTH_OPTIONS}
        onChange={(newWidth) => onChange({ ...tokens, borderWidth: newWidth })}
      />
      <ColorInput
        id="border-color"
        label="Cor da borda"
        value={tokens.borderColor}
        onChange={(newColor) => onChange({ ...tokens, borderColor: newColor })}
      />
    </section>
  );
}
   