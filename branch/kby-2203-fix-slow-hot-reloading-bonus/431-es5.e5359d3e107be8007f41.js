!function(){"use strict";function t(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(l)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkdesignsystem=self.webpackChunkdesignsystem||[]).push([[431],{10431:function(e,i,r){r.r(i),r.d(i,{ion_virtual_scroll:function(){return v}});var a=r(34553),o=r(23150),s=r(52377),l="item",h="header",u="footer",c=function(t,e){var n=f(t,e);return n&&t.ownerDocument?t.ownerDocument.importNode(n.content,!0).children[0]:null},f=function(t,e){switch(e){case l:return t.querySelector("template:not([name])");case h:return t.querySelector("template[name=header]");case u:return t.querySelector("template[name=footer]")}},d=function(t,e,n,i,r,a,o,s,c,f,d,v){for(var g=[],p=v+d,m=d;m<p;m++){var y=t[m];if(r){var b=r(y,m,t);null!=b&&g.push({i:f++,type:h,value:b,index:m,height:n?n(b,m):o,reads:n?0:2,visible:!!n})}if(g.push({i:f++,type:l,value:y,index:m,height:e?e(y,m):c,reads:e?0:2,visible:!!e}),a){var x=a(y,m,t);null!=x&&g.push({i:f++,type:u,value:x,index:m,height:i?i(x,m):s,reads:i?0:2,visible:!!i})}}return g},v=function(){function e(t){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(0,o.r)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){n.updateVirtualScroll()}}var i,r,f;return i=e,f=[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}],(r=[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.el.closest("ion-content"))){e.next=10;break}return e.next=4,n.getScrollElement();case 4:t.scrollEl=e.sent,t.contentEl=n,t.calcCells(),t.updateState(),e.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return e.stop()}},e)}))()}},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(t){return Promise.resolve(function(t,e,n){var i=e.find(function(e){return e.type===l&&e.index===t});return i?n[i.i]:-1}(t,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=this;return(0,a.Z)(regeneratorRuntime.mark(function i(){var r,a,o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n.items){i.next=2;break}return i.abrupt("return");case 2:r=-1===e?n.items.length-t:e,a=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(function(t){return t.index===e})}(n.cells,t),o=d(n.items,n.itemHeight,n.headerHeight,n.footerHeight,n.headerFn,n.footerFn,n.approxHeaderHeight,n.approxFooterHeight,n.approxItemHeight,a,t,r),n.cells=function(t,e,n){if(0===n&&e.length>=t.length)return e;for(var i=0;i<e.length;i++)t[i+n]=e[i];return t}(n.cells,o,a),n.lastItemLen=n.items.length,n.indexDirty=Math.max(t-1,0),n.scheduleUpdate();case 4:case"end":return i.stop()}},i)}))()}},{key:"checkEnd",value:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.items&&t.checkRange(t.lastItemLen);case 1:case"end":return e.stop()}},e)}))()}},{key:"updateVirtualScroll",value:function(){!this.isEnabled||!this.scrollEl||(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,o.f)(this.readVS.bind(this)),(0,o.c)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var t=this.contentEl,e=this.scrollEl,n=0,i=this.el;i&&i!==t;)n+=i.offsetTop,i=i.offsetParent;this.viewportOffset=n,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}},{key:"writeVS",value:function(){var e=this.indexDirty,n=function(t,e,n){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),r=function(t,e,n){for(var i=e.top,r=e.bottom,a=0;a<t.length&&!(t[a]>i);a++);for(var o=Math.max(a-2-1,0);a<t.length&&!(t[a]>=r);a++);return{offset:o,length:Math.min(a+2,t.length)-o}}(i,n);!function(t,e,n){return t<=n.offset+n.length||e.offset!==n.offset||e.length!==n.length}(e,this.range,r)||(this.range=r,function(e,n,i,r){var a,o=t(e);try{for(o.s();!(a=o.n()).done;){var s=a.value;s.change=0,s.d=!0}}catch(p){o.e(p)}finally{o.f()}for(var l=[],h=r.offset+r.length,u=function(t){var r=i[t],a=e.find(function(t){return t.d&&t.cell===r});if(a){var o=n[t];o!==a.top&&(a.top=o,a.change=1),a.d=!1}else l.push(r)},c=r.offset;c<h;c++)u(c);for(var f=e.filter(function(t){return t.d}),d=function(){var t=g[v],i=f.find(function(e){return e.d&&e.cell.type===t.type}),r=t.i;i?(i.d=!1,i.change=2,i.cell=t,i.top=n[r]):e.push({d:!1,cell:t,visible:!0,change:2,top:n[r]})},v=0,g=l;v<g.length;v++)d();e.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,i,this.cells,r),this.nodeRender?function(t,e,n,i){for(var r,a=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),o=a.length,s=0;s<n.length;s++){var l=n[s],h=l.cell;if(2===l.change){if(s<o)e(r=a[s],h,s);else{var u=c(t,h.type);(r=e(u,h,s)||u).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=h}else r=a[s];0!==l.change&&(r.style.transform="translate3d(0,".concat(l.top,"px,0)"));var f=h.visible;l.visible!==f&&(f?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),l.visible=f),h.reads>0&&(i(h,r),h.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,o.j)(this))}},{key:"updateCellHeight",value:function(t,e){var n=this,i=function(){if(e.$ionCell===t){var i=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));n.setCellHeight(t,r)}};e?(0,s.c)(e,i):i()}},{key:"setCellHeight",value:function(t,e){var n=t.i;t===this.cells[n]&&(t.height!==e||!0!==t.visible)&&(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate())}},{key:"scheduleUpdate",value:function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)}},{key:"updateState",value:function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){!this.items||(this.lastItemLen=this.items.length,this.cells=d(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var n=new Uint32Array(e);return n.set(t),n}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,n){for(var i=t[n],r=n;r<t.length;r++)t[r]=i,i+=e[r].height;return i}(this.heightIndex,this.cells,t),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var n=this.scrollEl;n&&(this.isEnabled=t,n.addEventListener("scroll",this.onScroll),this.rmEvent=function(){n.removeEventListener("scroll",e.onScroll)})}},{key:"renderVirtualNode",value:function(t){var e=t.cell,n=e.type,i=e.value,r=e.index;switch(n){case l:return this.renderItem(i,r);case h:return this.renderHeader(i,r);case u:return this.renderFooter(i,r)}}},{key:"render",value:function(){var t=this;return(0,o.h)(o.H,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&(0,o.h)(g,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)})))}},{key:"el",get:function(){return(0,o.i)(this)}}])&&n(i.prototype,r),f&&n(i,f),e}(),g=function(t,e,n){var i=t.dom;return n.map(e,function(t,e){var n=i[e],r=t.vattrs||{},a=r.class||"";return a+="virtual-item ",n.visible||(a+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:a,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,".concat(n.top,"px,0)")})})})})};v.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}])}();