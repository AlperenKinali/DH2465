import Logo from "../assets/Logo.png"

function TopbarView(props) {
    return (
        <div id="header">
                    <a href="#/">
                        <div id="logo">
                            <img src={Logo} alt={"Book a Spa"} width={"100"}/>
                            <br/><span id="slogan">Browse and Soothe: Find Your Spa!</span>
                        </div>
                    </a>
                    <ul id="mainMenu">
                        <li className="topbaritem"><a href="#/">Home</a></li>
                        <li className="topbaritem"><a href="#/">About Us</a></li>
                        <li className="topbaritem"><a href="#/">Contact</a></li>
                    </ul>
        </div>
    )
}

export default TopbarView