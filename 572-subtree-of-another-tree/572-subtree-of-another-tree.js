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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    function isSameTree(p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
    
    function checkSubRoot(node){
        if (!node) return false;
        if (isSameTree(node, subRoot)) return true;
        return checkSubRoot(node.left) || checkSubRoot(node.right)
    }
    return checkSubRoot(root)
};
