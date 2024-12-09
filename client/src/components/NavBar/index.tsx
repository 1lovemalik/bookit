import { useLocation } from "react-router-dom";
import SearchBar from "./searchBar.tsx";

export default function NavBar() {
    const { pathname } = useLocation(); // Get the current path

    return (
        <>
            <SearchBar/>
            <div className="sidebar">
                <ul className="nav flex-column">
                    <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className={`nav-item ${pathname.includes("profile") ? "active" : ""}`}>
                        <a href="/profile" className="nav-link">Profile</a>
                    </li>
                    <li className={`nav-item ${pathname.includes("search") ? "active" : ""}`}>
                        <a href="/search" className="nav-link">Search</a>
                    </li>
                    <li className={`nav-item ${pathname.includes("login") ? "active" : ""}`}>
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                    <li className={`nav-item ${pathname.includes("register") ? "active" : ""}`}>
                        <a href="/register" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
