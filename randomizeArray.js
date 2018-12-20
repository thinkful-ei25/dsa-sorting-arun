'use strict';
/*
Simple case:
  If everything 0..n-1 is randomized, all we need to do is pick a random
  position in 0..n-1 and swap our value
*/

function randomizeArray(array, low = 0, high = array.length) {
  if (high - low <= 1) {
    return array;
  }

  const shuffled = randomizeArray(array, 0, high - 1);

  const positionToShuffle = Math.floor(Math.random() * high);

  const temp = shuffled[positionToShuffle];
  shuffled[positionToShuffle] = array[high - 1];
  shuffled[high - 1] = temp;

  return shuffled;
}

if (require.main === module) {
  console.log(randomizeArray([1, 2, 3, 4, 5]));
}
