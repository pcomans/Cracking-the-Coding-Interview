const Tree = require('./tree');

test('create simple graph', () => {
    let root = new Tree.BSTNode(5);
    expect(root.value).toBe(5);
});