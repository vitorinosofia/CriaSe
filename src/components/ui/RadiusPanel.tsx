import type { DesignTokens } from "../../types/tokens";
import { SelectInput } from "./SelectInput";

interface RadiusPanelProps {
    tokens: DesignTokens;
    onChange: (newTokens: DesignTokens) => void;

}

const RADIUS_OPTIONS = ["0px", "4px", "8px", "12px"];

export function RadiusPanel({ tokens, onChange }: RadiusPanelProps) {
  function handleRadiusChange(newRadius: string) {
    onChange({ ...tokens, radius: newRadius });
  }

    return(
      <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold uppercase text-gray-500"> Border Radius </h2>
          <SelectInput
          id="Radius"
          label="Tamanho do raio"
          value={tokens.radius}
          options={RADIUS_OPTIONS}
          onChange={handleRadiusChange}
  />
  
  </section>
  
    )
  }