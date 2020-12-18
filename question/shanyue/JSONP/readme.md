1. HTTP 协议
    TCP/IP(万物互联的底层)  HTTP是上层
    Web Server  RestFul 

    JSON 资源, 喜欢的运动员，HTTP 提供服务   R请求 Q响应
    url http://127.0.0.1/players.json
    动作 GET 
    live-server 静态资源
    json-server 

    url -> 资源 resources 
    跨域: 域名不一样 协议不一样 http ->https 3000 -> 8080
    json-server 它自带跨域能力跨域的
    而一般js是不允许跨域的 https://www.runoob.com/try/ajax/jsonp.php
    不支持跨域的解决办法是 : JSONP JSON with padding

    我们用的DOM 编程，document.createElement("script")
                script.src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"
                document.body.appendChild(script)

- 文章
    用前端思路实现底层
    1. fetch 是Promise的一个实例 thenable 去服务器端通信
    2. DOM API
        tree
        document.createElement()
        父节点 appendChild(子节点)
        document.createTextNode()

    HTTP 底层协议
     请求响应    url + method
     数据格式是 JSON
    
    跨域  跨域是为了保护数据，为了安全 域名 端口
    json-server 本地 自己自带解决方案
    JSONP fn(data) 在页面端预留一个函数fn

    response 来到客户端
    script 返回来 fn(data)

    代码有一定的功能区分时， 请写函数
    createUserElement = (user) => {
        const user = createElement;
        return user;
    }

    es6 for of 
