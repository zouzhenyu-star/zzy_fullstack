const dogs = new Map(); // 
const friends = new Map();
friends.set('黄志乾','华灯初上',)
friends.set('何江涛','鸡毛',)


// 输出遍历它
// for(const friend of friends){
//   console.log(friend);
// }
// for(var i = 0; i <friends.length; i++){
  
//   console.log(friends[i]);
// }
friends.forEach((val,key) => console.log(val,key));

for(const [key,val] of friends){
  // 解构
    console.log(key,val);
  }

const [a,b] = [1,2];
const {} = {"a":1,"b":2n}