import Head from "next/head";
import Carousel from "../components/Carousel";
import NavBar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function Home() {
    return (
        <>
            <Head>
                <title>PaperText | Web Novels</title>
            </Head>
            <main>
                <NavBar />
                <Carousel />
                <Tabs />
            </main>
        </>
    );
}
