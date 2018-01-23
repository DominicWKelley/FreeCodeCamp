
function convertHTML(str) {
  var retr = str.split('');
  for (var i = 0; i < retr.length; i++) {
    if (retr[i] === '&') { 
        retr[i] = '&amp;';
    } else if (retr[i] === '<') {
        retr[i] = '&lt;';
    } else if (retr[i] === '>') {
        retr[i] = '&gt;';
    } else if (retr[i] === '"') {
        retr[i] = '&quot;';
    } else if (retr[i] === '\'') {
        retr[i] = '&apos;';
    }
  }
  retr = retr.join('');
  return retr;
}

convertHTML("Shindler's List");
