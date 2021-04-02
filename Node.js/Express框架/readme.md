# express 

- Express 是一个简洁灵活的 node.js.Web 应用框架，用于创建 Web 应用和 http 工具，使用它可以快速搭建一个 完整功能的网站

- express 的核心特性有
1. 设置中间件来相应 http 请求
2. 定义路由表用于执行不同的 http 请求动作
3. 可以通过向模板传递参数来动态渲染HTML页面

- express的安装
  $ cnpm install express --save
  还有几个重要模块需要一起安装
  1. body-parser - node.js 中间件，一个解析cookie的工具
  2. multer - node.js 中间件， 用于处理表单数据
  以上两个安装代码
  $ cnpm install body-parser --save$ cnpm install cookie-parser --save$ cnpm install multer --save

- 请求和响应
request 和 response 对象
  request 对象表示http请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性
  - 常见属性有：
    req.app：当callback为外部文件时，用req.app访问express的实例
    req.baseUrl：获取路由当前安装的URL路径
    req.body / req.cookies：获得「请求主体」/ Cookies
    req.fresh / req.stale：判断请求是否还「新鲜」
    req.hostname / req.ip：获取主机名和IP地址
    req.originalUrl：获取原始请求URL
    req.params：获取路由的parameters
    req.path：获取请求路径
    req.protocol：获取协议类型
    req.query：获取URL的查询参数串
    req.route：获取当前匹配的路由
    req.subdomains：获取子域名
    req.accepts()：检查可接受的请求的文档类型
    req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
    req.get()：获取指定的HTTP请求头
    req.is()：判断请求头Content-Type的MIME类型

  response 对象表示http响应，在收到请求时向客户端发送的 http响应数据
  - 常见属性有：
    res.app：同req.app一样
    res.append()：追加指定HTTP头
    res.set()在res.append()后将重置之前设置的头
    res.cookie(name，value [，option])：设置Cookie
    opition: domain / expires / httpOnly / maxAge / path / secure / signed
    res.clearCookie()：清除Cookie
    res.download()：传送指定路径的文件
    res.get()：返回指定的HTTP头
    res.json()：传送JSON响应
    res.jsonp()：传送JSONP响应
    res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
    res.redirect()：设置响应的Location HTTP头，并且设置状态码302
    res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
    res.send()：传送HTTP响应
    res.sendFile(path [，options] [，fn])：传送指定路径的文件-会自动根据文件extension设定Content-Type
    res.set()：设置HTTP头，传入object可以一次设置多个头
    res.status()：设置HTTP状态码
    res.type()：设置Content-Type的MIME类型


- 路由
路由决定了由谁去响应客户端请求，在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。

- 静态文件
  express 内置了中间件 express.static 来设置静态文件
  我们可以使用 express.static 中间件来设置静态文件路径
    例：将图片，css 文件放在 public 目录下
    node_modulesserver.jspublic/public/imagespublic/images/logo.png
    静态资源的使用
    app.use(express.static('public'));

- get 方法 和 post 方法的区别
1. 功能上 
  get: 从服务器获取数据
  post:向服务器上传数据
2. 过程
  get: 将参数数据队列提交到表单 action 属性指向的 url中，值和表单内各个字段一一对应，在url中可以看到

  post： 通过 http post 机制，将表单内各个字段与内容放置在HTML header内一起传送到 action属性所指的 url 地址（用户看不到这个过程）
3. 获取值不同
  get: 服务器端用 request.QueryString 获取变量的值
  post：服务器端用request.Form 获取提交的数据
4. 传送数据量的不同
  get：不能大于 2KB
  post：默认不受限制
5. 安全性
  get：安全性非常低
  post：安全性较高

注意： 如果没有对数据进行加密处理，两者安全级别都是一样的

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）

