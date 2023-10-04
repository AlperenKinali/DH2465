function SearchView(props){
    return (<div>
        <main>
            <section id="home">
                <h1>Welcome to Book A Spa</h1>
                <p>Find and book the best spas near you!</p>
            </section>
            <section id="search">
                <form action="results.html" method="get">
                    <div id="searchBars">
                        <input type="text" name="location" placeholder="Location..."/>
                        <input type="text" name="length" placeholder="Length of Stay..."/>
                        <input type="date" name="date"/>
                    </div>
                    <button onClick={SearchACB}>Search</button>
                </form>
            </section>
        </main>
    </div>)

    function SearchACB(){
        // eslint-disable-next-line react/prop-types
        props.onSearch()
    }
}

export default SearchView