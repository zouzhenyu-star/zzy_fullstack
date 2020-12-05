// console.log('AI来了')
// node 引入模块的关键字
// 图像识别
const ApiImageClassifyClient=require("baidu-aip-sdk").imageClassify;
// 内置模块  fileSystem
const fs = require('fs');
// 1. 读入文件 I/o 从硬盘读入内存中，
const APP_ID = "23077966";
const APP_KEY = '4lnqSSlFA5PFpby91qDb9N6T';
const SECRET_KEY = 'zirhqln3qg50DeiOdGQN6QiXrGRMT4Go';


const client = new ApiImageClassifyClient(APP_ID,APP_KEY,SECRET_KEY);
// const fs = require('fs');
const image = fs.readFileSync("./ix35.png").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })
