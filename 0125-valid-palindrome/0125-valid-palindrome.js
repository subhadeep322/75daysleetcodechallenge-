/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Skip non-alphanumeric characters from the right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare the characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move pointers inward
        left++;
        right--;
    }

    return true;
};
function isAlphanumeric(char) {
    const code = char.toLowerCase().charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57); 
};