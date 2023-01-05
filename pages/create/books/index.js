import Head from "next/head";
import AuthorBooksPanel from "../../../components/AuthorBookPanel/AuthorBookPanel";

export default function AuthorBooksPage() {
    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorBooksPanel />
        </>
    );
}
