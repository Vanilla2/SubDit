(this.webpackJsonpmy_site_domain=this.webpackJsonpmy_site_domain||[]).push([[0],{64:function(e,t,a){e.exports=a(78)},69:function(e,t,a){},70:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(69),a(70),a(22)),l=a(10),s=a(14),u=a(48),m=a(115),p=a(79),d=a(112),h=a(116),v=a(117),f=a(118),b=a(108),E=a(111),g=a(113),y=function(e){var t=e.button,a=e.link;return r.a.createElement(b.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(i.b,{style:{textDecoration:"none",color:"white",flexGrow:1},to:""},r.a.createElement(d.a,{variant:"h4"},"SubDit")),r.a.createElement(i.b,{style:{textDecoration:"none",color:"inherit"},to:a},r.a.createElement(g.a,{color:"inherit"},t))))},x=a(18),j=a.n(x),w=a(33),k={getTopics:function(){var e=Object(w.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vanilla2431.herokuapp.com/topics",e.prev=1,e.next=4,fetch("https://vanilla2431.herokuapp.com/topics");case 4:return t=e.sent,e.abrupt("return",t.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),addTopic:function(){var e=Object(w.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://vanilla2431.herokuapp.com/topics",e.prev=1,e.next=4,fetch("https://vanilla2431.herokuapp.com/topics",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return(n=e.sent).status=a.status,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),getTopicInfo:function(){var e=Object(w.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://vanilla2431.herokuapp.com/topics/".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),getTopicPosts:function(){var e=Object(w.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://vanilla2431.herokuapp.com/posts/".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),addPost:function(){var e=Object(w.a)(j.a.mark((function e(t,a){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://vanilla2431.herokuapp.com/posts/".concat(t),e.prev=1,e.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return r=e.sent,e.abrupt("return",r.json());case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},O=a(114),T=Object(O.a)((function(e){return{Grid_item:Object(u.a)({padding:15},e.breakpoints.down("sm"),{display:"flex",flexDirection:"column",alignItems:"center"})}})),I=function(){var e=T(),t=Object(n.useState)([]),a=Object(s.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){k.getTopics().then((function(e){c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{button:"Add A Topic",link:"/addtopic"}),r.a.createElement(m.a,{maxWidth:"md"},r.a.createElement(p.a,{style:{padding:"10px",margin:"10px"},elevation:3},r.a.createElement(d.a,{style:{textAlign:"center",margin:"20px"},variant:"h3"},"Welcome to SubDit"),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:12,md:6,className:e.Grid_item},r.a.createElement(d.a,{variant:"h5"},"Explore the Topics:"),r.a.createElement(v.a,null,o.map((function(e,t){return r.a.createElement(i.b,{style:{textDecoration:"none",color:"black"},key:e._id,to:"/topics/"+e.title},r.a.createElement(f.a,{button:!0,style:{display:"flex",flexDirection:"column",alignItems:"unset"}},r.a.createElement(d.a,{variant:"h6"},t+1,". ",e.title),r.a.createElement(d.a,{variant:"subtitle1"},e.description)))})))),r.a.createElement(h.a,{item:!0,xs:12,md:6,className:e.Grid_item},r.a.createElement(d.a,{style:{marginBottom:"5px"},variant:"h5"},"About this Site:"),r.a.createElement(d.a,{style:{fontWeight:500},variant:"h5"},"If you are here to test this magnificent piece of garbage, then HI!"))))))},S=function(e){var t=Object(n.useState)(e.match.params.title),a=Object(s.a)(t,1)[0],o=Object(n.useState)(""),c=Object(s.a)(o,2),i=c[0],l=c[1],u=Object(n.useState)([]),h=Object(s.a)(u,2),v=h[0],f=h[1];return Object(n.useEffect)((function(){k.getTopicInfo(a).then((function(e){l(e.description)})),k.getTopicPosts(a).then((function(e){f(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{button:"Add A Post",link:"/addpost/"+a}),r.a.createElement(m.a,{style:{padding:20},maxWidth:"md"},r.a.createElement(d.a,{variant:"h4"},"Topic: ",a),r.a.createElement(d.a,{variant:"h5"},"Topic description: ",i),r.a.createElement(d.a,{variant:"h4"},"Posts:"),v.map((function(e){return r.a.createElement(p.a,{key:e._id,elevation:3,style:{margin:10,padding:15}},r.a.createElement(d.a,{variant:"h5"},e.title),r.a.createElement(d.a,{variant:"subtitle1"},e.author),r.a.createElement(d.a,{variant:"h6"},e.description))}))))},C=a(120),B=a(119),W=a(52),D=a(121),A=(a(77),Object(W.a)(C.a)({borderRadius:"4px",backgroundColor:"rgb(255,255,255)"})),N={Box:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},Box2:{width:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},Element:{zIndex:"1000",width:"100%",marginBottom:"15px"},Brand:{marginBottom:"30px",zIndex:"1000",textAlign:"center",color:"white"}},_=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),m=u[0],p=u[1],h=Object(n.useState)(!1),v=Object(s.a)(h,2),f=v[0],b=v[1],E=function(){b(!0);var t={title:o,description:m};k.addTopic(t).then((function(t){200===t.status?(b(!1),e.history.push("/")):(alert(t.message),b(!1))}))},y=function(e){13===e.keyCode&&E()};return Object(n.useEffect)((function(){return document.addEventListener("keyup",y),function(){document.removeEventListener("keyup",y)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/",style:{textDecoration:"none",color:"White",position:"absolute",left:"15",top:"15",zIndex:"10000"}},r.a.createElement(d.a,{style:{margin:"15px"},variant:"h5"},"Back to Home")),r.a.createElement("div",{style:{backgroundColor:"#27273C"},className:"waveWrapper waveAnimation"},r.a.createElement("div",{className:"waveWrapperInner bgTop"},r.a.createElement("div",{className:"wave waveTop",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-top.png'"}})),r.a.createElement("div",{className:"waveWrapperInner bgMiddle"},r.a.createElement("div",{className:"wave waveMiddle",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-mid.png'"}})),r.a.createElement("div",{className:"waveWrapperInner bgBottom"},r.a.createElement("div",{className:"wave waveBottom",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-bot.png'"}}))),r.a.createElement(D.a,{style:N.Box,maxWidth:"xs"},r.a.createElement(d.a,{style:N.Brand,variant:"h2"},"Add A Topic"),r.a.createElement(D.a,{style:N.Box2},r.a.createElement(A,{onChange:function(e){return c(e.target.value)},value:o,style:N.Element,id:"outlined-basic",label:"Title",variant:"filled"}),r.a.createElement(A,{multiline:!0,rows:3,onChange:function(e){return p(e.target.value)},value:m,style:N.Element,id:"outlined-basic",label:"Description",variant:"filled"}),f?r.a.createElement(B.a,{style:{zIndex:"100",marginTop:"10px"}}):r.a.createElement(g.a,{onClick:E,style:N.Element,variant:"contained",color:"primary"},"Submit"))))},P=Object(W.a)(C.a)({borderRadius:"4px",backgroundColor:"rgb(255,255,255)"}),z={Element:{width:"100%",marginBottom:"15px"},Container:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},G=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),u=l[0],p=l[1],h=Object(n.useState)(""),v=Object(s.a)(h,2),f=v[0],b=v[1],E=Object(n.useState)(!1),y=Object(s.a)(E,2),x=y[0],j=y[1];return r.a.createElement(m.a,{maxWidth:"sm",style:z.Container},r.a.createElement(d.a,{variant:"h5",style:{marginBottom:15}},"You are adding a post to the topic: ",e.match.params.topic),r.a.createElement(P,{color:"primary",onChange:function(e){return c(e.target.value)},value:o,style:z.Element,id:"outlined-basic",label:"Title",variant:"filled"}),r.a.createElement(P,{color:"primary",onChange:function(e){return p(e.target.value)},value:u,style:z.Element,id:"outlined-basic",label:"Author",variant:"filled"}),r.a.createElement(P,{color:"primary",multiline:!0,rows:5,onChange:function(e){return b(e.target.value)},value:f,style:z.Element,id:"outlined-basic",label:"Body",variant:"filled"}),x?r.a.createElement(B.a,{style:{zIndex:"100",marginTop:"10px"}}):r.a.createElement(g.a,{onClick:function(){j(!0);var t={title:o,author:u,description:f};k.addPost(e.match.params.topic,t).then((function(){j(!1),e.history.push("/topics/"+e.match.params.topic)}))},style:z.Element,variant:"contained",color:"primary"},"Submit"))},J=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:I}),r.a.createElement(l.a,{exact:!0,path:"/addtopic",component:_}),r.a.createElement(l.a,{path:"/topics/:title",component:S}),r.a.createElement(l.a,{path:"/addpost/:topic",component:G}))};var F=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.936a8356.chunk.js.map