import Link from "next/link";

const ChaptersTable = ({ chaptersList }) => {
    const chaptersListElements = chaptersList.map((ch) => {
        return (
            <li key={ch.number} className="bg-base-200 px-8 py-4">
                <Link href={`/books/${ch.book_id}/${ch.number}`}>
                    Chapter {ch.number}: {ch.title}
                </Link>
            </li>
        );
    });
    return <ul className="bg-base-200">{chaptersListElements}</ul>;
};

export default ChaptersTable;
