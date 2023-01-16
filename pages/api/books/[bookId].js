import {
	handleGetBookId,
	handlePostBookId,
	handlePutBookId,
	handleDeleteBookId,
} from '../../../apiControllers/bookId.js';

export default async function handler(req, res) {
	const method = req.method;
	switch (method) {
		case 'GET':
			await handleGetBookId(req, res);
			break;
		case 'POST':
			await handlePostBookId(req, res);
			break;
		case 'PUT':
			await handlePutBookId(req, res);
			break;
		case 'DELETE':
			await handleDeleteBookId(req, res);
			break;
		default:
			res.send('You received this');
			break;
	}
}
