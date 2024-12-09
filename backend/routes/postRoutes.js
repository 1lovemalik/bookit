const express = require("express");
const Post = require("../models/Post");
const authenticateToken = require("../middleware/authMiddleware"); // Import auth middleware
const router = express.Router();

// Test Route
router.get("/test", (req, res) => {
    res.send("Post route is working!");
});

// Create a new post (Protected)
router.post("/", authenticateToken, async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const post = new Post({ title, description, likes: 0, comments: [] });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: "Error creating post" });
    }
});

// Fetch all posts (Public)
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: "Error fetching posts" });
    }
});

// Like a post (Protected)
router.post("/:id/like", authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        post.likes += 1;
        await post.save();
        res.status(200).json({ likes: post.likes });
    } catch (err) {
        res.status(500).json({ message: "Error liking post" });
    }
});

// Add a comment (Protected)
router.post("/:id/comment", authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const { body } = req.body;
        if (!body) return res.status(400).json({ message: "Comment body is required" });

        post.comments.push({ body, date: new Date() });
        await post.save();
        res.status(200).json(post.comments);
    } catch (err) {
        res.status(500).json({ message: "Error adding comment" });
    }
});

// Get comments for a post (Public)
router.get("/:id/comments", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json(post.comments);
    } catch (err) {
        res.status(500).json({ message: "Error fetching comments" });
    }
});

module.exports = router;
