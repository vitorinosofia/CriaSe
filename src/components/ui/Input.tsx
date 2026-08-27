import type { DesignTokens } from '../../types/tokens';

interface InputProps  {
  id: string;
  label: string;
  placeholder?: string;
  tokens: DesignTokens;
 
};

export function Input({ id, label, placeholder, tokens }: InputProps) {
 
 return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 border-border-gray-300 w-full">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        style={{
            borderRadius: tokens.radius,
            padding: tokens.spacingMd,
            fontSize: tokens.fontSizeMd,
            fontFamily: tokens.fontFamily,

        }}
      />
    </div>
  );
}
