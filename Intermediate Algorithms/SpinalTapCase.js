
function spinalCase(str) {
  var retr = str.replace(/[\s_]/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  return retr;
}

spinalCase('This Is Spinal Tap');
