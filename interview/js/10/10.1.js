// null,值为空？
// null没有对象 所以该处不该有值
//Object到顶了，不能再有对象
console.log(null);
console.log(Object.prototype.__proto__);// Object的原型对象是 null