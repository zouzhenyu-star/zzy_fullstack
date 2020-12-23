- block 承载指令
- wx:for   wx:key  优化
- 尊重用户隐私
    用户的头像，昵称等用户信息。 需要 得到用户的认可
    open-type="getUserInfo"
    等用户来决定
- open-type 属性增加 getUserInfo ：用户点击时候会触发 bindgetuserinfo 事件。

新增事件 bindgetuserinfo ：当 open-type 为 getUserInfo 时，用户点击会触发。可以从事件返回参数的detail字段中获取到和wx.getUserInfo 返回参数相同的数据。

示例：

<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler"> Click me </button>
和 wx.getUserInfo 不同之处在于：

API wx.getUserInfo 只会弹一次框，用户拒绝授权之后，再次调用将不会弹框

组件  由于是用户主动触发，不受弹框次数限制，只要用户没有授权，都会再次弹框