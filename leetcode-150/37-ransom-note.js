/**
Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const char of magazine) {
    map.set(char, map.get(char) ? map.get(char) + 1 : 1);
  }

  for (const char of ransomNote) {
    if (!map.get(char) || map.get(char) <= 0) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
console.log(canConstruct("", ""));
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "bb"));
