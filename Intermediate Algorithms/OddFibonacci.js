//ugly

function sumFibs(num) {
  var sum = 0,
      x = 0,
      fibs = [1, 1];
  while(x < num) {
    x = fibs[fibs.length - 1] + fibs[fibs.length -2];
    fibs.push(x);
  }
  
  for (i = 0; i < fibs.length; i++) {
    if(fibs[i]%2 !==0 && fibs[i] <= num){
      sum += fibs[i];
    }
  }
  
  return sum;
}

sumFibs(75025);
