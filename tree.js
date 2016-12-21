function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function(cb) {
  function walk(node) {
    cb(node);
    node.children.forEach(walk);
  }

  walk(this.root);
}

Tree.prototype.add = function(val, parentVal) {
  var newNode = {
    value: val,
    children: []
  }

  if(this.root === null) {
    this.root = newNode;
    return;
  }

  this.traverse(function(node) {
    if(node.value === parentVal) {
      node.children.push(newNode);
    }
  });
}
