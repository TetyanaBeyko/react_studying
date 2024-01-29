import "../App.scss"
import styles from "./home.module.scss"
import React_Logo from "../assets/react_logo.png"
import TS_Logo from "../assets/ts_logo.png"


function Home() {
    return (
        <div className="main">
            <div className={styles.body}>
                <img className={styles.img} src={React_Logo} alt="react_logo" />
                <h2>Learning JS/React</h2>
                <img className={styles.img} src={TS_Logo} alt="ts_logo" />
                <h2>Learning TS</h2>
            </div>
        </div>
    )
}

export default Home;