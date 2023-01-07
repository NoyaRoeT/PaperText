import Head from "next/head";
import getServerSideSession from "../../../../helpers/auth/getServerSideSession";
import AuthorChapterPanel from "../../../../components/AuthorChapterPanel/AuthorChapterPanel";

export default function AuthorBooks({ bookId }) {
    return (
        <>
            <Head>
                <title>{`PaperText | ${bookId}`}</title>
            </Head>
            <AuthorChapterPanel />
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

    const { bookId } = ctx.query;

    return {
        props: {
            bookId,
        },
    };
};
