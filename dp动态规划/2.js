// 递归需要优化  尾递归
// 会造成大量重复计算
// 将计算过的记忆下来
// 用空间换时间
const  f = [];
const climbStairs = function(n) {
  if(n == 1) { // 退出条件
    return 1
  }
  if(n == 2) {
    return 2
  }
  if(f[n] === undefined) f[n] = climbStairs (n-1) + climbStairs(n-2)
  return f[n]

}
console.log(climbStairs(3));