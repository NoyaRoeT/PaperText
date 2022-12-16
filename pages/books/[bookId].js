import { useRouter } from "next/router";
import BooksInfo from "../../components/BooksInfo/BooksInfo";
import Tabs from "../../components/Tabs/Tabs";
import ChaptersTable from "../../components//ChaptersTable/ChaptersTable";
import DUMMY_BOOKS from "../../dummy_data/dummy_books";

const Book = (props) => {
    const router = useRouter();
    const { bookId } = router.query;

    if (!bookId) {
        return <></>;
    }

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
