/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return null;
    let queue = [root];
    while(queue.length >0){
        let curr = queue.shift();
        let temp = curr.left;
         curr.left = curr.right;
         curr.right = temp;

         if(curr.left !== null) queue.push(curr.left);
         if(curr.right !== null) queue.push(curr.right);
    }
    return root;
};