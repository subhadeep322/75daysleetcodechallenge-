/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let low =0;
    let n = s.length;
    let res = 0;
    let f = new Map();
    for(let high=0;high<n;high++){
        let rc = s[high];
        f.set(rc,(f.get(rc)||0)+1);
        let k = high-low+1;
        while(f.size<k){
            let lc = s[low];
            f.set(lc,f.get(lc)-1);
            if(f.get(lc) === 0){
                f.delete(lc);
            }
            low++;
            k = high-low+1;
        }
        res = Math.max(res,k);
    }
    return (res === 0)?0:res;
};