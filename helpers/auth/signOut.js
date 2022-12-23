const signOut = async (supabase) => {
    const error = await supabase.auth.signOut();

    if (error) {
        throw error;
    }
};

export default signOut;
