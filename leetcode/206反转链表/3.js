/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let prev = null;
  let node = head;
  while(node) { // 如果还有node，则继续反转指向
    const next = node.next // 先存好node的后置节点，完成反转后再把 node 接过来
    node.next = prev; // 反转
    prev = node; // 推进前置节点
    node = next;// node 推进，至后置节点。 到这里，完成了两个节点的反转
  }
  return prev;  // 反转完链表后， prev才是头结点
};