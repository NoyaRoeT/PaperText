import Head from "next/head";
import SignupForm from "../components/SigupForm/SignupForm";

export default function Signup() {
    return (
        <>
            <Head>
                <title>PaperText | Signup</title>
            </Head>
            <SignupForm />
        </>
    );
}
