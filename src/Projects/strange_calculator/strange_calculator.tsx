import { ChangeEvent, useState } from 'react';
import './strange_calsulator.scss'

type ButtonProps = {
  state: boolean
  setState: CallableFunction
  innerText: string
}

type InputWindowProps = {
  totalNumber: number
  setTotalNumber: CallableFunction
  state: boolean
  setState: CallableFunction
}

function Button(props: ButtonProps) {

  const handleModal = () => {
    props.setState(!props.state);
  }

  return (
    <button className='button' onClick={handleModal}>{props.innerText}</button>
  )
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
    <div className="inputWindowContainer">
      <h3>Enter your number</h3>
      <input type="number" onChange={(event) => readInputValue(event)} />

      <div className="inputWindowButtons">
        <button className='button' onClick={setAddNumber}>Ok</button>
        <Button state={props.state} setState={props.setState} innerText="Close" />
      </div>
    </div>
  )
}


function Strange_calculator() {
  const [showWindow, setShowWindow] = useState(false);
  const [totalNumber, setTotalNumber] = useState(0);

  const clearTotalNumber = () => setTotalNumber(0)

  return (
    <div className='main'>
      <div className='fon'>
        <h2>Total number : {totalNumber}</h2>
        <Button state={showWindow} setState={setShowWindow} innerText="Add number" />
        {showWindow && <InputWindow totalNumber={totalNumber} setTotalNumber={setTotalNumber} state={showWindow} setState={setShowWindow} />}
        {totalNumber !== 0 && <button className='button' onClick={clearTotalNumber}>Clear</button>}
      </div>
    </div>
  )
}

export default Strange_calculator;
