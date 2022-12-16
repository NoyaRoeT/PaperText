import Link from "next/link";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 justify-between content-center">
            <div className="flex">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    PaperText
                </Link>
                <Link href="/browse" className="btn">
                    Browse
                </Link>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
            </div>
            <div className="flex space-x-4">
                <button className="btn">Login</button>
                <button className="btn">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;