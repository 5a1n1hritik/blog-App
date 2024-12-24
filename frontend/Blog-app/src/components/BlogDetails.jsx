// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import { fetchBlogById } from '../api';

// function BlogDetails() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getBlog = async () => {
//       try {
//         const fetchedBlog = await fetchBlogById(id);
//         if (fetchedBlog) {
//           setBlog(fetchedBlog);
//         } else {
//           setError('Blog not found');
//         }
//       } catch (err) {
//         console.error('Error fetching blog:', err);
//         setError('Failed to fetch blog details');
//       }
//       setLoading(false);
//     };
//     getBlog();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   if (!blog) return <p className="text-red-500">No blog details found</p>;

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-4">{blog.title || 'Untitled'}</h1>
//       <ReactMarkdown className="prose">{blog.content || 'No content available'}</ReactMarkdown>
//       <p className="mt-4 text-gray-600">Author: {blog.author || 'Unknown'}</p>
//     </div>
//   );
// }

// export default BlogDetails;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../api/blogService';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data.data);
      } catch (error) {
        console.error('Error fetching blog:', error.message);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.renderedContent }}
      ></div>
    </div>
  );
};

export default BlogDetails;
