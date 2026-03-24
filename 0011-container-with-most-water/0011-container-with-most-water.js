/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxwt =0;
    let lb =0;
    let rb = height.length -1;
    while(lb<rb){
        let w = rb -lb;
        let ht = Math.min(height[lb],height[rb]);
        let currwt = w*ht;
        maxwt = Math.max(currwt,maxwt);
        height[lb]<height[rb] ? lb++:rb--;
    }
    return maxwt;
    
};