function List() {
  this.memory = [];
  this.length = 0;
}

List.prototype.get = function(addr) {
  return this.memory[addr];
}

List.prototype.push = function(val) {
  this.memory[this.length] = value;
  this.length++;
}

List.prototype.pop = function() {
  if(this.length === 0) return;

  var lastAddress = this.length - 1,
      value = this.memory[lastAddress];

  delete this.memory[lastAddress];
  this.length--;

  return value;
}

List.prototype.unshift = function(val) {
  var previus = val;

  for(var address = 0; address < this.length; address++) {
    var current = this.memory[address];
    this.memory[address] = previuos;
    previous = current;
  }

  this.memory[this.length] = previus;
  this.length++;
}

List.prototype.shift = function() {
  if(this.length === 0) return;

  var value = this.memory[0];

  for(var address = 0; address < this.length; address++) {
    this.memory[address] = this.memory[address + 1];
  }

  delete this.memory[this.length - 1];
  this.length--;

  return value;
}
