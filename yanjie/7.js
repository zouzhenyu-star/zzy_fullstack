var reg = /(\d{4})-(\d{2})-(\d{2})/;    // {}里面是长度
var dateStr = '2018-04-18';
// console.log(reg.test('0791-86-34')); 
reg.test(dateStr);
console.log(RegExp.$1,RegExp.$2,RegExp.$3);

