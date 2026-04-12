/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return;
    let slow =head;
    let fast = head;
    while(fast!==null&&fast.next!==null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let curr = slow.next;
    slow.next =null;
    while(curr){
        let nexttemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nexttemp;
    }
    let first = head;
    let second = prev;
    while(second){
        let tmp = first.next;
        let tmp2 = second.next;

        first.next = second;
        second.next = tmp;

        first = tmp;
        second = tmp2;
    }
};