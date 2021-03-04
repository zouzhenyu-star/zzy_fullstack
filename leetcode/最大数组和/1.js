
var maximumWealth = function(accounts) {
  var sum = 0;
  var max = 0;
  for(var i = 0;i<accounts.length;i++){
    for(var j = 0;j<accounts[i].length;j++){
        sum += accounts[i][j];
    }
    if(max < sum) {
      max = sum;
    } //当前总和和上一个最大值对比后,更新最大值.
    sum=0;
  }
  return max;

};