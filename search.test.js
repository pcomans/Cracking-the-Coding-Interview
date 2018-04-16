const Graph = require('./graph');

test('create simple graph', () => {
      let nodes = [];
      nodes[0] = new Graph.Node("0");
      expect(nodes[0].name).toBe("0");
      nodes[1] = new Graph.Node("0");
      nodes[2] = new Graph.Node("0");
      nodes[3] = new Graph.Node("0");
      nodes[4] = new Graph.Node("0");
      nodes[5] = new Graph.Node("0");
});
