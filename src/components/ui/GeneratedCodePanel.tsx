import type { DesignTokens } from "../../types/tokens";

interface GeneratedCodePanelProps {
    tokens: DesignTokens;
    }

    export function GeneratedCodePanel({ tokens }: GeneratedCodePanelProps) {
const cssCode =`.btn-primary {
  background-color: ${tokens.colorPrimary};
  border-radius: ${tokens.radius};
  padding: ${tokens.spacingMd};
  font-size: ${tokens.fontSizeMd};
  font-family: ${tokens.fontFamily};
}`;
return(
    <div>
        <h2> Código Gerado</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
            <code>{cssCode}</code>
        </pre>
    </div>
)
    }