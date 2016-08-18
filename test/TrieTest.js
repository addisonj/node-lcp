var Trie = require('../lib/Trie')
var assert = require('assert')
function randString(len) {
  var s = ''
  for (var i = 0; i < len; i++) {
    s += String.fromCharCode(Math.round(Math.random() * 254) + 1)
  }
  return s
}
describe('Trie', function() {
  it('should be a trie like we expect', function() {
    var t = new Trie(['foobar', 'fool', 'foam'])
    assert.deepEqual(t.tree, {
      f: {
        o: {
          o: {
            l: {
              end: true
            },
            b: {
              a: {
                r: {
                  end: true
                }
              }
            }
          },
          a: {
            m: {
              end: true
            }
          }
        }
      }
    })
  })
  describe('addWord', function() {
    it('should be able to add a new word', function() {
      var t = new Trie(['foobar', 'fool', 'foam'])
      t.addWord('say')
      assert.deepEqual(t.tree, {
        f: {
          o: {
            o: {
              l: {
                end: true
              },
              b: {
                a: {
                  r: {
                    end: true
                  }
                }
              }
            },
            a: {
              m: {
                end: true
              }
            }
          },
        },
        s: {
          a: {
            y: {
              end: true
            }
          }
        }
      })
    })
  })
  describe('lcp', function() {
    it('simple case', function() {
      var t = new Trie(['foobar', 'fool', 'foam'])
      assert.equal(t.lcp(), 'fo')
    })
    it('should work with non alpha numeric chars (like file paths)', function() {
      var t = new Trie(['do/stuff/everyday', 'do/stuff/everytime', 'do/stuff/everyone'])
      assert.equal(t.lcp(), 'do/stuff/every')
    })
    it('should work with no prefix', function() {
      var t = new Trie(['none', 'match', 'here'])
      assert.equal(t.lcp(), '')
    })
    it('should work with duplicates', function() {
      var t = new Trie(['repeat', 'repeat'])
      assert.equal(t.lcp(), 'repeat')
    })
    it('should work with a linear trie', function() {
      var t = new Trie(['ab', 'abc', 'abcd'])
      assert.equal(t.lcp(), 'ab')
    })
    it('should work with a shorter linear trie', function() {
      var t = new Trie(['a', 'ab', 'abc'])
      assert.equal(t.lcp(), 'a')
    })
    it('more complex examples and lots of words', function() {
      var t = new Trie()
      for (var i = 100; i < 199; i++) {
        var last = i.toString()
        var name = last + randString(5)
        for ( var j = 5 - last.length; j > 0; j--) {
          name = '0' + name
        }
        t.addWord('big/log/path/with/many-different!-chars-' + name)
      }
      assert.equal(t.lcp(), 'big/log/path/with/many-different!-chars-001')
    })
  })
  describe('findLCP', function() {
    it('should work with the single convience method', function() {
      assert.equal(Trie.findLCP(['interstate', 'intersteller', 'internet']), 'inter')
    })
  })

})
