/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map={};
    for(let str of strs){
        let sortedmap = str.split('').sort().join('');
        if(!map[sortedmap]){
            map[sortedmap]=[];
        }

        map[sortedmap].push(str);

    }
    return Object.values(map);
};