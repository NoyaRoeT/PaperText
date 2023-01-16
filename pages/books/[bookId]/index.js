import BooksInfo from '../../../components/BooksInfo/BooksInfo';
import Tabs from '../../../components/Tabs/Tabs';
import ChaptersTable from '../../../components//ChaptersTable/ChaptersTable';
import supabase from '../../../helpers/supabase';
import { useRouter } from 'next/router';

const Book = ({ bookInfo, chapters }) => {
	const router = useRouter();

	if (router.isFallback) return null;

	const tabNameArray = ['About', 'Table of Content'];
	return (
		<main className='max-w-screen-xl mx-auto space-y-4 mt-10 mb-20'>
			<BooksInfo book={bookInfo} />
			<Tabs className='bg-base-200' tabNames={tabNameArray}>
				<div className='p-10'>{bookInfo.synopsis}</div>
				<ChaptersTable book={bookInfo} chaptersList={chapters} />
			</Tabs>
		</main>
	);
};

export default Book;

export const getStaticPaths = async () => {
	const { data } = await supabase.rpc('get_all_books');

	const paths = data.map((book) => ({
		params: { bookId: book.id.toString() },
	}));

	return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
	const { bookId } = params;

	const { data: bookInfo } = await supabase.rpc('get_book_info', {
		bk_id: bookId,
	});

	const { data: chapters } = await supabase.rpc('get_chapters_by_book_id', {
		bk_id: bookId,
	});

	return {
		props: {
			bookInfo,
			chapters,
		},
		revalidate: 10,
	};
};
