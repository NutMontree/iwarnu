const SearchBar = ({ searchQuery, setSearchQuery }) => {

    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    ค้นหาสถานที่ไกล้เคียง
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="ค้นหาสถานที่ไกล้เคียง"
                name="s"
            />

        </form>
    );
};

export default SearchBar;