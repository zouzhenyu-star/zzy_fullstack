const arr = [3,4,5];
// 给出在数组尾部，头部  加、删除的方法
arr.push(6); //面向对象的方法 push() 方法可向数组的末尾添加一个或多个元素,并返回新的长度
console.log(arr.pop);// pop() 方法用于删除并返回数组的最后一个元素
arr.unshift(); //unshift() 方法可向数组的头部添加一个或多个元素
// 把数组打印出来， 有多少种方法?
for (let num in arr) {
    console.log(num);
}
arr.forEach(item => {
    console.log(item);
})
console.log(arr.join(" "));//join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
console.log(arr.splice(0,arr.length));//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。注释：该方法会改变原始数组。
console.log(arr.map(item => item));//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。map() 方法按照原始数组元素顺序依次处理元素。