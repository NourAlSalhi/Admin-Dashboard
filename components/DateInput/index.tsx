"use client";
import React from "react";
import { Controller } from "react-hook-form";
import type { DateInputProps } from "@/components/types";

const DateInput: React.FC<DateInputProps> = ({
  label,
  name,
  errors,
  setValue,
  control,
}) => {
  const formatDateInput = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2}\/\d{2})(\d)/, "$1/$2")
      .substring(0, 10);
  };

  return (
    <div className="pb-3">
      <label className="block text-slate-700 text-sm font-semibold mb-1">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            placeholder="Enter Date (DD/MM/YYYY)"
            type="text"
            className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm"
            onChange={(e) => {
              const formattedDate = formatDateInput(e.target.value);
              setValue(name, formattedDate);
            }}
            value={field.value || ""}
          />
        )}
      />
      <div className="h-4">
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

export default DateInput;
