import { useState, useEffect } from "react";
import { getBlogs } from "../api/blogService";
import BlogCard from "../components/BlogCard";
import SkeletonLoader from "../components/SkeletonLoader";
import Pagination from "../components/Pagination";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

let debounceTimeout;

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    author: "Hritik Saini",
    date: "2025-01-15",
    category: "Web Development",
    img: "https://i.pinimg.com/736x/ff/53/b9/ff53b9536227d518d5165a5fb44b9a37.jpg",
  },
  {
    id: 2,
    title: "The Power of TypeScript",
    excerpt:
      "Discover why TypeScript is becoming the go-to language for large-scale applications",
    author: "Hritik Saini",
    date: "2024-01-10",
    category: "Programming",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20241018/pngtree-angular-typescript-image_16287392.jpg",
  },
  {
    id: 3,
    title: "Rust: The Future of Systems Programming",
    excerpt:
      "Explore the features that make Rust a safe and efficient language",
    author: "Hritik Saini",
    date: "2024-01-05",
    category: "Systems Programming",
    img: "https://c4.wallpaperflare.com/wallpaper/676/293/313/programmer-wallpaper-preview.jpg",
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    excerpt:
      "A beginner's guide to implementing machine learning algorithms in Python",
    author: "Hritik Saini",
    date: "2023-12-28",
    category: "Data Science",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzRapXUFF_LqUIJyBN9iuQb5378rEMqJSi1g21FwZGb404fZtRkz4Pzneaw0_EofFQl8&usqp=CAU",
  },
];

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [featuredPost] = useState(blogPosts[0]);

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
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm sticky top-16 z-10">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Hritik's Tech Blog 💻✍️
              </h1>
              <div>
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search blogs..."
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-5 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Post 🌟</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/09/38/60/76/360_F_938607629_M6uplQi8IsZowWESL8h8Y6KP5tnoP1Dj.jpg"
              alt="featured post"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-2" />
                <span>{featuredPost.author}</span>
                <Calendar className="w-4 h-4 ml-4 mr-2" />
                <span>{featuredPost.date}</span>
              </div>
              <Link
                href={`/blog/${featuredPost.id}`}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-5">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts 📚</h2>
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.category}</span>
                          <span>{post.date}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="mt-2 inline-flex items-center text-blue-600 hover:underline"
                        >
                          Read more <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">All Posts 📚</h2>
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

          <div className="mt-5">
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
