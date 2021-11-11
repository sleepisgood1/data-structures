var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.indextodelete = 0;
  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var dequeuevalue = this.storage[this.indextodelete];
  delete this.storage[this.indextodelete];
  if (this.indextodelete < this.count) {
    this.indextodelete++;
  }
  return dequeuevalue;
};
queueMethods.size = function() {
  var difference = this.count - this.indextodelete;
  return difference;
};

