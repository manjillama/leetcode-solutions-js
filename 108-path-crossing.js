/**
Path Crossing

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

Example 1:


Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:


Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
 

Constraints:

1 <= path.length <= 104
path[i] is either 'N', 'S', 'E', or 'W'.
 */
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let visitedCoordinates = new Set();

  let currentX = 0;
  let currentY = 0;

  visitedCoordinates.add(currentX + "," + currentY);

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") currentY++;
    else if (path[i] === "S") currentY--;
    else if (path[i] === "E") currentX++;
    else currentX--;

    if (visitedCoordinates.has(currentX + "," + currentY)) return true;
    else visitedCoordinates.add(currentX + "," + currentY);
  }
  return false;
};

console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));
