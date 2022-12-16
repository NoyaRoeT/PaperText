const LoginForm = () => {
    return (
        <form>
            <div>
                <div className="flex flex-col items-center mx-auto my-40">
                    <label className="text-3xl text-white mb-4">Sign In</label>
                    <div className="flex flex-col bg-base-200 rounded-md p-4 w-96 space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input w-full border-gray-100"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input w-full border-gray-100"
                        />

                        <button className="btn" type="submit">
                            Sign In
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
