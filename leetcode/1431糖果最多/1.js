var kidsWithCandies = function(candies, extraCandies) {
  let arr=[];
  for(var i=0; i<candies.length; i++) {
    candies[i]+=extraCandies;
    var max = Math.max.apply(null, candies);
    if(candies[i] == max){
     arr[i] = true;
    }else {
      arr[i] = false;
    }
    candies[i] -= extraCandies;
  }
  return arr;
};
console.log(kidsWithCandies([2,3,5,1,3], 3));