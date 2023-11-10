import SearchBar from "./searchBarView.jsx"

function HomeView(props) {
    {/* eslint-disable react/no-unescaped-entities */
    }
    return (
        <div className="home-elem-1">
            <div className="home-elem-13">
                <div className="home-elem-14">
                    <span className="home-elem-22">
                    <p>Discover, Compare, Book </p>
                </span>
                    <div className="home-elem-24"><input type="date" className="home-elem-25"/>
                        <button className="home-elem-26" onClick={SearchACB}>
                            <p>Find Your Spa </p>
                        </button>
                    </div>
                    <div className="home-elem-27">
                        <div className="home-elem-28">
                    <span className="home-elem-29">
                            <p>100+ </p>
                        </span>
                            <span className="home-elem-30">
                            <p>Spas and Services </p>
                        </span>
                        </div>
                        <div className="home-elem-33">
                    <span className="home-elem-31">
                            <p>Easy </p>
                        </span><span className="home-elem-32">
                            <p>Booking Process </p>
                        </span>
                        </div>
                    </div>
                    <span className="home-elem-21">
                    <p><br/></p>
                </span>
                </div>
                <div className="home-elem-34">
                    <div className="home-elem-35">
                <span className="home-elem-36">
                    <img src="https://res.cloudinary.com/storylens/image/upload/v1698150985/hzajsz6u5zjxgbpcgqfl.jpg"
                         alt="spa"/>
                </span>
                    </div>
                </div>
            </div>
        </div>)


    function SearchACB() {
        // eslint-disable-next-line react/prop-types
        props.onSearch()
    }
}

export default HomeView