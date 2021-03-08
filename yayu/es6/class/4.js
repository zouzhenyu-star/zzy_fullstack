// 模块化， 闭包
// 传统的 es5 没有模块化，或者说比较弱
function _classCallCheck(instance,Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}
var  _createClass = (function() {
  // 给类添加方法
  return function(Constructor, protoProps) {
    console.log(Construtor,propProps);
    if (propProps) {
      // 封装es6 如何定义属性 ？ definePropertry 方法？
      defineProperties(Constructor.rpototype,protoProps);//把一件事情交出去
    }
  }
})()
var Person = (function() {// 立即执行函数
  // 创建闭包
  // class 方法不可以被 enum
  function Person(name) {

  }
  // 添加一个模块 enum prototype 属性封装
  _createClass(Person, [{
    key:'sayHello',
    value:function sayHello() {
      return 'hello, I am ' + this.name
    }
  }])
  return Person;
})()
console.log(Person);

var person = new Person("zzy");