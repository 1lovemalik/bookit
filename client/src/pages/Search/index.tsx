import React, { useState } from "react";

const mockResults = [
    { id: 1, title: "Looking for 'The Great Gatsby'" },
    { id: 2, title: "Does anyone have 'Hamlet'?" },
];

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(mockResults);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Filter mockResults by query
        const filtered = mockResults.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    };

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for books"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="form-control mb-3"
                />
                <button type="submit" className="btn btn-primary">
                    Search
                </button>
            </form>
            <div>
                {results.map((post) => (
                    <p key={post.id}>{post.title}</p>
                ))}
            </div>
        </div>
    );
}
