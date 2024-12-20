import Footer from "@components/footer";
import Header from "@components/header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { GetServerSidePropsContext } from "next";

const PracticesPage: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Practices Page</h1>
            <Footer />
        </div>
    );
};

export default PracticesPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    }
}
