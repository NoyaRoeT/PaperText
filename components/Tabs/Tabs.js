import BooksTable from "../BooksTable/BooksTable";
import BooksTableItem from "../BooksTable/BooksTableItem";
const Tabs = (props) => {
    return (
        <>
            <div className="tabs text-xl">
                <a className="tab tab-bordered text-xl">Tab 1</a>
                <a className="tab tab-bordered tab-active text-xl">Tab 2</a>
                <a className="tab tab-bordered text-xl">Tab 3</a>
            </div>
            <BooksTable>
                <BooksTableItem></BooksTableItem>
                <BooksTableItem></BooksTableItem>
                <BooksTableItem></BooksTableItem>
            </BooksTable>
        </>
    );
};

export default Tabs;
