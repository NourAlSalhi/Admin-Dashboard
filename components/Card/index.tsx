import React from "react";
import { CardItemProps } from "../types";

const Card: React.FC<CardItemProps> = ({ icon, label, count }) => {
  return (
    <div className="w-full md:w-[calc(25%-20px)] bg-slate-100 py-3 px-4 rounded-md dark:bg-slate-800">
      <div>
        <h3 className="text-2xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {label}
        </h3>
      </div>
      <div className="flex gap-3 justify-center items-center">
        {icon}
        <h3 className="text-3xl font-semibold text-slate-500 dark:text-slate-200">
          {count}
        </h3>
      </div>
    </div>
  );
};

export default Card;
