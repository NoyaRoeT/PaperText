import Head from "next/head";
import getServerSideSession from "../../../helpers/auth/getServerSideSession";
import AuthorBooksPanel from "../../../components/AuthorBookPanel/AuthorBookPanel";

export default function AuthorBooksPage() {
    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorBooksPanel />
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

    return {
        props: {},
    };
};
