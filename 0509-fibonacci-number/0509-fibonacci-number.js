/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0; // Represents F(n-2)
    let b = 1; // Represents F(n-1)
    
    for (let i = 2; i <= n; i++) {
        let next = a + b; // F(n) = F(n-1) + F(n-2)
        a = b;            // Shift 'a' forward
        b = next;         // Shift 'b' forward
    }
    
    return b;
};