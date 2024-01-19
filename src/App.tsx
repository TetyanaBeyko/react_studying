import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Buttons_menu from "./buttons_menu/buttons_menu";
import Calculator from "./Projects/calculator/calculator";

function Test_2() {
  return (
    <>
      <h3>Test_2</h3>
      <div className="bluevioletCircle" />
    </>
  )
}

function App() {

  return (
    <BrowserRouter >
      <Buttons_menu />
      <Routes>
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/2' element={<Test_2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
