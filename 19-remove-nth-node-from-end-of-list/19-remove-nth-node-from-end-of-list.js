/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     const dummyHead = new ListNode()
//     dummyHead.next = head;
    
//     let fast = dummyHead;
//     let slow = dummyHead
    
//     for(let i = 1; i < n + 1; i++) {
//         fast = fast.next
//     }
    
//     while (fast.next) {
//         fast = fast.next;
//         slow = slow.next
//     }
    
//     slow.next = slow.next.next;
//     return dummyHead.next
// };


var removeNthFromEnd = function(head, n) {
	let node = head;
	let counter = 1; //0
    

	while (node.next !== null) {
		node = node.next;
		counter++; //5
} 

// Counter - n - 1 = (Counter - n).next.next
    let curr = head;
    let num = 1; //5
    while (num <= counter) {
        if (num === counter - n) { //3
            curr.next = curr.next.next
        }else if (counter - n === 0  && num === 1) {
            head = head.next
        }else {
            curr = curr.next
        }
        num++;
    }
    
    if (counter === 1 && n === 1) head = null
    return head
}
