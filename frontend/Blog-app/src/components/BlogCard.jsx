import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Heart, Edit, Trash2, MoreVertical } from "lucide-react";

const BlogCard = ({ blog }) => {
  const [liked, setLiked] = useState(false);
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

  const handleLike = () => {
    setLiked(!liked);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
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
        <h2 className="text-lg font-semibold mb-2 text-center">{blog.title}</h2>
        <ReactMarkdown className="line-clamp-2 text-gray-700">
          {blog.content || "No content available"}
        </ReactMarkdown>
      </div>

      <div className="flex justify-between gap-4 items-center mt-4">
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded-full flex items-center gap-2 ${
            liked ? " text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Heart
          className="w-5 h-5"
          fill={liked ? "red" : "none"} 
          stroke={liked ? "none" : "currentColor"} 
        />
        {liked ? "Liked" : "Like"}
        </button>

        <Link
          to={`/blog/${blog._id}`}
          className="px-6 py-3 bg-gray-100 text-[#000000] hover:text-white bg-gradient-to-l rounded-full hover:from-blue-400 hover:to-black transition-colors"
        >
          <span className="flex items-center gap-2">
            Read More <i className="bi bi-arrow-right ml-2 w-4 h-4"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
