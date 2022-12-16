// Takes an object as input via book prop -> {title : string, genres : string array, imgUrl : string}

import Image from "next/image";

/**
 *
 * @param {Object} prop
 * @param {Object} prop.book
 * @param {string} prop.book.title
 * @param {string[]} prop.book.genres
 * @param {string} prop.book.imgUrl
 */
const BooksTableItem = ({ book }) => {
    return (
        <div className="flex space-x-4 bg-base-200">
            <Image
                src={book.img.url}
                width={100}
                height={100}
                alt={book.img.alt || book.title}
            ></Image>
            <div className="flex flex-col content-between">
                <div className="text-xl">{book.title}</div>
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
