import Link from "next/link";
import { FC } from "react";

interface SuggestionItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SuggestionItem: FC<SuggestionItemProps> = ({ icon, label, href }) => (
  <Link
    href={href}
    className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
  >
    <span className="text-xl">{icon}</span>
    <span className="ml-3">{label}</span>
  </Link>
);

export default SuggestionItem;
