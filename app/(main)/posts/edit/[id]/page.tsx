import { LeftArrow } from "@/components";
import Link from "next/link";

const EditPostPage = () => {
  return (
    <div>
      <Link
        href="/posts"
        className="flex items-center gap-1 hover:text-blue-500 mb-4 transition-all duration-200"
      >
        <LeftArrow />
        Back
      </Link>
      Edit Post
    </div>
  );
};

export default EditPostPage;
