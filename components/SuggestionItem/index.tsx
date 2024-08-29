"use client"
import Link from "next/link";
import { FC } from "react";
import { SuggestionItemProps } from "../types";
import { useRouter } from "next/navigation";

const SuggestionItem: FC<SuggestionItemProps> = ({
  icon,
  label,
  href,
  shortcut,
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center justify-between p-2 rounded-md transition-colors duration-200 cursor-pointer ${isActive ? 'bg-gray-300 text-blue-500' : 'text-gray-600 hover:bg-gray-200'}`}
    >
      <div className="flex text-black items-center">
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
};

export default SuggestionItem;
