"use client";
import Link from "next/link";
import SearchInput from "../Search";
import { Search } from "../Svg";

const Sidebar = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      <div>
        <SearchInput
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Sidebar;
