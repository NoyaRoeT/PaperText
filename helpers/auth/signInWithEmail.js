const signInWithEmail = async (supabase, email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        throw error;
    }

    return data;
};

export default signInWithEmail;
