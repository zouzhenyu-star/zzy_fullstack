var arrayPairSum = function(nums) {
  var arr = nums.sort();
  var count = 0;
  for(var i=0; i<arr.length; i++) {
    if(i % 2 == 0) {
      count += arr[i]
    }
    // if(i%2 == 0) {
    //   count +=arr[i]
    //   console.log(arr[i],i);
    // }
  }
  return count;
};
console.log(arrayPairSum([1,7,5,2]));

var arrayPairSum = function(nums) {
  let sum = 0;
  nums.sort((a, b)=>a-b)
  nums.forEach((val, index)=>{  // 使用箭头函数 的 forEach
      // 从0开始，余数是0 为奇数项
      if(index%2 === 0) sum+=val
  })
  return sum
};      
