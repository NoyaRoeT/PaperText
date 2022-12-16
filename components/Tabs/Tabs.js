const Tabs = (props) => {
    return (
        <>
            <div className="tabs text-xl">
                <a className="tab tab-bordered text-xl">Tab 1</a>
                <a className="tab tab-bordered tab-active text-xl">Tab 2</a>
                <a className="tab tab-bordered text-xl">Tab 3</a>
            </div>
            {props.children}
        </>
    );
};

export default Tabs;
