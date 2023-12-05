/**
Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const ans = [];
  digits = digits.split("");

  const map = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];

  function backtrack(curr, i) {
    if (curr.length === digits.length) return ans.push([...curr].join(""));

    for (let digit of map[digits[i]]) {
      curr.push(digit);
      backtrack(curr, i + 1);
      curr.pop();
    }
  }

  if (digits.length) backtrack([], 0);
  return ans;
};

console.log(letterCombinations("2"));
console.log(letterCombinations("23"));
console.log(letterCombinations("234"));
console.log(letterCombinations(""));
