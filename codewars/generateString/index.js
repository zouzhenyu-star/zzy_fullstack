/**
 * @author zzy
 * @date 2020.12.5
 */
// console.log("hello world".split("")[0].toUpperCase().charAt(0)+"hello world".slice(1))
// console.log("hello world".split("")[0].toUpperCase())  全部字母大写
// console.log("hello world".slice(1))  
function generateHashtag(str) {
    // let arr = [];
    // str
    //  .split('')
    //  .forEach(item => {
    //     //console.log(item);
    //     arr.push(item.charAt(0).toUpperCase() + item.slice(1))//用push方法把数组放进去
    //  });
    //  //console.log(arr);
    // return arr.join(' ')//每个单词用空格联系起来
    return str.length > 140  || str ==='' ? false : '#' + str.split(' ').map(capitalize).join(' ')
}
// map的callback
function capitalize(item){
    return item.charAt(0).toUpperCase() + item.slice(1)
}
console.log(generateHashtag('hello world'));