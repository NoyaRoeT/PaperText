import supabase from '../../../helpers/supabase';

const Chapter = ({ chapterBody }) => {
	return (
		<div className='mx-auto mt-8 flex max-w-screen-xl flex-col bg-base-300 p-10'>
			<div className='flex w-full justify-between'>
				<button className='btn-primary btn'>{'<'}</button>
				<select className='select-primary select w-full max-w-xs'>
					<option disabled selected>
						What is the best TV show?
					</option>
					<option>Game of Thrones</option>
					<option>Lost</option>
					<option>Breaking Bad</option>
					<option>Walking Dead</option>
				</select>
				<button className='btn-primary btn'>{'>'}</button>
			</div>
			<div className='space-y-10 p-10'>
				<h2 className='card-title'>Test Chapter Title</h2>
				<p>{chapterBody}</p>
			</div>
			<div className='flex w-full justify-between'>
				<button className='btn-primary btn'>{'<'}</button>
				<select className='select-primary select w-full max-w-xs'>
					<option disabled selected>
						What is the best TV show?
					</option>
					<option>Game of Thrones</option>
					<option>Lost</option>
					<option>Breaking Bad</option>
					<option>Walking Dead</option>
				</select>
				<button className='btn-primary btn'>{'>'}</button>
			</div>
		</div>
	);
};

export default Chapter;

export const getServerSideProps = async (ctx) => {
	const { bookId, chapter } = ctx.query;
	const { data } = await supabase.storage
		.from('chapters')
		.download(`${bookId}/${chapter}.txt`);
	const chapterBody = await data.text();
	return {
		props: {
			chapterBody,
		},
	};
};
