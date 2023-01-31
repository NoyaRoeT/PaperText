import IncludeTags from '../IncludeTags/IncludeTags';
import Image from 'next/image';
import { useState } from 'react';

const DUMMY_TAGS = ['tag 1', 'tag 2'];
const DUMMY_GENRES = ['genre 1', 'genre 2'];

const AuthorEditBookPanel = () => {
	const [clientImageUrl, setClientImageUrl] = useState();
	const uploadImageToClient = (event) => {
		if (event.target.files && event.target.files[0]) {
			const img = event.target.files[0];
			setClientImageUrl(URL.createObjectURL(img));
		}
	};
	console.log(clientImageUrl);
	return (
		<form className='mx-auto mt-20 flex max-w-2xl flex-col space-y-4 rounded-md bg-base-200 p-6'>
			<div className='flex flex-col'>
				<label htmlFor='image'>Image</label>
				{clientImageUrl && (
					<Image src={clientImageUrl} width={250} height={250} />
				)}
				<input
					className='mt-2'
					type='file'
					autoComplete='off'
					onChange={uploadImageToClient}
				/>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='title'>Title</label>
				<input type='text' id='title' />
			</div>

			<div className='flex flex-col'>
				<label htmlFor='synopsis'>Synopsis</label>
				<textarea id='synopsis' />
			</div>
			<IncludeTags label='Include Genres' tagsList={DUMMY_GENRES} />
			<IncludeTags label='Include Tags' tagsList={DUMMY_TAGS} />

			<button className='w-1/4 bg-base-100 p-2' type='button'>
				Submit
			</button>
		</form>
	);
};

export default AuthorEditBookPanel;
