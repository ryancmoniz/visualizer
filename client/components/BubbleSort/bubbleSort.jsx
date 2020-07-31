import React, { useState, useEffect } from 'react';
import styles from './bubbleSort.module.css';

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function bubbleSort() {
  const [numberArray, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 100; i += 1) {
      array.push(randomIntFromRange(10, 1000));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <>
      <div className={styles.barContainer}>
        {numberArray.map((value) => (
          <div className={styles.bar} style={{ height: `${value / 2}px` }} />
        ))}
      </div>
    </>
  );
}

export default bubbleSort;
