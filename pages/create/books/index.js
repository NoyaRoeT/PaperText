import Head from "next/head";
import getServerSideSession from "../../../helpers/auth/getServerSideSession";
import AuthorBooksPanel from "../../../components/AuthorBookPanel/AuthorBookPanel";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function AuthorBooksPage(props) {
    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorBooksPanel booksList={props.bookPanelData} />
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

    const { user } = session;
    const supabase = createServerSupabaseClient(ctx);
    const { data } = await supabase.rpc("get_author_books_panel_data", {
        user_id: user.id,
    });

    return {
        props: {
            bookPanelData: data,
        },
    };
};
