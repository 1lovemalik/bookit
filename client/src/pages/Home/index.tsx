import { useState } from "react";
import PostCard from "../../components/PostCard";

const mockPosts = [
    {
        id: "1",
        title: "Looking for '1984'",
        description: "Anyone have recommendations for dystopian books?",
        likes: 0,
        comments: [{ body: "Try 'Brave New World'!", date: new Date().toISOString() }],
    },
    {
        id: "2",
        title: "Best fantasy books?",
        description: "What are some must-read fantasy books?",
        likes: 2,
        comments: [{ body: "The Hobbit is a classic!", date: new Date().toISOString() }],
    },
];

export default function Home() {
    const [posts, setPosts] = useState(mockPosts);

    return (
        <div>
            <h1>Home</h1>
            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4" key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
}
