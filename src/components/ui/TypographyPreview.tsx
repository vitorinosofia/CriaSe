import type { DesignTokens } from "../../types/tokens";

interface TypographyPreviewProps {
  tokens: DesignTokens;
}

export function TypographyPreview({ tokens }: TypographyPreviewProps) {
  const baseFontSize = parseInt(tokens.fontSizeMd, 10);

  return (
    <div className="flex flex-col items-center text-center ">
      <h1
        style={{
          fontFamily: tokens.fontFamily,
          fontSize: `${baseFontSize * 2}px`,
          fontWeight: 700,
        }}
      >
        Teste Texto
      </h1>
      <p
        className="text-gray-500 max-w-md"
        style={{
          fontFamily: tokens.fontFamily,
          fontSize: tokens.fontSizeMd,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nisl vitae nibh sodales malesuada.
      </p>
    </div>
  );
}