import IncludeTags from "../IncludeTags/IncludeTags";
import Image from "next/image";
import { useState } from "react";

const DUMMY_TAGS = ["tag 1", "tag 2"];
const DUMMY_GENRES = ["genre 1", "genre 2"];

const AuthorEditBookPanel = (props) => {
    const [clientImageUrl, setClientImageUrl] = useState();
    const uploadImageToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setClientImageUrl(URL.createObjectURL(img));
        }
    };
    console.log(clientImageUrl);
    return (
        <form className="flex flex-col bg-base-200 p-6 space-y-4 max-w-2xl mx-auto mt-20 rounded-md">
            <div className="flex flex-col">
                <label htmlFor="image">Image</label>
                {clientImageUrl && (
                    <Image src={clientImageUrl} width={250} height={250} />
                )}
                <input
                    className="mt-2"
                    type="file"
                    autoComplete="off"
                    onChange={uploadImageToClient}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="synopsis">Synopsis</label>
                <textarea id="synopsis" />
            </div>
            <IncludeTags label="Include Genres" tagsList={DUMMY_GENRES} />
            <IncludeTags label="Include Tags" tagsList={DUMMY_TAGS} />

            <button className="w-1/4 p-2 bg-base-100" type="button">
                Submit
            </button>
        </form>
    );
};

export default AuthorEditBookPanel;
