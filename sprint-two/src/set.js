var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (this.storage[item] === undefined) {

  // }
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  allKeys = Object.keys(this._storage);
  if (allKeys.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
