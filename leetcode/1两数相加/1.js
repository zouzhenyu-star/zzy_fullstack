
const twoSum = function(nums,target) {
  if(!nums) return []  // 若传入数组为空，则返回空值
  const m = new Map() // 创建 map 数据结构
  for (let i = 0 ; i < nums.length ; i++) {
      const x = nums[i]  // 获取当前下标的值
      const y = target - nums[i] // 获取与当前值匹配的数值
      if( m.has(y) ) {  // 判断 map 中是否有这个匹配数值
          return [m.get(y),i]  // 有的话 返回匹配数值下标 和 数值下标
      }
      m.set(x,i)  // 匹配失败就将其收入 map 库中，留作之后的 匹配查询
  }
}



/*
思路解析： 想要获取 target 值 在 一个数组中的 两个组合数



*/