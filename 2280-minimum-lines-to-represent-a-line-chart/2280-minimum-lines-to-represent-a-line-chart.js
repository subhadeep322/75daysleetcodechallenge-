/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function(stockPrices) {
    const n = stockPrices.length;
    
    if (n === 1) return 0;
    
    stockPrices.sort((a, b) => a[0] - b[0]);
    
    let lines = 1;
    
    let prevDx = BigInt(stockPrices[1][0] - stockPrices[0][0]);
    let prevDy = BigInt(stockPrices[1][1] - stockPrices[0][1]);
    
    for (let i = 2; i < n; i++) {
        let currDx = BigInt(stockPrices[i][0] - stockPrices[i - 1][0]);
        let currDy = BigInt(stockPrices[i][1] - stockPrices[i - 1][1]);
        
        if (prevDy * currDx !== currDy * prevDx) {
            lines++;
        }
        
        
        prevDx = currDx;
        prevDy = currDy;
    }
    
    return lines;
};