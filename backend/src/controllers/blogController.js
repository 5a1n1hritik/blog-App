const Blog = require("../models/Blog");
const mongoose = require("mongoose");
const { marked } = require("marked");

exports.getBlogs = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  try {
    const searchQuery = search ? { $text: { $search: search } } : {};

    const blogs = await Blog.find(searchQuery)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const totalBlogs = await Blog.countDocuments(searchQuery);
    const totalPages = Math.ceil(totalBlogs / limit);

    res.status(200).json({
      success: true,
      data: blogs,
      pagination: {
        totalBlogs,
        totalPages,
        currentPage: Number(page),
        blogsPerPage: Number(limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, content are required",
      });
    }

    const renderedContent = marked(content);

    const newBlog = new Blog({
      title,
      content,
      renderedContent,
      author: req.user.id,
    });

    await newBlog.save();
    res.status(201).json({ success: true, data: newBlog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Blog ID format" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title, content are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Blog ID format" });
    }

    const renderedContent = marked(content);

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, renderedContent },
      { new: true }
    );

    if (!updatedBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Blog ID format" });
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
