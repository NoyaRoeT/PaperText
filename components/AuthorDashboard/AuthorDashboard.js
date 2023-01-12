import AuthorBooksPanel from "../AuthorBookPanel/AuthorBookPanel";
import StatCard from "./StatCard";

const AuthorDashboard = ({ bookPanelData }) => {
    return (
        <div className="mt-8">
            <h2 className="mb-2 text-xl font-medium">Overview</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard title={"Chapter Views"} value={"20,000"} />
                <StatCard title={"Readers"} value={"200"} />
                <StatCard title={"Views Today"} value={"52"} />
            </div>
            <div className="mt-8">
                <AuthorBooksPanel booksList={bookPanelData} />
            </div>
        </div>
    );
};

export default AuthorDashboard;
