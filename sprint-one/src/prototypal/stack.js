var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
stackMethods.pop = function() {
  var poppeditem = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  if (this.count !== 0) {
    this.count --;
  }
  return poppeditem;
};
stackMethods.size = function() {
  return this.count;
};
