import Image from "next/image";
const Carousel = (props) => {
    return (
        <div className="carousel bg-base-200">
            <div id="slide1" className="carousel-item relative w-full">
                <Image
                    className="mx-auto"
                    src="/test_img0.webp"
                    width={500}
                    height={250}
                ></Image>

                <div className="p-4">
                    <h2 className="text-5xl mb-4">Chainsaw Man</h2>
                    <p>
                        "Denji is robbed of a normal teenage life, left with
                        nothing but his deadbeat father's overwhelming debt. His
                        only companion is his pet, the chainsaw devil Pochita,
                        with whom he slays devils for money that inevitably ends
                        up in the yakuza's pockets. All Denji can do is dream of
                        a good, simple life: one with delicious food and a
                        beautiful girlfriend by his side. But an act of greedy
                        betrayal by the yakuza leads to Denji's brutal, untimely
                        death, crushing all hope of him ever achieving
                        happiness.",
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Image
                    className="mx-auto"
                    src="/test_img0.webp"
                    width={500}
                    height={250}
                ></Image>
                <div className="p-4">
                    <h2 className="text-5xl mb-4">Chainsaw Man</h2>
                    <p>
                        "Denji is robbed of a normal teenage life, left with
                        nothing but his deadbeat father's overwhelming debt. His
                        only companion is his pet, the chainsaw devil Pochita,
                        with whom he slays devils for money that inevitably ends
                        up in the yakuza's pockets. All Denji can do is dream of
                        a good, simple life: one with delicious food and a
                        beautiful girlfriend by his side. But an act of greedy
                        betrayal by the yakuza leads to Denji's brutal, untimely
                        death, crushing all hope of him ever achieving
                        happiness.",
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Image
                    className="mx-auto"
                    src="/test_img0.webp"
                    width={500}
                    height={250}
                ></Image>
                <div className="p-4">
                    <h2 className="text-5xl mb-4">Chainsaw Man</h2>
                    <p>
                        "Denji is robbed of a normal teenage life, left with
                        nothing but his deadbeat father's overwhelming debt. His
                        only companion is his pet, the chainsaw devil Pochita,
                        with whom he slays devils for money that inevitably ends
                        up in the yakuza's pockets. All Denji can do is dream of
                        a good, simple life: one with delicious food and a
                        beautiful girlfriend by his side. But an act of greedy
                        betrayal by the yakuza leads to Denji's brutal, untimely
                        death, crushing all hope of him ever achieving
                        happiness.",
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <Image
                    className="mx-auto"
                    src="/test_img0.webp"
                    width={500}
                    height={250}
                ></Image>
                <div className="p-4">
                    <h2 className="text-5xl mb-4">Chainsaw Man</h2>
                    <p>
                        "Denji is robbed of a normal teenage life, left with
                        nothing but his deadbeat father's overwhelming debt. His
                        only companion is his pet, the chainsaw devil Pochita,
                        with whom he slays devils for money that inevitably ends
                        up in the yakuza's pockets. All Denji can do is dream of
                        a good, simple life: one with delicious food and a
                        beautiful girlfriend by his side. But an act of greedy
                        betrayal by the yakuza leads to Denji's brutal, untimely
                        death, crushing all hope of him ever achieving
                        happiness.",
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
