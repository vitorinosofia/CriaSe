import type { DesignTokens } from "../../types/tokens";
import { SelectInput } from "./SelectInput";

interface ShadowsPanelProps {
  tokens: DesignTokens;
  onChange: (newTokens: DesignTokens) => void;
}

// Cada opção de direção já é o par "offsetX offsetY" pronto
const DIRECTION_OPTIONS: Record<string, string> = {
  "Para baixo": "0px 4px",
  "Para cima": "0px -4px",
  "Direita": "4px 0px",
  "Esquerda": "-4px 0px",
};

// Cada intensidade define blur + spread + opacidade da cor
const INTENSITY_OPTIONS: Record<string, string> = {
  "Leve": "6px 0px rgba(0,0,0,0.08)",
  "Média": "10px 1px rgba(0,0,0,0.15)",
  "Forte": "16px 2px rgba(0,0,0,0.25)",
};

export function ShadowsPanel({ tokens, onChange }: ShadowsPanelProps) {
  // Extrai a direção e intensidade atuais a partir do valor salvo,
  // comparando com as chaves dos objetos acima (fallback pro primeiro item)
  const currentDirectionLabel =
    Object.keys(DIRECTION_OPTIONS).find((key) =>
      tokens.shadow.startsWith(DIRECTION_OPTIONS[key])
    ) ?? "Para baixo";

  const currentIntensityLabel =
    Object.keys(INTENSITY_OPTIONS).find((key) =>
      tokens.shadow.endsWith(INTENSITY_OPTIONS[key])
    ) ?? "Leve";

  function buildShadow(directionLabel: string, intensityLabel: string) {
    const offset = DIRECTION_OPTIONS[directionLabel];
    const intensity = INTENSITY_OPTIONS[intensityLabel];
    return `${offset} ${intensity}`;
  }

  function handleDirectionChange(newDirectionLabel: string) {
    onChange({ ...tokens, shadow: buildShadow(newDirectionLabel, currentIntensityLabel) });
  }

  function handleIntensityChange(newIntensityLabel: string) {
    onChange({ ...tokens, shadow: buildShadow(currentDirectionLabel, newIntensityLabel) });
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase text-gray-500">Sombras</h2>
      <SelectInput
        id="shadow-direction"
        label="Direção"
        value={currentDirectionLabel}
        options={Object.keys(DIRECTION_OPTIONS)}
        onChange={handleDirectionChange}
      />
      <SelectInput
        id="shadow-intensity"
        label="Intensidade"
        value={currentIntensityLabel}
        options={Object.keys(INTENSITY_OPTIONS)}
        onChange={handleIntensityChange}
      />
    </section>
  );
}