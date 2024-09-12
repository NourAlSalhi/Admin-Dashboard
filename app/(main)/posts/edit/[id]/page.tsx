"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { BackButton, TextInput, TextAreaInput, DateInput } from "@/components";
import type { IFormInput } from "@/types";

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

  return (
    <div>
      <BackButton href="/posts" />
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Title"
          placeholder="Enter Title"
          register={register}
          name="Title"
          errors={errors}
          maxLength={10}
        />
        <TextAreaInput
          label="Body"
          placeholder="Enter Body"
          register={register}
          name="Body"
          errors={errors}
          maxLength={10}
        />
        <TextInput
          label="Author"
          placeholder="Enter Author"
          register={register}
          name="Author"
          errors={errors}
          maxLength={10}
        />
        <DateInput
          control={control}
          label="Date"
          register={register}
          name="Date"
          errors={errors}
          setValue={setValue}
        />
        <button
          type="submit"
          className="w-full bg-black text-white mt-8 py-3 text-sm font-light tracking-widest rounded-md hover:bg-zinc-800 transition-all duration-200"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;
