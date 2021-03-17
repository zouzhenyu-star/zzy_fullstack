// 引用类型
//               基本数据类型      引用数据类型(Array Function object )
// 存储的元素        值              地址（指针）
//  存储的地点        栈              堆


let a1 = 1,
  b1 = a1;
  b1 = 2; // a1 和 b1 的值都存在栈中，互不影响
console.log(a1);

const  a = []
const b = a;
b.push(1); // a 和 b 都存储在堆中，当 b 等于 a 时，他们指向的地址相同，所以当其中一个变量改变属性时，另一个变量的因为指向同一地址，数值也会跟着改变
console.log(a);

function test(person) { // 引用
  person.age = 26;
  
  person = { // person 不再是p1 引用类型 const person 常量 找地址的时候 不找了, 重新分配地址
    name: 'yyy',
    age: 30
  }
  return person
}

const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1)  // age=21, 
console.log(p2) // 30 yyy
