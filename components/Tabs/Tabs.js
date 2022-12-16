import BooksTable from "../BooksTable/BooksTable";
import DUMMY_BOOKS from "../../dummy_data/dummy_books";
const Tabs = (props) => {
    return (
        <>
            <div className="tabs text-xl">
                <a className="tab tab-bordered text-xl">Tab 1</a>
                <a className="tab tab-bordered tab-active text-xl">Tab 2</a>
                <a className="tab tab-bordered text-xl">Tab 3</a>
            </div>
            <BooksTable booksList={DUMMY_BOOKS}></BooksTable>
        </>
    );
};

export default Tabs;
