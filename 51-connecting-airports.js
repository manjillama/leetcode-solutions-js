/**
Find connecting airports
 */

const airports = "PHX BKK OCK JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OCK"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

function CreateGraph() {
  const adjacencyList = new Map();

  function addNode(airport) {
    adjacencyList.set(airport, []);
  }

  function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
  }

  this.getAdjacencyList = function () {
    return adjacencyList;
  };

  airports.forEach(addNode);
  routes.forEach((route) => addEdge(...route));
}

const graph = new CreateGraph();
const adjacencyList = graph.getAdjacencyList();

function isConnected(origin, destination) {
  let isConnected = false;
  function bfs() {
    let queue = [origin];
    const alreadyVisitedAirports = new Set();
    while (queue.length) {
      let nextConnectingAirports = [];
      queue.forEach((airport) => {
        alreadyVisitedAirports.add(airport);
        if (airport === destination) return (isConnected = true);
        else {
          nextConnectingAirports.push(
            ...adjacencyList
              .get(airport)
              .filter(
                (connectingAirport) =>
                  !alreadyVisitedAirports.has(connectingAirport)
              )
          );
        }
        queue = nextConnectingAirports;
      });
    }
  }

  function dfs(airport, alreadyVisitedAirports = new Set()) {
    const connectingAirports = adjacencyList.get(airport);

    for (const connectingAirport of connectingAirports) {
      if (connectingAirport === destination) return (isConnected = true);

      if (!alreadyVisitedAirports.has(connectingAirport))
        dfs(connectingAirport, alreadyVisitedAirports.add(airport));
    }
  }

  dfs(origin);
  bfs();

  return isConnected;
}
console.log(adjacencyList);
console.log("Is connected", isConnected("PHX", "BKK"));
