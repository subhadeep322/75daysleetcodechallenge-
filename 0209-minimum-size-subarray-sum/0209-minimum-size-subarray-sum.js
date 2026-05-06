/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let low=0;
    let res = Number.MAX_SAFE_INTEGER;
    let sum  =0;
    let n = nums.length;

    for(let high=0;high<n;high++){
        sum=sum+nums[high];
        while(sum>=target){
            len = high - low +1;
            res= Math.min(res,len);
            sum = sum - nums[low];
            low++
        }
    }
    return (res === Number.MAX_SAFE_INTEGER) ? 0 : res
}