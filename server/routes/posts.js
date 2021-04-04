import express from 'express';

import { getPosts, CreatePost,updatePost, deletePost,likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', CreatePost);
router.patch('/:id',updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;