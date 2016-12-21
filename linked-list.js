function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.get = function(pos) {
  if(pos >= this.length) {
    throw new Error("Not in range");
  }

  var current = this.head;

  for(var i = 0; i < pos; i++) {
    current = current.next;
  }

  return current;
}

LinkedList.prototype.add = function(val, pos) {
  var node = {
    value: val,
    next: null
  };

  if(pos === 0) {
    node.next = this.head;
    this.head = node;
  } else {
    var prev = this.get(pos - 1);
    var current = prev.next;
    node.next = current;
    prev.node = node;
  }

  this.length++;
}

LinkedList.prototype.remove = function(pos) {
  if(!this.head) {
    throw new Error("List is empty");
  }

  if(pos === 0) {
    this.head = this.head.next;
  } else {
    var prev = this.get(pos - 1);
    prev.next = prev.next.next;
  }

  this.length--;
}
