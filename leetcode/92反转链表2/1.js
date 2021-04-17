const reverseList = function(head) {
  let prev = null;
  let node = head;
  while(node) {
    const curr = node.next;
    node.next = prev;
    prev = node;
    node = curr;
  }
  return node;
}
// 0. 设置顶部虚拟节点，next指向head，用于遍历链表和避免不必要的麻烦
// 1. 确定left和他的前置节点，然后根据left优化性能确定 right和他的后置节点
// 2. 切断前置节点跟left的联系，切断right与后置节点的联系
// 3. 调用反转链表的方法
// 4. 将前置节点与 新链表的尾结点联系起来，新链表的头结点与后置节点联系起来
// 5. 返回链表
var reverseBetween = function(head, left, right) {
  // 0 设置顶部虚拟节点
  const topNode = new ListNode(-1);
  topNode.next = head;

  // 1 确定left 和 right位置，以及前后置节点
  let pre = topNode;;
  for (let i = 0; i < left -1; i++) {
    pre = pre.next;
  }
  let leftNode = pre.next;
  
  let rightNode = leftNode;
  for (let i = 0; i < right - left; i++) {// 此处用right-left，是优化性能，往rightNode不用在重复走leftNode走过的结点
    rightNode = rightNode.next;
  }
  let suc = rightNode.next;

  // 2 切断联系
  pre.next = null;
  rightNode.next = null;

  // 3 反转链表
  reverseList(leftNode)

  // 4 恢复联系
  pre.next = rightNode;
  leftNode.next = suc;
  // 5
  return topNode.next; // 注意，这里返回的是next，后面得到结点，直接返回topNode会把-1也带上
}