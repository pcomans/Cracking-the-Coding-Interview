const Tree = require("./tree");

test("create simple tree", () => {
  let root = new Tree.BSTNode(5);
  expect(root.value).toBe(5);
  root.left = new Tree.BSTNode(3);
  expect(root.left.parent).toBe(root);
  root.right = new Tree.BSTNode(10);
  expect(root.right.parent).toBe(root);
});

test("check if something is a BST", () => {
  let root = new Tree.BSTNode(5);
  expect(root.value).toBe(5);
  expect(root.isBst()).toBe(true);
  root.left = new Tree.BSTNode(8);
  expect(root.left.parent).toBe(root);

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

test("should support finding a successor", () => {
  let root = new Tree.BSTNode(10);
  root.left = new Tree.BSTNode(5);
  root.right = new Tree.BSTNode(15);

  root.left.left = new Tree.BSTNode(1);
  root.left.right = new Tree.BSTNode(7);
  root.right.left = new Tree.BSTNode(12);
  root.right.right = new Tree.BSTNode(20);

  root.left.right.left = new Tree.BSTNode(6);
  root.left.right.right = new Tree.BSTNode(8);

  expect(root.isBst()).toBe(true);

  expect(root.succ()).toBe(12);

  expect(root.left.succ()).toBe(6);
  expect(root.right.succ()).toBe(20);

  expect(root.left.left.succ()).toBe(5);
  expect(root.left.right.succ()).toBe(8);
  expect(root.right.left.succ()).toBe(15);
  expect(root.right.right.succ()).toBe(null);

  expect(root.left.right.left.succ()).toBe(7);
  expect(root.left.right.right.succ()).toBe(10);
});
