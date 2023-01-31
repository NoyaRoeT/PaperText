import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Sidebar = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(true);
	const router = useRouter();

	const currentRoute = router.pathname;

	useEffect(() => {
		const shouldHide = /\/(login|create|signup).*$/.test(currentRoute);
		if (shouldHide) return setShowSidebar(false);

		setShowSidebar(true);
	}, [currentRoute]);

	return (
		<>
			<div className={showSidebar ? 'drawer-mobile drawer' : 'drawer'}>
				<input id='sidebar' type='checkbox' className='drawer-toggle' />
				<div
					id='main'
					className='drawer-content scroll-pt-4 items-center scroll-smooth'
				>
					{
						// <label
						//     htmlFor="sidebar"
						//     className="btn btn-primary drawer-button"
						// >
						//     Open drawer
						// </label>
					}
					<div className='flex flex-col'>{children}</div>
				</div>
				<div className='drawer-side'>
					<label htmlFor='sidebar' className='drawer-overlay'></label>
					<ul className='menu w-80 bg-base-100 p-4 text-base-content'>
						<Link
							href='/'
							className='mx-auto text-xl font-bold normal-case hover:text-primary'
						>
							PaperText
						</Link>
						<li>
							<a>Genres</a>
							<a>Tags</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
