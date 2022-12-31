import IncludeTags from "../IncludeTags/IncludeTags";

const DUMMY_TAGS = ["Test tag 1", "Test tag 2"];

const AuthorEditBookPanel = (props) => {
    return (
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />

            <label htmlFor="synopsis">Synopsis</label>
            <input type="text" id="synopsis" />

            <IncludeTags tagsList={DUMMY_TAGS} />
        </form>
    );
};

export default AuthorEditBookPanel;
