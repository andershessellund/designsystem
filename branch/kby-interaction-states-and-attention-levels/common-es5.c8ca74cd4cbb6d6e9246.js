!function(){"use strict";function t(n,e){return(t=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(n,e)}function n(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,o=r(t);if(n){var c=r(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function e(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkdesignsystem=self.webpackChunkdesignsystem||[]).push([[8592],{9909:function(t,n,e){e.d(n,{v:function(){return a}});var r,i=e(38583),u=e(33018),a=((r=o(function t(){c(this,t)})).\u0275fac=function(t){return new(t||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[i.ez]]}),r)},39658:function(t,n,e){e.d(n,{Q:function(){return s}});var r,i=e(38583),u=e(80529),a=e(33018),s=((r=o(function t(){c(this,t)})).\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[[i.ez,u.J_]]}),r)},6633:function(t,n,e){e.d(n,{c:function(){return c}});var r=e(23150),i=e(52954),o=e(97279),c=function(t,n){var e,c,u=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),a(o,i)):s()}},a=function(t,n){e=t,c||(c=e);var i=e;(0,r.c)(function(){return i.classList.add("ion-activated")}),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;(0,r.c)(function(){return n.classList.remove("ion-activated")}),t&&c!==e&&e.click(),e=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return u(t.currentX,t.currentY,i.a)},onMove:function(t){return u(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),(0,i.h)(),c=void 0}})}},77330:function(t,n,e){e.d(n,{a:function(){return c},d:function(){return u}});var r,i=e(34553),o=e(52377),c=(r=(0,i.Z)(regeneratorRuntime.mark(function t(n,e,r,i,c){var u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,c,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:return u="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach(function(t){return u.classList.add(t)}),c&&Object.assign(u,c),e.appendChild(u),t.next=10,new Promise(function(t){return(0,o.c)(u,t)});case 10:return t.abrupt("return",u);case 11:case"end":return t.stop()}},t)})),function(t,n,e,i,o){return r.apply(this,arguments)}),u=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},52954:function(t,n,e){e.d(n,{a:function(){return o},b:function(){return c},c:function(){return i},d:function(){return a},h:function(){return u}});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},u=function(){r.selectionEnd()},a=function(t){r.impact(t)}},66575:function(t,n,e){e.d(n,{s:function(){return r}});var r=function(t){try{if(t instanceof function(){return o(function t(n){c(this,t),this.value=n})}())return t.value;if(!a()||"string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,f.forEach(function(t){for(var e=n.querySelectorAll(t),r=e.length-1;r>=0;r--){var o=e[r];o.parentNode?o.parentNode.removeChild(o):n.removeChild(o);for(var c=u(o),a=0;a<c.length;a++)i(c[a])}});for(var r=u(n),s=0;s<r.length;s++)i(r[s]);var l=document.createElement("div");l.appendChild(n);var h=l.querySelector("div");return null!==h?h.innerHTML:l.innerHTML}catch(n){return console.error(n),""}},i=function t(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var r=n.attributes.item(e),i=r.name;if(s.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}for(var c=u(n),a=0;a<c.length;a++)t(c[a])}},u=function(t){return null!=t.children?t.children:t.childNodes},a=function(){var t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},s=["class","id","href","src","name","slot"],f=["script","style","iframe","meta","link","object","embed"]},60408:function(t,n,e){e.d(n,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},61269:function(t,n,e){e.d(n,{c:function(){return c},g:function(){return u},h:function(){return o},o:function(){return s}});var r,i=e(34553),o=function(t,n){return null!==n.closest(t)},c=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(t),i=!0,r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},u=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},a=/^[a-z][a-z0-9+\-.]*:/,s=(r=(0,i.Z)(regeneratorRuntime.mark(function t(n,e,r,i){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)})),function(t,n,e,i){return r.apply(this,arguments)})},7703:function(e,r,i){i.d(r,{jn:function(){return s}});var u=i(55197),a=i(75604);function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,e=arguments.length>2?arguments[2]:void 0;return n=(n||0)<1?Number.POSITIVE_INFINITY:n,function(r){return r.lift(new f(t,n,e))}}var f=function(){function t(n,e,r){c(this,t),this.project=n,this.concurrent=e,this.scheduler=r}return o(t,[{key:"call",value:function(t,n){return n.subscribe(new l(t,this.project,this.concurrent,this.scheduler))}}]),t}(),l=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(i,e);var r=n(i);function i(t,n,e,o){var u;return c(this,i),(u=r.call(this,t)).project=n,u.concurrent=e,u.scheduler=o,u.index=0,u.active=0,u.hasCompleted=!1,e<Number.POSITIVE_INFINITY&&(u.buffer=[]),u}return o(i,[{key:"_next",value:function(t){var n=this.destination;if(n.closed)this._complete();else{var e=this.index++;if(this.active<this.concurrent){n.next(t);try{var r,o=(0,this.project)(t,e);this.scheduler?this.destination.add(this.scheduler.schedule(i.dispatch,0,{subscriber:this,result:o,value:t,index:e})):this.subscribeToProjection(o,t,e)}catch(r){n.error(r)}}else this.buffer.push(t)}}},{key:"subscribeToProjection",value:function(t,n,e){this.active++,this.destination.add((0,a.D)(this,t,n,e))}},{key:"_complete",value:function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()}},{key:"notifyNext",value:function(t,n,e,r,i){this._next(n)}},{key:"notifyComplete",value:function(t){var n=this.buffer;this.destination.remove(t),this.active--,n&&n.length>0&&this._next(n.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()}}],[{key:"dispatch",value:function(t){var n=t.subscriber,e=t.result,r=t.value,i=t.index;n.subscribeToProjection(e,r,i)}}]),i}(u.L)},27716:function(t,n,e){e.d(n,{q:function(){return a}});var r=e(42145),i=e(548),o=e(95242),c=e(34022);function u(t,n,e){return 0===e?[n]:(t.push(n),t)}function a(){return function(t,n){return arguments.length>=2?function(e){return(0,c.z)((0,r.R)(t,n),(0,i.h)(1),(0,o.d)(n))(e)}:function(n){return(0,c.z)((0,r.R)(function(n,e,r){return t(n,e,r+1)}),(0,i.h)(1))(n)}}(u,[])}}}])}();