/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 思路： 1. 数组合并  2. 数组排序  3. 数组按长度奇偶数求中位数
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2);  // 用 concat() 合并数组
  arr = arr.sort((a,b) => a-b);  // 调用sort() 方法对合并后的数组进行排序
  let length = arr.length;

  if(length > 0 && length %2 === 0) { // arr 的长度为偶数时
    return (arr[length/2  -1] + arr[length/2])/2  // 取 中位数
  }else { // arr 的 长度为奇数时
    return arr[(length-1) / 2]   // 当 两个数组总共只有一个元素时，即新数组长度为0，必定触发else，进入else后必定返回 arr[0],即原数字
  }
};