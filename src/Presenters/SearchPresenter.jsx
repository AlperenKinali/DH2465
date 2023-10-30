import SearchBar from "../Views/searchBarView.jsx";
import Result from "../Views/ResultView.jsx";

export default function Search() {
    return (
        <div>
            <Result onBook={GoToBookingACB}/>
        </div>)

    function GoToBookingACB(){
        window.location.hash = "#/book"
    }

}