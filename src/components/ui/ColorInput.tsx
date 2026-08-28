import type { ChangeEvent } from "react";

interface ColorInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (newColor: string) => void;
}

export function ColorInput({ id, label, value, onChange }: ColorInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-black">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="color"
          value={value}
          onChange={handleChange}
          className="h-9 w-9 cursor-pointer rounded border border-gray-300"
        />
        <span className="text-sm text-gray-500">{value}</span>
      </div>
    </div>
  );
}