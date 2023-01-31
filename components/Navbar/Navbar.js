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
		<div className='navbar content-center bg-base-100'>
			<div className='mr-auto flex flex-1 justify-center gap-5'>
				<Link
					href='/'
					className='text-xl font-bold normal-case hover:text-primary'
				>
					PaperText
				</Link>
				<Link href='/books'>
					<button className='btn-primary btn'>Browse</button>
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

			<div className='ml-auto flex flex-1 justify-center gap-5'>
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
