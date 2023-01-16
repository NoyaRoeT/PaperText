import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import { useRef } from 'react';
import signUpWithEmail from '../../helpers/auth/signUpWithEmail';

const SignupForm = () => {
	const supabase = useSupabaseClient();

	const emailRef = useRef(null);
	const usernameRef = useRef(null);
	const confirmPasswordRef = useRef(null);
	const passwordRef = useRef(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const [email, username, password, confirmPassword] = [
			emailRef.current.value,
			usernameRef.current.value,
			passwordRef.current.value,
			confirmPasswordRef.current.value,
		];

		if (email.length < 1) {
			// return validation
			return;
		}

		if (username.length < 1) {
			// return validation
			return;
		}

		if (password.length < 1) {
			// return validation
			return;
		}

		if (password !== confirmPassword) {
			// return validation
			return;
		}

		try {
			const data = await signUpWithEmail(
				supabase,
				email,
				username,
				password
			);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div className='flex flex-col items-center mx-auto my-40'>
					<label className='text-3xl mb-4'>Sign Up</label>
					<div className='flex flex-col bg-base-200 rounded-md p-4 w-96 space-y-4'>
						<input
							type='email'
							placeholder='Email'
							className='input w-full border-gray-100'
							ref={emailRef}
						/>
						<input
							type='text'
							placeholder='Username'
							className='input w-full border-gray-100'
							ref={usernameRef}
						/>
						<input
							type='password'
							placeholder='Password'
							className='input w-full border-gray-100'
							ref={passwordRef}
						/>
						<input
							type='password'
							placeholder='Confirm Password'
							className='input w-full border-gray-100'
							ref={confirmPasswordRef}
						/>

						<button className='btn' type='submit'>
							Sign Up
						</button>
					</div>

					<div className='flex rounded-md p-2 mt-4 w-96 justify-center'>
						<label className='text-gray'>
							Already have an account?{' '}
							<Link
								href='/login'
								className='text-green-500 cursor-pointer'
							>
								Login
							</Link>
						</label>
					</div>
				</div>
			</div>
		</form>
	);
};

export default SignupForm;
