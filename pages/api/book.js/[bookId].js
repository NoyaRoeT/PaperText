import {
	handleGetBookId,
	handlePostBookId,
	handlePutBookId,
	handleDeleteBookId,
} from '../../../apiControllers/bookId.js';

export default function handler(req, res) {
	const method = req.method;
	switch (method) {
		case 'GET':
			handleGetBookId(req, res);
			break;
		case 'POST':
			handlePostBookId(req, res);
			break;
		case 'PUT':
			handlePutBookId(req, res);
			break;
		case 'DELETE':
			handleDeleteBookId(req, res);
			break;
		default:
			res.send('You received this');
			break;
	}
}
