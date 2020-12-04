// let request = require('request-promise');//第三方npm
//上条不可用时可将require中换成http这个内置库,换成node-fetch库也可
const fetch = require("node-fetch");
let cheerio = require('cheerio');

let url = 'https://movie.douban.com/top250';

const main = async () => {//async 关键字
    // let html = await request({//等待爬取
    //     url
        
    // });
    // console.log(html);
    fetch(url)
            .then(res => res.text())
            .then(body => {
                let $ = cheerio.load(body);
                let movieNodes = $('#content .item');
                console.log(movieNodes)
            });
    
}
main ();
