(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[75],{1109:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var r=t(24),c=t.n(r),l=t(32),n=t(98),i=t(1),s=t.n(i),o=t(21),d=t(295),b=t(45),m=t.n(b),u=t(31),v=t(197),g=t(198);function E({match:e}){var a=Object(o.b)(),t=u.b.firestore(),r=Object(i.useState)(""),b=Object(n.a)(r,2),E=b[0],h=b[1],p=Object(i.useState)(""),f=Object(n.a)(p,2),y=f[0],k=f[1],j=Object(i.useState)(""),x=Object(n.a)(j,2),O=x[0],w=x[1],S=Object(i.useState)(""),R=Object(n.a)(S,2),D=R[0],B=R[1],I=Object(i.useState)(""),P=Object(n.a)(I,2),z=P[0],M=P[1],T=Object(i.useState)(""),_=Object(n.a)(T,2),C=_[0],F=_[1],N=Object(i.useState)(""),J=Object(n.a)(N,2),A=J[0],G=J[1],L=Object(i.useState)(!1),V=Object(n.a)(L,2),Y=V[0],q=V[1],H=Object(i.useState)([]),K=Object(n.a)(H,2),Q=K[0],U=(K[1],Object(i.useState)()),W=Object(n.a)(U,2),X=W[0],Z=W[1];function $(){return($=Object(l.a)(c.a.mark((function r(){var l,n;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.collection("Livelinks").doc(e.params.slug).get();case 2:l=r.sent,n=l.data(),h(n),n.array_data.map((e,t)=>{"cubes"==e.id&&(Z(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),Q[t]=e.url});case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}Object(i.useEffect)(()=>{!function(){$.apply(this,arguments)}(),console.log(E,"liveData"),console.log(e.params.slug,"slug",e.params.id,"id")},[]),Object(i.useEffect)(()=>{q(!0);u.b.database().ref("/Cubes/"+e.params.id).once("value").then(e=>{var a=e.val().url1;k(a);var t=e.val().url2;w(t);var r=e.val().url3;B(r);var c=e.val().url4;M(c);var l=e.val().url5;F(l);var n=e.val().url6;G(n),q(!1)})},[]);var ee=()=>{(new Date).getFullYear();var e=+new Date(E.Bday_date)-+new Date-198e5-864e5*(Q.length-X);console.log(e,"difference");var a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},ae=Object(i.useState)(ee()),te=Object(n.a)(ae,2),re=te[0],ce=te[1];Object(i.useEffect)(()=>{setTimeout(()=>{ce(ee())},1e3)});var le=[];return Object.keys(re).forEach(e=>{re[e]&&le.push(s.a.createElement("span",null,re[e]," ",e," "))}),s.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},s.a.createElement(v.a,{slug:e.params.slug})," ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("div",{style:{flex:"0.1"}}),s.a.createElement("div",{style:{flex:"0.8",height:"70vh"}},Y?s.a.createElement(m.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):s.a.createElement("div",null,new Date(E.Bday_date)-+new Date-198e5-864e5*(Q.length-X-1)>0?s.a.createElement("div",null,s.a.createElement("h5",{className:"example"}," This Gift opens in "),s.a.createElement(g.a,{Bday:+new Date(E.Bday_date)-+new Date-198e5-864e5*(Q.length-X-1)})):s.a.createElement("div",null,s.a.createElement("center",null," ",Q.length-X-1==0?s.a.createElement("h1",{className:"example"},"The Big day is here !!!"):Q.length-X-1==1?s.a.createElement("h1",{className:"example"},Q.length-X-1," day to go !!!"):s.a.createElement("h1",{className:"example"},Q.length-X-1," days to go !!!")),s.a.createElement(d.a,{fbimg1:y,fbimg2:O,fbimg3:D,fbimg4:z,fbimg5:C,fbimg6:A})))),s.a.createElement("div",{style:{flex:"0.1"}})))}},295:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(1),c=t.n(r);t(296);function l({fbimg1:e,fbimg2:a,fbimg3:t,fbimg4:r,fbimg5:l,fbimg6:n,t1:i,t2:s,t3:o,t4:d,t5:b,t6:m}){function u(e,a){return 90*(Math.floor(Math.random()*(e-a))+a)}return c.a.createElement("div",{id:"threeDcubemaindiv"},c.a.createElement("section",{class:"cubecontainer"},c.a.createElement("div",{onClick:()=>{document.getElementById("cube"),u(24,1),u(24,1)},id:"cube"},c.a.createElement("div",{class:"heart3d"},c.a.createElement("div",{class:"boom"},c.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+e+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"front bob"},i),c.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+a+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"back bob"},s),c.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"right bob"},o),c.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+r+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"left  bob"},d),c.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+n+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"top bob"},m),c.a.createElement("div",{style:{opacity:"0.85",backgroundImage:"url("+l+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden",height:"175px",width:"175px",borderRadius:"10px"},class:"bottom bob"},b)),c.a.createElement("div",{class:"rib1"}),c.a.createElement("div",{class:"rib2"}),c.a.createElement("div",{class:"rib3"}),c.a.createElement("div",{class:"rib4"}),c.a.createElement("div",{class:"rib5"}),c.a.createElement("div",{class:"rib6"}),c.a.createElement("div",{class:"rib7"}),c.a.createElement("div",{class:"rib8"}),c.a.createElement("div",{class:"rib9"}),c.a.createElement("div",{class:"rib10"}),c.a.createElement("div",{class:"rib11"}),c.a.createElement("div",{class:"rib12"}),c.a.createElement("div",{class:"rib13"}),c.a.createElement("div",{class:"rib14"}),c.a.createElement("div",{class:"rib15"}),c.a.createElement("div",{class:"rib16"}),c.a.createElement("div",{class:"rib17"}),c.a.createElement("div",{class:"rib18"}),c.a.createElement("div",{class:"rib19"}),c.a.createElement("div",{class:"rib20"}),c.a.createElement("div",{class:"rib21"}),c.a.createElement("div",{class:"rib22"}),c.a.createElement("div",{class:"rib23"}),c.a.createElement("div",{class:"rib24"}),c.a.createElement("div",{class:"rib25"}),c.a.createElement("div",{class:"rib26"}),c.a.createElement("div",{class:"rib27"}),c.a.createElement("div",{class:"rib28"}),c.a.createElement("div",{class:"rib29"}),c.a.createElement("div",{class:"rib30"}),c.a.createElement("div",{class:"rib31"}),c.a.createElement("div",{class:"rib32"}),c.a.createElement("div",{class:"rib33"}),c.a.createElement("div",{class:"rib34"}),c.a.createElement("div",{class:"rib35"}),c.a.createElement("div",{class:"rib36"})))))}},296:function(e,a,t){}}]);
//# sourceMappingURL=75.615f4e99.chunk.js.map