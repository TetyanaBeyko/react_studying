import { useNavigate } from "react-router-dom";
import styles from "./breadcrumbs.module.scss";
import {NavigationProps} from "../types/types";

// type BreadcrumbsEntries = {
//   name: string;
//   path: string;
// };
// or
// function Breadcrumbs({ entries }: { entries: {name: string, path: string}[] }) {

function Breadcrumbs({ entries }: {entries: NavigationProps[]}) {
console.debug(entries);
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      {entries.map((obj) => (
        <button
          key={obj.name}
          className={obj.path !== "" ? styles.navigateButton : ""}
          onClick={() => navigate(`${obj.path}`)}
        >
          {obj.name}
        </button>
      ))}
    </div>
  );
}

export default Breadcrumbs;
