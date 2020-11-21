/**
 * 获得唯一ID
 * @author zouzhenyu
 * @date 11-21
 * @return {string} 
 */
const uniqueID = () => + new Date() + '' + Math.ceil(Math.random()*1000)
// const uniqueID = () =>{
//      let t = + new Date();//类型转换
//      let ranNum = Math.ceil(Math.random()*1000)
//      return t + "" + ranNum;
// }

console.log(uniqueID());