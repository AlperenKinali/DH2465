function ResultView(props) {
    const mockHotel = [
        {
            hotelName: "Hotel 1",
            description: "slogan för spa 1",
            facilities: ["Pool", "Steam Room", "Sauna"],
            price: 350,
            duration: 3
        },
        {
            hotelName: "Hotel 2",
            description: "slogan för spa 2",
            facilities: ["Pool", "Steam Room", "Sauna"],
            price: 400,
            duration: 2,
            extra: "Massage available for extra cost"
        },
        {
            hotelName: "Hotel 3",
            description: "slogan för spa 3",
            facilities: ["Pool", "Sauna"],
            price: 150,
            duration: 2,
        },
    ]

    return (
        <div id="results">
            <h2>Search Results</h2>
            {mockHotel.map(genHotels)}
        </div>
    )
}

function genHotels(hotel) {
    return (<div className="hotelSpa">
            <div id="left"><img
                src="https://img.freepik.com/free-photo/young-woman-relaxing-spa-salon_176420-7577.jpg?w=1380&t=st=1698100580~exp=1698101180~hmac=c564ed0c61b6d71a56074e7f9e40486fd365c4394051b1980d1c51a26b5b6566"/>
                <div className="util">
                    <h3>Facilities</h3>
                    <ul>
                        {hotel.facilities.map(x => {
                            return <li>{x}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div id="right">
                <div className="description">
                    <h1>{hotel.hotelName}</h1>
                    <h3>{hotel.description}</h3>
                    <span>Length of stay: {hotel.duration} hours</span>
                </div>
                <div id="price">
                    <h4>Price</h4>
                    <p>Per hour: <b>{hotel.price} kr </b>per person <br/>
                        Total: <b>{hotel.price * hotel.duration} kr </b> per person
                    </p>
                    <button>Book</button>
                </div>
            </div>
        </div>
    )
}

export default ResultView