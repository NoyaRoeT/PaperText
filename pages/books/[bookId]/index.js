import BooksInfo from "../../../components/BooksInfo/BooksInfo";
import Tabs from "../../../components/Tabs/Tabs";
import ChaptersTable from "../../../components//ChaptersTable/ChaptersTable";
import supabase from "../../../helpers/supabaseClient";

const Book = ({ book, chapters }) => {
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

export const getServerSideProps = async (ctx) => {
    const { bookId } = ctx.query;
    const { data: book } = await supabase.rpc("get_book_by_id", {
        bk_id: bookId,
    });
    const { data: chapters } = await supabase.rpc("get_chapters_by_book_id", {
        bk_id: bookId,
    });
    console.log(chapters);
    return {
        props: {
            book,
            chapters,
        },
    };
};
