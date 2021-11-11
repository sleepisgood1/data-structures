var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.indextodelete = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  var dequeuevalue = this.storage[this.indextodelete];
  delete this.storage[this.indextodelete];
  if (this.indextodelete < this.count) {
    this.indextodelete++;
    return dequeuevalue;
  }
};
Queue.prototype.size = function() {
  var difference = this.count - this.indextodelete;
  return difference;
};

// var Qq = new Queue();
