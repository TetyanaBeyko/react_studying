import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Buttons_menu from "./buttons_menu/buttons_menu";
import Calculator from "./Projects/calculator/calculator";
import Strange_calculator from "./Projects/strange_calculator/strange_calculator"

function App() {

  return (
    <BrowserRouter >
      <div className="projects_wrapper">
        <Buttons_menu />
        <Routes>
          <Route path='/strange_calculator' element={<Strange_calculator />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
