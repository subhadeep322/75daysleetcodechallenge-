/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l=0;
    let m =0;
    let h= nums.length-1;
    while(m<=h){
        if(nums[m]===0){
            [nums[l],nums[m]] = [nums[m],nums[l]];
            l++;
            m++;
        }else if(nums[m]===1){
            m++;
        }else{
            [nums[m],nums[h]] = [nums[h],nums[m]];
            h--;
        }
    }
};