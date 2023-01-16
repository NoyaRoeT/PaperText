import getServerSideSession from '../helpers/auth/getServerSideSession';
import supabase from '../helpers/supabase';

export const handleGetBooks = async (req, res) => {
	const { data, error, status } = await supabase.rpc('get_all_books');
	if (error) {
		res.status(status).json({ message: error.message });
		return;
	}
	res.status(200).json({ data });
	return;
};

export const handlePostBooks = async (req, res) => {
	const { session, supabase } = await getServerSideSession({ req, res });

	if (!session) {
		res.status(401).json({ message: 'Not logged in' });
		return;
	}

	const body = req.body;
	const { error, status } = await supabase.rpc('create_book', body);
	if (!error) {
		res.status(201).send('Success!');
		return;
	}

	res.status(status).json({ error, status });
	return;
};
