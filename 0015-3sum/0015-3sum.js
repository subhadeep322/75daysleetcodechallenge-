/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        const tar = -nums[i];

        while(left<right){
            const sum = nums[left]+nums[right]
            if(sum === tar){
                res.push([nums[i],nums[left],nums[right]])
                left++;
                right--;

                while(left<right && nums[left] === nums[left-1]){
                    left++
                }
                while(left<right && nums[right] === nums[right+1]){
                    right--;
                }
            }
            else if(sum<tar){
                left++;
            }
            else{
                right--;
            }

        }

    }
    return res;
};