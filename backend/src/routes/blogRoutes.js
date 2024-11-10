const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');

router.get('/all-/blogs', getBlogs);
router.post('/new', createBlog);
router.get('/:id/Singleblog', getBlogById);
router.put('/:id/update', updateBlog);
router.delete('/:id/delete', deleteBlog);

module.exports = router;

