# const 和 var 和 let 的区别
- 1. var声明的变量会挂载在window上
    而let和const声明的变量不会

var a = 100;
console.log(a,window.a);    // 100 100

let b = 10;
console.log(b,window.b);    // 10 undefined

const c = 1;
console.log(c,window.c);    // 1 undefined

- 2. var 声明会进行变量提升，而 let和const不会

console.log(a); // undefined  ===>  a已声明还没赋值，默认得到undefined值
var a = 100;

console.log(b); // 报错：b is not defined  ===> 找不到b这个变量
let b = 10;

console.log(c); // 报错：c is not defined  ===> 找不到c这个变量
const c = 10;

- 3. let和const声明形成块作用域，var不会
    所以 let和 const 声明的变量为内部变量，用const定义的变量为全局变量

if(1){
    var a = 100;
    let b = 10;
}

console.log(a); // 100
console.log(b)  // 报错：b is not defined  ===> 找不到b这个变量

- 4.  同一作用域下 var 可以声明同名变量，let 和 const则不可以

var a = 100;
console.log(a); // 100
var a = 10;   // 重复声明会进行覆盖
console.log(a); // 10  

let a = 100;
let a = 10;
//  控制台报错：Identifier 'a' has already been declared  ===> 标识符a已经被声明了。

- 5. 暂存死区
  变量在块作用域内被赋值时，如果内部有a 被 let或 const的情况下
  给 a 赋值时，只会在块作用域内部 找寻变量 a 

var a = 100;

if(1){
    a = 10;
    //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，
    // 而这时，还未到声明时候，所以控制台Error:a is not defined
    let a = 1;
}

- 6. const

const  声明的三条规则

1、const进行声明后必须进行赋值操作，不可以用 null 进行占位

2、const 进行声明后不能再进行修改

3、const声明的是复合类型数据时，可以修改这个复合数据的属性，
且因为是引用类型，所以修改属性时，由于同名的数据都指向同一地址，所以修改一个数据，其他数据也会跟着改变

const a = 100; 

const list = [];
list[0] = 10;
console.log(list);　　// [10]

const obj = {a:100};
obj.name = 'apple';
obj.a = 10000;
console.log(obj);　　// {a:10000,name:'apple'}