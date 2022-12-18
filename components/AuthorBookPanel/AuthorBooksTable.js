import Image from "next/image";
import Link from "next/link";

const AuthorBooksTable = () => {
    const testData = [
        {
            title: "Test Book",
            chapters: 333,
            words: 91293,
            views: 8111,
            imgUrl: "/test_img0.webp",
            id: 1,
        },
        {
            title: "Fun story book",
            chapters: 333,
            words: 91293,
            views: 8111,
            imgUrl: "/test_img0.webp",
            id: 1,
        },
        {
            title: "Test Book",
            chapters: 333,
            words: 91293,
            views: 8111,
            imgUrl: "/test_img0.webp",
            id: 1,
        },
        {
            title: "Test Book",
            chapters: 333,
            words: 91293,
            views: 8111,
            imgUrl: "/test_img0.webp",
            id: 1,
        },
    ];

    return (
        <div className="overflow-x-auto w-full">
            <button className="btn">Create</button>
            <table className="table w-full mt-2">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Chapters</th>
                        <th>Words</th>
                        <th>Views</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {testData.map((book, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image
                                                    src={book.imgUrl}
                                                    alt={book.title}
                                                    width="48"
                                                    height="48"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {book.title}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{book.chapters}</td>
                                <td>{book.words}</td>
                                <td>{book.views}</td>
                                <th>
                                    <Link href={`/author/books/${book.id}`}>
                                        <button className="btn btn-ghost btn-md">
                                            Details
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

export default AuthorBooksTable;
