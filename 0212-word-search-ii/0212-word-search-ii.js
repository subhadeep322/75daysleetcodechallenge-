/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = {};
    const result = [];
    
    // 1. Build the Trie
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.word = word; // Store the actual word at the end node
    }
    
    const rows = board.length;
    const cols = board[0].length;
    
    const backtrack = (r, c, node) => {
        const char = board[r][c];
        const nextNode = node[char];
        
        if (!nextNode) return;
        if (nextNode.word) {
            result.push(nextNode.word);
            nextNode.word = null; 
        }
        
        board[r][c] = '#';
        const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') {
                backtrack(nr, nc, nextNode);
            }
        }
        
        board[r][c] = char;
        
        if (Object.keys(nextNode).length === 0) {
            delete node[char];
        }
    };
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            backtrack(r, c, root);
        }
    }
    return result;
};