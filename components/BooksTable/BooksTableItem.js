import Image from "next/image";
import Link from "next/link";
/**
 *
 * @param {Object} prop
 * @param {Object} prop.book
 * @param {string} prop.book.id
 * @param {string} prop.book.title
 * @param {string[]} prop.book.genres
 * @param {string} prop.book.imgUrl
 */
const BooksTableItem = ({ book }) => {
    return (
        <div className="flex space-x-4 bg-base-200 p-4 rounded-md">
            <Image
                src={book.img.url}
                width={150}
                height={100}
                alt={book.img.alt || `${book.title}'s image`}
                className="rounded-md"
            ></Image>
            <div className="flex flex-col content-between">
                <Link
                    href={`/books/${book.id}`}
                    className="text-xl link link-hover"
                >
                    {book.title}
                </Link>
                <ul className="flex space-x-4">
                    {book.genres.map((genre) => (
                        <li key={genre} className="text-xs btn">
                            {genre}
                        </li>
                    ))}
                </ul>
                <div>{book.synopsis}</div>
            </div>
        </div>
    );
};

export default BooksTableItem;
