(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),c=e.n(a)()(o());c.push([r.id,":root {\r\n  --main-font: 'Comic Neue', cursive;\r\n  --gray-bg-color: #ddd;\r\n  --white-bg-color: #fff;\r\n  --black-color: #000;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: var(--main-font);\r\n}\r\n\r\n.resent {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n\r\n  /* flex-direction: column; */\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n  width: 75%;\r\n}\r\n\r\n.navigation nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 4px solid var(--black-color);\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n}\r\n\r\n.date {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding-top: 5px;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 15px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.divider {\r\n  width: 2px;\r\n  background-color: var(--black-color);\r\n  height: 20px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\n\r\nh1 {\r\n  padding-top: 2%;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 25px;\r\n}\r\n\r\n.score_container {\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border: 4px solid var(--black-color);\r\n}\r\n\r\n.footer-container {\r\n  border: 4px solid var(--black-color);\r\n  display: flex;\r\n  position: fixed;\r\n  top: 93%;\r\n  width: 99%;\r\n  padding-left: 20px;\r\n}\r\n\r\n.score_list_container button {\r\n  position: relative;\r\n  float: right;\r\n  height: 8%;\r\n  margin-top: 5px;\r\n  border-bottom: 4px outset var(--black-color);\r\n  border-right: 4px outset var(--black-color);\r\n  background-color: var(--white-bg-color);\r\n  border-left: 2px solid var(--black-color);\r\n  border-top: 2px solid var(--black-color);\r\n}\r\n\r\n.remove-button {\r\n  background-color: var(--white-bg-color);\r\n  margin-right: 2%;\r\n}\r\n\r\n.input_container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input_title,\r\n.input_author {\r\n  border: 4px outset var(--black-color);\r\n  font-weight: bolder;\r\n  height: 40px;\r\n}\r\n\r\n.input_title::placeholder {\r\n  font-style: normal;\r\n  font-weight: bolder;\r\n  color: var(--black-color);\r\n}\r\n\r\n.input_author::placeholder {\r\n  font-style: normal;\r\n  font-weight: bolder;\r\n  color: var(--black-color);\r\n}\r\n\r\n.button_container {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  text-align: center;\r\n  justify-items: center;\r\n}\r\n\r\n.seperator {\r\n  background-color: var(--black-color);\r\n  border: 1px solid var(--black-color);\r\n  margin-top: 20px;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.button_container button {\r\n  border-bottom: 4px outset var(--black-color);\r\n  border-right: 4px outset var(--black-color);\r\n  background-color: var(--white-bg-color);\r\n  border-left: 2px solid var(--black-color);\r\n  border-top: 2px solid var(--black-color);\r\n  height: 40px;\r\n  padding: 15px;\r\n}\r\n",""]);const i=c},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},c=[],i=0;i<r.length;i++){var s=r[i],l=t.base?s[0]+t.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var v=o(f,t);t.byIndex=i,n.splice(i,0,{identifier:p,updater:v,references:1})}c.push(p)}return c}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var i=e(a[c]);n[i].references--}for(var s=t(r,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),c=e.n(a),i=e(565),s=e.n(i),l=e(216),d=e.n(l),p=e(589),u=e.n(p),f=e(426),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=new class{constructor(){this.scores=JSON.parse(localStorage.getItem("scores"))||[],this.yourName=document.querySelector("#name"),this.yourScore=document.querySelector("#scoreId"),this.scoreDisplay=document.querySelector("#display"),this.buttonAdd=document.querySelector("#add"),this.render()}addScore(r,n){this.scores.push({name:r,score:n}),localStorage.setItem("scores",JSON.stringify(this.scores)),this.render()}removeScore(r){this.scores.splice(r,1),localStorage.setItem("scores",JSON.stringify(this.scores)),this.render()}render(){this.scoreDisplay.innerHTML="",this.scoreDisplay.classList.add("score_container"),0===this.scores.length&&this.scoreDisplay.classList.remove("score_container"),this.scores.forEach(((r,n)=>{const e=document.createElement("div");e.innerHTML=`\n         &nbsp ${r.name} &nbsp = \n                  ${r.score}\n              `,e.style.background=n%2==0?"#dddddd":"#fff",this.scoreDisplay.appendChild(e),e.classList.add("score_list_container")}))}};h.buttonAdd.addEventListener("click",(()=>{const r=h.yourName.value,n=h.yourScore.value;h.addScore(r,n),h.yourName.value="",h.yourScore.value=""}))})()})();