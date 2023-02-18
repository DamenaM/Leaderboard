(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"body {\r\n  background-color: rgb(255, 255, 255);\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n.score-Display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: max-content;\r\n}\r\n\r\n.section-title {\r\n  padding: 30px 20px 0 20px;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-size: 25px;\r\n}\r\n\r\n.success {\r\n  color: green;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  width: 100%;\r\n  padding: 2px;\r\n  display: none;\r\n}\r\n.warningLabel{\r\n  color: rgb(232, 74, 7);\r\n  font-size: 18px;\r\n  text-align: center;\r\n  width: 100%;\r\n  padding: 2px;\r\n  display: none;\r\n}\r\n            \r\n\r\n.Recent-score {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 30px;\r\n}\r\n\r\n.title-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n}\r\n\r\nbutton {\r\n  background-color: white;\r\n  text-align: center;\r\n  border: 2px solid rgb(15, 14, 14);\r\n  font-family: 'Times New Roman', Times, serif;\r\n  width: 70px;\r\n  height: 30px;\r\n}\r\n.resent {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n.score-container {\r\n  display: flex;\r\n  padding: 6px;\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.score-container:nth-child(odd) {\r\n  background-color: rgba(136, 145, 145, 0.852);\r\n}\r\n\r\n.form-container {\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.form-control {\r\n  padding: 25px;\r\n}\r\n\r\ninput {\r\n  padding: 25px;\r\n  border: 2px solid black;\r\n  gap: 30px;\r\n  width: 230px;\r\n  height: 20px;\r\n}\r\n\r\ninput::placeholder {\r\n  color: black;\r\n  padding-left: 2px;\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n.submit-btn {\r\n  align-self: flex-end;\r\n  justify-self: flex-end;\r\n}\r\n\r\n.form-title {\r\n  text-align: center;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=r(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),l=0;l<a.length;l++){var u=r(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),l=r(216),u=r.n(l),d=r(589),p=r.n(d),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.querySelector("#scoreInput"),v=document.querySelector("#nameInput"),x=async n=>(await fetch(n)).json(),h=document.querySelector(".tableBody"),g=n=>{h.innerHTML="";const e=n.map((n=>`\n          <tr >\n          <td class="score-container" ><span>${n.user} : ${n.score}</span></td>\n        </tr>`));h.innerHTML=e.join(" ")},b="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mtabGUIYGuhhiHIUHIHuhiuh/scores/",w=document.querySelector("#form"),T=document.querySelector("#scoreInput"),S=document.querySelector("#nameInput"),I=document.querySelector(".success"),j=document.querySelector(".warningLabel"),q=document.querySelector("#refreshScores");w.addEventListener("submit",(async n=>{n.preventDefault(),""===S.value||""===T.value?j.style.display="block":""===S.value&&""===T.value||(j.style.display="none",await(async n=>{const e=await fetch(n,{method:"POST",body:JSON.stringify({user:v.value,score:y.value}),headers:{"Content-type":"application/json; charset=UTF-8"}});return v.value="",y.value="",e.json()})(b),I.style.display="block",setTimeout((()=>{I.style.display="none"}),2e3))})),q.addEventListener("click",(()=>{document.querySelector(".tableBody").innerHTML="",x(b).then((n=>g(n.result)))})),window.onload=x(b).then((n=>g(n.result)))})()})();