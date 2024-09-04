"use client";
import posts from "@/content/posts";
import { Post } from "@/types";
import type { PostsTableProps } from "../types";
import { useState } from "react";
import Link from "next/link";

const PostsTable: React.FC<PostsTableProps> = ({ limit = 5, title }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const totalPages = Math.ceil(sortedPosts.length / limit);
  const startIndex = (currentPage - 1) * limit;

  const currentPosts = sortedPosts.slice(startIndex, startIndex + limit);

  const handlePrevPage = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleNextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="w-full overflow-x-auto">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 font-light">
            <th className="p-3 w-1/2 md:w-[60%]">Title</th>
            <th className="p-3 hidden md:table-cell w-1/4">Author</th>
            <th className="p-3 hidden md:table-cell w-1/6">Date</th>
            <th className="p-3 w-1/6">Views</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr
              key={post.id}
              className="border-b font-semibold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-200"
            >
              <td className="p-3 text-sm">
                <div className="truncate text-gray-800">
                  {post.title.length > 30
                    ? `${post.title.slice(0, 30)}...`
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
              <td className="p-3 text-sm text-gray-700">
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-2 items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-2 py-1 hover:bg-gray-300 disabled:opacity-40 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z"
            />
          </svg>
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-2 py-1 hover:bg-gray-300 disabled:opacity-40 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="m7 2l10 10L7 22"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostsTable;
