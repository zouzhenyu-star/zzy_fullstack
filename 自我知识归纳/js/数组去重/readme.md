# 数组去重
  1. 使用 new set 将数组去重并生成一个类数组
  注意： 被转化的数组必须 1. 有长度 2. 数组内容为 数字 或是字符串数字
  2. 使用 Array.from() 将数组转化为真正的数组
  const unique = (arr) => {
          return  Array.from(new Set(arr))
  }
  console.log(unique([1,2,3,5,5]))
