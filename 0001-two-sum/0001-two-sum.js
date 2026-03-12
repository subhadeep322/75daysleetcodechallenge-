/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexnum = nums.map((val,idx)=> ({val,idx}));
    indexnum.sort((a,b)=>a.val-b.val);
 
let left = 0;
let right = indexnum.length-1;
while(left<right){
    let sum = indexnum[left].val +  indexnum[right].val;
     if(sum === target){
        return [indexnum[left].idx, indexnum[right].idx];
     } 
    else if(sum<target){
        left++;
    }
    else{
        right--;
    }
}
};