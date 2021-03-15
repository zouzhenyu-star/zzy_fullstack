
var x = 1;
var f = function () {
  console.log(this.x);
}
var y = function() {
  obj()
};
var obj = {
  f: f,
  x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
y.obj.f() // 2