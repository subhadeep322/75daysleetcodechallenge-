/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
    while(low<=high){
        let guess = Math.floor((low+high)/2);
        if(nums[guess] === target){
            return guess;
        }
        else if(nums[guess]<target){
            low = guess + 1;
        }
        else{
            high = guess - 1;
        }
    }
    return -1;
};