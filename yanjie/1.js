let ran_num = Math.random();
console.log(ran_num);
console.log(Math.floor(2.3));
console.log(Math.ceil(7.1));
console.log(Math.round(25.5));
// 0-9 之间的随机整数
console.log(Math.floor(Math.random()*10));

let max = 100,
  min = 0;
// 在最小值和最大值之间的随机数
console.log(Math.random()*(max-min)+min);