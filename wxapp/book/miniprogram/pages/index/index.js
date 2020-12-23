//不用买服务器 不用配置数据库
// const db = wx.cloud.database();//
// const phoneTable = db.collection("products");//collection table
// Page({
//   data:{
//     phone_list:[]
//   },
//   onLoad(){
//     //加载数据
//     db
//       .collection("products")
//       .get({
//         success:res => {
//           //console.log(res);
//           this.setData({
//             phone_list:res.data
//           })
//         }
//       })
//   },
//   viewItem(e){
//     var id = e.currentTaget.dataset.id;
//     wx.navigateTo({
//       url:'../phoneDetail/phoneDetail?id=' + id
//     })
//   }
// })
//云数据库 
const db = wx.cloud.database()
//userInfo表
const userInfo = db.collection('userInfo')

Page({
  data:{
    userList:[]
  },
  navigatTo(){

  },
  getUserInfo(result){
    console.log(result.detail.userInfo);
    //一切的云开发在未来都是从调用一个函数开始
    //登录
    wx.cloud.callFunction({//一次上云事件
      name:'getOpenId',
      //回调函数
      complete:res => {
        console.log(res)
        //在哪里 mysql where 条件查询
        userInfo.where({
          //用户的openId是惟一的
          //去云端就是为了拿openId
          _openid:res.result.openId
        }).count().then( res => {//count获取数据数量，then执行
          // console.log(res);
          //新用户
          if(res.total == 0){
            //插入用户
            //Insert 插入
            userInfo.add({
              //一定要有一个data字段 一个JSON
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err => {
              console.error(err)
            })



          }else{
            wx.navigateTo({
              url: '../add/add',
            })

          }
        })
      }
    })
  }
})