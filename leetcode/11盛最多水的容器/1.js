// 使用双指针进行数组遍历，到两指针重合时停止
var maxArea = (width) => {
  let i = 0; 
  let j = width.length - 1;
  let res = 0;
  while(i < j) {
    res = width[i] < width[j] ?
      Math.max(res,(j - i) * width[i++]):
      Math.max(res,(j - i) * width[j--]);
  }
  return res;
}
console.log(maxArea([1,2,3,4,5,6,7,9,1]));
