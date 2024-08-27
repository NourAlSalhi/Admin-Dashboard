"use client";
import SearchInput from "../Search";
import SuggestionItem from "../SuggestionItem";
import { Dashboard, Categories, Billing } from "../Svg";

const Sidebar = () => {
  return (
    <div className="bg-gray-100">
      <SearchInput onSearch={(query) => console.log(query)} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Suggestions
        </h2>
        <div className="flex flex-col space-y-4">
          <SuggestionItem
            icon={<Dashboard />}
            label="Dashboard"
            href="/dashboard"
          />
          <SuggestionItem
            icon={<Categories />}
            label="Categories"
            href="/newspaper"
          />
          <SuggestionItem icon={<Billing />} label="Billing" href="/biiling" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
