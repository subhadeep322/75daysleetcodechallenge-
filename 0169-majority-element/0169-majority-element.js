/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let c =0;
    let candidate = null;
    for(let num of nums){
        if(c ===0 ){
            candidate = num;
        }
        c += (num === candidate)?1:-1;
    }
    return candidate;
};