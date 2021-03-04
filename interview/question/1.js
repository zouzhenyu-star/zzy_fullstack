// let a = [1,2,3];
// a.join = a.shift;
// // && 是 与运算
// console.log(a == 1 && a == 2 && a == 3);//为true

// 对象
const a = {
  value:[3,2,1],
  valueOf:function(){return this.value.pop()}
}
console.log(a == 1 && a ==2 && a == 3);