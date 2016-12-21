function Stack() {
  this.list = [];
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.length++;
  this.list.push(val);
}

Stack.prototype.pop = function() {
  if(this.length === 0) return;

  this.length--;
  return this.list.pop();
}

Stack.prototype.peek = function() {
  return this.list[this.length - 1];
}
