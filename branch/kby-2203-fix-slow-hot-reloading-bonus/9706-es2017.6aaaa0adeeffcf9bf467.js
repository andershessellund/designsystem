"use strict";(self.webpackChunkdesignsystem=self.webpackChunkdesignsystem||[]).push([[9706],{22557:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var s=n(52377),r=n(97279);n(40960);const a=(e,t,n,a,i)=>{const c=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{a(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,n=e.deltaX/t,r=e.velocityX,a=r>=0&&(r>.2||e.deltaX>t/2),o=(a?1-n:n)*t;let u=0;if(o>5){const e=o/Math.abs(r);u=Math.min(e,540)}i(a,n<=0?.01:(0,s.j)(0,n,.9999),u)}})}}}]);