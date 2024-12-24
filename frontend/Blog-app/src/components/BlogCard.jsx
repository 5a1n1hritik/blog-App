import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: blog.renderedContent
            ? blog.renderedContent.slice(0, 100) + "..."
            : "No content available",
        }}
      ></p>
      <button
        onClick={() => alert("Redirect to full post...")} // You can handle navigation here
        className="mt-2 text-blue-500 hover:underline"
        aria-label="Read the full blog post"
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
