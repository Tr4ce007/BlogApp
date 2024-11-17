import express from 'express';

import { getBlogsBySearch, getBlogs, getBlog, createBlog, updateBlog, deleteBlog, likeBlog } from '../controllers/blogs.js';

const router = express.Router();
import auth from "../middleware/auth.js";

// Routes available for blogs

router.get('/search', getBlogsBySearch);// Search for blogs
router.get('/', getBlogs);// Get all blogs
router.get('/:id', getBlog);// Get a specific blog
router.post('/', auth, createBlog);// Create a new blog
router.patch('/:id', auth, updateBlog);// Update a blog
router.delete('/:id', auth, deleteBlog);// Delete a specific blog
router.patch('/:id/likeBlog', auth, likeBlog);// Like a blog

export default router;