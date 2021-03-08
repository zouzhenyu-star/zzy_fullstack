// es6 提供了class 关键字 
// 语法糖， 其实他还是原型式继承， 
// 像大型语言， 传统面向对象的写法  ,提高代码可读性 
// 接几招？ 
class Person {
  // 新写法 
  count = 0;
  constructor(name) {
      this.name = name;
  } 
  sayHello () {
      return 'hello, I am ' + this.name
  }
}

const kevin = new Person('Kevin');
// 可访问， 不可枚举
console.log(kevin.__proto__,Person.prototype);
console.log(kevin.sayHello());
// Person();
// Object.keys ? 是什么
//  Object.keys返回一个数组，
//  包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
// es6 里可枚举怎么实现 ？
console.log(Object.keys(Person.prototype));// 可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype));