/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const nextGreaterMap = new Map();
    const stack = []; 
    
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const poppedElement = stack.pop();
            nextGreaterMap.set(poppedElement, num);
        }
        stack.push(num);
    }
    
    return nums1.map(num => {
        return nextGreaterMap.has(num) ? nextGreaterMap.get(num) : -1;
    });
};