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