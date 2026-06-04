/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0
    
    for(let current of nums){
        let temp = Math.max(current+rob1,rob2);

        rob1= rob2;
        rob2  = temp;
    }
    return rob2;
};