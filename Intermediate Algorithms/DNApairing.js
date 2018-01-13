
function pairElement(str) {
  var pairs = [],
      DNA = str.split('');
  for (var i=0; i<DNA.length; i++){
    if (DNA[i] == 'A') {
      pairs.push(['A','T']);
    } else if (DNA[i] == 'T') {
      pairs.push(['T','A']);
    } else if (DNA[i] == 'G') {
      pairs.push(['G','C']);
    } else if (DNA[i] == 'C') {
      pairs.push(['C','G']);
    }
  }
  console.log(pairs);
  return pairs;
}

pairElement("GCG");
