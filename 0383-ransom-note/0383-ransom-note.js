/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var cal = function(have,need){
        for(let [c, fneed] of need){ // Fixed map iteration syntax
        let fhave = have.get(c) || 0; // Fixed map retrieval
        if(fhave < fneed){ // Fixed comparison logic
            return false
        }
        }

    return true;
 };
var canConstruct = function(ransomNote, magazine) {
    let have = new Map();
    let need = new Map();
    let n1 = ransomNote.length;
    let n2 = magazine.length;
    for(let i =0;i<n1;i++){
        need.set(ransomNote[i],(need.get(ransomNote[i])||0)+1);
    }
    for(let i=0;i<n2;i++){
        have.set(magazine[i],(have.get(magazine[i])||0)+1);
    }
    return cal(have,need);
};