(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[43],{1038:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(24),n=a.n(r),c=a(32),i=a(93),o=a(1),l=a.n(o),u=a(21),s=a(289),f=a(42),b=a.n(f),m=a(31),h=a(198),d=a(197);function g({match:e}){var t=Object(u.b)(),a=Object(o.useState)(!1),r=Object(i.a)(a,2),f=r[0],g=r[1],y=m.b.firestore(),v=Object(o.useState)([]),p=Object(i.a)(v,2),j=p[0],O=(p[1],Object(o.useState)("")),E=Object(i.a)(O,2),w=E[0],S=E[1],x=Object(o.useState)(""),k=Object(i.a)(x,2),A=k[0],D=k[1],I=Object(o.useState)(""),T=Object(i.a)(I,2),B=T[0],C=T[1],M=Object(o.useState)(""),F=Object(i.a)(M,2),_=F[0],N=F[1],P=Object(o.useState)(""),Y=Object(i.a)(P,2),J=Y[0],X=Y[1],G=Object(o.useState)(""),L=Object(i.a)(G,2),R=L[0],U=L[1],V=Object(o.useState)(""),$=Object(i.a)(V,2),q=$[0],z=$[1],H=Object(o.useState)(""),K=Object(i.a)(H,2),Q=K[0],W=K[1],Z=Object(o.useState)(""),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1],re=Object(o.useState)(""),ne=Object(i.a)(re,2),ce=ne[0],ie=ne[1],oe=Object(o.useState)(),le=Object(i.a)(oe,2),ue=le[0],se=le[1];function fe(){return(fe=Object(c.a)(n.a.mark((function a(){var r,c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.collection("Livelinks").doc(e.params.slug).get();case 2:r=a.sent,c=r.data(),S(c),c.array_data.map((e,a)=>{"collage"==e.id&&(se(a),t({type:"ACTIVE_STEP",payload:{day:a+1}})),j[a]=e.url});case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}Object(o.useEffect)(()=>{!function(){fe.apply(this,arguments)}(),console.log(w,"liveData"),console.log(e.params.slug,"slug",e.params.id,"id")},[]),Object(o.useEffect)(()=>{g(!0);m.b.database().ref("/Collage/"+e.params.id).once("value").then(e=>{var t=e.val().url1;console.log(t),D(t);var a=e.val().url2;C(a);var r=e.val().url3;N(r);var n=e.val().url4;X(n);var c=e.val().url5;U(c);var i=e.val().url6;z(i);var o=e.val().url7;W(o);var l=e.val().url8;ae(l);var u=e.val().url9;ie(u),g(!1)})},[]);var be=()=>{(new Date).getFullYear();var e=+new Date(w.Bday_date)-+new Date-198e5-864e5*(j.length-ue);console.log(e,"difference");var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},me=Object(o.useState)(be()),he=Object(i.a)(me,2),de=he[0],ge=he[1];Object(o.useEffect)(()=>{setTimeout(()=>{ge(be())},1e3)});var ye=[];return Object.keys(de).forEach(e=>{de[e]&&ye.push(l.a.createElement("span",null,de[e]," ",e," "))}),l.a.createElement("div",{style:{backgroundColor:"#70cff3"}},l.a.createElement(d.a,{dataurl:j,slug:e.params.slug}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{backgroundColor:"#70cff3"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:"0.1"}}),l.a.createElement("div",{style:{flex:"0.7"}},f?l.a.createElement(b.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):l.a.createElement("div",null,new Date(w.Bday_date)-+new Date-198e5-864e5*(j.length-ue-1)>0?l.a.createElement("div",{style:{margin:"auto",position:"absolute",top:"50%",left:"50%",MsTransform:"translateY(-50%) translateX(-50%)",transform:"translateY(-50%) translateX(-50%)"}},l.a.createElement("h5",{className:"example"}," This Gift opens in "),l.a.createElement(h.a,{Bday:+new Date(w.Bday_date)-+new Date-198e5-864e5*(j.length-ue-1)})):l.a.createElement("div",null,l.a.createElement("center",null," ",j.length-ue-1==0?l.a.createElement("h1",{className:"example"},"The Big day is here !!!"):j.length-ue-1==1?l.a.createElement("h1",{className:"example"},j.length-ue-1," day to go !!!"):l.a.createElement("h1",{className:"example"},j.length-ue-1," days to go !!!")),l.a.createElement(s.a,{fbimg1:A,fbimg2:B,fbimg3:_,fbimg4:J,fbimg5:R,fbimg6:q,fbimg7:Q,fbimg8:te,fbimg9:ce})))),l.a.createElement("div",{style:{flex:"0.1"}}))))}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(208);var n=a(306),c=a(209);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(n.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},134:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},162:function(e,t,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return r}))},164:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}a.d(t,"a",(function(){return n}))},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(237);var n=a(209),c=a(238);function i(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(l){n=!0,c=l}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}}(e,t)||Object(n.a)(e,t)||Object(c.a)()}},191:function(e,t,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return r}))},208:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(208);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},237:function(e,t,a){"use strict";function r(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return r}))},238:function(e,t,a){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}a.d(t,"a",(function(){return r}))},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(93),n=a(1),c=a.n(n),i=a(296),o=a(15),l={cursor:"pointer"},u=({index:e,onClick:t,photo:a,margin:r,direction:n,top:i,left:u})=>{var s={margin:r};"column"===n&&(s.position="absolute",s.left=u,s.top=i);return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",Object.assign({style:t?Object(o.a)(Object(o.a)({},s),l):s},a,{onClick:t?r=>{t(r,{photo:a,index:e})}:null,alt:"img"})))},s=a(297),f=a.n(s),b=a(302),m=Object(b.b)(e=>c.a.createElement(u,e)),h=Object(b.a)(({items:e})=>c.a.createElement(i.a,{photos:e,renderImage:e=>c.a.createElement(m,e)}));function d({fbimg1:e,fbimg2:t,fbimg3:a,fbimg4:i,fbimg5:o,fbimg6:l,fbimg7:u,fbimg8:s,fbimg9:b}){var m=Object(n.useState)([{src:e,width:4,height:3},{src:t,width:1,height:1},{src:a,width:3,height:4},{src:i,width:3,height:4},{src:o,width:3,height:4},{src:l,width:4,height:3},{src:u,width:3,height:4},{src:s,width:4,height:3},{src:b,width:4,height:3}]),d=Object(r.a)(m,2),g=d[0],y=(d[1],Object(n.useState)(g)),v=Object(r.a)(y,2),p=v[0],j=v[1];return Object(n.useEffect)(()=>{j([{src:e,width:4,height:3},{src:t,width:1,height:1},{src:a,width:3,height:4},{src:i,width:3,height:4},{src:o,width:3,height:4},{src:l,width:4,height:3},{src:u,width:3,height:4},{src:s,width:4,height:3},{src:b,width:4,height:3}])},[e,t,a,i,o,l,u,s,b]),c.a.createElement("div",null,c.a.createElement("h3",null,"Drag photo to rearrange"),c.a.createElement(h,{items:p,onSortEnd:({oldIndex:e,newIndex:t})=>{j(f()(p,e,t))},axis:"xy"}))}},306:function(e,t,a){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=43.a24c71cd.chunk.js.map