"use client";
import { Search } from "../Svg";
import { SearchInputProps } from "../types";
import { ChangeEvent, FC, useState } from "react";

const SearchInput: FC<SearchInputProps> = ({
  placeholder = "Type a command",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="text-gray-500 h-4 w-4" />
      </span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="block w-full bg-gray-100 pl-10 pr-3 py-2 border-b border-gray-300 leading-5 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
      />
    </div>
  );
};

export default SearchInput;
