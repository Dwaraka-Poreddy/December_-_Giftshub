(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[60],{105:function(e,a,t){},138:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.2c061749.svg"},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(99),r=t(1),l=t.n(r);t(105),t(108);function c(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),c=a[0],s=a[1];Object(r.useEffect)(()=>{window.addEventListener("scroll",i)},[]);var i=()=>{window.scrollY>=100?s(!0):s(!1)};return l.a.createElement("div",null,l.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},l.a.createElement("img",{src:t(138),alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars ml-1"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},274:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(1),r=t.n(n);t(275);function l({fbimg:e,firstcol:a,secondcol:t}){return r.a.createElement("div",{style:{backgroundImage:"linear-gradient(to right, ".concat(a,", ").concat(t,")")}},r.a.createElement("div",{style:{paddingTop:"5%"},className:"ThreeDImage"},r.a.createElement("div",{class:"tdexample"},r.a.createElement("div",{class:"tdblock"},r.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdmain"}),r.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdleft"})),r.a.createElement("div",{class:"tdblock"},r.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdmain"}),r.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdleft"})),r.a.createElement("div",{class:"tdblock"},r.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdmain"}),r.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdleft"})))))}},275:function(e,a,t){},949:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t(25),r=t.n(n),l=t(32),c=t(99),s=t(1),i=t.n(s),o=t(274),d=t(45),u=t.n(d),v=t(31),m=t(164);function b({match:e}){var a=Object(s.useState)(""),t=Object(c.a)(a,2),n=t[0],d=t[1],b=Object(s.useState)(""),g=Object(c.a)(b,2),f=g[0],E=g[1],p=Object(s.useState)(""),k=Object(c.a)(p,2),h=k[0],j=k[1],O=Object(s.useState)(!1),y=Object(c.a)(O,2),x=y[0],w=y[1];return Object(s.useEffect)(Object(l.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.next=3,v.b.database().ref("/ThreeDImage/"+e.params.slug).once("value").then(e=>{var a=e.val().url;d(a);var t=e.val().firstcol;E(t);var n=e.val().secondcol;j(n),w(!1)});case 3:a.sent;case 4:case"end":return a.stop()}}),a)}))),[]),i.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},i.a.createElement(m.a,null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{backgroundColor:"#70cff3"}},x?i.a.createElement(u.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):i.a.createElement(o.a,{firstcol:f,secondcol:h,fbimg:n})))}}}]);
//# sourceMappingURL=60.c705102b.chunk.js.map