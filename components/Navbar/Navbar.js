import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import signOut from "../../helpers/auth/signOut";
const NavBar = () => {
    const session = useSession();
    const supabase = useSupabaseClient();

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            await signOut(supabase);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="navbar bg-base-200 justify-between content-center">
            <div className="flex">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    PaperText
                </Link>
                <Link href="/books" className="btn">
                    Browse
                </Link>
            </div>
            <div className="space-x-4">
                <input
                    id="search"
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                />
            </div>
            {!session && (
                <div className="flex space-x-4">
                    <Link href="/login">
                        <button className="btn">Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className="btn">Sign Up</button>
                    </Link>
                </div>
            )}
            {session && (
                <div className="flex space-x-4">
                    <button className="btn">
                        {session.user.email.substring(
                            0,
                            session.user.email.indexOf("@")
                        )}
                    </button>
                    <button onClick={handleSignOut} className="btn">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
