import Head from "next/head";
import Carousel from "../components/Carousel";
import NavBar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Head></Head>
            <div>
                <NavBar />
                <Carousel />
            </div>
        </>
    );
}
