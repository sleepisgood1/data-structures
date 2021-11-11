var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.numbertodelete = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
  //this is referring to invocation of newQueue
};
queueMethods.dequeue = function() {
  var deletedvalue = this.storage[this.numbertodelete];
  delete this.storage[this.numbertodelete];
  if (this.numbertodelete < this.count) {
    this.numbertodelete++;
  }
  return deletedvalue;
};
queueMethods.size = function() {
  var difference = this.count - this.numbertodelete;
  return difference;
};