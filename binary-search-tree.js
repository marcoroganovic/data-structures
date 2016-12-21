function BSTree() {
  this.root = null;
}

BSTree.prototype.contains = function(val) {
  var current = this.root;

  while(current) {
    if(val < current.value) {
      current = current.right;
    } else if(val < current.value) {
      current = current.left;
    } else {
      return true;
    }
  }

  return false;
}

BSTree.prototype.add = function(val) {
  var node = {
    value: val,
    left: null,
    right: null
  }

  if(this.root === null) {
    this.root = node;
    return;
  }

  var current = this.root;

  while(true) {
    if(value > current.value) {
      if(!current.right) {
        current.right = node;
        break;
      }

      current = current.right;
    } else if(val < current.value) {
      if(!current.left) {
        current.left = node;
        break;
      }

      current = current.left;
    } else {
      break;
    }
  }
}
