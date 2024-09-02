import posts from "@/content/posts";
import { Post } from "@/types/posts";
import type { PostsTableProps } from "../types";

const PostsTable: React.FC<PostsTableProps> = ({ limit, title }) => {
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="w-full overflow-x-auto">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-sm font-semibold">
            <th className="p-3 w-1/2 md:w-[60%]">Title</th>
            <th className="p-3 hidden md:table-cell w-1/4">Author</th>
            <th className="p-3 hidden md:table-cell w-1/6">Date</th>
            <th className="p-3 w-1/6">Views</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id} className="border-b">
              <td className="p-3 text-sm text-gray-700">
                <div className="truncate font-semibold text-gray-800">
                  {post.title.length > 20
                    ? `${post.title.slice(0, 20)}...`
                    : post.title}
                </div>
                <div className="text-gray-500 text-xs mt-1 block md:hidden">
                  {post.author} | {post.date}
                </div>
              </td>
              <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
                {post.author}
              </td>
              <td className="p-3 text-sm text-gray-700 hidden md:table-cell">
                {post.date}
              </td>
              <td className="p-3 text-sm text-gray-700 text-center">views</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;
