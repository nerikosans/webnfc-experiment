(this["webpackJsonpwebnfc-exp"]=this["webpackJsonpwebnfc-exp"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),c=t.n(r),i=(t(9),t(10),t(3)),l=function(){var e=a.useState(""),n=Object(i.a)(e,2),t=n[0],o=n[1],r=a.useCallback((function(){if("NDEFReader"in window){var e=new NDEFReader;e.scan().then((function(){o("Scan started successfully."),e.onerror=function(){o("Cannot read data from the NFC tag. Try another one?")},e.onreading=function(e){o("NDEF message read.")}})).catch((function(e){o("Error! Scan failed to start: ".concat(e,"."))}))}else o("No NDEFReader")}),[]);return a.createElement("div",null,"Main nngx",a.createElement("p",null,"data: ",t),a.createElement("button",{onClick:r},"Read"))};var s=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.af5772c7.chunk.js.map