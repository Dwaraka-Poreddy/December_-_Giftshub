(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[75],{230:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(1),l=t.n(n);t(231);function r({text:e,name:a,fbimg:t,BDate:n}){var r=new Date;r.getFullYear(),r.getMonth(),r.getDate();return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"magazineMaindiv",style:{backgroundImage:"url("+t+")"}},l.a.createElement("div",{style:{textAlign:"right"}}," ",l.a.createElement("p",{className:"magazineDate"},new Date(n).toLocaleDateString("en-US"))),l.a.createElement("img",{style:{width:"85%",marginTop:"2%"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/1280px-Time_Magazine_logo.svg.png",alt:"time"}),l.a.createElement("div",{style:{marginLeft:"2%",marginRight:"2%",marginTop:"20%",display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{style:{float:"left",textAlign:"left",width:"45%",overflow:"hidden"}},l.a.createElement("h1",{className:"magazineText",style:{borderBottom:"0",paddingBottom:"0"}},"THE"),l.a.createElement("h1",{className:"magazineText"},e),l.a.createElement("h1",{className:"magazineName"},a)),l.a.createElement("div",{style:{float:"right",textAlign:"right"}},l.a.createElement("h1",{className:"magazineHot"},"HOT"),l.a.createElement("h1",{className:"magazineBuzz"},"BUZZ"),l.a.createElement("img",{className:"magazineBarcode",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png",alt:"time"})))))))}},231:function(e,a,t){},967:function(e,a,t){"use strict";t.r(a);var n=t(25),l=t.n(n),r=t(32),c=t(99),s=t(1),i=t.n(s),m=t(21),o=t(230),u=t(31),g=t(45),d=t.n(g),h=t(192),p=t(191);a.default=function({match:e}){var a=Object(m.b)(),t=u.b.firestore(),n=Object(s.useState)(""),g=Object(c.a)(n,2),f=g[0],E=g[1],b=Object(s.useState)(""),v=Object(c.a)(b,2),y=v[0],j=v[1],w=Object(s.useState)(""),O=Object(c.a)(w,2),x=O[0],z=O[1],D=Object(s.useState)(""),N=Object(c.a)(D,2),T=N[0],k=N[1],B=Object(s.useState)(!0),S=Object(c.a)(B,2),M=S[0],_=S[1],A=Object(s.useState)([]),C=Object(c.a)(A,2),F=C[0],U=(C[1],Object(s.useState)()),H=Object(c.a)(U,2),L=H[0],P=H[1];function I(){return(I=Object(r.a)(l.a.mark((function n(){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.collection("Livelinks").doc(e.params.slug).get();case 2:r=n.sent,c=r.data(),k(c),c.array_data.map((e,t)=>{"magazine"==e.id&&(P(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),F[t]=e.url});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(s.useEffect)(()=>{!function(){I.apply(this,arguments)}(),console.log(T,"liveData"),console.log(e.params.slug,"slug",e.params.id,"id")},[]),Object(s.useEffect)(()=>{_(!0);u.b.database().ref("/Magazine/"+e.params.id).once("value").then(e=>{var a=e.val().url;E(a);var t=e.val().text;j(t);var n=e.val().name;z(n)});_(!1)},[]);var J=()=>{(new Date).getFullYear();var e=+new Date(T.Bday_date)-+new Date-198e5-864e5*(F.length-L);console.log(e,"difference");var a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},Y=Object(s.useState)(J()),Z=Object(c.a)(Y,2),G=Z[0],R=Z[1];Object(s.useEffect)(()=>{setTimeout(()=>{R(J())},1e3)});var V=[];return Object.keys(G).forEach(e=>{G[e]&&V.push(i.a.createElement("span",null,G[e]," ",e," "))}),i.a.createElement("div",null,i.a.createElement(p.a,{slug:e.params.slug}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{style:{backgroundColor:"#70cff3"},class:"container-fluid pt-2"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-sm-12 "},M?i.a.createElement(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):i.a.createElement("div",null,new Date(T.Bday_date)-+new Date-198e5-864e5*(F.length-L-1)>0?i.a.createElement("div",null,i.a.createElement("h5",{className:"example"}," This Gift opens in "),i.a.createElement(h.a,{Bday:+new Date(T.Bday_date)-+new Date-198e5-864e5*(F.length-L-1)})):i.a.createElement("div",{className:"mb-5"},i.a.createElement("center",null," ",F.length-L-1==0?i.a.createElement("h1",{className:"example"},"The Big day is here !!!"):F.length-L-1==1?i.a.createElement("h1",{className:"example"},F.length-L-1," day to go !!!"):i.a.createElement("h1",{className:"example"},F.length-L-1," days to go !!!")),i.a.createElement(o.a,{fbimg:f,text:y,name:x})))))))}}}]);
//# sourceMappingURL=75.4f328818.chunk.js.map