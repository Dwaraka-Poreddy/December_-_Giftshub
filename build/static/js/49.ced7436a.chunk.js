(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[49],{104:function(e,a,t){"use strict";var n=t(1),l=t.n(n);t(131);a.a=function({selected:e,Icon:a,title:t,handleClick:n}){return l.a.createElement("div",{onClick:n,className:"HeaderBtn ".concat(e&&"selected")},l.a.createElement(a,{className:"HeaderBtn__icon"}),l.a.createElement("h2",{className:"HeaderBtn__title"}," ",t," ")," ")}},105:function(e,a,t){},131:function(e,a,t){},138:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.2c061749.svg"},164:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(99),l=t(1),r=t.n(l);t(105),t(108);function c(){var e=Object(l.useState)(!1),a=Object(n.a)(e,2),c=a[0],i=a[1];Object(l.useEffect)(()=>{window.addEventListener("scroll",s)},[]);var s=()=>{window.scrollY>=100?i(!0):i(!1)};return r.a.createElement("div",null,r.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},r.a.createElement("div",{class:"container"},r.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},r.a.createElement("img",{src:t(138),alt:""})),r.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",r.a.createElement("i",{class:"fas fa-bars ml-1"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},230:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(1),l=t.n(n);t(231);function r({text:e,name:a,fbimg:t,BDate:n}){var r=new Date;r.getFullYear(),r.getMonth(),r.getDate();return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"magazineMaindiv",style:{backgroundImage:"url("+t+")"}},l.a.createElement("div",{style:{textAlign:"right"}}," ",l.a.createElement("p",{className:"magazineDate"},new Date(n).toLocaleDateString("en-US"))),l.a.createElement("img",{style:{width:"85%",marginTop:"2%"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/1280px-Time_Magazine_logo.svg.png",alt:"time"}),l.a.createElement("div",{style:{marginLeft:"2%",marginRight:"2%",marginTop:"20%",display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{style:{float:"left",textAlign:"left",width:"45%",overflow:"hidden"}},l.a.createElement("h1",{className:"magazineText",style:{borderBottom:"0",paddingBottom:"0"}},"THE"),l.a.createElement("h1",{className:"magazineText"},e),l.a.createElement("h1",{className:"magazineName"},a)),l.a.createElement("div",{style:{float:"right",textAlign:"right"}},l.a.createElement("h1",{className:"magazineHot"},"HOT"),l.a.createElement("h1",{className:"magazineBuzz"},"BUZZ"),l.a.createElement("img",{className:"magazineBarcode",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png",alt:"time"})))))))}},231:function(e,a,t){},958:function(e,a,t){"use strict";t.r(a);var n=t(25),l=t.n(n),r=t(32),c=t(99),i=t(1),s=t.n(i),m=t(230),o=t(31),u=(t(104),t(164)),g=t(45),v=t.n(g);a.default=function({match:e}){var a=Object(i.useState)(""),t=Object(c.a)(a,2),n=t[0],g=t[1],d=Object(i.useState)(""),b=Object(c.a)(d,2),f=b[0],E=b[1],p=Object(i.useState)(""),h=Object(c.a)(p,2),x=h[0],w=h[1],j=Object(i.useState)(!1),k=Object(c.a)(j,2),O=k[0],y=k[1];return Object(i.useEffect)(Object(r.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return y(!0),a.next=3,o.b.database().ref("/Magazine/"+e.params.slug).once("value").then(e=>{var a=e.val().url;g(a);var t=e.val().text;E(t);var n=e.val().name;w(n)});case 3:a.sent,y(!1);case 5:case"end":return a.stop()}}),a)}))),[]),s.a.createElement("div",null,s.a.createElement(u.a,null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("div",{className:"mb-3",style:{flex:"0.8",margin:"auto"}},O?s.a.createElement(v.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):s.a.createElement(m.a,{fbimg:n,text:f,name:x}))))}}}]);
//# sourceMappingURL=49.ced7436a.chunk.js.map