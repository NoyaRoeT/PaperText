import Head from "next/head";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
    return (
        <>
            <Head>
                <title>PaperText | Login</title>
            </Head>
            <LoginForm />
        </>
    );
}
