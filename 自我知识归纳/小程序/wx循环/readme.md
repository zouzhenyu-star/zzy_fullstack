# wx:for 的使用
  首先需要理解各个位置代表的含义
  wx:for="{{list}}"   //list为要循环遍历的数组

  wx:for-items="{{list}}"   //list为要循环遍历的数组，同for一样

  wx:for-item="item"   //item作为代表每一项的对象

  wx:key="{{index}}"   //作为遍历数组的唯一标识符

  wx:for-index="{{fc}}"   //它是指向当前元素的下标名，可以在其他事件中定义自定义事件（data-xxx='{{fc}}'）获取该下标。所以wx:for-index="{{变量名}}"和data-xxx='{{变量名}}'是搭配在一起使用
#
  <view wx:for="{{items}}" wx:for-item="name" wx:for-index="id">
  1. wx:for="{{items}}" 表示循环一个数组

  2. wx:for-item="name" 指定当前元素的变量名,
     wx:for-item主要只是对循环项目数组的元素（item in array）重新命名
  例如  wx:for="{{[1,2,3,4,5,6,7,8,9]}}" wx:for-item="i"，当前for循环执行到1时，
     name = 1
     
  3. wx:for-index="id"  指定当前数组下标的变量名

  4. wx:key="{{index}}"   作为遍历数组的唯一标识符
  

# wx:for-items
  wx:for-items应该可以包容wx:for
  <view wx:for-items="{{array}}" wx:for-item="item">
  wx:for-items，可以用于数组，代替 wx:for ,也同时用于外层的单循环

# block标签的介绍和使用
  block标签往往是跟着wx: 一起使用的一个包装元素
  1. <block> 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
  2. 因为 wx:if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <block/> 标签将多个组件包装起来，并在上边使用 wx:if 控制属性。
        < block  wx:if = "{{true}}" >
              < view >  view1  </ view >
             < view >  view2  </ view >
        </ block >
  3. 类似 block wx:if，也可以将 wx:for 用在<block/>标签上，以渲染一个包含多节点的结构块。例如：
    <block  wx:for = "{{[1, 2, 3]}}" >
      <view>  {{index}}:</view >
      <view>  {{item}}  </view >
    </block>




