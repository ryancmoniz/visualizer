const bubble = (inputArr) => {
  const len = inputArr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (inputArr[j] > inputArr[j + 1]) {
        const tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

export default bubble;
