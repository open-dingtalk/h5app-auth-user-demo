(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(5),i=n.n(c),o=n(26),a=n.n(o),r=(n(32),n.p,n(33),n(10)),p=n(27),s=n.n(p),d=n(1);var l=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("button",{onClick:function(){Object(r.openAuthMiniApp)({panelHeight:"percent75",path:"pages/home/home",extraData:{clientId:"ding8clxwy9wxeom7bie",corpId:"ding9f50b15bccd16741",rpcScope:"Contact.User.Read",fieldScope:"Contact.User.mobile",type:0,ext:JSON.stringify({}),from:""}}).then((function(e){s.a.get("http://wanzq.vaiwan.com/user?authCode="+e.result.authCode).then((function(e){alert(JSON.stringify(e))})).catch((function(e){alert(JSON.stringify(e))}))}))},children:"\u6253\u5f00\u6388\u6743\u5f39\u7a97"}),Object(d.jsx)("button",{onClick:function(){Object(r.openAuthMiniApp)({path:"pages/cancel/index",extraData:{clientId:"ding8clxwy9wxeom7bie",corpId:"ding9f50b15bccd16741",rpcScope:"Contact.User.Read",fieldScope:"Contact.User.mobile",type:0,ext:JSON.stringify({}),from:""}}).then((function(e){console.log(e)}))},children:"\u6253\u5f00\u53d6\u6d88\u6388\u6743\u5f39\u7a97"})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),h()}},[[73,1,2]]]);
//# sourceMappingURL=main.bce85039.chunk.js.map