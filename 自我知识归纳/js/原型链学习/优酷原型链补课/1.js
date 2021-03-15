function instance_of(L, R) {
  var O = R.prototype;
  L = L.__proto__;
  while(true) {
    if (L === null) return false;
    if (L === O) {
      L = L.__proto__;
    }
  } 
}