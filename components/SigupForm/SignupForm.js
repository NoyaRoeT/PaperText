const SignupForm = () => {
    return (
        <form>
            <div>
                <div className="flex flex-col items-center mx-auto my-40">
                    <label className="text-3xl text-white mb-4">Sign Up</label>
                    <div className="flex flex-col bg-base-200 rounded-md p-4 w-96 space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input w-full border-gray-100"
                        />
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
                        <input
                            type="password"
                            placeholder="Confirm Passwrod"
                            className="input w-full border-gray-100"
                        />

                        <button className="btn" type="submit">
                            Sign Up
                        </button>
                    </div>

                    <div className="flex rounded-md p-2 mt-4 w-96 justify-center">
                        <label className="text-gray">
                            Already have an account?{" "}
                            <span className="text-green-500 cursor-pointer">
                                Login
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignupForm;
