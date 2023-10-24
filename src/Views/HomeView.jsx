import SearchBar from "./searchBarView.jsx"

function HomeView(props) {
    return (<div>
        <div id="main">
            <section id="home">
                <h1>Welcome to Book A Spa</h1>
                <p>Find and book the best spas near you!</p>
            </section>
            {/* eslint-disable-next-line react/prop-types */}
            <SearchBar startSearch ={props.onSearch}/>
        </div>
        <div className="infomrationHolder">
            {/*<div id="helper">*/}
            {/*    <div id="helperbox">BOX1</div>*/}
            {/*    <div id="helperbox">Box2</div>*/}
            {/*</div>*/}
            <div id="infoBox">
                <div className="LeftBox">
                    <span className="homeText">
                        We work with more than 700 spa destinations in the Scandinavian area, <br/>arranging spa days for up to 6,000 people per week.
                    </span>
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
                    <span className="homeText">
                        Search - Discover a world of relaxation at your fingertips. <br/>
                        Compare - Find the perfect fit for your spa desires. <br/>
                        Book - Seal your date with serenity in just a click
                    </span>
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


}

export default HomeView