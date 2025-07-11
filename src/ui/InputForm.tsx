import type { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export default function InputForm({
  type = "text",
  placeholder,
  style,
  id,
  label,
  error,
  className = "",
  name,
  ...rest
}: InputFormProps) {
  const inputId = id || name;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        style={style}
        className={`border border-gray-300 rounded-md p-2 hover:border-gray-400 focus:border-gray-400 focus:outline-none ${error ? "border-red-500" : "border-gray-300"} ${className}`}
        {...rest}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}