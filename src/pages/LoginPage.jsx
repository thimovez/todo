import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
    let navigate = useNavigate();
    let auth = useAuth();

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            navigate("/todo", { replace: true });
        });
    }

    return (
        <div>
            <p>You must log in to view the page at /todo</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="email" />
                </label>{" "}
                <label>
                    Password: <input name="password" type="password" />
                </label>{" "}

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage