
function sumAll(arr) {
  var sum = 0,
      min,
      max;
  max = Math.max(arr[0], arr[1]);
  min = Math.min(arr[0], arr[1]);
  for (var i = min; i <= max; i++) {
    sum += i;
  }  
  return sum;
}

sumAll([1, 4]);
