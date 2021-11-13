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


  // //check if value of tree (this.value) is equal to target. if it is return true.
  // if (this.value === target) {
  //   return true;
  // }
  // //foreach item in the tree.children, check if tree.value is equal to target
  // for (i = 0; i < this.children.length; i++) {
  //   var currentValue = this.children[i];
  //   if (currentValue.contains(target)) {
  //     return true;
  //   }
  // }
  // // this.children.forEach(function(item) {
  // //   return item.contains(target);
  // // });
  // return false;

};

// var tree = new Tree;
// tree.addChild(5);
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[1].addChild(8);
// console.log(tree.contains(7));
// console.log(tree.contains(8));
/*
 * Complexity: What is the time complexity of the above functions?
 */
