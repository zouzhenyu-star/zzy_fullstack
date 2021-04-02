# 一、HTML 模板
  <!DOCTYPE html>
  <html>
    <head>
      <script src="../build/react.js"></script>
      <script src="../build/react-dom.js"></script>
      <script src="../build/browser.min.js"></script>
    </head>
    <body>
      <div id="example"></div>
      <script type="text/babel">
        // ** Our code goes here! **
      </script>
    </body>
  </html>
  上面注意两个地方
    1. 最后一个 <script> 标签的 type 属性为 text/babel这是因为 React 独有的
     JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 type="text/babel"
    2. head标签中应该先导入 库

# 二、ReactDOM.render()
   ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
    // 这里是将一个 h1 标题 插入 example 结点
  );
  ReactDOM.render 是 React 的最基本方法，用于把上面模板转为HTML语言，并插入指定的DOM结点

# 三、JSX 语法
    var names = ['Alice', 'Emily', 'Kate'];

    ReactDOM.render(
      <div>
      {
        names.map(function (name) {
          return <div>Hello, {name}!</div>
        })
      }
      </div>,
      document.getElementById('example')
    );
    < 开头的就是 HTML语言， { 开头的就是 js 语言

# 四、组件
// React.createClass 用于代码生成一个组件类，并在网页中插入这个组件

  var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
  });

  ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
  );

  上述代码中， 变量 HelloMessage 就是一个组件类，在任意的模板中只要插入这个组件
  就会自动生成 HelloMessage 的一个实例，输出 HelloMessage 中的内容

  tips： 1.组件类的第一个字母必须大写，比如 HelloMessage
         2.组件类只能有且必须有一个 顶层标签，包住内层代码
         2.组件可任意加入属性。比如上述代码中，加入了 name 属性，值为 John
          组件的属性在组件类的 this.props 对象上获取， 上述代码中用 this.props.name 读取
         4.添加组件属性需要使用驼峰命名法， 且属性名需要避开 js 保留字

# 五、this.props.children
  // this.props 中所使用的对象的属性与 组件中的属性一一对应
  // 但是有一个例外， 就是 this.props.children,它表示遍历所有子节点

  var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
          
          // map 方法中 含有children 的两个属性，然后被 this.props.childrend读取
          //读取后通过function函数 把按顺序把 child 也就是子节点传进去，再用return输出
          //这样执行两次 map 就可以把 children 都执行完了

        })
      }
      </ol>
    );
  }
});

  ReactDOM.render(
    <NotesList>
      <span>hello</span>
      <span>world</span>
    </NotesList>,
    document.body
  );
NotesList 组件中的两个 span 子节点 都被 this.props.children 获取了

tips: 使用 this.props.children 时有三种可能
    1. 当前组件中没有子节点时，他就是 undefined
    2. 如果有一个子节点，数据类型就是 object
    3. 如果有多个子节点，数据类型就是 Array

# 六、PropTypes 和 getDefaultProps

- PropTypes

  PropTypes 属性用于检测 组件实例的属性是否符合要求

  var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

  上面 Mytitle 组件中有一个 title 属性，用 React.PropTypes 进行检测
  这里 .string意思是 title 的数据类型应该是 string 类型，isRequired 是说title属性是必须的

  看下面代码
  var data = 123;

  ReactDOM.render(
    <MyTitle title={data} />,
    document.body
  );
  此时 title 的数据类型为 number ,就无法通过 PropTypes.string 的验证了

- getDefaultProps
一般组件使用的外部属性都是通过 this.props 来引入
但是这里也可以用 getDefaultProps 在内部定义属性的默认值 
var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

ReactDOM.render(
  <MyTitle />,
  document.body
);

