!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=97)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(64))},function(t,e,n){var r=n(0),o=n(26),i=n(2),c=n(28),a=n(33),u=n(51),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(5),o=n(43),i=n(7),c=n(16),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(45),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(0),o=n(13).f,i=n(11),c=n(12),a=n(21),u=n(44),f=n(49);t.exports=function(t,e){var n,s,l,p,v,h=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[h]||a(h,{}):(r[h]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e,n){var r=n(41),o=n(42);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(5),o=n(6),i=n(14);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(0),o=n(11),i=n(2),c=n(21),a=n(22),u=n(24),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u,f=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,v=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=s(n)).source||(u.source=l.join("string"==typeof e?e:""))),t!==r?(f?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},function(t,e,n){var r=n(5),o=n(40),i=n(14),c=n(10),a=n(16),u=n(2),f=n(43),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),f)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,n){var r=n(47),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(11);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(23),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(21),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,e,n){var r,o,i,c=n(65),a=n(0),u=n(4),f=n(11),s=n(2),l=n(23),p=n(25),v=n(17),h=a.WeakMap;if(c){var d=l.state||(l.state=new h),y=d.get,g=d.has,m=d.set;r=function(t,e){return e.facade=t,m.call(d,t,e),e},o=function(t){return y.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var b=p("state");v[b]=!0,r=function(t,e){return e.facade=t,f(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(26),o=n(28),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(27),o=n(23);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(46),o=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(42);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o,i=n(0),c=n(35),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(8);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(19);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(15),o=n(0);t.exports="process"==r(o.process)},function(t,e,n){"use strict";var r=n(9),o=n(3),i=n(31),c=n(4),a=n(32),u=n(18),f=n(69),s=n(50),l=n(52),p=n(1),v=n(34),h=p("isConcatSpreadable"),d=9007199254740991,y="Maximum allowed index exceeded",g=v>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=l("concat"),b=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!g||!m},{concat:function(t){var e,n,r,o,i,c=a(this),l=s(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(b(i=-1===e?c:arguments[e])){if(p+(o=u(i.length))>d)throw TypeError(y);for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=d)throw TypeError(y);f(l,p++,i)}return l.length=p,l}})},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(3),o=n(15),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(5),o=n(3),i=n(20);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(2),o=n(66),i=n(13),c=n(6);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||a(t,s,u(e,s))}}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(2),o=n(10),i=n(67).indexOf,c=n(17);t.exports=function(t,e){var n,a=o(t),u=0,f=[];for(n in a)!r(c,n)&&r(a,n)&&f.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(f,n)||f.push(n));return f}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(4),o=n(31),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(33);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(3),o=n(1),i=n(34),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(36),o=n(41),i=n(32),c=n(18),a=n(50),u=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(h,d,y,g){for(var m,b,w=i(h),x=o(w),S=r(d,y,3),E=c(x.length),j=0,O=g||a,L=e?O(h,E):n||p?O(h,0):void 0;E>j;j++)if((v||j in x)&&(b=S(m=x[j],j,w),t))if(e)L[j]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:u.call(L,m)}else switch(t){case 4:return!1;case 7:u.call(L,m)}return l?-1:f||s?s:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,e,n){var r=n(37),o=n(15),i=n(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(6).f,o=n(2),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports={}},function(t,e,n){var r,o,i,c=n(0),a=n(3),u=n(36),f=n(58),s=n(20),l=n(59),p=n(38),v=c.location,h=c.setImmediate,d=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,w={},x="onreadystatechange",S=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},E=function(t){return function(){S(t)}},j=function(t){S(t.data)},O=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(b),b},d=function(t){delete w[t]},p?r=function(t){y.nextTick(E(t))}:m&&m.now?r=function(t){m.now(E(t))}:g&&!l?(i=(o=new g).port2,o.port1.onmessage=j,r=u(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!a(O)?(r=O,c.addEventListener("message",j,!1)):r=x in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),S(t)}}:function(t){setTimeout(E(t),0)}),t.exports={set:h,clear:d}},function(t,e,n){var r=n(8);t.exports=r("document","documentElement")},function(t,e,n){var r=n(35);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){"use strict";var r=n(19),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){var r=n(46),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(1);e.f=r},function(t,e){t.exports='<div data-widget="online-report" class="online-report"> <nav> <button data-id="restart">Restart game</button> </nav> <ul data-id="events-list" class="events-list"></ul> </div> '},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(0),o=n(22),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(8),o=n(29),i=n(48),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(10),o=n(18),i=n(68),c=function(t){return function(e,n,c){var a,u=r(e),f=o(u.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(47),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){"use strict";var r=n(16),o=n(6),i=n(14);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){"use strict";var r=n(9),o=n(53).map,i=n(52),c=n(71),a=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(5),o=n(3),i=n(2),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,l)}))}},function(t,e,n){var r=n(37),o=n(12),i=n(73);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(37),o=n(54);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r,o,i,c,a=n(9),u=n(27),f=n(0),s=n(8),l=n(75),p=n(12),v=n(76),h=n(55),d=n(77),y=n(4),g=n(19),m=n(78),b=n(22),w=n(79),x=n(83),S=n(84),E=n(57).set,j=n(85),O=n(87),L=n(88),P=n(60),T=n(89),k=n(24),_=n(49),R=n(1),A=n(38),M=n(34),N=R("species"),I="Promise",C=k.get,F=k.set,D=k.getterFor(I),G=l,U=f.TypeError,q=f.document,W=f.process,z=s("fetch"),J=P.f,B=J,H=!!(q&&q.createEvent&&f.dispatchEvent),Y="function"==typeof PromiseRejectionEvent,$="unhandledrejection",K=_(I,(function(){if(!(b(G)!==String(G))){if(66===M)return!0;if(!A&&!Y)return!0}if(u&&!G.prototype.finally)return!0;if(M>=51&&/native code/.test(G))return!1;var t=G.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=e,!(t.then((function(){}))instanceof e)})),Q=K||!x((function(t){G.all(t).catch((function(){}))})),V=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;j((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var c,a,u,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,v=f.domain;try{s?(o||(2===t.rejection&&nt(t),t.rejection=1),!0===s?c=r:(v&&v.enter(),c=s(r),v&&(v.exit(),u=!0)),c===f.promise?p(U("Promise-chain cycle")):(a=V(c))?a.call(c,l,p):l(c)):p(r)}catch(t){v&&!u&&v.exit(),p(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&tt(t)}))}},Z=function(t,e,n){var r,o;H?((r=q.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},!Y&&(o=f["on"+t])?o(r):t===$&&L("Unhandled promise rejection",n)},tt=function(t){E.call(f,(function(){var e,n=t.facade,r=t.value;if(et(t)&&(e=T((function(){A?W.emit("unhandledRejection",r,n):Z($,n,r)})),t.rejection=A||et(t)?2:1,e.error))throw e.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t){E.call(f,(function(){var e=t.facade;A?W.emit("rejectionHandled",e):Z("rejectionhandled",e,t.value)}))},rt=function(t,e,n){return function(r){t(e,r,n)}},ot=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,X(t,!0))},it=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw U("Promise can't be resolved itself");var r=V(e);r?j((function(){var n={done:!1};try{r.call(e,rt(it,n,t),rt(ot,n,t))}catch(e){ot(n,e,t)}})):(t.value=e,t.state=1,X(t,!1))}catch(e){ot({done:!1},e,t)}}};K&&(G=function(t){m(this,G,I),g(t),r.call(this);var e=C(this);try{t(rt(it,e),rt(ot,e))}catch(t){ot(e,t)}},(r=function(t){F(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(G.prototype,{then:function(t,e){var n=D(this),r=J(S(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=A?W.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=C(t);this.promise=t,this.resolve=rt(it,e),this.reject=rt(ot,e)},P.f=J=function(t){return t===G||t===i?new o(t):B(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new G((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof z&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(G,z.apply(f,arguments))}}))),a({global:!0,wrap:!0,forced:K},{Promise:G}),h(G,I,!1,!0),d(I),i=s(I),a({target:I,stat:!0,forced:K},{reject:function(t){var e=J(this);return e.reject.call(void 0,t),e.promise}}),a({target:I,stat:!0,forced:u||K},{resolve:function(t){return O(u&&this===i?G:this,t)}}),a({target:I,stat:!0,forced:Q},{all:function(t){var e=this,n=J(e),r=n.resolve,o=n.reject,i=T((function(){var n=g(e.resolve),i=[],c=0,a=1;w(t,(function(t){var u=c++,f=!1;i.push(void 0),a++,n.call(e,t).then((function(t){f||(f=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=J(e),r=n.reject,o=T((function(){var o=g(e.resolve);w(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(12);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(8),o=n(6),i=n(1),c=n(5),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(7),o=n(80),i=n(18),c=n(36),a=n(81),u=n(82),f=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var s,l,p,v,h,d,y,g=n&&n.that,m=!(!n||!n.AS_ENTRIES),b=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),x=c(e,g,1+m+w),S=function(t){return s&&u(s),new f(!0,t)},E=function(t){return m?(r(t),w?x(t[0],t[1],S):x(t[0],t[1])):w?x(t,S):x(t)};if(b)s=t;else{if("function"!=typeof(l=a(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if((h=E(t[p]))&&h instanceof f)return h;return new f(!1)}s=l.call(t)}for(d=s.next;!(y=d.call(s)).done;){try{h=E(y.value)}catch(t){throw u(s),t}if("object"==typeof h&&h&&h instanceof f)return h}return new f(!1)}},function(t,e,n){var r=n(1),o=n(56),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(54),o=n(56),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(7);t.exports=function(t){var e=t.return;if(void 0!==e)return r(e.call(t)).value}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(7),o=n(19),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,a,u,f,s,l=n(0),p=n(13).f,v=n(57).set,h=n(59),d=n(86),y=n(38),g=l.MutationObserver||l.WebKitMutationObserver,m=l.document,b=l.process,w=l.Promise,x=p(l,"queueMicrotask"),S=x&&x.value;S||(r=function(){var t,e;for(y&&(t=b.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},h||y||d||!g||!m?w&&w.resolve?(f=w.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=y?function(){b.nextTick(r)}:function(){v.call(l,r)}:(a=!0,u=m.createTextNode(""),new g(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a})),t.exports=S||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(35);t.exports=/web0s(?!.*chrome)/i.test(r)},function(t,e,n){var r=n(7),o=n(4),i=n(60);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new T(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",v="executing",h="completed",d={};function y(){}function g(){}function m(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==n&&r.call(x,i)&&(b=x);var S=m.prototype=y.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:_}}function _(){return{value:e,done:!0}}return g.prototype=S.constructor=m,m.constructor=g,g.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new j(f(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(S),u(S,a,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),f=r.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";var r=n(9),o=n(0),i=n(8),c=n(27),a=n(5),u=n(33),f=n(51),s=n(3),l=n(2),p=n(31),v=n(4),h=n(7),d=n(32),y=n(10),g=n(16),m=n(14),b=n(92),w=n(61),x=n(29),S=n(94),E=n(48),j=n(13),O=n(6),L=n(40),P=n(11),T=n(12),k=n(26),_=n(25),R=n(17),A=n(28),M=n(1),N=n(62),I=n(95),C=n(55),F=n(24),D=n(53).forEach,G=_("hidden"),U="Symbol",q=M("toPrimitive"),W=F.set,z=F.getterFor(U),J=Object.prototype,B=o.Symbol,H=i("JSON","stringify"),Y=j.f,$=O.f,K=S.f,Q=L.f,V=k("symbols"),X=k("op-symbols"),Z=k("string-to-symbol-registry"),tt=k("symbol-to-string-registry"),et=k("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,ot=a&&s((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y(J,e);r&&delete J[e],$(t,e,n),r&&t!==J&&$(J,e,r)}:$,it=function(t,e){var n=V[t]=b(B.prototype);return W(n,{type:U,tag:t,description:e}),a||(n.description=e),n},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},at=function(t,e,n){t===J&&at(X,e,n),h(t);var r=g(e,!0);return h(n),l(V,r)?(n.enumerable?(l(t,G)&&t[G][r]&&(t[G][r]=!1),n=b(n,{enumerable:m(0,!1)})):(l(t,G)||$(t,G,m(1,{})),t[G][r]=!0),ot(t,r,n)):$(t,r,n)},ut=function(t,e){h(t);var n=y(e),r=w(n).concat(pt(n));return D(r,(function(e){a&&!ft.call(n,e)||at(t,e,n[e])})),t},ft=function(t){var e=g(t,!0),n=Q.call(this,e);return!(this===J&&l(V,e)&&!l(X,e))&&(!(n||!l(this,e)||!l(V,e)||l(this,G)&&this[G][e])||n)},st=function(t,e){var n=y(t),r=g(e,!0);if(n!==J||!l(V,r)||l(X,r)){var o=Y(n,r);return!o||!l(V,r)||l(n,G)&&n[G][r]||(o.enumerable=!0),o}},lt=function(t){var e=K(y(t)),n=[];return D(e,(function(t){l(V,t)||l(R,t)||n.push(t)})),n},pt=function(t){var e=t===J,n=K(e?X:y(t)),r=[];return D(n,(function(t){!l(V,t)||e&&!l(J,t)||r.push(V[t])})),r};(u||(T((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===J&&n.call(X,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,m(1,t))};return a&&rt&&ot(J,e,{configurable:!0,set:n}),it(e,t)}).prototype,"toString",(function(){return z(this).tag})),T(B,"withoutSetter",(function(t){return it(A(t),t)})),L.f=ft,O.f=at,j.f=st,x.f=S.f=lt,E.f=pt,N.f=function(t){return it(M(t),t)},a&&($(B.prototype,"description",{configurable:!0,get:function(){return z(this).description}}),c||T(J,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:B}),D(w(et),(function(t){I(t)})),r({target:U,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(Z,e))return Z[e];var n=B(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,e){return void 0===e?b(t):ut(b(t),e)},defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(d(t))}}),H)&&r({target:"JSON",stat:!0,forced:!u||s((function(){var t=B();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(v(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,H.apply(null,o)}});B.prototype[q]||P(B.prototype,q,B.prototype.valueOf),C(B,U),R[G]=!0},function(t,e,n){var r,o=n(7),i=n(93),c=n(30),a=n(17),u=n(58),f=n(20),s=n(25),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;h=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete h.prototype[c[n]];return h()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=h(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),o=n(6),i=n(7),c=n(61);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(10),o=n(29).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(45),o=n(2),i=n(62),c=n(6).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,n){"use strict";var r=n(9),o=n(5),i=n(0),c=n(2),a=n(4),u=n(6).f,f=n(44),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[e]=!0),e};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var h=v.toString,d="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(c(l,t))return"";var n=d?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,e,n){"use strict";n.r(e);n(39),n(70),n(72),n(74),n(90);var r=n(63),o=n.n(r);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,t),this.el=null,this.init(e)}var e,n,r;return e=t,(n=[{key:"init",value:function(t){var e=document.getElementsByTagName("body")[0];this.el=document.createElement("div"),this.el.dataset.visibility="hidden",""!==t&&(this.el.innerHTML=t),e.append(this.el)}}])&&c(e.prototype,n),r&&c(e,r),t}();n(91),n(96);function u(t){var e=t.data,n=e.description,r=e.created,o=t.type,i=r.toLocaleDateString(),c=r.toLocaleTimeString(),a=document.createElement("li");a.classList.add("events-list__item"),a.insertAdjacentHTML("afterbegin",'\n    <span data-id="event-time" class="events-list__time">'.concat(c," ").concat(i,'</span>\n    <span data-id="event-description" class="events-list__description">').concat(n,"</span>\n  "));var u={freekick:"events-list__description_action_freekick",goal:"events-list__description_action_goal"},f=u[o];return u&&a.querySelector('[data-id="event-description"]').classList.add(f),a}function f(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){l(i,r,o,c,a,"next",t)}function a(t){l(i,r,o,c,a,"throw",t)}c(void 0)}))}}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.els={onlineReport:null,eventList:null},this.selectors={onlineReport:'[data-widget="online-report"]',eventList:'[data-id="events-list"]'},this.URL={root:e,events:"".concat(e,"/events"),streamSSE:"".concat(e,"/sse")}}var e,n,r,i,c;return e=t,(n=[{key:"init",value:(c=p(regeneratorRuntime.mark((function t(e){var n,r,i,c,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new a(o.a).el,this.els.onlineReport=r.querySelector(this.selectors.onlineReport),this.els.eventList=this.els.onlineReport.querySelector(this.selectors.eventList),this.els.onlineReport.querySelector('[data-id="restart"]').addEventListener("click",p(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s.URL.root,"/restart"));case 2:return e=t.sent,t.t0=console,t.next=6,e.text();case 6:t.t1=t.sent,t.t0.log.call(t.t0,"Restart click:",t.t1),s.createStreamSSE();case 9:case"end":return t.stop()}}),t)})))),e.append(this.els.onlineReport),r.remove(),r=null,t.next=9,this.getEvents();case 9:if(i=t.sent,c=i.map(u),(n=this.els.eventList).append.apply(n,f(c)),"end"!==i[i.length-1].event){t.next=14;break}return t.abrupt("return","Game over");case 14:return this.createStreamSSE(),t.abrupt("return","Stream started");case 16:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"getEvents",value:(i=p(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.URL.events);case 2:if((e=t.sent).ok){t.next=5;break}throw Error("".concat(e.status," (").concat(e.statusText,")"));case 5:return t.next=7,e.text();case 7:return n=t.sent,t.abrupt("return",JSON.parse(n,(function(t,e){return"created"===t?new Date(e):e})));case 9:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"showEvent",value:function(t){var e=u({data:JSON.parse(t.data,(function(t,e){return"created"===t?new Date(e):e})),type:t.type});this.els.eventList.append(e)}},{key:"createStreamSSE",value:function(){var t=this,e=new EventSource(this.URL.streamSSE);e.addEventListener("start",(function(e){return t.showEvent(e)})),e.addEventListener("action",(function(e){return t.showEvent(e)})),e.addEventListener("freekick",(function(e){return t.showEvent(e)})),e.addEventListener("goal",(function(e){return t.showEvent(e)})),e.addEventListener("message",(function(e){return t.showEvent(e)})),e.addEventListener("end",(function(n){console.log("Stream closed on client"),t.showEvent(n),e.close()})),e.addEventListener("error",(function(t){t.eventPhase!==EventSource.CLOSED?console.error("⛔ SSE Error!",t):console.error("⛔ Error: Connection closed!",t)}))}}])&&v(e.prototype,n),r&&v(e,r),t}(),d=document.querySelector('[data-id="container"]');new h("https://ahj-8-1-online-report.herokuapp.com").init(d).then((function(t){return console.log(t)})).catch((function(t){return console.error("⛔",t)}))}]);