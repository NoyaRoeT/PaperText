import supabase from '../../helpers/supabase';
import Head from 'next/head';
import AdvancedSearch from '../../components/AdvancedSearch/AdvancedSearch';
import BooksTable from '../../components/BooksTable/BooksTable';

export default function Browse(props) {
	return (
		<>
			<Head>
				<title>PaperText | Browse Novels</title>
			</Head>
			<main className='mx-auto mt-10 mb-20 max-w-screen-xl space-y-4'>
				<AdvancedSearch />
				<BooksTable booksList={props.booksList}></BooksTable>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await supabase.rpc('get_all_books');

	return {
		props: {
			booksList: res.data,
		},
		revalidate: 10,
	};
};
