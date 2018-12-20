'use strict';

let numberOfWrites;

function merge(arrayA, arrayB, outputArray) {
  let idxA = 0;
  let idxB = 0;
  let idxOutput = 0;

  while (idxA < arrayA.length && idxB < arrayB.length) {
    let nextValue;
    if (arrayA[idxA] < arrayB[idxB]) {
      nextValue = arrayA[idxA];
      idxA += 1;
    } else {
      nextValue = arrayB[idxB];
      idxB += 1;
    }

    outputArray[idxOutput] = nextValue;
    idxOutput += 1;
  }

  for (; idxA < arrayA.length; idxA += 1) {
    outputArray[idxOutput] = arrayA[idxA];
    idxOutput += 1;
  }

  for (; idxB < arrayB.length; idxB += 1) {
    outputArray[idxOutput] = arrayB[idxB];
    idxOutput += 1;
  }

  numberOfWrites += outputArray.length;

  return outputArray;
}

function mergesort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = mergesort(array.slice(0, middle));
  const right = mergesort(array.slice(middle));
  return merge(left, right, array);
}

/* eslint-disable no-console */
if (require.main === module) {
  // eslint-disable-next-line max-len
  const dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
    // const dataset = '27 68 15 62 93 98 73 28 16 46 87 28 65'
    .split(' ')
    .map((str) => parseInt(str, 10));

  numberOfWrites = 0;
  console.log(mergesort(dataset).join(' '));
  console.log(`number of writes: ${numberOfWrites}`);
}
