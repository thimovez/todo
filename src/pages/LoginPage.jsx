import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {Link} from "react-router-dom";
import {useState} from "react";
import AuthStatus from "../api/AuthStatus";

function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");
        auth.signin(username, () => {
            navigate(from, { replace: true });
        });

    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                     Name: <input name="text" type="text" />
                </label>{" "}
                <label>
                     Password: <input name="text" type="text" />
                </label>{" "}
                <button type="submit">
0                    submit
                </button>
            </form>
        </div>
    );
}

export default LoginPage