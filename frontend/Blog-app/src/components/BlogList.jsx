import { useState, useEffect } from "react";
import { getBlogs } from "../api/blogService";
import BlogCard from "../components/BlogCard";
import SkeletonLoader from "../components/SkeletonLoader";
import Pagination from "../components/Pagination";

let debounceTimeout;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const fetchBlogs = async (page, searchTerm = "") => {
    setLoading(true);
    try {
      const data = await getBlogs(page, 10, searchTerm);
      setBlogs(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      fetchBlogs(1, searchValue);
      setPagination({ currentPage: 1 });
    }, 500);
  };

  const handlePageChange = (page) => {
    fetchBlogs(page, search);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full"
        placeholder="Search blogs..."
        value={search}
        onChange={handleSearchChange}
      />

      {loading ? (
        <SkeletonLoader count={6} />
      ) : (
        <>
          {blogs.length === 0 ? (
            <p className="text-gray-500">
              {search
                ? `No blogs found for "${search}"`
                : "No blogs available."}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </>
      )}

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
