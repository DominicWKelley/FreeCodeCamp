
function addTogether() {
  if (arguments.length > 1) {
    if (!Number.isInteger(arguments[0]) ||   !Number.isInteger(arguments[1])) {
      return undefined;
    } else {
      return arguments[0] + arguments[1];
    }  
   } else {
     if(Number.isInteger(arguments[0])) {
       var a = arguments[0];
     } else {
       return undefined;
     }     
     return function(x) {
        if (Number.isInteger(x)) {
          return a + x;
        } else {
          return undefined;
        }
      };
   }
}

addTogether(2)(3);
