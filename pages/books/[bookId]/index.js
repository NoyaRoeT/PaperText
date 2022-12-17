import BooksInfo from "../../../components/BooksInfo/BooksInfo";
import Tabs from "../../../components/Tabs/Tabs";
import ChaptersTable from "../../../components//ChaptersTable/ChaptersTable";
import DUMMY_BOOKS from "../../../dummy_data/dummy_books";

const Book = ({ bookId }) => {
    const book = DUMMY_BOOKS.find((b) => bookId === b.id);
    return (
        <>
            <BooksInfo book={book} />
            <Tabs>
                <ChaptersTable />
            </Tabs>
        </>
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
