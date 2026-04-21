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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    let queue = [root];
    let result =[];
    while(queue.length > 0){
        let n = queue.length;
        let currlvlval = [];
        for(let i=0;i<n;i++){
            currnode = queue.shift();
            currlvlval.push(currnode.val);

            if(currnode.left !== null){
                queue.push(currnode.left);
            }
            if(currnode.right !== null){
                queue.push(currnode.right);
            }
        }
        result.push(currlvlval);
    }
    return result;
};