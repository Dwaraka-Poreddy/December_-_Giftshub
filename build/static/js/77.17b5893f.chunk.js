(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[77],{1067:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(24),l=a.n(n),r=a(32),c=a(98),i=a(1),s=a.n(i),m=a(21),o=a(741),u=a(45),f=a.n(u),d=a(31),h=a(192),b=a(193);function g({match:e}){var t=Object(m.b)(),a=d.b.firestore(),n=Object(i.useState)(""),u=Object(c.a)(n,2),g=u[0],E=u[1],v=Object(i.useState)(""),p=Object(c.a)(v,2),y=p[0],j=p[1],O=Object(i.useState)(""),w=Object(c.a)(O,2),x=w[0],S=w[1],N=Object(i.useState)(""),D=Object(c.a)(N,2),T=D[0],k=D[1],B=Object(i.useState)(""),C=Object(c.a)(B,2),I=C[0],M=C[1],Y=Object(i.useState)(""),_=Object(c.a)(Y,2),F=_[0],G=_[1],X=Object(i.useState)(""),H=Object(c.a)(X,2),J=H[0],P=H[1],A=Object(i.useState)(""),L=Object(c.a)(A,2),V=L[0],Z=L[1],q=Object(i.useState)(!0),z=Object(c.a)(q,2),K=z[0],Q=z[1],R=Object(i.useState)([]),U=Object(c.a)(R,2),W=U[0],$=(U[1],Object(i.useState)()),ee=Object(c.a)($,2),te=ee[0],ae=ee[1];function ne(){return(ne=Object(r.a)(l.a.mark((function n(){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.collection("Livelinks").doc(e.params.slug).get();case 2:r=n.sent,c=r.data(),E(c),c.array_data.map((e,a)=>{"threedcarousel"==e.id&&(ae(a),t({type:"ACTIVE_STEP",payload:{day:a+1}})),W[a]=e.url});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(i.useEffect)(()=>{!function(){ne.apply(this,arguments)}()},[]),Object(i.useEffect)(()=>{Q(!0);d.b.database().ref("/ThreeDCarousel/"+e.params.id).once("value").then(e=>{var t=e.val().url1;j(t);var a=e.val().url2;S(a);var n=e.val().url3;k(n);var l=e.val().url4;M(l);var r=e.val().url5;G(r);var c=e.val().url6;P(c);var i=e.val().text;Z(i)});Q(!1)},[]);var le=()=>{(new Date).getFullYear();var e=+new Date(g.Bday_date)-+new Date-198e5-864e5*(W.length-te);console.log(e,"difference");var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},re=Object(i.useState)(le()),ce=Object(c.a)(re,2),ie=ce[0],se=ce[1];Object(i.useEffect)(()=>{setTimeout(()=>{se(le())},1e3)});var me=[];return Object.keys(ie).forEach(e=>{ie[e]&&me.push(s.a.createElement("span",null,ie[e]," ",e," "))}),s.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},s.a.createElement(h.a,{slug:e.params.slug}),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("div",{style:{flex:"0.1"}}),s.a.createElement("div",{style:{flex:"0.8",height:"70vh"}},K?s.a.createElement(f.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):s.a.createElement("div",null,new Date(g.Bday_date)-+new Date-198e5-864e5*(W.length-te-1)>0?s.a.createElement("div",null,s.a.createElement("h5",{className:"example"}," This Gift opens in "),s.a.createElement(b.a,{Bday:+new Date(g.Bday_date)-+new Date-198e5-864e5*(W.length-te-1)})):s.a.createElement("div",null,s.a.createElement("center",null," ",W.length-te-1==0?s.a.createElement("h1",{className:"example"},"The Big day is here !!!"):W.length-te-1==1?s.a.createElement("h1",{className:"example"},W.length-te-1," day to go !!!"):s.a.createElement("h1",{className:"example"},W.length-te-1," days to go !!!")),s.a.createElement(o.a,{fbimg1:y,fbimg2:x,fbimg3:T,fbimg4:I,fbimg5:F,fbimg6:J,text:V})))),s.a.createElement("div",{style:{flex:"0.1"}})),s.a.createElement("footer",{style:{padding:"30px 0",marginTop:"150px"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-7 col-md-12 col-sm-12"},s.a.createElement("p",{className:"copyright"},"Copyright \xa9 2020 Gift's Hub Company . Design:"," ",s.a.createElement("a",{rel:"nofollow",href:"/"},"Gift's Hub"))),s.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},s.a.createElement("ul",{className:"social"},s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fa fa-facebook"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fa fa-twitter"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fa fa-linkedin"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fa fa-rss"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"#"},s.a.createElement("i",{className:"fa fa-dribbble"})))))))))}},249:function(e,t,a){},741:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(98),l=a(1),r=a.n(l);a(249);function c({fbimg1:e,fbimg2:t,fbimg3:a,fbimg4:c,fbimg5:i,fbimg6:s,text:m}){var o=Object(l.useState)(),u=Object(n.a)(o,2),f=u[0],d=u[1],h=Object(l.useState)(),b=Object(n.a)(h,2),g=b[0],E=b[1],v=Object(l.useState)([]),p=Object(n.a)(v,2),y=p[0],j=p[1],O=240;Object(l.useEffect)(()=>{d(document.getElementById("drag-container")),E(document.getElementById("spin-container")),j(document.getElementsByTagName("img"))},[]),setTimeout(x,100);var w=[...y];function x(e){for(var t=0;t<w.length;t++)w[t].style.transform="rotateY("+60*t+"deg) translateZ("+O+"px)",w[t].style.transition="transform 1s",w[t].style.transitionDelay=e||(w.length-t)/4+"s"}function S(e){B>180&&(B=180),B<0&&(B=0),e.style.transform="rotateX("+-B+"deg) rotateY("+k+"deg)"}function N(e){g.style.animationPlayState=e?"running":"paused"}var D=0,T=0,k=0,B=10;return document.onpointerdown=function(e){clearInterval(f.timer);var t=(e=e||window.event).clientX,a=e.clientY;return this.onpointermove=function(e){var n=(e=e||window.event).clientX,l=e.clientY;k+=.1*(D=n-t),B+=.1*(T=l-a),S(f),t=n,a=l},this.onpointerup=function(e){f.timer=setInterval((function(){k+=.1*(D*=.95),B+=.1*(T*=.95),S(f),N(!1),Math.abs(D)<.5&&Math.abs(T)<.5&&(clearInterval(f.timer),N(!0))}),17),this.onpointermove=this.onpointerup=null},!1},document.onmousewheel=function(e){var t=(e=e||window.event).wheelDelta/20||-e.detail;O+=t,x(1)},r.a.createElement("div",{id:"ThreeDCarouseldiv"},r.a.createElement("div",{id:"drag-container"},r.a.createElement("div",{style:{height:"170px",width:"120px"},id:"spin-container"},r.a.createElement("img",{src:e,alt:""}),r.a.createElement("img",{src:t,alt:""}),r.a.createElement("img",{src:a,alt:""}),r.a.createElement("img",{src:c,alt:""}),r.a.createElement("img",{src:i,alt:""}),r.a.createElement("img",{src:s,alt:""}),r.a.createElement("p",null,m)),r.a.createElement("div",{style:{height:3*O+"px",width:3*O+"px"},id:"ground"})))}}}]);
//# sourceMappingURL=77.17b5893f.chunk.js.map