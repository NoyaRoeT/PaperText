import Link from 'next/link';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import signOut from '../../helpers/auth/signOut';
import { useState, useEffect } from 'react';
import DarkmodeButton from '../DarkmodeButton/DarkmodeButton';
const NavBar = () => {
	const user = useUser();
	const supabase = useSupabaseClient();
	const [username, setUsername] = useState('');

	useEffect(() => {
		const loadUsername = async () => {
			const { data, error } = await supabase
				.from('profiles')
				.select('username')
				.eq('email', user.email);

			if (error) {
				throw error;
			}

			setUsername(data[0].username);
		};
		if (user) {
			loadUsername();
		}
	}, [user]);

	const handleSignOut = async (event) => {
		event.preventDefault();
		try {
			await signOut(supabase);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='navbar bg-base-100 content-center'>
			<div className='flex flex-1 gap-5 justify-center mr-auto'>
				<Link
					href='/'
					className='font-bold hover:text-primary normal-case text-xl'
				>
					PaperText
				</Link>
				<Link href='/books'>
					<button className='btn btn-primary'>Browse</button>
				</Link>
				<Link href={'/create/'} className='btn'>
					Create
				</Link>
			</div>
			<div className='mx-2'>
				<input
					id='search'
					type='text'
					placeholder='Type here'
					className='input w-full max-w-xs'
				/>
			</div>

			<div className='flex-1 flex gap-5 justify-center ml-auto'>
				<DarkmodeButton />
				{!user && (
					<>
						<Link href='/login'>
							<button className='btn'>Login</button>
						</Link>
						<Link href='/signup'>
							<button className='btn'>Sign Up</button>
						</Link>
					</>
				)}
				{user && (
					<>
						<button className='btn'>{username}</button>
						<button onClick={handleSignOut} className='btn'>
							Sign Out
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
