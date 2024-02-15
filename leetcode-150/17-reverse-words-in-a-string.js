/**
Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = trimAllSpaces(s);
  let str = "";
  let currWord = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      str += currWord + " ";
      currWord = "";
    } else currWord = s[i] + currWord;
  }

  if (currWord) str += currWord;

  return str;
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("   a good   example "));
console.log(reverseWords("a"));

function trimAllSpaces(str) {
  const arr = [];
  let startIndex = 0;
  let endIndex = str.length - 1;

  while (true) {
    if (str[startIndex] === " ") startIndex++;
    if (str[endIndex] === " ") endIndex--;
    if (str[startIndex] !== " " && str[endIndex] !== " ") break;
  }

  let currWord = "";
  for (let i = startIndex; i <= endIndex; i++) {
    if (str[i] !== " ") currWord += str[i];

    if (str[i] === " " && currWord !== "") {
      arr.push(currWord);
      currWord = "";
    }
  }

  if (currWord) arr.push(currWord);
  return arr.join(" ");
}
