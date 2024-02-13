/**
 * Single Element in a Sorted Array
 * 
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const midNum = nums[mid];
    const frontNum = nums[mid - 1];
    const backNum = nums[mid + 1];

    if (midNum !== frontNum && midNum !== backNum) return midNum;

    if (midNum === frontNum) {
      if ((mid - 1) % 2 === 0) start = mid + 1;
      else end = mid - 1;
    } else {
      if (mid % 2 === 0) start = mid + 1;
      else end = mid - 1;
    }
  }
};
