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
    if (root === null) return root;
    let queue = [root];
    // let res = [];
    while(queue.length > 0) {
        let current = queue.shift();
        // res.push(current);
        [current.left, current.right] = [current.right, current.left]
        if(current.right !== null) queue.push(current.right);
        if(current.left !== null) queue.push(current.left);
        
    }
    return root;
};