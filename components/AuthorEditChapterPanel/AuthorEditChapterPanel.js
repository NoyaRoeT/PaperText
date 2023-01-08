const AuthorEditChapterPanel = ({ chapter }) => {
    return (
        <div className="flex flex-col mx-auto px-6 py-6">
            <div className="flex items-center gap-3 mb-4">
                <h1 className="text-2xl text-scale-1200 text-white">
                    Edit Chapter
                </h1>
            </div>
            <div className="flex h-full flex-grow flex-col gap-4">
                <div className="rounded border">
                    <input
                        type="text"
                        placeholder="Chapter Title"
                        className="input w-full"
                        defaultValue={chapter.title}
                    />
                </div>
                <div className="relative flex flex-grow flex-col">
                    <textarea
                        className="textarea border-white"
                        placeholder="Chapter content"
                        defaultValue={chapter.body}
                    ></textarea>
                </div>
                <div className="w-full flex justify-between">
                    <button className="btn">Edit</button>
                    <button className="btn">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AuthorEditChapterPanel;
