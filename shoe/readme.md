# 电商是2021永恒的主题

1. 得物APP  目的
    新的细分领域的电商在上线过程中
    - 得到 知识电商
    - 得物 潮牌电商
      群体 25岁以下的 潮牌群体 talk
      阿里电商/腾讯电商  互联网关系链
      拼多多 /  京东 
2. 功能细分 商品卡片的设计
    - 难点是半圆 -> 更大半径的圆 -> 圆的中心会改变
    - 鞋
        两个运动，转角 animation
    - 文字部分
        opatio 0-1
        container
    - 良好的结构
        不要想样式，要毛坯
        .dw 项目代号 是项目  不是简单地界面
        .container?  5种方法
            容器 宽度 + margin auto ?
            定位？
            弹性布局 水平居中
    - stylus 用法
        stylus -w *.styl -o *.css
        watch 监听
        output 向外输出样式
        1. 用tab 缩进
        2. 嵌套的css
        .dw_card
            &:hover
            &:after
            .dw_card__imgBx
        .dw_card .dw_card__imgBx {}
        & 不是下级， 是引用上级