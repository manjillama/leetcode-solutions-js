/**

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
