import { useRef, useState, useEffect } from 'react';
import styles from './Clock.module.css';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>Current time: {time.toLocaleString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
};
