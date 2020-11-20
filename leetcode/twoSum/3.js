const numbers = [3,62,234,7,23,74,23,76,92];
const arr = [];
// const largeNumbers = numbers.forEach(function(e,i){
//     if(e>70){
//         Array.push(e);//给数组添加一个新的元素
//     }
// })
//forEach 基础上
//filter 内置函数
const cb = number => number > 70
const largeNumbers = numbers.filter(cb)
console.log(largeNumbers);