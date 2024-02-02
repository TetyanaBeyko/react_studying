import { useState, useEffect } from "react";
import "../../App.scss";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import breadcrumbsMap from "../../components/breadcrumbs/breadcrumbsMap";
import "../functional_clock/fclock.module.scss";

function Functional_clock() {
  const projectName = "Functional_clock";

  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
    console.log("tick");
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="main">
      <Breadcrumbs entries={breadcrumbsMap[projectName]} />
      <div className="Clock">
        <h1>Functional clock </h1>
        <h2>{date.toLocaleString()}</h2>
      </div>
    </div>
  );
}

export default Functional_clock;
