(this["webpackJsonpnov-12-7-37am-forked"]=this["webpackJsonpnov-12-7-37am-forked"]||[]).push([[81],{1032:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(24),r=t.n(n),c=t(32),l=t(93),s=t(1),o=t.n(s),u=t(292),m=t(21),i=t(42),d=t.n(i),b=t(31),p=t(198),h=t(197);function f({match:e}){var a=b.b.firestore(),t=Object(m.b)(),n=Object(s.useState)(),i=Object(l.a)(n,2),f=i[0],g=i[1],v=Object(s.useState)(""),E=Object(l.a)(v,2),j=E[0],O=E[1],y=Object(s.useState)(""),w=Object(l.a)(y,2),k=(w[0],w[1]),S=Object(s.useState)(""),x=Object(l.a)(S,2),B=x[0],D=x[1],N=Object(s.useState)(!1),T=Object(l.a)(N,2),_=T[0],F=T[1],M=Object(s.useState)([]),C=Object(l.a)(M,2),J=C[0],A=(C[1],Object(s.useState)("")),G=Object(l.a)(A,2),I=(G[0],G[1]);function L(){return P.apply(this,arguments)}function P(){return(P=Object(c.a)(r.a.mark((function n(){var c,l;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return F(!0),n.next=3,a.collection("Livelinks").doc(e.params.slug).get();case 3:c=n.sent,l=c.data(),D(l),l.array_data.map((e,a)=>{"calandar"==e.id&&(g(a),t({type:"ACTIVE_STEP",payload:{day:a+1}})),J[a]=e.url});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(s.useEffect)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:F(!1);case 3:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)(()=>{F(!0);b.b.database().ref("/Calandar/"+e.params.id).once("value").then(e=>{var a=e.val().url;O(a);var t=e.val().name;k(t);var n=e.val().handscol;I(n),F(!1)})},[]);var V=()=>{(new Date).getFullYear();var e=+new Date(B.Bday_date)-+new Date-198e5-864e5*(J.length-f);console.log(e,"difference");var a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},Y=Object(s.useState)(V()),q=Object(l.a)(Y,2),z=q[0],H=q[1];Object(s.useEffect)(()=>{setTimeout(()=>{H(V())},1e3)});var K=[];return Object.keys(z).forEach(e=>{z[e]&&K.push(o.a.createElement("span",null,z[e]," ",e," "))}),o.a.createElement("div",{style:{background:"url(https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fegg_shell.jpg?alt=media&token=c32757c0-9119-4740-beb5-ea90c327aec9)"}},o.a.createElement(h.a,{slug:e.params.slug}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,_?o.a.createElement(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}):o.a.createElement("div",null,new Date(B.Bday_date)-+new Date-198e5-864e5*(J.length-f-1)>0?o.a.createElement("div",null,o.a.createElement("h5",{className:"example"}," This Gift opens in "),o.a.createElement(p.a,{Bday:+new Date(B.Bday_date)-+new Date-198e5-864e5*(J.length-f-1)})):o.a.createElement("div",null,o.a.createElement("center",null," ",J.length-f-1==0?o.a.createElement("h1",{className:"example"},"The Big day is here !!!"):J.length-f-1==1?o.a.createElement("h1",{className:"example"},J.length-f-1," day to go !!!"):o.a.createElement("h1",{className:"example"},J.length-f-1," days to go !!!")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(u.a,{fbimg:j})))))))}}}]);
//# sourceMappingURL=81.1d58d4d9.chunk.js.map