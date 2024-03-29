/**
Custom Sort String

You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

 

Example 1:

Input: order = "cba", s = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
Example 2:

Input: order = "cbafg", s = "abcd"
Output: "cbad"
 

Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.
 */
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = new Map();
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  for (let i = 0; i < order.length; i++) {
    if (map.get(order[i]) > 0) ans += order[i].repeat(map.get(order[i]));
    map.delete(order[i]);
  }

  map.forEach((value, key) => {
    ans += String(key).repeat(value);
  });

  return ans;
};

console.log(customSortString("cba", "abcd"));
console.log(customSortString("cbafg", "abcd"));
console.log(customSortString("kqep", "pekeq"));
