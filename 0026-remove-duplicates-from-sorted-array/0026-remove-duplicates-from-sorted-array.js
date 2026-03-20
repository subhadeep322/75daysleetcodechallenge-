/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let i = 0;
    let res = 1;
    let j =1;
    while(j<nums.length){
        if(nums[j] === nums[j-1]){
            j++;
            continue;
        }
        else{
            nums[i+1] = nums[j];
            i++;
            j++;
            res++
        }
    }
    return res;

};