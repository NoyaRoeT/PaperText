import signInWithEmail from "../../helpers/auth/signInWithEmail";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRef } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
    const supabase = useSupabaseClient();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (emailRef.current.value.length < 1) {
            // return validation
            return;
        }

        if (passwordRef.current.value.length < 1) {
            // return validation
            return;
        }

        try {
            const data = await signInWithEmail(
                supabase,
                emailRef.current.value,
                passwordRef.current.value
            );

            console.log(data);

            if (data) {
                // todo: redirect to user profile setup / user profile page
                router.push("/create/books");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="flex flex-col items-center mx-auto my-40">
                    <label className="text-3xl text-white mb-4">Sign In</label>
                    <div className="flex flex-col bg-base-200 rounded-md p-4 w-96 space-y-4">
                        <input
                            type="text"
                            placeholder="Email"
                            className="input w-full border-gray-100"
                            ref={emailRef}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input w-full border-gray-100"
                            ref={passwordRef}
                        />
                        <button className="btn" type="submit">
                            Login
                        </button>
                    </div>
                    <div className="flex rounded-md p-2 mt-4 w-96 justify-center">
                        <label className="text-gray">
                            New to PaperText?{" "}
                            <span className="text-green-500 cursor-pointer">
                                Create an account
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
