
function findmax(arr){
    let maxval =-1;
    for(let i =0;i<256;i++){
        maxval=Math.max(maxval,arr[i]);
    }
    return maxval;
}
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let f = new Array(256).fill(0);
    let n = s.length;
    let low = 0;
    let res = 0;
    for(let high =0;high<n;high++){
        let ri = s.charCodeAt(high);
        f[ri]++;
        let maxc = findmax(f);
        let len = high - low +1;
        let diff = len - maxc;

        while(diff>k){
            let li = s.charCodeAt(low);
            f[li]--;
            low++;

            maxc = findmax(f);
            len = high-low+1;
            diff = len - maxc;
        }
        res = Math.max(res,len);
    }
    return (res ===0)?0:res;
};