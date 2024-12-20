import Header from "@components/header"
import Head from "next/head";
import React from "react"
import Footer from "@components/footer";
import HospitalCard from "@components/hospitalCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSidePropsContext } from "next";
const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <meta name="description" content="PlanArts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header></Header>
            <h1 className='text-center'>{t('app.title')}</h1>
            <div className="margin-left-50">
                <HospitalCard></HospitalCard>
            </div>

            <Footer></Footer>
        </>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    }
}

export default Home;