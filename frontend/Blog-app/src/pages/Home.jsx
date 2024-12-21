import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../api";
import BlogCard from "../components/BlogCard";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const blogsPerPage = 5;

  // Fetch blogs with pagination and search query
  const loadBlogs = async (page, search) => {
    setLoading(true);
    try {
      const response = await fetchBlogs(page, blogsPerPage, search);
      setBlogs(response.data);
      setTotalPages(response.pagination.totalPages);
    } catch (err) {
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  // Handler for search input change (this will be used to dynamically update the search query)
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  useEffect(() => {
    loadBlogs(currentPage, searchQuery); // Load blogs based on current search query
  }, [currentPage, searchQuery]);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-6 flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search blogs..."
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        {/* No submit button needed, we trigger search as the user types */}
      </div>

      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className="text-gray-600">{blog.author || "Unknown Author"}</p>
            <p className="mt-2">
              {blog.content
                ? blog.content.substring(0, 100)
                : "No content available"}
              ...
            </p>
            <Link to={`/blogs/${blog._id}`}>
              <button className="mt-4 text-blue-500 hover:underline">
                Read More
              </button>
            </Link>
          </div>
        ))
      )}

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
