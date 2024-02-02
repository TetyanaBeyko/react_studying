import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Buttons_menu from "./components/buttons_menu/buttons_menu";
import Home from "./pages/home";
import Calculator from "./Projects/calculator/calculator";
import Strange_calculator from "./Projects/strange_calculator/strange_calculator";
import Clock from "./Projects/class_clock/clocks";
import Functional_clock from "./Projects/functional_clock/fclock";

function App() {

  return (
    <BrowserRouter >
      <div className="projects_wrapper">
        <Buttons_menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/strange_calculator' element={<Strange_calculator />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/clock' element={<Clock />} />
          <Route path='/fclock' element={<Functional_clock />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
