import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { createBlog } from "../api/blogService";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Image,
  Link,
  Code,
} from "lucide-react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(
    "# Welcome to My Markdown Editor\n\nStart typing your blog post here..."
  );
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("write");

  const toolbarActions = [
    {
      icon: Bold,
      action: "bold",
      label: "Bold",
      syntax: "**",
      example: "Bold text",
    },
    {
      icon: Italic,
      action: "italic",
      label: "Italic",
      syntax: "_",
      example: "Italic text",
    },
    {
      icon: List,
      action: "unordered-list",
      label: "Unordered List",
      syntax: "- ",
      example: "List item",
    },
    {
      icon: ListOrdered,
      action: "ordered-list",
      label: "Ordered List",
      syntax: "1. ",
      example: "List item",
    },
    {
      icon: Image,
      action: "image",
      label: "Insert Image",
      syntax: "![]()",
      example: "![Alt text](url)",
    },
    {
      icon: Link,
      action: "link",
      label: "Insert Link",
      syntax: "[]()",
      example: "[Link text](url)",
    },
    {
      icon: Code,
      action: "code",
      label: "Insert Code Block",
      syntax: "```",
      example: "Your code here",
    },
  ];

  const insertSyntax = (syntax, example) => {
    setMarkdown((prev) => `${prev}${syntax}${example}${syntax}`);
  };

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <header className="bg-card shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Markdown Blog Editor</h1>
            <button
              type="submit"
              className="px-6 py-3 text-lg font-medium bg-gray-100 text-[#000000] hover:text-white bg-gradient-to-l left-0 rounded-full hover:from-blue-400 hover:to-black transition-colors"
              disabled={!title.trim() || !markdown.trim() || loading}
              onClick={handleFormSubmit}
            >
              {loading ? "Submitting..." : "Submit Blog"}
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="blogTitle"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Blog Title
              </label>
            </div>
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

          <div className="grid w-full grid-cols-2 space-x-2 py-1 px-1 border ">
            <button
              className={`py-2 px-4 rounded-md bg-white ${
                activeTab === "write"
                  ? "bg-gradient-to-l from-black to-blue-400 text-white left-0 px-6 py-3 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("write")}
            >
              Write
            </button>
            <button
              className={`py-2 px-4 rounded-md bg-white ${
                activeTab === "preview"
                  ? "bg-gradient-to-l from-black to-blue-400 text-white left-0 px-6 py-3 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
          </div>

          {activeTab === "write" && (
            <>
              <div className="flex flex-wrap gap-2 p-2 rounded-t-md bg-gray-100">
                {toolbarActions.map((action) => (
                  <button
                    key={action.action}
                    className="px-3 py-2 border rounded-lg bg-white hover:bg-gray-200 shadow-sm flex items-center gap-2"
                    onClick={() => insertSyntax(action.syntax, action.example)}
                    aria-label={action.label}
                  >
                    {action.icon && <action.icon className="h-4 w-4" />}{" "}
                    {/* <span>{action.label}</span> */}
                  </button>
                ))}
              </div>

              <textarea
                className="w-full h-[calc(100vh-300px)] p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={markdown}
                onChange={handleInputChange}
                placeholder="Write your blog content in Markdown..."
                required
              ></textarea>
            </>
          )}

          {activeTab === "preview" && (
            <div className="w-full h-[calc(100vh-300px)] p-3 border rounded-lg overflow-auto bg-gray-100">
              <ReactMarkdown
                children={markdown}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                className="prose lg:prose-xl"
              />
            </div>
          )}

          {success && (
            <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-4 transition-transform transform duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2l4 -4"
                />
              </svg>
              <p className="flex-1 text-sm">{success}</p>
              <button
                onClick={() => setSuccess("")}
                className="text-white text-xl font-semibold hover:bg-green-700 rounded-full p-1"
              >
                &times;
              </button>
            </div>
          )}

          {error && (
            <div className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-4 transition-transform transform duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v6m-3-3h6"
                />
              </svg>
              <p className="flex-1 text-sm">{error}</p>
              <button
                onClick={() => setError("")}
                className="text-white text-xl font-semibold hover:bg-red-700 rounded-full p-1"
              >
                &times;
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default MarkdownEditor;
