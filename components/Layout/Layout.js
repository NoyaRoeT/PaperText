import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
	return (
		<>
			<Sidebar>
				<Navbar />
				{children}
			</Sidebar>
		</>
	);
};

export default Layout;
