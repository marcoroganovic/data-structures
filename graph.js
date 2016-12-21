function Graph() {
  this.nodes = [];
}

Graph.prototype.addNode(val) {
  this.nodes.push({
    value: val,
    lines: []
  });
}

Graph.prototype.find = function(val) {
  return this.nodes.find(function(node) {
    return node.value === val;
  });
}

Graph.prototype.addLine = function(startVal, endVal) {
  var startNode = this.find(startVal),
      endNode = this.find(endVal);

  if(!startNode || !endNode) {
    throw new Error("Both nodes need to exist");
  }

  startNode.lines.push(endNode);
}
