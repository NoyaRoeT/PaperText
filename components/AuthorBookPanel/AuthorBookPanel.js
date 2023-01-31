import Image from 'next/image';
import Link from 'next/link';

const AuthorBooksPanel = ({
	booksDisplay,
	Increment,
	Decrement,
	currentBookIndex,
	totalBookNum,
	rowLimit,
}) => {
	const tableHeaders = ['Title', 'Chapters', 'Words', 'Views', ''];

	return (
		<>
			<div className='mt-4 flex flex-col rounded-md bg-base-300 p-6'>
				<div className='mb-2 flex flex-row items-center justify-between'>
					<h2 className='text-xl font-medium'>Your Books</h2>

					<Link href='/create/books/new' className='btn-sm btn'>
						Create
					</Link>
				</div>
				<div className='overflow-x-auto'>
					<table className='table w-full'>
						<thead className=''>
							<tr>
								{tableHeaders.map((header, i) => {
									return (
										<th key={i} className='normal-case'>
											{header}
										</th>
									);
								})}
							</tr>
						</thead>

						<tbody>
							{booksDisplay.map((book) => {
								return (
									<tr key={book.id}>
										<td>
											<div className='flex items-center space-x-3'>
												<div className='avatar'>
													<div className='mask mask-squircle h-12 w-12'>
														<Image
															unoptimized
															src={book.image_url}
															alt={book.title}
															width='48'
															height='48'
														/>
													</div>
												</div>
												<div>
													<div className='font-semibold'>
														{book.title}
													</div>
												</div>
											</div>
										</td>
										<td>{book.num_chapters}</td>
										<td>{book.num_words}</td>
										<td>999</td>
										<th>
											<Link
												href={`/create/books/${book.id}`}
											>
												<button className='btn-ghost btn-md btn'>
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
				<div className='mt-4 flex items-center'>
					<label className='ml-1 w-full text-sm'>
						Showing{' '}
						<span className='font-semibold'>
							{currentBookIndex + 1}
						</span>{' '}
						to{' '}
						<span className='font-semibold'>
							{currentBookIndex + (rowLimit + 1) > totalBookNum
								? currentBookIndex +
								  (totalBookNum - currentBookIndex)
								: currentBookIndex + (rowLimit + 1)}
						</span>{' '}
						of <span className='font-semibold'>{totalBookNum}</span>{' '}
						results
					</label>
					<div className='right-0 ml-auto flex w-full flex-row-reverse rounded-sm'>
						<div className='space-x-2'>
							<button
								className='btn-outline btn-sm btn border-gray-400 bg-base-200 hover:bg-base-300 hover:text-base-content dark:border-gray-800 dark:hover:border-gray-700'
								onClick={Decrement}
							>
								Previous page
							</button>
							<button
								className='btn-outline btn-sm btn border-gray-400 bg-base-200 hover:bg-base-300 hover:text-base-content dark:border-gray-800 dark:hover:border-gray-700'
								onClick={Increment}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthorBooksPanel;
