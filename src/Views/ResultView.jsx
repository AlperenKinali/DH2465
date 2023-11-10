import search1 from "../assets/search1.jpg"
import search2 from "../assets/search2.svg"
import search3 from "../assets/search3.jpg"
import search4 from "../assets/search4.jpg"
import search5 from "../assets/search5.jpg"
import search7 from "../assets/search7.jpeg"
import search8 from "../assets/search8.jpg"

function ResultView(props) {
    {/* eslint-disable react/no-unescaped-entities */
    }

    return (
        <div className="search-elem-22">
            <div className="search-elem-2">
                {/*    <span className="search-elem-3">*/}
                {/*    <p>Search Results</p>*/}
                {/*</span>*/}
                <span className="search-elem-4">
                    <p>Choose from these options</p>
                </span>
                <span className="search-elem-5">
                    <p>Best Spas in Stockholm at the moment</p>
                </span>
                <div className={"Sort"}>
                    <label>Sort by:</label>
                    <select name={"Sorting"} id={"sorter"}>
                        <option><p>Price</p></option>
                        <option><p>Number of perks</p></option>
                        <option><p>Distance from your location</p></option>
                    </select>
                </div>
            </div>
            <div className="search-elem-1">
                <div className="search-elem-6">
                    <div className="search-elem-7" onClick={bookACB}>
                        {/*<button onClick={bookACB}>*/}
                        <span className="search-elem-8">
                                <img src={search1}/>
                            </span>
                        <div className="search-elem-16">
                            <div className="search-elem-9">
                                    <span className="search-elem-10">
                                        <p>Book</p>
                                    </span>
                                <div className="search-elem-11">
                                    <div className="search-elem-12">
                                        <span className="search-elem-13">
                                        <p>Kinali's resort</p>
                                    </span>
                                        <span className="search-elem-14">
                                            <img
                                                src={search2}/>
                                    </span>
                                    </div>
                                    <span className="cd-paragraph-clean search-elem-15">
                                    <p>Nature's retreat with organic spa luxury.</p>
                                </span>
                                </div>
                                <div>
                                        <span className="search-elem-fac">
                                            <h4>
                                                <b>Perks</b>
                                            </h4>
                                            <ul>
                                                <li>Eco-friendly treatments</li>
                                                <li>Serene natural setting</li>
                                                <li>Organic ingredients</li>
                                            </ul>
                                        </span>
                                </div>
                            </div>
                            <div className="search-elem-17">
                                {/*<div className="search-elem-18"/>*/}
                                <div className="search-elem-19">
                                    <span className="search-elem-20">
                                    <p>Price</p>
                                </span>
                                    <span className="search-elem-21">
                                    <p>300 kr</p>
                                </span>
                                </div>
                            </div>
                        </div>
                        {/*</button>*/}
                    </div>
                    <div className="search-elem-37" onClick={bookACB}>
                        <span className="search-elem-23">
                        <img
                            src={search3}/>
                        </span>
                        <div className="search-elem-36">
                            <div className="search-elem-30">
                                <span className="search-elem-24">
                                <p>Book</p>
                            </span>
                                <div className="search-elem-29">
                                    <div className="search-elem-27">
                                        <span className="search-elem-25">
                                        <p>AZ Hotel &amp; Spa</p>
                                    </span><span className="search-elem-26">
                                        <img
                                            src={search2}/>
                                    </span>
                                    </div>
                                    <span className="cd-paragraph-clean search-elem-28">
                                    <p>City chic meets spa indulgence.</p>
                                </span>
                                </div>
                                <div>
                                        <span className="search-elem-fac">
                                            <h4>
                                                <b>Perks</b>
                                            </h4>
                                            <ul>
                                                <li>Central city location</li>
                                                <li>Advanced spa technology</li>
                                                <li>Panoramic views</li>
                                            </ul>
                                        </span>
                                </div>
                            </div>
                            <div className="search-elem-17">
                                {/*<div className="search-elem-18"/>*/}
                                <div className="search-elem-19">
                                    <span className="search-elem-20">
                                    <p>Price</p>
                                </span>
                                    <span className="search-elem-21">
                                    <p>450 kr</p>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-elem-52" onClick={bookACB}>
                        <span className="search-elem-38">
                            <img
                                src={search4}/>
                        </span>
                        <div className="search-elem-51">
                            <div className="search-elem-45">
                                <span className="search-elem-39">
                                <p>Book</p>
                            </span>
                                <div className="search-elem-44">
                                    <div className="search-elem-42">
                                        <span className="search-elem-40">
                                        <p>Botkyrka's Finest Spa</p>
                                    </span>
                                        <span className="search-elem-41">
                                        <img
                                            src={search2}/>
                                        </span>
                                    </div>
                                    <span className="cd-paragraph-clean search-elem-43">
                                    <p>Swedish sauna bliss and natural lake.</p>
                                </span>
                                </div>
                                <div>
                                        <span className="search-elem-fac">
                                            <h4>
                                                <b>Perks</b>
                                            </h4>
                                            <ul>
                                                <li>Authentic Swedish wellness experience</li>
                                                <li>Scenic countryside location</li>
                                            </ul>
                                        </span>
                                </div>
                            </div>
                            <div className="search-elem-17">
                                {/*<div className="search-elem-18"/>*/}
                                <div className="search-elem-19">
                                    <span className="search-elem-20">
                                    <p>Price</p>
                                </span>
                                    <span className="search-elem-21">
                                    <p>650 kr</p>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-elem-67" onClick={bookACB}>
                        <span className="search-elem-53">
                            <img
                                src={search5}/>
                        </span>
                        <div className="search-elem-66">
                            <div className="search-elem-60">
                                <span className="search-elem-54">
                                <p>Book</p>
                            </span>
                                <div className="search-elem-59">
                                    <div className="search-elem-57">
                                        <span className="search-elem-55">
                                        <p>MircoSpa</p>
                                    </span>
                                        <span className="search-elem-56">
                                            <img
                                                src={search2}/>
                                        </span>
                                    </div>
                                    <span className="cd-paragraph-clean search-elem-58">
                                    <p>Personalized, express beauty treatments.</p>
                                </span>
                                </div>
                                <div>
                                        <span className="search-elem-fac">
                                            <h4>
                                                <b>Perks</b>
                                            </h4>
                                            <ul>
                                                <li>Swift relaxation</li>
                                                <li>Targeted treatments</li>
                                                <li>Ideal for busy schedule</li>
                                            </ul>
                                        </span>
                                </div>
                            </div>
                            <div className="search-elem-17">
                                {/*<div className="search-elem-18"/>*/}
                                <div className="search-elem-19">
                                    <span className="search-elem-20">
                                    <p>Price</p>
                                </span>
                                    <span className="search-elem-21">
                                    <p>750 kr</p>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-elem-82" onClick={bookACB}>
                        <span className="search-elem-68">
                            <img
                                src={search8}/>
                        </span>
                        <div className="search-elem-81">
                            <div className="search-elem-75">
                                <span className="search-elem-69">
                                <p>Book</p>
                            </span>
                                <div className="search-elem-74">
                                    <div className="search-elem-72">
                                        <span className="search-elem-70">
                                        <p>Zghaier Facial</p>
                                    </span>
                                        <span className="search-elem-71">
                                            <img
                                                src={search2}/>
                                        </span>
                                    </div>
                                    <span className="cd-paragraph-clean search-elem-73">
                                    <p>Ancient secrets for modern facial glow.</p>
                                </span>
                                </div>
                                <div>
                                        <span className="search-elem-fac">
                                            <h4>
                                                <b>Perks</b>
                                            </h4>
                                            <ul>
                                                <li>Expertise in facial treatments</li>
                                                <li>Exclusive techniques</li>
                                                </ul>
                                        </span>
                                </div>
                            </div>
                            <div className="search-elem-17">
                                {/*<div className="search-elem-18"/>*/}
                                <div className="search-elem-19">
                                    <span className="search-elem-20">
                                    <p>Price</p>
                                </span>
                                    <span className="search-elem-21">
                                    <p>900 kr</p>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-elem-97" onClick={bookACB}>
                        <span className="search-elem-83">
                            <img
                                src={search7}/>
                        </span>
                        <div className="search-elem-96">
                            <div className="search-elem-90">
                                <span className="search-elem-84">
                                <p>Book</p>
                            </span>
                                <div className="search-elem-89">
                                    <div className="search-elem-87">
                                        <span className="search-elem-85">
                                        <p>MBS Spa &amp; Resort</p>
                                    </span>
                                        <span className="search-elem-86">
                                            <img
                                                src={search2}/>
                                        </span>
                                    </div>
                                    <span className="cd-paragraph-clean search-elem-88">
                                    <p>All-in-one golf and spa sanctuary.</p>
                                </span>
                                </div>
                                <div>
                                        <span className="search-elem-fac">
                                            <h4>
                                                <b>Perks</b>
                                            </h4>
                                            <ul>
                                                <li>Comprehensive wellness</li>
                                                <li>Leisure activities</li>
                                                <li>Luxurious amenities</li>
                                            </ul>
                                        </span>
                                </div>
                            </div>
                            <div className="search-elem-17">
                                {/*<div className="search-elem-18"/>*/}
                                <div className="search-elem-19">
                                    <span className="search-elem-20">
                                    <p>Price</p>
                                </span>
                                    <span className="search-elem-21">
                                    <p>1 300 kr</p>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function bookACB() {
        // eslint-disable-next-line react/prop-types
        props.onBook()
    }
}

export default ResultView