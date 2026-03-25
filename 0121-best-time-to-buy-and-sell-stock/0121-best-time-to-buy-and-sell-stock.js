/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minpro = Infinity;
    let maxpro=0;
    for(let  i=0;i<prices.length;i++){
        if(prices[i]<minpro){
            minpro = prices[i]
        }
        else if(prices[i]-minpro>maxpro){
            maxpro = prices[i] - minpro;
        }
    }
    return maxpro;
};