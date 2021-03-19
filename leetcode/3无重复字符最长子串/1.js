/**
 * @param {string} s
 * @return {number}
 * 思路：设置一个滑动窗口数组，每来一个数组没有的字符，就将其装入，
 *      并比较当前数组的最大长度，如果为最大就设置当前长度为 max
 *      如果数组之前的元素里面有出现过，就将出现过的那个元素及其前面的所有元素都去除
 *  注意：1. indexof() 方法，检索参数是否在数组中存在 ，没有的话返回 -1，有的话返回下标
 *       2. charAt() 方法， 返回指定位置的字符
 *       3.  Math.max() 方法， 第一个参数为当前新获取的数组长度，第二个长度为之前的 最大长度，
 *          将两个参数进行比较，返回较大的那个参数
 *       4. splice() 切割数组方法， 切割第一个参数至第二个参数的下标之间的元素
*/
 var lengthOfLongestSubstring = function(s) {
  let arr = new Array();
  let max = 0;
  for(let i=0 ; i < s.length ;i++) {
    let index = arr.indexOf(s[i])
    if(index !== -1) {
      arr.splice(0,index + 1)
    }
      arr.push(s.charAt(i));
      max = Math.max(arr.length,max);
    
  }
  return max
};

const lengthOfLongestSubstring = function(s) {
  let arr = new Array();
  let max = 0;
  for(let i=0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if(index !== -1) {
      arr.splice(0,index + 1)
    }
    arr.push(s[i])
    max = Math.max(arr.length,max)
  }
  return max
}