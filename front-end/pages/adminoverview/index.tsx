import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AdminOverview: React.FC = () => {
    return (
        <div>
            Admin Overview
        </div>
    );
}

export default AdminOverview;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context;

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    }
}
