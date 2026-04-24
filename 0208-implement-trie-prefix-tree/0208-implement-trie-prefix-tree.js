var Trie = function() {
    this.root = {};
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) node[char] = {};
        node = node[char];
    }
    node.isEnd = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) return false;
        node = node[char];
    }
    return node.isEnd === true;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (!node[char]) return false;
        node = node[char];
    }
    return true;
};