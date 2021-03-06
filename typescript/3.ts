// interface 接口  设计模式 面向接口编程
// user要满足一个接口，用接口来定义方法和属性
interface IUser {
  name: string;
  age: number;
}
const getUserInfoWithInterface = (user: IUser):string => {
  return `name: ${user.name},age: ${user.age}`;
}
getUserInfoWithInterface({name:'kaola',age:18})