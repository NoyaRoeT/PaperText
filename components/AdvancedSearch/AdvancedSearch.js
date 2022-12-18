const AdvancedSearch = () => {
    return (
        <div className="card bg-base-200 text-primary-content">
            <div className="card-body">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                        Genre...
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                        Tags...
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
        </div>
    );
};

export default AdvancedSearch;
