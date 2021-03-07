- 移动电商的布局
- 10% 百分比
    1. css 继承
    2. 有什么办法可以实现，box 占满整个屏幕，便不用继承
        - 用定位
        - vw, vh 移动端屏
    3. float:left
    4. 如果不用浮动
        display:inline-block
        div它的间隔是由 换行符 导致并存在的,换行符也是一个字符 用font-size: 0
    5. rem 是相对单位,相对于html根元素
        只要html设置成我们的屏幕宽度的1/10  1rem = 10%
    6. 如何让不同宽度的手机都实现一样的效果？
        动态设置font-size

提升格局 从学校里传统的 PC 端 -> 移动端 -> 动态变换
    vw vh rem onresize
布局这块 dib
定位
弹性
浮动
