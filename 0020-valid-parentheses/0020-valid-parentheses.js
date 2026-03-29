/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !==0 ) return false;
    const stack = [];
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char === '('){
            stack.push(')');
        }
        else if(char === '{'){
            stack.push('}');
        }
        else if(char === '['){
            stack.push(']');
        }
        else{
            if(stack.pop() !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
}