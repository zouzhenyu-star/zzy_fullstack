const createFlow = require('./flow');
const delay = (ms) => new promise ((resolve)) = (
setTimeout(resolve,ms));

const subFlow = createFlow([
  () => delay(1000).then( ()=> console.log('c'))
])
//参数为数组
createFlow([
  () => console.log("a"),
  () => console.log("a"),
  subFlow, // 递归不是算法， 是编程技巧
  [
    () =>delay(1000).then(() => console.log("d")),
    () =>console.log("e")
  ]
]).run(() => {
  console.log("done");
})


delay(1000)
  .then(() => {
    console.log(data);
  })