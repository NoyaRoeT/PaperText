import Head from "next/head";
import Carousel from "../components/Carousel/Carousel";
import Tabs from "../components/Tabs/Tabs";

export default function Home() {
    return (
        <>
            <Head>
                <title>PaperText | Web Novels</title>
            </Head>
            <main>
                <Carousel />
                <Tabs />
            </main>
        </>
    );
}
