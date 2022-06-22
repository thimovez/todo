import AuthStatus from "../api/AuthStatus";
import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/todo">Todo Page</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}