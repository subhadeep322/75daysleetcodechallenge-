/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    let n = s.length;
    for(let i =0;i<n;i++){
      map.set(s[i],(map.get(s[i])||0)+1);
    }
    for(let i=0;i<n;i++){
        if(map.get(s[i])===1
         ){
            return i;
        }
    }
    return -1;
};