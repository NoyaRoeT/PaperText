import Head from "next/head";
import AuthorChapterPanel from "../../../../components/AuthorChapterPanel/AuthorChapterPanel";

export default function AuthorBooks({ bookId }) {
    console.log(bookId);

    return (
        <>
            <Head>
                <title>PaperText | Book Name</title>
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
