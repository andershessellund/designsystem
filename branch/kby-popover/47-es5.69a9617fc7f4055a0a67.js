!function(){function n(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function t(n,t,e,i,a,o,r){try{var c=n[o](r),s=c.value}catch(f){return void e(f)}c.done?t(s):Promise.resolve(s).then(i,a)}function e(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{STjf:function(i,a,o){"use strict";o.r(a),o.d(a,"ion_ripple_effect",function(){return s});var r=o("wEJo"),c=o("E/Mt"),s=function(){function i(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Object(r.o)(this,n),this.type="bounded"}var a,o,s,m,d;return a=i,(o=[{key:"addRipple",value:(m=regeneratorRuntime.mark(function n(t,e){var i=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise(function(n){Object(r.h)(function(){var a=i.el.getBoundingClientRect(),o=a.width,c=a.height,s=Math.sqrt(o*o+c*c),m=Math.max(c,o),d=i.unbounded?m:s+u,p=Math.floor(m*l),b=d/p,w=t-a.left,v=e-a.top;i.unbounded&&(w=.5*o,v=.5*c);var y=w-.5*p,h=v-.5*p,k=.5*o-w,g=.5*c-v;Object(r.f)(function(){var t=document.createElement("div");t.classList.add("ripple-effect");var e=t.style;e.top=h+"px",e.left=y+"px",e.width=e.height=p+"px",e.setProperty("--final-scale","".concat(b)),e.setProperty("--translate-end","".concat(k,"px, ").concat(g,"px")),(i.el.shadowRoot||i.el).appendChild(t),setTimeout(function(){n(function(){f(t)})},325)})})}));case 1:case"end":return n.stop()}},n)}),d=function(){var n=this,e=arguments;return new Promise(function(i,a){var o=m.apply(n,e);function r(n){t(o,i,a,r,c,"next",n)}function c(n){t(o,i,a,r,c,"throw",n)}r(void 0)})},function(n,t){return d.apply(this,arguments)})},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"render",value:function(){var t,e=Object(c.b)(this);return Object(r.j)(r.c,{role:"presentation",class:(t={},n(t,e,!0),n(t,"unbounded",this.unbounded),t)})}},{key:"el",get:function(){return Object(r.k)(this)}}])&&e(a.prototype,o),s&&e(a,s),i}(),f=function(n){n.classList.add("fade-out"),setTimeout(function(){n.remove()},200)},u=10,l=.5;s.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}])}();