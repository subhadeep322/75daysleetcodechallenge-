/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack =[];
    let currStr = "";
    let currNum = 0;
    for(let char of s){
        if(char >= '0' && char <= '9'){
            currNum = currNum*10+parseInt(char);
        }
        else if(char === '['){
            stack.push(currStr);
            stack.push(currNum);
            currStr = "";
            currNum =0;
        }
        else if(char === ']'){
            let num = stack.pop();
            let prevs = stack.pop();
            currStr = prevs+currStr.repeat(num);
       }
       else{
        currStr+=char;
       }
    }
    return currStr;
};