import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { ArrowRight, Edit, Trash2, MoreVertical } from "lucide-react";

const BlogCard = ({ blog }) => {
  const [userRole, setUserRole] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setUserRole(decodedToken?.user?.role || null);
      } catch (error) {
        console.error("Error decoding the token:", error);
        setUserRole(null);
      }
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="rounded-lg shadow-md hover:shadow-2xl transition-shadow p-4 bg-white">
        <div className="relative">
          {userRole === "admin" || userRole === "editor" ? (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="absolute top-2 right-2 p-2 bg-transparent text-white rounded-full hover:bg-gray-200 hover:text-black focus:outline-none"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {showMenu && (
                <div className="absolute top-10 right-2 bg-white shadow-lg rounded-md mt-2 p-2 w-40">
                  <Link
                    to={`/edit-blog/${blog._id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
                  >
                    <Edit className="w-4 h-4 inline-block mr-2" /> Update
                  </Link>
                  <Link
                    to={`/delete-blog/${blog._id}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white rounded-md"
                  >
                    <Trash2 className="w-4 h-4 inline-block mr-2" /> Delete
                  </Link>
                </div>
              )}
            </div>
          ) : null}
        </div>
        <img
          src={
            blog.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBZD_HMBxdlgzEU4-6cB708O34eXH0vD8B4r57Az_aDJ3u508TgQ8cUPU92OyI90EReM"
          }
          alt={blog.title || "Blog Image"}
          className="rounded-3xl w-full h-48 object-cover mb-4  transition-transform"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
          <ReactMarkdown className="line-clamp-2 text-gray-600 text-sm mb-4">
            {blog.content || "No content available"}
          </ReactMarkdown>
        </div>

        <div className="flex justify-between gap-4 items-center mt-4">
          <Link
            to={`/blog/${blog._id}`}
            className="mt-2 inline-flex items-center text-blue-600 hover:underline"
          >
            Read more <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
