/**
 * @param {number} x
 * @return {boolean}
 * 思路： 双指针夹逼法
 */
 var isPalindrome = function(x) {
  let str = x.toString();
  let n = str.length;
  let left = 0;
  let right = n-1;
  while(left < right){
      if(str[left++] != str[right--]){
          return false;
      }
  }
  return true;
}



var isPalindrome = function(x) {
 let arr = x.toString(); // 数字转字符串
 let left = 0;  // 左指针
 let right = arr.length-1   // 右指针
 while(left < right) {  // 设定结束条件  当 left <  或者 = right 时，退出循环
     let l = str[left++];  // 左右指针相互靠近
     let r = str[right--];
     if(l != r)     // 检查为非回文数时， 直接返回 false 退出
     return false
 }
}

