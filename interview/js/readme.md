# 把面试题当成高考题
    1. 以题目来检验下当前js之所学 推动之
    2. 衡水一中出清北方法论  黄冈一中出试卷
        (1) 打卡 课后做的任何事情 一天必须打一次卡
        (2) 能力增长点
            JS能力
        
- null 和 undefined 的区别是什么?
  Object.prototype.__proto__ == null

  Undefined 意义是类型， 当声明了一个变量未初始化时， 得到的是undefined
  1. 箭头函数和普通函数不一样
  es5 时代的 arguments 有用的
    不只是便利， 也被干掉了 arguments() => {}
    function() {}都可以省 arguments  但是es6里提供了...reset 运算符
    function() {}
  2. Object 的原型对象
  Object(函数).prototype
  父 (原型)对象
  Object(函数).prototype.__proto__
  为什么?  到顶了， 不应该有原型
  null 此处没有对象， 不该有值

- 选择元素可以通过标签,id,选择器(),类名,子元素()
    任何元素都有这些方法， 不仅限于document
    
