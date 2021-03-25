// 删除排序链表的重复元素||
var deleteDuplicates = function(head) {
  // 定义哨兵节点，用来指向链表，并返回最后的链表结果
  let pivot = new ListNode(0)
  pivot.next = head
  // 设置快慢指针，前者探路，后者走安全的路
  let danger = head;
  let safe = pivot;
  // 遍历链表，注意判断条件， 避免链表最后的 danger.net.val 为空
  while(danger && danger.next) {
    // 设定，重复的路段为不安全的路
    if(danger.next.val === danger.val) {
    // 前方路有问题，准备替身
      let sameValue = danger.val ; // 替身准备好，定住，继续探索，每前进一步就回来跟替身比对这也是一个是否去叫师傅的判断标准
      while(danger && danger.val === sameValue) //路不安全时，不停前进，直到安全才回去告诉师傅，前进到自己探索到的安全的路段
      {
        danger = danger.next;  
      }
      safe.next = danger; // 师傅前进 
    }
    else {
      // 没有重复节点，前进，路安全
      danger = danger.next;
      safe = safe.next;
    }

  }
  return pivot.next; // 返回走过的路程
};