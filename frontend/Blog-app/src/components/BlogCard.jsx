import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => (
  <div className="border p-4 rounded-lg shadow">
    <h2 className="text-xl font-bold">{blog.title}</h2>
    <p className="text-gray-700 mt-2">{blog.excerpt}</p>
    <Link to={`/blogs/${blog._id}`} className="text-blue-500 mt-4 block">
      Read More
    </Link>
  </div>
);

export default BlogCard;
