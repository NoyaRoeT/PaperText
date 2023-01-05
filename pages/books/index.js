import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import AdvancedSearch from "../../components/AdvancedSearch/AdvancedSearch";
import BooksTable from "../../components/BooksTable/BooksTable";

export default function Browse(props) {
    return (
        <>
            <Head>
                <title>PaperText | Browse Novels</title>
            </Head>
            <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
                <AdvancedSearch />
                <BooksTable booksList={props.booksList}></BooksTable>
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data } = await supabase.rpc("get_all_books");
    return {
        props: {
            booksList: data,
        },
        revalidate: 5,
    };
};
