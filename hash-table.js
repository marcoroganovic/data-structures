function HashTable() {
  this.memory = [];
}

HashTable.prototype.hashKey = function(key) {
  var hash = 0;
  for(var i = 0; i < key.length; i++) {
    var code = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + code | 0;
  }
  return hash;
}

HashTable.prototype.get = function(key) {
  var address = this.hashKey(key);
  return this.memory[address]
}

HashTable.prototype.set = function(set, val) {
  var address = this.hashKey(key);
  this.memory[address] = val;
}

HashTable.prototype.remove = function(key) {
  var address = this.hashKey(key);
  if(this.memory[address]) {
    delete this.memmory[address];
  }
}
