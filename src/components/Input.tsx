import React from "react";

type InputProps = {
  type?: "text" | "password" | "number";
  name: string;
  label: string;
  placeholder?: string;
  isRequired: boolean;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

export const Input = ({
  name,
  label,
  placeholder,
  isRequired,
  value,
  onChange,
  type = "text",
}: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-zinc-900"
      >
        {label} {isRequired && "*"}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onWheel={(event) => event.currentTarget.blur()}
        onChange={(event) => onChange(event.currentTarget.value)}
        className="peer block w-full rounded-2xl border border-zinc-200 py-3 px-4 text-base outline-2 outline-offset-1 outline-zinc-500 placeholder:text-zinc-400"
      />
    </>
  );
};
