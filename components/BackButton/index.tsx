import type { BackButtonProps } from "../types";
import { LeftArrow } from "@/components";
import Link from "next/link";

const BackButton: React.FC<BackButtonProps> = ({
  href = "/",
  title = "Go Back",
}) => {
  return (
    <Link
      href={href}
      className="text-slate-700 font-semibold flex items-center gap-1 hover:text-blue-500 mb-4 transition-all duration-200"
    >
      <LeftArrow />
      {title}
    </Link>
  );
};

export default BackButton;
