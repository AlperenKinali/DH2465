import SearchView from "../Views/SearchView.jsx";
export default function Search(){
    return <SearchView onSearch = {StartSearchACB}/>

    function StartSearchACB(){
        window.location.hash = "#/result"
    }
}