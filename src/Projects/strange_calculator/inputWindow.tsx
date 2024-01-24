import { ChangeEvent, useState } from 'react';
import styles from "./strange_calsulator.module.scss";
import Button from "./button";

type InputWindowProps = {
    totalNumber: number
    setTotalNumber: CallableFunction
    state: boolean
    setState: CallableFunction
}

function InputWindow(props: InputWindowProps) {
    const [inputValue, setInputValue] = useState(0);

    const readInputValue = (event: ChangeEvent) => {
        setInputValue(Number((event.target as HTMLInputElement).value))
    }

    const setAddNumber = () => {
        props.setTotalNumber(props.totalNumber + inputValue)
    }
    return (
        <div className={styles.inputWindowContainer}>
            <h3>Enter your number</h3>
            <input type="number" onChange={(event) => readInputValue(event)} />

            <div className={styles.inputWindowButtons}>
                <button className={styles.button} onClick={setAddNumber}>Ok</button>
                <Button state={props.state} setState={props.setState} innerText="Close" />
            </div>
        </div>
    )
}

export default InputWindow;