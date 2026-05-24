/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pivot = nums[Math.floor(Math.random() * nums.length)];
    
    const left = [];  
    const mid = [];   
    const right = []; 
    
    for (let num of nums) {
        if (num > pivot) {
            left.push(num);
        } else if (num < pivot) {
            right.push(num);
        } else {
            mid.push(num);
        }
    }
    
    if (k <= left.length) {
        return findKthLargest(left, k);
    } else if (k > left.length + mid.length) {
        return findKthLargest(right, k - left.length - mid.length);
    } else {
        return pivot;
    }
};