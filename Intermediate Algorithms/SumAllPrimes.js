
function sumPrimes(num) {
  var sum = 0,
      primes = [];
  
  for(var i = 2; i <= num; i++) {
    for(var j = 2; j <= i; j++) {
      
      if (i === j) {
        primes.push(i);
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  
  return primes.reduce(function(a,b){
    return a + b;
  });
}

sumPrimes(10);
