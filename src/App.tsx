import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Buttons_menu from "./buttons_menu/buttons_menu";

function Test_1() {
  return (
    <h3>Test_1</h3>
  )
}

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
        <Route path='/1' element={<Test_1 />} />
        <Route path='/2' element={<Test_2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
