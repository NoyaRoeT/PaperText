import Head from "next/head";
import getServerSideSession from "../../../helpers/auth/getServerSideSession";
import AuthorDashboard from "../../../components/AuthorDashboard/AuthorDashboard";

export default function AuthorBooksPage({ bookPanelData }) {
    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorDashboard bookPanelData={bookPanelData} />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const { session, supabase } = await getServerSideSession(ctx);

    if (!session) {
        return {
            props: {},
            redirect: {
                permenant: false,
                destination: "/",
            },
        };
    }
    const { data } = await supabase.rpc("get_author_book_panel_data");

    return {
        props: {
            bookPanelData: data,
        },
    };
};
