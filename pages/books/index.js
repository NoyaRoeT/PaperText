import Head from "next/head";
import AdvancedSearch from "../../components/AdvancedSearch/AdvancedSearch";
import BooksTable from "../../components/BooksTable/BooksTable";
import DUMMY_BOOKS from "../../dummy_data/dummy_books";

export default function Browse() {
    return (
        <>
            <Head>
                <title>PaperText | Browse Novels</title>
            </Head>
            <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
                <AdvancedSearch />
                <BooksTable booksList={DUMMY_BOOKS}></BooksTable>
            </main>
        </>
    );
}
