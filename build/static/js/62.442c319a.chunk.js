(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[62,67],{112:function(e,a,t){},211:function(e,a,t){},216:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var l=t(1),s=t.n(l);t(211),t(112);function c({fbimg1:e,fbimg2:a,title:t}){return s.a.createElement("div",{className:"AnimatedApp"},s.a.createElement("center",{style:{marginTop:"13px"}},s.a.createElement("div",{style:{backgroundImage:"url("+a+")"},class:"w"},s.a.createElement("div",{class:"k"},s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"})," ",s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"})," ",s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"})," ",s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"}),s.a.createElement("span",{style:{backgroundImage:"url("+e+")"},class:"i"})),s.a.createElement("div",{class:"h"},s.a.createElement("h1",null,t)))))}},936:function(e,a,t){"use strict";t.r(a);var l=t(25),s=t.n(l),c=t(32),n=t(98),r=t(1),m=t.n(r),u=t(21),i=t(216),o=t(31),g=t(45),d=t.n(g),E=t(190),b=t(189);a.default=function({match:e}){var a=Object(u.b)(),t=o.b.firestore(),l=Object(r.useState)(""),g=Object(n.a)(l,2),p=g[0],f=g[1],y=Object(r.useState)(""),k=Object(n.a)(y,2),h=k[0],I=k[1],v=Object(r.useState)(""),j=Object(n.a)(v,2),O=j[0],w=j[1],N=Object(r.useState)(""),D=Object(n.a)(N,2),S=D[0],x=D[1],B=Object(r.useState)(!1),T=Object(n.a)(B,2),F=T[0],_=T[1],A=Object(r.useState)([]),C=Object(n.a)(A,2),M=C[0],G=(C[1],Object(r.useState)()),H=Object(n.a)(G,2),J=H[0],L=H[1];function P(){return(P=Object(c.a)(s.a.mark((function l(){var c,n;return s.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.collection("Livelinks").doc(e.params.slug).get();case 2:c=l.sent,n=c.data(),x(n),n.array_data.map((e,t)=>{"animatedframe"==e.id&&(L(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),M[t]=e.url});case 6:case"end":return l.stop()}}),l)})))).apply(this,arguments)}Object(r.useEffect)(()=>{!function(){P.apply(this,arguments)}(),console.log(S,"liveData"),console.log(e.params.slug,"slug",e.params.id,"id")},[]),Object(r.useEffect)(()=>{_(!0);o.b.database().ref("/AnimatedFrame/"+e.params.id).once("value").then(e=>{var a=e.val().url1;f(a);var t=e.val().url2;I(t);var l=e.val().title;w(l),_(!1)})},[]);var V=()=>{(new Date).getFullYear();var e=+new Date(S.Bday_date)-+new Date-198e5-864e5*(M.length-J);console.log(e,"difference");var a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},Y=Object(r.useState)(V()),q=Object(n.a)(Y,2),z=q[0],K=q[1];Object(r.useEffect)(()=>{setTimeout(()=>{K(V())},1e3)});var Q=[];return Object.keys(z).forEach(e=>{z[e]&&Q.push(m.a.createElement("span",null,z[e]," ",e," "))}),m.a.createElement("div",null,m.a.createElement(b.a,{slug:e.params.slug}),m.a.createElement("div",{style:{backgroundColor:"#70cff3"},class:"container-fluid pt-2"},m.a.createElement("div",{class:"row"},m.a.createElement("div",{class:"col-sm-1 "}),m.a.createElement("div",{class:"col-sm-10 "},F?m.a.createElement(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):m.a.createElement("div",null,new Date(S.Bday_date)-+new Date-198e5-864e5*(M.length-J-1)>0?m.a.createElement("div",null,m.a.createElement("h5",{className:"example"}," This Gift opens in "),m.a.createElement(E.a,{Bday:+new Date(S.Bday_date)-+new Date-198e5-864e5*(M.length-J-1)})):m.a.createElement("div",null,m.a.createElement("center",null," ",M.length-J-1==0?m.a.createElement("h1",{className:"example"},"The Big day is here !!!"):M.length-J-1==1?m.a.createElement("h1",{className:"example"},M.length-J-1," day to go !!!"):m.a.createElement("h1",{className:"example"},M.length-J-1," days to go !!!")),m.a.createElement(i.default,{fbimg1:p,fbimg2:h,title:O})))),m.a.createElement("div",{class:"col-sm-1 "}))),m.a.createElement("footer",null,m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-7 col-md-12 col-sm-12"},m.a.createElement("p",{className:"copyright"},"Copyright \xa9 2020 Gift's Hub Company . Design:"," ",m.a.createElement("a",{rel:"nofollow",href:"/"},"Gift's Hub"))),m.a.createElement("div",{className:"col-lg-5 col-md-12 col-sm-12"},m.a.createElement("ul",{className:"social"},m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("i",{className:"fa fa-facebook"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("i",{className:"fa fa-twitter"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("i",{className:"fa fa-linkedin"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("i",{className:"fa fa-rss"}))),m.a.createElement("li",null,m.a.createElement("a",{href:"#"},m.a.createElement("i",{className:"fa fa-dribbble"})))))))))}}}]);
//# sourceMappingURL=62.442c319a.chunk.js.map