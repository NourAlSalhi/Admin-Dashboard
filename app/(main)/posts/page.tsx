import { PostsTable } from "@/app/components";
import { BackButton } from "@/components";
const PostsPage = () => {
  return (
    <>
      <BackButton />
      <PostsTable limit={10} />
    </>
  );
};

export default PostsPage;
