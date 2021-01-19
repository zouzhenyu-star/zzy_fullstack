# grid 布局

- 在哪里， 见过这种九宫格方式
- 考题中， 有多少种让屏幕居中的方法？
  - flex body d:f  justify-content:center    align-items:center  一代
  - grid  二代  二维的时候   justify-content
  - 定位
  - margin 负值
  - .......
- grid-template-rows|columns
  布局可以直接对二维名声明
- 9个元素， 使得每个格子背景颜色不一样 ?
  - js 是王者， ele.style  夏原俊
  - css 方案  .box:nth-child
    ? 每一个都不一样
    .box:nth-child(1|odd|event)  :last-child   1代表第一个 odd和event代表奇偶
  - 别的方案？ 9 个格子， 更多格子？ 选择器写的有没有一点累？

- 弹性布局在解决现代移动端甚至未来互联网，不好解决或者解决麻烦
  九宫格 多加每一行的父元素
  grid 的二维布局方案来了

- 在垂直方向做主元素分配高度
  display:grid + grid-template-rows
  1fr auto
  更优秀

- fristChild lastChild
  childNodes 换行符会做为空的文本节点来 lastElementChild
