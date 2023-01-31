import Link from 'next/link';

const AuthorChapterTable = ({ bookId, chaptersList }) => {
	return (
		<div className='my-2 w-full overflow-x-auto'>
			<div className='flex w-full justify-between'>
				<input
					type='text'
					placeholder='Search'
					className='input-bordered input w-full max-w-xs'
				/>
				<button type='button' className='btn'>
					Create
				</button>
			</div>
			<table className='mt-2 table w-full'>
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
										<button className='btn-ghost btn-md btn'>
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
