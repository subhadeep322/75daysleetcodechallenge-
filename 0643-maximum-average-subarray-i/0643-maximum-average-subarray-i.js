/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let currsum =0 
    for (let i = 0; i < k; i++) {
        currsum += nums[i];
    }
    let maxsum = currsum
    for (let i = k; i < nums.length; i++) {
        currsum += nums[i] - nums[i - k];
        if (currsum > maxsum) {
            maxsum = currsum
        }
    }
    return maxsum/k
};