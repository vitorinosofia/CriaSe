import type { ChangeEvent } from "react";

interface SelectInputProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (newValue: string) => void;
}

export function SelectInput({ id, label, value, options, onChange }: SelectInputProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value);
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-black">
        {label}
      </label>
      <select
      id={id} value={value} onChange={handleChange} className="h-9 rounded border border-gray-300 px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
  