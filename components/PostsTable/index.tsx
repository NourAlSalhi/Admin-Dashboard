"use client";
import posts from "@/content/posts";
import { Post } from "@/types/posts";
import type { PostsTableProps } from "../types";
import { useState } from "react";

const PostsTable: React.FC<PostsTableProps> = ({ limit = 5, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(sortedPosts.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + limit);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
          {currentPosts.map((post) => (
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
      <div className="flex justify-center gap-5 items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsTable;
