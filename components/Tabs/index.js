import TabsList from "./TabsList";

const Tabs = (props) => {
    return (
        <>
            <div className="tabs tabs-boxed">
                <a className="tab">Tab 1</a>
                <a className="tab tab-active">Tab 2</a>
                <a className="tab">Tab 3</a>
            </div>
            <TabsList />
        </>
    );
};
export default Tabs;
