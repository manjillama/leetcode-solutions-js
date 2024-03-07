/**
Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

 */
var moveZeroes = function (nums) {
  let left = 0,
    right = 1;

  while (right < nums.length) {
    if (nums[left] === 0 && nums[right] === 0) {
      right++;
      continue;
    }
    if (nums[left] === 0) {
      nums[left] = nums[right];
      nums[right] = 0;
    }
    left++;
    right++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 0, 0, 12]));
console.log(moveZeroes([1, 2, 3, 4, 5]));
console.log(moveZeroes([0, 0, 1, 0, 2]));
console.log(moveZeroes([0]));
