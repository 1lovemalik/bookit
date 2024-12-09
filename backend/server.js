const User = require("./models/User");
const Post = require("./models/Post");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

console.log("User and Post models loaded successfully");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Use Routes
app.use("/api/auth", authRoutes); // Auth routes
app.use("/api/posts", postRoutes); // Post routes

// Start Server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
