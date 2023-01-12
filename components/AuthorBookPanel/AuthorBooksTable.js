import Image from "next/image";
import Link from "next/link";

const AuthorBooksTable = (props) => {
    return (
        <div className="overflow-x-auto w-full">
            <Link href="/create/books/new" className="btn">
                Create
            </Link>
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
                    {props.booksList.map((book) => {
                        return (
                            <tr key={book.id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image
                                                    unoptimized
                                                    src={book.image_url}
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
                                <td>{book.num_chapters}</td>
                                <td>{book.num_words}</td>
                                <td>999</td>
                                <th>
                                    <Link href={`/create/books/${book.id}`}>
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
