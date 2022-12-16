import Image from "next/image";
const Carousel = (props) => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <Image
                    className="mx-auto"
                    src="/test_img1.webp"
                    width={500}
                    height={250}
                ></Image>
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
                    src="/test_img1.webp"
                    width={500}
                    height={250}
                ></Image>
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
