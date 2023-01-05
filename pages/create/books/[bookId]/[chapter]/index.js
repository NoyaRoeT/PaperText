import Head from "next/head";
import getServerSideSession from "../../../../../helpers/auth/getserverSideSession";
import AuthorEditChapterPanel from "../../../../../components/AuthorEditChapterPanel/AuthorEditChapterPanel";

export default function AuthorEditChapter() {
    return (
        <>
            <Head>
                <title>PaperText | Chapter Number</title>
            </Head>
            <AuthorEditChapterPanel />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const session = await getServerSideSession(ctx);

    if (!session) {
        return {
            props: {},
            redirect: {
                permenant: false,
                destination: "/",
            },
        };
    }
};
