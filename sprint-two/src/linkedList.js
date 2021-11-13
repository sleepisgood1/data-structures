var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create var = new Node(value)
    var currentNode = new Node(value);
    //add node to list (count??? as key???  ) cross out

    //if head is null, set head's value equal to current node (var)
    if (list.head === null) {
      list.head = currentNode;
    }
    if (!list.head === list.tail) {
      list.tail.next = currentNode;
    }
    //change tail's next node to current node
    list.tail = currentNode;
    //set tail equal to current node (var)
    if (list.head.next === null && list.head !== list.tail) {
      list.head.next = list.tail;
    }
    //i dont htink head.next is same as tail.next - we never set the head.next value as anything
  };

  list.removeHead = function() {
    //store list.head.next's node
    if (list.head === null) {
      return null;
    }
    var removedValue = list.head.value;
    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
      return removedValue;
    } else {
    //change ucrrent head to become the next value
      var tempNode = list.head.next;
      list.head = tempNode;
      return removedValue;
    // return removedvalue;
    }
  };

  list.contains = function(target) {
    var contain = false;

    var checkContains = function (node) {
      var temporaryCurrentNode = node;
      if (temporaryCurrentNode.value === target) {
        contain = true;
      } else {
        if (temporaryCurrentNode.next) {
          checkContains(temporaryCurrentNode.next);
        }
      }
    };

    checkContains(list.head);

    return contain;

    //check list.head
    //if node.vlaue of head is target, return true
    //else nove.enxt of head and check using contains. (recursive)
    //return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
