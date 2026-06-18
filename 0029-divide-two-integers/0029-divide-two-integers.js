/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_INT = 2147483647;  // 2^31 - 1
    const MIN_INT = -2147483648; // -2^31
    
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
    
    const isNegative = (dividend < 0) !== (divisor < 0);
    
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    
    let quotient = 0;
    
    let maxDivisor = absDivisor;
    let maxMultiple = 1;
    
    while (absDividend >= (maxDivisor + maxDivisor)) {
        maxDivisor += maxDivisor;
        maxMultiple += maxMultiple;
    }
    
    while (absDividend >= absDivisor) {
        if (absDividend >= maxDivisor) {
            absDividend -= maxDivisor;
            quotient += maxMultiple;
        }
        
        maxDivisor >>>= 1;
        maxMultiple >>>= 1;
    }
    
    return isNegative ? -quotient : quotient;
};