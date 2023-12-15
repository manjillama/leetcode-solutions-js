/**
Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternMap = new Map();
  const sArrMap = new Map();
  const sArr = s.split(" ");

  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.get(pattern[i]) && patternMap.get(pattern[i]) !== sArr[i])
      return false;
    if (sArrMap.get(sArr[i]) && sArrMap.get(sArr[i]) !== pattern[i])
      return false;

    patternMap.set(pattern[i], sArr[i]);
    sArrMap.set(sArr[i], pattern[i]);
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("abba", "dog dog dog dog"));
