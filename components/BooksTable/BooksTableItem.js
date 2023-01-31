import Image from 'next/image';
import Link from 'next/link';
/**
 *
 * @param {Object} prop
 * @param {Object} prop.book
 * @param {number} prop.book.id
 * @param {string} prop.book.title
 * @param {string} prop.book.genre
 * @param {string[]} prop.book.tags
 * @param {string} prop.book.synopsis
 * @param {string} prop.book.image_url
 */
const BooksTableItem = ({ book }) => {
	return (
		<div className='flex space-x-4 rounded-md bg-base-200 p-4'>
			<Image
				unoptimized
				src={book.image_url}
				width={150}
				height={100}
				alt={`${book.title}'s image`}
				className='rounded-md'
			></Image>
			<div className='flex flex-col content-between'>
				<Link
					href={`/books/${book.id}`}
					className='link-hover link text-xl'
				>
					{book.title}
				</Link>
				<div>
					<button className='btn text-xs'>{book.genre}</button>
				</div>
				<div>{book.synopsis}</div>
			</div>
		</div>
	);
};

export default BooksTableItem;
