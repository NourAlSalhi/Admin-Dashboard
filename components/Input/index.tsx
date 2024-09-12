"use client";
import React from "react";
import type { TextInputProps } from "@/components/types";

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  register,
  name,
  errors,
  maxLength,
  type = "text",
}) => {
  return (
    <div className="pb-3">
      <label className="block text-slate-700 text-sm font-semibold mb-1">
        {label}
      </label>
      <input
        {...register(name, { required: true, maxLength })}
        placeholder={placeholder}
        type={type}
        className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm"
      />
      <div className="h-4">
        {errors[name] && (
          <span className="text-red-700 text-xs">
            ⚠ This field is required.
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
