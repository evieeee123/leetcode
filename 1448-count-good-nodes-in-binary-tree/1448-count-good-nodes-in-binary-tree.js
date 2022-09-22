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
 * @return {number}
 */
var goodNodes = function(root) {
    let goodnode = 0;
    let max = -Infinity;
    
    function dfs(root, max){
        if (root === null) return;
        if (root.val >= max){
            max = root.val
            goodnode++;
        } 
        dfs(root.left, max)
        dfs(root.right, max)
    }
    
    dfs(root, root.val)
    return goodnode

};