import getServerSideSession from '../helpers/auth/getServerSideSession';
import supabase from '../helpers/supabase';

const handleGetBookId = async (req, res) => {
	const { book_id } = req.query;
	const { data, error, status } = await supabase.rpc('get_book_info', {
		bk_id: book_id,
	});

	if (error) {
		res.status(status).json({ error });
		return;
	}

	res.status(status).json({ data });
};

const handlePostBookId = async (req, res) => {
	res.send('in progress');
};

const handlePutBookId = async (req, res) => {
	res.send('in progress');
};

const handleDeleteBookId = async (req, res) => {
	res.send('in progress');
};
