(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(22),o=n.n(i),r=(n(61),n(56)),s=n(32),p=(n(62),n(63),n(28)),d=n(107),l=n(29),h=n.n(l),j=n(6);var u=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)({}),o=Object(s.a)(i,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){h.a.get("/config").then((function(e){a(e.data.data.appKey)}))}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"\u7528\u6237\u4fe1\u606f\uff1a"}),Object(j.jsxs)("p",{children:["\u59d3\u540d\uff1a",l.nick]}),Object(j.jsxs)("p",{children:["\u7535\u8bdd\u53f7\u7801\uff1a",l.mobile]})]}),Object(j.jsx)(d.a,{onClick:function(){Object(p.openAuthMiniApp)({panelHeight:"percent75",path:"pages/home/home",extraData:{clientId:n,rpcScope:"Contact.User.Read",fieldScope:"Contact.User.mobile",type:0,ext:JSON.stringify({}),from:""}}).then((function(e){h.a.get("/user?authCode="+e.result.authCode).then((function(e){u(Object(r.a)({},e.data.data))})).catch((function(e){alert(JSON.stringify(e))}))}))},block:!0,type:"primary",children:"\u6253\u5f00\u6388\u6743\u5f39\u7a97"}),Object(j.jsx)("br",{}),Object(j.jsx)(d.a,{onClick:function(){Object(p.openAuthMiniApp)({path:"pages/cancel/index",extraData:{clientId:n,rpcScope:"Contact.User.Read",fieldScope:"Contact.User.mobile",type:0,ext:JSON.stringify({}),from:""}}).then((function(e){console.log(e)}))},block:!0,type:"primary",children:"\u6253\u5f00\u53d6\u6d88\u6388\u6743\u5f39\u7a97"})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()},61:function(e,t,n){},63:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.48446c51.chunk.js.map