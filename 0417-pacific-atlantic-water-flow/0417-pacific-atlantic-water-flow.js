/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0 || heights[0].length === 0) return [];

    const m = heights.length;
    const n = heights[0].length;

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const pacificQueue = [];
    const atlanticQueue = [];

    for (let i = 0; i < m; i++) {
        pacificQueue.push([i, 0]);
        pacific[i][0] = true;
        
        atlanticQueue.push([i, n - 1]);
        atlantic[i][n - 1] = true;
    }

    for (let j = 0; j < n; j++) {
        if (!pacific[0][j]) {
            pacificQueue.push([0, j]);
            pacific[0][j] = true;
        }
        
        if (!atlantic[m - 1][j]) {
            atlanticQueue.push([m - 1, j]);
            atlantic[m - 1][j] = true;
        }
    }

    const bfs = (queue, reachable) => {
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        let head = 0; 
        
        while (head < queue.length) {
            const [r, c] = queue[head++];
            
            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                
                if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                    if (!reachable[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                        reachable[nr][nc] = true;
                        queue.push([nr, nc]);
                    }
                }
            }
        }
    };

    bfs(pacificQueue, pacific);
    bfs(atlanticQueue, atlantic);

    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};