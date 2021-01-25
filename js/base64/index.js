const webp = require('webp-converter');

webp.cwebp("手机.jpg","output.webp","-q 80", function(status,error) {
  console.log(status);
})