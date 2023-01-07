import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Sidebar = (props) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const router = useRouter();

    const currentRoute = router.pathname;

    useEffect(() => {
        const shouldHide = /\/(login|create|signup).*$/.test(currentRoute);
        if (shouldHide) return setShowSidebar(false);

        setShowSidebar(true);
        console.log(showSidebar);
    }, [currentRoute]);

    return (
        <>
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/*
                        <label
                            htmlFor="my-drawer-2"
                            className="btn btn-primary drawer-button lg:hidden"
                        >
                            Open drawer
                        </label>
                        */}
                    {props.children}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <a>Genres</a>
                            <a>Tags</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
