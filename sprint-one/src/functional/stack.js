var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    var poppedItem = storage[count - 1];
    if (count !== 0) {
      count --;
    }
    return poppedItem;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
