
//原型继承的基本案例
function Person(name, age) {
	this.name = name;
	this.age = age;
}
//1.直接替换原型对象 
var parent = {
	sayHello : function() {
		console.log("方式1：替换原型对象");
	}
}
Person.prototype = parent;
var p = new Person("张三", 50);
p.sayHello();
//2.混入式原型继承
console.log(".............混入式原型继承..............");


function Student(name, age) {
	this.name = name;
	this.age = age;
}
var parent2 = {
	sayHello : function() {
		console.log("方式2：原型继承之混入式加载成员");
	}
}
for ( var k in parent2) {
	Student.prototype[k] = parent2[k];
}
var p = new Student("张三", 50);
