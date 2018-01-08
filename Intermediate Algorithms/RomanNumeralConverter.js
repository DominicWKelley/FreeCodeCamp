
function convertToRoman(num) {
  var roman = '',
      romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
      number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (var i=0; i<number.length; i++){
    while(num>=number[i]){
      roman = roman + romanNumeral[i];
      num = num - number[i];
    }
  }
  return roman;
  
 }
 
 convertToRoman(36);
 