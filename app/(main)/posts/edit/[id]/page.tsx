'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { BackButton } from "@/components";

interface IFormInput {
  Title: string;
  Body: string;
  Author: string;
  Date: number;
}

const EditPostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();


  return (
    <div>
      <BackButton href="/posts" />
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg"
      >
        <label className="block text-white text-sm font-light mb-3">
          Title
        </label>
        <input
          {...register("Title")}
          defaultValue="test"
          className="block w-full border border-white bg-gray-700 text-white py-2 px-4 mb-3 rounded-md text-sm"
        />
        <label className="block text-white text-sm font-light mb-3">Body</label>
        <input
          {...register("Body", { required: true, maxLength: 10 })}
          className="block w-full border border-white bg-gray-700 text-white py-2 px-4 mb-3 rounded-md text-sm"
        />
        {errors.Body && (
          <p className="text-pink-600 text-sm">⚠ This field is required</p>
        )}
        <label className="block text-white text-sm font-light mb-3">
          Author
        </label>
        <input
          {...register("Author", { required: true, maxLength: 10 })}
          className="block w-full border border-white bg-gray-700 text-white py-2 px-4 mb-3 rounded-md text-sm"
        />
        <label className="block text-white text-sm font-light mb-3">Date</label>
        <input
          {...register("Date", { required: true })}
          type="number"
          className="block w-full border border-white bg-gray-700 text-white py-2 px-4 mb-3 rounded-md text-sm"
        />
        <input
          type="submit"
          value="Submit"
          className="w-full bg-pink-600 text-white uppercase py-3 text-sm font-light tracking-widest rounded-md hover:bg-pink-700 active:opacity-80 transition-transform transform active:translate-y-1"
        />
      </form>
    </div>
  );
};

export default EditPostPage;