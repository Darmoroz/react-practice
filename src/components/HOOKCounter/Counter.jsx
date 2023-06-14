import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export const Counter = () => {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Total clicks counterA: ${totalClicks} times`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Click counterA {counterA} times
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Click counterB {counterB} times
      </button>
    </>
  );
};
