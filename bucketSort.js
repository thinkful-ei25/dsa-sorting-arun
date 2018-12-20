'use strict';

/*
Store count of each value between [min, max] in an array (offset by min)
Then iterate through this array to build the output.
This is O(R + N) where R is the range between min and max
*/

function bucketSort(array, min, max) {
  const counts = new Array(max - min + 1).fill(0);
  array.forEach((i) => (counts[i - min] += 1));

  let outputIdx = 0;
  counts.forEach((count, value) => {
    for (let i = 0; i < count; i += 1) {
      array[outputIdx] = value + min;
      outputIdx += 1;
    }
  });

  return array;
}

if (require.main === module) {
  console.log(bucketSort([1, -9, 5, 3, 20, 3], -9, 20));
}
