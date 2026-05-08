/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);
    
    const aCode = 97; 

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - aCode]++;
        count2[s2.charCodeAt(i) - aCode]++;
    }

    const isMatch = () => {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) return false;
        }
        return true;
    };

    for (let i = s1.length; i < s2.length; i++) {
        if (isMatch()) return true;

        count2[s2.charCodeAt(i) - aCode]++;
        
        count2[s2.charCodeAt(i - s1.length) - aCode]--;
    }

    return isMatch();
};