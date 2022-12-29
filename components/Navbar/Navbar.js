import Link from "next/link";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import signOut from "../../helpers/auth/signOut";
import { useState, useEffect } from "react";
const NavBar = () => {
    const user = useUser();
    const supabase = useSupabaseClient();
    const [username, setUsername] = useState();

    useEffect(() => {
        const loadUsername = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select("username")
                .single();

            if (error) {
                throw error;
            }

            setUsername(data.username);
        };
        if (user) {
            loadUsername();
        }
    }, [user]);

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
            {!user && (
                <div className="flex space-x-4">
                    <Link href="/login">
                        <button className="btn">Login</button>
                    </Link>
                    <Link href="/signup">
                        <button className="btn">Sign Up</button>
                    </Link>
                </div>
            )}
            {user && (
                <div className="flex space-x-4">
                    <button className="btn">{username}</button>
                    <button onClick={handleSignOut} className="btn">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
