import { useNavigate } from "react-router-dom";
import "./buttons_menu.scss"
import {NavigationProps} from "../types/types";

function Buttons_menu({ entries }: {entries: NavigationProps[]}) {
    const navigate = useNavigate();
  
    return (
      <div className="buttons_menu_wrapper">
        {entries.map((obj) => (
          <button
            key={obj.name}
            className={obj.path !== "" ? "button" : ""}
            onClick={() => navigate(`${obj.path}`)}
          >
            {obj.name}
          </button>
        ))}
      </div>
    );
  }

// function Buttons_menu() {
// const navigate = useNavigate();

//     return (
//         <div className="buttons_menu_wrapper">
//             <button type="button" onClick={() => navigate("/")}>Home</button>
//             <button type="button" onClick={() => navigate("/strange_calculator")}>Strange Calculator</button>
//             <button type="button" onClick={() => navigate("/calculator")}>Calculator</button>
//             <button type="button" onClick={() => navigate("/clock")}>Clock</button>
//             <button type="button" onClick={() => navigate("/fclock")}>Functional clock</button>
//             <button type="button" onClick={() => navigate("/rcomponent")}>Reduser component</button>
//         </div>

//     )
// }

export default Buttons_menu;