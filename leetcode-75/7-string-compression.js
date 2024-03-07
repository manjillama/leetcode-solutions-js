/**

 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let curr = chars[0];
  let start = 0;

  for (let end = 1; end <= chars.length; end++) {
    if (curr[0] === chars[end]) {
      curr += curr[0];
    } else {
      prefix = curr[0];

      if (curr.length === 1) {
        chars[start] = curr[0];
        start++;
      } else {
        curr = prefix + curr.length;

        for (let i = 0; i < curr.length; i++) {
          chars[start] = curr[i];
          start++;
        }
      }

      curr = chars[end];
    }
  }

  return start;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(compress(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
