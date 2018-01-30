
function smallestCommons(arr) {
  
  var small = Math.min(arr[0], arr[1]),
      big = Math.max(arr[0], arr[1]),
      LCM = big,
      count = small;
  
  while (count < big) {
    if(LCM % count === 0) {
      count++;
    } else {
      LCM += big;
      count = small;
    }    
  }   
  return LCM;
}


smallestCommons([1,5]);
