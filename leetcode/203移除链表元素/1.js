function ListNode(val) {
  this.val = val;
  this.next = null;
}
const n1 = new ListNode(6);
const n2 = new ListNode(6);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
const n6 = new ListNode(6);
const n7 = new ListNode(7);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
console.log(n1);

function removeElements(head,val) {  // 形参传入n1 和6
  const dummy = { // 设置哨兵节点
    next:head   // 哨兵节点的val为空 但是next指向为原先的head
  }
  let current = dummy; // 设置一个变量current来接收dummy的值，代替dummy进行while循环
  while(current && current.next) { // 链表没到尾部就一直执行
    let next = current.next;
    if(next.val === val){
      current.next = next.next;  // 值相等，则将current的指向连跳两次，跳过原先的next
    }
    if(next.val !== val) {
      current = next;  // 值不相等，则将current指向下一个节点继续循环
    }
  }
  return dummy.next; // 返回dummy这个空值节点后面的节点，也就是整个链表
}
console.log(removeElements(n1,6));// 设n1 为头结点，移除值为6的结点

