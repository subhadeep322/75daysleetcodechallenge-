class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /** 
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    /** 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (index, node) => {
            if (index === word.length) {
                return node.isEnd;
            }

            const char = word[index];

            if (char === '.') {
                for (const key in node.children) {
                    if (dfs(index + 1, node.children[key])) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.children[char]) {
                    return false; 
                }
                return dfs(index + 1, node.children[char]);
            }
        };

        return dfs(0, this.root);
    }
}