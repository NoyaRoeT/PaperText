import BooksInfo from "../../../components/BooksInfo/BooksInfo";
import Tabs from "../../../components/Tabs/Tabs";
import ChaptersTable from "../../../components//ChaptersTable/ChaptersTable";
import supabase from "../../../helpers/supabase";

const Book = ({ bookInfo, chapters }) => {
    const tabNameArray = ["About", "Table of Content"];
    return (
        <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
            <BooksInfo book={bookInfo} />
            <Tabs className="bg-base-200" tabNames={tabNameArray}>
                <div className="p-10">{bookInfo.synopsis}</div>
                <ChaptersTable book={bookInfo} chaptersList={chapters} />
            </Tabs>
        </main>
    );
};

export default Book;

export const getServerSideProps = async (ctx) => {
    const { bookId } = ctx.query;
    const { data: bookInfo } = await supabase.rpc("get_book_info", {
        bk_id: bookId,
    });
    const { data: chapters } = await supabase.rpc("get_chapters_by_book_id", {
        bk_id: bookId,
    });
    return {
        props: {
            bookInfo,
            chapters,
        },
    };
};
