import React, { useState } from 'react';
import { createBlog } from '../api';
import MarkdownEditor from '../components/MarkdownEditor';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      setMessage('Please fill in all fields');
      return;
    }

    const result = await createBlog({ title, content, author });

    if (result.error) {
      setMessage(`Error: ${result.error}`);
    } else {
      setMessage('Blog created successfully!');
    }
  };

  return (
    <div className="p-6 space-y-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <MarkdownEditor value={content} onChange={setContent} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Blog
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default CreateBlog;
