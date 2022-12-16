const BooksTable = (props) => {
    const classList = `${props.className} space-y-2`;
    return <div className={classList}>{props.children}</div>;
};

export default BooksTable;
