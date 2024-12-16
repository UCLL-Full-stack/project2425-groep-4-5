import Footer from "@components/footer";
import Header from "@components/header";
import UserLoginForm from "@components/users/UserLoginForm";
import React from "react";
import { Nav } from "react-bootstrap";

const Login: React.FC = () => {
    return (
        <div>
            <Header />
            <UserLoginForm />
            <Footer />
        </div>
    );
};

export default Login;