import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-lg shadow-md hover:shadow-2xl transition-shadow p-4 bg-[#ffffff] ">
      <img
        src={
          blog.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBZD_HMBxdlgzEU4-6cB708O34eXH0vD8B4r57Az_aDJ3u508TgQ8cUPU92OyI90EReM"
        }
        alt={blog.title || "Blog Image"}
        className="rounded-3xl w-full h-48 object-cover mb-4 hover:scale-105 transition-transform"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-center">{blog.title}</h2>
        <ReactMarkdown className="line-clamp-3 text-gray-700">
          {blog.content || "No content available"}
        </ReactMarkdown>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          to={`/blog/${blog._id}`}
          rel="noopener noreferrer"
          className=" items-center sapace-y- px-6 py-3 bg-gray-100 text-[#000000] hover:text-white bg-gradient-to-l left-0 rounded-full hover:from-blue-400 hover:to-black transition-colors"
        >
          Read More <i className="bi bi-arrow-right ml-2 w-4 h-4"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
