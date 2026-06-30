/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let have  = new Map()
    for(let i=0;i<text.length;i++){
        have.set(text[i],(have.get(text[i])||0)+1); 
    }
      const need = {
        'b': 1,
        'a': 1,
        'l': 2,
        'o': 2,
        'n': 1
    };

    let res  = Infinity;
    for(const c in need){
        let fneed = need[c];
        let fhave = have.get(c) || 0;
        let times = Math.floor(fhave/fneed);
        res = Math.min(res,times);

    }
    return res;
};