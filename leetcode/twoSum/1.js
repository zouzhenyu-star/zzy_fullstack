// console.log('leetcode,必考之two sum')
//手写代码 js
/**
 * @author zouzhenyu
 * @date 20-11-20
 * @param {number[]}  nums
 * @param {number}  target
 * @return {number[]}
 */
//es5
const twoSum = function(nums,target){
    //1.暴力一下
    let arr=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++)
           if(nums[i]+nums[j]===target){
              arr=[i,j]
            }
    }
    return arr
}
console.log(twoSum([2,7,11,13],9))


const twoSum = function(nums,target) {
    if(!nums) return []  // 若传入数组为空，则返回空值
    const m = new Map() // 创建 map 数据结构
    for (let i = 0 ; i < nums.length ; i++) {
        const x = nums[i]  // 获取当前下标的值
        const y = target - nums[i] // 获取与当前值匹配的数值
        if( m.has(y) ) {  // 判断 map 中是否有这个匹配数值, ||  m.has(y) 查询 m 中是否有 y 这个数值
            return [m.get(y),x]  // 有的话 返回匹配数值下标 和 数值下标
        }
        m.set(x,i)  // 匹配失败就将其收入 map 库中，留作之后的 匹配查询 || 将 x 以及 x 的下标存入 m 中
    }
}
