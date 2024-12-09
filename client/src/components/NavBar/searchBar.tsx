import {useState} from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState(""); // State for search input

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(`Search Term: ${searchTerm}`); // Replace with your search logic
    };

    return (<nav className="navbar navbar-inverse navbar-fixed-top search-bar">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">
                    <img src="../../../images/bookICon.jpg" alt="bookICon" width={50} height={50}/>
                </a>
            </div>
            <span className="font-monospace text-center"> Welcome to BookIt!

            </span>

            <form className="navbar-form navbar-right" onSubmit={handleSearch}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    </nav>);
}
