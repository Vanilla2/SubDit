(this.webpackJsonpmy_site_domain=this.webpackJsonpmy_site_domain||[]).push([[0],{64:function(e,t,a){e.exports=a(78)},69:function(e,t,a){},70:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(69),a(70),a(22)),l=a(10),s=a(13),u=a(112),m=a(110),p=a(113),d=a(79),h=a(114),v=a(115),f=a(106),b=a(109),E=a(111),g=function(e){var t=e.button,a=e.link;return r.a.createElement(f.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(i.b,{style:{textDecoration:"none",color:"white",flexGrow:1},to:""},r.a.createElement(m.a,{variant:"h4"},"SubDit")),r.a.createElement(i.b,{style:{textDecoration:"none",color:"inherit"},to:a},r.a.createElement(E.a,{color:"inherit"},t))))},y=a(18),x=a.n(y),j=a(33),w={getTopics:function(){var e=Object(j.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vanilla2431.herokuapp.com/topics",e.prev=1,e.next=4,fetch("https://vanilla2431.herokuapp.com/topics");case 4:return t=e.sent,e.abrupt("return",t.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),addTopic:function(){var e=Object(j.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vanilla2431.herokuapp.com/topics",e.prev=1,e.next=4,fetch("https://vanilla2431.herokuapp.com/topics",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return(n=e.sent).status=a.status,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),getTopicInfo:function(){var e=Object(j.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://vanilla2431.herokuapp.com/topics/".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),getTopicPosts:function(){var e=Object(j.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://vanilla2431.herokuapp.com/posts/".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),addPost:function(){var e=Object(j.a)(x.a.mark((function e(t,a){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://vanilla2431.herokuapp.com/posts/".concat(t),e.prev=1,e.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return r=e.sent,e.abrupt("return",r.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){w.getTopics().then((function(e){o(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{button:"Add A Topic",link:"/addtopic"}),r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(m.a,{style:{textAlign:"center",margin:"20px"},variant:"h3"},"Welcome to my swamp"),r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(d.a,{style:{padding:"10px",margin:"10px"},elevation:3},r.a.createElement(m.a,{variant:"h5"},"Explore the Topics:"),r.a.createElement(h.a,null,a.map((function(e,t){return r.a.createElement(i.b,{style:{textDecoration:"none",color:"black"},key:e._id,to:"/topics/"+e.title},r.a.createElement(v.a,{button:!0},r.a.createElement(m.a,{variant:"h6"},t+1,". ",e.title)))}))))),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(d.a,{style:{padding:"10px",margin:"10px"},elevation:3},r.a.createElement(m.a,{style:{marginBottom:"5px"},variant:"h5"},"About this Site:"),r.a.createElement(m.a,{style:{fontWeight:500},variant:"h5"},"If you are here to test this magnificent piece of garbage, then HI!"))))))},k=function(e){var t=Object(n.useState)(e.match.params.title),a=Object(s.a)(t,2),o=a[0],c=(a[1],Object(n.useState)("")),i=Object(s.a)(c,2),l=i[0],p=i[1],h=Object(n.useState)([]),v=Object(s.a)(h,2),f=v[0],b=v[1];return Object(n.useEffect)((function(){w.getTopicInfo(o).then((function(e){p(e.description)})),w.getTopicPosts(o).then((function(e){b(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{button:"Add A Post",link:"/addpost/"+o}),r.a.createElement(u.a,{style:{padding:20},maxWidth:"md"},r.a.createElement(m.a,{variant:"h4"},"Topic: ",o),r.a.createElement(m.a,{variant:"h5"},"Topic description: ",l),r.a.createElement(m.a,{variant:"h4"},"Posts:"),f.map((function(e){return r.a.createElement(d.a,{key:e._id,elevation:3,style:{margin:10,padding:15}},r.a.createElement(m.a,{variant:"h5"},e.title),r.a.createElement(m.a,{variant:"subtitle1"},e.author),r.a.createElement(m.a,{variant:"h6"},e.description))}))))},T=a(117),S=a(116),C=a(50),I=a(119),B=(a(77),Object(C.a)(T.a)({borderRadius:"4px",backgroundColor:"rgb(255,255,255)"})),W={Box:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},Box2:{width:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},Element:{zIndex:"1000",width:"100%",marginBottom:"15px"},Brand:{marginBottom:"30px",zIndex:"1000",textAlign:"center",color:"white"}},A=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),p=u[0],d=u[1],h=Object(n.useState)(!1),v=Object(s.a)(h,2),f=v[0],b=v[1],g=function(){b(!0);var t={title:o,description:p};w.addTopic(t).then((function(t){200===t.status?(b(!1),e.history.push("/")):(alert(t.message),b(!1))}))},y=Object(n.useState)(!1),x=Object(s.a)(y,2),j=(x[0],x[1],function(e){13===e.keyCode&&g()});return Object(n.useEffect)((function(){return document.addEventListener("keyup",j),function(){document.removeEventListener("keyup",j)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/",style:{textDecoration:"none",color:"White",position:"absolute",left:"15",top:"15",zIndex:"10000"}},r.a.createElement(m.a,{style:{margin:"15px"},variant:"h5"},"Back to Home")),r.a.createElement("div",{style:{backgroundColor:"#27273C"},className:"waveWrapper waveAnimation"},r.a.createElement("div",{className:"waveWrapperInner bgTop"},r.a.createElement("div",{className:"wave waveTop",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-top.png'"}})),r.a.createElement("div",{className:"waveWrapperInner bgMiddle"},r.a.createElement("div",{className:"wave waveMiddle",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-mid.png'"}})),r.a.createElement("div",{className:"waveWrapperInner bgBottom"},r.a.createElement("div",{className:"wave waveBottom",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-bot.png'"}}))),r.a.createElement(I.a,{style:W.Box,maxWidth:"xs"},r.a.createElement(m.a,{style:W.Brand,variant:"h2"},"Add A Topic"),r.a.createElement(I.a,{style:W.Box2},r.a.createElement(B,{onChange:function(e){return c(e.target.value)},value:o,style:W.Element,id:"outlined-basic",label:"Title",variant:"filled"}),r.a.createElement(B,{multiline:!0,rows:3,onChange:function(e){return d(e.target.value)},value:p,style:W.Element,id:"outlined-basic",label:"Description",variant:"filled"}),f?r.a.createElement(S.a,{style:{zIndex:"100",marginTop:"10px"}}):r.a.createElement(E.a,{onClick:g,style:W.Element,variant:"contained",color:"primary"},"Submit"))))},D=Object(C.a)(T.a)({borderRadius:"4px",backgroundColor:"rgb(255,255,255)"}),N={Element:{width:"100%",marginBottom:"15px"},Container:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},P=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),p=l[0],d=l[1],h=Object(n.useState)(""),v=Object(s.a)(h,2),f=v[0],b=v[1],g=Object(n.useState)(!1),y=Object(s.a)(g,2),x=y[0],j=y[1];return r.a.createElement(u.a,{maxWidth:"sm",style:N.Container},r.a.createElement(m.a,{variant:"h5",style:{marginBottom:15}},"You are adding a post to the topic: ",e.match.params.topic),r.a.createElement(D,{color:"primary",onChange:function(e){return c(e.target.value)},value:o,style:N.Element,id:"outlined-basic",label:"Title",variant:"filled"}),r.a.createElement(D,{color:"primary",onChange:function(e){return d(e.target.value)},value:p,style:N.Element,id:"outlined-basic",label:"Author",variant:"filled"}),r.a.createElement(D,{color:"primary",multiline:!0,rows:5,onChange:function(e){return b(e.target.value)},value:f,style:N.Element,id:"outlined-basic",label:"Body",variant:"filled"}),x?r.a.createElement(S.a,{style:{zIndex:"100",marginTop:"10px"}}):r.a.createElement(E.a,{onClick:function(){j(!0);var t={title:o,author:p,description:f};w.addPost(e.match.params.topic,t).then((function(t){j(!1),e.history.push("/topics/"+e.topic)}))},style:N.Element,variant:"contained",color:"primary"},"Submit"))},_=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:O}),r.a.createElement(l.a,{exact:!0,path:"/addtopic",component:A}),r.a.createElement(l.a,{path:"/topics/:title",component:k}),r.a.createElement(l.a,{path:"/addpost/:topic",component:P}))};var z=function(){return r.a.createElement(_,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.16cd0023.chunk.js.map