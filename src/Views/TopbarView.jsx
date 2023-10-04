import Logo from "../assets/Logo.png"

function TopbarView(props) {
    return (
        <div>
            <header>
                <nav>
                    <a href="#/">
                        <div id="logo">
                            <img src={Logo} alt={"Book a Spa"} width={"100"}/>
                            <br/><span id="slogan">Browse and Soothe: Find Your Spa!</span>
                        </div>
                    </a>
                    <ul id="mainMenu">
                        <li><a href="#/">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default TopbarView