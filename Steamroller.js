
function steamrollArray(arr) {
  var strg = arr.toString()
  .replace(',,', ',')
  .split(',')
  .map(function(val) {
      if (val == '[object Object]') {
        return {};
      } else if (isNaN(val)) {
        return val;
      } else {
        return parseInt(val);
      }
  });
  return strg;
}

steamrollArray([1, [2], [3, [[4]]]]);
