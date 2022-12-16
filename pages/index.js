import Head from "next/head";
import Carousel from "../components/Carousel/Carousel";
import Tabs from "../components/Tabs/Tabs";
import BooksTable from "../components/BooksTable/BooksTable";
import DUMMY_BOOKS from "../dummy_data/dummy_books";

export default function Home() {
    return (
        <>
            <Head>
                <title>PaperText | Web Novels</title>
            </Head>
            <main>
                <Carousel />
                <Tabs>
                    <BooksTable booksList={DUMMY_BOOKS} />
                </Tabs>
            </main>
        </>
    );
}
