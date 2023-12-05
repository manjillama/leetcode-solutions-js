/**
Maximum Erasure Value

You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

 

Example 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
Example 2:

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let ans = 0;
  let sum = 0;
  let left = 0;
  const map = new Map();

  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], map.get(nums[right]) + 1 || 1);
    sum += nums[right];

    while (map.get(nums[right]) > 1) {
      map.set(nums[left], map.get(nums[left]) - 1);
      sum -= nums[left];
      left++;
    }

    ans = Math.max(ans, sum);
  }
  return ans;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
console.log(maximumUniqueSubarray([10000, 1, 10000, 1, 1, 1, 1, 1, 1]));
