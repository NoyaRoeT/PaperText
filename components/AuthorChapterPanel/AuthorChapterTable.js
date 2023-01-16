import Link from 'next/link';

const AuthorChapterTable = ({ bookId, chaptersList }) => {
	return (
		<div className='overflow-x-auto w-full my-2'>
			<div className='flex w-full justify-between'>
				<input
					type='text'
					placeholder='Search'
					className='input input-bordered w-full max-w-xs'
				/>
				<button type='button' className='btn'>
					Create
				</button>
			</div>
			<table className='table w-full mt-2'>
				<thead>
					<tr>
						<th>Number</th>
						<th>Title</th>
						<th>Words</th>
						<th>Views</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{chaptersList.map((chapter) => {
						return (
							<tr key={chapter.number}>
								<td>{chapter.number}</td>
								<td>
									<div className='flex items-center space-x-3'>
										<div>
											<div className='font-bold'>
												{chapter.title}
											</div>
										</div>
									</div>
								</td>
								<td>{chapter.num_words}</td>
								<td>{999}</td>
								<th>
									<Link
										href={`/create/books/${bookId}/${chapter.number}`}
									>
										{' '}
										{/* todo: get current book id/slug */}
										<button className='btn btn-ghost btn-md'>
											Edit
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

export default AuthorChapterTable;
