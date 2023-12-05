/**
Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const stringArr = s.split(" ");
  let ans = "";
  function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
  }

  for (const str of stringArr) {
    ans += reverseString(str) + " ";
  }

  return ans.trim();
};

console.log(reverseWords("Let's take LeetCode contest"));
