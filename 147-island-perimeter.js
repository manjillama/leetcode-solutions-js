/**
Island Perimeter

You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example 1:


Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
Example 2:

Input: grid = [[1]]
Output: 4
Example 3:

Input: grid = [[1,0]]
Output: 4
 

Constraints:

row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] is 0 or 1.
There is exactly one island in grid.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const getPerimeterOfBlock = (row, col) => {
    let count = 0;
    for (const [x, y] of directions) {
      const nextRow = row + x;
      const nextCol = col + y;
      if (nextRow === grid.length) count++;
      else if (nextCol === grid[0].length) count++;
      else if (nextRow < 0) count++;
      else if (nextCol < 0) count++;
      else if (grid[nextRow][nextCol] === 0) count++;
      else if (grid[nextRow][nextCol] === 0) count++;
      console.log("Next", nextRow, nextCol, count);
    }
    // console.log("Next row, col", row, col, count);

    return count;
  };

  let totalPerimeter = 0;

  //   console.log("Perimeter", getPerimeterOfBlock(0, 3));

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) totalPerimeter += getPerimeterOfBlock(row, col);
    }
  }

  return totalPerimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
