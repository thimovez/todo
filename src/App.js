import React from "react";
import Router from "./router/router"
import AuthProvider from "./api/AuthProvider";
import Layout from "./components/Layout";

function App() {
  return (
        <AuthProvider>
            <Router />
        </AuthProvider>
  );
}

export default App

