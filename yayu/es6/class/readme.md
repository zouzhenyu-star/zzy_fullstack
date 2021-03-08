- es6 class 与 es5 构造函数 + prototype 有什么关系
  语法糖那些

- babel babel 的使命就来了
    es6 class 不停的更新， 每个版本， 意义。
    node版本不同，则运行的环境也不同
    js 的运行环境太复杂了，不是单纯的
    chrome,ie10, 360 qq

- 一线公司问？
  请问es6 class 关键字实现除了刚刚讲的， 有什么不一样的地方
  - es6 class 构造函数在 constructor 只能被 new ，不能作为普通函数执行
    - 如果要你去设计的话？ 怎么实现呢？
  - Person.prototype 不可枚举
    Object.keys()  // 可枚举
    object.getOwnpropertyNames() 可调用
  - ES6 还有比ES5 实现丰富的地方
    es6 里声明属性的时候有个高级的写法

1. babel js 是一个转义 帮助 es6 calss -> es6 function