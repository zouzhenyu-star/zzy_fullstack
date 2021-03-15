// 1. 用splice  i为起始删除元素，n 为 连续删除的长度,如果 n 为2 意思是i和i+1 两个元素删除
arr.splice(i,n);
// splice 方法的妙用实现 数组的 修改和添加
arr.splice(1,1,'ttt'); // 修改：此时 n 为1 ，即删去原来下标为1 的元素，并在原位置添加'ttt' 新元素

arr.splice(1,0,'ttt'); // 修改：此时 n 为0 ，即不删除原有元素的情况下，在这个元素前面添加新元素

// 2. 用 remove 匹配删除
var emp = ['abs','dsf','sdf','fd']
emp.remove('fd'); //此时只删除了 字符串为 'fd' 的元素