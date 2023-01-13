import Head from "next/head";
import AuthorDashboard from "../../../components/AuthorDashboard/AuthorDashboard";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import usePagination from "../../../helpers/usePagination";

export default function AuthorBooksPage() {
    const supabase = useSupabaseClient();

    const [booksDisplay, setBooksDisplay] = useState([]);
    const [totalBookNum, setTotalBookNum] = useState(0);

    useEffect(() => {
        const getTotalBooks = async () => {
            const { data } = await supabase.rpc("get_num_books_by_author");
            setTotalBookNum(data);
        };
        getTotalBooks();
    }, []);

    const rowLimit = 4;

    const [currentBookIndex, Increment, Decrement] = usePagination(
        totalBookNum,
        rowLimit
    );

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await supabase
                .rpc("get_author_book_panel_data")
                .order("created_at", { ascending: false })
                .range(currentBookIndex, currentBookIndex + rowLimit);

            setBooksDisplay(data);
        };

        fetchBooks();
    }, [currentBookIndex]);

    useEffect(() => {
        Increment();
    }, []);

    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorDashboard
                {...{
                    booksDisplay,
                    Increment,
                    Decrement,
                    currentBookIndex,
                    totalBookNum,
                }}
            />
        </>
    );
}
