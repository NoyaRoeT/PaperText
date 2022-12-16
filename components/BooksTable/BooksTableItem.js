import Image from "next/image";
const BooksTableItem = () => {
    return (
        <div className="flex space-x-4 bg-base-200">
            <Image src="/test_img.webp" width={100} height={100}></Image>
            <div className="flex flex-col content-between">
                <div className="text-xl">Book Title Here</div>
                <ul className="flex text-xs space-x-4">
                    <li className="btn">Hentai</li>
                    <li className="btn">Gore</li>
                    <li className="btn">NTR</li>
                </ul>
            </div>
        </div>
    );
};

export default BooksTableItem;
