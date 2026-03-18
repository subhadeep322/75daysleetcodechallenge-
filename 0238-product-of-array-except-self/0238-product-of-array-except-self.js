/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n =nums.length;
    const res = new Array(n);

    let leftpro = 1
    for(let i =0;i<n;i++){
        res[i] = leftpro;
        leftpro *=nums[i]
    }
    let rightpro = 1;
    for(i=n-1;i>=0;i--){
        res[i] *= rightpro;
        rightpro *=nums[i];
    }
    return res;
};