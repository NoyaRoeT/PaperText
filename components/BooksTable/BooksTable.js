import BooksTableItem from './BooksTableItem';

const BooksTable = (props) => {
	return (
		<div className='space-y-2'>
			{props.booksList.map((b) => (
				<BooksTableItem key={b.id} book={b} />
			))}
		</div>
	);
};

export default BooksTable;
