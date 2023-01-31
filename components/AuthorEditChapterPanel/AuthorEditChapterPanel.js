const AuthorEditChapterPanel = ({ chapter }) => {
	return (
		<div className='mx-auto flex flex-col px-6 py-6'>
			<div className='mb-4 flex items-center gap-3'>
				<h1 className='text-scale-1200 text-white text-2xl'>
					Edit Chapter
				</h1>
			</div>
			<div className='flex h-full flex-grow flex-col gap-4'>
				<div className='rounded border'>
					<input
						type='text'
						placeholder='Chapter Title'
						className='input w-full'
						defaultValue={chapter.title}
					/>
				</div>
				<div className='relative flex flex-grow flex-col'>
					<textarea
						className='border-white textarea'
						placeholder='Chapter content'
						defaultValue={chapter.body}
					></textarea>
				</div>
				<div className='flex w-full justify-between'>
					<button className='btn'>Edit</button>
					<button className='btn'>Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default AuthorEditChapterPanel;
