"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { BackButton } from "@/components";

interface IFormInput {
  Title: string;
  Body: string;
  Author: string;
  Date: string; // Use string to handle formatted date
}

const EditPostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  const formatDateInput = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(\d{2})(\d)/, "$1/$2") // Format as DD/MM
      .replace(/(\d{2}\/\d{2})(\d)/, "$1/$2") // Format as DD/MM/YYYY
      .substring(0, 10); // Limit to length
  };

  return (
    <div>
      <BackButton href="/posts" />
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-3">
          <label className="block text-slate-700 text-sm font-semibold mb-1">
            Title
          </label>
          <input
            {...register("Title", { required: true, maxLength: 10 })}
            placeholder="Enter Title"
            className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm"
          />
          <div className="h-4">
            {errors.Title && (
              <span className="text-red-700 text-xs">
                ⚠ This field is required.
              </span>
            )}
          </div>
        </div>
        <div className="pb-3">
          <label className="block text-slate-700 text-sm font-semibold mb-1">
            Body
          </label>
          <textarea
            {...register("Body", { required: true, maxLength: 10 })}
            placeholder="Enter Body"
            className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm resize-none h-[60px]"
          />
          <div className="h-4 flex items-center">
            {errors.Body ? (
              <span className="text-red-700 text-xs">
                ⚠ This field is required.
              </span>
            ) : (
              <span className="text-transparent text-xs"> </span> // Keeps space but hides text
            )}
          </div>
        </div>
        <div className="pb-3">
          <label className="block text-slate-700 text-sm font-semibold mb-1">
            Author
          </label>
          <input
            {...register("Author", { required: true, maxLength: 10 })}
            placeholder="Enter Author"
            className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm"
          />
          <div className="h-4">
            {errors.Author ? (
              <span className="text-red-700 text-xs">
                ⚠ This field is required.
              </span>
            ) : (
              <span className="text-transparent text-xs"> </span> // Ensures consistent space
            )}
          </div>
        </div>
        <div className="pb-3">
          <label className="block text-slate-700 text-sm font-semibold mb-1">
            Date
          </label>
          <Controller
            control={control}
            name="Date"
            render={({ field }) => (
              <input
                {...field}
                placeholder="Enter Date (DD/MM/YYYY)"
                type="text"
                className="block w-full border border-gray-300 bg-gray-100 py-2 px-4 mb-1 rounded-md text-sm"
                onChange={(e) => {
                  const formattedDate = formatDateInput(e.target.value);
                  setValue("Date", formattedDate); // Update the value
                }}
                value={field.value || ""}
              />
            )}
          />
          <div className="h-4">
            {errors.Date ? (
              <span className="text-red-700 text-xs">
                ⚠ This field is required.
              </span>
            ) : (
              <span className="text-transparent text-xs"> </span> // Reserved space for error message
            )}
          </div>
        </div>
        <input
          type="submit"
          value="Update Post"
          className="w-full bg-black text-white mt-8 py-3 text-sm font-light tracking-widest rounded-md hover:bg-zinc-800 transition-all duration-200"
        />
      </form>
    </div>
  );
};

export default EditPostPage;
