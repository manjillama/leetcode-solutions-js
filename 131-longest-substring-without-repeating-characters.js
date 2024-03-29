/**
 Given a string s, find the length of the longest substring without repeating characters.

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
 */

var lengthOfLongestSubstring = function (s) {
  let substr = "";
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (substr.includes(s[i])) {
      substr = substr.substring(substr.lastIndexOf(s[i]) + 1) + s[i];
    } else {
      substr += s[i];
      ans = Math.max(ans, substr.length);
    }
  }

  return ans;
};

console.log(lengthOfLongestSubstring("pwwkew"));
