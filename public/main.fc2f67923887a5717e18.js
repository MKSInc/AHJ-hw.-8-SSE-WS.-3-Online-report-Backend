!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports='<div data-widget="online-report" class="online-report"> <ul data-id="events-list" class="events-list"></ul> </div> '},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o(this,e),this.el=null,this.init(t)}var t,n,r;return t=e,(n=[{key:"init",value:function(e){var t=document.getElementsByTagName("body")[0];this.el=document.createElement("div"),this.el.dataset.visibility="hidden",""!==e&&(this.el.innerHTML=e),t.append(this.el)}}])&&l(t.prototype,n),r&&l(t,r),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parentEl=null,this.streamURL=t,this.els={onlineReport:null,eventsList:null},this.selectors={onlineReport:'[data-widget="online-report"]',eventsList:'[data-id="events-list"]'}}var t,n,r;return t=e,(n=[{key:"init",value:function(e){this.parentEl=e;var t=new a(i.a).el;this.els.onlineReport=document.querySelector(this.selectors.onlineReport),this.els.eventsList=this.els.onlineReport.querySelector(this.selectors.eventsList),this.parentEl.append(this.els.onlineReport),t.remove(),t=null,this.createStreamSSE()}},{key:"createStreamSSE",value:function(){new EventSource(this.streamURL).addEventListener("message",(function(e){console.log(e)}))}}])&&s(t.prototype,n),r&&s(t,r),e}(),c=document.querySelector('[data-id="container"]');new u("https://ahj-8-1-online-report.herokuapp.com/sse").init(c)}]);