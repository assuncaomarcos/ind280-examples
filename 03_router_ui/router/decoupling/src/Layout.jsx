import { Link, Outlet } from "react-router-dom";
import "./styles.css";

function Layout() {
    return (
        <main>
            <nav>
                <Link to="/">Page principal</Link>
                <span> | </span>
                <Link to="/users">Utilisateurs</Link>
                <span> | </span>
                <Link to="/messages">Messages</Link>
            </nav>
            <Outlet />
        </main>
    );
}

export default Layout;