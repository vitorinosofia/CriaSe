import type { ChangeEvent } from "react";

interface ColorProps = {
  id:string;
  label: string;
  value: string;
  onClick?: (newColor: string) => void()
};

export function ColorInput({ id, label, value, onChange} : ColorInputProps){
  function handleChange(event: ChangeEvent<HTMLInputElement>){
    onChange(event.target.value)
  }

  return(
    <div className="flex flex-col gap-1">
      <label htmlform={id} className="text-sm font-medium text-gray-700">
        {label}
        </label>
        <div className="flex items-center gap-2">
          <input
          id={id}
          type="color"
          value={value}
          onChange={handleChange}
          className="h-9 w-9 cursor-pointer rounded order border-gray-300"
     />
     <span className="text-sm text-fray-500"> {value} </span>     

  );
}