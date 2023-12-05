/**
Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const strArr = s.split("");
  let left = 0;
  let right = s.length - 1;
  const regex = /^[a-zA-Z]$/;

  while (left < right) {
    if (!regex.test(strArr[left])) {
      left++;
      continue;
    }
    if (!regex.test(strArr[right])) {
      right--;
      continue;
    }
    const temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }

  return strArr.join("");
};

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
