// a minimal trie implentation, just need to build it and
// perform a DFS to get first node with more than one child
function Trie(words) {
  this.tree = {}
  words = words || []
  for (var i = 0; i < words.length; i++) {
    this.addWord(words[i])
  }
}

Trie.prototype.addWord = function(word) {
  var cur = this.tree
  for (var i = 0; i < word.length; i++) {
    var l = word.charAt(i)
    if (cur[l]) {
      cur = cur[l]
    } else {
      cur[l] = {}
      cur = cur[l]
    }
  }
  cur.end = true
}

Trie.prototype.lcp = function() {
  var cur = this.tree
  var keys = Object.keys(cur)
  var s = ''
  while (keys.length === 1 && keys[0] !== 'end') {
    s += keys[0]
    cur = cur[keys[0]]
    keys = Object.keys(cur)
  }
  return s
}

Trie.findLCP = function(words) {
  var trie = new Trie(words)
  return trie.lcp()
}
module.exports = Trie
