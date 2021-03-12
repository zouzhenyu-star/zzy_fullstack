import React,{Component} from 'react';

// warning 这种写法是老写法
// 类式组件用的少了，被 react-hooks 替代了，现在的流行是函数是组件
class TodoList extends Component  {
   constructor(props) {
     super(props)
     this.state = {
       list: []
     }
   }
   render() {
     retrun ( 
       <>
       </>
     )
   }
}
export default TodoList;