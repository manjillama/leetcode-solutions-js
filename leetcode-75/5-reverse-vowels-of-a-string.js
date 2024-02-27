/**
Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const ansArr = new Array(s.length);

  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let left = 0;
  let right = s.length - 1;

  if (s.length === 1) return s;

  while (left <= right) {
    if (!vowelSet.has(s[left].toLowerCase())) {
      ansArr[left] = s[left];
      left++;
    }

    if (!vowelSet.has(s[right].toLowerCase())) {
      ansArr[right] = s[right];
      right--;
    }

    if (
      vowelSet.has(s[left].toLowerCase()) &&
      vowelSet.has(s[right].toLowerCase())
    ) {
      ansArr[left] = s[right];
      ansArr[right] = s[left];

      left++;
      right--;
    }
  }

  return ansArr.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels(" "));
console.log(reverseVowels(" T "));
