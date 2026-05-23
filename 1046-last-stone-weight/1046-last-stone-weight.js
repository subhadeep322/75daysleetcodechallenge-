/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    
    while (stones.length > 1) {
        const y = stones.pop();
        const x = stones.pop();
        
        if (x !== y) {
            const remaining = y - x;
            
            let left = 0;
            let right = stones.length;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (stones[mid] < remaining) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            stones.splice(left, 0, remaining);
        }
    }
    
    return stones.length === 1 ? stones[0] : 0;
};