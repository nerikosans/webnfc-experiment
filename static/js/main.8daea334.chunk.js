(this["webpackJsonpwebnfc-exp"]=this["webpackJsonpwebnfc-exp"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(4),o=t.n(c),i=(t(13),t(14),t(2)),s=t.n(i),u=t(5),l=t(6),d=t(7),p=function(){var e=a.useState(""),n=Object(d.a)(e,2),t=n[0],r=n[1],c=function(e){r((function(n){return"".concat(n,"\n").concat(e)}))};function o(){return(o=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NDEFReader"in window)){e.next=13;break}return n=new NDEFReader,e.prev=2,e.next=5,n.scan();case 5:n.onreading=function(e){var n,t=new TextDecoder,a=Object(u.a)(e.message.records);try{for(a.s();!(n=a.n()).done;){var r=n.value;c("Record type:  "+r.recordType),c("MIME type:    "+r.mediaType),c("=== data ===\n"+t.decode(r.data))}}catch(o){a.e(o)}finally{a.f()}},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(e.t0);case 11:e.next=14;break;case 13:c("Web NFC is not supported.");case 14:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return a.createElement("div",null,"Main nnj",a.createElement("p",null,"secure: ",window.isSecureContext),a.createElement("p",null,"data: ",t),a.createElement("button",{onClick:function(){return o.apply(this,arguments)}},"Read"))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8daea334.chunk.js.map