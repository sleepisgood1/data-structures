

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  // this.storage = [];
  // this.edges = {key: []};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
  // this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (keys in this.storage) {
    if (keys === node.toString()) {
      return true;
    }
  }
  return false;
  // for (var i = 0; i < this.storage.length; i++) {
  //   if (this.storage[i] === node) {
  //     return true;
  //   }
  // }
  // return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (keys in this.storage) {
    for (var i = 0; i < this.storage[keys].length; i++) {
      if (this.storage[keys][i] === node) {
        this.storage[keys].splice(i, 1);
      }
    }
  }
  delete this.storage[node];
  // for (var i = 0; i < this.storage.length; i++) {
  //   if (this.storage[i] === node) {
  //     this.storage[i] = undefined;
  //   }
  // }
  // //remove all edges
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] !== undefined) {
    return this.storage[fromNode].includes(toNode);
  }
  return false;
  // for (var i = 0; i < this.edges.length; i++) {
  //   if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
  //     return true;
  //   }
  //   if (this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
  //     return true;
  //   }
  // }
  // return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
  // this.edges[fromNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexToNode = this.storage[fromNode].indexOf(toNode);
  if (indexToNode > -1) {
    this.storage[fromNode].splice(indexToNode, 1);
  }
  var indexFromNode = this.storage[toNode].indexOf(fromNode);
  if (indexFromNode > -1) {
    this.storage[toNode].splice(indexFromNode, 1);
  }
  // for (var i = 0; i < this.edges.length; i++) {
  //   if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
  //     this.edges[i] = undefined;
  //     return;
  //   } else if (this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
  //     this.edges[i] = undefined;
  //     return;
  //   }
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (keys in this.storage) {
    cb(keys);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


