import signInWithEmail from '../../helpers/auth/signInWithEmail';

import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginForm = () => {
	const supabase = useSupabaseClient();

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const router = useRouter();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (emailRef.current.value.length < 1) {
			// return validation
			return;
		}

		if (passwordRef.current.value.length < 1) {
			// return validation
			return;
		}

		try {
			const data = await signInWithEmail(
				supabase,
				emailRef.current.value,
				passwordRef.current.value
			);

			console.log(data);

			if (data) {
				// todo: redirect to user profile setup / user profile page
				router.push('/create/books');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div className='mx-auto my-40 flex flex-col items-center'>
					<label className='mb-4 text-3xl'>Login</label>
					<div className='flex w-96 flex-col space-y-4 rounded-md bg-base-200 p-4'>
						<input
							type='text'
							placeholder='Email'
							className='input w-full border-gray-100'
							ref={emailRef}
						/>
						<input
							type='password'
							placeholder='Password'
							className='input w-full border-gray-100'
							ref={passwordRef}
						/>
						<button className='btn' type='submit'>
							Login
						</button>
					</div>
					<div className='mt-4 flex w-96 justify-center rounded-md p-2'>
						<label className='text-gray'>
							New to PaperText?{' '}
							<Link
								href='/signup'
								className='cursor-pointer text-green-500'
							>
								Create an account
							</Link>
						</label>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
