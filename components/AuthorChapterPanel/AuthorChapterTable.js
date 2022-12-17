const AuthorChapterTable = () => {
    const testData = [
        {
            title: "Chapter 1",
            number: 1,
            words: 650,
            views: 8111,
        },
        {
            title: "Chapter 2",
            number: 2,
            words: 650,
            views: 8111,
        },
        {
            title: "Chapter 3",
            number: 3,
            words: 600,
            views: 8111,
        },
        {
            title: "Chapter 4",
            number: 4,
            words: 555,
            views: 8111,
        },
        {
            title: "Chapter 5",
            number: 5,
            words: 655,
            views: 8111,
        },
    ];

    return (
        <div className="overflow-x-auto w-full">
            <button className="btn">Create</button>
            <table className="table w-full mt-2">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Words</th>
                        <th>Views</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((book, i) => {
                        return (
                            <tr key={i}>
                                <td>{book.number}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">
                                                {book.title}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{book.words}</td>
                                <td>{book.views}</td>
                                <th>
                                    <button className="btn btn-ghost btn-md">
                                        View
                                    </button>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorChapterTable;
