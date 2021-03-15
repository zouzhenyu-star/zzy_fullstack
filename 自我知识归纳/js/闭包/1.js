var fn;
function foo() {
  var a = 2;

  function baz() {
    console.log( a );
  }
  fn = baz;
}

function bar() {
  fn();
}
foo();// 如果没有这一步，下面调用 bar() 时，运行 fn() 会报错，因为此时fn还没有被赋予baz的值，这一步就是讲baz的函数值赋值给fn的
bar();