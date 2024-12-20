import Header from "@components/header";
import React, { useState } from "react";
import UserService from "../../services/UserService"; // Adjust the import path as necessary
import Footer from "@components/footer";
import UserRegistrationForm from "@components/users/UserRegistrationForm";

const RegisterPage: React.FC = () => {
    return (
        <div>
            <Header />
            <UserRegistrationForm />
            <Footer />
        </div>
    );
};

export default RegisterPage;