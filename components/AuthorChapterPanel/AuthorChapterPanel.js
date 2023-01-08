import AuthorChapterTable from "./AuthorChapterTable";

const AuthorChapterPanel = ({ bookId, chaptersList }) => {
    return (
        <div className="flex items-center max-w-screen-xl mx-auto my-40 bg-base-300 p-4 rounded-md">
            <AuthorChapterTable bookId={bookId} chaptersList={chaptersList} />
        </div>
    );
};

export default AuthorChapterPanel;
