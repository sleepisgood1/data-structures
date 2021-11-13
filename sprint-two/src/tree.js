var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a new tree with this value
  var currentTree = new Tree(value);
  //push this tree onto the children list
  this.children.push(currentTree);
};

treeMethods.contains = function(target) {
  var contain = false;

  var checkContains = function(tree) {
    var currentContainTree = tree;

    if (currentContainTree.value === target) {
      contain = true;
    }

    for (var i = 0; i < currentContainTree.children.length; i++) {
      checkContains(currentContainTree.children[i]);
    }
  };

  checkContains(this);

  return contain;
  //check if value of tree (this.value) is equal to target. if it is return true.
  // var targetExists = false;
  // if (this.value === target) {
  //   targetExists = true;
  // }
  // //foreach item in the tree.children, check if tree.value is equal to target
  // if (this.children.length !== 0) {
  //   this.children.forEach(function(item) {
  //     item.contains(target);
  //   });
  // }
  // return false;
  //if it is return true;
  //return the value of rcursing contains on item.chiledren
  //return false


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
