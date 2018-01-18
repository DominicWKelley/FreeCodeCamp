
function fearNotLetter(str) {
  var missing,
      charCode = [];
  
  for (var i = 0; i < str.length; i++) {
    charCode.push(str.charCodeAt(i));
  }
  
  for (var j = 0; j < charCode.length - 1; j++) {
    if ((charCode[j] + 1) != charCode[j+1]) {
      missing = String.fromCharCode(charCode[j] + 1);
    }
  }
  
  return missing;
}

fearNotLetter("abce");
