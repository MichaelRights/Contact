(this.webpackJsonplogistic=this.webpackJsonplogistic||[]).push([[0],{228:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),s=e(71),r=e.n(s),u=e(73),i=(e(78),e(2));var a=function(){var t=Object(o.useState)(""),n=Object(u.a)(t,2),e=n[0],c=n[1];Object(o.useEffect)((function(){fetch("https://addcontactt.herokuapp.com/set_webhook",{method:"GET"}).then((function(t){return t.json()})).then((function(t){return console.log(t)})).catch((function(t){return console.log(t.message)}))}),[]),setTimeout((function(){fetch("https://addcontactt.herokuapp.com/get_account_info",{method:"GET"}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}),3e3);var s=Object(o.useCallback)((function(){c(""),fetch("https://addcontactt.herokuapp.com/send_message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}),[e]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{value:e,onChange:function(t){return c(t.target.value)}}),Object(i.jsx)("button",{onClick:s,children:"Send"}),Object(i.jsx)("button",{onClick:function(){fetch("https://addcontactt.herokuapp.com/send_message",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))},children:"Get Locations"})]})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(a,{})}),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.f7a48aa0.chunk.js.map