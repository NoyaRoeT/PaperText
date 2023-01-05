import Link from "next/link";

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
        <div className="overflow-x-auto w-full my-2">
            <div className="flex w-full justify-between">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full max-w-xs"
                />
                <button type="button" className="btn">
                    Create
                </button>
            </div>
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
                                    <Link
                                        href={`/create/books/1/${book.number}`}
                                    >
                                        {" "}
                                        {/* todo: get current book id/slug */}
                                        <button className="btn btn-ghost btn-md">
                                            Edit
                                        </button>
                                    </Link>
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
