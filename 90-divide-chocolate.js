/**
Divide Chocolate

You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.

You want to share the chocolate with your k friends so you start cutting the chocolate bar into k + 1 pieces using k cuts, each piece consists of some consecutive chunks.

Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

 

Example 1:

Input: sweetness = [1,2,3,4,5,6,7,8,9], k = 5
Output: 6
Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]
Example 2:

Input: sweetness = [5,6,7,8,9,1,2,3,4], k = 8
Output: 1
Explanation: There is only one way to cut the bar into 9 pieces.
Example 3:

Input: sweetness = [1,2,2,1,2,2,1,2,2], k = 2
Output: 5
Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]
 

Constraints:

0 <= k < sweetness.length <= 104
1 <= sweetness[i] <= 105
 */
/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
  let low = 1,
    high = Math.floor(sweetness.reduce((a, b) => a + b) / (k + 1));

  const check = (target) => {
    let sum = 0;
    let chunks = 0;

    for (const sweet of sweetness) {
      sum += sweet;
      if (sum >= target) {
        chunks++;
        sum = 0;
      }
    }
    return chunks >= k + 1;
  };

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (check(mid)) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return high;
};

console.log(maximizeSweetness([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(maximizeSweetness([5, 6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(maximizeSweetness([1, 2, 2, 1, 2, 2, 1, 2, 2], 2));
