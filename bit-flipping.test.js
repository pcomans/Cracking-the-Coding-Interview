/*
 * Input:   arr[] = {1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1}
 *          m = 2
 * Output:  5 7
 * We are allowed to flip maximum 2 zeroes. If we flip
 * arr[5] and arr[7], we get 8 consecutive 1's which is
 * maximum possible under given constraints 
 * 
 * Input:   arr[] = {1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1}
 *          m = 1
 * Output:  7
 * We are allowed to flip maximum 1 zero. If we flip 
 * arr[7], we get 5 consecutive 1's which is maximum 
 * possible under given constraints.
 * 
 * Input:   arr[] = {0, 0, 0, 1}
 *          m = 4
 * Output:  0 1 2
 * Since m is more than number of zeroes, we can flip
 * all zeroes.
 */

test("Flip bits to get largest number of consecutive ones", () => {
  expect(bitFlip([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 2)).toEqual([5, 7]);
  expect(bitFlip([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1], 1)).toEqual([7]);
  expect(bitFlip([0, 0, 0, 1], 4)).toEqual([0, 1, 2]);
});

// Insight: the set of flipped bits can never be separated by a zero
function bitFlip(arr, m) {
  let startIdx = 0;
  let endIdx = 0;

  let zeroCount = 0;

  let bestStartIncl = 0;
  let bestEndExcl = 0;
  while (endIdx < arr.length) {
    if (zeroCount <= m) {
      if (arr[endIdx] == 0) {
        zeroCount++;
      }
      endIdx++;
    }

    if (zeroCount > m) {
      if (arr[startIdx] == 0) {
        zeroCount--;
      }
      startIdx++;
    }

    if (endIdx - startIdx > bestEndExcl - bestStartIncl) {
      bestStartIncl = startIdx;
      bestEndExcl = endIdx;
    }
  }

  let bits = [];
  for (let i = bestStartIncl; i < bestEndExcl; i++) {
    if (arr[i] == 0) {
      bits.push(i);
    }
  }
  return bits;
}

/*
1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1
^           ^
*/
