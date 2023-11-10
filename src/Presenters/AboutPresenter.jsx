import AboutView from "../Views/AboutView.jsx";
export default function About(){
    return <AboutView onSearch = {StartSearchACB}/>

    function StartSearchACB(){
        window.location.hash = "#/search"
    }
}