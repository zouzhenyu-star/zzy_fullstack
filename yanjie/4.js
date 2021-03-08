//   es6 提供的新的数据结构
//   1. 为了数组的优化而来
//   Set Map 两种数据结构 都是用来存放特定的数据集合的
const people = new Set();  // []
people.add('黄伦');
people.add('廖辉');
people.add('过羽潭');
people.add('邹振于');
people.add('过羽潭');// 使用 set 数据结构不会重复添加数据
// console.log(people);
for (const person of people) {
  console.log(person);
}

const students = new Set(['王电虎','柳书豪','夏元俊']) //创建时先赋予默认值
students.add('支恩泽')