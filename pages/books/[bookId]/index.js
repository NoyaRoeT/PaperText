import BooksInfo from "../../../components/BooksInfo/BooksInfo";
import Tabs from "../../../components/Tabs/Tabs";
import ChaptersTable from "../../../components//ChaptersTable/ChaptersTable";
import DUMMY_BOOKS from "../../../dummy_data/dummy_books";
import DUMMY_CHAPTERS from "../../../dummy_data/dummy_chapters";

const Book = ({ bookId }) => {
    const book = DUMMY_BOOKS.find((b) => bookId === b.id);
    const chapters = DUMMY_CHAPTERS.filter((ch) => ch.bookId === book.id);
    const tabNameArray = ["About", "Table of Content"];
    return (
        <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
            <BooksInfo book={book} />
            <Tabs className="bg-base-200" tabNames={tabNameArray}>
                <div className="p-10">{book.synopsis}</div>
                <ChaptersTable book={book} chaptersList={chapters} />
            </Tabs>
        </main>
    );
};

export default Book;

export const getServerSideProps = (ctx) => {
    return {
        props: {
            bookId: ctx.query.bookId,
        },
    };
};
