(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[77],{1093:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t(24),l=t.n(n),c=t(32),r=t(98),i=t(1),m=t.n(i),s=t(21),o=t(303),u=t(45),g=t.n(u),b=t(31),h=t(197),f=t(198);function E({match:e}){var a=Object(s.b)(),t=b.b.firestore(),n=Object(i.useState)(""),u=Object(r.a)(n,2),E=u[0],d=u[1],v=Object(i.useState)(""),j=Object(r.a)(v,2),p=j[0],O=j[1],x=Object(i.useState)(""),y=Object(r.a)(x,2),N=y[0],A=y[1],w=Object(i.useState)(""),S=Object(r.a)(w,2),k=S[0],D=S[1],B=Object(i.useState)(""),T=Object(r.a)(B,2),_=T[0],F=T[1],M=Object(i.useState)(""),C=Object(r.a)(M,2),J=C[0],G=C[1],H=Object(i.useState)(""),I=Object(r.a)(H,2),L=I[0],P=I[1],V=Object(i.useState)(!1),Y=Object(r.a)(V,2),q=Y[0],z=Y[1],K=Object(i.useState)([]),Q=Object(r.a)(K,2),R=Q[0],U=(Q[1],Object(i.useState)()),W=Object(r.a)(U,2),X=W[0],Z=W[1];function $(){return($=Object(c.a)(l.a.mark((function n(){var c,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.collection("Livelinks").doc(e.params.slug).get();case 2:c=n.sent,r=c.data(),d(r),r.array_data.map((e,t)=>{"honeycomb"==e.id&&(Z(t),a({type:"ACTIVE_STEP",payload:{day:t+1}})),R[t]=e.url});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(i.useEffect)(()=>{!function(){$.apply(this,arguments)}(),console.log(E,"liveData"),console.log(e.params.slug,"slug",e.params.id,"id")},[]),Object(i.useEffect)(()=>{z(!0);b.b.database().ref("/HoneyComb/"+e.params.id).once("value").then(e=>{var a=e.val().url1;O(a);var t=e.val().url2;A(t);var n=e.val().url3;D(n);var l=e.val().url4;F(l);var c=e.val().url5;G(c);var r=e.val().url6;P(r),z(!1)})},[]);var ee=()=>{(new Date).getFullYear();var e=+new Date(E.Bday_date)-+new Date-198e5-864e5*(R.length-X);console.log(e,"difference");var a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},ae=Object(i.useState)(ee()),te=Object(r.a)(ae,2),ne=te[0],le=te[1];Object(i.useEffect)(()=>{setTimeout(()=>{le(ee())},1e3)});var ce=[];return Object.keys(ne).forEach(e=>{ne[e]&&ce.push(m.a.createElement("span",null,ne[e]," ",e," "))}),m.a.createElement("div",{style:{backgroundColor:"#70cff3",height:"100vh"}},m.a.createElement(h.a,{slug:e.params.slug})," ",m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("div",null,q?m.a.createElement(g.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):m.a.createElement("div",null,new Date(E.Bday_date)-+new Date-198e5-864e5*(R.length-X-1)>0?m.a.createElement("div",null,m.a.createElement("h5",{className:"example"}," This Gift opens in "),m.a.createElement(f.a,{Bday:+new Date(E.Bday_date)-+new Date-198e5-864e5*(R.length-X-1)})):m.a.createElement("div",null,m.a.createElement("center",null," ",R.length-X-1==0?m.a.createElement("h1",{className:"example"},"The Big day is here !!!"):R.length-X-1==1?m.a.createElement("h1",{className:"example"},R.length-X-1," day to go !!!"):m.a.createElement("h1",{className:"example"},R.length-X-1," days to go !!!")),m.a.createElement(o.a,{fbimg1:p,fbimg2:N,fbimg3:k,fbimg4:_,fbimg5:J,fbimg6:L})))))}},303:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(1),l=t.n(n);t(304);function c({fbimg1:e,fbimg2:a,fbimg3:t,fbimg4:n,fbimg5:c,fbimg6:r,t1:i,t2:m,t3:s,t4:o,t5:u,t6:g}){return l.a.createElement("body",{className:"hexagonalAnimation",translate:"no"},l.a.createElement("base",{target:"_blank"}),l.a.createElement("ul",{className:"hexagonalAnimationul"},l.a.createElement("li",{className:"hexagonalAnimationli"},l.a.createElement("img",{alt:"1",className:"hexagonalAnimationimg",src:e})),l.a.createElement("li",{className:"hexagonalAnimationli"},l.a.createElement("img",{alt:"1",className:"hexagonalAnimationimg",src:a})),l.a.createElement("li",{className:"hexagonalAnimationli"},l.a.createElement("img",{alt:"1",className:"hexagonalAnimationimg",src:t})),l.a.createElement("li",{className:"hexagonalAnimationli"},l.a.createElement("img",{alt:"1",className:"hexagonalAnimationimg",src:n})),l.a.createElement("li",{className:"hexagonalAnimationli"},l.a.createElement("img",{alt:"1",className:"hexagonalAnimationimg",src:c})),l.a.createElement("li",{className:"hexagonalAnimationli"},l.a.createElement("img",{alt:"1",className:"hexagonalAnimationimg",src:r}))))}},304:function(e,a,t){}}]);
//# sourceMappingURL=77.09b4d731.chunk.js.map