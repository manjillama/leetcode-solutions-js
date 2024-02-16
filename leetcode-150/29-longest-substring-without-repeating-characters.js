/**
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let left = 0;
  let ans = 0;
  let currCount = 0;

  for (let right = 0; right < s.length; right++) {
    const curr = s[right];
    map.set(curr, map.get(curr) ? map.get(curr) + 1 : 1);
    currCount++;

    while (map.get(curr) > 1) {
      const leftValue = s[left];
      map.set(leftValue, map.get(leftValue) - 1);
      left++;
      currCount--;
    }

    ans = Math.max(ans, currCount);
  }

  return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
