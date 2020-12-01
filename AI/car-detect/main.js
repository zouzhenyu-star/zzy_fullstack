// console.log('AI来了')
// node 引入模块的关键字
// 图像识别
const AipOcrClient=require("baidu-aip-sdk").ocr;
// 内置模块  fileSystem
const fs = require('fs');
// 1. 读入文件 I/o 从硬盘读入内存中，
const APP_ID = "23078076";
const APP_KEY = '8TKf0NlZmoOywtDGOQWe6D0M';
const SECRET_KEY = '8bslGVlFHNZFKPj5aKr1gXTQD9GamCGE';
const image = fs.readFileSync("number.png").toString("base64");


const client = new AipOcrClient(APP_ID,APP_KEY,SECRET_KEY);
const options = {};
options["multi_detect"] = "true";

client
      .licensePlate(image,options)
      .then(function(result){
          console.log(result);
      })
      .catch(function(err) {
          console.log(err);
      })

// const fs = require('fs');
// const image = fs.readFileSync("./weilaiep9.png").toString("base64");

// client
//     .carDetect(image)
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function(err){
//         console.log(err)
//     })
