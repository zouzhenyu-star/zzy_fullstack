//index.js
//获取应用实例
const app = getApp()
const WXAPI = require('apifm-wxapi');

Page({
  data: {
    banners:[]
  },
  //事件处理函数
  
  
  onLoad: function () {
   //启用滑屏效果
   //图片数据从哪里来？
   WXAPI
    .banners({//头图 banner位
      type:'app'
    })
    .then(res => {
      this.setData({
        banners:res.data
      })
    })
  },
  getUserInfo: function(e) {
   
  }
})
