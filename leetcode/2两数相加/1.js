var addTwoNumbers = function(L1,L2) {
  let sum = new ListNode('0') // 创建一个头链表用于保存结果
  let head = sum   // 保存头链表的位置，用于返回结果
  let add = 0   // 进位
  // 此处要检测 add 是因为当 L1 和 L2都处于最后一位且 有进位的时候，while无法进入，无法存取进位 1
  while( add || L1 || L2) { // 检查 L1 L2 是否存在，有一项存在就进入. 
    let num1 = L1 == null ? 0 : L1.val  // 如果 L1还有位数则让num1 获取值，没有则置0
    let num2 = L2 == null ? 0 : L2.val
    let now = num1 + num2 + add // 全部相加，第一位的进位一定是0
    add = now >= 10 ? 1 : 0 // 进位更新，用于下一位十位数字使用
    sum.next = new ListNode(now % 10) // 进位后剩下的数字就是真正的个位数
    sum = sum.next   // sum 指向下一节点
    if(L1)  L1 = L1.next  // 如果L1还有位数，则 L1 指向下一个节点
    if(L2)  L2 = L2.next
  }
  return head.next  // 输出链表
}

var addSums = function (L1,L2) {
  // 先定义结果链表
  let sum = new ListNode('0')  // 创建一个头链表
  let head = sum  // 保存头链表的位置 为 head
  let add = 0 // 上一次循环中计算出的进位， 首位数字没有进位
  while(add || L1 || L2) {
    let x = L1 == null ? 0 : L1.val
    let y = L2 == null ? 0 : L2.val
    let more = x + y + add  // 拿到了和, 拿去判断是否要添加进位
    add = more >= 10 ? 1 : 0
    sum.next = new ListNode(more % 10)
    // 至此，低位数的和 与 下一位的进位 都计算完毕
    sum = sum.next  // 进入 结果链表的下一个节点
    if(L1) L1 = L1.next  // 这里让 父链表进入下一节点， 但是得判断当前结点是否存在，不存在则意味着不可能会有下一进位
    if(L2) L2 = L2.next
  }
  return head.next
}


//  总体分为二个步骤  定义结果链表  和  存取数据进结果链表
// 存取数据有又分为  计算总和 和 进位    以及     跳转下一节点  

var addNumber = function(L1,L2) {
  let sum = new ListNode()
  let head = sum
  let add = 0

  while(add || L1 || L2) {
    let num1 = L1 == null ? 0 : L1.val
    let num2 = L2 == null ? 0 : L2.val
    let all = num1 + num2 + add  // 先计算总和，再判断进位
    add = all >= 10 ? 1 : 0
    sum.next = new ListNode(all % 10)
    
    // 至此， 一波计算循环已经结束 ，接下来是 切换下一节点
    sum = sum.next
    if(L1) L1 = L1.next
    if(L2) L2 = L2.next
  }
  return head.next
}