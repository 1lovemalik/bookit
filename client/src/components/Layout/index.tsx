import NavBar from "../NavBar";
import {Outlet} from "react-router-dom"

export default function Layout( ) {
    return (
        <div>
            <NavBar />
            <main className="content-area">
                <Outlet />
            </main>
        </div>
    );
}
