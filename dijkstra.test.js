class Graph {
  constructor(paths) {
    let pathLength = paths.length;
    for (let path of paths) {
      console.assert(path.length == pathLength, "Adjacency matrix must be NxN");
    }
    this.paths = paths;
  }

  vertex(fromNode, toNode) {
    console.assert(
      fromNode < this.paths.length,
      "fromNode must be a node in the graph"
    );
    console.assert(
      toNode < this.paths.length,
      "toNode must be a node in the graph"
    );
    return this.paths[fromNode][toNode];
  }

  dijkstra(fromNode, toNode) {
    let nodes = this.paths.map((path, idx) => {
      return {
        idx: idx,
        visited: false,
        distance: idx == fromNode ? 0 : -1
      };
    });

    // While we have a reachable unvisited node
    while (nodes.find(node => !node.visited && node.distance != -1)) {
      // find reachable unvisited node with min distance
      let currentNode = null;
      for (let idx in nodes) {
        if (!nodes[idx].visited && nodes[idx].distance != -1) {
          if (
            currentNode == null ||
            currentNode.distance > nodes[idx].distance
          ) {
            currentNode = nodes[idx];
          }
        }
      }
      // Mark node as visited
      currentNode.visited = true;

      // Update the smallest tentative distance
      for (let idx in nodes) {
        let currentVertex = this.vertex(currentNode.idx, idx);
        if (currentVertex != null) {
          let currentDistance = currentNode.distance + currentVertex;
          if (
            nodes[idx].distance == -1 ||
            nodes[idx].distance > currentDistance
          ) {
            nodes[idx].distance = currentDistance;
          }
        }
      }
    }
    return nodes[toNode].distance;
  }
}

describe("Dijkstra's algorithm", () => {
  // Use the example graph from Wikipedia
  // https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#/media/File:Dijkstra_Animation.gif
  const paths = [
    [0, 7, 9, null, null, 14], //1
    [7, 0, 10, 15, null, null], //2
    [9, 10, 0, 11, null, 2], //3
    [null, 15, 11, 0, 6, null], //4
    [null, null, null, 6, 0, 9], //5
    [14, null, 2, null, 9, null] //6
  ];

  let g = new Graph(paths);
  test("Should use a graph backed by an adjacency matrix", () => {
    expect(g.vertex(2, 3)).toBe(11);
    expect(g.vertex(3, 2)).toBe(11);
    expect(g.vertex(0, 0)).toBe(0);
    expect(g.vertex(0, 4)).toBe(null);
    expect(g.vertex(0, 5)).toBe(14);
  });
  test("Graph should return the shortest route between two nodes", () => {
    expect(g.dijkstra(0, 5)).toBe(11);
  });
  const paths2 = [
    [0, -1],
    [-1, 0]
  ];

  let g2 = new Graph(paths2);
  test("dijkstra should return -1 if there is no path", () => {
    expect(g2.dijkstra(0, 1)).toBe(-1);
  });
});
