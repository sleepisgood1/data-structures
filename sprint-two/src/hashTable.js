

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var currentTuple = LimitedArray(2);
  // currentTuple.set(0, k);
  // currentTuple.set(1, v);
  var bucket;
  if (bucket === undefined) {
    bucket = []; //no bucket found
  } else {
    bucket = this._storage.get(index);
  }
  for (var i = 0; i < bucket.length; i++) { //if bucket found
    if (bucket[i][0] === k) {
      var deletedValue = bucket[i][1];
      bucket[i][1] = v;
      return deletedValue;
    }
  }
  bucket.push([k, v]); //no bucket found
  this._storage.set(index, bucket);

  // }
  // // var found = false;
  // // for (var i = 0; i < this._storage.get(index).length; i++) {
  // //   if (this._storage.get(index)[i][0] === k) {
  // //     found = true;
  // //     this._storage.get(index)[i][1] = v;
  // //     break;
  // //   }
  // // }
  // // if (!found) {
  // //   this._storage.get(index).push([k, v]);
  // // }
  // if (this._storage.get(index)[counterForBucket] !== undefined) {
  //   counterForBucket++;
  //   this._storage.get(index).push([k, v]);
  // } else {
  //   this._storage.get(index).push([k, v]);
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) { //if bucket found
    if (bucket[i][0] === k) {
      var deletedValue = bucket[i][1];

      return deletedValue;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


