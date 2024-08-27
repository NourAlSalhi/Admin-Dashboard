"use client";
import SearchInput from "../Search";
import SuggestionItem from "../SuggestionItem";
import { Dashboard, Categories, Billing, Profile, Post, Setting } from "../Svg";

const Sidebar = () => {
  return (
    <div>
      <SearchInput onSearch={(query) => console.log(query)} />
      <div className="p-2">
        <h2 className="text-[12px] px-2 font-semibold text-gray-400 mb-1">
          Suggestions
        </h2>
        <div className="flex flex-col">
          <SuggestionItem
            icon={<Dashboard />}
            label="Dashboard"
            href="/dashboard"
          />
          <SuggestionItem icon={<Post />} label="Posts" href="/posts" />
          <SuggestionItem
            icon={<Categories />}
            label="Categories"
            href="/categories"
          />
        </div>
      </div>
      <div className="border-b border-gray-300"></div>
      <div className="p-2">
        <h2 className="text-[12px] px-2 font-semibold text-gray-400 mb-1">
          Settings
        </h2>

        <div className="flex flex-col">
          <SuggestionItem
            icon={<Profile />}
            label="Profile"
            href="/profile"
            shortcut="P"
          />
          <SuggestionItem
            icon={<Billing />}
            label="Billing"
            href="/billing"
            shortcut="B"
          />
          <SuggestionItem
            icon={<Setting />}
            label="Settings"
            href="/settings"
            shortcut="S"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
