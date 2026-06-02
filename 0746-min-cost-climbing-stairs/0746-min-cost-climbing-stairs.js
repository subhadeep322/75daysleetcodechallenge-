/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let step2 = 0; 
    let step1 = 0; 

    for (let i = 2; i <= cost.length; i++) {
        let currentStep = Math.min(step1 + cost[i - 1], step2 + cost[i - 2]);
        
        step2 = step1;
        step1 = currentStep;
    }

    return step1;
};