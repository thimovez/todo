import React from "react";
import {AuthContext} from "../context/context";

export default function useAuth() {
    return React.useContext(AuthContext);
}