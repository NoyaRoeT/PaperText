import Head from "next/head";
import NavBar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>PaperText | Web Novels</title>
            </Head>
            <div>
                <NavBar />
            </div>
        </>
    );
}
