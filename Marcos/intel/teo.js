/* userscript-wrapper - v1.2.14 - 19/01/2022 */
!function(){"use strict";var e="functioneval(){[nativecode]}"===(null===eval||void 0===eval?void 0:eval.toString().replace(/\s+/g,"")),t=eval,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,a=Object.getPrototypeOf,s=Function.prototype.apply,u="undefined"!=typeof Reflect?Reflect.apply:function(e,t,n){return s.call(e,t,n)},c=XMLHttpRequest,l=XMLHttpRequest.prototype.open,f=XMLHttpRequest.prototype.send;if("function"==typeof WebSocket)var d=WebSocket,p=d.prototype,v=p.send,h=r(p,"onmessage"),y=r(p,"onopen"),g=r(p,"onclose"),m=r(p,"readyState"),b=p.OPEN,x=p.CONNECTING;var w,k={originalWebSocket:d,originalSend:v,originalOnMessage:h,originalOnOpen:y,originalOnClose:g,originalReadyState:m,originalWebSocketStateOpen:b,originalWebSocketStateConnecting:x},S=JSON.parse,_=JSON.stringify,O=window,T=O.document,G=function(){},E=function(e,t){if(!e)return G;var n=e[t];return function(){if(n)return u(n,e,arguments)}},C=O.console,M=E(C,"log"),A=E(C,"warn"),I=E(C,"error"),R=String.prototype.charCodeAt,W=Array.prototype.reduce,L=O.escape,P=O.encodeURIComponent,j=O.decodeURIComponent,U=E(O,"open"),F=E(O,"addEventListener"),N=E(O,"removeEventListener"),V=O.requestIdleCallback,D=O.cancelIdleCallback,$=T.appendChild,H=T.removeChild,q=function(e,t){u($,e,[t])},z=E(T,"createElement"),B=function(e,t){u(H,e,[t])},X="undefined"!=typeof Document?(w=r(Document.prototype,"readyState").get,function(){return u(w,T,[])}):function(){},J=T.documentMode;function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}var Y,Z="/adguard-ajax-api/api",ee="/adguard-ws-api/api",te="local.adguard.org",ne=0,re={},oe=0,ie=0,ae=function(){return T.location.protocol+"//local.adguard.org"},se=function(){return T.location.protocol+"//"+function(){var e=T.location;return e.hostname+("80"==e.port||""==e.port?"":":"+e.port)}()},ue=function(e){if(null==e)return"";var t=T.location;if(function(){try{var e=new URL("b","http://a");return e.pathname="c%20d","http://a/c%20d"===e.href&&e.searchParams}catch(e){return!1}}())return new URL(e,t.href).href;if(e.startsWith("http"))return e;if(e.startsWith("/"))return se()+e;var n=t.href;if(n.endsWith("/"))return n+e;var r=t.pathname.split("/");return r.pop(),se()+r.join("/")+"/"+e},ce=M,le="[AdGuard Userscript Module] ",fe=function(e,t){var n=ae()+Z;n+="?",n+=xe(e);var r=new c;r.open=l,r.send=f,r.open("GET",n,!0),r.onload=function(e){if(4==r.readyState){200!=r.status&&ce("Error while sending sendGetRequestAsync. Status:"+r.statusText);var n=de(r.responseText);t(n,r.status)}},r.onerror=function(e){ce("Error while sending sendGetRequestAsync. Status:"+r.statusText),t(null,r.status)},r.send()},de=function(e){var t=null;try{t=S(e)}catch(e){ce("Error while parsing responseText: "+e)}return t},pe=function e(t){if(t.readyState===t.OPEN){var n=ge();n.type="ping";var r={type:"action",payload:n};k.originalSend.call(t,_(r))}else if(t.readyState===t.CLOSED)return;setTimeout((function(){return e(t)}),1e4)},ve=function(){return new Promise((function(e,t){var r="https:"==document.location.protocol?"wss://":"ws://",o=function(e){var t=new k.originalWebSocket(e);return n(t,"onmessage",k.originalOnMessage),n(t,"onopen",k.originalOnOpen),n(t,"onclose",k.originalOnClose),n(t,"readyState",k.originalReadyState),t}("".concat(r).concat(te).concat(ee));return o.onmessage=function(e){var t=S(e.data);return t.payload.error?(ce("Error received: "+t.payload.error),void(re[t.payload.actionId]&&(re[t.payload.actionId].reject(t.payload.error),delete re[t.payload.actionId]))):(re[t.payload.actionId]&&(re[t.payload.actionId].resolve(t),delete re[t.payload.actionId]),!1)},o.onopen=function(){e(o),setTimeout((function(){return pe(o)}),10)},o.onclose=function(e){t(o),Object.keys(re).forEach((function(t){return re[t].reject(e)})),re={},he(),ce("WebSocket connection is closed: "+e.code+" : "+e.reason)},o}))};function he(){ie>20||(setTimeout(ve,oe),oe+=500,ie+=1)}function ye(e,t){return function(){try{e.apply(this,arguments)}catch(e){ce(t+": "+e)}}}var ge=function(){return{actionId:++ne,token:"2dcd3bce-b73d-48b4-867d-d58bd9c896ea"}},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return t=ye(t,"Error while executing callback"),"function"==typeof k.originalWebSocket?be(e).then((function(e){return t(Ge(e),null)})).catch((function(n){return fe(e,t)})):fe(e,t)},be=function(e,t){return(void 0!==Y?Promise.resolve(Y):ve().then((function(e){return Y=e,e}))).then((function(t){var n=ge();Object.keys(e).forEach((function(t){n[t]=e[t]}));var r,o=_({payload:n,type:"action"});return k.originalSend.call(t,o),re[n.actionId]=((r={promise:null,resolve:null,reject:null}).promise=new Promise((function(e,t){r.resolve=e,r.reject=t})),r),re[n.actionId].promise}))},xe=function(e,t){var n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];n&&(n+="&"),n+=r,n+="=",t&&t[r]?n+=o:n+=P(o)}return n&&(n+="&"),n+="sn="+function(e){for(var t=function(e,t){return t>>>e|t<<32-e},n=function(e){return t(2,e)^t(13,e)^t(22,e)},r=function(e){return t(6,e)^t(11,e)^t(25,e)},o=function(e){return t(7,e)^t(18,e)^e>>>3},i=function(e,t,n){return e&t^~e&n},a=function(e,t,n){return e&t^e&n^t&n},s=function(e){for(var t="",n=7;n>=0;n--)t+=(e>>>4*n&15).toString(16);return t},u=function(e,t){return R.call(e,t)},c=function(e){return"8c58585167f54a43bf1618a2de1e2f"+e+"cac0a4e71934"},l=function(e,t,n){e[c(t)]=n},f=function(e,t){return e[c(t)]},d=["type","unique_name","variable_key","variable_value","url"],p="",v=0;v<d.length;v++){var h=e[d[v]];void 0!==h&&(p+=h)}return p=function(e){var c={};l(c,0,1116352408),l(c,1,1899447441),l(c,2,3049323471),l(c,3,3921009573),l(c,4,961987163),l(c,5,1508970993),l(c,6,2453635748),l(c,7,2870763221),l(c,8,3624381080),l(c,9,310598401),l(c,10,607225278),l(c,11,1426881987),l(c,12,1925078388),l(c,13,2162078206),l(c,14,2614888103),l(c,15,3248222580),l(c,16,3835390401),l(c,17,4022224774),l(c,18,264347078),l(c,19,604807628),l(c,20,770255983),l(c,21,1249150122),l(c,22,1555081692),l(c,23,1996064986),l(c,24,2554220882),l(c,25,2821834349),l(c,26,2952996808),l(c,27,3210313671),l(c,28,3336571891),l(c,29,3584528711),l(c,30,113926993),l(c,31,338241895),l(c,32,666307205),l(c,33,773529912),l(c,34,1294757372),l(c,35,1396182291),l(c,36,1695183700),l(c,37,1986661051),l(c,38,2177026350),l(c,39,2456956037),l(c,40,2730485921),l(c,41,2820302411),l(c,42,3259730800),l(c,43,3345764771),l(c,44,3516065817),l(c,45,3600352804),l(c,46,4094571909),l(c,47,275423344),l(c,48,430227734),l(c,49,506948616),l(c,50,659060556),l(c,51,883997877),l(c,52,958139571),l(c,53,1322822218),l(c,54,1537002063),l(c,55,1747873779),l(c,56,1955562222),l(c,57,2024104815),l(c,58,2227730452),l(c,59,2361852424),l(c,60,2428436474),l(c,61,2756734187),l(c,62,3204031479),l(c,63,3329325298);var d={};l(d,0,1779033703),l(d,1,3144134277),l(d,2,1013904242),l(d,3,2773480762),l(d,4,1359893119),l(d,5,2600822924),l(d,6,528734635),l(d,7,1541459225);for(var p=function(e){for(var t=0;t<=e+1;t++)if(t>=e)return t;return t}(((e+=String.fromCharCode(128)).length/4+2)/16),v={},h=0;h<p;h++){l(v,h,{});for(var y=0;y<16;y++){var g=u(e,64*h+4*y)<<24|u(e,64*h+4*y+1)<<16|u(e,64*h+4*y+2)<<8|u(e,64*h+4*y+3);l(f(v,h),y,g)}}l(f(v,p-1),14,8*(e.length-1)/Math.pow(2,32)),l(f(v,p-1),14,Math.floor(f(f(v,p-1),14))),l(f(v,p-1),15,8*(e.length-1)&4294967295);var m,b,x,w,k,S,_,O,T,G={};for(h=0;h<p;h++){for(var E=0;E<16;E++){var C=f(f(v,h),E);l(G,E,C)}for(E=16;E<64;E++){var M=4294967295&(T=f(G,E-2),(t(17,T)^t(19,T)^T>>>10)+f(G,E-7)+o(f(G,E-15))+f(G,E-16));l(G,E,M)}for(m=f(d,0),b=f(d,1),x=f(d,2),w=f(d,3),k=f(d,4),S=f(d,5),_=f(d,6),O=f(d,7),E=0;E<64;E++){var A=O+r(k)+i(k,S,_)+f(c,E)+f(G,E),I=n(m)+a(m,b,x);O=_,_=S,S=k,k=w+A&4294967295,w=x,x=b,b=m,m=A+I&4294967295}l(d,0,f(d,0)+m&4294967295),l(d,1,f(d,1)+b&4294967295),l(d,2,f(d,2)+x&4294967295),l(d,3,f(d,3)+w&4294967295),l(d,4,f(d,4)+k&4294967295),l(d,5,f(d,5)+S&4294967295),l(d,6,f(d,6)+_&4294967295),l(d,7,f(d,7)+O&4294967295)}var R="";return R+=s(f(d,0)),R+=s(f(d,1)),R+=s(f(d,2)),R+=s(f(d,3)),R+=s(f(d,4)),R+=s(f(d,5)),(R+=s(f(d,6)))+s(f(d,7))}(p=c(p)),p}(e),n+="&ust=2dcd3bce-b73d-48b4-867d-d58bd9c896ea"},we=function(e){if("object"==Q(e)){var t="";for(var n in e)t+=P(n)+":"+P(e[n])+",";return t.slice(0,-1)}return"string"==typeof e?P(e):null},ke=function(e,t){return{readyState:e.readyState,response:e.response,responseHeaders:e.getAllResponseHeaders(),responseText:e.responseText,responseXML:!!e.responseXML,status:e.status,statusText:e.statusText,context:t,finalUrl:e.responseURL}},Se="[I;",_e="[LString;",Oe="[B;",Te="[O;",Ge=function(e){var t=e.payload&&e.payload.data?e.payload.data:e;if("string"==typeof t)try{t=S(t)}catch(e){t={error:e.toString()}}return t};var Ee,Ce=(Ee={createHTML:function(e){return e},createScript:function(e){return e},createScriptURL:function(e){return e}},O.trustedTypes&&O.trustedTypes.createPolicy?O.trustedTypes.createPolicy("AGPolicy",Ee):Ee),Me={},Ae=O,Ie=function(e,t,o){var i=r(e,o);i&&i.configurable&&(i.value=e[o],n(t,o,i))},Re=[];function We(e){if(e){var t=function(){var t=Re.indexOf(this),n=-1===t?this:Ae,r=u(e,n,arguments);return-1!==t&&r===Ae?Re[t]:r};return Ie(e,t,"name"),Ie(e,t,"length"),t}}var Le=[];function Pe(e,t){return function(){var n=Re.indexOf(this);if(-1!==n){var r=Le[n][t];return void 0===r?null:r}return u(e,this,[])}}function je(e,t){return function(n){var r=Re.indexOf(this);if(-1!==r){var o=Le[r][t];"function"==typeof o&&this.removeEventListener(t,o),"function"!=typeof n?Le[r][t]=null:(this.addEventListener(t,n),Le[r][t]=n)}else u(e,this,[n])}}var Ue=/^on/;function Fe(e,t){return function(e){return e.hasOwnProperty("writable")}(e)?function(e,t){var n=e.value;switch(Q(n)){case"function":e.enumerable&&(e.value=We(n));break;case"object":if(n===Ae)return null}return e}(e):function(e,t){if("string"==typeof t&&Ue.test(t)){var n=t.slice(2);e.get=Pe(e.get,n),e.set=je(e.set,n)}else e.get=We(e.get),e.set=We(e.set);return e}(e,t)}var Ne,Ve=!1,De=[],$e=[[],[],[],[],[],[],[],[],[],[],[],[]],He=[],qe=function(e){var t=0;switch(e.configurable&&(t+=1),e.enumerable&&(t+=2),e.writable){case void 0:t+=8;break;case!0:t+=4}return t},ze=function(e){var t={configurable:1==(1&(e|=0)),enumerable:2==(2&e)};return 8&e||(t.writable=4==(4&e)),t};var Be=["frames","self","window","parent","top"],Xe=function(){Ve||function(){for(var e=Ae,t=o(Ae),s={webkitStorageInfo:!0,webkitIndexedDB:!0,mozHidden:!0,mozVisibilityState:!0,webkitURL:!0},u=t.length;0!=u--;){var c=t[u];if(!0!==s[c]){var l=r(Ae,c),f=qe(l);if(8&f&&Ue.test(c))De.push(c);else{if(2&f){if(l.value===Ae)continue;if("function"==typeof l.value){He.push(c);continue}}$e[f].push(c)}}}var d=[];for(e=a(e);e!==Object.prototype;)d.push(e),e=a(e);for(u=d.length,e={};0!=u--;){e=Object.create(e);for(var p=d[u],v=o(p),h=v.length;0!=h--;){var y=v[h],g=r(p,y);null!==(g=Fe(g,y))&&n(e,y,g)}if(i)for(var m=i(p),b=m.length;0!=b--;){var x=m[b],w=r(p,x);null!==(w=Fe(w,x))&&n(e,x,w)}}Ne=e,Ve=!0}(),Le.push(Object.create(null));var e=Object.create(Ne);Re.push(e);for(var t=0;t<8;t++)for(var s=ze(t),u=$e[t].length;0!=u--;){var c=$e[t][u],l=Ae[c];s.value=l,n(e,c,s)}if(!(J<11))for(;t<12;t++)if(!(J<11))for(var f=ze(t),d=$e[t].length;0!=d--;){var p=$e[t][d],v=Ae.__lookupGetter__(p),h=Ae.__lookupSetter__(p);f.get=We(v),f.set=We(h),n(e,p,f)}t=He.length;for(var y=ze(7);0!=t--;){var g=He[t],m=Ae[g];y.value=We(m),n(e,g,y)}if(!(J<11))for(t=De.length,y=ze(11);0!=t--;){var b=De[t],x=b.slice(2),w=Ae.__lookupGetter__(b),k=Ae.__lookupSetter__(b);y.get=Pe(w,x),y.set=je(k,x),n(e,b,y)}return Be.forEach((function(t){if(!(t in e)){var o=r(Ae,t);o.value=e,n(e,t,o)}})),e},Je=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userscriptInfo=t,this.log=ce,this.settings=t.settings,this.info=this.settings.scriptInfo,this.userscriptName=this.info.script.name,this.$resources=this.info.script.resources,this.$content=t.content;var n,r,o=this;this.GM={info:o.info,deleteValue:function(e){return o.deleteValue(e),Promise.resolve(void 0)},getResourceUrl:function(e){return Promise.resolve(o.getResourceURL(e))},getValue:function(e,t){return Promise.resolve(o.getValue(e,t))},listValues:function(){return Promise.resolve(o.listValues())},notification:function(e,t,n,r){o.notification(e,t,n,r)},openInTab:function(e,t){o.openInTab(e)},setClipboard:function(e){o.setClipboard(e)},setValue:function(e,t){return o.setValue(e,t),Promise.resolve(void 0)},xmlHttpRequest:function(e){var t=e;o.xmlhttpRequest(t)}},this.GM.info.scriptHandler="AdGuard",this.GM.info.scriptMetaStr=o.info.scriptMetaStr,this.GM.info.version="1.2.7",-1!==this.settings.grants.indexOf("none")?(this.gmGrants=[],this.hasUnsafeWindow=!1,this.sandbox=O):(this.gmGrants=this.settings.grants.filter((function(e){return 0===e.indexOf("GM_")&&"GM_info"!==e})),this.hasUnsafeWindow=-1!==this.settings.grants.indexOf("unsafeWindow"),this.sandbox=(n=t.settings.scriptInfo.script.namespace,void 0===(r=Me[n])&&(r=Me[n]=Xe()),r))}var t,n,r;return t=e,n=[{key:"verifyFunctionAccess",value:function(e){return!!function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}(this.userscriptInfo.settings.grants,e)||(this.log("Access to function "+e+" is not allowed."),!1)}},{key:"verifyStorageAccess",value:function(e){for(var t=!1,n=this.userscriptInfo.settings.grants,r=n.length;r-- >0;){var o=n[r];if(0===o.indexOf("property:",0)&&(t=!0,-1!==o.indexOf("property:"+e,0)))return!0}return!t||(this.log("Access to property "+e+" is not allowed."),!1)}},{key:"getValue",value:function(e,t){if(!this.verifyFunctionAccess("GM_getValue")&&!this.verifyFunctionAccess("GM.getValue")||!this.verifyStorageAccess(e))return null;var n=function(e){if(void 0===e)return e;if(""!=e&&null!=e){try{if(0==e.indexOf(Se))return parseInt(e.substring(Se.length));if(0==e.indexOf(Oe))return"true"===e.substring(Oe.length);if(0==e.indexOf(_e))return e.substring(_e.length);if(0==e.indexOf(Te))return JSON.parse(e.substring(Te.length))}catch(e){ce("Cannot convert value from GM property: "+e)}return e}}(this.userscriptInfo.data[e]);return void 0===n?t:n}},{key:"setValue",value:function(e,t){if(!this.verifyFunctionAccess("GM_setValue")&&!this.verifyFunctionAccess("GM.setValue")||!this.verifyStorageAccess(e))return null;if(void 0!==t){var n=function(e){var t;try{return"number"==typeof(t=e)&&t%1==0?Se+e:function(e){return"boolean"==typeof e}(e)?Oe+e:function(e){return"object"==Q(e)}(e)?Te+JSON.stringify(e):_e+e}catch(e){return void ce("Cannot convert value to GM property: "+e)}}(t),r=this.userscriptInfo.data[e];if(void 0===r||r!=n){var o={type:"gm-set-value",unique_name:this.userscriptName,variable_key:e,variable_value:n,synchronous:!1};return this.userscriptInfo.data[e]=n,me(o),null}}else this.log("Trying to set "+e+" property to undefined")}},{key:"deleteValue",value:function(e){if(!this.verifyFunctionAccess("GM_deleteValue")&&!this.verifyFunctionAccess("GM.deleteValue")||!this.verifyStorageAccess(e))return null;var t={type:"gm-delete-value",unique_name:this.userscriptName,variable_key:e,synchronous:!1};return delete this.userscriptInfo.data[e],me(t),null}},{key:"listValues",value:function(){if(!this.verifyFunctionAccess("GM_listValues")&&!this.verifyFunctionAccess("GM.listValues"))return null;var e=[];for(var t in this.userscriptInfo.data)e.push(t);return e}},{key:"getResource",value:function(e){for(var t=0,n=this.$resources.length;t<n;t++)if(e===this.$resources[t].name)return this.$resources[t];throw"Resource "+e+" not found"}},{key:"getResourceURL",value:function(e){var t=this.getResource(e),n=t.type;return-1==n.indexOf(";")&&(n+=";base64"),"data:".concat(n||"application;base64",",").concat(t.content)}},{key:"getResourceText",value:function(e){var t=this.getResource(e);return j(L(atob(t.content)))}},{key:"xmlhttpRequest",value:function(e){var t=ae(),n=e.method||"GET",r=ue(e.url),o={type:"gm-xml-http-request",unique_name:this.userscriptName,url:r||"",data:e.data||"",headers:we(e.headers||""),method:e.method||"",overridemimetype:e.overrideMimeType||"",user:e.user||"",password:e.password||""},i=xe(o,{headers:!0});"POST"!=n&&"PUT"!=n&&"PATCH"!=n&&"DELETE"!=n?(t+=Z,t+="?",t+=i):t+=Z;var a=!e.synchronous||!e.synchronous,s=new c;return s.open=l,s.send=f,s.open(n,t,a),s.onreadystatechange=function(){var t=ke(s,e);e.onreadystatechange&&e.onreadystatechange(t),4==s.readyState&&(e.onload&&s.status>=200&&s.status<300&&e.onload(t),e.onerror&&(s.status<200||s.status>=300)&&e.onerror(t))},a?(s.timeout=void 0!==e.timeout?e.timeout:15e3,s.ontimeout=function(){e.ontimeout&&e.ontimeout(ke(s,e))},"GET"==n?s.send():s.send(i),{abort:function(){return s.abort()}}):("GET"==n?s.send():s.send(i),{abort:function(){return s.abort()},finalUrl:s.responseURL,readyState:s.readyState,response:s.response,responseHeaders:s.getAllResponseHeaders(),responseText:s.responseText,responseXML:!!s.responseXML,status:s.status,statusText:s.statusText})}},{key:"openInTab",value:function(e){var t=z("a");if(t.href=e,"data:"===t.protocol){var n=U("","_blank"),r=n.document,o='<body style="margin:0;overflow:hidden"><iframe width="100%" height="100%" style="border:none" src="'.concat(e,'"></iframe></body>');return r.open(),r.write(o),r.close(),n}return U(e,"_blank")}},{key:"addStyle",value:function(e){var t=this.userscriptInfo.settings,n=z("style");n.setAttribute("nonce",t.nonce),n.setAttribute("data-source",t.scriptInfo.script.name),n.type="text/css",q(n,document.createTextNode(e));var r=T.body||T.documentElement;q(r,n)}},{key:"setClipboard",value:function(e){var t=z("textarea");t.setAttribute("readonly",""),t.value=e,t.style.fontSize="12pt",t.style.position="absolute",t.style.left="-9999px";var n=document.body||document.documentElement;q(n,t),t.select(),t.setSelectionRange(0,e.length);try{document.execCommand("copy")}catch(e){}finally{B(n,t),O.getSelection().removeAllRanges()}}},{key:"notification",value:function(e,t,n,r){if(!this.verifyFunctionAccess("GM.notification"))return null;var o=document.createElement("div");o.style.cssText="position: absolute; width: 500px; max-width: 80vw; min-height: 200px; height: auto;background: #efefef; box-shadow: 0px 0px 32px -17px black; text-align: center; top: 50%; left: 50%;transform: translate(-50%, -50%); padding: 30px; box-sizing: border-box; z-index: 9999;";var i=document.createElement("div");i.innerText=t||"AdGuard",i.style.cssText="font-family: sans-serif; color: black; font-weight: bold;font-size: 20px; margin-bottom: 10px;";var a=document.createElement("div");a.innerText=e,a.style.cssText="font-family: sans-serif; color: black; font-weight: normal; font-size: 15px;text-align: left; padding-left: 70px; min-height: 50px; display: flex; align-items: center;";var s=document.createElement("img");s.src=n||"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3 25.9'%3E%3Cpath fill='%2368bc71' d='M12.7 0C8.7 0 3.9.9 0 3c0 4.4-.1 15.4 12.7 23C25.4 18.4 25.3 7.4 25.3 3 21.4.9 16.6 0 12.7 0z'/%3E%3Cpath fill='%2367b279' d='M12.6 25.9C-.1 18.4 0 7.4 0 3c3.9-2 8.7-3 12.6-3v25.9z'/%3E%3Cpath fill='%23fff' d='M12.2 17.3L19.8 7a.99.99 0 0 0-1.3.1l-6.4 6.6-2.4-2.9c-1.1-1.3-2.7-.3-3.1 0l5.6 6.5'/%3E%3C/svg%3E",s.style.cssText="width: auto; height: auto; max-width: 50px; max-height: 50px;position: absolute; left: 30px;";var u=function(){document.body.removeChild(o),document.body.removeChild(l)},c=document.createElement("button");c.type="button",c.innerText="Ok",c.style.cssText="font-family: sans-serif; color: black; font-weight: normal; border: 1px solid #ccc;font-size: 14px; padding: 5px 35px; cursor: pointer; margin-top: 25px;",c.addEventListener("click",(function(){u(),r&&r instanceof Function&&r()}));var l=document.createElement("div");l.style.cssText="position: absolute; width: 100%; height: 100%; top: 0; left: 0;background: rgba(0,0,0,.5); z-index: 9998;",l.addEventListener("click",u),o.appendChild(i),o.appendChild(s),o.appendChild(a),o.appendChild(c),document.body.appendChild(l),document.body.appendChild(o)}},{key:"registerMenuCommand",value:function(t,n,r){e.hasWarned||(e.hasWarned=!0,A("".concat(le,"GM.registerMenuCommand is not supported")))}},{key:"createObjectIn",value:function(e,t){if(t&&"string"==typeof t.defineAs){var n={};return e[t.defineAs]=n,n}}},{key:"exportFunction",value:function(e,t,n){return n&&"string"==typeof n.defineAs&&(t[n.defineAs]=e),e}},{key:"cloneInto",value:function(e){return e}},{key:"addRule",value:function(e,t){me({type:"add",rule:e},t)}},{key:"removeRule",value:function(e,t){me({type:"remove",rule:e},t)}},{key:"isFiltered",value:function(e){if(e){var t={type:"is-filtered",url:T.location.href};me(t,(function(t){t&&(t&&!t.error?e(t.result):e(!1))}))}}},{key:"changeFilteringState",value:function(e,t){var n={type:"change-filtering-state",state:e,domain:T.location.hostname};me(n,t)}},{key:"temporaryDontBlock",value:function(e,t){e||(e=30);var n=T.location.hostname;me({type:"notblock",timeout:e,rule:"@@||"+n+"$document,important"},t)}},{key:"sendAbuse",value:function(e){var t={type:"send-abuse",url:T.location.href,referrer:T.referrer};me(t,e)}},{key:"$bind",value:function(e){if(!e)return null;var t=this;return function(){return u(e,t,arguments)}}},{key:"reduceWithGmGrants",value:function(e){return W.call(this.gmGrants,e,"")}},{key:"logError",value:function(e){I("".concat(le,"Thrown from ").concat(this.userscriptName,":")),I(e)}},{key:"cleanUp",value:function(){delete this.$content,delete this.userscriptInfo.content}}],n&&K(t.prototype,n),r&&K(t,r),e}();Je.hasWarned=!1,Je.prototype.unsafeWindow=O,Je.prototype.functionCtor=Function;var Ke=O.MutationObserver||O.WebKitMutationObserver;var Qe=J<11;var Ye=V?function(e){return u(V,O,[e])}:function(e){return setTimeout(e,50)},Ze=V?function(e){return u(D,O,[e])}:function(e){return clearTimeout(e)};var et="interactive",tt="complete",nt="DOMNodeInserted",rt="readystatechange",ot=O,it=T,at="__adg_run_flag";function st(e,t){J<9?A(le+"Unsupported browser"):(t.filter((function(e){var t,n,r,o,i=at+e.settings.scriptInfo.script.name;return ot[i]?(A(le+"Page tries to run userscript second time"),!1):(t=e.settings,n=ot.self!=ot.top,r=ot.innerWidth||it.documentElement.clientWidth||ot.outerWidth,o=ot.innerHeight||it.documentElement.clientHeight||ot.outerHeight,!(n&&(r*o<1e5||t.scriptInfo.script.options.noframes)))})).map((function(e){return new Je(e)})).forEach((function(t){switch(n(ot,at+t.userscriptName,{value:!0,configurable:!0}),t.info.script.options["run-at"]){case"document-body":r=e,o=t,a=!1,s=function(){a||(a=!0,N(rt,u),i?i.disconnect():N(nt,c),r(o))},u=function(){var e=X();e!==et&&e!==tt||s()},c=function(){document.body&&s()},(l=X())!==et&&l!==tt?(Ke?(i=new Ke((function(e,t){c()}))).observe(T.documentElement,{childList:!0}):F(nt,c),F(rt,u,!0)):s();break;case"document-idle":!function(e,t){var n,r=!1,o=function(){r||(r=!0,Ze(n),N(rt,a),e(t))},i=function(){n=Ye(o)},a=function(){var e=X();e===tt?o():e===et&&i()},s=X();s===tt?o():s===et?i():F(rt,a,!0)}(e,t);break;case"document-start":!function(e,t){e(t)}(e,t);break;default:!function(e,t){var n=!1,r=function(){n||(n=!0,N(rt,o),e(t))},o=function(){var e=X();(!Qe&&e===et||e===tt)&&r()},i=X();!Qe&&i===et||i===tt?r():F(rt,o,!0)}(e,t)}var r,o,i,a,s,u,c,l})),function(){if("complete"===X()){var e=z("style");e.textContent="*{opacity:.99}";var t=T.documentElement;q(t,e),B(t,e)}}(),function(){var e=it.currentScript;if(!e){var t=it.getElementsByTagName("script");e=t[t.length-1]}var n=e.parentNode;n&&n.removeChild(e)}(),t=null)}function ut(n){try{var r="with(a.sandbox){(function(userscript){'use strict';"+"userscript.call(a.sandbox".concat(n.reduceWithGmGrants((function(e,t){return e+",a.$bind(a.".concat(t.substr(3),")")})))+",a.GM,a.settings.scriptInfo"+"".concat(n.hasUnsafeWindow?",a.unsafeWindow":"")+",a.createObjectIn,a.exportFunction,a.cloneInto,a.settings,a.settings,a.addRule,a.removeRule,a.isFiltered,a.changeFilteringState,a.temporaryDontBlock,a.sendAbuse);"+"})(function(".concat(n.reduceWithGmGrants((function(e,t){return e+"".concat(t,",")})))+"GM,GM_info,"+"".concat(n.hasUnsafeWindow?"unsafeWindow,":"")+"createObjectIn,exportFunction,cloneInto,adguardSettings,AdguardSettings,ADG_addRule,ADG_removeRule,ADG_isFiltered,ADG_changeFilteringState,ADG_temporaryDontBlock,ADG_sendAbuse,a){"+"".concat("\r\n"+n.$content+"\r\n")+"})}",o="//# sourceURL=".concat(encodeURIComponent(n.userscriptName),".user.js");if(e){var i=Ce.createScript("(function anonymous(a){"+r+"})"+o);t(i)(n)}else new n.functionCtor("a",r+o)(n)}catch(e){n.logError(e)}finally{n.cleanUp()}}window.run=st,window.executor=ut,st(ut,[{"settings":{"scriptInfo":{"script":{"options":{"run-at":"document-start","noframes":false},"name":"AdGuard Extra","decription":"AdGuard Extra is designed to solve complicated cases when regular ad blocking rules aren't enough.","namespace":"adguard","homepage":"https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js","includes":[],"excludes":["*://mil.ru/*","*wikipedia.org*","*icloud.com*","*hangouts.google.com*","*www.facebook.com/plugins/*","*www.facebook.com/v*/plugins*","*disqus.com/embed/comments*","*vk.com/widget*","*twitter.com/intent/*","*www.youtube.com/embed/*","*player.vimeo.com*","*coub.com/embed*","*staticxx.facebook.com/connect/xd_arbiter/*","*vk.com/q_frame*","*tpc.googlesyndication.com*","*syndication.twitter.com*","*platform.twitter.com*","*tutosdeath.blogspot.com*","*notifications.google.com*","*google.com/recaptcha/*","*bizmania.ru/*"],"matches":["*://*/*"],"lastUpdated":"2022-09-13_23-14-56","version":"1.0.426","resources":[]},"scriptWillUpdate":true,"scriptMetaStr":"","version":"2.8.1.1147 release","scriptSource":"// ==UserScript==\n// @name AdGuard Extra \n// @name:be AdGuard Extra \n/...","scriptUpdateURL":"https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js","isIncognito":false,"isPrivate":false,"scriptHandler":"AdGuard for Mac"},"grants":["unsafeWindow"],"feedbackUrl":"http://api.adguard.org","locale":"en-us","appVersion":"2.8.1.1147 release","nonce":"05d0406613d8495eaedaf060640"},"data":{},"content":"// ==UserScript==\n// @name AdGuard Extra \n// @name:be AdGuard Extra \n// @name:cs AdGuard Extra \n// @name:da AdGuard Extra \n// @name:de AdGuard Extra \n// @name:es AdGuard Extra \n// @name:fi AdGuard Extra \n// @name:fr AdGuard Extra \n// @name:he AdGuard Extra \n// @name:hr AdGuard Extra \n// @name:hu AdGuard Extra \n// @name:id AdGuard Extra \n// @name:it AdGuard Extra \n// @name:ja AdGuard Extra \n// @name:ko AdGuard Extra \n// @name:lt AdGuard Extra \n// @name:nl AdGuard Extra \n// @name:no AdGuard Extra \n// @name:pl AdGuard Extra \n// @name:pt-PT AdGuard Extra \n// @name:pt AdGuard Extra \n// @name:ro AdGuard Extra \n// @name:ru AdGuard Extra \n// @name:sk AdGuard Extra \n// @name:sl Uporabi AdGuard Extra \n// @name:sr AdGuard ekstra \n// @name:tr AdGuard Extra \n// @name:uk AdGuard Extra \n// @name:vi AdGuard Extra \n// @name:zh-TW AdGuard Extra \n// @name:zh AdGuard Extra \n// @namespace    adguard\n// @version      1.0.426\n// @description AdGuard Extra is designed to solve complicated cases when regular ad blocking rules aren't enough. \n// @description:be AdGuard Extra прызначаны для вырашэння складаных выпадкаў, калі звычайных правілаў блакавання рэкламы недастаткова. \n// @description:cs AdGuard Extra má za úkol řešit složité případy, když běžná pravidla pro blokování reklam nestačí. \n// @description:da AdGuard Extra er designet til at løse komplicerede tilfælde, hvor alm. adblockingregler ikke er nok. \n// @description:de AdGuard Extra wurde entwickelt, um komplexe Fälle zu lösen, wenn normalen Regeln zum Sperren von Werbung nicht ausreichen. \n// @description:es AdGuard Extra está diseñado para resolver casos complicados cuando las reglas regulares para bloqueo de anuncios no son suficientes. \n// @description:fi AdGuard Extra on suunniteltu ratkaisemaan monimutkaisia tapauksia kun tavalliset mainosten estosäännöt eivät riitä. \n// @description:fr AdGuard Extra est conçu pour résoudre les cas complexes lorsque les règles de blocage des publicités ne suffisent pas. \n// @description:he AdGuard Extra מתוכנן לפתור מקרים מורכבים בהם כללים רגילים של חסימת פרסומות אינם מספיקים. \n// @description:hr AdGuard Extra je dizajniran za rješavanje kompleksnih slučajeva kada opća pravila blokade oglasa nisu dovoljna. \n// @description:hu Az AdGuard Extra olyan bonyolultabb esetek megoldására szolgál, amikor a hagyományos hirdetésblokkolási szabályok nem elegendőek. \n// @description:id AdGuard Extra dirancang untuk menyelesaikan kasus rumit saat aturan pemblokiran iklan biasa tidak cukup. \n// @description:it AdGuard Extra è progettato per risolvere casi complicati in cui le normali regole di blocca-annunci non sono sufficienti. \n// @description:ja AdGuard Extraは、通常の広告ブロックルールが十分ではない複雑なケースを解決するために設計されています。 \n// @description:ko AdGuard Extra는 일반적인 광고 차단 규칙이 충분하지 않은 복잡한 문제를 해결하도록 설계되었습니다. \n// @description:lt AdGuard Extra yra skirtas išspręsti sudėtingesnius atvejus, kai nepakanka įprastų skelbimų blokavimo taisyklių. \n// @description:nl AdGuard Extra is bedoeld om ingewikkelde gevallen op te lossen wanneer de standaard advertentie blokkeringsregels niet voldoende blijken. \n// @description:no AdGuard Extra er utformet for å løse kompliserte saker der vanlige blokkeringsoppføringer ikke strekker til. \n// @description:pl AdGuard Extra jest przeznaczony do rozwiązywania skomplikowanych przypadków, gdy zwykłe reguły blokowania reklam nie wystarczą. \n// @description:pt-PT O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. \n// @description:pt O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. \n// @description:ro AdGuard Extra este creeat să rezolve cazuri complexe când regulile uzuale de blocat reclame sunt insuficiente. \n// @description:ru AdGuard Extra предназначен для решения более сложных задач, когда обычных правил блокировки рекламы недостаточно. \n// @description:sk AdGuard Extra má za úlohu riešiť zložité prípady, keď bežné pravidlá blokovania reklám nestačia. \n// @description:sl AdGuard Extra naj bi rešil zapletene primere, ko običajna pravila za zaviranje oglasov niso dovolj. \n// @description:sr AdGuard Extra bi trebalo da reši komplikovane slučajeve u kojima standardna pravila blokiranja reklama nisu dovoljna. \n// @description:tr AdGuard Extra, normal reklam engelleme kurallarının yeterli olmadığı karmaşık durumları çözmek için tasarlanmıştır. \n// @description:uk AdGuard Extra призначений для вирішення складних завдань, коли звичайних правил для блокування реклами недостатньо. \n// @description:vi AdGuard Extra được thiết kế để giải quyết các vấn đề khi mà các quy tắc chặn quảng cáo thông thường chưa đủ. \n// @description:zh-TW 當常規的廣告封鎖規則不夠時，AdGuard Extra 旨在解決複雜的情況。 \n// @description:zh AdGuard Extra 旨在解决常规的广告拦截规则无能为力的复杂情况。 \n// @downloadURL  https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js\n// @updateURL    https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js\n// @homepageURL  https://adguard.com/\n// @author       AdGuard\n// @match        *://*/*\n// @grant        unsafeWindow\n// @run-at       document-start\n// @exclude *://mil.ru/*\n// @exclude *wikipedia.org*\n// @exclude *icloud.com*\n// @exclude *hangouts.google.com*\n// @exclude *www.facebook.com/plugins/*\n// @exclude *www.facebook.com/v*/plugins*\n// @exclude *disqus.com/embed/comments*\n// @exclude *vk.com/widget*\n// @exclude *twitter.com/intent/*\n// @exclude *www.youtube.com/embed/*\n// @exclude *player.vimeo.com*\n// @exclude *coub.com/embed*\n// @exclude *staticxx.facebook.com/connect/xd_arbiter/*\n// @exclude *vk.com/q_frame*\n// @exclude *tpc.googlesyndication.com*\n// @exclude *syndication.twitter.com*\n// @exclude *platform.twitter.com*\n// @exclude *tutosdeath.blogspot.com*\n// @exclude *notifications.google.com*\n// @exclude *google.com/recaptcha/*\n// @exclude *bizmania.ru/*\n// ==/UserScript==\n'use strict';const win = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;\nconst browser = {\n  window: win,\n  document: win.document,\n  location: win.document.location,\n  console: {},\n  querySelector: win.document.querySelector.bind(win.document),\n  querySelectorAll: win.document.querySelectorAll.bind(win.document),\n  getAttribute: Function.prototype.call.bind(HTMLElement.prototype.getAttribute),\n  setAttribute: Function.prototype.call.bind(HTMLElement.prototype.setAttribute),\n  removeAttribute: Function.prototype.call.bind(HTMLElement.prototype.removeAttribute),\n  defineProperty: Object.defineProperty,\n  MutationObserver: win.MutationObserver\n};\nObject.keys(browser.window.console).forEach(name => {\n  browser.console[name] = browser.window.console[name];\n});const hosts = {\n  '4pda.ru': '*://*.4pda.ru/*',\n  '4pda.to': '*://*.4pda.to/*',\n  'adguard.com': '*://*.adguard.com/*',\n  'adguard.app': '*://*.adguard.app/*',\n  'auto.ru': '*://*.auto.ru/*',\n  'media.auto.ru': '*://*.media.auto.ru/*',\n  'yandex.ru': '*://*.yandex.ru/*',\n  'yandex.kz': '*://*.yandex.kz/*',\n  'yandex.by': '*://*.yandex.by/*',\n  'yandex.ua': '*://*.yandex.ua/*',\n  'yandex.md': '*://*.yandex.md/*',\n  'yandex.fr': '*://*.yandex.fr/*',\n  'yandex.lv': '*://*.yandex.lv/*',\n  'yandex.ee': '*://*.yandex.ee/*',\n  'yandex.com.tr': '*://*.yandex.com.tr/*',\n  'yandex.com': '*://*.yandex.com/*',\n  'yandex.uz': '*://*.yandex.uz/*',\n  'afisha.yandex.ru': '*://*.afisha.yandex.ru/*',\n  'afisha.yandex.kz': '*://*.afisha.yandex.kz/*',\n  'afisha.yandex.by': '*://*.afisha.yandex.by/*',\n  'afisha.yandex.ua': '*://*.afisha.yandex.ua/*',\n  'afisha.yandex.md': '*://*.afisha.yandex.md/*',\n  'mail.yandex.ru': '*://*.mail.yandex.ru/*',\n  'mail.yandex.kz': '*://*.mail.yandex.kz/*',\n  'mail.yandex.by': '*://*.mail.yandex.by/*',\n  'mail.yandex.ua': '*://*.mail.yandex.ua/*',\n  'mail.yandex.md': '*://*.mail.yandex.md/*',\n  'mail.yandex.com.tr': '*://*.mail.yandex.com.tr/*',\n  'mail.yandex.com': '*://*.mail.yandex.com/*',\n  'mail.yandex.fr': '*://*.mail.yandex.fr/*',\n  'mail.yandex.ee': '*://*.mail.yandex.ee/*',\n  'mail.yandex.kg': '*://*.mail.yandex.kg/*',\n  'mail.yandex.lv': '*://*.mail.yandex.lv/*',\n  'mail.yandex.lt': '*://*.mail.yandex.lt/*',\n  'news.yandex.ru': '*://*.news.yandex.ru/*',\n  'news.yandex.kz': '*://*.news.yandex.kz/*',\n  'news.yandex.by': '*://*.news.yandex.by/*',\n  'news.yandex.ua': '*://*.news.yandex.ua/*',\n  'news.yandex.md': '*://*.news.yandex.md/*',\n  'music.yandex.ru': '*://*.music.yandex.ru/*',\n  'music.yandex.kz': '*://*.music.yandex.kz/*',\n  'music.yandex.by': '*://*.music.yandex.by/*',\n  'music.yandex.ua': '*://*.music.yandex.ua/*',\n  'music.yandex.md': '*://*.music.yandex.md/*',\n  'tv.yandex.ru': '*://*.tv.yandex.ru/*',\n  'tv.yandex.kz': '*://*.tv.yandex.kz/*',\n  'tv.yandex.by': '*://*.tv.yandex.by/*',\n  'tv.yandex.ua': '*://*.tv.yandex.ua/*',\n  'tv.yandex.md': '*://*.tv.yandex.md/*',\n  'zen.yandex.ru': '*://*.zen.yandex.ru/*',\n  'zen.yandex.kz': '*://*.zen.yandex.kz/*',\n  'zen.yandex.by': '*://*.zen.yandex.by/*',\n  'zen.yandex.ua': '*://*.zen.yandex.ua/*',\n  'zen.yandex.md': '*://*.zen.yandex.md/*',\n  'dzen.ru': '*://*.dzen.ru/*',\n  'realty.yandex.ru': '*://*.realty.yandex.ru/*',\n  'docviewer.yandex.ru': '*://*.docviewer.yandex.ru/*',\n  'docviewer.yandex.kz': '*://*.docviewer.yandex.kz/*',\n  'docviewer.yandex.by': '*://*.docviewer.yandex.by/*',\n  'docviewer.yandex.ua': '*://*.docviewer.yandex.ua/*',\n  'docviewer.yandex.md': '*://*.docviewer.yandex.md/*',\n  'docviewer.yandex.com.tr': '*://*.docviewer.yandex.com.tr/*',\n  'docviewer.yandex.com.am': '*://*.docviewer.yandex.com.am/*',\n  'drive2.ru': '*://*.drive2.ru/*',\n  'drive2.com': '*://*.drive2.com/*',\n  'kinopoisk.ru': '*://*.kinopoisk.ru/*',\n  'eda.ru': '*://*.eda.ru/*',\n  'facebook.com': '*://*.facebook.com/*',\n  'facebookcorewwwi.onion': '*://*.facebookcorewwwi.onion/*',\n  'go.mail.ru': '*://*.go.mail.ru/*',\n  'e.mail.ru': '*://*.e.mail.ru/*',\n  'octavius.mail.ru': '*://*.octavius.mail.ru/*',\n  'mail.ru': '*://*.mail.ru/*',\n  'news.mail.ru': '*://*.news.mail.ru/*',\n  'auto.mail.ru': '*://*.auto.mail.ru/*',\n  'sportmail.ru': '*://*.sportmail.ru/*',\n  'horo.mail.ru': '*://*.horo.mail.ru/*',\n  'deti.mail.ru': '*://*.deti.mail.ru/*',\n  'lady.mail.ru': '*://*.lady.mail.ru/*',\n  'hi-tech.mail.ru': '*://*.hi-tech.mail.ru/*',\n  'minigames.mail.ru': '*://*.minigames.mail.ru/*',\n  'otvet.mail.ru': '*://*.otvet.mail.ru/*',\n  'tv.mail.ru': '*://*.tv.mail.ru/*',\n  'ok.ru': '*://*.ok.ru/*',\n  'rambler.ru': '*://*.rambler.ru/*',\n  'championat.com': '*://*.championat.com/*',\n  'gazeta.ru': '*://*.gazeta.ru/*',\n  'lenta.ru': '*://*.lenta.ru/*',\n  'quto.ru': '*://*.quto.ru/*',\n  'rns.online': '*://*.rns.online/*',\n  'passion.ru': '*://*.passion.ru/*',\n  'wmj.ru': '*://*.wmj.ru/*',\n  'wp.pl': '*://*.wp.pl/*',\n  'vidstream.online': '*://*.vidstream.online/*',\n  'livejournal.com': '*://*.livejournal.com/*',\n  'varlamov.ru': '*://*.varlamov.ru/*',\n  'lena-miro.ru': '*://*.lena-miro.ru/*',\n  'olegmakarenko.ru': '*://*.olegmakarenko.ru/*',\n  'periskop.su': '*://*.periskop.su/*',\n  'levik.blog': '*://*.levik.blog/*',\n  'vadimrazumov.ru': '*://*.vadimrazumov.ru/*',\n  'otzovik.com': '*://*.otzovik.com/*',\n  'sinoptik.ua': '*://*.sinoptik.ua/*',\n  'multiup.org': '*://*.multiup.org/*',\n  'yaplakal.com': '*://*.yaplakal.com/*',\n  'yap.ru': '*://*.yap.ru/*',\n  'pravda.com.ua': '*://*.pravda.com.ua/*',\n  'epravda.com.ua': '*://*.epravda.com.ua/*',\n  'glianec.com': '*://*.glianec.com/*',\n  'ostro.org': '*://*.ostro.org/*',\n  'nashamama.com': '*://*.nashamama.com/*',\n  'bilshe.com': '*://*.bilshe.com/*',\n  'zdorovia.com.ua': '*://*.zdorovia.com.ua/*',\n  'i.factor.ua': '*://*.i.factor.ua/*',\n  'gismeteo.ua': '*://*.gismeteo.ua/*',\n  '1777.ru': '*://*.1777.ru/*',\n  'cn.ru': '*://*.cn.ru/*',\n  'finance.i.ua': '*://*.finance.i.ua/*',\n  'glavcom.ua': '*://*.glavcom.ua/*',\n  'hvylya.net': '*://*.hvylya.net/*',\n  'kp.ua': '*://*.kp.ua/*',\n  'love.i.ua': '*://*.love.i.ua/*',\n  'newsone.ua': '*://*.newsone.ua/*',\n  'peers.tv': '*://*.peers.tv/*',\n  'radio.i.ua': '*://*.radio.i.ua/*',\n  'real-vin.com': '*://*.real-vin.com/*',\n  'viks.bz': '*://*.viks.bz/*',\n  'vsetv.com': '*://*.vsetv.com/*',\n  'tv.ua': '*://*.tv.ua/*',\n  'isport.ua': '*://*.isport.ua/*',\n  'eurointegration.com.ua': '*://*.eurointegration.com.ua/*',\n  'u-news.com.ua': '*://*.u-news.com.ua/*',\n  'strana.ua': '*://*.strana.ua/*',\n  '4mama.ua': '*://*.4mama.ua/*',\n  'bigmir.net': '*://*.bigmir.net/*',\n  'dengi.ua': '*://*.dengi.ua/*',\n  'enovosty.com': '*://*.enovosty.com/*',\n  'facenews.ua': '*://*.facenews.ua/*',\n  'football24.ua': '*://*.football24.ua/*',\n  'gorod.dp.ua': '*://*.gorod.dp.ua/*',\n  'inforesist.org': '*://*.inforesist.org/*',\n  'kolobok.ua': '*://*.kolobok.ua/*',\n  'liga.net': '*://*.liga.net/*',\n  'nnovosti.info': '*://*.nnovosti.info/*',\n  'smak.ua': '*://*.smak.ua/*',\n  'tochka.net': '*://*.tochka.net/*',\n  'ukr.net': '*://*.ukr.net/*',\n  'nv.ua': '*://*.nv.ua/*',\n  'meteo.ua': '*://*.meteo.ua/*',\n  'besplatka.ua': '*://*.besplatka.ua/*',\n  'lifedon.com.ua': '*://*.lifedon.com.ua/*',\n  'sheee.co.il': '*://*.sheee.co.il/*',\n  'walla.co.il': '*://*.walla.co.il/*',\n  'kakprosto.ru': '*://*.kakprosto.ru/*',\n  '24smi.org': '*://*.24smi.org/*',\n  'youtube.com': '*://*.youtube.com/*',\n  'echo.msk.ru': '*://*.echo.msk.ru/*',\n  'soft98.ir': '*://*.soft98.ir/*',\n  'twitch.tv': '*://*.twitch.tv/*',\n  'ppss.kr': '*://*.ppss.kr/*',\n  'ygosu.com': '*://*.ygosu.com/*',\n  'pussyspace.net': '*://*.pussyspace.net/*',\n  'pussyspace.com': '*://*.pussyspace.com/*',\n  'letidor.ru': '*://*.letidor.ru/*',\n  'motor.ru': '*://*.motor.ru/*',\n  'zv.zp.ua': '*://*.zv.zp.ua/*',\n  'techpowerup.com': '*://*.techpowerup.com/*',\n  'rjno1.com': '*://*.rjno1.com/*',\n  'liveinternet.ru': '*://*.liveinternet.ru/*',\n  'go.discovery.com': '*://*.go.discovery.com/*',\n  'discoveryplus.com': '*://*.discoveryplus.com/*',\n  'go.tlc.com': '*://*.go.tlc.com/*',\n  'watch.hgtv.com': '*://*.watch.hgtv.com/*',\n  'investigationdiscovery.com': '*://*.investigationdiscovery.com/*',\n  'sciencechannel.com': '*://*.sciencechannel.com/*',\n  'spletnik.ru': '*://*.spletnik.ru/*',\n  'tidal.com': '*://*.tidal.com/*',\n  'msn.com': '*://*.msn.com/*'\n};class UserInteractionTracker {\n  constructor() {\n    this.TRACKED_EVENTS = ['auxclick', 'click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup', 'wheel', 'keydown', 'keypress', 'keyup'];\n    this.LAST_EVENT_TIMEOUT_MS = 10;\n    this.lastEventType = '';\n    this.lastEventTime = '';\n    const trackEvent = event => {\n
      this.lastEventType = event.type;\n
      this.lastEventTime = Date.now();\n    };\n    for (let i = 0; i < this.TRACKED_EVENTS.length; i += 1) {\n
      document.documentElement.addEventListener(this.TRACKED_EVENTS[i], trackEvent, true);\n    }\n  }\n  getCurrentEvent() {\n    if (!this.lastEventType || !this.lastEventTime) {\n
      return null;\n    }\n    const isTimeout = Date.now() - this.lastEventTime > this.LAST_EVENT_TIMEOUT_MS;\n    if (!isTimeout) {\n
      return this.lastEventType;\n    }\n    return null;\n  }\n}let tracker;\nfunction getTracker() {\n  if (!tracker) {\n    tracker = new UserInteractionTracker();\n  }\n  return tracker;\n}\nfunction observeDomChanges(callback) {\n  const domMutationObserver = new browser.MutationObserver(mutations => {\n    if (getTracker().getCurrentEvent()) {\n
      return;\n    }\n    callback(mutations);\n  });\n  domMutationObserver.observe(browser.document, {\n    childList: true,\n    subtree: true\n  });\n}\nfunction disableScripts(pattern) {\n  observeDomChanges(mutations => {\n    mutations.forEach(mutation => {\n
      for (let i = 0; i < mutation.addedNodes.length; i += 1) {\n
        const node = mutation.addedNodes[i];\n
        if (node.localName === 'script' && node.innerText.match(pattern)) {\n
          node.remove();\n
        }\n
      }\n    });\n  });\n}\nfunction safeGetStylesheetRules(sheet) {\n  try {\n    if (sheet.rules === null) {\n
      return [];\n    }\n    return sheet.rules;\n  } catch (e) {\n    return [];\n  }\n}\nfunction removeNode(node) {\n  return node && node.parentNode && node.parentNode.removeChild(node);\n}\nfunction browserSupported() {\n  return !(navigator.userAgent && navigator.userAgent.match(/(MSIE|Trident)/));\n}\nconst hideViaDisplayProperty = node => {\n  if (node) {\n    node.style.setProperty('display', 'none', 'important');\n  }\n};\nconst hideViaPositionProperty = node => {\n  if (node) {\n    node.style.position = 'absolute';\n    node.style.top = '-99999px';\n  }\n};\nconst hideViaOpacity = node => {\n  if (node) {\n    node.style.setProperty('position', 'absolute', 'important');\n    node.style.setProperty('opacity', '0', 'important');\n  }\n};\nconst iterateCSSRules = func => {\n  [...browser.document.styleSheets].forEach(sheet => {\n    [...safeGetStylesheetRules(sheet)].forEach(rule => {\n
      func(rule);\n    });\n  });\n};\nconst hideRulesByCondition = (pattern, condition) => {\n  iterateCSSRules(rule => {\n    if (rule.selectorText && condition(rule.selectorText, pattern)) {\n
      hideViaDisplayProperty(rule);\n    }\n  });\n};\nconst stringPatternCondition = (selector, pattern) => selector.includes(pattern);\nconst regexpPatternCondition = (selector, pattern) => pattern.test(selector);\nconst hideCssRulesBySelectorText = pattern => {\n  if (pattern && pattern.constructor === String) {\n    hideRulesByCondition(pattern, stringPatternCondition);\n  } else if (pattern && pattern.constructor === RegExp) {\n    hideRulesByCondition(pattern, regexpPatternCondition);\n  } else {\n    throw new Error('The arguments must be type of String or RegExp');\n  }\n};\nconst isMatchingHostnames = function isMatchingHostnames() {\n  for (var _len = arguments.length, hostnames = new Array(_len), _key = 0; _key < _len; _key++) {\n    hostnames[_key] = arguments[_key];\n  }\n  return browserSupported() && hostnames.some(hostname => {\n    if (!hosts[hostname]) {\n
      return false;\n    }\n    const hostPattern = hosts[hostname].replace('*://*.', '');\n    return browser.location.origin.match(hostPattern);\n  });\n};\nconst injectHidingRuleForClassname = (() => {\n  const injectedRules = [];\n  return className => {\n    const hidingRule = `.${className} { display: none !important }`;\n    if (injectedRules.some(rule => rule === hidingRule)) {\n
      return;\n    }\n    const {\n
      styleSheets\n    } = browser.document;\n    let styleSheet = styleSheets[styleSheets.length - 1];\n    if (!styleSheet) {\n
      const style = browser.document.createElement('style');\n
      browser.document.head.appendChild(style);\n
      styleSheet = style.sheet;\n    }\n    styleSheet.insertRule(hidingRule, styleSheet.cssRules.length);\n    injectedRules.push(hidingRule);\n  };\n})();\nconst replaceScripts = (regex, replacement) => {\n  observeDomChanges(mutations => {\n    mutations.forEach(mutation => {\n
      for (let i = 0; i < mutation.addedNodes.length; i += 1) {\n
        const node = mutation.addedNodes[i];\n
        if (node.localName === 'script' && node.innerText.match(regex)) {\n
          node.innerHTML = node.innerHTML.replace(regex, replacement);\n
        }\n
      }\n    });\n  });\n};\nconst preventXHR = shouldBlock => {\n  const origOpen = window.XMLHttpRequest.prototype.open;\n  window.XMLHttpRequest.prototype.open = function () {\n    function intercept(e) {\n
      const request = e.currentTarget;\n
      if (shouldBlock(request)) {\n
        request.abort();\n
        request.removeEventListener('readystatechange', intercept);\n
      }\n
      if (request.readyState === 4) {\n
        request.removeEventListener('readystatechange', intercept);\n
      }\n    }\n    this.addEventListener('readystatechange', intercept);\n    return origOpen.apply(this, arguments);\n  };\n  window.XMLHttpRequest.prototype.open.toString = origOpen.toString.bind(origOpen);\n};\nconst elementContains = (element, pattern) => {\n  if (!element || !element.textContent) {\n    return false;\n  }\n  return element.textContent.match(pattern);\n};\nconst getParent = (node, stepsUp) => {\n  if (!node) {\n    return null;\n  }\n  if (stepsUp <= 0) {\n    return node;\n  }\n  return getParent(node.parentNode, stepsUp - 1);\n};\nconst blockProperty = prop => {\n  if (!prop) {\n    return;\n  }\n  if (window[prop] && Object.getOwnPropertyDescriptor(browser.window, prop).configurable || !window[prop]) {\n    browser.defineProperty(browser.window, prop, {\n
      configurable: false\n    });\n  }\n};\nfunction observeShadowRoots(callback) {\n  const safeGetDescriptor = (obj, prop) => {\n    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);\n    if (descriptor && descriptor.get && descriptor.configurable) {\n
      return descriptor;\n    }\n    return null;\n  };\n  const shadowObserver = new MutationObserver(callback);\n  const shadowObserverOpts = {\n    subtree: true,\n    childList: true\n  };\n  const hijackAttachShadow = context => {\n    const originalAttachShadow = context.Element.prototype.attachShadow;\n    context.Element.prototype.attachShadow = function (originalArgs) {\n
      const shadowRoot = originalAttachShadow.call(this, originalArgs);\n
      shadowObserver.observe(shadowRoot, shadowObserverOpts);\n
      return shadowRoot;\n    };\n    context.Element.prototype.attachShadow.toString = originalAttachShadow.toString.bind(originalAttachShadow);\n  };\n  const hijackContentWindows = context => {\n    const descriptor = safeGetDescriptor(context.HTMLIFrameElement.prototype, 'contentWindow');\n    if (!descriptor) {\n
      return;\n    }\n    const originalGetter = descriptor.get;\n    descriptor.get = function () {\n
      const contentWindow = originalGetter.call(this);\n
      try {\n
        hijackAttachShadow(contentWindow);\n
        return contentWindow;\n
      } catch (e) {\n
        return contentWindow;\n
      }\n    };\n    Object.defineProperty(context.HTMLIFrameElement.prototype, 'contentWindow', descriptor);\n  };\n  hijackAttachShadow(browser.window);\n  hijackContentWindows(browser.window);\n}\nfunction removeFromShadowRoots(selector, refineSelection) {\n  let nodesToRemove = [];\n  const clearRootsContent = () => {\n    if (nodesToRemove.length === 0) {\n
      return;\n    }\n    nodesToRemove.forEach(node => {\n
      removeNode(node);\n    });\n    nodesToRemove = [];\n  };\n  const refineSelectionWrapper = node => {\n    if (typeof refineSelection === 'function') {\n
      return refineSelection(node);\n    }\n    return node;\n  };\n  observeShadowRoots(mutationList => {\n    [...mutationList].forEach(mutationRecord => {\n
      if (mutationRecord.addedNodes.length === 0) {\n
        return;\n
      }\n
      const container = mutationRecord.target;\n
      const selectedNodes = container.querySelectorAll(selector);\n
      const refinedNodes = [...selectedNodes].map(refineSelectionWrapper).filter(node => node !== null);\n
      nodesToRemove.push(...refinedNodes);\n
      clearRootsContent();\n    });\n  });\n}\nconst hideViaOverlay = function hideViaOverlay(container) {\n  let color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';\n  if (!container) {\n    return;\n  }\n  const customLayerStyle = `\n
        z-index: 100;\n
        background-color: ${color};\n
        position: absolute;\n
        top: 0;\n
        left: 0;\n
        width: 100%;\n
        height: 100%;\n
        opacity: 1;\n    `;\n  if (container.querySelector('#CUSTOM_OVERLAY')) {\n    return;\n  }\n  const layer = browser.document.createElement('div');\n  layer.setAttribute('id', 'CUSTOM_OVERLAY');\n  layer.style.cssText = customLayerStyle;\n  container.append(layer);\n};\nconst exposeContent = function exposeContent(wrapNode, contentNodes) {\n  let color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';\n  if (!wrapNode) {\n    return;\n  }\n  hideViaOverlay(wrapNode, color);\n  [...contentNodes].forEach(node => {\n    node.style.position = 'relative';\n    node.style.zIndex = '999';\n  });\n};if (isMatchingHostnames('facebook.com', 'facebookcorewwwi.onion')) {\n  const hideFeedAds = () => {\n    const posts = browser.querySelectorAll('div[data-pagelet^=\"FeedUnit\"], div[role=\"feed\"] > div, div[role=\"feed\"] > span');\n    if (posts.length <= 0) {\n
      return;\n    }\n    posts.forEach(post => {\n
      if (post.style.display === 'none') {\n
        return;\n
      }\n
      let dataFt;\n
      Object.keys(post).some(key => {\n
        var _post$key$children, _post$key$children$pr, _post$key$children2, _post$key$children2$p, _post$key$children2$p2, _post$key$children2$p3, _post$key$children3, _post$key$children3$p, _post$key$children3$p2, _post$key$children3$p3, _post$key$children3$p4;\n
        if (!post[key]) {\n
          return false;\n
        }\n
        dataFt = ((_post$key$children = post[key].children) === null || _post$key$children === void 0 ? void 0 : (_post$key$children$pr = _post$key$children.props) === null || _post$key$children$pr === void 0 ? void 0 : _post$key$children$pr.category) || ((_post$key$children2 = post[key].children) === null || _post$key$children2 === void 0 ? void 0 : (_post$key$children2$p = _post$key$children2.props) === null || _post$key$children2$p === void 0 ? void 0 : (_post$key$children2$p2 = _post$key$children2$p.children) === null || _post$key$children2$p2 === void 0 ? void 0 : (_post$key$children2$p3 = _post$key$children2$p2.props) === null || _post$key$children2$p3 === void 0 ? void 0 : _post$key$children2$p3.category) || ((_post$key$children3 = post[key].children) === null || _post$key$children3 === void 0 ? void 0 : (_post$key$children3$p = _post$key$children3.props) === null || _post$key$children3$p === void 0 ? void 0 : (_post$key$children3$p2 = _post$key$children3$p.children) === null || _post$key$children3$p2 === void 0 ? void 0 : (_post$key$children3$p3 = _post$key$children3$p2.props) === null || _post$key$children3$p3 === void 0 ? void 0 : (_post$key$children3$p4 = _post$key$children3$p3.feedEdge) === null || _post$key$children3$p4 === void 0 ? void 0 : _post$key$children3$p4.category);\n
        return !!dataFt;\n
      });\n
      if (!dataFt) {\n
        return;\n
      }\n
      const sponsored = dataFt.includes('SPONSORED');\n
      if (sponsored) {\n
        post.style.display = 'none';\n
      }\n    });\n  };\n  const hideMarketplaceAds = () => {\n    const posts = browser.querySelectorAll('div[data-testid=\"marketplace_home_feed\"] > div > div > div[class] > div[class] > div > div[class]:not([style*=\"display:none\"])');\n    if (posts.length <= 0) {\n
      return;\n    }\n    posts.forEach(post => {\n
      const html = post.outerHTML;\n
      if (!html) {\n
        return;\n
      }\n
      if (html.includes('/ads/about/')) {\n
        post.style = 'display:none!important;';\n
      }\n    });\n  };\n  observeDomChanges(() => {\n    hideFeedAds();\n    hideMarketplaceAds();\n  });\n}if (isMatchingHostnames('4pda.ru', '4pda.to') && !browser.location.pathname.startsWith('/amp/')) {\n  const remove = node => node && node.parentNode.removeChild(node);\n  const width = () => browser.window.innerWidth || browser.document.body.clientWidth || 0;\n  const height = () => browser.window.innerHeight || browser.document.body.clientHeight || 0;\n  const blockHeaderAds = () => {\n    let header = browser.querySelector('.menu-main');\n    if (!header) {\n
      return;\n    }\n    header = header.parentNode.parentNode;\n    for (let i = 0; i < header.parentNode.children.length; i += 1) {\n
      const childNode = header.parentNode.children[i];\n
      if (childNode !== header) {\n
        hideViaDisplayProperty(childNode);\n
      } else {\n
        return;\n
      }\n    }\n  };\n  const isAppPromo = element => {\n    const appPromoHeader = element === null || element === void 0 ? void 0 : element.firstElementChild;\n    return (appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.tagName) === 'H2' && /[AmopPrАорР]{8}/.test(appPromoHeader === null || appPromoHeader === void 0 ? void 0 : appPromoHeader.innerText);\n  };\n  const blockSidebarAds = () => {\n    var _devdbcArticle$nextSi, _adElement$firstEleme;\n    const aside = browser.querySelectorAll('[class]:not([id]) > [id]:not([class]) > :first-child + [id][class] > [class]:not([id])');\n    [...aside].forEach(itm => {\n
      if ((itm === null || itm === void 0 ? void 0 : itm.firstElementChild) === null || itm.offsetHeight > 999 || isAppPromo(itm)) {\n
        hideViaPositionProperty(itm);\n
      }\n    });\n    const devdbcArticle = browser.querySelector('div[id^=\"devdbc_articles\"]');\n    const adElement = devdbcArticle === null || devdbcArticle === void 0 ? void 0 : (_devdbcArticle$nextSi = devdbcArticle.nextSibling) === null || _devdbcArticle$nextSi === void 0 ? void 0 : _devdbcArticle$nextSi.nextSibling;\n    if (!/DIV|SPAN|SCRIPT/.test(adElement === null || adElement === void 0 ? void 0 : (_adElement$firstEleme = adElement.firstElementChild) === null || _adElement$firstEleme === void 0 ? void 0 : _adElement$firstEleme.tagName)) {\n
      hideViaPositionProperty(adElement);\n    }\n  };\n  const blockNewSidebarAds = () => {\n    const adElements = browser.querySelectorAll('[id][class] > .slider-list ~ div[class]:not([id])');\n    if (adElements) {\n
      [...adElements].forEach(adElement => {\n
        if ((adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('HUAWEI')) > 0 || (adElement === null || adElement === void 0 ? void 0 : adElement.textContent.indexOf('vive-zoneid')) > 0) {\n
          hideViaPositionProperty(adElement);\n
        }\n
      });\n    }\n  };\n  const blockMobileAds = () => {\n    const elements = browser.querySelectorAll('body > :not(div):not(a)');\n    if (elements.length === 0) {\n
      return;\n    }\n    [...elements].forEach(el => {\n
      if (browser.getAttribute(el, 'items') === 'result.adv') {\n
        hideViaDisplayProperty(el);\n
      }\n    });\n  };\n  const blockMobileHeaderFooterAds = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      const headerAdsImg = browser.querySelector('article a[target=\"_blank\"] > img');\n
      const footerButtonAdsImg = browser.querySelector('body > a[class][role=\"button\"]');\n
      const footerAdsImg = footerButtonAdsImg === null || footerButtonAdsImg === void 0 ? void 0 : footerButtonAdsImg.previousSibling;\n
      if (headerAdsImg) {\n
        hideViaDisplayProperty(headerAdsImg.parentNode);\n
      }\n
      if (footerButtonAdsImg && footerAdsImg) {\n
        hideViaDisplayProperty(footerButtonAdsImg);\n
        hideViaDisplayProperty(footerAdsImg);\n
      }\n
      const navPromo = browser.querySelector('.menu-main-mobile > li:last-child');\n
      if (navPromo && navPromo.querySelector('svg')) {\n
        removeNode(navPromo);\n
      }\n    }\n  };\n  const fixNavMenu = () => {\n    const adLink = browser.querySelector('.menu-main .menu-main-item > a[style*=\"background\"]');\n    if (!adLink) {\n
      return;\n    }\n    hideViaDisplayProperty(adLink);\n  };\n  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);\n  const fixAdsPlaceholder = () => {\n    var _adsScript$parentNode, _adsScript$nextElemen;\n    const adsScript = browser.document.querySelector('script[src^=\"//4pda.ru/ad/www\"]');\n    const adsContainer = adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$parentNode = adsScript.parentNode) === null || _adsScript$parentNode === void 0 ? void 0 : _adsScript$parentNode.parentNode;\n    if (adsContainer && (adsScript === null || adsScript === void 0 ? void 0 : (_adsScript$nextElemen = adsScript.nextElementSibling) === null || _adsScript$nextElemen === void 0 ? void 0 : _adsScript$nextElemen.className) !== 'slider-news' && !isMobile()) {\n
      adsContainer.style.marginTop = '-100px';\n    }\n  };\n  const fixHeaderLeftover = () => {\n    const fakePost = browser.querySelector('article[itemscope][itemtype][itemid]');\n    if (!fakePost) {\n
      return;\n    }\n    const container = getParent(fakePost, 3);\n    const nextSibling = fakePost.nextElementSibling;\n    if (container.nodeName !== 'DIV' && !browser.getAttribute(nextSibling, 'itemid')) {\n
      hideViaDisplayProperty(container);\n    }\n  };\n  const restoreBackground = () => {\n    const {\n
      body\n    } = browser.document;\n    body.setAttribute('style', `${body.getAttribute('style') || ''};background-color:#E6E7E9!important`);\n    const extra = 'background-image:none!important;background-color:transparent!important';\n    const fakeStyles = new WeakMap();\n    const styleProxy = {\n
      get: (target, prop) => fakeStyles.get(target)[prop] || target[prop],\n
      set(target, prop, value) {\n
        const fakeStyle = fakeStyles.get(target);\n
        (prop in fakeStyle ? fakeStyle : target)[prop] = value;\n
        return true;\n
      }\n    };\n    [...browser.querySelectorAll('[id]:not(A), A')].forEach(itm => {\n
      if (!(itm.offsetWidth > 0.95 * width() && itm.offsetHeight > 0.85 * height())) {\n
        return;\n
      }\n
      if (itm.tagName !== 'A') {\n
        fakeStyles.set(itm.style, {\n
          backgroundImage: itm.style.backgroundImage,\n
          backgroundColor: itm.style.backgroundColor\n
        });\n
        try {\n
          browser.defineProperty(itm, 'style', {\n
            value: new Proxy(itm.style, styleProxy),\n
            enumerable: true\n
          });\n
        } catch (_unused) {}\n
        browser.setAttribute(itm, 'style', `${browser.getAttribute(itm, 'style') || ''};${extra}`);\n
      }\n
      if (itm.tagName === 'A') {\n
        browser.setAttribute(itm, 'style', 'display:none!important');\n
      }\n    });\n    fixAdsPlaceholder();\n    fixHeaderLeftover();\n  };\n  const blockForumAds = () => {\n    const itm = browser.querySelector('#logostrip');\n    if (itm) {\n
      remove(itm.parentNode.nextSibling);\n    }\n    if (browser.location.pathname.startsWith('/forum/dl/')) {\n
      const setBackground = node => browser.setAttribute(node, 'style', `${browser.getAttribute(node, 'style') || ''};background-color:#4ebaf6!important`);\n
      setBackground(browser.document.body);\n
      [...browser.querySelectorAll('body > div')].forEach(item => {\n
        if (!item.querySelector('.dw-fdwlink, .content') && !item.classList.contains('footer')) {\n
          remove(item);\n
        } else {\n
          setBackground(item);\n
        }\n
      });\n    }\n  };\n  const blockAdInFeed = () => {\n    const elements = browser.querySelectorAll('[id][class] > article[class^=\"post\"]:not([itemid])');\n    [...elements].forEach(element => {\n
      if (!element.querySelector('div[id^=\"poll-ajax-frame\"]')) {\n
        hideViaPositionProperty(element);\n
      }\n    });\n  };\n  browser.window.addEventListener('DOMContentLoaded', () => {\n    const isForum = browser.location.pathname.startsWith('/forum/');\n    const isUserProfile = isForum && browser.location.href.indexOf('showuser') > 0;\n    if (isForum) {\n
      blockForumAds();\n
      if (isUserProfile) {\n
        blockHeaderAds();\n
      }\n    } else {\n
      blockNewSidebarAds();\n
      blockHeaderAds();\n
      fixNavMenu();\n
      restoreBackground();\n    }\n  });\n  observeDomChanges(() => {\n    blockMobileAds();\n    blockMobileHeaderFooterAds();\n    blockAdInFeed();\n    blockSidebarAds();\n  });\n}const hideFeedsAdsBlocks = () => {\n  try {\n    const cardwrappers = browser.querySelectorAll('.feed__row .feed__item > div[class^=\"card-wrapper\"]');\n    [...cardwrappers].forEach(card => {\n
      const adBlock = getParent(card, 2);\n
      if (!card.className.includes('is-desktop')\n
      || elementContains(card.querySelector('div[class$=\"subtitle-text\"]'), /промо/)) {\n
        hideViaPositionProperty(adBlock);\n
      }\n    });\n  } catch (_unused) {}\n};\nif (isMatchingHostnames('zen.yandex.ru', 'zen.yandex.kz', 'zen.yandex.by', 'zen.yandex.ua', 'zen.yandex.md', 'dzen.ru')) {\n  const hideArticletAds = () => {\n    try {\n
      const articleBlocks = browser.document.querySelectorAll('div.article-render__block');\n
      [...articleBlocks].forEach(block => {\n
        if (block.firstElementChild.classList.length >= 3 && !block.querySelector('div.yandex-forms-embed')) {\n
          hideViaPositionProperty(block);\n
        }\n
      });\n
      const mozSidebarAds = browser.document.querySelector('div[class^=\"article-ad\"]');\n
      hideViaPositionProperty(mozSidebarAds);\n
      const sidebarAds = browser.document.querySelector('.article-right-ad-block');\n
      hideViaPositionProperty(sidebarAds);\n    } catch (_unused2) {}\n  };\n  const hideIframeAds = () => {\n    const iframes = browser.document.querySelectorAll('div:not([id]):not([class]) > iframe');\n    [...iframes].forEach(iframe => {\n
      const {\n
        src,\n
        allowFullscreen\n
      } = iframe;\n
      if (src === '' && allowFullscreen) {\n
        hideViaPositionProperty(iframe);\n
      }\n    });\n  };\n  const hideUnderCommentsAd = () => {\n    const commentSection = browser.document.getElementById('article__comments');\n    const commentsWrapper = getParent(commentSection, 2);\n    const underCommentsAd = commentsWrapper === null || commentsWrapper === void 0 ? void 0 : commentsWrapper.previousSibling;\n    if (underCommentsAd && underCommentsAd.classList.contains('article__content_limited')) {\n
      hideViaPositionProperty(underCommentsAd);\n    }\n  };\n  removeFromShadowRoots('div > div[data-container=\"outer\"]');\n  const removeShadowLeftovers = () => {\n    const leftovers = browser.document.querySelectorAll('.card-wrapersome, #article__bottom-embed');\n    [...leftovers].forEach(node => {\n
      hideViaPositionProperty(node);\n    });\n  };\n  observeDomChanges(() => {\n    hideArticletAds();\n    hideFeedsAdsBlocks();\n    hideIframeAds();\n    hideUnderCommentsAd();\n    removeShadowLeftovers();\n  });\n}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com', 'yandex.lv', 'yandex.ee', 'yandex.uz')) {\n  if (browser.location.pathname.startsWith('/sport')) {\n    const hideSportAds = () => {\n
      var _browser$document$que;\n
      const adsCard = (_browser$document$que = browser.document.querySelector('div[class^=\"mg-grid__col\"] div[class^=\"neo-\"][class$=\"mg-grid__item_type_card\"]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.parentNode;\n
      if (adsCard) {\n
        removeNode(adsCard);\n
      }\n    };\n    const hideStickyAds = () => {\n
      var _browser$document$que2;\n
      const adsSticky = (_browser$document$que2 = browser.document.querySelector('div[class=\"mg-sticky__inner\"] div[class^=\"neo-\"][class$=\"__column-item\"]')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.parentNode;\n
      if (!adsSticky) {\n
        return;\n
      }\n
      const adsClassName = adsSticky.classList[0];\n
      if (adsClassName) {\n
        injectHidingRuleForClassname(adsClassName);\n
      }\n    };\n    const mobileLeftovers = () => {\n
      if (!navigator.userAgent.match('Mobile')) {\n
        return;\n
      }\n
      const inbetweenAds = browser.querySelectorAll('[class*=\"_banner_more\"], [class*=\"_banner_main\"], [class*=\"_banner_top\"]');\n
      [...inbetweenAds].forEach(ad => {\n
        if (ad.querySelector('[class=\"root123\"]')) {\n
          hideViaPositionProperty(ad);\n
        }\n
      });\n    };\n    observeDomChanges(() => {\n
      hideStickyAds();\n
      hideSportAds();\n
      mobileLeftovers();\n    });\n  }\n  if (browser.location.pathname.startsWith('/video/')) {\n    const adBelowPlayer = () => {\n
      const videoInfo = browser.querySelector('.VideoViewer-Info');\n
      const adElement = videoInfo === null || videoInfo === void 0 ? void 0 : videoInfo.nextElementSibling;\n
      if (adElement && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('RelatedSnippets'))) {\n
        hideViaPositionProperty(adElement);\n
      }\n    };\n    const hideVideoListAds = () => {\n
      const videoList = browser.querySelectorAll('[id^=\"direct\"]');\n
      if (!videoList.length) {\n
        return;\n
      }\n
      [...videoList].forEach(listItem => {\n
        hideViaDisplayProperty(listItem);\n
      });\n    };\n    const hideSidebarAds = () => {\n
      const adElements = browser.querySelectorAll('.Viewer-ScrollContainer > div[role=\"button\"]');\n
      if (adElements) {\n
        [...adElements].forEach(element => {\n
          if (element && !element.querySelector('a[href^=\"https://yandex.ru/video/\"]')) {\n
            hideViaDisplayProperty(element);\n
          }\n
        });\n
      }\n    };\n    observeDomChanges(() => {\n
      adBelowPlayer();\n
      hideVideoListAds();\n
      hideSidebarAds();\n    });\n  }\n  if (browser.location.pathname.startsWith('/pogoda/') || browser.location.pathname.startsWith('/weather/') || browser.location.pathname.startsWith('/hava/')) {\n    const hideAdsByClassName = className => {\n
      const adsBlocks = browser.document.getElementsByClassName(className);\n
      [...adsBlocks].forEach(ads => {\n
        hideViaPositionProperty(ads);\n
      });\n    };\n    const weatherAds = () => {\n
      const adElements = browser.querySelectorAll('div[id]');\n
      if (adElements.length) {\n
        [...adElements].forEach(adElement => {\n
          const scriptSibling = adElement.parentNode.querySelector('script[nonce]:not([src])');\n
          if (adElement.id !== 'root' && !(adElement !== null && adElement !== void 0 && adElement.className.startsWith('content')) && elementContains(scriptSibling, /xored=data|renderTo/)) {\n
            hideViaPositionProperty(adElement);\n
          }\n
        });\n
      }\n    };\n    const weatherSelfPromoPopup = () => {\n
      const weatherRemains = browser.querySelectorAll('.b-statcounter ~ div[class]');\n
      [...weatherRemains].forEach(weatherRemain => {\n
        if (weatherRemain.innerText.includes('Закрыть')) {\n
          removeNode(weatherRemain);\n
        }\n
      });\n    };\n    const hideMonthForecastAds = () => {\n
      var _contentSections$, _contentSections$$chi, _contentSections$$chi2;\n
      const contentSections = browser.document.querySelectorAll('.content__section');\n
      const adsClassName = (_contentSections$ = contentSections[0]) === null || _contentSections$ === void 0 ? void 0 : (_contentSections$$chi = _contentSections$.children[1]) === null || _contentSections$$chi === void 0 ? void 0 : (_contentSections$$chi2 = _contentSections$$chi.firstElementChild) === null || _contentSections$$chi2 === void 0 ? void 0 : _contentSections$$chi2.classList[0];\n
      if (!adsClassName) {\n
        return;\n
      }\n
      hideAdsByClassName(adsClassName);\n    };\n    const hideMapForecastAds = () => {\n
      const adsElements = browser.document.querySelectorAll('div[data-bem] > div');\n
      const adsDirect = [...adsElements].find(adsElement => {\n
        var _adsElement$querySele;\n
        return ((_adsElement$querySele = adsElement.querySelector('div')) === null || _adsElement$querySele === void 0 ? void 0 : _adsElement$querySele.innerText) === 'Скрыть рекламу';\n
      });\n
      if (adsDirect) {\n
        hideViaPositionProperty(adsDirect);\n
      }\n
      const horizontalBarLeftover = browser.document.querySelector('div[class$=\"__content\"] > div[class$=\"__content\"] ~ div[class$=\"__ad\"]');\n
      if (horizontalBarLeftover) {\n
        removeNode(horizontalBarLeftover);\n
      }\n    };\n    const removeMobileLeftovers = () => {\n
      if (navigator.userAgent.match('Mobile')) {\n
        const leftovers = browser.document.querySelectorAll('div[class*=\"Advert_fullScreenContainer__\"]');\n
        [...leftovers].forEach(leftover => {\n
          hideViaPositionProperty(leftover);\n
        });\n
      }\n    };\n    observeDomChanges(() => {\n
      weatherAds();\n
      weatherSelfPromoPopup();\n
      hideMonthForecastAds();\n
      hideMapForecastAds();\n
      removeMobileLeftovers();\n    });\n  }\n  if (browser.location.pathname.startsWith('/maps/')) {\n    const hideSidebarDirect = () => {\n
      var _yandexDirectHeader$p, _yandexDirectHeader$p2;\n
      const yandexDirectHeader = browser.querySelector('.sidebar-container a[href^=\"https://direct.yandex.ru/\"]');\n
      if (!yandexDirectHeader) {\n
        return;\n
      }\n
      const adsContainer = (_yandexDirectHeader$p = yandexDirectHeader.parentNode) === null || _yandexDirectHeader$p === void 0 ? void 0 : (_yandexDirectHeader$p2 = _yandexDirectHeader$p.parentNode) === null || _yandexDirectHeader$p2 === void 0 ? void 0 : _yandexDirectHeader$p2.parentNode;\n
      if (!adsContainer || adsContainer.className.startsWith('masstransit')) {\n
        return;\n
      }\n
      hideViaDisplayProperty(adsContainer);\n    };\n    const hideSidebarSocialAds = () => {\n
      const socialAdAnchors = browser.querySelectorAll('.sidebar-container a[href*=\"socialads\"][target=\"_parent\"]');\n
      [...socialAdAnchors].forEach(anchor => {\n
        if (anchor.innerText.indexOf('реклама') === -1) {\n
          return;\n
        }\n
        const container = getParent(anchor, 2);\n
        if (container && container.classList.length === 1 && container.tagName === 'DIV' && getComputedStyle(container).order === '2') {\n
          hideViaDisplayProperty(container);\n
        }\n
      });\n    };\n    observeDomChanges(() => {\n
      hideSidebarDirect();\n
      hideSidebarSocialAds();\n    });\n  }\n  if (browser.location.pathname.startsWith('/q/')) {\n    const xhrFilter = request => {\n
      const {\n
        responseURL,\n
        withCredentials\n
      } = request;\n
      if (responseURL !== null && responseURL !== void 0 && responseURL.match(/context.js|static-mon/)) {\n
        return true;\n
      }\n
      if (responseURL !== null && responseURL !== void 0 && responseURL.includes('q/_crpd') && withCredentials === true) {\n
        return true;\n
      }\n
      if (responseURL !== null && responseURL !== void 0 && responseURL.match(/\\/webvisor|\\/watch|jstracer/) && withCredentials === true) {\n
        return true;\n
      }\n
      return false;\n    };\n    const removeFeedLeftovers = () => {\n
      const feedLeftovers = browser.querySelectorAll('div[data-id][class] + div[data-id][class] + div[data-id][class] + div[class]');\n
      [...feedLeftovers].forEach(element => {\n
        if (element.classList.length === 3 && !element.textContent) {\n
          hideViaDisplayProperty(element);\n
        }\n
      });\n
      const onScrollLeftovers = browser.querySelectorAll('script + section[class*=\"_\"] > div div[id]');\n
      [...onScrollLeftovers].forEach(element => {\n
        const leftoverContainer = getParent(element, 3);\n
        if (element.querySelector('div[style*=\"width: 100%\"]') || !element.textContent) {\n
          hideViaDisplayProperty(leftoverContainer);\n
        }\n
      });\n    };\n    const removeRightColumnLeftover = () => {\n
      var _browser$querySelecto;\n
      const mainColumn = (_browser$querySelecto = browser.querySelector('#page > div[class] > div[class] > script[type=\"application/ld+json\"]')) === null || _browser$querySelecto === void 0 ? void 0 : _browser$querySelecto.parentNode;\n
      const rightColumn = mainColumn === null || mainColumn === void 0 ? void 0 : mainColumn.nextElementSibling;\n
      const incognitoAd = rightColumn === null || rightColumn === void 0 ? void 0 : rightColumn.querySelector('div[style^=\"will-change: position\"] > div > div:last-child');\n
      if (incognitoAd) {\n
        hideViaDisplayProperty(incognitoAd);\n
      }\n    };\n    preventXHR(xhrFilter);\n    observeDomChanges(() => {\n
      removeFeedLeftovers();\n
      removeRightColumnLeftover();\n    });\n  }\n  if (browser.location.pathname.startsWith('/search/')) {\n    const adSearchElements = () => {\n
      var _firstSearchResult$qu, _firstSearchResult$at;\n
      const searchResultAds = browser.document.querySelectorAll('.organic[data-bem]');\n
      [...searchResultAds].forEach(ads => {\n
        var _ads$parentNode$attri;\n
        if (ads && ads.parentNode && ((_ads$parentNode$attri = ads.parentNode.attributes) === null || _ads$parentNode$attri === void 0 ? void 0 : _ads$parentNode$attri.length) > 5) {\n
          hideViaPositionProperty(ads.parentNode);\n
        }\n
      });\n
      const firstSearchResult = browser.document.querySelector('#search-result > [data-first-snippet], #search-result > [data-log-node]:first-of-type');\n
      if (firstSearchResult !== null && firstSearchResult !== void 0 && firstSearchResult.querySelector('div[class^=\"serp-adv__\"]')\n
      || firstSearchResult !== null && firstSearchResult !== void 0 && (_firstSearchResult$qu = firstSearchResult.querySelector('.label_theme_direct')) !== null && _firstSearchResult$qu !== void 0 && _firstSearchResult$qu.innerText || (firstSearchResult === null || firstSearchResult === void 0 ? void 0 : firstSearchResult.classList.value) === 'organic bno' || (firstSearchResult === null || firstSearchResult === void 0 ? void 0 : (_firstSearchResult$at = firstSearchResult.attributes) === null || _firstSearchResult$at === void 0 ? void 0 : _firstSearchResult$at.length) === 7) {\n
        hideViaPositionProperty(firstSearchResult);\n
      }\n    };\n    observeDomChanges(() => {\n
      adSearchElements();\n    });\n  }\n  if (browser.location.pathname.startsWith('/turbo')) {\n    const removeTurboAds = () => {\n
      const turboAdBlocks = browser.document.querySelectorAll('div[data-bem*=\"extParams\"], div[data-bem*=\"ownerId\"]');\n
      [...turboAdBlocks].forEach(adBlock => {\n
        const adContainer = adBlock === null || adBlock === void 0 ? void 0 : adBlock.parentNode;\n
        if (adContainer && adContainer.getAttribute('data-log-node')) {\n
          hideViaPositionProperty(adContainer);\n
        }\n
      });\n    };\n    const removeTurboLeftovers = () => {\n
      const turboLeftovers = browser.document.querySelectorAll('#recommendations > div[class*=\"_type_adfox\"]');\n
      [...turboLeftovers].forEach(leftover => {\n
        hideViaPositionProperty(leftover);\n
      });\n    };\n    observeDomChanges(() => {\n
      removeTurboAds();\n
      removeTurboLeftovers();\n    });\n  }\n  if (browser.location.pathname.startsWith('/images')) {\n    const removeImagesAds = () => {\n
      if (navigator.userAgent.match('Mobile')) {\n
        const elements = browser.querySelectorAll('div[data-bem*=\"adultDirectId\"]');\n
        if (elements.length) {\n
          [...elements].forEach(element => {\n
            if (browser.getAttribute(element, 'data-bem').indexOf('config') === -1) {\n
              hideViaPositionProperty(element);\n
            }\n
          });\n
        }\n
      }\n    };\n    observeDomChanges(() => {\n
      removeImagesAds();\n    });\n  }\n  if (isMatchingHostnames('yandex.ru', 'yandex.by') && browser.location.pathname === '/') {\n    const adUnderSearch = () => {\n
      const elements = browser.document.querySelectorAll('.widgets[role=\"main\"] *:not(div) > div[class]:not([class*=\"widget\"]) *:not(div) > div[class] > div[class]');\n
      [...elements].forEach(el => {\n
        if (!el.className.startsWith('home') && !el.className.startsWith('services') && !el.className.startsWith('input') && !el.className.startsWith('search')) {\n
          hideViaDisplayProperty(el);\n
        }\n
      });\n    };\n    const subscriptionFeedPromo = () => {\n
      const feedItems = browser.document.querySelectorAll('div.feed > [id^=\"zen-row-\"]');\n
      [...feedItems].forEach(item => {\n
        const promoSpan = item.querySelector('span.zen-ui-channel-info__subtitle-text');\n
        if (promoSpan && promoSpan.textContent === 'промо') {\n
          hideViaPositionProperty(item);\n
        }\n
      });\n    };\n    const subscriptionFeedPromoMobile = () => {\n
      const promos = browser.querySelectorAll('.touch-feed > div > .feed-item .card-brief');\n
      [...promos].forEach(promo => {\n
        const promoTextElement = promo.querySelector('span[class*=\"info__subtitle-text\"]');\n
        if (promoTextElement && promoTextElement.innerText === 'промо') {\n
          hideViaPositionProperty(promo);\n
        }\n
      });\n    };\n    observeDomChanges(() => {\n
      adUnderSearch();\n
      subscriptionFeedPromo();\n
      if (navigator.userAgent.match('Mobile')) {\n
        subscriptionFeedPromoMobile();\n
      }\n    });\n  }\n  const addedRules = {};\n  const hideMainPageAds = () => {\n    function getMainSelector(x) {\n
      if (x.banner && x.banner.cls) {\n
        let parentPath = x.banner.cls.banner__parent;\n
        if (!parentPath) {\n
          parentPath = x.banner.cls['b-banner__content_direct'];\n
        }\n
        return parentPath;\n
      }\n
      if (x.banner && x.banner.refresh) {\n
        const containerPath = x.banner.refresh.bannerContainer;\n
        if (!containerPath) {\n
          return null;\n
        }\n
        return containerPath;\n
      }\n
      return null;\n    }\n    function removeBanner(x) {\n
      let selector = getMainSelector(x);\n
      if (selector) {\n
        selector = `.${selector}`;\n
        if (addedRules[selector]) {\n
          return;\n
        }\n
        addedRules[selector] = true;\n
        [...browser.querySelectorAll(selector)].forEach(banner => {\n
          browser.setAttribute(banner, 'style', 'display:none!important');\n
        });\n
        [...browser.document.styleSheets].forEach(sheet => {\n
          try {\n
            if (sheet.disabled) {\n
              return;\n
            }\n
            const cssRules = safeGetStylesheetRules(sheet);\n
            for (let i = 0; i < cssRules.length; i += 1) {\n
              const rule = cssRules[i];\n
              if (rule.cssText.includes(' 728px 90px')) {\n
                sheet.disabled = true;\n
                continue;\n
              }\n
            }\n
          } catch (_unused) {}\n
        });\n
        return;\n
      }\n
      if (addedRules['div-hidden-by-size']) {\n
        return;\n
      }\n
      const divCollection = browser.querySelectorAll('div.main div');\n
      [...divCollection].forEach(elem => {\n
        if (elem.clientWidth === 728 && elem.clientHeight === 90) {\n
          elem.remove();\n
          addedRules['div-hidden-by-size'] = true;\n
        }\n
      });\n    }\n    if (browser.window.home && browser.window.home.export) {\n
      removeBanner(browser.window.home.export);\n    }\n  };\n  const findAds = () => {\n    const adIds = [];\n    if (!browser.window.Ya) {\n
      return adIds;\n    }\n    Object.keys(browser.window.Ya).forEach(key => {\n
      const value = browser.window.Ya[key];\n
      if (!value || !value.adUsageStorageVars || !value.adUsageStorageVars.ads || !value.adUsageStorageVars.ads.list) {\n
        return;\n
      }\n
      value.adUsageStorageVars.ads.list.forEach(el => {\n
        if (el.renderTo && !adIds.includes(el.renderTo)) {\n
          adIds.push(el.renderTo);\n
        }\n
      });\n    });\n    return adIds;\n  };\n  const hideYaDirectAds = () => {\n    const adIds = findAds();\n    if (!adIds || adIds.length === 0) {\n
      return;\n    }\n    const styleSheet = [...browser.document.styleSheets].find(sheet => {\n
      if (safeGetStylesheetRules(sheet).length > 0 && !sheet.disabled) {\n
        return true;\n
      }\n
      return false;\n    });\n    if (!styleSheet) {\n
      return;\n    }\n    adIds.forEach(id => {\n
      const el = browser.document.getElementById(id);\n
      if (el) {\n
        navigator.userAgent.match('Mobile') ? hideViaPositionProperty(el) : removeNode(el);\n
      }\n    });\n  };\n  const hideYandexBrowserAds = () => {\n    const adsContainer = browser.querySelector('.container__banner');\n    if (adsContainer && adsContainer.querySelector('[class^=\"direct\"]')) {\n
      hideViaPositionProperty(adsContainer);\n    }\n  };\n  const oneDirectZenFeed = () => {\n    const zenCategories = browser.querySelectorAll('.placeholder-card__container');\n    [...zenCategories].forEach(zenCategorie => {\n
      var _zenCategorie$firstEl;\n
      const zenChildAttributes = (_zenCategorie$firstEl = zenCategorie.firstElementChild) === null || _zenCategorie$firstEl === void 0 ? void 0 : _zenCategorie$firstEl.attributes;\n
      if (!zenChildAttributes) {\n
        return;\n
      }\n
      for (let i = 0; i < zenChildAttributes.length; i += 1) {\n
        if (zenChildAttributes[i] && /^[a-zA-Z0-9]{2}_[a-zA-Z0-9]{2}$/.test(zenChildAttributes[i].value)) {\n
          hideViaPositionProperty(zenCategorie);\n
        }\n
      }\n    });\n  };\n  removeFromShadowRoots('div[data-ssr][data-rmp-send-beacon]');\n  const removeShadowLeftovers = () => {\n    const leftovers = browser.document.querySelectorAll('.card-wrapersome,  div[data-blockname].zen-insert');\n    [...leftovers].forEach(node => {\n
      hideViaPositionProperty(node);\n    });\n  };\n  browser.document.addEventListener('DOMContentLoaded', () => {\n    hideMainPageAds();\n    hideYaDirectAds();\n  }, false);\n  observeDomChanges(() => {\n    hideYandexBrowserAds();\n    hideMainPageAds();\n    hideYaDirectAds();\n    hideFeedsAdsBlocks();\n    oneDirectZenFeed();\n    removeShadowLeftovers();\n  });\n}if (isMatchingHostnames('kinopoisk.ru')) {\n  const hideAdblockWarning = () => {\n    const node = browser.querySelector('div[class^=\"toaster-container\"], div[class*=\"adBlockWarningRoot\"]');\n    if (node && node.querySelector('a[href*=\"adblock.html\"]')) {\n
      hideViaDisplayProperty(node);\n    }\n  };\n  const hideBrandingAds = () => {\n    const probeStyles = browser.querySelectorAll('style[id]');\n    [...probeStyles].forEach(styleEl => {\n
      if (styleEl.sheet && styleEl.sheet.rules.length <= 10) {\n
        removeNode(styleEl);\n
      }\n    });\n    iterateCSSRules(rule => {\n
      if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__link') === 0) {\n
        hideViaDisplayProperty(rule);\n
      } else if (rule.selectorText && rule.selectorText.indexOf('.kinopoisk-header-branding__image') === 0) {\n
        rule.style.visibility = 'hidden';\n
      }\n    });\n    [...browser.querySelectorAll('.page-content > div[id]:not([class])')].forEach(probe => {\n
      if (probe.querySelector(':scope > div[id][style]')) {\n
        removeNode(probe);\n
      }\n    });\n  };\n  const hideAdsByStylesheet = () => {\n    const adsSheet = browser.querySelector('.mb-style-tag');\n    if (!adsSheet || !adsSheet.sheet || adsSheet.sheet.cssRules.length !== 1) {\n
      return;\n    }\n    hideViaDisplayProperty(adsSheet.sheet.cssRules[0]);\n  };\n  const hideTopBanner = () => {\n    const bannerMain = browser.querySelector('.app__page > div[class*=\"-kinopoisk-\"][class*=\"height_250\"]');\n    if (bannerMain) {\n
      hideViaDisplayProperty(bannerMain);\n    }\n    const bannerSub = browser.querySelector('div.media-post-page > div[class$=\"abbreviated\"]:first-child, div.media-post-page > div[class$=\"rendered\"]:first-child');\n    if (bannerSub) {\n
      removeNode(bannerSub);\n    }\n    const bannerContainer = browser.querySelector('.page-content > div[style=\"min-height: 0px;\"]');\n    const bannerScript = browser.querySelector('.page-content > div[style=\"min-height: 0px;\"] script');\n    if (bannerContainer && bannerScript && bannerScript.innerText.includes('xored=data')) {\n
      removeNode(bannerContainer);\n    }\n  };\n  const hideinArticleSideAd = () => {\n    const sidebarAd = browser.querySelector('div[class$=\"__sidebar-content\"] > div[class][data-tid] > div[id][class$=\"__container\"] > div[id][class]:not([data-id])');\n    if (sidebarAd) {\n
      removeNode(sidebarAd);\n    }\n  };\n  const hideFilmAds = () => {\n    const filmAds = browser.querySelectorAll('div[class*=\"styles_rootRendered__\"] div[style=\"min-width:1px\"] > div[class][data-tid]');\n    [...filmAds].forEach(ad => {\n
      if (ad.querySelector('div[id][class^=\"styles_container__\"] > div[id][class]:not([data-tid])')) {\n
        removeNode(ad);\n
      }\n    });\n    const topBanner = browser.querySelector('div[class^=\"styles_rootWithBranding__\"] + div > div[class^=\"styles_abbreviated__\"]');\n    if (topBanner && topBanner.querySelector('div[class^=\"styles_themeTopBanner__\"] > div[data-tid] > div[id][class]:not([data-tid])')) {\n
      removeNode(topBanner);\n    }\n  };\n  observeDomChanges(() => {\n    hideAdblockWarning();\n    hideBrandingAds();\n    hideAdsByStylesheet();\n    hideTopBanner();\n    hideinArticleSideAd();\n    hideFilmAds();\n  });\n}if (isMatchingHostnames('yandex.ru', 'yandex.kz', 'yandex.by', 'yandex.ua', 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com') && browser.location.pathname.startsWith('/news')) {\n  const hideSidebarAds = () => {\n    const pageWrapper = browser.document.querySelector('div[id$=\"-page\"] > div > div > div.mg-grid__row');\n    const columns = pageWrapper === null || pageWrapper === void 0 ? void 0 : pageWrapper.childNodes;\n    if (!columns || columns.length === 1) {\n
      return;\n    }\n    for (let i = 1; i < columns.length; i += 1) {\n
      const column = columns[i];\n
      const usefulElementsSelector = ['.news-search-story',\n
      '[class^=\"news-search__filter\"]',\n
      '.news-top-flexible-stories', '.news-story',\n
      '[class$=\"__inner\"] > .news-widget', '.news-top-rubric-heading'];\n
      const elements = column.querySelectorAll(usefulElementsSelector.join(', '));\n
      const visible = [];\n
      elements.forEach(el => {\n
        if (el.offsetHeight > 0 && el.offsetWidth > 0) {\n
          visible.push(el);\n
        }\n
      });\n
      if (visible.length === 0) {\n
        hideViaPositionProperty(column);\n
      }\n    }\n  };\n  const hideGridAds = () => {\n    var _browser$document$que;\n    const cards = (_browser$document$que = browser.document.querySelector('.news-feed > div.mg-grid__row')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.childNodes;\n    if (!cards) {\n
      return;\n    }\n    [...cards].forEach(card => {\n
      if (card.querySelector('div[class*=\"_type_native\"] > div[id]')) {\n
        hideViaDisplayProperty(card);\n
      }\n    });\n    const underStoryBanners = browser.querySelectorAll('div.mg-grid__col > article.mg-story + div, .mg-grid__col > div.mg-grid__row > div.mg-grid__col > div[class]');\n    [...underStoryBanners].forEach(underStoryBanner => {\n
      if (underStoryBanner.className.includes('_type_partner') || underStoryBanner.className.includes('banger')) {\n
        hideViaDisplayProperty(underStoryBanner);\n
      }\n    });\n  };\n  const hideMobileGridAds = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      var _browser$document$que2;\n
      const mobileCards = (_browser$document$que2 = browser.document.querySelector('.mg-layout')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.childNodes;\n
      if (!mobileCards) {\n
        return;\n
      }\n
      [...mobileCards].forEach(card => {\n
        if (card.className.includes('_banner_')) {\n
          hideViaPositionProperty(card);\n
        }\n
      });\n    }\n  };\n  const hideRubricAds = () => {\n    const banners = browser.document.querySelectorAll('[class*=\"_type_native\"]:not([class*=\"news-feed__\"])');\n    if (!banners) {\n
      return;\n    }\n    [...banners].forEach(banner => {\n
      hideViaDisplayProperty(banner);\n    });\n    const headers = browser.document.querySelectorAll('.news-top-rubric-heading');\n    [...headers].forEach(header => {\n
      const span = header.querySelector('span');\n
      if (span && span.innerText === 'Реклама') {\n
        hideViaDisplayProperty(header);\n
      }\n    });\n  };\n  const mobileDirect = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      const mobileAds = browser.querySelectorAll('.mg-layout > div[class][data-log-id]');\n
      [...mobileAds].forEach(mobileAd => {\n
        if (mobileAd.querySelector('div[style*=\"width: 100%\"]') || !mobileAd.querySelector('h1.mg-story__title')) {\n
          hideViaPositionProperty(mobileAd);\n
        }\n
      });\n    }\n  };\n  const hideYaDirectAds = () => {\n    const containers = document.querySelectorAll('.root123');\n    containers.forEach(el => {\n
      if (el.parentNode.tagName !== 'BODY') {\n
        hideViaDisplayProperty(el);\n
      }\n    });\n  };\n  observeDomChanges(() => {\n    hideSidebarAds();\n    hideRubricAds();\n    hideGridAds();\n    hideMobileGridAds();\n    mobileDirect();\n    hideYaDirectAds();\n  });\n}if (isMatchingHostnames('mail.yandex.ru', 'mail.yandex.kz', 'mail.yandex.by', 'mail.yandex.ua', 'mail.yandex.md', 'mail.yandex.com.tr', 'mail.yandex.com', 'mail.yandex.fr', 'mail.yandex.ee', 'mail.yandex.kg', 'mail.yandex.lv', 'mail.yandex.lt')) {\n  const removeHeaderAds = () => {\n    const infolineBox = browser.document.querySelector('.ns-view-infoline-box');\n    if (!infolineBox) {\n
      return;\n    }\n    const adsBox = infolineBox.nextElementSibling;\n    if (adsBox && adsBox.nextElementSibling && adsBox.nextElementSibling.classList[0] === 'ns-view-right-box') {\n
      hideViaPositionProperty(adsBox);\n    }\n  };\n  const removeMailAds = function removeMailAds() {\n    [...browser.document.styleSheets].forEach(sheet => {\n
      if (!sheet.href || browser.location.hostname !== new URL(sheet.href).hostname) {\n
        return;\n
      }\n
      const rules = [...safeGetStylesheetRules(sheet)];\n
      if (rules.length > 60) {\n
        return;\n
      }\n
      rules.forEach(rule => {\n
        if (rule.selectorText && /^\\..[a-zA-Z0-9_]{5,}$/.test(rule.selectorText) && rule.style.display !== 'none') {\n
          rule.style.display = 'none';\n
          const rightHeader = browser.querySelector('div.PSHeader');\n
          if (rightHeader) {\n
            rightHeader.style.top = '0';\n
          }\n
        }\n
      });\n    });\n  };\n  const removeSiderbarAds = () => {\n    var _adsIframe$parentNode;\n    const adsIframe = document.querySelector('.mail-Layout-Aside iframe');\n    if (!adsIframe) {\n
      return;\n    }\n    const adsContainer = (_adsIframe$parentNode = adsIframe.parentNode) === null || _adsIframe$parentNode === void 0 ? void 0 : _adsIframe$parentNode.parentNode;\n    if (adsContainer && adsContainer.classList.length > 0 && !adsContainer.classList[0].startsWith('ns-view-')) {\n
      hideViaPositionProperty(adsContainer);\n    }\n  };\n  const leftSiderbarAds = () => {\n    const elementsLeftSidebar = browser.document.querySelectorAll('.mail-Layout-Aside .mail-Layout-Aside-Inner-Box > div[class^=\"ns-view-\"]');\n    if (elementsLeftSidebar) {\n
      [...elementsLeftSidebar].forEach(element => {\n
        if (element\n
        && !element.querySelector('a[href]')\n
        && element.querySelector('div[style*=\"width: 100%\"]')) {\n
          removeNode(element);\n
        }\n
        if (element && (element !== null && element !== void 0 && element.textContent.includes('Отключить рекламу') || element !== null && element !== void 0 && element.textContent.includes('Скрыть рекламу'))) {\n
          removeNode(element === null || element === void 0 ? void 0 : element.nextElementSibling);\n
        }\n
      });\n    }\n    const directPostSendWindow = browser.document.querySelector('.ComposeDoneDirect');\n    if (directPostSendWindow) {\n
      hideViaPositionProperty(directPostSendWindow);\n    }\n  };\n  observeDomChanges(() => {\n    removeMailAds();\n    removeHeaderAds();\n    removeSiderbarAds();\n    leftSiderbarAds();\n  });\n}if (isMatchingHostnames('afisha.yandex.ru', 'afisha.yandex.kz', 'afisha.yandex.by', 'afisha.yandex.ua', 'afisha.yandex.md')) {\n  const isNoindex = element => {\n    if (!element) {\n
      return false;\n    }\n    return !!(element.previousSibling && element.nextSibling && element.previousSibling.textContent === 'noindex' && element.nextSibling.textContent === '/noindex');\n  };\n  const footerBannerMobile = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      try {\n
        var _browser$document$que;\n
        const footerBanner = (_browser$document$que = browser.document.querySelector('.page-content + div[class]')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.firstElementChild;\n
        if (isNoindex(footerBanner)) {\n
          hideViaPositionProperty(footerBanner);\n
        }\n
        const suspectItems = browser.querySelectorAll('span[data-component] > div[class^=\"Item-\"]');\n
        [...suspectItems].forEach(suspectItem => {\n
          if (suspectItem.querySelector('div[data-banner-id]')) {\n
            hideViaPositionProperty(suspectItem);\n
          }\n
        });\n
      } catch (_unused) {}\n    }\n  };\n  const hideDataBemBanners = () => {\n    const banners = document.querySelectorAll('div[data-bem*=\"metrikaEntry\"][data-bem*=\"R-A-\"]');\n    [...banners].forEach(banner => {\n
      hideViaPositionProperty(banner);\n    });\n  };\n  const hideMainSidebarBanner = () => {\n    const sideSticker = document.querySelector('.yabs_type_banners');\n    if (sideSticker && sideSticker.querySelector('a[data-bem][target=\"_blank\"]')) {\n
      hideViaPositionProperty(sideSticker);\n    }\n  };\n  const hideYaBrowserBanners = () => {\n    if (navigator.userAgent.match('YaBrowser')) {\n
      const mainHeaderBanner = browser.querySelector('.grid__inner > div[class*=\"afisha-profit_\"][class*=\"content-event-emotional__\"]');\n
      if (mainHeaderBanner) {\n
        hideViaPositionProperty(mainHeaderBanner);\n
      }\n
      const mainSideBanner = browser.document.querySelector('.grid__inner > div.grid__margin-right > div.grid__sidebar_type_cinema');\n
      if (mainSideBanner && mainSideBanner.querySelector('[id^=\"ya_partner_R-A-\"]')) {\n
        hideViaPositionProperty(mainSideBanner);\n
      }\n
      const middleBanner = browser.querySelector('.rubric-type-landing > div[class*=\"afisha-profit\"]');\n
      if (middleBanner) {\n
        hideViaPositionProperty(middleBanner);\n
      }\n
      const adfoxBanners = browser.document.querySelectorAll('.top-branding-holder, .adfox_type_branding');\n
      [...adfoxBanners].forEach(banner => {\n
        hideViaPositionProperty(banner);\n
      });\n    }\n  };\n  const hideTopMobile = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      const mobileHeader = browser.document.querySelector('[class^=\"WrapperAdfoxContainer-\"]');\n
      if (mobileHeader) {\n
        removeNode(mobileHeader);\n
      }\n    }\n  };\n  const hideMiddleMobile = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      const mobileMiddle = browser.document.querySelector('[data-component=\"EventContentTouch\"] > div[class^=\"Item-sc-\"]');\n
      if (mobileMiddle && mobileMiddle.querySelector('[id^=\"adfox-\"]')) {\n
        removeNode(mobileMiddle);\n
      }\n    }\n  };\n  const hideBottomMobile = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      const mobileBottom = browser.document.querySelector('[data-banner-id^=\"R-A-\"]');\n
      if (mobileBottom) {\n
        removeNode(mobileBottom);\n
      }\n    }\n  };\n  observeDomChanges(() => {\n    hideDataBemBanners();\n    hideMainSidebarBanner();\n    footerBannerMobile();\n    hideYaBrowserBanners();\n    hideTopMobile();\n    hideMiddleMobile();\n    hideBottomMobile();\n  });\n}if (isMatchingHostnames('tv.yandex.ru', 'tv.yandex.kz', 'tv.yandex.by', 'tv.yandex.ua', 'tv.yandex.md')) {\n  const hideSimilarAds = adsBlock => {\n    var _adsBlock$firstElemen;\n    const adsClassNames = adsBlock === null || adsBlock === void 0 ? void 0 : (_adsBlock$firstElemen = adsBlock.firstElementChild) === null || _adsBlock$firstElemen === void 0 ? void 0 : _adsBlock$firstElemen.classList;\n    if (!adsClassNames) {\n
      return;\n    }\n    [...adsClassNames].forEach(className => {\n
      if (className.endsWith('__wrapper')) {\n
        const adsElements = browser.document.getElementsByClassName(className);\n
        [...adsElements].forEach(ads => {\n
          hideViaPositionProperty(ads);\n
        });\n
      }\n    });\n  };\n  const hideHeaderBanner = () => {\n    var _adsContainer$firstEl;\n    const header = browser.document.querySelector('header');\n    const adsContainer = header === null || header === void 0 ? void 0 : header.previousElementSibling;\n    if (adsContainer !== null && adsContainer !== void 0 && (_adsContainer$firstEl = adsContainer.firstElementChild) !== null && _adsContainer$firstEl !== void 0 && _adsContainer$firstEl.className.endsWith('__wrapper')) {\n
      hideViaPositionProperty(adsContainer);\n    }\n  };\n  const hidePageBanner = () => {\n    var _ads$style;\n    const contentHeader = browser.document.querySelector('.content__header');\n    const ads = contentHeader === null || contentHeader === void 0 ? void 0 : contentHeader.previousElementSibling;\n    if (ads !== null && ads !== void 0 && (_ads$style = ads.style) !== null && _ads$style !== void 0 && _ads$style.backgroundImage && ads !== null && ads !== void 0 && ads.querySelector('a[target=\"_blank\"]')) {\n
      hideViaPositionProperty(ads);\n    }\n  };\n  const hideGridAds = () => {\n    try {\n
      const grid = browser.document.querySelectorAll('[class^=\"grid__\"]');\n
      const adGrid = [...grid].filter(elem => getComputedStyle(elem)['grid-row-start'] === 'adv' || getComputedStyle(elem)['grid-row-start'] === 'wide');\n
      [...adGrid].forEach(ad => {\n
        hideViaPositionProperty(ad);\n
        hideSimilarAds(ad);\n
      });\n    } catch (_unused) {}\n  };\n  const hideChannelPageAds = () => {\n    const stickyAd = browser.querySelectorAll('div[class*=\"channel-controller__\"] > div[class]:not([class*=\"channel\"]) > div[class][id]');\n    if (stickyAd.length === 1) {\n
      hideViaPositionProperty(stickyAd[0]);\n    }\n    const bottomBanner = browser.querySelectorAll('div[class^=\"content__\"] > div[class$=\"__wrapper\"] > div[class][id]');\n    if (bottomBanner.length === 1) {\n
      hideViaPositionProperty(bottomBanner[0]);\n    }\n  };\n  const hideProgramPageAds = () => {\n    const stickyAd = browser.querySelectorAll('div[class^=\"content__\"] > div[class*=\"__wrapper\"] > div[class][id]');\n    if (stickyAd.length === 2) {\n
      hideViaPositionProperty(stickyAd[0]);\n    }\n  };\n  observeDomChanges(() => {\n    hideGridAds();\n    hideHeaderBanner();\n    hidePageBanner();\n    hideChannelPageAds();\n    hideProgramPageAds();\n  });\n}if (isMatchingHostnames('e.mail.ru', 'octavius.mail.ru')) {\n  const adRightColumn = () => {\n    const adColumn = browser.querySelector('.application-mail__layout_main > span > div:last-child');\n    if (adColumn && adColumn.classList.length !== 1) {\n
      hideViaPositionProperty(adColumn);\n    }\n  };\n  const fixStylingLeftover = () => {\n    const twoPane = browser.querySelector('.layout_type_2pane .ReactVirtualized__Grid__innerScrollContainer');\n    if (twoPane) {\n
      twoPane.style.marginTop = '-40px';\n    }\n    const threePane = browser.querySelector('.layout_type_3pane .ReactVirtualized__Grid__innerScrollContainer');\n    if (threePane) {\n
      threePane.style.marginTop = '-90px';\n    }\n  };\n  const adTopBanner = () => {\n    var _adBanner$parentEleme, _adBanner$parentEleme2;\n    const adBanner = browser.querySelector('.ReactVirtualized__Grid__innerScrollContainer .letter-list-item-adv_rounded');\n    const bannerContainer = adBanner === null || adBanner === void 0 ? void 0 : (_adBanner$parentEleme = adBanner.parentElement) === null || _adBanner$parentEleme === void 0 ? void 0 : (_adBanner$parentEleme2 = _adBanner$parentEleme.parentElement) === null || _adBanner$parentEleme2 === void 0 ? void 0 : _adBanner$parentEleme2.parentElement;\n    if (adBanner) {\n
      hideViaPositionProperty(adBanner);\n    }\n    if (bannerContainer && bannerContainer.style.height !== '0px') {\n
      fixStylingLeftover();\n    }\n  };\n  const xhrFilter = request => {\n    if (request.response.includes('puny_domain')) {\n
      return true;\n    }\n    return false;\n  };\n  preventXHR(xhrFilter);\n  const oldDesignAds = () => {\n    const headAds = browser.querySelectorAll('div[class=\"b-datalist__head\"], div[class=\"b-letter__rb-line\"]');\n    [...headAds].forEach(ad => {\n
      if (ad.querySelector('#adman-line')) {\n
        hideViaPositionProperty(ad);\n
      }\n    });\n    const sideAds = browser.querySelector('.b-layout_main > div.b-layout__col > div:last-child:not([id])');\n    if (sideAds && !sideAds.querySelector('[class*=\"content\"], [class*=\"login\"]')) {\n
      hideViaPositionProperty(sideAds);\n    }\n  };\n  observeDomChanges(() => {\n    adRightColumn();\n    adTopBanner();\n    oldDesignAds();\n  });\n}\nif (isMatchingHostnames('go.mail.ru') && browser.location.pathname === '/search') {\n  const pageTopBanner = () => {\n    const banner = browser.querySelector('.tb-rb-banner-wrapper');\n    if (banner) {\n
      hideViaDisplayProperty(banner);\n    }\n  };\n  observeDomChanges(() => {\n    pageTopBanner();\n  });\n}\nif (isMatchingHostnames('mail.ru') && browser.location.pathname === '/') {\n  const hideGridAds = () => {\n    const adsItems = browser.querySelectorAll('span.pl_cs');\n    [...adsItems].forEach(ads => {\n
      const adsContainer = ads.parentNode.parentNode.parentNode.parentNode.parentNode;\n
      if (adsContainer && ads.innerText === 'Реклама' && adsContainer.id.startsWith('_pcard')) {\n
        hideViaDisplayProperty(adsContainer);\n
      }\n    });\n  };\n  const rightSquareAd = () => {\n    const blocks = browser.querySelectorAll('.tabs ~ div[class] > div[class]');\n    [...blocks].forEach(block => {\n
      const content = block.firstElementChild;\n
      if (!content.hasAttribute('data-testid')) {\n
        hideViaPositionProperty(block);\n
      }\n    });\n  };\n  const horizontalBanner = () => {\n    var _anchor$parentElement;\n    const anchor = browser.querySelector('ul[data-testid=\"news-content\"]');\n    const siblings = anchor === null || anchor === void 0 ? void 0 : (_anchor$parentElement = anchor.parentElement) === null || _anchor$parentElement === void 0 ? void 0 : _anchor$parentElement.children;\n    if (siblings) {\n
      [...siblings].forEach(sibling => {\n
        if (sibling.querySelector('div[data-mnemo]')) {\n
          hideViaDisplayProperty(sibling);\n
        }\n
      });\n    }\n    const banner = browser.querySelector('div[data-bem] > div > div[data-testid=\"search-container\"] + div.stripe-wrapper');\n    if (banner) {\n
      hideViaDisplayProperty(banner);\n    }\n  };\n  const underSearchBanner = () => {\n    const search = document.querySelector('[id=\"search:container\"]');\n    const tabs = document.querySelector('[data-testid=\"news-tabs\"]');\n    if (!search || !tabs) {\n
      return;\n    }\n    const bannerBelow = search.nextElementSibling;\n    const bannerAbove = tabs.previousElementSibling;\n    if (bannerBelow === bannerAbove) {\n
      const divs = bannerBelow.querySelectorAll('div');\n
      const hasDirectAd = [...divs].some(div => {\n
        const isAdContent = div.innerText === 'Директ' || div.innerText === 'myTarget' || div.innerText === 'Реклама';\n
        return isAdContent;\n
      });\n
      if (hasDirectAd) {\n
        hideViaPositionProperty(bannerBelow);\n
      }\n    }\n  };\n  observeDomChanges(() => {\n    hideGridAds();\n    rightSquareAd();\n    horizontalBanner();\n    underSearchBanner();\n  });\n}\nif (isMatchingHostnames('otvet.mail.ru')) {\n  const hideAnswersBanner = () => {\n    const banner = browser.querySelector('div[class^=\"list_\"] > div[class^=\"layoutBlock_\"] > div[class^=\"wrapper_\"] > div[class^=\"wrapper__inner_\"] + div[class]');\n    if (banner && banner.classList.length === 1 && banner.innerText.includes('Реклама')) {\n
      hideViaPositionProperty(banner);\n    }\n  };\n  const xhrFilter = request => {\n    if (request.response.includes('ads')) {\n
      return true;\n    }\n    return false;\n  };\n  preventXHR(xhrFilter);\n  observeDomChanges(() => {\n    hideAnswersBanner();\n  });\n}\nif (isMatchingHostnames('tv.mail.ru')) {\n  const rightSideBanner = () => {\n    const videoWrapper = browser.querySelector('[class=\"cols__wrapper margin_off_sides-hor\"]');\n    if (!videoWrapper) {\n
      return;\n    }\n    const sideBanner = videoWrapper.querySelector('[class=\"cols__column cols__column_small_12 cols__column_sidebar\"]');\n    if (sideBanner) {\n
      hideViaDisplayProperty(sideBanner);\n    }\n    const sideBannerWithShadow = document.querySelector('.js-relap-widget');\n    if (sideBannerWithShadow && sideBannerWithShadow.childElementCount === 0) {\n
      hideViaDisplayProperty(sideBanner);\n    }\n  };\n  const bottomHorizontal = () => {\n    var _browser$querySelecto;\n    const wrapper = (_browser$querySelecto = browser.querySelector('div.js-counters.counters')) === null || _browser$querySelecto === void 0 ? void 0 : _browser$querySelecto.parentElement;\n    if (!wrapper) {\n
      return;\n    }\n    const blocks = wrapper.querySelectorAll('div[class][id]');\n    [...blocks].forEach(block => {\n
      if (block.classList.length === 3 && !block.id.includes('menu')) {\n
        hideViaPositionProperty(block);\n
      }\n    });\n  };\n  const modalSideBanner = () => {\n    const modal = browser.querySelector('.overlay.overlay_banner');\n    if (!modal) {\n
      return;\n    }\n    const blocks = modal.querySelectorAll('div[class][id]');\n    [...blocks].forEach(block => {\n
      if (block.classList.length === 2) {\n
        hideViaPositionProperty(block);\n
      }\n    });\n  };\n  observeDomChanges(() => {\n    rightSideBanner();\n    bottomHorizontal();\n    modalSideBanner();\n  });\n}const hideSmallAdsNearArticle = () => {\n  if (navigator.userAgent.match('Mobile')) {\n    const smallAds = browser.querySelectorAll('.wrapper_with-article-swipe-navigation > div[class]:not([style]), .wrapper_with-article-swipe-navigation > span');\n    if (smallAds) {\n
      [...smallAds].forEach(smallAd => {\n
        if (smallAd\n
        && smallAd.__smokedElement === true) {\n
          hideViaPositionProperty(smallAd);\n
        }\n
      });\n    }\n  }\n};\nconst hidePulseAds = () => {\n  const pulseLenta = browser.querySelector('.pulse-lenta-root');\n  if (!pulseLenta) {\n    return;\n  }\n  const pulseCardLinks = pulseLenta.querySelectorAll('a[rel=\"noopener nofollow\"][target=\"_blank\"]');\n  if (!pulseCardLinks.length) {\n    return;\n  }\n  pulseCardLinks.forEach(cardLink => {\n    const spans = cardLink.querySelectorAll('span');\n    spans.forEach(span => {\n
      if (span && span.innerText === 'Реклама') {\n
        hideViaDisplayProperty(cardLink.parentNode);\n
      }\n    });\n  });\n};\nconst hideNewsLeftovers = () => {\n  const wrapper = browser.querySelector('[data-module=\"FixedPanel.Rubric\"] > div.block_collapse_bottom > .wrapper');\n  if (!wrapper) {\n    return;\n  }\n  const containers = wrapper.children;\n  if (!containers || containers.length === 0) {\n    return;\n  }\n  [...containers].forEach(container => {\n    if (container.nodeName !== 'DIV') {\n
      return;\n    }\n    const subContainers = container.querySelectorAll('[class*=\"fixed-panel\"] div[class]');\n    [...subContainers].forEach(el => {\n
      const classes = [...el.classList];\n
      if (!classes.includes('box') && getComputedStyle(el).minHeight === '400px') {\n
        removeNode(el);\n
      }\n    });\n  });\n};\nconst hideDesktopNewsLeftovers = () => {\n  const panel = document.querySelector('.m-fixed-panel');\n  if (!panel) {\n    return;\n  }\n  [...panel.children].forEach(el => {\n    const block = el.querySelector('div');\n    if (block && getComputedStyle(block).minHeight === '400px') {\n
      removeNode(el);\n    }\n  });\n};\nif (isMatchingHostnames('news.mail.ru')) {\n  observeDomChanges(() => {\n    hideCssRulesBySelectorText(/, \\.p-directhack|\\.cols_experiment-1|\\.js-smoky-single/);\n    hideNewsLeftovers();\n    hideDesktopNewsLeftovers();\n  });\n}\nif (isMatchingHostnames('mail.ru')\n&& !isMatchingHostnames('lady.mail.ru')) {\n  observeDomChanges(() => {\n    hideCssRulesBySelectorText(/\\.spring_side|\\.p-directhack|\\.rb-direct-mimic_index|\\.deti-slot_box|\\.health-slot_box|\\.spring|\\.rb-direct-wrapper|\\.rb_body|\\.rb-direct-side|\\.news-item__link|\\.notify/);\n    hidePulseAds();\n  });\n}\nif (isMatchingHostnames('auto.mail.ru')) {\n  observeDomChanges(() => {\n    hideCssRulesBySelectorText(/\\.rb_main-240x400|\\.trg-banners|\\.rb_hide_by_parallax/);\n  });\n}\nif (isMatchingHostnames('sportmail.ru')) {\n  const removeLeftovers = () => {\n    const sidebarAd = browser.querySelector('.js-fixed-panel > div[class*=\"experiment\"]');\n    if (sidebarAd) {\n
      hideViaPositionProperty(sidebarAd);\n    }\n  };\n  observeDomChanges(() => {\n    hideSmallAdsNearArticle();\n    hideCssRulesBySelectorText(/\\.cols_experiment-1|\\.p-spring/);\n    removeLeftovers();\n  });\n}\nif (isMatchingHostnames('horo.mail.ru')) {\n  observeDomChanges(() => {\n    hideCssRulesBySelectorText(/\\.incut_full|\\.cols__column_sidebar/);\n  });\n}\nif (isMatchingHostnames('hi-tech.mail.ru')) {\n  const hideBottomBanner = () => {\n    const containers = browser.querySelectorAll('[data-logger-parent=\"bottom\"] > div');\n    [...containers].forEach(container => {\n
      const {\n
        height\n
      } = getComputedStyle(container);\n
      const childCount = container.children.length;\n
      const isBlock = container.className.includes('block');\n
      if (height !== '0px' && childCount > 0 && isBlock) {\n
        hideViaPositionProperty(container);\n
      }\n    });\n  };\n  observeDomChanges(() => {\n    hideCssRulesBySelectorText(/\\.sticky-springs__item|\\.cols__column_asd|\\.viewbox__side/);\n    hideBottomBanner();\n  });\n}\nif (isMatchingHostnames('lady.mail.ru')) {\n  observeDomChanges(() => {\n    hidePulseAds();\n  });\n}if (isMatchingHostnames('music.yandex.ru', 'music.yandex.kz', 'music.yandex.by', 'music.yandex.ua', 'music.yandex.md')) {\n  const removeHeaderAds = () => {\n    var _browser$document$que;\n    const headerAdsBlock = (_browser$document$que = browser.document.querySelector('.adfox-brick')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.previousElementSibling;\n    if (headerAdsBlock && headerAdsBlock.querySelector('.d-overhead__close')) {\n
      hideViaPositionProperty(headerAdsBlock);\n    }\n  };\n  observeDomChanges(() => {\n    removeHeaderAds();\n  });\n}if (isMatchingHostnames('realty.yandex.ru')) {\n  const hideFeedLeftovers = () => {\n    const leftovers = browser.document.querySelectorAll('ol > li[class$=\"__list-item_type_promo\"]');\n    [...leftovers].forEach(leftover => {\n
      hideViaDisplayProperty(leftover);\n    });\n  };\n  const hideBuyLeftovers = () => {\n    const leftovers = browser.document.querySelectorAll('ol > li[class$=\"__list-item_type_ad\"]');\n    [...leftovers].forEach(leftover => {\n
      hideViaDisplayProperty(leftover);\n    });\n  };\n  const hideNovostroykaLeftovers = () => {\n    const leftover = browser.document.querySelector('div.ContentWidth > div[class=\"SitesSearchPage__topAd SitesSearchPage__topAd_special\"]');\n    if (leftover) {\n
      hideViaDisplayProperty(leftover);\n    }\n  };\n  observeDomChanges(() => {\n    blockProperty('AD');\n    hideFeedLeftovers();\n    hideBuyLeftovers();\n    hideNovostroykaLeftovers();\n  });\n}if (isMatchingHostnames('ok.ru')) {\n  const mimicBannerSelectors = ['#RightColumnBannerInner', '#hook_Block_ViewportHeightAwareBanner'];\n  const isMimicAdStyle = selectorText => {\n    if (mimicBannerSelectors.some(mimicStyle => selectorText.includes(mimicStyle))) {\n
      return true;\n    }\n    return false;\n  };\n  const removeOkAds = () => {\n    [...browser.document.styleSheets].forEach(sheet => {\n
      [...safeGetStylesheetRules(sheet)].forEach(rule => {\n
        if (rule.selectorText && isMimicAdStyle(rule.selectorText) && rule.style.display !== 'none') {\n
          rule.style.display = 'none';\n
        }\n
      });\n    });\n  };\n  const removeOkFeedAds = () => {\n    const feedItems = document.querySelectorAll('.feed-list > .feed-w > [data-feed-id]');\n    feedItems.forEach(item => {\n
      if (item.style.display === 'none') {\n
        return;\n
      }\n
      const feedTopItems = item.querySelectorAll('.feed_top .feed_ava+div > div[class]');\n
      feedTopItems.forEach(topItem => {\n
        if (topItem.innerText === 'Реклама' || topItem.innerText === 'Ad') {\n
          item.style.display = 'none';\n
        }\n
      });\n
      const adMarker = item.querySelector('.feed_top .feed_count > div');\n
      if (!adMarker) {\n
        return;\n
      }\n
      if (adMarker.innerText === 'Реклама' || adMarker.innerText === 'Ad') {\n
        item.style.display = 'none';\n
      }\n    });\n  };\n  const sidebarAds = () => {\n    const selectorWhitelist = ['#hook_Block_GiftsFrontFourthColumn, #hook_Block_FriendStream'];\n    const isWhitelistedNode = node => selectorWhitelist.some(selector => node.matches(selector));\n    const resetPositionStyle = node => {\n
      node.style.removeProperty('position');\n
      node.style.removeProperty('top');\n    };\n    const removeAds = rootNode => {\n
      resetPositionStyle(rootNode);\n
      if (isWhitelistedNode(rootNode)) {\n
        return;\n
      }\n
      const includesWhitelistElems = selectorWhitelist.filter(selector => rootNode.querySelector(selector));\n
      if (includesWhitelistElems.length === 0) {\n
        hideViaPositionProperty(rootNode);\n
        return;\n
      }\n
      const {\n
        children\n
      } = rootNode;\n
      [...children].forEach(child => removeAds(child));\n    };\n    const rightSideContainers = browser.querySelectorAll('#hook_Block_FourthCol, #rightColumn');\n    [...rightSideContainers].forEach(container => {\n
      const {\n
        children\n
      } = container;\n
      [...children].forEach(child => {\n
        resetPositionStyle(child);\n
        removeAds(child);\n
      });\n    });\n  };\n  const commentsSideAds = () => {\n    const banner = browser.querySelector('.dialogWrapper > .dialogWrapperBanner ');\n    if (banner && getComputedStyle(banner).width === '240px') {\n
      hideViaPositionProperty(banner);\n    }\n  };\n  observeDomChanges(() => {\n    removeOkAds();\n    removeOkFeedAds();\n    sidebarAds();\n    commentsSideAds();\n  });\n}function isInsideCircumventionScript() {\n  if (!document.currentScript || !document.currentScript.innerText) {\n    return false;\n  }\n  const scriptText = document.currentScript.innerText;\n  if (scriptText.length > 100000 && scriptText.indexOf('window.Adf') > 0 && scriptText.indexOf('checkAdPlace') > 0) {\n    return true;\n  }\n  return false;\n}\nconst hasSimilarAttributes = children => {\n  if (children.length === 1) {\n    return false;\n  }\n  for (let i = 1; i < children.length; i += 1) {\n    var _children, _children$attributes$, _children$i, _children$i$attribute;\n    if (((_children = children[i - 1]) === null || _children === void 0 ? void 0 : (_children$attributes$ = _children.attributes[0]) === null || _children$attributes$ === void 0 ? void 0 : _children$attributes$.value) !== ((_children$i = children[i]) === null || _children$i === void 0 ? void 0 : (_children$i$attribute = _children$i.attributes[0]) === null || _children$i$attribute === void 0 ? void 0 : _children$i$attribute.value)) {\n
      return false;\n    }\n  }\n  return true;\n};\nconst hideYandexDirectByLink = () => {\n  const adsImg = browser.document.querySelectorAll('a[target=\"_blank\"][style^=\"background-image: url(\\'//\"]');\n  [...adsImg].forEach(img => {\n    var _img$parentNode, _img$parentNode2, _img$parentNode2$pare;\n    const adsBlockType1 = img === null || img === void 0 ? void 0 : (_img$parentNode = img.parentNode) === null || _img$parentNode === void 0 ? void 0 : _img$parentNode.parentNode;\n    const adsBlockType2 = img === null || img === void 0 ? void 0 : (_img$parentNode2 = img.parentNode) === null || _img$parentNode2 === void 0 ? void 0 : (_img$parentNode2$pare = _img$parentNode2.parentNode) === null || _img$parentNode2$pare === void 0 ? void 0 : _img$parentNode2$pare.parentNode;\n    if (hasSimilarAttributes(adsBlockType1 === null || adsBlockType1 === void 0 ? void 0 : adsBlockType1.children)) {\n
      hideViaDisplayProperty(adsBlockType1);\n    }\n    if (hasSimilarAttributes(adsBlockType2 === null || adsBlockType2 === void 0 ? void 0 : adsBlockType2.children)) {\n
      hideViaDisplayProperty(adsBlockType2);\n    }\n  });\n};\nconst hideYandexDirectByStyle = () => {\n  const styleSheets = browser.document.getElementsByTagName('style');\n  [...styleSheets].forEach(styleSheet => {\n    const rules = [...safeGetStylesheetRules(styleSheet.sheet)];\n    const firstRule = rules[0];\n    if (rules.length > 50 || !firstRule) {\n
      return;\n    }\n    if (firstRule.selectorText && /[a-zA-Z0-9]{2,8}\\[[a-zA-Z0-9]{2,8}\\*=\"[a-zA-Z0-9]{2,10}\"]/.test(firstRule.selectorText)) {\n
      hideViaPositionProperty(firstRule);\n    }\n  });\n};\nconst removeAnnoyance = () => {\n  const modalButton = browser.querySelector('button[data-cerber*=\"::adblock_screen::\"]');\n  const fixedBody = browser.querySelector('body[style]');\n  if (modalButton) {\n    const modal = getParent(modalButton, 4);\n    removeNode(modal);\n  } else if (fixedBody) {\n    fixedBody.removeAttribute('style');\n  }\n};\nconst removeAdScript = () => {\n  const scripts = browser.document.getElementsByTagName('script');\n  for (let i = 0; i < scripts.length; i += 1) {\n    const script = scripts[i];\n    if (script && script.innerText.indexOf('getYaClickUrl') > 0) {\n
      removeNode(script);\n    }\n  }\n};\nif (isMatchingHostnames('rambler.ru', 'championat.com', 'gazeta.ru', 'lenta.ru', 'quto.ru', 'rns.online', 'passion.ru', 'wmj.ru', 'eda.ru', 'letidor.ru', 'motor.ru')) {\n  const realUA = navigator.userAgent;\n  const getUserAgent = () => {\n    if (isInsideCircumventionScript()) {\n
      return 'MSIE ';\n    }\n    return realUA;\n  };\n  Object.defineProperty(browser.window.navigator, 'userAgent', {\n    get: getUserAgent\n  });\n  let realPromise = browser.window.Promise;\n  Object.defineProperty(browser.window, 'Promise', {\n    get: () => {\n
      if (isInsideCircumventionScript()) {\n
        throw new TypeError('Failed to fetch');\n
      }\n
      return realPromise;\n    },\n    set: value => {\n
      realPromise = value;\n    }\n  });\n  const removeLeftovers = () => {\n    const anchors = browser.querySelectorAll(`\n
            [id^=\"desktop_\"][data-banner],\n
            [id^=\"hedux-\"],\n
            div[id^=\"adfox-\"][style=\"display:block\"],\n
            div[id^=\"adfox-\"][style=\"display: block;\"],\n
            div[data-rnet] > [id^=\"rnet_kino_\"],\n
            div[data-rnet] > [id^=\"rnet_news_\"],\n
            div[data-rnet] > div[id^=\"rnet_sport_\"],\n
            div[data-rnet] > div[id^=\"rnet_finance_\"],\n
            div[data-rnet] > div[id^=\"rnet_weekend_\"],\n
            div[data-rnet] > div[id^=\"rnet_travel_\"],\n
            div[data-rnet] > div[id^=\"rnet_woman_\"],\n
            div[data-rnet] > div[id^=\"rnet_doctor_\"],\n
            div[data-rnet] > div[id^=\"rnet_auto_\"],\n
            div[data-rnet=\"rnet_news_comments\"] > div[id^=\"rnet_rambler_\"],\n
            div[style=\"display:block\"] > [id^=\"__ban_\"],\n
            div[style^=\"height\"] > div > [id][style=\"display: block;\"],\n
            [class^=\"banner--container\"] > [id][class^=\"banner banner--desktop\"],\n
            [style*=\"min-\"] > div > div[id][style*=\"display\"]\n
        `);\n    [...anchors].forEach(anchor => {\n
      var _anchor$nextElementSi;\n
      const parent = getParent(anchor, 5);\n
      if (parent && parent instanceof Element && parent.classList.value && parent.classList[0].indexOf('rui__') !== -1) {\n
        return;\n
      }\n
      const newsBlock = (_anchor$nextElementSi = anchor.nextElementSibling) === null || _anchor$nextElementSi === void 0 ? void 0 : _anchor$nextElementSi.querySelector('article > a[data-blocks]');\n
      if (newsBlock) {\n
        return;\n
      }\n
      for (let i = 5; i >= 1; i -= 1) {\n
        const container = getParent(anchor, i);\n
        if (container && container instanceof Element && (getComputedStyle(container).backgroundColor === 'rgb(239, 245, 255)' || getComputedStyle(container).backgroundColor === 'rgb(243, 244, 247)')) {\n
          hideViaPositionProperty(container);\n
        }\n
      }\n    });\n  };\n  const removeHoroscopeLeftovers = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      return;\n    }\n    const anchors = browser.querySelectorAll('[id^=\"horoscope-main-\"] + div[class] > div > div > [id^=\"hedux-\"]');\n    [...anchors].forEach(anchor => {\n
      const container = getParent(anchor, 6);\n
      hideViaPositionProperty(container);\n    });\n  };\n  const removeKinoLeftovers = () => {\n    const stickyNews = browser.querySelectorAll('[class^=\"comments__right-sticky\"] > [class=\"comments__partners\"]');\n    [...stickyNews].forEach(block => {\n
      hideViaPositionProperty(block);\n    });\n    const headers = browser.querySelectorAll('[class=\"comments__read-also\"], div[data-traffic-blocks] > [class^=\"traffic-blocks--\"]');\n    [...headers].forEach(header => {\n
      hideViaPositionProperty(header);\n    });\n    const mobileBanner = browser.document.getElementById('mobile_top_banner');\n    if (mobileBanner) {\n
      hideViaPositionProperty(mobileBanner.parentNode);\n    }\n  };\n  const removeMobileLeftovers = () => {\n    if (navigator.userAgent.match('Mobile')) {\n
      const blueLeftovers = browser.querySelectorAll('[style=\"min-height: 250px;\"], [style=\"min-height:250px\"]');\n
      [...blueLeftovers].forEach(leftover => {\n
        if (getComputedStyle(leftover).backgroundColor === 'rgb(239, 245, 255)') {\n
          const wrapper = getParent(leftover, 1);\n
          hideViaPositionProperty(wrapper);\n
        }\n
      });\n
      const inArticleLeftovers = browser.querySelectorAll('div:not([class]) > [data-rnet] > [id^=\"rnet_\"][id*=\"finance\"]');\n
      [...inArticleLeftovers].forEach(leftover => {\n
        const wrapper = getParent(leftover, 3);\n
        if (getComputedStyle(wrapper).backgroundColor === 'rgb(239, 245, 255)') {\n
          hideViaPositionProperty(wrapper);\n
        }\n
      });\n    }\n  };\n  observeDomChanges(() => {\n    hideYandexDirectByLink();\n    hideYandexDirectByStyle();\n    removeAdScript();\n    removeAnnoyance();\n    removeLeftovers();\n    removeMobileLeftovers();\n    removeHoroscopeLeftovers();\n    removeKinoLeftovers();\n  });\n}const hideIncognitoBanner = () => {\n  const container = browser.querySelector('body > div[class$=\"-body\"] > div[class][data-role]');\n  const script = container === null || container === void 0 ? void 0 : container.querySelector('div[class] > script');\n  if (container && script && script.innerText.includes('adfox')) {\n    hideViaPositionProperty(container);\n  }\n};\nconst hideTopBanner = () => {\n  const bannerAnchor = document.querySelector('.dv-post-header link[crossorigin=\"anonymous\"][as=\"font\"]');\n  if (!(bannerAnchor !== null && bannerAnchor !== void 0 && bannerAnchor.parentElement)) {\n    return;\n  }\n  hideViaPositionProperty(bannerAnchor.parentElement);\n};\nconst hideAdsContainer = adsContainer => {\n  if (adsContainer && adsContainer.querySelector('div[class] > div[id] > div[class][id]')) {\n    hideViaOpacity(adsContainer);\n  }\n};\nconst hideMidBanner = () => {\n  var _browser$document$que, _browser$document$que2;\n  const dromBlock = browser.document.querySelector('.js-page > div[class] > div[data-target][data-role]');\n  const carsMidBanner1 = dromBlock === null || dromBlock === void 0 ? void 0 : dromBlock.previousElementSibling;\n  hideAdsContainer(carsMidBanner1);\n  const carsMidBanner2 = dromBlock === null || dromBlock === void 0 ? void 0 : dromBlock.nextElementSibling;\n  hideAdsContainer(carsMidBanner2);\n  const newsMidBanner = (_browser$document$que = browser.document.querySelector('.js-page > div[class] > .js-gallery')) === null || _browser$document$que === void 0 ? void 0 : _browser$document$que.nextElementSibling;\n  hideAdsContainer(newsMidBanner);\n  const marketMidBanner = (_browser$document$que2 = browser.document.querySelector('.js-page > div[class] > .offer')) === null || _browser$document$que2 === void 0 ? void 0 : _browser$document$que2.nextElementSibling;\n  hideAdsContainer(marketMidBanner);\n  const journalMidBanner = browser.document.querySelector('.js-page > div[class] > div[itemtype$=\"BlogPosting\"] + div[class]');\n  hideAdsContainer(journalMidBanner);\n};\nconst hideBottomBanner = () => {\n  const experienceBanner = browser.querySelector('.js-page > div > [class*=\"column-mid\"] > div:last-child');\n  if (experienceBanner && experienceBanner !== null && experienceBanner !== void 0 && experienceBanner.previousElementSibling.querySelector('.c-pager__link')) {\n    hideViaPositionProperty(experienceBanner);\n  }\n};\nconst hideRightSticky = () => {\n  const adFrames = browser.querySelectorAll(`\n
        div[style*=\"width\"][style*=\"height\"] > div[style*=\"width\"][style*=\"height\"] iframe,\n
        iframe[allowfullscreen][style*=\"block\"][width=\"300px\"][height=\"500px\"],\n
        iframe[allowfullscreen][style*=\"block\"][width=\"300px\"][height=\"300px\"],\n
        iframe[allowfullscreen][style*=\"block\"][width=\"300px\"][height=\"290px\"],\n
        iframe[allowfullscreen][style*=\"block\"][width=\"100%\"]\n    `);\n  [...adFrames].forEach(adFrame => {\n    const container = getParent(adFrame, 3);\n    if (getComputedStyle(container).width !== '960px') {\n
      removeNode(container);\n    }\n  });\n};\nconst hideinFeedStickyAd = () => {\n  const rightColumn = browser.querySelector('.js-page > div > div.g-column-mid + div');\n  if (!rightColumn) {\n    return;\n  }\n  const ad = rightColumn.lastElementChild;\n  const {\n    top\n  } = getComputedStyle(ad);\n  if (top === '70px' || top === '-9999px') {\n    removeNode(ad);\n  }\n};\nconst hideContentBanner = () => {\n  var _carForm$parentNode;\n  const carForm = browser.document.querySelector('.c-exp-cols > .c-exp-form');\n  const adsContainer = carForm === null || carForm === void 0 ? void 0 : (_carForm$parentNode = carForm.parentNode) === null || _carForm$parentNode === void 0 ? void 0 : _carForm$parentNode.lastElementChild;\n  hideAdsContainer(adsContainer);\n};\nconst hideCommentSectionStickyAd = () => {\n  const commentSectionAnchor = browser.querySelector('[id=\"comments\"]');\n  if (!commentSectionAnchor) {\n    return;\n  }\n  for (let i = 1; i < 5; i += 1) {\n    const parent = getParent(commentSectionAnchor, i);\n    const sibling = parent === null || parent === void 0 ? void 0 : parent.nextElementSibling;\n    if (sibling && getComputedStyle(sibling).width === '300px') {\n
      hideViaPositionProperty(sibling);\n
      break;\n    }\n  }\n};\nconst hideMobileTopAd = () => {\n  const postContainer = browser.querySelector('[data-role=\"post\"]');\n  if (!postContainer) {\n    return;\n  }\n  const children = postContainer.childNodes;\n  [...children].forEach(child => {\n    var _child$previousElemen, _child$nextElementSib;\n    const prevClassNames = (_child$previousElemen = child.previousElementSibling) === null || _child$previousElemen === void 0 ? void 0 : _child$previousElemen.classList;\n    const nextClassNames = (_child$nextElementSib = child.nextElementSibling) === null || _child$nextElementSib === void 0 ? void 0 : _child$nextElementSib.classList;\n    if (!prevClassNames || !nextClassNames) {\n
      return;\n    }\n    if (prevClassNames.contains('o-group') && nextClassNames.contains('c-post__body')) {\n
      hideViaPositionProperty(child);\n    }\n  });\n};\nconst hideMobileMiddleAd = () => {\n  const banner = browser.querySelector('[itemprop=\"articleBody\"] > div:not([class*=\"post__pic\"])');\n  if (!banner) {\n    return;\n  }\n  if (banner.querySelector('link[crossorigin=\"anonymous\"][as=\"font\"]')) {\n    hideViaPositionProperty(banner);\n  }\n};\nconst hideMobileLowerAds = () => {\n  const midContainer = browser.querySelector('body > main');\n  if (!midContainer) {\n    return;\n  }\n  const children = midContainer.childNodes;\n  [...children].forEach(child => {\n    if (child.nodeName !== 'DIV') {\n
      return;\n    }\n    if (getComputedStyle(child)['z-index'] === '1' && getComputedStyle(child)['line-height'] === '0px') {\n
      hideViaPositionProperty(child);\n    }\n  });\n};\nconst hideLeftovers = () => {\n  var _socContainer$classLi;\n  const socPanel = browser.querySelector('.x-box .c-share');\n  const socContainer = getParent(socPanel, 2);\n  if (socPanel && socContainer !== null && socContainer !== void 0 && (_socContainer$classLi = socContainer.classList) !== null && _socContainer$classLi !== void 0 && _socContainer$classLi.contains('x-box')) {\n    removeNode(socContainer);\n  }\n};\nif (isMatchingHostnames('drive2.ru', 'drive2.com')) {\n  const xhrFilter = request => {\n    if (request.responseURL.match(/drive2.ru\\/.{1,50}\\/*/) && request.withCredentials === true) {\n
      return true;\n    }\n    if (request.responseURL.includes('partner-code-bundles')) {\n
      return true;\n    }\n    if (request.responseURL.includes('adfox')) {\n
      return true;\n    }\n    return false;\n  };\n  preventXHR(xhrFilter);\n  observeDomChanges(() => {\n    hideIncognitoBanner();\n    hideTopBanner();\n    hideMidBanner();\n    hideBottomBanner();\n    hideinFeedStickyAd();\n    hideContentBanner();\n    hideCommentSectionStickyAd();\n    hideLeftovers();\n    if (!navigator.userAgent.match('Mobile')) {\n
      hideRightSticky();\n    }\n    if (navigator.userAgent.match('Mobile')) {\n
      hideMobileTopAd();\n
      hideMobileMiddleAd();\n
      hideMobileLowerAds();\n    }\n  });\n}if (isMatchingHostnames('eda.ru')) {\n  const areEqual = function areEqual() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n
      args[_key] = arguments[_key];\n    }\n    for (let i = 1; i < args.length; i += 1) {\n
      if (args[i] === null || args[i] !== args[i - 1]) {\n
        return false;\n
      }\n    }\n    return true;\n  };\n  const hideTopBanner = () => {\n    try {\n
      const body = browser.document.querySelector('body');\n
      const bodyChildren = [...body.children];\n
      const pageWrapper = browser.document.querySelector('header').parentNode;\n
      const pageWrapperIndex = bodyChildren.indexOf(pageWrapper);\n
      if (pageWrapperIndex === -1) {\n
        return;\n
      }\n
      const elementsBeforePageWrapper = bodyChildren.slice(0, pageWrapperIndex);\n
      let lastScriptIndex;\n
      elementsBeforePageWrapper.forEach((element, index) => {\n
        if (element.tagName === 'SCRIPT') {\n
          lastScriptIndex = index;\n
        }\n
      });\n
      if (lastScriptIndex === 'undefined') {\n
        return;\n
      }\n
      for (let i = lastScriptIndex + 1; i < pageWrapperIndex; i += 1) {\n
        hideViaDisplayProperty(elementsBeforePageWrapper[i]);\n
      }\n    } catch (_unused) {}\n  };\n  const hideFooterAds = () => {\n    try {\n
      const footerAds = browser.document.querySelector('#superfooter').previousSibling;\n
      if (footerAds.children.length === 3 && areEqual(footerAds.children[0].attributes[0].textContent, footerAds.children[1].attributes[0].textContent, footerAds.children[2].attributes[0].textContent)) {\n
        hideViaDisplayProperty(footerAds);\n
      }\n    } catch (_unused2) {}\n  };\n  observeDomChanges(() => {\n    hideTopBanner();\n    hideFooterAds();\n  });\n}const hideHeaderBanner$1 = () => {\n  var _adsContainer$firstEl;\n  const header = browser.document.querySelector('header');\n  const adsContainer = header === null || header === void 0 ? void 0 : header.previousElementSibling;\n  if (!adsContainer) {\n    return;\n  }\n  const ignoredNodeTypes = ['DIV', 'SCRIPT', 'STYLE'];\n  if (ignoredNodeTypes.some(nodeType => adsContainer.nodeName === nodeType)) {\n    return;\n  }\n  if ((_adsContainer$firstEl = adsContainer.firstElementChild) !== null && _adsContainer$firstEl !== void 0 && _adsContainer$firstEl.className) {\n    removeNode(adsContainer);\n  }\n};\nconst hideSidebarAds$2 = () => {\n  const layoutSidebar = browser.querySelector('.LayoutSidebar');\n  if (layoutSidebar) {\n    [...layoutSidebar.children].forEach(child => {\n
      if (child.className !== 'LayoutSidebar__content') {\n
        hideViaPositionProperty(child.firstElementChild);\n
      }\n    });\n  }\n  const scrollableSidebar = browser.querySelector('.ScrollableSidebar');\n  const hidingWrapper = scrollableSidebar === null || scrollableSidebar === void 0 ? void 0 : scrollableSidebar.firstChild;\n  if (hidingWrapper) {\n    [...hidingWrapper.children].forEach(child => {\n
      const {\n
        nodeName\n
      } = child;\n
      if (nodeName.includes('RTB') || nodeName.includes('ADFOX')) {\n
        hideViaPositionProperty(child);\n
      }\n    });\n  }\n};\nconst hideFilterBanner = () => {\n  const priceRange = browser.document.querySelector('#priceRange');\n  if (!priceRange) {\n    return;\n  }\n  const filterBanner = priceRange.nextElementSibling;\n  if (filterBanner && !filterBanner.className) {\n    hideViaPositionProperty(filterBanner);\n  }\n};\nconst hideMiniBanner = () => {\n  var _miniBannerLink$paren, _miniBannerLink$paren2;\n  const miniBannerLink = browser.document.querySelector('a[target$=\"_blank\"][href^=\"https://an.yandex.ru\"]');\n  if (!miniBannerLink) {\n    return;\n  }\n  const miniBanner = miniBannerLink === null || miniBannerLink === void 0 ? void 0 : (_miniBannerLink$paren = miniBannerLink.parentNode) === null || _miniBannerLink$paren === void 0 ? void 0 : (_miniBannerLink$paren2 = _miniBannerLink$paren.parentNode) === null || _miniBannerLink$paren2 === void 0 ? void 0 : _miniBannerLink$paren2.parentNode;\n  if (miniBanner && getComputedStyle(miniBanner).width === '240px') {\n    hideViaPositionProperty(miniBanner);\n  }\n};\nconst hideYandexDirectByRemoveScript = () => {\n  const adScript = browser.document.getElementsByTagName('script');\n  for (let i = 0; i < adScript.length; i += 1) {\n    const element = adScript[i];\n    if (element && element.innerText.indexOf('onError') > 0 && element.innerText.indexOf('direct') > 0) {\n
      removeNode(element);\n    }\n  }\n};\nconst hideVertisadsBanners = () => {\n  const mainContainer = browser.querySelector('[class$=\"__content\"] > [class$=\"container\"]');\n  const mainNodes = mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.children;\n  if (mainNodes) {\n    [...mainNodes].forEach(node => {\n
      if (node.tagName.includes('ADS-')) {\n
        removeNode(node);\n
      }\n    });\n  }\n  const sideContainer = browser.querySelector('[class$=\"__sidebar\"] > [class$=\"__sidebarStickyContent\"]');\n  const sideNodes = sideContainer === null || sideContainer === void 0 ? void 0 : sideContainer.children;\n  if (sideNodes) {\n    [...sideNodes].forEach(node => {\n
      if (node.tagName.includes('ADS-')) {\n
        removeNode(node);\n
      }\n    });\n  }\n  const brandBanner = browser.querySelector('.Index  > .Index__block > [class$=\"place_brand\"]');\n  if (brandBanner && brandBanner.tagName.includes('ADS-BRAND')) {\n    removeNode(brandBanner);\n  }\n};\nconst XHRfilter = request => {\n  const {\n    responseURL,\n    response\n  } = request;\n  if (responseURL && responseURL.includes('yandex.ru/ads')) {\n    return true;\n  }\n  if (response && response.includes('rtbAuctionInfo')) {\n    return true;\n  }\n  return false;\n};\nif (isMatchingHostnames('media.auto.ru')) {\n  observeDomChanges(() => {\n    hideHeaderBanner$1();\n  });\n}\nif (isMatchingHostnames('auto.ru')) {\n  preventXHR(XHRfilter);\n  observeDomChanges(() => {\n    hideFilterBanner();\n    hideMiniBanner();\n    hideHeaderBanner$1();\n    hideSidebarAds$2();\n    hideYandexDirectByRemoveScript();\n    hideVertisadsBanners();\n  });\n}if (isMatchingHostnames('wp.pl')) {\n  const hideAdsByStylesheet = () => {\n    var _browser$querySelecto, _browser$querySelecto2;\n    const adsSheetRules = (_browser$querySelecto = browser.querySelector('style[data-id=wpcss]')) === null || _browser$querySelecto === void 0 ? void 0 : (_browser$querySelecto2 = _browser$querySelecto.sheet) === null || _browser$querySelecto2 === void 0 ? void 0 : _browser$querySelecto2.cssRules;\n    if (!adsSheetRules) {\n
      return;\n    }\n    [...adsSheetRules].forEach(rule => {\n
      var _rule$style, _rule$style2;\n
      if ((rule === null || rule === void 0 ? void 0 : (_rule$style = rule.style) === null || _rule$style === void 0 ? void 0 : _rule$style.width) === '320px' && (rule === null || rule === void 0 ? void 0 : (_rule$style2 = rule.style) === null || _rule$style2 === void 0 ? void 0 : _rule$style2.height) === '40px') {\n
        hideViaDisplayProperty(rule);\n
      }\n    });\n  };\n  const hidePolecaneAds = () => {\n    browser.querySelectorAll('span').forEach(element => {\n
      if ((element === null || element === void 0 ? void 0 : element.textContent) === 'REKLAMA') {\n
        hideViaDisplayProperty(element === null || element === void 0 ? void 0 : element.parentNode);\n
      }\n    });\n  };\n  observeDomChanges(() => {\n    hidePolecaneAds();\n    hideAdsByStylesheet();\n  });\n}const hideSidebarAds$1 = () => {\n  iterateCSSRules(rule => {\n    if (rule.cssText.includes('{ content: url(\"data:image/jpeg;base64')) {\n
      var _adsImage$parentNode, _adsImage$parentNode$, _adsImage$parentNode$2, _adsImage$parentNode$3;\n
      const adsImage = browser.querySelector(rule.selectorText);\n
      const adsBlock = adsImage === null || adsImage === void 0 ? void 0 : (_adsImage$parentNode = adsImage.parentNode) === null || _adsImage$parentNode === void 0 ? void 0 : (_adsImage$parentNode$ = _adsImage$parentNode.parentNode) === null || _adsImage$parentNode$ === void 0 ? void 0 : (_adsImage$parentNode$2 = _adsImage$parentNode$.parentNode) === null || _adsImage$parentNode$2 === void 0 ? void 0 : (_adsImage$parentNode$3 = _adsImage$parentNode$2.parentNode) === null || _adsImage$parentNode$3 === void 0 ? void 0 : _adsImage$parentNode$3.parentNode;\n
      if (!adsBlock || adsBlock.children.length < 3) {\n
        return;\n
      }\n
      hideViaDisplayProperty(adsBlock);\n    }\n  });\n};\nif (isMatchingHostnames('minigames.mail.ru')) {\n  observeDomChanges(() => {\n    hideSidebarAds$1();\n  });\n}const hideSidebarAds = () => {\n  const spanElements = browser.querySelectorAll('span');\n  [...spanElements].forEach(span => {\n    if (span.innerText === 'PropellerAds') {\n
      var _span$parentNode, _span$parentNode$pare, _span$parentNode$pare2;\n
      const adsBlock = span === null || span === void 0 ? void 0 : (_span$parentNode = span.parentNode) === null || _span$parentNode === void 0 ? void 0 : (_span$parentNode$pare = _span$parentNode.parentNode) === null || _span$parentNode$pare === void 0 ? void 0 : (_span$parentNode$pare2 = _span$parentNode$pare.parentNode) === null || _span$parentNode$pare2 === void 0 ? void 0 : _span$parentNode$pare2.parentNode;\n
      hideViaPositionProperty(adsBlock);\n    }\n  });\n};\nif (isMatchingHostnames('vidstream.online')) {\n  observeDomChanges(() => {\n    hideSidebarAds();\n  });\n}const hideDirectAds = () => {\n  const elementsWithAd = browser.querySelectorAll('header + div > div[class$=\"-direct\"] > div[class], header + div > div[class]');\n  [...elementsWithAd].forEach(elementWithAd => {\n    var _elementWithAd$classL;\n    if ((elementWithAd === null || elementWithAd === void 0 ? void 0 : (_elementWithAd$classL = elementWithAd.classList) === null || _elementWithAd$classL === void 0 ? void 0 : _elementWithAd$classL.length) >= 3\n    && elementWithAd.querySelector('div[style*=\"width: 100%\"]') && !elementWithAd.querySelector('.js-doc-page') && !elementWithAd.querySelector('input[type=\"number\"]')) {\n
      hideViaPositionProperty(elementWithAd);\n    }\n  });\n  const elementsWithAdBottom = browser.querySelectorAll('.js-doc-html > div[class]');\n  [...elementsWithAdBottom].forEach(elementWithAdBottom => {\n    var _elementWithAdBottom$;\n    if ((elementWithAdBottom === null || elementWithAdBottom === void 0 ? void 0 : (_elementWithAdBottom$ = elementWithAdBottom.classList) === null || _elementWithAdBottom$ === void 0 ? void 0 : _elementWithAdBottom$.length) >= 3 && !(elementWithAdBottom !== null && elementWithAdBottom !== void 0 && elementWithAdBottom.className.startsWith('js-doc-page'))) {\n
      hideViaPositionProperty(elementWithAdBottom);\n    }\n  });\n};\nconst hideHeaderBanner = () => {\n  const headerElems = browser.querySelectorAll('div[class^=\"html\"] > div[class^=\"pages_\"] > div');\n  [...headerElems].forEach(elem => {\n    if (elem.classList.length === 3 && getComputedStyle(elem).margin === '0px -10px') {\n
      hideViaPositionProperty(elem);\n    }\n  });\n};\nconst hideMailIframeAds = () => {\n  const banners = browser.querySelectorAll('div[style=\"width: 100%;\"]');\n  [...banners].forEach(banner => {\n    if (!banner.childElementCount) {\n
      hideViaPositionProperty(banner.parentElement);\n    }\n  });\n};\nif (isMatchingHostnames('docviewer.yandex.ru', 'docviewer.yandex.kz', 'docviewer.yandex.by', 'docviewer.yandex.ua', 'docviewer.yandex.md', 'docviewer.yandex.com.tr', 'docviewer.yandex.com.am')) {\n  observeDomChanges(() => {\n    hideDirectAds();\n    hideHeaderBanner();\n    hideMailIframeAds();\n  });\n}const hideLiveDirectByStyle = () => {\n  const styleSheets = browser.document.getElementsByTagName('style');\n  [...styleSheets].forEach(styleSheet => {\n    const rules = [...safeGetStylesheetRules(styleSheet.sheet)];\n    const firstStyleRule = rules[0];\n    if (rules.length > 50 || !firstStyleRule) {\n
      return;\n    }\n    if (firstStyleRule.selectorText && /\\s*\"[.a-z0-9]+\"/.test(firstStyleRule.selectorText)) {\n
      hideViaPositionProperty(firstStyleRule);\n    }\n  });\n};\nconst leftovers = () => {\n  const remainBlocks = browser.querySelectorAll('.cat-widget__card-wrap');\n  [...remainBlocks].forEach(remainBlock => {\n    const leftover = remainBlock.firstElementChild;\n    if (!leftover) {\n
      return;\n    }\n    if (leftover && /ngIf:\\sdirective\\./.test(leftover.innerHTML)) {\n
      hideViaPositionProperty(remainBlock);\n    }\n  });\n};\nif (isMatchingHostnames('livejournal.com')) {\n  observeDomChanges(() => {\n    hideLiveDirectByStyle();\n    leftovers();\n  });\n}\nif (isMatchingHostnames('varlamov.ru', 'lena-miro.ru', 'olegmakarenko.ru', 'periskop.su', 'levik.blog', 'vadimrazumov.ru')) {\n  observeDomChanges(() => {\n    hideLiveDirectByStyle();\n  });\n}const hideOtzovikAds = () => {\n  const nodeElements = browser.querySelectorAll('div[id]');\n  [...nodeElements].forEach(nodeElement => {\n    var _nodeElement$parentNo, _nodeElement$parentNo2, _nodeElement$parentNo3, _nodeElement$previous, _nodeElement$previous2;\n    const adElementTextContent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$parentNo = nodeElement.parentNode) === null || _nodeElement$parentNo === void 0 ? void 0 : (_nodeElement$parentNo2 = _nodeElement$parentNo.previousSibling) === null || _nodeElement$parentNo2 === void 0 ? void 0 : (_nodeElement$parentNo3 = _nodeElement$parentNo2.previousSibling) === null || _nodeElement$parentNo3 === void 0 ? void 0 : _nodeElement$parentNo3.textContent;\n    const adElementTextContentWithoutParent = nodeElement === null || nodeElement === void 0 ? void 0 : (_nodeElement$previous = nodeElement.previousSibling) === null || _nodeElement$previous === void 0 ? void 0 : (_nodeElement$previous2 = _nodeElement$previous.previousSibling) === null || _nodeElement$previous2 === void 0 ? void 0 : _nodeElement$previous2.textContent;\n    const regexAd = /Yandex\\.|\\.RTB|OTZOAD/;\n    if (regexAd.test(adElementTextContent) || regexAd.test(adElementTextContentWithoutParent)) {\n
      hideViaPositionProperty(nodeElement);\n    }\n  });\n};\nif (isMatchingHostnames('otzovik.com')) {\n  observeDomChanges(() => {\n    hideOtzovikAds();\n  });\n}const TEST_PAGE = '/test.html';\nconst NEW_ISSUE_PAGE = '/new_issue.html';\nconst ADGUARD_HOSTNAMES = ['adguard.com', 'adguard.app'\n];\nconst testExtra = () => {\n  const testElement = browser.document.querySelector('.extra-test');\n  hideViaDisplayProperty(testElement);\n};\nif (isMatchingHostnames(...ADGUARD_HOSTNAMES)) {\n  if (browser.location.pathname.endsWith(TEST_PAGE) || browser.location.pathname.endsWith(NEW_ISSUE_PAGE)) {\n    observeDomChanges(() => {\n
      testExtra();\n    });\n  }\n}const changeLinks = () => {\n  const buttons = document.querySelectorAll('.panel-footer > form[action] > button[link]');\n  const forms = document.querySelectorAll('.panel-footer > form[action]');\n  if (buttons.length === forms.length) {\n    for (let a = 0; a < forms.length; a += 1) {\n
      const buttonsAttribute = buttons[a].getAttribute('link');\n
      forms[a].setAttribute('action', buttonsAttribute);\n
      forms[a].setAttribute('target', '_blank');\n    }\n  }\n};\nif (isMatchingHostnames('multiup.org')) {\n  observeDomChanges(() => {\n    changeLinks();\n  });\n}const hideLentaAds = () => {\n  const feedTitles = browser.querySelectorAll('#lentaFeed > tr > td.newshead');\n  for (let i = 0; i < feedTitles.length; i += 1) {\n    const feedTitle = feedTitles[i];\n    const adTopTitle = feedTitle === null || feedTitle === void 0 ? void 0 : feedTitle.parentNode;\n    const adContent = adTopTitle === null || adTopTitle === void 0 ? void 0 : adTopTitle.nextElementSibling;\n    const adBottomTitle = adContent === null || adContent === void 0 ? void 0 : adContent.nextElementSibling;\n    if (feedTitle.querySelector('.rating-short-value') === null) {\n
      hideViaPositionProperty(adTopTitle);\n
      hideViaPositionProperty(adContent);\n
      hideViaPositionProperty(adBottomTitle);\n    }\n  }\n};\nif (isMatchingHostnames('yaplakal.com', 'yap.ru')) {\n  observeDomChanges(() => {\n    hideLentaAds();\n  });\n}if (isMatchingHostnames('pravda.com.ua', 'epravda.com.ua', 'glianec.com', 'ostro.org', 'nashamama.com', 'bilshe.com', 'zdorovia.com.ua', 'i.factor.ua', 'gismeteo.ua', '1777.ru', 'cn.ru', 'finance.i.ua', 'glavcom.ua', 'hvylya.net', 'kp.ua', 'love.i.ua', 'newsone.ua', 'peers.tv', 'radio.i.ua', 'real-vin.com', 'viks.bz', 'vsetv.com', 'gismeteo.ua', 'tv.ua', 'isport.ua', 'eurointegration.com.ua', 'u-news.com.ua', 'strana.ua', '4mama.ua', 'bigmir.net', 'dengi.ua', 'enovosty.com', 'facenews.ua', 'football24.ua', 'gorod.dp.ua', 'inforesist.org', 'kolobok.ua', 'liga.net', 'nnovosti.info', 'smak.ua', 'tochka.net', 'ukr.net', 'nv.ua', 'meteo.ua', 'besplatka.ua', 'lifedon.com.ua', 'zv.zp.ua')) {\n  disableScripts(/ShadowRoot|AdnetAttachScript|zmctrack/);\n}if (isMatchingHostnames('sheee.co.il', 'walla.co.il')) {\n  disableScripts(/function[\\s\\S]*?static[\\s\\S]*?switch/);\n}if (isMatchingHostnames('sinoptik.ua')) {\n  replaceScripts(/e&&\\(o\\(de\\),n\\(e\\)\\)/, '');\n}if (isMatchingHostnames('kakprosto.ru')) {\n  const xhrFilter = request => {\n    if (request !== null && request !== void 0 && request.responseText.includes('isYandexPage')) {\n
      return true;\n    }\n    return false;\n  };\n  const removeLeftovers = () => {\n    const links = browser.querySelectorAll('a[href*=\"advertising\"]');\n    [...links].forEach(element => {\n
      const leftover = element.closest('.block__content');\n
      hideViaPositionProperty(leftover);\n    });\n  };\n  preventXHR(xhrFilter);\n  observeDomChanges(() => {\n    removeLeftovers();\n  });\n}if (isMatchingHostnames('24smi.org')) {\n  blockProperty('ya');\n}if (isMatchingHostnames('youtube.com')) {\n  const skipClick = () => {\n    const skipButton = browser.querySelector('.ytp-ad-skip-button-slot');\n    if (skipButton) {\n
      skipButton.click();\n    }\n  };\n  const rewindAd = () => {\n    const videoAd = browser.querySelector('div.ad-showing');\n    const player = browser.querySelector('video.html5-main-video');\n    if (videoAd && player && player.duration) {\n
      player.currentTime = player.duration;\n
      skipClick();\n    }\n  };\n  observeDomChanges(() => {\n    rewindAd();\n  });\n}if (isMatchingHostnames('echo.msk.ru')) {\n  const xhrFilter = request => {\n    const {\n
      responseURL,\n
      withCredentials\n    } = request;\n    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/adfox|alfasense|securepubads|webvisor|watch|jstracer|static-mon|bidder.criteo/)) {\n
      return true;\n    }\n    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/recostream.go|ad.outstream|rb.infox|kraken.rambler|cdn-plus.roxot-panel|.giraff|nativeroll|an.yandex.ru\\/newscount/)) {\n
      return true;\n    }\n    if (responseURL !== null && responseURL !== void 0 && responseURL.match(/viadata.store|an.yandex.ru\\/meta/)) {\n
      return true;\n    }\n    if (responseURL !== null && responseURL !== void 0 && responseURL.includes('echomsk.static-storage') && withCredentials === true) {\n
      return true;\n    }\n    return false;\n  };\n  const removeNakedAds = () => {\n    const ads = browser.querySelectorAll('div.ad, div[id*=\"adfox\"], div[id^=\"yandex_rtb_\"], div[class^=\"y-dir-\"], a[href^=\"https://relap.io\"]');\n    [...ads].forEach(ad => {\n
      removeNode(ad);\n    });\n  };\n  const removeArticleTeaser = () => {\n    const teaser = browser.querySelector('div[id^=\"under_article\"]');\n    if (teaser && teaser.querySelector('div[id^=\"smi_teaser\"]')) {\n
      removeNode(teaser);\n    }\n  };\n  preventXHR(xhrFilter);\n  observeDomChanges(() => {\n    removeNakedAds();\n    removeArticleTeaser();\n  });\n}if (isMatchingHostnames('soft98.ir')) {\n  const hideHeaderBanner = () => {\n    let headerAd;\n    let navbar;\n    if (navigator.userAgent.match('Mobile')) {\n
      headerAd = browser.querySelector('[id=\"logo_____wrap\"] > div.row > div >  [id*=\"-header\"]');\n
      navbar = browser.querySelector('[id=\"logo_____wrap\"] > div.row > [id*=\"logo\"]');\n    } else {\n
      headerAd = browser.querySelector('[id=\"logo_____wrap\"]');\n
      navbar = browser.querySelector('header#header > div#navbar__wrap');\n    }\n    if (headerAd && navbar) {\n
      headerAd.style.marginTop = `-${getComputedStyle(navbar).height}`;\n    }\n  };\n  const hideMainBlock = () => {\n    const namedContainers = browser.querySelectorAll('body > div.container[id]');\n    [...namedContainers].forEach(container => {\n
      if (container.querySelector('img[src^=\"https://redlini.ga/\"]')) {\n
        hideViaPositionProperty(container);\n
      }\n    });\n  };\n  const hideSidebarAds = () => {\n    const sidebarAd = browser.querySelector('aside#sidebar  > section.card:not([id])');\n    if (sidebarAd && sidebarAd.querySelector('a[onclick*=\"asiatech\"]')) {\n
      removeNode(sidebarAd);\n    }\n  };\n  const hideSidebarSticky = () => {\n    const stickyAd = browser.querySelector('#sidebar > [id*=\"side\"][id$=\"sticky\"]');\n    if (!stickyAd || getComputedStyle(stickyAd).position !== 'sticky') {\n
      return;\n    }\n    hideViaOverlay(stickyAd, 'rgb(232, 232, 232)');\n  };\n  const hideInArticleFrame = () => {\n    const container = browser.querySelector('main#main > div.text-center:not([id])');\n    if (container && container.querySelector('iframe[src*=\"kaprila\"]')) {\n
      hideViaPositionProperty(container);\n    }\n  };\n  const hideForumBanner = () => {\n    const banner = browser.querySelector('center > a > img[oncontextmenu]');\n    hideViaPositionProperty(banner);\n  };\n  observeDomChanges(() => {\n    hideHeaderBanner();\n    hideMainBlock();\n    hideSidebarAds();\n    hideInArticleFrame();\n    hideForumBanner();\n    hideSidebarSticky();\n  });\n}let disabledVideo = null;\nlet originalVolume = 0;\nlet foundAdContainer = false;\nlet foundAdBanner = false;\nlet notifyAdsWatchedReloadNextTime = 0;\nlet twitchMainWorker = null;\nfunction declareOptions(scope) {\n  scope.OPT_MODE_MUTE_BLACK = false;\n  scope.OPT_MODE_VIDEO_SWAP = false;\n  scope.OPT_MODE_LOW_RES = false;\n  scope.OPT_MODE_EMBED = false;\n  scope.OPT_MODE_STRIP_AD_SEGMENTS = true;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED = true;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS = 0;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST = true;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_AND_RELOAD = false;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION = 10000;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS = true;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT = false;\n  scope.OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT_DELAY = 0;\n  scope.OPT_MODE_PROXY_M3U8 = '';\n  scope.OPT_MODE_PROXY_M3U8_OBFUSCATED = false;\n  scope.OPT_MODE_PROXY_M3U8_FULL_URL = false;\n  scope.OPT_MODE_PROXY_M3U8_PARTIAL_URL = false;\n  scope.OPT_VIDEO_SWAP_PLAYER_TYPE = 'embed';\n  scope.OPT_BACKUP_PLAYER_TYPE = 'embed';\n  scope.OPT_REGULAR_PLAYER_TYPE = 'site';\n  scope.OPT_INITIAL_M3U8_ATTEMPTS = 1;\n  scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = '';\n  scope.OPT_ACCESS_TOKEN_TEMPLATE = true;\n  scope.AD_SIGNIFIER = 'stitched-ad';\n  scope.LIVE_SIGNIFIER = ',live';\n  scope.CLIENT_ID = 'kimne78kx3ncx6brgo4mv6wki5h1ko';\n  if (!scope.OPT_ACCESS_TOKEN_PLAYER_TYPE && scope.OPT_MODE_LOW_RES) {\n    scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = 'embed';\n  }\n  if (!scope.OPT_ACCESS_TOKEN_PLAYER_TYPE && scope.OPT_MODE_EMBED) {\n    scope.OPT_ACCESS_TOKEN_PLAYER_TYPE = 'embed';\n  }\n  if (scope.OPT_MODE_PROXY_M3U8 && scope.OPT_MODE_PROXY_M3U8_OBFUSCATED) {\n    let newStr = '';\n    scope.OPT_MODE_PROXY_M3U8 = atob(scope.OPT_MODE_PROXY_M3U8);\n    for (let i = 0; i < scope.OPT_MODE_PROXY_M3U8.length; i += 1) {\n
      newStr += String.fromCharCode(scope.OPT_MODE_PROXY_M3U8.charCodeAt(i) ^ scope.CLIENT_ID.charCodeAt(i % scope.CLIENT_ID.length));\n    }\n    scope.OPT_MODE_PROXY_M3U8 = newStr;\n  }\n  scope.StreamInfos = [];\n  scope.StreamInfosByUrl = [];\n  scope.CurrentChannelNameFromM3U8 = null;\n  scope.gql_device_id = null;\n}\nconst getWasmWorkerUrl = twitchBlobUrl => {\n  const req = new XMLHttpRequest();\n  req.open('GET', twitchBlobUrl, false);\n  req.send();\n  return req.responseText.split(\"'\")[1];\n};\nfunction parseAttributes(str) {\n  return Object.fromEntries(str.split(/(?:^|,)((?:[^=]*)=(?:\"[^\"]*\"|[^,]*))/).filter(Boolean).map(x => {\n    const idx = x.indexOf('=');\n    const key = x.substring(0, idx);\n    const value = x.substring(idx + 1);\n    const num = Number(value);\n    return [key, Number.isNaN(num) ? value.startsWith('\"') ? JSON.parse(value) : value : num];\n  }));\n}\nfunction getFinalSegUrl(lines) {\n  for (let i = lines.length - 1; i >= 0; i -= 1) {\n    if (lines[i].startsWith('http')) {\n
      return lines[i];\n    }\n  }\n  return null;\n}\nfunction gqlRequest(body, realFetch) {\n  const fetchFunc = realFetch || fetch;\n  return fetchFunc('https://gql.twitch.tv/gql', {\n    method: 'POST',\n    body: JSON.stringify(body),\n    headers: {\n
      'client-id': CLIENT_ID,\n
      'X-Device-Id': gql_device_id\n    }\n  });\n}\nfunction makeGraphQlPacket(event, radToken, payload) {\n  return [{\n    operationName: 'ClientSideAdEventHandling_RecordAdEvent',\n    variables: {\n
      input: {\n
        eventName: event,\n
        eventPayload: JSON.stringify(payload),\n
        radToken\n
      }\n    },\n    extensions: {\n
      persistedQuery: {\n
        version: 1,\n
        sha256Hash: '7e6c69e6eb59f8ccb97ab73686f3d8b7d85a72a0298745ccd8bfc68e4054ca5b'\n
      }\n    }\n  }];\n}\nasync function tryNotifyAdsWatchedM3U8(streamM3u8) {\n  if (!streamM3u8.includes(AD_SIGNIFIER)) {\n    return 1;\n  }\n  const matches = streamM3u8.match(/#EXT-X-DATERANGE:(ID=\"stitched-ad-[^\\n]+)\\n/);\n  if (matches.length > 1) {\n    const attrString = matches[1];\n    const attr = parseAttributes(attrString);\n    const podLength = parseInt(attr['X-TV-TWITCH-AD-POD-LENGTH'] ? attr['X-TV-TWITCH-AD-POD-LENGTH'] : '1', 10);\n    const radToken = attr['X-TV-TWITCH-AD-RADS-TOKEN'];\n    const rollType = attr['X-TV-TWITCH-AD-ROLL-TYPE'].toLowerCase();\n    const baseData = {\n
      stitched: true,\n
      roll_type: rollType,\n
      player_mute: false,\n
      player_volume: 0.5,\n
      visible: true\n    };\n    for (let position = 0; position < podLength; position += 1) {\n
      if (OPT_MODE_NOTIFY_ADS_WATCHED_MIN_REQUESTS) {\n
        await gqlRequest(makeGraphQlPacket('video_ad_pod_complete', radToken, baseData));\n
      }\n    }\n  }\n  return 0;\n}\nfunction getAccessToken(channelName, playerType, realFetch) {\n  let body = null;\n  if (OPT_ACCESS_TOKEN_TEMPLATE) {\n    const templateQuery = 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: \"web\", playerBackend: \"mediaplayer\", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: \"web\", playerBackend: \"mediaplayer\", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}';\n    body = {\n
      operationName: 'PlaybackAccessToken_Template',\n
      query: templateQuery,\n
      variables: {\n
        isLive: true,\n
        login: channelName,\n
        isVod: false,\n
        vodID: '',\n
        playerType\n
      }\n    };\n  } else {\n    body = {\n
      operationName: 'PlaybackAccessToken',\n
      variables: {\n
        isLive: true,\n
        login: channelName,\n
        isVod: false,\n
        vodID: '',\n
        playerType\n
      },\n
      extensions: {\n
        persistedQuery: {\n
          version: 1,\n
          sha256Hash: '0828119ded1c13477966434e15800ff57ddacf13ba1911c129dc2200705b0712'\n
        }\n
      }\n    };\n  }\n  return gqlRequest(body, realFetch);\n}\nfunction getSegmentInfosLines(streamInfo, lines) {\n  const result = {\n    segs: [],\n    targetDuration: 0,\n    elapsedSecs: 0,\n    totalSecs: 0,\n    hasPrefetch: false,\n    hasLiveBeforeAd: true\n  };\n  let hasLive = false;\n  for (let i = 0; i < lines.length; i += 1) {\n    const line = lines[i];\n    if (line.startsWith('#EXT-X-TARGETDURATION')) {\n
      result.targetDuration = parseInt(line.split(':')[1], 10);\n    }\n    if (line.startsWith('#EXT-X-TWITCH-ELAPSED-SECS')) {\n
      result.elapsedSecs = line.split(':')[1];\n    }\n    if (line.startsWith('#EXT-X-TWITCH-TOTAL-SECS')) {\n
      result.totalSecs = line.split(':')[1];\n    }\n    if (line.startsWith('#EXT-X-DATERANGE')) {\n
      const attr = parseAttributes(line);\n
      if (attr.CLASS && attr.CLASS.includes('stitched-ad')) {\n
        streamInfo.IsMidroll = attr['X-TV-TWITCH-AD-ROLL-TYPE'] === 'MIDROLL';\n
      }\n    }\n    if (line.startsWith('http')) {\n
      const segInfo = {\n
        urlLineIndex: i,\n
        urlLine: lines[i],\n
        url: lines[i],\n
        isPrefetch: false\n
      };\n
      if (i >= 1 && lines[i - 1].startsWith('#EXTINF')) {\n
        const splitted = lines[i - 1].split(':')[1].split(',');\n
        segInfo.extInfLineIndex = i - 1;\n
        segInfo.extInfLine = lines[i - 1];\n
        segInfo.extInfLen = splitted[0];\n
        segInfo.extInfType = splitted[1].split('|')[0];\n
        segInfo.isAd = segInfo.extInfType !== 'live';\n
        if (segInfo.isAd && !hasLive && result.hasLiveBeforeAd) {\n
          result.hasLiveBeforeAd = false;\n
        }\n
        hasLive = !segInfo.isAd;\n
      } else if (i >= 2 && lines[i - 2].startsWith('#EXT-X-PROGRAM-DATE-TIME')) {\n
        segInfo.dateTimeLineIndex = i - 2;\n
        segInfo.dateTimeLine = lines[i - 2];\n
        segInfo.dateTime = new Date(lines[i - 2].substr(lines[i - 2].indexOf(':')));\n
      }\n
      result.segs.push(segInfo);\n    }\n    if (lines[i].startsWith('#EXT-X-TWITCH-PREFETCH:')) {\n
      const segInfo = {\n
        urlLineIndex: i,\n
        urlLine: lines[i],\n
        url: lines[i].substr(lines[i].indexOf(':') + 1),\n
        isPrefetch: true\n
      };\n
      result.hasPrefetch = true;\n
      result.segs.push(segInfo);\n    }\n  }\n  return result;\n}\nfunction getSegmentInfos(streamInfo, lines, backupLines) {\n  const result = {\n    segs: [],\n    main: getSegmentInfosLines(streamInfo, lines),\n    backup: getSegmentInfosLines(streamInfo, backupLines)\n  };\n  for (let i = 0; i < result.backup.segs.length; i += 1) {\n    const seg = {\n
      backup: result.backup.segs[i]\n    };\n    result.segs.push(seg);\n  }\n  for (let i = result.main.segs.length - 1, j = result.segs.length - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {\n    while (result.main.segs[i].isPrefetch) {\n
      if (result.segs[j].backup.isPrefetch) {\n
        result.segs[j].main = result.main.segs[i];\n
        j -= 1;\n
      }\n
      i -= 1;\n    }\n    if (!result.main.segs[i].isAd) {\n
      result.segs[j].main = result.main.segs[i];\n    } else {\n
      break;\n    }\n  }\n  streamInfo.SegmentCache.length = 0;\n  for (let i = 0; i < result.segs.length; i += 1) {\n    if (result.segs[i].main != null) {\n
      streamInfo.SegmentCache[result.segs[i].main.url] = result.segs[i];\n    }\n    if (result.segs[i].backup != null) {\n
      streamInfo.SegmentCache[result.segs[i].backup.url] = result.segs[i];\n    }\n  }\n  return result;\n}\nasync function processM3U8(url, textStr, realFetch) {\n  const haveAdTags = textStr.includes(AD_SIGNIFIER);\n  if (OPT_MODE_STRIP_AD_SEGMENTS) {\n    const si = StreamInfosByUrl[url];\n    if (si != null) {\n
      const lines = textStr.replace('\\r', '').split('\\n');\n
      for (let i = 0; i < lines.length; i += 1) {\n
        if (lines[i].startsWith('#EXT-X-MEDIA-SEQUENCE:')) {\n
          const oldRealSeq = si.RealSeqNumber;\n
          si.RealSeqNumber = parseInt(/#EXT-X-MEDIA-SEQUENCE:([0-9]*)/.exec(lines[i])[1], 10);\n
          if (!haveAdTags && si.FakeSeqNumber > 0) {\n
            const finalSegUrl = getFinalSegUrl(lines);\n
            if (finalSegUrl !== si.FinalSegUrl) {\n
              si.FinalSegUrl = finalSegUrl;\n
              const jump = Math.max(0, si.RealSeqNumber - oldRealSeq);\n
              if (jump <= 3) {\n
                si.FakeSeqNumber += Math.max(0, si.RealSeqNumber - oldRealSeq);\n
              } else if (jump > 0) {\n
                si.FakeSeqNumber += 1;\n
              }\n
            }\n
            lines[i] = `#EXT-X-MEDIA-SEQUENCE:${si.FakeSeqNumber}`;\n
            console.debug(`No ad, but modifying sequence realSeq:${si.RealSeqNumber} fakeSeq:${si.FakeSeqNumber}`);\n
          }\n
          break;\n
        }\n
      }\n
      textStr = lines.join('\\n');\n    }\n  }\n  if (haveAdTags) {\n    const si = StreamInfosByUrl[url];\n    if (OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST && si != null && !si.NotifyObservedNoAds) {\n
      let noAds = false;\n
      const encodingsM3u8Response = await realFetch(si.RootM3U8Url);\n
      if (encodingsM3u8Response.status === 200) {\n
        const encodingsM3u8 = await encodingsM3u8Response.text();\n
        const streamM3u8Url = encodingsM3u8.match(/^https:.*\\.m3u8$/m)[0];\n
        const streamM3u8Response = await realFetch(streamM3u8Url);\n
        if (streamM3u8Response.status === 200) {\n
          noAds = (await tryNotifyAdsWatchedM3U8(await streamM3u8Response.text())) === 1;\n
          console.debug(`Notify ad watched. Response has ads: ${!noAds}`);\n
        }\n
      }\n
      if (si.NotifyFirstTime === 0) {\n
        si.NotifyFirstTime = Date.now();\n
      }\n
      if (noAds && !si.NotifyObservedNoAds && Date.now() >= si.NotifyFirstTime + OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION) {\n
        si.NotifyObservedNoAds = true;\n
      }\n
      if (noAds && OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_AND_RELOAD && Date.now() >= si.NotifyFirstTime + OPT_MODE_NOTIFY_ADS_WATCHED_PERSIST_EXPECTED_DURATION) {\n
        console.debug('Reload player');\n
        postMessage({\n
          key: 'hideAdBanner'\n
        });\n
        postMessage({\n
          key: 'reloadPlayer'\n
        });\n
        return '';\n
      }\n    }\n    postMessage({\n
      key: 'foundAdSegment',\n
      hasLiveSeg: textStr.includes(LIVE_SIGNIFIER),\n
      streamM3u8: textStr\n    });\n  }\n  if (!OPT_MODE_STRIP_AD_SEGMENTS) {\n    return textStr;\n  }\n  if (haveAdTags) {\n    const streamInfo = StreamInfosByUrl[url];\n    if (streamInfo === null) {\n
      console.debug(`Unknown stream url ${url}`);\n
      postMessage({\n
        key: 'hideAdBanner'\n
      });\n
      return textStr;\n    }\n    if (!streamInfo.BackupFailed && streamInfo.BackupUrl === null) {\n
      streamInfo.BackupFailed = true;\n
      const accessTokenResponse = await getAccessToken(streamInfo.ChannelName, OPT_BACKUP_PLAYER_TYPE);\n
      if (accessTokenResponse.status === 200) {\n
        const accessToken = await accessTokenResponse.json();\n
        const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${streamInfo.ChannelName}.m3u8${streamInfo.RootM3U8Params}`);\n
        urlInfo.searchParams.set('sig', accessToken.data.streamPlaybackAccessToken.signature);\n
        urlInfo.searchParams.set('token', accessToken.data.streamPlaybackAccessToken.value);\n
        const encodingsM3u8Response = await realFetch(urlInfo.href);\n
        if (encodingsM3u8Response.status === 200) {\n
          const encodingsM3u8 = await encodingsM3u8Response.text();\n
          const streamM3u8Url = encodingsM3u8.match(/^https:.*\\.m3u8$/m)[0];\n
          const streamM3u8Response = await realFetch(streamM3u8Url);\n
          if (streamM3u8Response.status === 200) {\n
            streamInfo.BackupFailed = false;\n
            streamInfo.BackupUrl = streamM3u8Url;\n
            console.debug(`Fetched backup url: ${streamInfo.BackupUrl}`);\n
          } else {\n
            console.debug(`Backup url request (streamM3u8) failed with ${streamM3u8Response.status}`);\n
          }\n
        } else {\n
          console.debug(`Backup url request (encodingsM3u8) failed with ${encodingsM3u8Response.status}`);\n
        }\n
      } else {\n
        console.debug(`Backup url request (accessToken) failed with ${accessTokenResponse.status}`);\n
      }\n    }\n    let backupM3u8 = null;\n    if (streamInfo.BackupUrl != null) {\n
      const backupM3u8Response = await realFetch(streamInfo.BackupUrl);\n
      if (backupM3u8Response.status === 200) {\n
        backupM3u8 = await backupM3u8Response.text();\n
      } else {\n
        console.debug(`Backup m3u8 failed with ${backupM3u8Response.status}`);\n
      }\n    }\n    const lines = textStr.replace('\\r', '').split('\\n');\n    const newLines = [];\n    if (backupM3u8 != null) {\n
      const backupLines = backupM3u8.replace('\\r', '').split('\\n');\n
      const segInfos = getSegmentInfos(streamInfo, lines, backupLines);\n
      newLines.push('#EXTM3U');\n
      newLines.push('#EXT-X-VERSION:3');\n
      newLines.push(`#EXT-X-TARGETDURATION:${segInfos.backup.targetDuration}`);\n
      newLines.push('');\n
      let pushedLiveSegs = 0;\n
      let pushedBackupSegs = 0;\n
      let pushedPrefetchSegs = 0;\n
      for (let i = 0; i < segInfos.segs.length; i += 1) {\n
        const seg = segInfos.segs[i];\n
        let segData = null;\n
        if (seg.main != null && !seg.main.isAd) {\n
          pushedLiveSegs += 1;\n
          segData = seg.main;\n
        } else if (seg.backup != null) {\n
          pushedBackupSegs += 1;\n
          segData = seg.backup;\n
        }\n
        if (segData != null) {\n
          if (segData.isPrefetch) {\n
            pushedPrefetchSegs += 1;\n
            newLines.push(segData.urlLine);\n
          } else {\n
            newLines.push(segData.extInfLine);\n
            newLines.push(segData.urlLine);\n
          }\n
        }\n
      }\n
      const finalSegUrl = getFinalSegUrl(newLines);\n
      if (finalSegUrl !== streamInfo.FinalSegUrl) {\n
        streamInfo.FinalSegUrl = finalSegUrl;\n
        streamInfo.FakeSeqNumber += 1;\n
      }\n
      newLines[3] = `#EXT-X-MEDIA-SEQUENCE:${streamInfo.FakeSeqNumber}`;\n
      if (pushedLiveSegs > 0 || pushedBackupSegs > 0) {\n
        console.debug(`liveSegs:${pushedLiveSegs} backupSegs:${pushedBackupSegs} prefetch:${pushedPrefetchSegs} realSeq:${streamInfo.RealSeqNumber} fakeSeq:${streamInfo.FakeSeqNumber}`);\n
      } else {\n
        console.debug('TODO: If theres no backup data then we need to provide our own .ts file, otherwise the player will spam m3u8 requests (denial-of-service)');\n
      }\n    }\n    textStr = newLines.length > 0 ? newLines.join('\\n') : lines.join('\\n');\n  }\n  return textStr;\n}\nfunction hookWorkerFetch() {\n  const realFetch = fetch;\n  fetch = async function fetch(url, options) {\n    if (typeof url === 'string') {\n
      if (OPT_MODE_STRIP_AD_SEGMENTS && url.endsWith('.ts')) {\n
        let shownAdBanner = false;\n
        for (const [channelName, streamInfo] of Object.entries(StreamInfos)) {\n
          const seg = streamInfo.SegmentCache[url];\n
          if (seg && !seg.isPrefetch) {\n
            if (seg.main === null && seg.backup != null) {\n
              shownAdBanner = true;\n
              postMessage({\n
                key: 'showAdBanner',\n
                isMidroll: streamInfo.IsMidroll\n
              });\n
            }\n
            break;\n
          }\n
        }\n
        if (!shownAdBanner) {\n
          postMessage({\n
            key: 'hideAdBanner'\n
          });\n
        }\n
      }\n
      if (url.endsWith('m3u8')) {\n
        return new Promise((resolve, reject) => {\n
          const processAfter = async function processAfter(response) {\n
            const str = await processM3U8(url, await response.text(), realFetch);\n
            resolve(new Response(str));\n
          };\n
          const send = function send() {\n
            return realFetch(url, options).then(response => {\n
              processAfter(response);\n
            }).catch(err => {\n
              console.debug(`fetch hook err ${err}`);\n
              reject(err);\n
            });\n
          };\n
          send();\n
        });\n
      }\n
      if (url.includes('/api/channel/hls/') && !url.includes('picture-by-picture')) {\n
        const channelName = new URL(url).pathname.match(/([^/]+)(?=\\.\\w+$)/)[0];\n
        if (CurrentChannelNameFromM3U8 !== channelName) {\n
          postMessage({\n
            key: 'channelNameM3U8Changed',\n
            value: channelName\n
          });\n
        }\n
        CurrentChannelNameFromM3U8 = channelName;\n
        if (OPT_MODE_PROXY_M3U8) {\n
          if (OPT_MODE_PROXY_M3U8_FULL_URL || OPT_MODE_PROXY_M3U8_PARTIAL_URL) {\n
            if (OPT_MODE_PROXY_M3U8_FULL_URL) {\n
              url = OPT_MODE_PROXY_M3U8 + url;\n
            } else {\n
              url = OPT_MODE_PROXY_M3U8 + url.split('.m3u8')[0];\n
            }\n
            if (!OPT_MODE_PROXY_M3U8_OBFUSCATED) {\n
              console.debug(`proxy-m3u8: ${url}`);\n
            }\n
            const opt2 = {};\n
            opt2.headers = [];\n
            opt2.headers['Access-Control-Allow-Origin'] = '*';\n
            return realFetch(url, opt2);\n
          }\n
          url = OPT_MODE_PROXY_M3U8 + channelName;\n
          console.debug(`proxy-m3u8: ${url}`);\n
        } else if (OPT_MODE_STRIP_AD_SEGMENTS) {\n
          return new Promise(async resolve => {\n
            const maxAttempts = OPT_INITIAL_M3U8_ATTEMPTS <= 0 ? 1 : OPT_INITIAL_M3U8_ATTEMPTS;\n
            let attempts = 0;\n
            while (true) {\n
              const encodingsM3u8Response = await realFetch(url, options);\n
              if (encodingsM3u8Response.status === 200) {\n
                const encodingsM3u8 = await encodingsM3u8Response.text();\n
                const streamM3u8Url = encodingsM3u8.match(/^https:.*\\.m3u8$/m)[0];\n
                const streamM3u8Response = await realFetch(streamM3u8Url);\n
                const streamM3u8 = await streamM3u8Response.text();\n
                if (!streamM3u8.includes(AD_SIGNIFIER) || ++attempts >= maxAttempts) {\n
                  if (maxAttempts > 1 && attempts >= maxAttempts) {\n
                    console.debug(`max skip ad attempts reached (attempt #${attempts})`);\n
                  }\n
                  let streamInfo = StreamInfos[channelName];\n
                  if (!streamInfo) {\n
                    StreamInfos[channelName] = streamInfo = {};\n
                  }\n
                  streamInfo.ChannelName = channelName;\n
                  streamInfo.Urls = [];\n
                  streamInfo.RootM3U8Url = url;\n
                  streamInfo.RootM3U8Params = new URL(url).search;\n
                  streamInfo.BackupUrl = null;\n
                  streamInfo.BackupFailed = false;\n
                  streamInfo.SegmentCache = [];\n
                  streamInfo.IsMidroll = false;\n
                  streamInfo.NotifyFirstTime = 0;\n
                  streamInfo.NotifyObservedNoAds = false;\n
                  streamInfo.RealSeqNumber = -1;\n
                  streamInfo.BackupSeqNumber = -1;\n
                  streamInfo.FakeSeqNumber = 0;\n
                  streamInfo.FinalSegUrl = null;\n
                  const lines = encodingsM3u8.replace('\\r', '').split('\\n');\n
                  for (let i = 0; i < lines.length; i += 1) {\n
                    if (!lines[i].startsWith('#') && lines[i].includes('.m3u8')) {\n
                      streamInfo.Urls.push(lines[i]);\n
                      StreamInfosByUrl[lines[i]] = streamInfo;\n
                    }\n
                  }\n
                  resolve(new Response(encodingsM3u8));\n
                  break;\n
                }\n
                console.debug(`attempt to skip ad (attempt #${attempts})`);\n
              } else {\n
                resolve(encodingsM3u8Response);\n
                break;\n
              }\n
            }\n
          });\n
        }\n
      }\n    }\n    return realFetch.apply(this, arguments);\n  };\n}\nconst tryNotifyAdsWatchedSigTok = async (realFetch, i, sig, token) => {\n  const tokInfo = JSON.parse(token);\n  const channelName = tokInfo.channel;\n  const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${channelName}.m3u8`);\n  urlInfo.searchParams.set('sig', sig);\n  urlInfo.searchParams.set('token', token);\n  const encodingsM3u8Response = await realFetch(urlInfo.href);\n  if (encodingsM3u8Response.status === 200) {\n    const encodingsM3u8 = await encodingsM3u8Response.text();\n    const streamM3u8Url = encodingsM3u8.match(/^https:.*\\.m3u8$/m)[0];\n    const streamM3u8Response = await realFetch(streamM3u8Url);\n    const streamM3u8 = await streamM3u8Response.text();\n    const res = await tryNotifyAdsWatchedM3U8(streamM3u8);\n    if (i >= 0) {\n
      if (res === 1) {\n
        console.debug(`no ad at req ${i}`);\n
      } else {\n
        console.debug(`ad at req ${i}`);\n
      }\n    }\n    return res;\n  }\n  return 2;\n};\nconst hookFetch = () => {\n  const realFetch = browser.window.fetch;\n  browser.window.fetch = function (url, init) {\n    if (typeof url === 'string') {\n
      if (url.includes('/access_token') || url.includes('gql')) {\n
        if (OPT_ACCESS_TOKEN_PLAYER_TYPE) {\n
          if (url.includes('gql') && init && typeof init.body === 'string' && init.body.includes('PlaybackAccessToken')) {\n
            const newBody = JSON.parse(init.body);\n
            newBody.variables.playerType = OPT_ACCESS_TOKEN_PLAYER_TYPE;\n
            init.body = JSON.stringify(newBody);\n
          }\n
        }\n
        let deviceId = init.headers['X-Device-Id'];\n
        if (typeof deviceId !== 'string') {\n
          deviceId = init.headers['Device-ID'];\n
        }\n
        if (typeof deviceId === 'string') {\n
          gql_device_id = deviceId;\n
        }\n
        if (gql_device_id && twitchMainWorker) {\n
          twitchMainWorker.postMessage({\n
            key: 'updateDeviceId',\n
            value: gql_device_id\n
          });\n
        }\n
        if (OPT_MODE_NOTIFY_ADS_WATCHED && OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS > 0) {\n
          if (url.includes('gql') && init && typeof init.body === 'string' && init.body.includes('PlaybackAccessToken')) {\n
            return new Promise(async resolve => {\n
              const response = await realFetch(url, init);\n
              if (response.status === 200) {\n
                for (let i = 0; i < OPT_MODE_NOTIFY_ADS_WATCHED_INITIAL_ATTEMPTS; i += 1) {\n
                  const cloned = response.clone();\n
                  const responseStr = await cloned.text();\n
                  const responseData = JSON.parse(responseStr);\n
                  if (responseData && responseData.data && responseData.data.streamPlaybackAccessToken && responseData.data.streamPlaybackAccessToken.value && responseData.data.streamPlaybackAccessToken.signature) {\n
                    if ((await tryNotifyAdsWatchedSigTok(realFetch, i, responseData.data.streamPlaybackAccessToken.signature, responseData.data.streamPlaybackAccessToken.value)) === 1) {\n
                      resolve(new Response(responseStr));\n
                      return;\n
                    }\n
                  } else {\n
                    console.debug('malformed');\n
                    console.debug(responseData);\n
                    break;\n
                  }\n
                }\n
              }\n
              resolve(response);\n
            });\n
          }\n
        }\n
      }\n    }\n    return realFetch.apply(this, arguments);\n  };\n};\nconst reloadTwitchPlayer = isPausePlay => {\n  const findReactNode = (root, constraint) => {\n    if (root.stateNode && constraint(root.stateNode)) {\n
      return root.stateNode;\n    }\n    let node = root.child;\n    while (node) {\n
      const result = findReactNode(node, constraint);\n
      if (result) {\n
        return result;\n
      }\n
      node = node.sibling;\n    }\n    return null;\n  };\n  let reactRootNode = null;\n  const rootNode = document.querySelector('#root');\n  if (rootNode && rootNode._reactRootContainer && rootNode._reactRootContainer._internalRoot && rootNode._reactRootContainer._internalRoot.current) {\n    reactRootNode = rootNode._reactRootContainer._internalRoot.current;\n  }\n  if (!reactRootNode) {\n    console.debug('Could not find react root');\n    return;\n  }\n  let player = findReactNode(reactRootNode, node => node.setPlayerActive && node.props && node.props.mediaPlayerInstance);\n  player = player && player.props && player.props.mediaPlayerInstance ? player.props.mediaPlayerInstance : null;\n  const playerState = findReactNode(reactRootNode, node => node.setSrc && node.setInitialPlaybackSettings);\n  if (!player) {\n    console.debug('Could not find player');\n    return;\n  }\n  if (!playerState) {\n    console.debug('Could not find player state');\n    return;\n  }\n  if (player.paused) {\n    return;\n  }\n  if (isPausePlay) {\n    player.pause();\n    player.play();\n    return;\n  }\n  const sink = player.mediaSinkManager || (player.core ? player.core.mediaSinkManager : null);\n  if (sink && sink.video && sink.video._ffz_compressor) {\n    const {\n
      video\n    } = sink;\n    const volume = video.volume ? video.volume : player.getVolume();\n    const muted = player.isMuted();\n    const newVideo = document.createElement('video');\n    newVideo.volume = muted ? 0 : volume;\n    newVideo.playsInline = true;\n    video.replaceWith(newVideo);\n    player.attachHTMLVideoElement(newVideo);\n    setImmediate(() => {\n
      player.setVolume(volume);\n
      player.setMuted(muted);\n    });\n  }\n  playerState.setSrc({\n    isNewMediaPlayerInstance: true,\n    refreshAccessToken: true\n  });\n};\nconst onFoundAd = (hasLiveSeg, streamM3u8) => {\n  if (OPT_MODE_NOTIFY_ADS_WATCHED && OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT && Date.now() >= notifyAdsWatchedReloadNextTime) {\n    console.debug('OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT');\n    notifyAdsWatchedReloadNextTime = Date.now() + OPT_MODE_NOTIFY_ADS_WATCHED_RELOAD_PLAYER_ON_AD_SEGMENT_DELAY;\n    if (streamM3u8) {\n
      tryNotifyAdsWatchedM3U8(streamM3u8);\n    }\n    reloadTwitchPlayer();\n    return;\n  }\n  if (hasLiveSeg || !OPT_MODE_MUTE_BLACK && !OPT_MODE_VIDEO_SWAP || OPT_MODE_VIDEO_SWAP && typeof Hls === 'undefined') {\n    return;\n  }\n  if (!foundAdContainer) {\n    const adContainers = document.querySelectorAll('[data-test-selector=\"sad-overlay\"]');\n    for (let i = 0; i < adContainers.length; i += 1) {\n
      adContainers[i].style.display = 'none';\n    }\n    foundAdContainer = adContainers.length > 0;\n  }\n  if (disabledVideo) {\n    disabledVideo.volume = 0;\n  } else {\n    let liveVid = document.getElementsByTagName('video');\n    if (liveVid.length) {\n
      [disabledVideo] = liveVid;\n
      [liveVid] = liveVid;\n
      if (!disabledVideo) {\n
        return;\n
      }\n
      originalVolume = liveVid.volume;\n
      liveVid.volume = 0;\n
      liveVid.style.filter = 'brightness(0%)';\n
      if (OPT_MODE_VIDEO_SWAP) {\n
        const createTempStream = async () => {\n
          const channelName = window.location.pathname.substr(1);\n
          const accessTokenResponse = await getAccessToken(channelName, OPT_VIDEO_SWAP_PLAYER_TYPE);\n
          if (accessTokenResponse.status === 200) {\n
            const accessToken = await accessTokenResponse.json();\n
            const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${channelName}.m3u8?allow_source=true`);\n
            urlInfo.searchParams.set('sig', accessToken.data.streamPlaybackAccessToken.signature);\n
            urlInfo.searchParams.set('token', accessToken.data.streamPlaybackAccessToken.value);\n
          } else {\n
            console.debug(`Backup url request (accessToken) failed with ${accessTokenResponse.status}`);\n
          }\n
        };\n
        createTempStream();\n
      }\n    }\n  }\n};\nconst pollForAds = () => {\n  const adBanner = document.querySelectorAll('span.tw-c-text-overlay');\n  let foundAd = false;\n  for (let i = 0; i < adBanner.length; i += 1) {\n    if (adBanner[i].attributes['data-test-selector']) {\n
      foundAd = true;\n
      foundAdBanner = true;\n
      break;\n    }\n  }\n  if (foundAd) {\n    onFoundAd(false);\n  } else if (foundAdBanner && disabledVideo) {\n    disabledVideo.volume = originalVolume;\n    disabledVideo.style.filter = '';\n    disabledVideo = null;\n    foundAdContainer = false;\n    foundAdBanner = false;\n  }\n};\nconst pollForAdsObserver = () => {\n  pollForAds();\n  const vids = document.getElementsByClassName('video-player');\n  for (let i = 0; i < vids.length; i += 1) {\n    const observer = new MutationObserver(pollForAds);\n    observer.observe(vids[i], {\n
      childList: true,\n
      subtree: true,\n
      attributes: false,\n
      characterData: false\n    });\n  }\n};\nconst onContentLoaded = () => {\n  if (!OPT_MODE_VIDEO_SWAP && !OPT_MODE_MUTE_BLACK) {\n    return;\n  }\n  pollForAdsObserver();\n};\nconst isWorkerIntact = () => {\n  const iframe = browser.window.document.createElement('iframe');\n  browser.window.document.body.append(iframe);\n  const cleanWindow = iframe.contentWindow;\n  if (cleanWindow.Worker.toString() === browser.window.Worker.toString()) {\n    iframe.remove();\n    return true;\n  }\n  iframe.remove();\n  return false;\n};\nif (isMatchingHostnames('twitch.tv')) {\n  browser.window.addEventListener('DOMContentLoaded', () => {\n    if (!isWorkerIntact()) {\n
      return;\n    }\n    declareOptions(browser.window);\n    const oldWorker = browser.window.Worker;\n    browser.window.Worker = class Worker extends oldWorker {\n
      constructor(twitchBlobUrl) {\n
        if (twitchMainWorker) {\n
          super(twitchBlobUrl);\n
          return;\n
        }\n
        let jsURL;\n
        if (twitchBlobUrl.startsWith('blob:')) {\n
          jsURL = getWasmWorkerUrl(twitchBlobUrl);\n
        } else {\n
          jsURL = twitchBlobUrl;\n
        }\n
        if (typeof jsURL !== 'string') {\n
          super(twitchBlobUrl);\n
          return;\n
        }\n
        const newBlobStr = `\n
                    ${processM3U8.toString()}\n
                    ${hookWorkerFetch.toString()}\n
                    ${gqlRequest.toString()}\n
                    ${tryNotifyAdsWatchedM3U8.toString()}\n
                    ${getSegmentInfos.toString()}\n
                    ${getSegmentInfosLines.toString()}\n
                    ${getFinalSegUrl.toString()}\n
                    ${declareOptions.toString()}\n
                    ${getAccessToken.toString()}\n
                    ${makeGraphQlPacket.toString()}\n
                    ${parseAttributes.toString()}\n
                    declareOptions(self);\n
                    self.addEventListener('message', function(e) {\n
                        if (e.data.key == 'updateDeviceId') {\n
                            gql_device_id = e.data.value;\n
                        }\n
                    });\n
                    hookWorkerFetch();\n
                    importScripts('${jsURL}');\n
                `;\n
        super(URL.createObjectURL(new Blob([newBlobStr])));\n
        twitchMainWorker = this;\n
        const getAdDiv = () => {\n
          const playerRootDiv = document.querySelector('.video-player');\n
          let adDiv = null;\n
          if (playerRootDiv != null) {\n
            adDiv = playerRootDiv.querySelector('.ubo-overlay');\n
            if (adDiv === null) {\n
              adDiv = document.createElement('div');\n
              adDiv.className = 'ubo-overlay';\n
              adDiv.innerHTML = '<div class=\"player-ad-notice\" style=\"color: white; background-color: rgba(0, 0, 0, 0.8); position: absolute; top: 0px; left: 0px; padding: 10px;\"><p></p></div>';\n
              adDiv.style.display = 'none';\n
              adDiv.P = adDiv.querySelector('p');\n
              playerRootDiv.appendChild(adDiv);\n
            }\n
          }\n
          return adDiv;\n
        };\n
        let adDiv = null;\n
        this.onmessage = e => {\n
          switch (e.data.key) {\n
            case 'showAdBanner':\n
              if (adDiv === null) {\n
                adDiv = getAdDiv();\n
              }\n
              adDiv.P.textContent = `Waiting for${e.data.isMidroll ? ' midroll' : ''} ads to finish...`;\n
              adDiv.style.display = 'block';\n
              break;\n
            case 'hideAdBanner':\n
              if (adDiv === null) {\n
                adDiv = getAdDiv();\n
              }\n
              adDiv.style.display = 'none';\n
              break;\n
            case 'foundAdSegment':\n
              onFoundAd(e.data.hasLiveSeg, e.data.streamM3u8);\n
              break;\n
            case 'channelNameM3U8Changed':\n
              notifyAdsWatchedReloadNextTime = 0;\n
              break;\n
            case 'reloadPlayer':\n
              reloadTwitchPlayer();\n
              break;\n
            case 'PauseResumePlayer':\n
              reloadTwitchPlayer(true);\n
              break;\n
          }\n
        };\n
      }\n    };\n    browser.window.reloadTwitchPlayer = reloadTwitchPlayer;\n    hookFetch();\n    onContentLoaded();\n  });\n}if (isMatchingHostnames('ppss.kr')) {\n  const path = document.location.pathname;\n  observeDomChanges(() => {\n    const leftWing = browser.querySelector('div#ppss_wing_banner_left');\n    hideViaOverlay(leftWing);\n    if (path === '/') {\n
      const container = browser.querySelector('main#genesis-content');\n
      const content = container === null || container === void 0 ? void 0 : container.querySelectorAll('.home-top.widget-area');\n
      exposeContent(container, content);\n    } else if (path.includes('archives')) {\n
      const container = browser.querySelector('main#genesis-content');\n
      const content = container === null || container === void 0 ? void 0 : container.querySelectorAll('article.type-post, section.author-box, section.comments');\n
      exposeContent(container, content);\n    }\n    const menus = browser.querySelectorAll('ul.sub-menu');\n    [...menus].forEach(menu => {\n
      menu.style.zIndex = '999';\n    });\n  });\n}\nif (isMatchingHostnames('ygosu.com')) {\n  const path = document.location.pathname;\n  observeDomChanges(() => {\n    const leftNav = browser.querySelector('div#left_nav');\n    const rightBan = browser.querySelector('#right_nav');\n    hideViaOverlay(leftNav);\n    hideViaOverlay(rightBan);\n    const menu = browser.querySelector('body > .gnb');\n    if (menu) {\n
      menu.style.zIndex = '1000';\n    }\n    let container;\n    let content;\n    if (path === '/') {\n
      container = browser.querySelector('.main_wrap');\n
      content = browser.querySelectorAll('.main_preview, .notice-main, .main_cat');\n    } else if (path.includes('community')) {\n
      container = browser.querySelector('.board_body');\n
      content = browser.querySelectorAll('.board_top, .board_body > .container, .option');\n    }\n    if (container && content) {\n
      container.style.position = 'relative';\n
      exposeContent(container, content);\n    }\n    if (navigator.userAgent.match('Mobile')) {\n
      document.body.style.marginTop = '-55px';\n
      let banners;\n
      if (path === '/') {\n
        banners = browser.querySelectorAll('[style*=\"overflow\"][style*=\"margin\"], [style*=\"text-align\"][style*=\"padding\"]');\n
      } else if (path.includes('board')) {\n
        banners = browser.querySelectorAll('.container > .row > script:first-of-type + div, .container > .row + div[style] + div');\n
      }\n
      [...banners].forEach(banner => {\n
        banner.style.position = 'relative';\n
        hideViaOverlay(banner);\n
      });\n    }\n  });\n}if (isMatchingHostnames('pussyspace.net', 'pussyspace.com')) {\n  const hideVideoPlayerAds = () => {\n    var _container$firstChild;\n    const container = browser.document.querySelector('.contentspacebox > div[id]');\n    const adWrapper = container === null || container === void 0 ? void 0 : (_container$firstChild = container.firstChild) === null || _container$firstChild === void 0 ? void 0 : _container$firstChild.nextSibling;\n    const adStyle = adWrapper === null || adWrapper === void 0 ? void 0 : adWrapper.querySelector('style');\n    if (adWrapper && adStyle && adStyle.innerHTML.includes('margin:0px auto;text-align:center;')) {\n
      removeNode(adWrapper);\n    }\n  };\n  observeDomChanges(() => {\n    hideVideoPlayerAds();\n  });\n}if (isMatchingHostnames('techpowerup.com')) {\n  const removeAds = () => {\n    const elements = browser.querySelectorAll('div');\n    [...elements].forEach(elem => {\n
      const {\n
        attributes\n
      } = elem;\n
      if (attributes.length === 0) {\n
        return;\n
      }\n
      [...attributes].forEach(attributeObject => {\n
        const {\n
          nodeValue\n
        } = attributeObject;\n
        if (nodeValue === '') {\n
          const bannerImg = elem.querySelector('a[target=\"_blank\"][rel=\"nofollow\"] > span > img[alt]');\n
          if (bannerImg) {\n
            hideViaPositionProperty(elem);\n
          }\n
        }\n
      });\n    });\n  };\n  observeDomChanges(() => {\n    removeAds();\n  });\n}const removeWarningOverlay = () => {\n  const overlays = browser.querySelectorAll('body > div[style], body > div[id^=\"di\"]');\n  [...overlays].forEach(overlay => {\n    if (getComputedStyle(overlay).backgroundColor.indexOf('0.95') !== -1) {\n
      removeNode(overlay);\n    }\n  });\n};\nif (isMatchingHostnames('rjno1.com')) {\n  observeDomChanges(() => {\n    removeWarningOverlay();\n  });\n}if (isMatchingHostnames('liveinternet.ru')) {\n  const mainSearchAds = () => {\n    const adBanner = browser.querySelector('.allpageinner > div:not([class]) div[align=\"center\"]');\n    if (!adBanner) {\n
      return;\n    }\n    const adContainer = getParent(adBanner, 2);\n    const {\n
      marginBottom,\n
      marginTop\n    } = getComputedStyle(adContainer);\n    if (marginBottom === '-20px' && marginTop === '-5px') {\n
      hideViaPositionProperty(adContainer);\n    }\n    const longHorizontal = browser.querySelector('.allpageinner > div > div[id] > div');\n    if (longHorizontal && longHorizontal.childElements.length === 0) {\n
      hideViaPositionProperty(longHorizontal);\n    }\n  };\n  const squareAds = () => {\n    const ads = browser.querySelectorAll('[style=\"display: inline-block; width: 50%; vertical-align: top;\"]');\n    [...ads].forEach(ad => {\n
      const adContainer = getParent(ad, 1);\n
      if (adContainer.style['font-size'] === '0px') {\n
        hideViaPositionProperty(adContainer);\n
      }\n    });\n  };\n  const leftoverAds = () => {\n    const pageHeaderAd = browser.querySelector('#bantop_span');\n    if (pageHeaderAd) {\n
      const headerWrapper = getParent(pageHeaderAd, 1);\n
      if (headerWrapper.id === 'BlWrapper') {\n
        hideViaPositionProperty(headerWrapper);\n
      }\n    }\n    const sidebarAds = browser.querySelectorAll('div.Bo + div[id]:not([class])');\n    [...sidebarAds].forEach(ad => {\n
      if (ad.id && !/[^A-Za-z0-9]+/.test(ad.id)) {\n
        hideViaPositionProperty(ad);\n
      }\n    });\n    const bottomPopup = browser.querySelector('.myblockbottom__close');\n    const parent = bottomPopup === null || bottomPopup === void 0 ? void 0 : bottomPopup.parentElement;\n    if (bottomPopup && (parent.nodeName === 'BODY' || (parent === null || parent === void 0 ? void 0 : parent.parentElement.id) === 'BlWrapper')) {\n
      removeNode(bottomPopup);\n    }\n  };\n  const userProfileAds = () => {\n    const userProfileAd = browser.querySelector('div.Inner > div > script + div > div[id] > div');\n    if (userProfileAd && userProfileAd.childElements.length === 0) {\n
      hideViaPositionProperty(userProfileAd);\n    }\n  };\n  observeDomChanges(() => {\n    mainSearchAds();\n    userProfileAds();\n    squareAds();\n    leftoverAds();\n  });\n}if (isMatchingHostnames('go.discovery.com', 'discoveryplus.com', 'go.tlc.com', 'watch.hgtv.com', 'investigationdiscovery.com', 'sciencechannel.com')) {\n  const uplynkRegex = /<Period duration=\"[a-zA-Z.\\d]+\" id=\"[a-zA-Z\\-\\d]+\"><AssetIdentifier schemeIdUri=\"urn:com:uplynk:ad-asset-id\".*?<\\/AdaptationSet><\\/Period>/g;\n  const playbackInfoRegexes = [/(\"forecastTimeline\" : \\[)[\\s\\S]*?(],[\\s\\S]*?\"vendorAttributes\")/, /(\"vendorAttributes\" : {)[\\s\\S]*?},[\\s\\S]*?(\"streaming\")/];\n  const origFetch = browser.window.fetch;\n  const fetchWrapper = async (target, thisArg, args) => {\n    const url = args[0];\n    if (typeof url !== 'string' || url.length === 0) {\n
      return Reflect.apply(target, thisArg, args);\n    }\n    if (url.includes('videoPlaybackInfo')) {\n
      const getContent = await origFetch(...args);\n
      let textContent = await getContent.text();\n
      textContent = textContent.replace(playbackInfoRegexes[0], '$1$2').replace(playbackInfoRegexes[1], '$1}},\\n$2');\n
      return new Response(textContent);\n    }\n    if (url.includes('uplynk.com/preplay') && url.includes('.mpd')) {\n
      const getContent = await origFetch(...args);\n
      let textContent = await getContent.text();\n
      textContent = textContent.replaceAll(uplynkRegex, '');\n
      return new Response(textContent);\n    }\n    return Reflect.apply(target, thisArg, args);\n  };\n  const fetchHandler = {\n    apply: fetchWrapper\n  };\n  try {\n    browser.window.fetch = new Proxy(browser.window.fetch, fetchHandler);\n  } catch (e) {\n    console.debug(e);\n  }\n}if (isMatchingHostnames('spletnik.ru')) {\n  const removeByLabels = () => {\n    const labels = browser.querySelectorAll('[data-test*=\"AdKebabAndLabel\"]');\n    [...labels].forEach(label => {\n
      if (label.innerText !== 'РЕКЛАМА') {\n
        return;\n
      }\n
      for (let i = 5; i > 0; i -= 1) {\n
        const topParent = getParent(label, i);\n
        const {\n
          nodeName\n
        } = topParent;\n
        if (nodeName !== 'DIV' && nodeName !== 'MAIN' && nodeName !== 'HEADER' && nodeName !== 'BODY') {\n
          hideViaPositionProperty(topParent);\n
          break;\n
        }\n
      }\n    });\n  };\n  const removeMobile = () => {\n    const shadowRootContainers = browser.querySelectorAll('[id=\"mobile_footer\"] > * > *');\n    [...shadowRootContainers].forEach(container => {\n
      if (container.childElementCount === 0) {\n
        removeNode(container);\n
      }\n    });\n    const inreadAds = browser.querySelectorAll('[id$=\"inread\"]');\n    [...inreadAds].forEach(ad => {\n
      hideViaPositionProperty(ad);\n    });\n  };\n  const removeLeftovers = () => {\n    const containers = browser.querySelectorAll('[itemprop=\"articleBody\"] > div');\n    [...containers].forEach(container => {\n
      if (container.innerText === 'РЕКЛAМA') {\n
        hideViaPositionProperty(container);\n
        if (container.nextElementSibling.childElementCount === 0) {\n
          hideViaPositionProperty(container.nextElementSibling);\n
        }\n
      }\n    });\n  };\n  removeFromShadowRoots('*');\n  const removeShadowRootsLeftovers = () => {\n    const bannerRoots = browser.querySelectorAll(`\n
            body > [style^=\"width:1000px\"],\n
            main > [style^=\"margin:\"],\n
            .col_wrapper > [style^=\"margin:\"]\n
        `);\n    [...bannerRoots].forEach(root => {\n
      if (getComputedStyle(root).width === '1000px') {\n
        hideViaPositionProperty(root);\n
      }\n    });\n  };\n  observeDomChanges(() => {\n    removeByLabels();\n    removeShadowRootsLeftovers();\n    removeLeftovers();\n    if (navigator.userAgent.match('Mobile')) {\n
      removeMobile();\n    }\n  });\n}if (isMatchingHostnames('tidal.com')) {\n  observeDomChanges(() => {\n    const textAdv = browser.querySelector('#footerPlayer a[title=\"Advertisement\"]');\n    const player = browser.querySelector('#tidal-player-root > video');\n    if (textAdv && player) {\n
      player.currentTime = player.duration;\n    }\n  });\n}if (isMatchingHostnames('msn.com')) {\n  const shadowObserver = new MutationObserver(mutationList => {\n    [...mutationList].forEach(mutationRecord => {\n
      if (mutationRecord.addedNodes.length === 0) {\n
        return;\n
      }\n
      const shadowContainer = mutationRecord.target;\n
      const shadowAdContainers = shadowContainer.querySelectorAll('msft-article-card:not([class=\"contentCard\"])');\n
      [...shadowAdContainers].forEach(container => {\n
        container.remove();\n
      });\n    });\n  });\n  const shadowObserverOpts = {\n    subtree: true,\n    childList: true\n  };\n  const hijackAttachShadow = context => {\n    const originalAttachShadow = context.Element.prototype.attachShadow;\n    context.Element.prototype.attachShadow = function (opts) {\n
      const shadowRoot = originalAttachShadow.call(this, opts);\n
      shadowObserver.observe(shadowRoot, shadowObserverOpts);\n
      return shadowRoot;\n    };\n    context.Element.prototype.attachShadow.toString = originalAttachShadow.toString.bind(originalAttachShadow);\n  };\n  hijackAttachShadow(browser.window);\n}"}])}();

