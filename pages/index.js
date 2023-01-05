import Head from "next/head";
import Carousel from "../components/Carousel/Carousel";
import Tabs from "../components/Tabs/Tabs";

const tabNameArray = ["Most Popular", "Latest Updates"];

export default function Home() {
    return (
        <>
            <Head>
                <title>PaperText | Web Novels</title>
            </Head>
            <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
                <Carousel />
                <Tabs tabNames={tabNameArray}>
                    <div>Empty 1</div>
                    <div>Empty 2</div>
                </Tabs>
            </main>
        </>
    );
}
