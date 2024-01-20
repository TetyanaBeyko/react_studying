import { KeyboardEvent, useState } from 'react';
import styles from "./calculator.module.scss"

function Calculator() {
  const [totalNumber, setTotalNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [temporaryInputValue, setTemporaryInputValue] = useState("");
  const [mathOperator, setMathOperator] = useState("");
  const [disabled, setDisabled] = useState(false);

  const allowedCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "(", ")", "="];

  const clearTotalNumber = () => {
    setTotalNumber("");
    setInputValue("");
    setTemporaryInputValue("");
    setDisabled(false);
  }

  // const readInputValue = (event: ChangeEvent) => {
  //   // const value = (event.target as HTMLInputElement).value;
  //   // setInputValue(value);
  // }

  const readKey = (event: KeyboardEvent) => {
    const validateCharacter = allowedCharacters
      .filter((character) => character === event.key)[0];

    if (validateCharacter === "=") {
      setTotalNumber(`${inputValue} = ${parse(inputValue)}`);
    }

    if (validateCharacter !== undefined) {
      setInputValue(`${inputValue}${validateCharacter}`);
    }
  }

  function parse(str: string) {
    return Function(`'use strict'; return (${str})`)()
  }

  const handleInputNumber = (inputNumber: string) => {
    if (inputNumber === "." && inputValue === "") {
      setInputValue(`${"0"}${inputNumber}`);
    } else {
      setInputValue(`${inputValue}${inputNumber}`);
    }
  }

  const handleMathOperator = (operator: string) => {
    // equal ↓↓ setTotalNumber(totalNumber + " " + operator + " ");
    setTotalNumber(`${inputValue} ${operator}`);
    setTemporaryInputValue(inputValue);
    setMathOperator(operator);
    setInputValue("");
  }

  const calculate = () => {
    // switch (mathOperator) {
    //   case "+": setTotalNumber(`${totalNumber} ${inputValue} = ${Number(temporaryInputValue) + Number(inputValue)}`);
    //     break;
    //   case "-": setTotalNumber(`${totalNumber} ${inputValue} = ${Number(temporaryInputValue) - Number(inputValue)}`);
    //     break;
    //   case "*": setTotalNumber(`${totalNumber} ${inputValue} = ${Number(temporaryInputValue) * Number(inputValue)}`);
    //     break;
    //   case "/": setTotalNumber(`${totalNumber} ${inputValue} = ${Number(temporaryInputValue) / Number(inputValue)}`);
    //     break;
    // }
    const result = `${temporaryInputValue} ${mathOperator} ${inputValue}`
    setTotalNumber(`${totalNumber} ${inputValue} = ${parse(result)}`)

    setInputValue("");
    setTemporaryInputValue("");
    setDisabled(true);
  }

  return (
    <div className='main'>
      <div className={styles.fon}>
        <h1>Calculator</h1>
        <h2 className={styles.totalNumber}>{totalNumber}</h2>
        <textarea className={styles.textarea} value={inputValue} onKeyDown={(event) => readKey(event)} disabled={disabled} />

        <div className={styles.buttonContainer}>
          <button className={styles.number_button} onClick={() => handleInputNumber("7")}>7</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("8")}>8</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("9")}>9</button>
          <button className={styles.number_button} onClick={() => handleMathOperator("/")}>/</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("4")}>4</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("5")}>5</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("6")}>6</button>
          <button className={styles.number_button} onClick={() => handleMathOperator("*")}>*</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("1")}>1</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("2")}>2</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("3")}>3</button>
          <button className={styles.number_button} onClick={() => handleMathOperator("-")}>-</button>
          <button className={styles.number_button} onClick={() => handleInputNumber("0")}>0</button>
          <button className={styles.number_button} onClick={() => handleInputNumber(".")}>.</button>
          <button className={styles.number_button} onClick={calculate}>=</button>
          <button className={styles.number_button} onClick={() => handleMathOperator("+")}>+</button>
        </div>

        {/* {inputValue !== "" && <button className={styles.button} onClick={clearTotalNumber}>Clear</button>} */}
        <button className={styles.clear_button} onClick={clearTotalNumber}>Clear</button>
      </div>
    </div>
  )
}

export default Calculator;
