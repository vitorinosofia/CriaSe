import type { DesignTokens } from '../../types/tokens'

type ButtonProps = {
  label:string;
  tokens: DesignTokens;
  onClick?: () => void()
};
export function Button({label, onClick}: ButtonProps){
  return (
    <button
    type="button"
    onClick={onClick}
    className="bg[#6C63FF] text-white px-6 py-3 rounded[10px] text-base font-medium hover:opacity-90 transition"
    style={{
      backgroundColor: tokens.colorPrimary,
      borderRadius: tokens.radius,
      padding: tokens.spacingMd,
      fontSize: tokens.fontSizeMd,
      fontFamily: tokens.fontFamily,
      border: "none",
    }}>
      {label} </button>
  );
}