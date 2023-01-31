import AuthorBooksPanel from '../AuthorBookPanel/AuthorBookPanel';
import StatCard from './StatCard';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import usePagination from '../../helpers/usePagination';

const AuthorDashboard = () => {
	const supabase = useSupabaseClient();

	const [booksDisplay, setBooksDisplay] = useState([]);
	const [totalBookNum, setTotalBookNum] = useState(0);

	const rowLimit = 4;

	const [currentBookIndex, Increment, Decrement] = usePagination(
		totalBookNum,
		rowLimit
	);

	useEffect(() => {
		const getTotalBooks = async () => {
			const { data } = await supabase.rpc('get_num_books_by_author');
			setTotalBookNum(data);
		};
		getTotalBooks();
	}, []);

	useEffect(() => {
		const fetchBooks = async () => {
			const { data } = await supabase
				.rpc('get_author_book_panel_data')
				.order('created_at', { ascending: false })
				.range(currentBookIndex, currentBookIndex + rowLimit);

			setBooksDisplay(data);
		};

		fetchBooks();
	}, [currentBookIndex]);

	useEffect(() => {
		Increment();
	}, []);
	return (
		<div className='mx-8 mt-8'>
			<h2 className='mb-2 text-xl font-medium'>Overview</h2>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
				<StatCard title={'Chapter Views'} value={'20,000'} />
				<StatCard title={'Readers'} value={'200'} />
				<StatCard title={'Views Today'} value={'52'} />
			</div>
			<div className='mt-8'>
				<AuthorBooksPanel
					{...{
						booksDisplay,
						Increment,
						Decrement,
						currentBookIndex,
						totalBookNum,
						rowLimit,
					}}
				/>
			</div>
		</div>
	);
};

export default AuthorDashboard;
