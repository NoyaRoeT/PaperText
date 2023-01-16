import React from 'react';

const StatCard = ({ title, value }) => {
	return (
		<div className='stats shadow'>
			<div className='stat'>
				<div className='stat-title'>{title}</div>
				<div className='stat-value'>{value}</div>
			</div>
		</div>
	);
};

export default StatCard;
