import Logo from "../assets/Logo.png"

function TopbarView(props) {
    return (
        <div className="home-elem-7">
            <div className="home-elem-6">
                <div className="home-elem-8">
                    <a href={"#"}>
                    <span className="home-elem-12">
                        <p>BookASpa </p>
                    </span></a>
                </div>
                <div className="home-elem-9">
                    <div className="home-elem-5"> <span className="home-elem-2"><a href="#" className="link">
                                <p>Discover </p>
                            </a> </span><span className="home-elem-3"><a href="#" className="link">
                                <p>Compare </p>
                            </a> </span><span className="home-elem-4"><a href="#/search" className="link">
                                <p>Book </p>
                            </a> </span></div>
                </div>
                <div className="home-elem-11">
                    <button className="home-elem-10"><a href="#" className="link" target="_self">
                        <p>Get Started </p>
                    </a></button>
                </div>
                <div className="home-elem-205"></div>
            </div>
            {/*<a href="#/">*/}
            {/*    <div id="logo">*/}
            {/*        <img src={Logo} alt={"Book a Spa"} width={"100"}/>*/}
            {/*        <br/><span id="slogan">Browse and Soothe: Find Your Spa!</span>*/}
            {/*    </div>*/}
            {/*</a>*/}
            {/*<ul id="mainMenu">*/}
            {/*    <li className="topbaritem"><a href="#/">Home</a></li>*/}
            {/*    <li className="topbaritem"><a href="#/">About Us</a></li>*/}
            {/*    <li className="topbaritem"><a href="#/">Contact</a></li>*/}
            {/*</ul>*/}
        </div>
    )
}

export default TopbarView