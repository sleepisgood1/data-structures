var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var addedcount = 0;
  var removedcount = 0;
  someInstance.enqueue = function(value) {
    storage[addedcount] = value;
    addedcount ++;
  };

  someInstance.dequeue = function() {
    var temp = storage[removedcount];
    if ((addedcount - removedcount) !== 0) {
      delete storage[removedcount];
      removedcount ++;
    }
    return temp;
  };

  someInstance.size = function() {
    return addedcount - removedcount;
  };

  return someInstance;
};
