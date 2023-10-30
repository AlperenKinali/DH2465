import res1 from "../assets/res1.svg"
import res2 from "../assets/res2.svg"
import res3 from "../assets/res3.svg"

import { useState } from 'react'

function BookView(props){
    const [booked, setbooked] = useState(false)

    if (booked)
        return (
        <div>
            <span className="home-elem-22"><p>Thanks for booking </p></span>
            <button className="home-elem-26"><a href="#"><p>Home </p></a></button>
        </div>)
    else return (
        <div className="book-elem-1">
            <div className="book-elem-2">
                <div className="book-elem-3">
                    <span className="cd-paragraph-clean book-elem-5">
                    <p>Fill in your information</p>
                </span>
                    <div className="book-elem-12">
                        <div className="book-elem-6">
                            <span className="cd-paragraph-clean book-elem-7">
                            <p>Full name*</p>
                        </span>
                            <input type="text" placeholder="Full name" className="book-elem-8"/>
                        </div>
                    </div>
                    <div className="book-elem-11">
                        <span className="cd-paragraph-clean book-elem-9">
                        <p>Email*</p>
                    </span>
                        <input type="email" placeholder="Your email address" className="book-elem-10"/>
                    </div>
                    <div className="book-elem-15">
                        <span className="cd-paragraph-clean book-elem-13">
                        <p>Phone number</p>
                    </span>
                        <input type="text" placeholder="Your phone number" className="book-elem-14"/>
                    </div>
                    <button className="book-elem-16" onClick={bookacb}>
                        <p>Submit &amp; book</p>
                    </button>
                </div>
                <div className="book-elem-4">
                    <span className="cd-paragraph-clean book-elem-17">
                    <p>Kinali's resort</p>
                </span>
                    <span className="book-elem-18">
                    <p><br/>
                    </p>
                </span>
                    <span className="book-elem-19">
                    <p>Nature's retreat with organic spa luxury.</p>
                </span>
                    <div className="book-elem-20">
                        <div className="book-elem-21">
                            <span className="book-elem-22">
                                <img
                            src={res2}/>
                            </span>
                        </div>
                        <span className="book-elem-23">
                        <p>+1 123 4567 890</p>
                    </span>
                    </div>
                    <div className="book-elem-27">
                        <div className="book-elem-25">
                            <span className="book-elem-24">
                                <img
                            src={res3}/>
                            </span>
                        </div>
                        <span className="book-elem-26">
                        <p>Confirm@BookASpa.com</p>
                    </span>
                    </div>
                    <div className="book-elem-31">
                        <div className="book-elem-29">
                            <span className="book-elem-28">
                                <img
                            src={res1}/>
                            </span>
                        </div>
                        <span className="book-elem-30">
                        <p>Stockholm</p>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )

    function bookacb(){
        setbooked(true)
    }
}

export default BookView