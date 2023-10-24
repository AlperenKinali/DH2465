function SearchBar(props) {
    return (
        <div className="searchComp">
            <div id="searchBars">
                <div className="searchInput">
                    <label>Location</label><br/>
                    <select name="Location" id="input">
                        <option value="none" selected disabled hidden>Select</option>
                        <option value="Stockholm">Stockholm</option>
                        <option value="Malmö">Malmö</option>
                        <option value="Göteborg">Göteborg</option>
                    </select>
                </div>
                <div className="searchInput">
                    <label>Arrival date</label><br/>
                    <input type="date" name="date" id="dateInput"/>
                </div>
            </div>
            <button onClick={SearchACB} id="searchButton">Search</button>
        </div>
    )

    function SearchACB() {
        // eslint-disable-next-line react/prop-types
        props.startSearch()
    }
}

export default SearchBar