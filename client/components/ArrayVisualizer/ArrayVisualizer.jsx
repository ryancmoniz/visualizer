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
    for (let i = 0; i < 100; i += 1) {
      array.push(randomIntFromRange(10, 1000));
    }
    setArray(array);
  };

  const bubbleSort = () => {
    const animations = bubbleSortHelper(numberArray);
    for (let i = 0; i < animations.length; i += 1) {
      const bars = document.getElementsByClassName('bar');
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const color = i % 3 === 0 ? 'purple' : 'turquoise';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, (i + 1) * 10);
      } else {
        setTimeout(() => {
          const h1 = barOneStyle.height;
          const h2 = barTwoStyle.height;
          barOneStyle.height = h2;
          barTwoStyle.height = h1;
        }, (i + 1) * 10);
      }
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
