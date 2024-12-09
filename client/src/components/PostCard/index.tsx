import { useState } from "react";

export default function PostCard({ post }) {
    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState(post.comments);
    const [comment, setComment] = useState("");

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleAddComment = () => {
        if (!comment) return; // Ignore empty comments
        setComments([...comments, { body: comment, date: new Date().toISOString() }]);
        setComment(""); // Clear the input
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <button onClick={handleLike} className="btn btn-primary">
                    Like ({likes})
                </button>
                <div className="mt-3">
                    <input
                        type="text"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="form-control"
                    />
                    <button onClick={handleAddComment} className="btn btn-secondary mt-2">
                        Comment
                    </button>
                </div>
                <ul className="mt-3">
                    {comments.map((c, index) => (
                        <li key={index}>{c.body}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
