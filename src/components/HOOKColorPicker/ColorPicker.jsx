import { useState } from 'react';
import styles from './ColorPicker.module.css';

export const ColorPicker = ({ options }) => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const { label } = options[activeOptionIndex];

  const makeOptionClassName = index => {
    return index === activeOptionIndex ? styles.activeOption : styles.option;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Selected color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
