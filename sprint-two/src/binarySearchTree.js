var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newTree = BinarySearchTree(value);
  if (newTree.value > this.value) {
    if (this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  } else if (newTree.value < this.value) {
    if (this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
  }
};

binaryTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  }
  if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }
};

binaryTreeMethods.depthFirstLog = function(fn) {
  fn(this.value);
  if (this.left) {
    this.left.depthFirstLog(fn);
  }
  if (this.right) {
    this.right.depthFirstLog(fn);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
