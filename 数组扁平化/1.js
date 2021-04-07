function flatten(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    // isArray方法，判断是否为数组 如果元素为数组则进入
      if (Array.isArray(arr[i])) {
        // 这里使用 concat 合并数组,内部进行嵌套
          result = result.concat(flatten(arr[i]))
      } else {
        // 符合条件则添加进数组
          result.push(arr[i])
      }
  }
  return result;
}
console.log(flatten([1,2,[3,[4]]]));
