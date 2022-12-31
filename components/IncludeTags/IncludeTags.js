import { useState } from "react";

const IncludeTags = (props) => {
    const [chosenTags, setChosenTags] = useState([]);
    const [enteredTag, setEnteredTag] = useState("");

    const handleTagsChange = (event) => {
        setEnteredTag(event.target.value);
    };

    const handleTagsKeyDown = (event) => {
        if (event.key === "Enter") {
            const enteredValue = event.target.value.trim();
            if (
                props.tagsList.includes(enteredValue) &&
                !chosenTags.includes(enteredValue)
            ) {
                setChosenTags((prevState) => [...prevState, enteredValue]);
                setEnteredTag("");
            }
        } else if (event.key === "Backspace") {
            if (enteredTag === "") {
                setChosenTags((prevState) => [...prevState.slice(0, -1)]);
            }
        }
    };

    return (
        <div className={`inline-block ${props.className}`}>
            <ul className="flex space-x-1">
                {chosenTags.map((t) => (
                    <li
                        key={t}
                        className="bg-gray-200 rounded text-black px-[3px]"
                    >
                        {t}
                        <i className="">&#215;</i>
                    </li>
                ))}

                <input
                    className="break-normal focus:outline-none bg-base-100"
                    type="text"
                    autoComplete="off"
                    onChange={handleTagsChange}
                    onKeyDown={handleTagsKeyDown}
                    value={enteredTag}
                />
            </ul>
            <ul className="text-center bg-base-200">
                {props.tagsList.map((t) => (
                    <li key={t} className="border-b-white border-b-[1px] py-1">
                        {t}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncludeTags;
