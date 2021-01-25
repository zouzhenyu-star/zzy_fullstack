- 图片性能优化，  我们想到什么？ 减少 http 数， lazyload throttle
- 编解码
  data:img/jpg;base64,文件头  base64是一种编码格式 /9j/文件内容
  Google 大量的使用base64 减少请求数， 是最严重的页面性能的地方

  1. 网页性能优化
    - 精灵图片的优化技术 多张图（小图，icon）合并到一张图去减少http请求
    - 历史 lazyload scroll + API , 减少一些执行次数 throttle
    - 现在有 base64 把发送请求的机会都没了 不是所有图片
      衡量， 小一点的图片用 base64 ，大图片用 lazyload 

      展示图片，不发送API请求的方法
    - 大图的话， 特别是头图， banner 图，商品详情页的图片
    可以在 webp 大小减少  25%+ 清晰度不受损， + lazyload


  - js 多线程的苗头 worker 推出有一段时间了， 但是没有成为主流
    有多线程的能力
    new worker('js 文件') 单独运行， 不会阻塞主线程

    web worker
    1. 跟DOM 相关的事情不能做
      因为js是css和html的第三者，来回穿梭很耗性能
      worker 不能和主线程去同时操作同一个元素

