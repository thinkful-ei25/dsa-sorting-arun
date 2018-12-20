'use strict';

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function medianOfThrees(array, low, high) {
  const mid = Math.floor((low + high) / 2);
  if (array[high] < array[low]) {
    swap(array, high, low);
  }

  if (array[mid] < array[low]) {
    swap(array, mid, low);
  }

  if (array[high] < array[mid]) {
    swap(array, high, mid);
  }

  return array[mid];
}

function partition(array, low, high) {
  const pivot = medianOfThrees(array, low, high);

  let i = low;
  let j = high;

  while (i < j) {
    while (array[i] < pivot) {
      i += 1;
    }

    while (array[j] > pivot) {
      j -= 1;
    }

    if (i < j) {
      swap(array, i, j);
      i += 1;
      j -= 1;
    }
  }

  return j;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) {
    return array;
  }

  const pivotPosition = partition(array, low, high);

  quicksort(array, low, pivotPosition);
  quicksort(array, pivotPosition + 1, high);
  return array;
}

/* eslint-disable no-console */
if (require.main === module) {
  // eslint-disable-next-line max-len
  const dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
    // const dataset = '27 68 15 62 93 98 73 28 16 46 87 28 65'
    .split(' ')
    .map((str) => parseInt(str, 10));

  console.log(quicksort(dataset).join(' '));
}
