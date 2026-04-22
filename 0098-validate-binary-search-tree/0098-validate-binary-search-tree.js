/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let stack = [];
    let prev = null; 
    let curr = root;
    
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        
        curr = stack.pop();
        
        if (prev !== null && curr.val <= prev.val) {
            return false;
        }
        
        prev = curr;
        curr = curr.right;
    }
    
    return true;
};