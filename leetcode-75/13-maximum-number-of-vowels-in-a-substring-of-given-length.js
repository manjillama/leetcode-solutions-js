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
 */
var maxVowels = function (s, k) {
  const isVowel = (char) => "aeiou".includes(char);

  let curr = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) curr++;
  }

  let max = curr;

  for (let i = k; i < s.length; i++) {
    if (max === k) return max;

    if (isVowel(s[i - k])) curr--;

    if (isVowel(s[i])) curr++;

    max = Math.max(max, curr);
  }

  return max;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
