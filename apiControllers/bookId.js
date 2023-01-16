import getServerSideSession from '../helpers/auth/getServerSideSession';
import supabase from '../helpers/supabase';

export const handleGetBookId = async (req, res) => {
	const { bookId } = req.query;

	const { data, error, status } = await supabase.rpc('get_book_info', {
		bk_id: bookId,
	});

	if (error) {
		res.status(status).json({ error });
		return;
	}

	res.status(status).json({ data });
};

export const handlePostBookId = async (req, res) => {
	res.send('in progress');
};

export const handlePutBookId = async (req, res) => {
	const { session, supabase } = await getServerSideSession({ req, res });

	if (!session) {
		res.status(401).json({ message: 'Not logged in' });
		return;
	}

	const { bookId } = req.query;

	const params = {
		_id: bookId,
		_title: req.body.title || null,
		_synopsis: req.body.synopsis || null,
		_genre: req.body.genre || null,
		_tags: req.body.tags || null,
		_image_url: req.body.image_url || null,
	};

	const response = await supabase.rpc('put_book_info', params);

	const status = response.status != 204 ? response.status : 200;

	res.status(status).json({ error });
};

export const handleDeleteBookId = async (req, res) => {
	const { session, supabase } = await getServerSideSession({ req, res });

	if (!session) {
		res.status(401).json({ message: 'Not logged in' });
		return;
	}

	const { bookId } = req.query;

	const response = await supabase.rpc('delete_book_by_id', { _id: bookId });

	const status = response.status != 204 ? response.status : 200;

	res.status(status).json({ error });
};
