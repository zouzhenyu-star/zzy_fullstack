// 1

var mySymbol = Symbol() // 初始化
var shapeType = { // 形状的类型  json object 
  triangle: Symbol(), // 三角形
  square: Symbol() // 正方形
}
// Symbol 是一个原始数据类型,这里用处是 当一个对象要写好多属性进去时，而且这个对象是一个 JSON ，不是一个数组时，可以使用Symbol，不用命名更加省事
// Symbol 不能被枚举
function getArea(shape, options) {
  var area = 0;
  switch(shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height;
    break;
    case shapeType.square:
      area = options.width * options.height;
    break;
  }
  return area;
}
console.log(getArea(shapeType.triangle, {
  width: 100,
  height: 100
}))

// 2
const obj = {
  toString() { //这里的 toString方法 将Object.prototype.toString() 方法覆盖了
    return 'abc'
  }
}
console.log(obj.toString());

// 3
var obj = {};
var a = Symbol(); // 
var b = Symbol();
// 给 JSON配置添加属性
obj[a] = 'Hello';// 用 Symbol 可以偷懒，Symbol自身作为 JSON key
obj[b] = 'world';
obj.cc = 'cc';  // JSON 添加属性，取个名字并赋值

console.log(Object.keys(obj)); // Object 上的keys方法,获取Object上的所有key,这里由于无法遍历，所以无法显示
// 想要拿到对象上的 key 需要单独处理
console.log(Object.getOwnPropertySymbols(obj));