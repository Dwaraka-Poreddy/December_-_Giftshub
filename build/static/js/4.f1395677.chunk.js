(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[4],{104:function(e,t,n){e.exports=n.p+"static/media/navbar-logo.2c061749.svg"},106:function(e,t,n){},197:function(e,t,n){"use strict";var r=n(24),a=n.n(r),i=n(32),o=n(93),c=n(15),l=n(1),u=n.n(l),s=n(31),f=n(21);n(106),n(103);t.a=function({slug:e}){var t=Object(f.c)(e=>Object(c.a)({},e)).daystep,r=s.b.firestore(),d=Object(l.useState)([]),p=Object(o.a)(d,2),m=p[0],b=(p[1],Object(l.useState)(!1)),y=Object(o.a)(b,2),v=y[0],g=y[1];Object(l.useEffect)(()=>{window.addEventListener("scroll",h)},[]);var h=()=>{window.scrollY>=100?g(!0):g(!1)};function O(){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.collection("Livelinks").doc(e).get();case 2:return n=t.sent,t.next=5,n.data().array_data;case 5:t.sent.map((e,t)=>{m[t]=e.url});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)(Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:case"end":return e.stop()}}),e)}))),[]),u.a.createElement("div",null,u.a.createElement("nav",{class:v?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},u.a.createElement("div",{class:"container"},u.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},u.a.createElement("img",{src:n(104),alt:""})),u.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",u.a.createElement("i",{class:"fas fa-bars ml-1"})),u.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},u.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},u.a.createElement("li",{class:"nav-item"},u.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#about"},"About")),m.map((e,n)=>{if(""!=e)return n==t.day-1?u.a.createElement("li",{class:"nav-item "},u.a.createElement("a",{class:"nav-link js-scroll-trigger active",href:e},"Day ",n+1)):u.a.createElement("li",{class:"nav-item "},u.a.createElement("a",{class:"nav-link js-scroll-trigger",href:e},"Day ",n+1))}))))))}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(93),a=n(1),i=n.n(a),o=n(934),c=(n(42),n(175)),l={isPlaying:!0,size:190,strokeWidth:6},u={isPlaying:!0,size:80,strokeWidth:3},s={isPlaying:!0,size:150,strokeWidth:4},f=(e,t)=>i.a.createElement("div",{className:"time-wrapper"},i.a.createElement("div",{className:"time"},t),i.a.createElement("div",null,e)),d=e=>60-e/1e3|0,p=e=>e%3600/60|0,m=e=>e%86400/3600|0,b=e=>e/86400|0;function y({Bday:e}){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),y=(n[0],n[1],e/1e3);console.log(y,"endtime");var v=y-0;console.log(v,"endtime_remaining");var g=86400*Math.ceil(v/86400);return i.a.createElement("div",{style:{paddingTop:"20vh",paddingBottom:"20vh"}},v>0?i.a.createElement("div",null,c.isMobileOnly?i.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",fontSize:"14px"}},i.a.createElement(o.CountdownCircleTimer,Object.assign({},u,{colors:[["#7E2E84"]],duration:g,initialRemainingTime:v}),({elapsedTime:e})=>f("days",b(g-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},u,{colors:[["#00b4c6"]],duration:86400,initialRemainingTime:v%86400,onComplete:e=>[v-e>3600]}),({elapsedTime:e})=>f("hours",m(86400-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},u,{colors:[["#fc9700"]],duration:3600,initialRemainingTime:v%3600,onComplete:e=>[v-e>60]}),({elapsedTime:e})=>f("minutes",p(3600-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},u,{colors:[["#218380"]],duration:60,initialRemainingTime:v%60,onComplete:e=>[v-e>0]}),({elapsedTime:e})=>f("seconds",d(e)))):c.isTablet?i.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",fontSize:"24px"}},i.a.createElement(o.CountdownCircleTimer,Object.assign({},s,{colors:[["#7E2E84"]],duration:g,initialRemainingTime:v}),({elapsedTime:e})=>f("days",b(g-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#00b4c6"]],duration:86400,initialRemainingTime:v%86400,onComplete:e=>[v-e>3600]}),({elapsedTime:e})=>f("hours",m(86400-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#fc9700"]],duration:3600,initialRemainingTime:v%3600,onComplete:e=>[v-e>60]}),({elapsedTime:e})=>f("minutes",p(3600-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#218380"]],duration:60,initialRemainingTime:v%60,onComplete:e=>[v-e>0]}),({elapsedTime:e})=>f("seconds",d(e)))):i.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",fontSize:"35px"}},i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#7E2E84"]],duration:g,initialRemainingTime:v}),({elapsedTime:e})=>f("days",b(g-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#00b4c6"]],duration:86400,initialRemainingTime:v%86400,onComplete:e=>[v-e>3600]}),({elapsedTime:e})=>f("hours",m(86400-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#fc9700"]],duration:3600,initialRemainingTime:v%3600,onComplete:e=>[v-e>60]}),({elapsedTime:e})=>f("minutes",p(3600-e/1e3))),i.a.createElement(o.CountdownCircleTimer,Object.assign({},l,{colors:[["#218380"]],duration:60,initialRemainingTime:v%60,onComplete:e=>[v-e>0]}),({elapsedTime:e})=>f("seconds",d(e))))):null)}},934:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){e.exports=n(3)()},function(e,t){e.exports=n(1)},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=n(1)},function(e,t,n){"use strict";n.r(t),n.d(t,"useElapsedTime",(function(){return o}));var r=n(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.durationMilliseconds,i=t.onComplete,o=t.startAt,c=void 0===o?0:o,l="number"==typeof n,u=Object(r.useState)(c),s=a(u,2),f=s[0],d=s[1],p=Object(r.useRef)(-1*c),m=Object(r.useRef)(null),b=Object(r.useRef)(null),y=Object(r.useRef)(null);Object(r.useEffect)((function(){return function(){null!==y.current&&clearTimeout(y.current)}}),[]);var v=function e(t){if(null===b.current)return b.current=t,void(m.current=requestAnimationFrame(e));d((function(r){var o=r+(t-b.current);if(!l||o<n)return b.current=t,m.current=requestAnimationFrame(e),o;if("function"==typeof i){p.current+=n;var c=a(i(p.current)||[],2),u=c[0],s=void 0!==u&&u,f=c[1],v=void 0===f?0:f;s&&(y.current=setTimeout((function(){d(0),b.current=null,m.current=requestAnimationFrame(e)}),v))}return n}))};return Object(r.useLayoutEffect)((function(){return e&&(m.current=requestAnimationFrame(v)),function(){cancelAnimationFrame(m.current),b.current=null,m.current=null}}),[e]),f}}])},function(e,t,n){"use strict";var r=n(4);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t),n.d(t,"CountdownCircleTimer",(function(){return C}));var r=n(1),a=n.n(r),i=function(e){return{position:"relative",width:e,height:e}},o={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},c=n(0),l=n.n(c),u={duration:l.a.number.isRequired,colors:l.a.arrayOf(l.a.arrayOf((function(e,t,n,r,a){var i=e[0],o=e[1];return i.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)?void 0===o||o>=0&&o<=1?void 0:new Error("Invalid prop '".concat(a,"[1]' supplied to '").concat(n,"'. Expect a number of color transition duration with value between 0 and 1.")):new Error("Invalid prop '".concat(a,"[0]' supplied to '").concat(n,"'.Expect a color with HEX color code."))})).isRequired).isRequired,children:l.a.oneOfType([l.a.func,l.a.node]),size:l.a.number,strokeWidth:l.a.number,trailColor:l.a.string,isPlaying:l.a.bool,strokeLinecap:l.a.oneOf(["round","square"]),isLinearGradient:l.a.bool,gradientUniqueKey:l.a.string,onComplete:l.a.func,ariaLabel:l.a.string,renderAriaTime:l.a.func,initialRemainingTime:l.a.number};function s(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=e.gradientId,n=e.colors,r=e.defs,i=void 0===r?"defs":r,o=e.linearGradient,c=void 0===o?"linearGradient":o,l=e.stop,u=void 0===l?"stop":l;return a.a.createElement(i,null,a.a.createElement(c,{id:t,x1:"1",y1:"0",x2:"0",y2:"0"},function(e){if(1===e.length)return[{offset:1,stopColor:e[0][0],key:0}];var t=e.length,n=0;return[{offset:0,stopColor:e[0][0],key:0}].concat(function(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e.map((function(e,r){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),i=a[0],o=a[1];return n+=o,{offset:t===r+1?1:n,stopColor:i,key:r+1}}))))}(n).map((function(e){return a.a.createElement(u,e)}))))},p=l.a.oneOfType([l.a.func,l.a.string]);d.propTypes={gradientId:l.a.string.isRequired,colors:u.colors,defs:p,linearGradient:p,stop:p};var m=n(2),b=function(e,t,n,r){return t+n*(e/r)};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){var t=e.r,n=e.g,r=e.b,a=e.opacity;return"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(a,")")},O={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:0,clip:"rect(0 0 0 0)",padding:0,overflow:"hidden",whiteSpace:"nowrap",wordWrap:"normal"},j=function(e){var t=e.isPlaying,n=e.size,a=e.strokeWidth,c=e.duration,l=e.initialRemainingTime,u=e.colors,s=e.isLinearGradient,f=e.gradientUniqueKey,d=e.onComplete,p={wrapperStyle:i(n),timeStyle:o,visuallyHidden:O},y=Object(r.useMemo)((function(){return function(e,t){var n=e/2,r=t/2,a=n-r,i=2*a,o=2*Math.PI*a;return{path:"m ".concat(n,",").concat(r,"\n          a ").concat(a,",").concat(a," 0 1,0 0,").concat(i,"\n          a ").concat(a,",").concat(a," 0 1,0 0,-").concat(i),pathLength:o}}(n,a)}),[n,a]),g=y.path,j=y.pathLength,E=Object(r.useMemo)((function(){return 1e3*c}),[c]),T=Object(r.useMemo)((function(){return function(e,t){return"number"==typeof e?1e3*(t-e):0}(l,c)}),[l,c]),w=Object(r.useMemo)((function(){return function(e,t,n){var r=function(e,t){var n=function(e){return e.map((function(e){var t=e[0].replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return"#".concat(t).concat(t).concat(n).concat(n).concat(r).concat(r)})).substring(1).match(/.{2}/g).map((function(e){return parseInt(e,16)}));return[{r:t[0],g:t[1],b:t[2],opacity:1},e[1]]}))}(e);if(!t)return n;var r=0;return n.map((function(e,t){var a=n.length===t+1,i="0%";if(t>0){var o=n[t-1][1],c=Math.round(o?100*o:100);(r+=c)>100||a?(r=100,i="100%"):i="".concat(r,"%")}var l={offset:i,stopColor:h(e[0]),key:t};return[v({},e[0],{gradient:l}),e[1]]}))}(e,n),a=0;return r.map((function(e,n){var i=r.length===n+1;if(a>=t||i)return a=t,v({},e[0],{colorEndTime:a});var o=a,c=void 0!==e[1]?o+e[1]*t:t-a,l=c>=t?t:c,u=r[n+1][0],s={goalR:u.r-e[0].r,goalG:u.g-e[0].g,goalB:u.b-e[0].b};return a=l,v({},e[0],{},s,{colorStartTime:o,colorEndTime:l,duration:l-o})}))}(u,E,s)}),[u,E,s]),C=Object(r.useMemo)((function(){return function(e){return"countdown-circle-timer-gradient-".concat(e||Math.random().toString(36).substring(2))}(f)}),[f]),x=Object(m.useElapsedTime)(t,{startAt:T,durationMilliseconds:E,onComplete:"function"==typeof d?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return d.apply(void 0,[e/1e3].concat(n))}:void 0});return{path:g,pathLength:j,stroke:function(e,t){if(1===e.length)return h(e[0]);var n=e.find((function(e){var n=e.colorEndTime;return t<=n}));if(void 0===n.duration)return h(n);var r=t-n.colorStartTime,a=0|b(r,n.r,n.goalR,n.duration),i=0|b(r,n.g,n.goalG,n.duration),o=0|b(r,n.b,n.goalB,n.duration);return h({r:a,g:i,b:o,opacity:n.opacity})}(w,x),strokeDashoffset:b(x,0,j,E).toFixed(3),gradientId:C,styles:p,timeProps:{remainingTime:Math.ceil((E-x)/1e3),elapsedTime:x}}};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){var t=e.size,n=e.strokeWidth,r=e.trailColor,i=e.duration,o=e.isPlaying,c=e.colors,l=e.strokeLinecap,u=e.children,s=e.isLinearGradient,f=e.gradientUniqueKey,p=e.onComplete,m=e.ariaLabel,b=e.renderAriaTime,y=e.initialRemainingTime,v=j({isPlaying:o,size:t,strokeWidth:n,duration:i,initialRemainingTime:y,colors:c,isLinearGradient:s,gradientUniqueKey:f,onComplete:p}),g=v.path,h=v.pathLength,O=v.stroke,E=v.strokeDashoffset,w=v.gradientId,C=v.styles,x=v.timeProps;return a.a.createElement("div",{style:C.wrapperStyle,"aria-label":m},a.a.createElement("svg",{width:t,height:t,xmlns:"http://www.w3.org/2000/svg"},s&&a.a.createElement(d,{colors:c,gradientId:w}),a.a.createElement("path",{d:g,fill:"none",stroke:r,strokeWidth:n}),a.a.createElement("path",{d:g,fill:"none",stroke:s?"url(#".concat(w,")"):O,strokeLinecap:l,strokeWidth:n,strokeDasharray:h,strokeDashoffset:E})),null!==u&&a.a.createElement("div",{"aria-hidden":"true",style:T({},C.timeStyle,{color:O})},a.a.isValidElement(u)?a.a.cloneElement(a.a.Children.only(u),x):u(x)),"function"==typeof b&&a.a.createElement("div",{role:"timer","aria-live":"assertive",style:C.visuallyHidden},b(x)))};C.propTypes=u,C.defaultProps={size:180,strokeWidth:12,trailColor:"#d9d9d9",isPlaying:!1,strokeLinecap:"round",isLinearGradient:!1,ariaLabel:"Countdown timer",children:null},C.displayName="CountdownCircleTimer"}])}}]);
//# sourceMappingURL=4.f1395677.chunk.js.map