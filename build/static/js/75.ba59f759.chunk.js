(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[75],{272:function(e,t,a){"use strict";var n=a(99),c=a(1),l=a.n(c);a(273);t.a=function({fbimg1:e,fbimg2:t,fbimg3:a,fbimg4:r,fbimg5:s,fbimg6:i}){var u=Object(c.useState)(!1),m=Object(n.a)(u,2),o=m[0],b=m[1],d=Object(c.useState)(0),f=Object(n.a)(d,2),g=f[0],h=f[1],v=Object(c.useState)(!1),E=Object(n.a)(v,2),j=E[0],O=E[1],p=Object(c.useState)([e,r,a,r,t,e,a,i,i,s,s,t]),y=Object(n.a)(p,2),w=y[0],S=y[1],k=Object(c.useState)([]),x=Object(n.a)(k,2),N=x[0],T=x[1],D=Object(c.useState)(0),B=Object(n.a)(D,2),M=B[0],A=B[1],C=Object(c.useState)([]),G=Object(n.a)(C,2),I=G[0],_=G[1],F=Object(c.useState)(!1),J=Object(n.a)(F,2),L=J[0],R=J[1];Object(c.useEffect)(()=>{S([e,r,a,r,t,e,a,i,i,s,s,t])},[e,t,a,r,s,i]),Object(c.useEffect)(()=>{S(w.sort(()=>.5-Math.random()))},[o]);var W=((e,t,a)=>{var n=Object(c.useRef)(a),l=Object(c.useRef)(),r=()=>{e(n)};return Object(c.useEffect)(()=>{var e=setInterval(r,t);return l.current=e,()=>{clearInterval(e)}},[t]),l})(e=>{e.current++,A(e.current)},1e3,M);return Object(c.useEffect)(()=>{I.length>0&&I.length===w.length&&(R(!0),clearInterval(W.current))},[I]),Object(c.useEffect)(()=>{setTimeout(()=>{h(g+1)},1e3)}),l.a.createElement("div",null,j?l.a.createElement("div",{className:"text-center p-2 d-flex flex-column"},0===w.length?l.a.createElement("div",null,"...Loading"):l.a.createElement("div",null,l.a.createElement("div",{style:{padding:"0"},className:"container"},l.a.createElement("div",{className:"row no-gutters"},w.map((e,t)=>l.a.createElement("div",{className:"col-3 memcard ".concat(N.includes(t)?"grid-memcard-show":""," ").concat(I.includes(t)?"grid-memcard-show grid-memcard-finished":""),key:e.id,onClick:()=>{if(!I.includes(t))switch(N.length){case 0:T([t]);break;case 1:N[0]!==t&&(T(N.concat(t)),(e=N[0])!==(a=t)&&w[e]===w[a]?_([...I,e,a]):setTimeout(()=>{T([])},600));break;case 2:T([t]);break;default:T([])}var e,a}},l.a.createElement("img",{className:"img-thumbnail img-fluid grid-img",src:e,alt:e.description}))))),L&&l.a.createElement("div",null,"You Win !",l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("div",{style:{width:"auto"}},l.a.createElement("button",{style:{width:"fit-content"},className:"main-button",onClick:()=>{b(!o),T([]),_([]),R(!1)}},"New Game"))):l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-2"})," ",l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("h6",{style:{color:"#000",textAlign:"justify"}},"Greetings of the day and wish you many more! Welcome to a fun game challenging your wits and hoping to put up a big wide smile on your special day.")," ",l.a.createElement("br",null),l.a.createElement("h5",{style:{color:"#000",textAlign:"justify"}},"Instructions -"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",{style:{color:"#000",textAlign:"justify"}}," ","There are 6 pictures behind these 12 tiles and finish this game by matching the two tiles of the same picture together")),l.a.createElement("li",null,l.a.createElement("p",{style:{color:"#000",textAlign:"justify"}},"At a given time only 2 tiles will be shown, so familiarise yourself with where each picture is and finish the game to beat your own personal best!"))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("button",{className:"main-button",onClick:()=>{O(!0),h(0)}},"Start game")))))))}},273:function(e,t,a){},950:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(25),c=a.n(n),l=a(32),r=a(99),s=a(1),i=a.n(s),u=a(21),m=a(272),o=a(31),b=a(45),d=a.n(b),f=a(188),g=a(189);function h({match:e}){var t=o.b.firestore(),a=Object(u.b)(),n=Object(s.useState)(""),b=Object(r.a)(n,2),h=b[0],v=b[1],E=Object(s.useState)(""),j=Object(r.a)(E,2),O=j[0],p=j[1],y=Object(s.useState)(""),w=Object(r.a)(y,2),S=w[0],k=w[1],x=Object(s.useState)(""),N=Object(r.a)(x,2),T=N[0],D=N[1],B=Object(s.useState)(""),M=Object(r.a)(B,2),A=M[0],C=M[1],G=Object(s.useState)(""),I=Object(r.a)(G,2),_=I[0],F=I[1],J=Object(s.useState)(""),L=Object(r.a)(J,2),R=L[0],W=L[1],Y=Object(s.useState)(!1),P=Object(r.a)(Y,2),V=P[0],q=P[1],z=Object(s.useState)([]),H=Object(r.a)(z,2),K=H[0],Q=(H[1],Object(s.useState)()),U=Object(r.a)(Q,2),X=U[0],Z=U[1],$=Object(s.useState)(0),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ne=Object(s.useState)(""),ce=Object(r.a)(ne,2),le=ce[0],re=ce[1],se=t=>{var a={score:t};o.b.database().ref("MemoryGame/"+e.params.id).update(a)},ie=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ae(t),te<le&&(alert("you scored better than your previous one! keep playing"),re(te),se(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ue(){return me.apply(this,arguments)}function me(){return(me=Object(l.a)(c.a.mark((function n(){var l,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.collection("Livelinks").doc(e.params.slug).get();case 2:l=n.sent,r=l.data(),v(r),r.array_data.map((e,t)=>{"memorygame"==e.id&&(Z(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),K[t]=e.url});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(s.useEffect)(Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue();case 2:console.log(h,"liveData"),console.log(e.params.slug,"slug",e.params.id,"id");case 4:case"end":return t.stop()}}),t)}))),[]),Object(s.useEffect)(()=>{q(!0);o.b.database().ref("/MemoryGame/"+e.params.id).once("value").then(e=>{var t=e.val().url1;p(t);var a=e.val().url2;k(a);var n=e.val().url3;D(n);var c=e.val().url4;C(c);var l=e.val().url5;F(l);var r=e.val().url6;W(r);var s=e.val().score;re(s),q(!1)})},[]);var oe=()=>{(new Date).getFullYear();var e=+new Date(h.Bday_date)-+new Date-198e5-864e5*(K.length-X),t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},be=Object(s.useState)(oe()),de=Object(r.a)(be,2),fe=de[0],ge=de[1];Object(s.useEffect)(()=>{setTimeout(()=>{ge(oe())},1e3)});var he=[];return Object.keys(fe).forEach(e=>{fe[e]&&he.push(i.a.createElement("span",null,fe[e]," ",e," "))}),i.a.createElement("div",{style:{backgroundColor:"#70cff3"}},i.a.createElement(f.a,{slug:e.params.slug}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{backgroundColor:"#70cff3"},class:"container-fluid pt-2"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-sm-1 "}),i.a.createElement("div",{class:"col-sm-10 mb-3"},V?i.a.createElement(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):i.a.createElement("div",null,new Date(h.Bday_date)-+new Date-198e5-864e5*(K.length-X-1)>0?i.a.createElement("div",null,i.a.createElement("h5",{className:"example"}," This Gift opens in "),i.a.createElement(g.a,{Bday:+new Date(h.Bday_date)-+new Date-198e5-864e5*(K.length-X-1)})):i.a.createElement("div",null,i.a.createElement("center",null," ",K.length-X-1==0?i.a.createElement("h1",{className:"example"},"The Big day is here !!!"):K.length-X-1==1?i.a.createElement("h1",{className:"example"},K.length-X-1," day to go !!!"):i.a.createElement("h1",{className:"example"},K.length-X-1," days to go !!!")),i.a.createElement(m.a,{fbimg1:O,fbimg2:S,fbimg3:T,fbimg4:A,fbimg5:_,fbimg6:R,setnewscore:ie}))))," ",i.a.createElement("div",{class:"col-sm-1 "}))))}}}]);
//# sourceMappingURL=75.ba59f759.chunk.js.map