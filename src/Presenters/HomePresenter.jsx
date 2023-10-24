import HomeView from "../Views/HomeView.jsx";
export default function Search(){
    return <HomeView onSearch = {StartSearchACB}/>

    function StartSearchACB(){
        window.location.hash = "#/search"
    }
}