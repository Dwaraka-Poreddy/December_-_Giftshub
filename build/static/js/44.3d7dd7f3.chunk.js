(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[44],{105:function(e,t,r){},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(233);var n=r(293),i=r(234);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(n.a)(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},138:function(e,t,r){e.exports=r.p+"static/media/navbar-logo.2c061749.svg"},152:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},164:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(99),n=r(1),i=r.n(n);r(105),r(108);function c(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],l=t[1];Object(n.useEffect)(()=>{window.addEventListener("scroll",o)},[]);var o=()=>{window.scrollY>=100?l(!0):l(!1)};return i.a.createElement("div",null,i.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},i.a.createElement("div",{class:"container"},i.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},i.a.createElement("img",{src:r(138),alt:""})),i.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",i.a.createElement("i",{class:"fas fa-bars ml-1"})),i.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},i.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},i.a.createElement("li",{class:"nav-item"},i.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},169:function(e,t,r){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,"a",(function(){return a}))},170:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}r.d(t,"a",(function(){return n}))},190:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(294);var n=r(234),i=r(295);function c(e,t){return Object(a.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);a=!0);}catch(o){n=!0,i=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return r}}(e,t)||Object(n.a)(e,t)||Object(i.a)()}},196:function(e,t,r){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return a}))},233:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},234:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(233);function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(99),n=r(1),i=r.n(n),c=r(283),l=r(15),o={cursor:"pointer"},u=({index:e,onClick:t,photo:r,margin:a,direction:n,top:c,left:u})=>{var s={margin:a};"column"===n&&(s.position="absolute",s.left=u,s.top=c);return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",Object.assign({style:t?Object(l.a)(Object(l.a)({},s),o):s},r,{onClick:t?a=>{t(a,{photo:r,index:e})}:null,alt:"img"})))},s=r(284),b=r.n(s),f=r(287),m=Object(f.b)(e=>i.a.createElement(u,e)),d=Object(f.a)(({items:e})=>i.a.createElement(c.a,{photos:e,renderImage:e=>i.a.createElement(m,e)}));function h({fbimg1:e,fbimg2:t,fbimg3:r,fbimg4:c,fbimg5:l,fbimg6:o,fbimg7:u,fbimg8:s,fbimg9:f}){var m=Object(n.useState)([{src:e,width:4,height:3},{src:t,width:1,height:1},{src:r,width:3,height:4},{src:c,width:3,height:4},{src:l,width:3,height:4},{src:o,width:4,height:3},{src:u,width:3,height:4},{src:s,width:4,height:3},{src:f,width:4,height:3}]),h=Object(a.a)(m,2),v=h[0],g=(h[1],Object(n.useState)(v)),p=Object(a.a)(g,2),y=p[0],j=p[1];return Object(n.useEffect)(()=>{j([{src:e,width:4,height:3},{src:t,width:1,height:1},{src:r,width:3,height:4},{src:c,width:3,height:4},{src:l,width:3,height:4},{src:o,width:4,height:3},{src:u,width:3,height:4},{src:s,width:4,height:3},{src:f,width:4,height:3}])},[e,t,r,c,l,o,u,s,f]),i.a.createElement("div",null,i.a.createElement("center",null,i.a.createElement("h3",null,"Drag photo to rearrange")),i.a.createElement(d,{items:y,onSortEnd:({oldIndex:e,newIndex:t})=>{j(b()(y,e,t))},axis:"xy"}))}},293:function(e,t,r){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,"a",(function(){return a}))},294:function(e,t,r){"use strict";function a(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return a}))},295:function(e,t,r){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return a}))},960:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var a=r(25),n=r.n(a),i=r(32),c=r(99),l=r(1),o=r.n(l),u=r(277),s=r(45),b=r.n(s),f=r(31),m=r(164);function d({match:e}){var t=Object(l.useState)(!1),r=Object(c.a)(t,2),a=r[0],s=r[1],d=Object(l.useState)(""),h=Object(c.a)(d,2),v=h[0],g=h[1],p=Object(l.useState)(""),y=Object(c.a)(p,2),j=y[0],O=y[1],E=Object(l.useState)(""),w=Object(c.a)(E,2),S=w[0],x=w[1],k=Object(l.useState)(""),A=Object(c.a)(k,2),I=A[0],C=A[1],T=Object(l.useState)(""),F=Object(c.a)(T,2),R=F[0],B=F[1],J=Object(l.useState)(""),M=Object(c.a)(J,2),P=M[0],U=M[1],D=Object(l.useState)(""),L=Object(c.a)(D,2),N=L[0],Y=L[1],$=Object(l.useState)(""),q=Object(c.a)($,2),z=q[0],G=q[1],H=Object(l.useState)(""),K=Object(c.a)(H,2),Q=K[0],V=K[1];Object(l.useEffect)(Object(i.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,f.b.database().ref("/Collage/"+e.params.slug).once("value").then(e=>{var t=e.val().url1;g(t);var r=e.val().url2;O(r);var a=e.val().url3;x(a);var n=e.val().url4;C(n);var i=e.val().url5;B(i);var c=e.val().url6;U(c);var l=e.val().url7;Y(l);var o=e.val().url8;G(o);var u=e.val().url9;V(u)});case 3:t.sent,s(!1);case 5:case"end":return t.stop()}}),t)}))),[]);return o.a.createElement("div",{style:{backgroundColor:"#70cff3"}},o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flex:"0.1"}}),o.a.createElement("div",{style:{flex:"0.8"}},a?o.a.createElement(b.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):o.a.createElement("div",null," ",o.a.createElement(m.a,null),o.a.createElement("br",null)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(u.a,{fbimg1:v,fbimg2:j,fbimg3:S,fbimg4:I,fbimg5:R,fbimg6:P,fbimg7:N,fbimg8:z,fbimg9:Q}))),o.a.createElement("div",{style:{flex:"0.1"}}))))}}}]);
//# sourceMappingURL=44.3d7dd7f3.chunk.js.map