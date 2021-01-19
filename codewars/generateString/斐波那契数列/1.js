function tribonacci(signature,n){
  //your code here
  var result = signature;
  if(signature.length === 3 && n > 3){
    for(var i = 3; i < n; i ++){
      result[i] = result[i-1] + result[i-2] + result[i-3];
    }
  }
  result.length = n;
  return result;
}