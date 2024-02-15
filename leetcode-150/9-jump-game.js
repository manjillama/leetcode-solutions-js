/**
 * Jump Game
 */
var canJump = function (nums) {
  let currentIndex = nums.length - 1;
  let nextIndex = currentIndex;

  while (currentIndex > 0 && nextIndex > 0) {
    nextIndex--;
    const num = nums[nextIndex];
    if (nextIndex + num >= currentIndex) {
      currentIndex = nextIndex;
    }
  }
  return currentIndex === 0;
};

console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 0]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
