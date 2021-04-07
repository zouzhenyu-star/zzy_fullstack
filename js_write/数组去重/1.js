function unique(arr) {
  // filter 创建新数组  
  var res = arr.filter(function(item, index, array) {
    // indexOf 方法返回元素第一次出现的下标
      return array.indexOf(item) === index // 2 5 2 6 3 
  })
  return res;
}

// var unique = arr => [...new Set(arr)]
