(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(54)},40:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),s=a(3),o=a(4),i=a(6),m=a(5),u=a(7),d=a(1),h=a(15),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).login=a.login.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.state={email:"",username:"",password:"",loggedIn:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"login",value:function(e){fetch("http://localhost:9090/login",{method:"POST",body:JSON.stringify({username:this.state.email,password:this.state.password}),headers:{"Content-type":"application/json; charset=UTF-8"}}),localStorage.setItem("loggedIn","yes"),localStorage.setItem("username",this.state.username)}},{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bodyDiv"},l.a.createElement("div",{className:"session"},l.a.createElement("form",{onSubmit:this.login,className:"log-in",autocomplete:"off"},l.a.createElement("div",{className:"floating-label"},l.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"Email",id:"username"}),l.a.createElement("label",{htmlFor:"email"},"email:"),l.a.createElement("div",{className:"icon"},l.a.createElement(h.b,null))),l.a.createElement("div",{className:"floating-label"},l.a.createElement("input",{placeholder:"Password",type:"password",id:"password"}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("div",{className:"icon"},l.a.createElement(h.a,null))),l.a.createElement("button",{type:"submit"},"Log in")))))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={user:{}},a.logout=a.logout.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"logout",value:function(){localStorage.setItem("loggedIn",""),localStorage.setItem("username","")}},{key:"componentDidMount",value:function(){window.minGlobal()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",id:"sidebarCollapse",className:"btn main-background btn-toggle"},l.a.createElement("i",{className:"fas fa-align-left"})),l.a.createElement("nav",{id:"sidebar"},l.a.createElement("div",{id:"dismiss"},l.a.createElement("i",{className:"fas fa-arrow-left"})),l.a.createElement("div",{className:"sidebar-header"},l.a.createElement("h3",null,"Football transfer app")),l.a.createElement("ul",{className:"list-unstyled components"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("i",{className:"fas fa-home icon-nav"}),"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/transfers"},l.a.createElement("i",{className:"fas fa-random icon-nav"}),"Transfers"))),l.a.createElement("ul",{className:"list-unstyled CTAs"},l.a.createElement("li",null,l.a.createElement("a",{onClick:this.logout,href:"/",className:"download"},"Logout")),l.a.createElement("li",{className:"text-center"},l.a.createElement("img",{src:"./images/site/logo.png",className:"logo"})),l.a.createElement("li",{className:"text-center"},l.a.createElement("img",{src:"./images/site/adidas.png",className:"logo-adidas"})),l.a.createElement("li",{className:"text-center"},l.a.createElement("img",{src:"./images/site/fly.png",className:"logo-fly"})),l.a.createElement("li",{className:"official"},l.a.createElement("a",{href:"www.arsenal.com",className:""},"www.arsenal.com")))))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[];return this.props.news.forEach(function(t){e.push(l.a.createElement(l.a.Fragment,null,l.a.createElement("article",null,l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"card"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fas fa-random arrow-trans"})),l.a.createElement("h4",null,t.text),l.a.createElement("p",null,t.date)),l.a.createElement("hr",null)))))}),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("h1",null,"TRANSFER NEWS")),e))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={text:"",date:""},a.handleNewsInput=a.handleNewsInput.bind(Object(d.a)(Object(d.a)(a))),a.onChangeText=a.onChangeText.bind(Object(d.a)(Object(d.a)(a))),a.onChangeDate=a.onChangeDate.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onChangeText",value:function(e){this.setState({text:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"handleNewsInput",value:function(e){e.preventDefault(),this.props.addNews(this.state.date,this.state.text)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("form",{class:"custom-form"},l.a.createElement("h2",{class:"center"},"New Transfer"),l.a.createElement("div",{className:"form-group col-lg-12"},l.a.createElement("label",null,"Text"),l.a.createElement("input",{type:"text",onChange:this.onChangeText,className:"form-control",id:"text",placeholder:"Enter text here..."})),l.a.createElement("div",{className:"form-group col-lg-12"},l.a.createElement("label",null,"Date"),l.a.createElement("input",{type:"text",onChange:this.onChangeDate,className:"form-control",id:"date",placeholder:"Enter date here..."})),l.a.createElement("button",{onClick:this.handleNewsInput,type:"submit",id:"submitButton",className:"btn btn-danger"}," Create Transfer")))))}}]),t}(n.Component),E=a(14),v=a(11),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={text:"Transfer",date:"12-12-2012",news:[],status:""},a.sendNoti=a.sendNoti.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://trans-pwa.herokuapp.com/getTrans").then(function(e){return e.json()}).then(function(t){return e.setState({news:t})})}},{key:"addNews",value:function(e,t){fetch("https://trans-pwa.herokuapp.com/createTrans",{method:"POST",body:JSON.stringify({text:t,date:e}),headers:{"Content-type":"application/json; charset=UTF-8"}}),fetch("https://trans-pwa.herokuapp.com/api/push_message",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({text:t,date:e})}).catch(function(e){return console.error(e)})}},{key:"sendNoti",value:function(e,t){fetch("https://trans-pwa.herokuapp.com/api/push_message",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({text:e,date:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{id:"content"},l.a.createElement(p,null),l.a.createElement("div",{className:"col-ld-12"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("h1",null,"Football Transfer News"),l.a.createElement("h2",null,"Mainly News from Arsenal FC."),l.a.createElement("br",null),l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"This site makes it possible to get notifications when a transfer happens.",l.a.createElement("br",null),"The PWA is downloadable.",l.a.createElement("br",null),"It is possible to use the site offline."),l.a.createElement("h2",null,"Notifications"),l.a.createElement("p",null,"To get notifications you need to ",l.a.createElement("i",null,"turn on and allow notifications.")),l.a.createElement("a",{href:"/transfers"},l.a.createElement("button",{className:"btn btn-danger center-block"},"Go to Transfers"))))))))}}),l.a.createElement(v.a,{exact:!0,path:"/Transfers",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{id:"content"},l.a.createElement(f,Object.assign({},t,{news:e.state.news})),l.a.createElement(b,Object.assign({},t,{addNews:e.addNews})))))}}))))}}]),t}(n.Component);a(40);a(22).config();a(43);var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={HomeButtonNews:l.a.createElement("button",null," TRANSFERS "),user:null,text:"Transfer",date:"12-12-2012",isLoggedIn:"",username:"",password:"",loggedIn:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("loggedIn")||localStorage.setItem("loggedIn","")}},{key:"render",value:function(){return localStorage.getItem("loggedIn")||localStorage.setItem("loggedIn",""),0==localStorage.getItem("loggedIn").length?l.a.createElement(g,null):l.a.createElement(N,null)}}]),t}(n.Component);a(22).config();var O="BOKUivAO2Xrz7dy4Obr66BG7VezTW9VYQD7eGxizRpd00oFHdkaIUOgM8qidSEGLGPJ503n9rA7WbXGRSgHgwuU";c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("./CustomServiceWorker.js").then(function(e){console.log("env var:"+O),console.log("ServiceWorker registration successful with scope: ",e.scope),navigator.serviceWorker.ready.then(function(e){var t=function(e){for(var t="=".repeat((4-e.length%4)%4),a=(e+t).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(a),l=new Uint8Array(n.length),r=0;r<n.length;++r)l[r]=n.charCodeAt(r);return l}(O),a={userVisibleOnly:!0,applicationServerKey:t},n=e.pushManager.subscribe(a);console.log(n),e.pushManager.subscribe(a).then(function(e){fetch("https://trans-pwa.herokuapp.com/api/subscribe",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).catch(function(e){return console.error(e)})},function(e){console.log(e)})})}).catch(function(e){return console.log("ServiceWorker registration failed: ",e)})}},[[27,1,2]]]);
//# sourceMappingURL=main.193c7635.chunk.js.map