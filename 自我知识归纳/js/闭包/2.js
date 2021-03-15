// for 循环解释闭包的 四大进阶

// 延迟函数的回调会在循环结束时才执行，所以下面代码的timer() 时，i 已经为6
for (var i =1; i<=5; i++) {
   setTimeout( function timer () {
    console.log( j );
  },j*1000)
}
// 延迟函数会将立即执行函数每次迭代时创建的作用域 封闭起来，但此时封闭的是一个空作用域
for (var i =1; i<=5; i++) {
  ( function() {
    var j;
   setTimeout( function timer () {
    console.log( j );
  },j*1000)
  })(i);
}
// 在立即执行函数中添加 一个变量来获取每次迭代时 i 的值，此时立即执行函数不为空就能正常执行了

for (var i =1; i<=5; i++) {
  ( function() {
   setTimeout( function timer () {
    console.log( i );
  },i*1000)
  })();
}
//  用立即执行函数进行变量调用优化

for (var i =1; i<=5; i++) {
  ( function(j) { // 定义变量 j
   setTimeout( function timer () {
    console.log( j );
  },j*1000)
  })(i); // 调用参数 i
}