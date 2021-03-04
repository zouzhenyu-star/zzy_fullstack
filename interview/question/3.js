var a = 0xa; // 这是什么？16 进制数 
// ox 开头的是 16进制数
console.log(typeof a);
var b = 010 // 8 进制数 以0开头的话是8进制数
var c = 0b01; // 二进制数
console.log(c + 3);//会变成 10 进制数
console.log(b + 19);
console.log(0.1 + 0.2);
// 0.3000000000000004  原因是 JS 浮点类型不精确
// JS 没有浮点类型，所以不适合高精度的计算
// JS 浮点数转成二进制的时候，会无限的循环
// 二进制相加会不准确
console.log((8).toString(8));
console.log((0.1).toString(2));//toString 方法可以传一个进制数

console.log((0.2).toString(2));

console.log(Number.parseInt('011',8));//把011转换为 8 进制数
console.log(Number.parseInt('20',2));//2进制数中不可能出现2，所以结果为NaN，即不可能
// JS Number ，已经超过 JS 的运算范围了,已经溢出了，2的35次方
// 现在 ES6 有BigInt这个解决方案了
console.log(9999999999999999999999999);// 10000000
console.log(9007199254740992 === 9007199254740993);//不安全
console.log(9007199254740992n === 9007199254740993n);
console.log(10 + 10n);

