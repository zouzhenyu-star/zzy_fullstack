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

# wx:key
  字符串
代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。 

保留关键字 *this
代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如： 
当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

一般是指定一个唯一的字段(类似于id的定义);

通配符+名字 
例如 *item




