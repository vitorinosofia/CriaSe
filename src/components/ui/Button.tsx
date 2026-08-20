import type { DesignTokens } from '../../types/tokens';

type ButtonProps = {
  label: string;
  tokens: DesignTokens;
  onClick?: () => void;
};

export function Button({ label, tokens, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white px-6 py-3 text-base font-medium hover:opacity-90 transition"
      style={{
        backgroundColor: tokens.colorPrimary,
        borderRadius: tokens.radius,
        padding: tokens.spacingMd,
        fontSize: tokens.fontSizeMd,
        fontFamily: tokens.fontFamily,
        border: "none",
      }}
    >
      {label}
    </button>
  );
}