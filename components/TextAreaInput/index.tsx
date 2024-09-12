"use client";
import React from "react";
import type { TextAreaInputProps } from "@/components/types";

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  placeholder,
  register,
  name,
  errors,
  maxLength,
}) => {
  return (
    <div className="pb-3">
      <label className="block text-slate-700 text-sm font-semibold mb-1">
        {label}
      </label>
      <textarea
        {...register(name, { required: true, maxLength })}
        placeholder={placeholder}
        className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm resize-none h-[60px]"
      />
      <div className="h-4 flex items-center">
        {errors[name] ? (
          <span className="text-red-700 text-xs">
            ⚠ This field is required.
          </span>
        ) : (
          <span className="text-transparent text-xs"> </span>
        )}
      </div>
    </div>
  );
};

export default TextAreaInput;
