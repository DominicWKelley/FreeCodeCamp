
function translatePigLatin(str) {
  var aeiou = ['a', 'e', 'i', 'o', 'u'];
  var pLatin = str.split('');
  if (aeiou.includes(str[0])){
    return str += 'way';
  }
  else {
    for (var i = 0; i<str.length; i++){
      if (!aeiou.includes(str[i])){
        pLatin.push(pLatin.shift());
      } 
      else {
        pLatin.push('ay');
        return pLatin.join('');
      }
    
    }
  
  }
  
}

translatePigLatin("consonant");
