import BooksInfo from "../../../components/BooksInfo/BooksInfo";
import Tabs from "../../../components/Tabs/Tabs";
import ChaptersTable from "../../../components//ChaptersTable/ChaptersTable";
import supabase from "../../../helpers/client/supabaseClient";

const TEST_CHAPTERS = [
    { number: 1, title: "Test Chapter 1" },
    { number: 2, title: "Test Chapter 2" },
    { number: 3, title: "Test Chapter 3" },
];

const Book = ({ book }) => {
    const tabNameArray = ["About", "Table of Content"];
    return (
        <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
            <BooksInfo book={book} />
            <Tabs className="bg-base-200" tabNames={tabNameArray}>
                <div className="p-10">{book.synopsis}</div>
                <ChaptersTable book={book} chaptersList={TEST_CHAPTERS} />
            </Tabs>
        </main>
    );
};

export default Book;

export const getServerSideProps = async (ctx) => {
    const { bookId } = ctx.query;
    const { data } = await supabase.rpc("get_book", { book_id: bookId });
    return {
        props: {
            book: data,
        },
    };
};
