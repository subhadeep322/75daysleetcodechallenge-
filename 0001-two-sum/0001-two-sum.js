/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let idx = nums.map((val,idx)=>({val,idx}));
   idx.sort((a,b)=>a.val-b.val);
   let l= 0;
   let r=nums.length-1;
   let sum =0;
   while(l<r){
    sum=idx[l].val+idx[r].val;
    if(sum === target){
        return [idx[l].idx,idx[r].idx];
    }
    else if(sum<target){
        l++;
    }
    else{
        r--
    }
   }
};