(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[66],{105:function(e,a,t){},136:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.2c061749.svg"},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(99),r=t(1),l=t.n(r);t(105),t(107);function c(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),c=a[0],s=a[1];Object(r.useEffect)(()=>{window.addEventListener("scroll",o)},[]);var o=()=>{window.scrollY>=100?s(!0):s(!1)};return l.a.createElement("div",null,l.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},l.a.createElement("img",{src:t(136),alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars ml-1"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},918:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(25),r=t.n(n),l=t(32),c=t(99),s=t(1),o=t.n(s),i=t(277),v=t(45),u=t.n(v),b=t(31),d=t(164);function f({match:e}){var a=Object(s.useState)(""),t=Object(c.a)(a,2),n=t[0],v=t[1],f=Object(s.useState)(""),m=Object(c.a)(f,2),g=(m[0],m[1]),p=Object(s.useState)(""),E=Object(c.a)(p,2),h=(E[0],E[1]),j=Object(s.useState)(!0),O=Object(c.a)(j,2),k=O[0],x=O[1];return Object(s.useEffect)(Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return x(!0),a.next=3,b.b.database().ref("/Calendar/"+e.params.slug).once("value").then(e=>{var a=e.val().url;v(a);var t=e.val().firstcol;g(t);var n=e.val().secondcol;h(n),x(!1)});case 3:a.sent;case 4:case"end":return a.stop()}}),a)}))),[]),o.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},o.a.createElement(d.a,null),o.a.createElement("br",null),o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("div",{style:{backgroundColor:"#70cff3"}},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{flex:"1"}},k?o.a.createElement(u.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):o.a.createElement(i.a,{fbimg:n})))))}}}]);
//# sourceMappingURL=66.12caa7a8.chunk.js.map