class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.indextodelete = 0;
    this.poppedvalue;
  }
  enqueue(value) {
    this.storage[this.count] = value;
    this.count ++;
  }
  dequeue() {
    this.poppedvalue = this.storage[this.indextodelete];
    delete this.storage[this.indextodelete];
    if (this.count > this.indextodelete) {
      this.indextodelete++;
    }
    return this.poppedvalue;
  }
  size() {
    return this.count - this.indextodelete;
  }
}
