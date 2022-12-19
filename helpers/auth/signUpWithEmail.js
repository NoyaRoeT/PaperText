const signUpWithEmail = async (supabase, email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        throw error;
    }

    return data;
};

export default signUpWithEmail;
