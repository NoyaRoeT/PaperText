import { useState } from 'react';

/**
 *
 * @param {Object} props
 * @param {Number} props.maxNumChoices
 * @param {Array} props.tagsList
 */
const IncludeTags = (props) => {
	const [chosenTags, setChosenTags] = useState([]);
	const [enteredTag, setEnteredTag] = useState('');

	const handleTagsChange = (event) => {
		setEnteredTag(event.target.value);
	};

	const handleTagsKeyDown = (event) => {
		if (event.key === 'Enter') {
			const enteredValue = event.target.value.trim();
			if (
				props.tagsList.includes(enteredValue) &&
				!chosenTags.includes(enteredValue)
			) {
				setChosenTags((prevState) => [...prevState, enteredValue]);
				setEnteredTag('');
			}
		} else if (event.key === 'Backspace') {
			if (enteredTag === '') {
				setChosenTags((prevState) => [...prevState.slice(0, -1)]);
			}
		}
	};

	return (
		<div className='flex flex-col'>
			<label htmlFor={props.label}>{props.label}</label>
			<div className={`${props.className}`}>
				<ul className='flex space-x-1'>
					{chosenTags.map((t) => (
						<li
							key={t}
							className='bg-gray-200 rounded text-black px-[3px]'
						>
							{t}
							<i className=''>&#215;</i>
						</li>
					))}
					<input
						id={props.label}
						className='break-normal focus:outline-none'
						type='text'
						autoComplete='off'
						onChange={handleTagsChange}
						onKeyDown={handleTagsKeyDown}
						value={enteredTag}
					/>
				</ul>
				<ul className='text-center bg-base-200'>
					{props.tagsList.map((t) => (
						<li key={t} className='bg-base-100 py-1'>
							{t}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default IncludeTags;
