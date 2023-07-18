/**
Maximum Number of Balloons

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 

Constraints:

1 <= text.length <= 104
text consists of lower case English letters only.
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let dic = new Map();

  for (const char of text) {
    dic.set(char, (dic.get(char) || 0) + 1);
  }

  dic.set("l", Math.floor((dic.get("l") || 0) / 2));
  dic.set("o", Math.floor((dic.get("o") || 0) / 2));

  return (
    Math.min(
      dic.get("b"),
      dic.get("a"),
      dic.get("l"),
      dic.get("o"),
      dic.get("n")
    ) || 0
  );
};

console.log(maxNumberOfBalloons("leetcode"));
