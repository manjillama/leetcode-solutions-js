/**
Max Sum of a Pair With Equal Sum of Digits

You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

 

Example 1:

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.
Example 2:

Input: nums = [10,12,19,14]
Output: -1
Explanation: There are no two numbers that satisfy the conditions, so we return -1.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  function getDigitSum(digit) {
    let sum = 0;

    while (digit > 0) {
      sum += digit % 10;
      digit = Math.floor(digit / 10);
    }
    return sum;
  }

  const map = new Map();
  let ans = -1;
  const sortedNums = nums.sort((a, b) => b - a);
  for (const num of sortedNums) {
    if (map.get(getDigitSum(num)))
      ans = Math.max(ans, map.get(getDigitSum(num)) + num);
    map.set(getDigitSum(num), num);
  }

  return ans;
};

console.log(maximumSum([18, 43, 36, 13, 7]));
