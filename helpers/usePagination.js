import { useEffect, useState } from 'react';

/**
 *
 * @param {number} limit total number of items
 * @param {number} range maxmimum to paginate
 * @returns
 */
const usePagination = (limit, range) => {
	const [count, setCount] = useState(0);
	const [next, setNext] = useState(false);
	const [previous, setPrevious] = useState(false);

	const Increment = () => {
		setNext(true);
	};

	const Decrement = () => {
		setPrevious(true);
	};

	useEffect(() => {
		if (next === true) {
			if (count + (range + 1) > limit) {
				if (limit === 0) {
					setCount(count);
				} else {
					setCount(limit - 1);
				}
			} else {
				setCount(count + (range + 1));
			}
			setNext(false);
		}
	}, [next]);

	useEffect(() => {
		if (previous === true) {
			if (count - range + 1 < 0) {
				setCount(0);
			} else {
				setCount(count - (range + 1));
			}
			setPrevious(false);
		}
	}, [previous]);

	return [count, Increment, Decrement];
};

export default usePagination;
