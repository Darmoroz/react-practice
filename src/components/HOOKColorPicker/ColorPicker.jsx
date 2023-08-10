import { useState } from 'react';
import { colorPickerOptions } from 'constants/colorPickerOptions';

import styles from './ColorPicker.module.css';

export const ColorPicker = () => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const { label } = colorPickerOptions[activeOptionIndex];

  const makeOptionClassName = index => {
    return index === activeOptionIndex ? styles.activeOption : styles.option;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Selected color: {label}</p>
      <div>
        {colorPickerOptions.map(({ label, color }, index) => (
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
