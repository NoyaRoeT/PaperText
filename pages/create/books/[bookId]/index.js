import Head from 'next/head';
import getServerSideSession from '../../../../helpers/auth/getServerSideSession';
import AuthorChapterPanel from '../../../../components/AuthorChapterPanel/AuthorChapterPanel';

export default function AuthorBooks({ bookId, chaptersList }) {
	return (
		<>
			<Head>
				<title>{`PaperText | ${bookId}`}</title>
			</Head>
			<AuthorChapterPanel bookId={bookId} chaptersList={chaptersList} />
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	const { session, supabase } = await getServerSideSession(ctx);

	if (!session) {
		return {
			props: {},
			redirect: {
				permenant: false,
				destination: '/',
			},
		};
	}

	const { bookId } = ctx.query;
	const { data: chapterPanelData } = await supabase.rpc(
		'get_author_chapter_panel_data',
		{
			bk_id: bookId,
		}
	);

	return {
		props: {
			bookId,
			chaptersList: chapterPanelData,
		},
	};
};
