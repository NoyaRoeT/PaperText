import Head from "next/head";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import BooksTable from "../components/BooksTable/BooksTable";
import DUMMY_BOOKS from "../dummy_data/dummy_books";
export default function Browse() {
    return (
        <>
            <Head>
                <title>PaperText | Browse Novels</title>
            </Head>
            <AdvancedSearch />
            <BooksTable booksList={DUMMY_BOOKS}></BooksTable>
        </>
    );
}
