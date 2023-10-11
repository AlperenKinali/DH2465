function SearchView(props) {
    return (<div>
        <div id="main">
            <section id="home">
                <h1>Welcome to Book A Spa</h1>
                <p>Find and book the best spas near you!</p>
            </section>
            <section id="search">
                <form action="results.html" method="get">
                    <div id="searchBars">
                        <div className="searchInput">
                            <label>Location</label>
                            <select name="Location" id="input">
                                <option value="none" selected disabled hidden>Select</option>
                                <option value="Stockholm">Stockholm</option>
                                <option value="Malmö">Malmö</option>
                                <option value="Göteborg">Göteborg</option>
                            </select>
                        </div>
                        <div className="searchInput"><label>Start Date</label><input type="date" name="date"/></div>
                        <div className="searchInput"><label>End Date</label><input type="date" name="date"/></div>
                    </div>
                    <button onClick={SearchACB} id="searchButton">Search</button>
                </form>
            </section>
        </div>
        <div className="infomrationHolder">
            {/*<div id="helper">*/}
            {/*    <div id="helperbox">BOX1</div>*/}
            {/*    <div id="helperbox">Box2</div>*/}
            {/*</div>*/}
            <div id="infoBox">
                <div className="LeftBox">
                    <span >Making Spa Bookings Effortless <br/>
                        At Book-A-Spa, we understand the hassle of juggling multiple calls and website visits. <br/>
                        That's why we've streamlined the process, making it easier than ever to compare and secure your ideal spa treatment. Dive into a world of relaxation, minus the complications.</span>
                </div>
                <div className="RightBox">
                    <img className="infoImage" src="https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2016/5/9/54190a7b-23dc-4670-aaed-60b4ea1bc69f/bigOriginal.jpg"/>
                </div>
            </div>
            <div id="infoBox">
                <div className="LeftBox">
                    <img className="infoImage" src="https://www.visitstockholm.com/media/images/e2e14a8725ad4cb5977fdef68496ca68.width-1280.jpg"/>
                </div>
                <div className="RightBox">
                    <span>In collaboration with <br/>the most luxurious spas</span>
                </div>

            </div>
            <div id="infoBox">
                <div className="LeftBox">
                    <span>Find your ideal spa</span>
                </div>
                <div className="RightBox">
                    <img className="infoImage" src="https://raisondetrespas.com/wp-content/uploads/changing-room-1024x768.jpg"/>
                </div>
            </div>
        </div>

    </div>)

    function SearchACB() {
        // eslint-disable-next-line react/prop-types
        props.onSearch()
    }
}

export default SearchView