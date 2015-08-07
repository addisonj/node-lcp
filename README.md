LCP - Longest Common Prefix
==========

Computes the longest common prefix for strings using a Trie

# API
```JavaScript
var LCP = require('lcp')
var lcp = new LCP(['fooseball', 'foobar', 'foam'])
lcp.addWord('foobar')
lcp.lcp() // 'fo'
```
or if you don't like classes
```JavaScript
LCP.findLCP(['fooseball', 'foobar', 'foam']) // 'fo'
```
