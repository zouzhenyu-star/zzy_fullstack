# css
  ##
  1. <image mode="aspectFill"/> image的 mode 属性，图片长宽取较短一方进行正方形裁切
    也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
  2. 商品信息的隐藏
  .fruit-item .fruit-info .name {
  font-size:35rpx;     设置字体大小
  -webkit-line-clamp: 2;  设置文段展示只显示两行
  text-overflow: ellipsis;  设置多行文本溢出显示为 ...
  display: -webkit-box;   自动计算宽度和自适应
  -webkit-box-orient: vertical; 指定一个box子元素是否应按水平或垂直排列，此处为垂直
  overflow:hidden;  给一个元素中设置overflow:hidden，那么该元素的内容若超出了给定的宽度和高度属性，
                    那么超出的部分将会被隐藏，不占位
    8-12行样式常常组合在一起使用
  }
