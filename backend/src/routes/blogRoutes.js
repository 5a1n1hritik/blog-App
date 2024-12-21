const express = require('express');
const { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');

const router = express.Router();

// Public Routes
router.get('/all-blogs', getBlogs);
router.get('/:id/Singleblog', getBlogById);

// Protected Routes
router.post('/new', authenticateUser, checkRole('editor', 'admin'), createBlog);
router.put('/:id/update', authenticateUser, checkRole('editor', 'admin'), updateBlog);
router.delete('/:id/delete', authenticateUser, checkRole('admin'), deleteBlog);

module.exports = router;

