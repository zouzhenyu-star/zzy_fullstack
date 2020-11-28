// function merge(){

// }
//js里面，变量的类型是由值决定的，js是一个弱类型的语言，不需要定义类型
// m + n <= nums.length
const merge =(nums1,m,nums2,n)=>{//es6的箭头函数
  //把nums2合并到nums1中
  //[1,2,3,0,0,0]
  //重新排序
  let current2 = 0;//定义一个指针
  for(let i=nums1.length-1; i>=nums1.length - n; i--){
      nums1[i] = nums2[current2++]; // 好理解 nums2 有个可遍历
  }
  //console.log(nums1);
  return nums1.sort((a,b) => a - b) //a-b从小到大排
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));

