(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{STjf:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_ripple_effect",function(){return r});var e=i("20ZU"),a=i("wEJo"),o=i("E/Mt");const r=class{constructor(t){Object(a.o)(this,t),this.type="bounded"}addRipple(t,n){var i=this;return Object(e.a)(function*(){return new Promise(e=>{Object(a.h)(()=>{const o=i.el.getBoundingClientRect(),r=o.width,m=o.height,f=Math.sqrt(r*r+m*m),d=Math.max(m,r),u=i.unbounded?d:f+c,p=Math.floor(d*l),b=u/p;let w=t-o.left,k=n-o.top;i.unbounded&&(w=.5*r,k=.5*m);const h=w-.5*p,y=k-.5*p,g=.5*r-w,v=.5*m-k;Object(a.f)(()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=y+"px",n.left=h+"px",n.width=n.height=p+"px",n.setProperty("--final-scale",`${b}`),n.setProperty("--translate-end",`${g}px, ${v}px`),(i.el.shadowRoot||i.el).appendChild(t),setTimeout(()=>{e(()=>{s(t)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=Object(o.b)(this);return Object(a.j)(a.c,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return Object(a.k)(this)}},s=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},c=10,l=.5;r.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);