import Head from "next/head";
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

export const getServerSideProps = (ctx) => {
    const { bookId } = ctx.query;

    return {
        props: {
            bookId,
        },
    };
};
