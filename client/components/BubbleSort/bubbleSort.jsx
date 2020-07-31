import React, { useState, useEffect } from 'react';
import styles from './bubbleSort.module.css';
import bubble from '../../helpers/bubbleSort';

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function bubbleSort() {
  const [numberArray, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 250; i += 1) {
      array.push(randomIntFromRange(10, 1000));
    }
    setArray(array);
  };

  const sort = () => {
    const array = bubble(numberArray);
    setArray([...array]);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <>
      <div className={styles.barContainer}>
        {numberArray.map((value) => (
          <div className={styles.bar} style={{ height: `${value / 2.0}px` }} />
        ))}
      </div>
      <button type="submit" onClick={() => resetArray()}>
        Generate New Array
      </button>
      <button type="submit" onClick={() => sort()}>
        Bubble Sort
      </button>
    </>
  );
}

export default bubbleSort;
