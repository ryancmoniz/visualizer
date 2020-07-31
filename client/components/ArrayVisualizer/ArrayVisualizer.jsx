import React, { useState, useEffect } from 'react';
import styles from './ArrayVisualizer.module.css';
import bubbleSortHelper from '../../helpers/bubbleSort';

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ArrayVisualizer() {
  const [numberArray, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < 250; i += 1) {
      array.push(randomIntFromRange(10, 1000));
    }
    setArray(array);
  };

  const bubbleSort = () => {
    const animations = bubbleSortHelper(numberArray);
    for (let i = 0; i < animations.length; i += 1) {
      const bars = document.getElementsByClassName('bar');
      setTimeout(() => {
        const h1 = bars[animations[i][1]].style.height;
        const h0 = bars[animations[i][0]].style.height;
        bars[animations[i][1]].style.backgroundColor = 'red';
        bars[animations[i][0]].style.backgroundColor = 'red';
        bars[animations[i][0]].style.height = h1;
        bars[animations[i][1]].style.height = h0;
      }, i * 2);
    }
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <>
      <div className={styles.barContainer}>
        {numberArray.map((value) => (
          <div className={`${styles.bar} bar`} style={{ height: `${value / 2.0}px` }} />
        ))}
      </div>
      <button type="submit" onClick={() => resetArray()}>
        Generate New Array
      </button>
      <button type="submit" onClick={() => bubbleSort()}>
        Bubble Sort
      </button>
    </>
  );
}

export default ArrayVisualizer;
