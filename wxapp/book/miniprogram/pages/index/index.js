//不用买服务器 不用配置数据库
const db = wx.cloud.database();//
const phoneTable = db.collection("products");//collection table
Page({
  data:{
    phone_list:[]
  },
  onLoad(){
    //加载数据
    db
      .collection("products")
      .get({
        success:res => {
          //console.log(res);
          this.setData({
            phone_list:res.data
          })
        }
      })
  },
  viewItem(e){
    var id = e.currentTaget.dataset.id;
    wx.navigateTo({
      url:'../phoneDetail/phoneDetail?id=' + id
    })
  }
})