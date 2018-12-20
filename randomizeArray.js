'use strict';
/*
Simple case:
  If everything 0..n-1 is randomized, all we need to do is pick a random
  position in 0..n-1 and swap our value
*/

function shuffleArrayIterative(array) {
  for (let i = 1; i < array.length; i += 1) {
    const randomPostion = Math.floor(Math.random() * (i + 1 - Number.EPSILON));

    const temp = array[randomPostion];
    array[randomPostion] = array[i];
    array[i] = temp;
  }
  return array;
}

if (require.main === module) {
  console.log(shuffleArrayIterative([1, 2, 3, 4, 5]));
}
