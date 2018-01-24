
function spinalCase(str) {
  var retr = str.replace(/\s/g, '-').toLowerCase();
  return retr;
}

spinalCase('This Is Spinal Tap');
