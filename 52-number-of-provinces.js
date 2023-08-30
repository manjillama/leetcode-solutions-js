/**
Number of Provinces

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

 

Example 1:


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
Example 2:


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let ans = 0;
  let n = isConnected.length;

  let seen = new Array(n).fill(false);

  let graph = new Map();

  let dfs = (node) => {
    for (const neighbor of graph.get(node)) {
      // the next 2 lines are needed to prevent cycles
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  };

  // build the graph
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      ans++;
      seen[i] = true;
      dfs(i);
    }
  }

  return ans;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
