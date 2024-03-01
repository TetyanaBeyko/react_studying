import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Buttons_menu from "./components/buttons_menu/buttons_menu";
import Home from "./pages/home";
import Calculator from "./Projects/calculator/calculator";
import Strange_calculator from "./Projects/strange_calculator/strange_calculator";
import Clock from "./Projects/class_clock/clocks";
import Functional_clock from "./Projects/functional_clock/fclock";
import Reduser_Component from "./Projects/recucer_component/reduser_component";
import Calendar from "./Projects/calendar/calendar";
import Weather from "./Projects/weather/weather";


const buttonMenuProps = [
  { name: "Home", path: "/" },
  { name: "Strange calculator", path: "/strange_calculator" },
  { name: "Calculator", path: "/calculator" },
  { name: "Clock", path: "/clock" },
  { name: "Functional clock", path: "/fclock" },
  { name: "Reduser component", path: "/rcomponent" },
  { name: "Calendar", path: "/calendar" },
  { name: "Weather", path: "/weather" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="projects_wrapper">
        <Buttons_menu entries={buttonMenuProps} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strange_calculator" element={<Strange_calculator />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/fclock" element={<Functional_clock />} />
          <Route path="/rcomponent" element={<Reduser_Component />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
