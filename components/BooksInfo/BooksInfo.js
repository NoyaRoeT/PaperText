// Accept an object as input via book prop -> {id:string, title:string, author:string, genres: stringArray img: {url: string, alt: string}, synopsis: string}
import Image from "next/image";

const BooksInfo = ({ book }) => {
    return (
        <div className="flex">
            <Image
                src={book.img.url}
                width={250}
                height={500}
                alt={book.img.alt || book.title}
                priority
            ></Image>
            <div className="card card-body bg-base-200">
                <div>
                    <h1 className="font-bold text-4xl">{book.title}</h1>
                </div>
                <div>Author: {book.author}</div>
                <ul className="flex space-x-4">
                    {book.genres.map((genre) => (
                        <li key={genre} className="text-xs btn">
                            {genre}
                        </li>
                    ))}
                </ul>
                <div className="space-x-4">
                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-primary">Add to library</button>
                </div>
            </div>
        </div>
    );
};

export default BooksInfo;
