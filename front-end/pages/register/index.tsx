import Header from "@components/header";
import React, { useState } from "react";
import Footer from "@components/footer";
import UserRegistrationForm from "@components/users/UserRegistrationForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";

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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    }
}
