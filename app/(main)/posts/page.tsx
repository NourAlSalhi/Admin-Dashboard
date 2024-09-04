import { PostsTable } from "@/app/components";
import { LeftArrow } from "@/components";
import Link from "next/link";
const PostsPage = () => {
  return (
    <>
      <Link href="/" className="flex items-center gap-1 hover:text-blue-500 mb-4 transition-all duration-200">
        <LeftArrow />
        Back
      </Link>
      <PostsTable limit={10} />
    </>
  );
};

export default PostsPage;
