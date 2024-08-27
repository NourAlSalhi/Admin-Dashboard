import Link from "next/link";
import { FC } from "react";
import { SuggestionItemProps } from "../types";

const SuggestionItem: FC<SuggestionItemProps> = ({
  icon,
  label,
  href,
  shortcut,
}) => (
  <Link
    href={href}
    className="flex items-center justify-between hover:bg-gray-200 rounded-md p-2 transition-colors duration-200 cursor-pointer py-2"
  >
    <div className="flex text-gray-700 items-center">
      <span className="text-xl">{icon}</span>
      <span className="ml-3 text-[14px]">{label}</span>
    </div>
    {shortcut && (
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-1">⌘</span>
        <span>{shortcut}</span>
      </div>
    )}
  </Link>
);

export default SuggestionItem;
