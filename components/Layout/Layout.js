import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
