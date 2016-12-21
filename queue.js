function Queue() {
  this.list = [];
  this.length = 0;
}

Queue.prototype.enqueue = function(val) {
  this.length++;
  this.list.push(val);
}

Queue.prototype.dequeue = function() {
  if(this.length === 0) return;
  
  this.length--;
  return this.list.shift();
}

Queue.prototype.peek = function() {
  return this.list[0];
}
