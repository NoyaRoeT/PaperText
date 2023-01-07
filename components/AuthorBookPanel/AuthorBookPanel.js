import AuthorBooksTable from "./AuthorBooksTable";

const AuthorBooksPanel = (props) => {
    return (
        <div className="flex items-center max-w-screen-xl mx-auto my-40">
            <AuthorBooksTable booksList={props.booksList} />
        </div>
    );
};

export default AuthorBooksPanel;
