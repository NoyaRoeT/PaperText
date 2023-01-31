import AuthorChapterTable from './AuthorChapterTable';

const AuthorChapterPanel = ({ bookId, chaptersList }) => {
	return (
		<div className='mx-auto my-40 flex max-w-screen-xl items-center rounded-md bg-base-300 p-4'>
			<AuthorChapterTable bookId={bookId} chaptersList={chaptersList} />
		</div>
	);
};

export default AuthorChapterPanel;
