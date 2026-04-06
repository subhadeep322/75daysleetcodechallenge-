/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     let low= 0
    let high = nums.length-1
    let res = nums[0]
    while(low<=high){
        let guess= Math.floor((low+high)/2)
        if(nums[guess]>nums[nums.length-1]){
            low=guess+1
        }
        else{
            res = nums[guess]
            high =guess-1
        }
    }
    return res
};