import Head from "next/head";
import AuthorBooksPanel from "../../../components/AuthorBookPanel/AuthorBookPanel";

export default function Login() {
    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorBooksPanel />
        </>
    );
}
