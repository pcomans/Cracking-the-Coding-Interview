const Graph = require("./graph");

test("create simple graph", () => {
  let nodes = [];
  times(6, i => (nodes[i] = new Graph.Node(i.toString())));
  expect(nodes[0].name).toEqual("0");
  expect(nodes.length).toBe(6);

  nodes[0].children.push(nodes[1]);
  nodes[0].children.push(nodes[4]);
  nodes[0].children.push(nodes[5]);

  nodes[1].children.push(nodes[3]);
  nodes[1].children.push(nodes[4]);

  nodes[2].children.push(nodes[1]);

  nodes[3].children.push(nodes[2]);
  nodes[3].children.push(nodes[4]);

  expect(Graph.bfs(nodes[0]).map(n => n.name)).toEqual([
    "0",
    "1",
    "4",
    "5",
    "3",
    "2"
  ]);
  expect(Graph.dfs(nodes[0]).map(n => n.name)).toEqual([
    "0",
    "1",
    "3",
    "2",
    "4",
    "5"
  ]);
});

function times(n, fun) {
  for (let i = 0; i < n; i++) {
    fun(i);
  }
}
