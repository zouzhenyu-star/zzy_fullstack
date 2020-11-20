/**
 * @author zouzhenyu
 * @date 20-11-20
 * @param {number[]}  nums
 * @param {number}  target
 * @return {number[]}
 */
//箭头函数替代function关键字
const twoSum = (nums,target)=>{//先搭建好结构，数组定义与返回值
    // console.log('两数相加')
    let map = {};//JSON Object  HashMap 空间复杂度的花销o(n)
    let res = [];
    //编写功能 一个函数完成一个功能
    //es6更简洁
    //callback
    //for + 执行功能
    nums.forEach((e,i)=>map[e]=i);//o(n)以空间换时间
        // console.log(e,i);
    // console.log(map);
    //?
    for(let i=0;i<nums.length;i++){//o(n)
        let j=map[target-nums[i]];//undefined
        if(j && j!=i){
            res = [i,j];
            break;
        }
    }
    return res;
 }

 console.log(twoSum([2,7,11,15],9));