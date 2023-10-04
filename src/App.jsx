import { useState } from 'react'
import {createHashRouter, RouterProvider, useNavigate} from "react-router-dom";
import Search from './Presenters/SearchPresenter.jsx'
import Result from "./Presenters/ResultPresenter.jsx";
import Topbar from "./Presenters/TopbarPresenter.jsx";
import Bottombar from "./Presenters/BottombarPresenter.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const routes = [
      {
          path: "/",
          element: <div className="homePage"><Search/></div>
      },
      {
          path: "/result",
          element: <div className="resultPage"><Result/></div>
      }
  ]
  return (
    <div>
        <Topbar/>
        <div><RouterProvider router={createHashRouter(routes)}/></div>
        <Bottombar/>
    </div>
  )
}

export default App
