import { useState } from 'react';
import "../../App.scss"
import styles from './strange_calsulator.module.scss'
import Button from './button';
import InputWindow from './inputWindow';

function Strange_calculator() {
  const [showWindow, setShowWindow] = useState(false);
  const [totalNumber, setTotalNumber] = useState(0);

  const clearTotalNumber = () => setTotalNumber(0)

  return (
    <div className='main'>
      <div className={styles.fon}>
        <h2>Total number : {totalNumber}</h2>
        <Button state={showWindow} setState={setShowWindow} innerText="Add number" />
        {showWindow && <InputWindow totalNumber={totalNumber} setTotalNumber={setTotalNumber} state={showWindow} setState={setShowWindow} />}
        {totalNumber !== 0 && <button className={styles.button} onClick={clearTotalNumber}>Clear</button>}
      </div>
    </div>
  )
}

export default Strange_calculator;
