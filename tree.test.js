const Tree = require("./tree");

test("create simple graph", () => {
  let root = new Tree.BSTNode(5);
  expect(root.value).toBe(5);
  expect(root.isBst()).toBe(true);
  root.left = new Tree.BSTNode(8);
  expect(root.isBst()).toBe(false);
  root.left = new Tree.BSTNode(3);
  expect(root.isBst()).toBe(true);
  root.right = new Tree.BSTNode(8);
  expect(root.isBst()).toBe(true);
  root.right.left = new Tree.BSTNode(10);
  expect(root.isBst()).toBe(false);
  root.right.left = new Tree.BSTNode(7);
  root.right.right = new Tree.BSTNode(10);
  expect(root.isBst()).toBe(true);

  let root2 = new Tree.BSTNode(20);
  root2.left = new Tree.BSTNode(10);
  root2.right = new Tree.BSTNode(30);
  root2.left.right = new Tree.BSTNode(25);
  expect(root2.isBst()).toBe(false);
});
