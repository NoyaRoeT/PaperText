const signUpWithEmail = async (supabase, email, username, password) => {
	const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password,
		options: {
			data: {
				username: username,
			},
		},
	});

	if (error) {
		throw error;
	}

	return data;
};

export default signUpWithEmail;
