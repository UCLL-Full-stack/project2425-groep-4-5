import Header from "@components/header"
import Head from "next/head";
import React from "react"
const Home: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="description" content="PlanArts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>
            <Header></Header>
        </>
    )
}

export default Home;