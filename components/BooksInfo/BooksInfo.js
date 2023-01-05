import Image from "next/image";

/**
 *
 * @param {Object} prop
 * @param {Object} prop.book
 * @param {number} prop.book.id
 * @param {string} prop.book.author
 * @param {string} prop.book.title
 * @param {string} prop.book.genre
 * @param {string[]} prop.book.tags
 * @param {string} prop.book.synopsis
 * @param {string} prop.book.image_url
 */

const BooksInfo = ({ book }) => {
    return (
        <div className="flex">
            <Image
                unoptimized
                src={book.image_url}
                width={250}
                height={500}
                alt={book.title}
                priority
            ></Image>
            <div className="card card-body bg-base-200">
                <div>
                    <h1 className="font-bold text-4xl">{book.title}</h1>
                </div>

                <div>Author: {book.author}</div>

                <div>
                    <span className="mr-2">Genre:</span>
                    <button className="btn">{book.genre}</button>
                </div>

                <div>
                    <ul className="flex space-x-4 items-center">
                        <li>Tags:</li>
                        {book.tags.map((t) => (
                            <li className="rounded-md bg-zinc-900 py-1 px-2">
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-x-4">
                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-primary">Add to library</button>
                </div>
            </div>
        </div>
    );
};

export default BooksInfo;
