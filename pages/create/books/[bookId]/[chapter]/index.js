import Head from "next/head";
import getServerSideSession from "../../../../../helpers/auth/getServerSideSession";
import AuthorEditChapterPanel from "../../../../../components/AuthorEditChapterPanel/AuthorEditChapterPanel";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function AuthorEditChapter({ chapter }) {
    return (
        <>
            <Head>
                <title>PaperText | Chapter Number</title>
            </Head>
            <AuthorEditChapterPanel chapter={chapter} />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const { session, supabase } = await getServerSideSession(ctx);

    if (!session) {
        return {
            props: {},
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    const { bookId, chapter } = ctx.query;
    const { data: chapterTitle } = await supabase.rpc("get_chapter_title", {
        bk_id: bookId,
        ch_num: chapter,
    });

    const { data } = await supabase.storage
        .from("chapters")
        .download(`${bookId}/${chapter}.txt`);
    const chapterBody = await data.text();

    return {
        props: {
            chapter: {
                title: chapterTitle,
                body: chapterBody,
            },
        },
    };
};
