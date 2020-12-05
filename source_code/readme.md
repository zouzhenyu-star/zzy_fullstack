# 源码分析

## 国际化的命名规范 BEM

1. 今天会取名，明天取类名
   - .weui-btn
     btn 组件名 70%都是由框架提供的，基础类
     weui 项目前缀 tb tm 项目组
     命名只参考头部class名即可，不需要多重叠加
2. css 知识点
 - 元素分为行内元素和块级元素 inline block   inline-block
 - 元素在页面上的占位，由内容（wh） padding border margin position 盒子模型
3. 面向对象的css
 - 一个元素有多个类
    .weui-btn Block  基础类
    .weui-btn primary  Modifier 多态
4. 安装了一个插件
    node  js 的后端
    npm i-g live-server
    live-server web 服务器
5. 结构
   结构套路 移动端页面
  .page>.page_hd+.page_bd
  weui 项目组
  BEM 搭积木
  Block 块
  Element 子元素 __两个下划线
  Modifier 装饰 _
  .zfb-tabbar
     .zfb-tabbar_item
     .zfb_tabbbar_item_on

