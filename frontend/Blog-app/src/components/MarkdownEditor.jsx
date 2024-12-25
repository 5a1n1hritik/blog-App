import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { createBlog } from "../api/blogService";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const blogData = { title, content: markdown };
      await createBlog(blogData);
      setSuccess("Blog created successfully!");
      setError("");
      setMarkdown("");
      setTitle("");
    } catch (err) {
      setSuccess("");
      setError(err.message || "Failed to create the blog.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Markdown Blog Editor
      </h1>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Blog Title */}
        <div>
          <label htmlFor="blogTitle" className="block text-lg font-medium text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter your blog title..."
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Editor and Preview */}
        <div className="grid grid-cols-2 gap-4">
          {/* Markdown Editor */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Write Markdown</h2>
            <textarea
              className="w-full h-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={markdown}
              onChange={handleInputChange}
              placeholder="Write your blog content in Markdown..."
              required
            ></textarea>
          </div>

          {/* Markdown Preview */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Live Preview</h2>
            <div className="w-full h-80 overflow-auto p-3 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-50"
            disabled={!title.trim() || !markdown.trim()}
          >
            Submit Blog
          </button>
        </div>
      </form>

      {/* Success and Error Messages */}
      {success && (
        <div className="mt-6 text-center text-green-600 font-medium">{success}</div>
      )}
      {error && (
        <div className="mt-6 text-center text-red-600 font-medium">{error}</div>
      )}
    </div>
  );
};

export default MarkdownEditor;
