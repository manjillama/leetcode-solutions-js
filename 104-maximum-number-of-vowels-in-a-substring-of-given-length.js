/**
Maximum Number of Vowels in a Substring of Given Length

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0;
  let ans = 0;
  let curr = 0;

  function isVowel(c) {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u")
      return true;
    return false;
  }

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      curr++;
      ans = Math.max(ans, curr);
    }
  }

  left++;

  for (let right = k; right < s.length; right++) {
    if (isVowel(s[left - 1])) curr--;
    if (isVowel(s[right])) curr++;

    ans = Math.max(ans, curr);

    left++;
  }

  return ans;
};

console.log(maxVowels("weallloveyou", 7));
console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
