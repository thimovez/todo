import React from 'react';
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./form.scss"

const Form = () => {
    let navigate = useNavigate();
    let auth = useAuth();

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("name");

        auth.signin(username, () => {
            navigate("/todo", { replace: true });
        });
    }

    return (
        <div>
            <div className="wrapper">
                <form className="form" onSubmit={handleSubmit}>
                    <label className="form__label">
                        <p>Name:</p>
                        <input className="form__input" name="name" type="text" />
                    </label>{" "}
                    <label className="form__label">
                        <p>Password:</p>
                        <input className="form__input" name="password" type="password" />
                    </label>{" "}

                    <button className="login-button" type="submit">
                        Login
                    </button>
                    <a className="forgot-password" href="#">
                        Forgot Password
                    </a>
                    <button className="registration">
                        <a href="#">
                            Register now
                        </a>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;