import Head from "next/head";
import Carousel from "../components/Carousel/Carousel";
import Tabs from "../components/Tabs/Tabs";
import BooksTable from "../components/BooksTable/BooksTable";
import DUMMY_BOOKS from "../dummy_data/dummy_books";

const tabNameArray = ["Most Popular", "Latest Updates"];

export default function Home() {
    return (
        <>
            <Head>
                <title>PaperText | Web Novels</title>
            </Head>
            <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
                <Carousel />
                <Tabs tabNames={tabNameArray}>
                    <BooksTable booksList={[DUMMY_BOOKS[0], DUMMY_BOOKS[1]]} />
                    <BooksTable booksList={[DUMMY_BOOKS[1], DUMMY_BOOKS[2]]} />
                </Tabs>
            </main>
        </>
    );
}
