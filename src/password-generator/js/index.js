(()=>{var e,t={4498:(e,t,r)=>{"use strict";const s=r(5835),n=["!","@","#","$","%","^","&","*","(",")"];e.exports=class{constructor(e){let{...t}=e;this.checkParams(t);const r=this.getComplex(t);this.text=this.generate(r.join(""),t)}checkParams(e){e.passwordType||(e.passwordType=0),function(e){if("number"!=typeof e.passwordType)throw new Error("passwordType must be number");if(0!=e.passwordType&&1!=e.passwordType&&2!=e.passwordType&&3!=e.passwordType)throw new Error("invalid passwordType")}(e),function(e){if("number"!=typeof e.passwordLength)throw new Error("passwordLength must be number");if(e.passwordLength<4||e.passwordLength>36)throw new Error("invalid passwordLength")}(e),function(e){if("string"!=typeof e.publicKey)throw new Error("publicKey must be string")}(e),function(e){if("string"!=typeof e.privateKey)throw new Error("privateKey must be string")}(e),function(e){if("number"!=typeof e.timestamp)throw new Error("timestamp must be number")}(e)}hmacsha512(e,t,r){const n=s.createHmac("sha512",e);return n.update(t),n.update(r.toString()),n.digest("hex")}getOrigin(e,t,r){return this.hmacsha512(e,t,r).split("")}getRuler(e,t,r){return this.hmacsha512(t,e,r).split("")}getComplex(e){const t=this.hmacsha512(e.privateKey,e.publicKey,e.timestamp),r=Object.freeze(this.getOrigin(t,e.privateKey,e.timestamp)),s=Object.freeze(this.getRuler(t,e.privateKey,e.timestamp)),n=[];for(const e of Object.entries(r))/\d/.test(e[1])||/\d/.test(s[e[0]])?n.push(e[1]):n.push(e[1].toUpperCase());return n}generate(e,t){if(3==t.passwordType)return e.match(/\d/g).slice(0,t.passwordLength).join("");if(2==t.passwordType)return e.match(/[a-zA-Z]/g).slice(0,t.passwordLength).join("");if(1==t.passwordType){const r=e.match(new RegExp(`(?=.*\\d)(?=.*[A-Z])(?=.*[a-z]).{${t.passwordLength}}`,"g"));try{for(const e of r)if(new RegExp("(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])").test(e))return e}catch(e){throw new Error("generate unsuccessfully")}}else{const r=e.match(new RegExp(`(?=.*\\d)(?=.*[A-Z])(?=.*[a-z]).{${t.passwordLength}}`,"g"));try{for(const e of r)if(new RegExp("(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])").test(e)){const t=e.match(/\d/g),r=e.match(/[a-z]/g),s=e.match(/[A-Z]/g),o=n[t[0]];return t.length>r.length&&t.length>s.length?e.replace(t[0],o):r.length>t.length&&r.length>s.length?e.replace(r[0],o):e.replace(s[0],o)}}catch(e){throw new Error("generate unsuccessfully")}}}}},7690:(e,t,r)=>{const s=r(4498),n=document.querySelector("#passwordType"),o=document.querySelector("#passwordLength"),a=document.querySelector("#publicKey"),i=document.querySelector("#privateKey"),p=document.querySelector("#date");if(document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const t=Number.parseInt(n.value,10),r=Number.parseInt(o.value,10),c=a.value,u=i.value,l=p.value,h=new s({passwordType:t,passwordLength:r,publicKey:c,privateKey:u,timestamp:Date.parse(l)});h.text&&(sessionStorage.setItem("password",h.text),location.href="result.html")})),location.search&&URLSearchParams){const e=new URLSearchParams(location.search),t=e.get("passwordType"),r=e.get("passwordLength"),s=e.get("publicKey"),c=e.get("privateKey"),u=e.get("date");t&&(n.value=t),r&&(o.value=r),s&&(a.value=s),c&&(i.value=c),u&&(p.value=u)}document.querySelector("#passwordLength+button").addEventListener("click",(function(){o.value=""})),document.querySelector("#publicKey+button").addEventListener("click",(function(){a.value=""})),document.querySelector("#privateKey+button").addEventListener("click",(function(){"password"===i.type?i.type="text":i.type="password"}))},950:()=>{},6601:()=>{},9214:()=>{},8623:()=>{},7748:()=>{},5568:()=>{},6619:()=>{},7108:()=>{},2361:()=>{},4616:()=>{}},r={};function s(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=t,e=[],s.O=(t,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],i=!0,p=0;p<r.length;p++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](r[p])))?r.splice(p--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={826:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,p]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(p)var u=p(s)}for(t&&t(r);c<a.length;c++)o=a[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},r=globalThis.webpackChunkpassword_generator=globalThis.webpackChunkpassword_generator||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=s.O(void 0,[835],(()=>s(7690)));n=s.O(n)})();