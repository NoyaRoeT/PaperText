import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar>{children}</Sidebar>
        </>
    );
};

export default Layout;
