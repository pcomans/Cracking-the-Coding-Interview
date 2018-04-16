class BSTNode {
  constructor(value) {
    this.value = value;
    this._left = null;
    this._right = null;
    this._parent = null;
  }
  isBst() {
    return isBst_impl(this, null, null);
  }
  set left(n) {
    this._left = n;
    n._parent = this;
  }
  get left() {
    return this._left;
  }
  set right(n) {
    this._right = n;
    n._parent = this;
  }
  get right() {
    return this._right;
  }
  set parent(n) {
    this._parent = n;
  }
  get parent() {
    return this._parent;
  }

  // an algorithm to  nd the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.
  succ() {}
}

// Check that min <= x < max
// Consider null values to indicate no bounds
function checkValue(x, min, max) {
  if (min != null && x < min) {
    return false;
  }
  if (max != null && x >= max) {
    return false;
  }
  return true;
}

// Returns true iff this is the root of a BST.
function isBst_impl(root, min, max) {
  if (root.left == null && root.right == null) {
    // Trivial case
    return checkValue(root.value, min, max);
  }
  if (root.left != null) {
    if (
      root.left.value >= root.value ||
      !isBst_impl(root.left, min, root.value)
    ) {
      return false;
    }
  }
  if (root.right != null) {
    if (
      root.right.value <= root.value ||
      !isBst_impl(root.right, root.value, max)
    ) {
      return false;
    }
  }
  return true;
}

module.exports = {
  BSTNode: BSTNode
};
