(this.webpackJsonplogistic=this.webpackJsonplogistic||[]).push([[0],{228:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),u=n(71),r=n.n(u),s=n(73),i=(n(78),n(4));var a=function(){var t=Object(o.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){fetch("https://addcontactt.herokuapp.com/set_webhook",{method:"GET"}).then((function(t){return t.json()})).then((function(t){return console.log(t)})).catch((function(t){return console.log(t.message)}))}),[]),setTimeout((function(){fetch("https://addcontactt.herokuapp.com/get_account_info",{method:"GET"}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}),3e3);var u=Object(o.useCallback)((function(){c(""),fetch("https://addcontactt.herokuapp.com/set_webhook",{method:"GET"}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}),[n]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{value:n,onChange:function(t){return c(t.target.value)}}),Object(i.jsx)("button",{onClick:u,children:"Send"})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(a,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.5c21314a.chunk.js.map