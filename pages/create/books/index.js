import Head from "next/head";
import AuthorDashboard from "../../../components/AuthorDashboard/AuthorDashboard";

export default function AuthorBooksPage() {
    return (
        <>
            <Head>
                <title>PaperText | Manage Books</title>
            </Head>
            <AuthorDashboard />
        </>
    );
}
