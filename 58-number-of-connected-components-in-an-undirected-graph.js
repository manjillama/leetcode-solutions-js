/**
Number of Connected Components in an Undirected Graph

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

 

Example 1:


Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
Example 2:


Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
 

Constraints:

1 <= n <= 2000
1 <= edges.length <= 5000
edges[i].length == 2
0 <= ai <= bi < n
ai != bi
There are no repeated edges.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const graph = new Map();
  const seen = new Set();
  let ans = 0;

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [a, b] of edges) {
    graph.get(a).push(b);
    graph.get(b).push(a);
  }

  const dfs = (node) => {
    for (const neighbor of graph.get(node)) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
    return false;
  };

  for (let i = 0; i < n; i++) {
    if (!seen.has(i)) {
      ans++;
      seen.add(i);
      dfs(i);
    }
  }

  return ans;
};

console.log(
  countComponents(4, [
    [2, 3],
    [1, 2],
    [1, 3],
  ])
);

// console.log(
//   countComponents(5, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );
