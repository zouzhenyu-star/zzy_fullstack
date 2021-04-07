function flatten(arr) {
  var array = [];
  for(let i = 0; i < arr.length ; i++) {
    if(Array.isArray(arr[i])) {
      array = array.concat(flatten(arr[i]));
    } else {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(flatten([1,2,[3,[4]]]));
