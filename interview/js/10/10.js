// 有哪些情况会是 undefined ?
let a ; //声明，没有赋值   没有进行LHS赋值操作
// JS 变量声明时，JS类型由数值决定
console.log(typeof a);  // undefined  1.没有赋值，所以没有类型
// 2. 函数没有返回值
const fnNoReturn = () => {}
console.log(fnNoReturn(), '2');
// 3.参数不传值
const fn = (b) => {
    // 一运行就会有的 -> this指针对象 指向一个对象
    console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));

const o = {c:'1'}
console.log(o.d,'4'); //没有声明的属性也叫undefined  undefined不是语法错误
console.log(zr);//引用了未定义的变量是 语法错误

console.log(null == undefined); //true  值相等
console.log(null === undefined); //false 值相等，类型不相等



// // 1. 调用没有定义的变量
// function show(b){
//    alert(b);  
// }
// show(b);
// // 2. 声明了变量却没有值
// var a;
// alert(a);
// 	// 1）另外 声明了变量也付了值   但是值找不到  返回的是 null
// 		var a=document.getElementById('box')    //box 没有
// 		alert(a)
// // 3. 参数定义了没有传值
// function show(b){
   
// }
// alert(show());
// // 4. 函数中没有写return 返回的值 就是undefined
// function show(b){
   
// }
// // 5. 如果写了return 却没有声明值 也是undefined
// function show(b){
//    return
// }
