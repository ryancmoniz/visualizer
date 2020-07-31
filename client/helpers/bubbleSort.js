const bubble = (inputArr, animations = []) => {
  const newArray = inputArr;
  const len = inputArr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (newArray[j] > newArray[j + 1]) {
        const tmp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = tmp;
        animations.push([j, j + 1]);
      }
    }
  }
  return animations;
};

export default bubble;
