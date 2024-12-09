
export default function Profile() {
    const user = { username: "booklover", email: "booklover@example.com" };
    const userPosts = [
        { id: 1, title: "Looking for 'Moby Dick'" },
        { id: 2, title: "Can someone recommend 'Pride and Prejudice'?" },
    ];

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
            <h2>Your Posts</h2>
            <ul>
                {userPosts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
