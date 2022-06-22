import React from 'react';
import { Navigate} from "react-router-dom";
import AuthStatus from "../api/AuthStatus";

const PublicPage = () => {
    return (
        <div>
            <AuthStatus/>
            <h1>Public Page</h1>
            <Navigate to="/login"/>
        </div>
    );
};

export default PublicPage;
