

function bubbleSort (array) {
  const {length} = array;
  for(let i = 0; i<length; i++) {
    for(let j = 0; j <length-1; j++) {
      if(array[j] >= array[j+1]) {
        // let temp=array[j];
        // array[j] = array[j+1];
        // array[j+1] = temp;
        [array[j],array[j+1]] = [array[j+1], array[j]]  // 使用解构进行交换
      }
    }
  }
  return array;
}
console.log(bubbleSort([4,6,1,9,3]));
