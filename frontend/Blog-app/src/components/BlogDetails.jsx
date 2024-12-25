import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getBlogById } from '../api/blogService';
import remarkGfm from 'remark-gfm'; 
import rehypeRaw from 'rehype-raw'; 

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await getBlogById(id);
        if (response?.success && response.data) {
          setBlog(response.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to fetch blog details');
      }
      setLoading(false);
    };
    getBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-medium text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-600">No blog details found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 max-w-4xl p-8 bg-white shadow-lg rounded-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.title || 'Untitled'}</h1>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <p className="font-semibold text-gray-800">{blog.author || 'Unknown'}</p>
          <span>&bull;</span>
          <p>{new Date(blog.createdAt).toLocaleDateString() || 'Date not available'}</p>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700">
        <ReactMarkdown
          children={blog.content || 'No content available'}
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]} 
        />
      </div>

      <div className="mt-8 flex justify-end text-sm text-gray-500">
        <p>Last updated on: {new Date(blog.updatedAt).toLocaleString() || 'Unknown'}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
