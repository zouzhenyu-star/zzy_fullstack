// 隐式类型转换
// 当一侧操作数为 String类型时，它会优先将另一侧转换为字符串类型

console.log(1 + '2');
// 其次当一侧操作数为 Number类型时，另一侧会转为Number类型
// 其次当一侧操作数为 Boolean类型时，另一侧会转为Boolean类型

console.log(1 + true);//2
// 当一侧为Number类型时 ，另一侧为引用类型，根据操作会做出相应转型
console.log(1 + {});
// 对象 在表达式 if == 数字或字符串 toString()
// 对象提供了 valueOf 类型转化
console.log(3*{valueOf:function()
   {
     return 5
    }}
    );
//console.log(3+ {},3 * {});
console.log({} + {});