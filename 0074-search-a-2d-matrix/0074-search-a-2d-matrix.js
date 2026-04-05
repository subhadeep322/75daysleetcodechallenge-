/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    const m = matrix.length;    // Number of rows
    const n = matrix[0].length; // Number of columns
    
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
      
        const row = Math.floor(mid / n);
        const col = mid % n;
        const midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};