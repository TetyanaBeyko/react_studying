import { useNavigate } from "react-router-dom";

function Buttons_menu() {
const navigate = useNavigate();

    return (
        <div className="buttons_menu_wrapper">
            <button type="button" onClick={() => navigate("/calculator")}>Calculator</button>
            <button type="button" onClick={() => navigate("/2")}>Test_2</button>
        </div>

    )
}

export default Buttons_menu;