import { useState } from 'react';

const Tabs = (props) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleChangeTab = (event) => {
		setActiveTab(event.target.value);
	};

	const tabs = [];
	for (let i = 0; i != props.tabNames.length; ++i) {
		tabs[i] = (
			<button
				className={`tab tab-lifted text-lg ${
					activeTab == i && 'tab-active'
				}`}
				key={i}
				value={i}
				onClick={handleChangeTab}
			>
				{props.tabNames[i]}
			</button>
		);
	}

	return (
		<div className={props.className}>
			<div className='tabs mb-2 text-xl'>{tabs}</div>
			{props.children[activeTab]}
		</div>
	);
};

export default Tabs;
