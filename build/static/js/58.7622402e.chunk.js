(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[58],{105:function(e,t,a){},136:function(e,t,a){e.exports=a.p+"static/media/navbar-logo.2c061749.svg"},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(99),r=a(1),l=a.n(r);a(105),a(107);function c(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),c=t[0],s=t[1];Object(r.useEffect)(()=>{window.addEventListener("scroll",i)},[]);var i=()=>{window.scrollY>=100?s(!0):s(!1)};return l.a.createElement("div",null,l.a.createElement("nav",{class:c?"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink":"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"/"},l.a.createElement("img",{src:a(136),alt:""})),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars ml-1"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"/aboutus"},"ABOUT")))))))}},211:function(e,t,a){},386:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(99),r=a(1),l=a.n(r);a(211);function c({fbimg1:e,fbimg2:t,fbimg3:a,fbimg4:c,fbimg5:s,fbimg6:i,text:o}){var u=Object(r.useState)(),m=Object(n.a)(u,2),v=m[0],d=m[1],b=Object(r.useState)(),g=Object(n.a)(b,2),f=g[0],p=g[1],h=Object(r.useState)([]),E=Object(n.a)(h,2),j=E[0],O=E[1],w=240;Object(r.useEffect)(()=>{d(document.getElementById("drag-container")),p(document.getElementById("spin-container")),O(document.getElementsByClassName("threedCarouselImg"))},[]),setTimeout(y,100);var x=[...j];function y(e){for(var t=0;t<x.length;t++)x[t].style.transform="rotateY("+60*t+"deg) translateZ("+w+"px)",x[t].style.transition="transform 1s",x[t].style.transitionDelay=e||(x.length-t)/4+"s"}function S(e){B>180&&(B=180),B<0&&(B=0),e.style.transform="rotateX("+-B+"deg) rotateY("+N+"deg)"}function I(e){f.style.animationPlayState=e?"running":"paused"}var C=0,k=0,N=0,B=10;return document.onpointerdown=function(e){clearInterval(v.timer);var t=(e=e||window.event).clientX,a=e.clientY;return this.onpointermove=function(e){var n=(e=e||window.event).clientX,r=e.clientY;N+=.1*(C=n-t),B+=.1*(k=r-a),S(v),t=n,a=r},this.onpointerup=function(e){v.timer=setInterval((function(){N+=.1*(C*=.95),B+=.1*(k*=.95),S(v),I(!1),Math.abs(C)<.5&&Math.abs(k)<.5&&(clearInterval(v.timer),I(!0))}),17),this.onpointermove=this.onpointerup=null},!1},document.onmousewheel=function(e){var t=(e=e||window.event).wheelDelta/20||-e.detail;w+=t,y(1)},l.a.createElement("div",{id:"ThreeDCarouseldiv"},l.a.createElement("div",{id:"drag-container"},l.a.createElement("div",{style:{height:"170px",width:"120px"},id:"spin-container"},l.a.createElement("img",{className:"threedCarouselImg",src:e,alt:""}),l.a.createElement("img",{className:"threedCarouselImg",src:t,alt:""}),l.a.createElement("img",{className:"threedCarouselImg",src:a,alt:""}),l.a.createElement("img",{className:"threedCarouselImg",src:c,alt:""}),l.a.createElement("img",{className:"threedCarouselImg",src:s,alt:""}),l.a.createElement("img",{className:"threedCarouselImg",src:i,alt:""}),l.a.createElement("p",null,o)),l.a.createElement("div",{style:{height:3*w+"px",width:3*w+"px"},id:"ground"})))}},919:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(25),r=a.n(n),l=a(32),c=a(99),s=a(1),i=a.n(s),o=a(386),u=a(45),m=a.n(u),v=a(31),d=a(164);function b({match:e}){var t=Object(s.useState)(""),a=Object(c.a)(t,2),n=a[0],u=a[1],b=Object(s.useState)(""),g=Object(c.a)(b,2),f=g[0],p=g[1],h=Object(s.useState)(""),E=Object(c.a)(h,2),j=E[0],O=E[1],w=Object(s.useState)(""),x=Object(c.a)(w,2),y=x[0],S=x[1],I=Object(s.useState)(""),C=Object(c.a)(I,2),k=C[0],N=C[1],B=Object(s.useState)(""),T=Object(c.a)(B,2),Y=T[0],D=T[1],F=Object(s.useState)(""),M=Object(c.a)(F,2),R=M[0],X=M[1],J=Object(s.useState)(!0),A=Object(c.a)(J,2),L=A[0],P=A[1];return Object(s.useEffect)(Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(!0),t.next=3,v.b.database().ref("/ThreeDCarousel/"+e.params.slug).once("value").then(e=>{var t=e.val().url1;u(t);var a=e.val().url2;p(a);var n=e.val().url3;O(n);var r=e.val().url4;S(r);var l=e.val().url5;N(l);var c=e.val().url6;D(c);var s=e.val().text;X(s)});case 3:t.sent,P(!1);case 5:case"end":return t.stop()}}),t)}))),[]),i.a.createElement("div",{style:{height:"100vh"}},i.a.createElement(d.a,null),i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",null),i.a.createElement("div",{style:{flex:"01"}},L?i.a.createElement(m.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):i.a.createElement(o.a,{fbimg1:n,fbimg2:f,fbimg3:j,fbimg4:y,fbimg5:k,fbimg6:Y,text:R})))))}}}]);
//# sourceMappingURL=58.7622402e.chunk.js.map