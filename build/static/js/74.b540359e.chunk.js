(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[74],{1042:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(24),c=a.n(n),l=a(32),r=a(93),s=a(1),d=a.n(s),o=a(286),i=a(21),u=a(42),m=a.n(u),b=a(31),f=a(197),g=a(198);function h({match:e}){var t=b.b.firestore(),a=Object(i.b)(),n=Object(s.useState)(),u=Object(r.a)(n,2),h=u[0],v=u[1],E=Object(s.useState)(""),p=Object(r.a)(E,2),y=p[0],j=p[1],O=Object(s.useState)(""),k=Object(r.a)(O,2),w=k[0],I=k[1],x=Object(s.useState)(""),D=Object(r.a)(x,2),S=D[0],T=D[1],B=Object(s.useState)(""),N=Object(r.a)(B,2),_=N[0],F=N[1],M=Object(s.useState)(!1),C=Object(r.a)(M,2),J=C[0],A=C[1],G=Object(s.useState)([]),L=Object(r.a)(G,2),P=L[0];L[1];function V(){return Y.apply(this,arguments)}function Y(){return(Y=Object(l.a)(c.a.mark((function n(){var l,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return A(!0),n.next=3,t.collection("Livelinks").doc(e.params.slug).get();case 3:l=n.sent,r=l.data(),F(r),r.array_data.map((e,t)=>{"threedimage"==e.id&&(v(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),P[t]=e.url});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(s.useEffect)(Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:A(!1);case 3:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)(()=>{A(!0);b.b.database().ref("/ThreeDImage/"+e.params.id).once("value").then(e=>{var t=e.val().url;j(t);var a=e.val().firstcol;I(a);var n=e.val().secondcol;T(n),A(!1)})},[]);var q=()=>{(new Date).getFullYear();var e=+new Date(_.Bday_date)-+new Date-198e5-864e5*(P.length-h);console.log(e,"difference");var t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},z=Object(s.useState)(q()),H=Object(r.a)(z,2),K=H[0],Q=H[1];Object(s.useEffect)(()=>{setTimeout(()=>{Q(q())},1e3)});var R=[];return Object.keys(K).forEach(e=>{K[e]&&R.push(d.a.createElement("span",null,K[e]," ",e," "))}),d.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},d.a.createElement(f.a,{slug:e.params.slug}),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("div",{style:{backgroundColor:"#70cff3"}},J?d.a.createElement(m.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):d.a.createElement("div",null,new Date(_.Bday_date)-+new Date-198e5-864e5*(P.length-h-1)>0?d.a.createElement("div",null,d.a.createElement("h5",{className:"example"}," This Gift opens in "),d.a.createElement(g.a,{Bday:+new Date(_.Bday_date)-+new Date-198e5-864e5*(P.length-h-1)})):d.a.createElement("div",null,d.a.createElement("center",null," ",P.length-h-1==0?d.a.createElement("h1",{className:"example"},"The Big day is here !!!"):P.length-h-1==1?d.a.createElement("h1",{className:"example"},P.length-h-1," day to go !!!"):d.a.createElement("h1",{className:"example"},P.length-h-1," days to go !!!")),d.a.createElement(o.a,{firstcol:w,secondcol:S,fbimg:y})))))}},286:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),c=a.n(n);a(287);function l({fbimg:e,firstcol:t,secondcol:a}){return c.a.createElement("div",{style:{backgroundImage:"linear-gradient(to right, ".concat(t,", ").concat(a,")")}},c.a.createElement("div",{style:{paddingTop:"5%"},className:"ThreeDImage"},c.a.createElement("div",{class:"tdexample"},c.a.createElement("div",{class:"tdblock"},c.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdmain"}),c.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdleft"})),c.a.createElement("div",{class:"tdblock"},c.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdmain"}),c.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdleft"})),c.a.createElement("div",{class:"tdblock"},c.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdmain"}),c.a.createElement("div",{style:{backgroundImage:"url("+e+")"},class:"tdside -tdleft"})))))}},287:function(e,t,a){}}]);
//# sourceMappingURL=74.b540359e.chunk.js.map