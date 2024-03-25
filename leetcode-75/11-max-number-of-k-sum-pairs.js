/**
Max Number of K-Sum Pairs
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const compliment = {};
  let counter = 0;

  for (const num of nums) {
    if (compliment[num] > 0) {
      compliment[num]--;
      counter++;
    } else
      compliment[k - num] ? compliment[k - num]++ : (compliment[k - num] = 1);
  }

  return counter;
};

console.log(
  maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
);
