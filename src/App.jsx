import { useState } from 'react'
import {createHashRouter, RouterProvider, useNavigate} from "react-router-dom";
import Home from './Presenters/HomePresenter.jsx'
import About from './Presenters/AboutPresenter.jsx'
import Search from "./Presenters/SearchPresenter.jsx";
import Topbar from "./Presenters/TopbarPresenter.jsx";
import Bottombar from "./Presenters/BottombarPresenter.jsx";
import Book from "./Presenters/BookPresenter.jsx"
function App() {
  const [count, setCount] = useState(0)
  const routes = [
      {
          path: "/",
          element: <Home/>
      },
      {
          path: "/search",
          element: <div className="searchPage"><Search/></div>
      },
      {
          path: "/book",
          element: <Book/>
      },
      {
          path: "/about",
          element: <About/>
      }
  ]
  return (
    <div id="holder">
        <div className={"Topbar"}><Topbar/></div>
        <div className={"Body"}><RouterProvider router={createHashRouter(routes)}/></div>
        {/*<div className={"Bottombar"}><Bottombar/></div>*/}
        <Bottombar/>
    </div>
  )
}

export default App
