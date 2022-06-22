import {Route, Routes} from "react-router-dom";
import PublicPage from "../pages/PublicPage";
import Todo from "../pages/Todo";
import LoginPage from "../pages/LoginPage"
import RequireAuth from "../api/RequireAuth"
import AuthStatus from "../api/AuthStatus";

function Router () {
    return (
        <Routes>
                <Route path="/" element={<PublicPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<AuthStatus/>}>
                    <Route
                        path="/todo"
                        element={
                            <RequireAuth>
                                <Todo />
                            </RequireAuth>
                        }
                    />
                </Route>
        </Routes>
    )
}

export default Router