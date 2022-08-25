/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function(head) {
//     let len = 0;
//     let node = head;

//     if(!head.next) return head
//     while (node){
//         len++;
//         node = node.next
//     }
    
//     let mid = Math.floor((len / 2));
//     for(let i = 0; i < mid; i++) {
//         head = head.next
//     }
//     return head
// };



// var middleNode = function(head) {
//     let fast = head;
//     let slow = head;
    
//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     return slow;
// };


var middleNode = function(head) {
    let fast = head;
    let slow = head;
    
    let toggle = false;
    while (fast) {
        if(toggle){
            slow = slow.next
        }
        fast = fast.next;
        toggle = !toggle;
    }
    return slow
};