const swap = (i, j, array) => {
  const newArr = array;
  const temp = newArr[j];

  newArr[j] = newArr[i];
  newArr[i] = temp;
  return newArr;
};

const bubbleSort = (array, animations = []) => {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      animations.push([i, i + 1]);
      animations.push([i, i + 1]);
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        animations.push([i, i + 1]);
        isSorted = false;
      } else {
        animations.push([i, i]);
      }
    }
    counter += 1;
  }
  return animations;
};

export default bubbleSort;
