import Head from "next/head";
import SignupForm from "../components/SignupForm/SignupForm";

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
