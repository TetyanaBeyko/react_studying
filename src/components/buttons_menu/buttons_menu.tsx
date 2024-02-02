import { useNavigate } from "react-router-dom";
import "./buttons_menu.scss"

function Buttons_menu() {
const navigate = useNavigate();

    return (
        <div className="buttons_menu_wrapper">
            <button type="button" onClick={() => navigate("/")}>Home</button>
            <button type="button" onClick={() => navigate("/strange_calculator")}>Strange Calculator</button>
            <button type="button" onClick={() => navigate("/calculator")}>Calculator</button>
            <button type="button" onClick={() => navigate("/clock")}>Clock</button>
            <button type="button" onClick={() => navigate("/fclock")}>Functional clock</button>
        </div>

    )
}

export default Buttons_menu;