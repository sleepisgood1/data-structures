var Stack = function() {
  this.storage = {};
  this.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count ++;
};

Stack.prototype.pop = function() {
  var poppedvalue = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  if (this.count > 0 ) {
    this.count--;
  }
  return poppedvalue;
};

Stack.prototype.size = function() {
  return this.count;
};