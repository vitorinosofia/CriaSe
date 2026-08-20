import type { DesignTokens } from '../../types/tokens';

type ButtonProps = {
  label: string;
  tokens: DesignTokens;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export function Button({ label, tokens, variant = 'primary', onClick }: ButtonProps) {
 const isPrimary = variant === "primary";
 const style = isPrimary
? {
  backgroundColor: tokens.colorPrimary,
  color: "#FFFFFF",
  border: "none",
} : {
  backgroundColor: "transparent",
  color: tokens.colorPrimary,
border: `1px solid ${tokens.colorPrimary}`
}
 return (
    <button
      type="button"
      onClick={onClick}
      className="text-base font-medium hover:opacity-90 transition"
      style={{
        ...style,
       
        borderRadius: tokens.radius,
        padding: tokens.spacingMd,
        fontSize: tokens.fontSizeMd,
        fontFamily: tokens.fontFamily,
     
      }}
    >
      {label}
    </button>
  );
}