(this["webpackJsonpyt-widget"]=this["webpackJsonpyt-widget"]||[]).push([[0],{11:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(3),c=t.n(r),m=(t(11),t(5)),i=t(1);var l=function(e){var a=e.size,t=e.onInput,r=Object(s.useState)(""),c=Object(i.a)(r,2),m=c[0],l=c[1],o=function(){return Math.floor(Math.random()*a+1)||1};return n.a.createElement("div",{className:"app-msg-input"},n.a.createElement("div",{className:"app-msg-input-box"},n.a.createElement("div",{className:"app-msg-input-box-text"},n.a.createElement("input",{type:"text",placeholder:"Say something...",value:m,onChange:function(e){var a=e.target.value;return l(a)},onKeyPress:function(e){"Enter"===e.key&&(t({userId:o(),text:m,time:"10:33 PM"}),l(""))}}))),n.a.createElement("div",{className:"app-msg-input-icon"},n.a.createElement("div",{className:"app-msg-picker"},n.a.createElement("i",{className:"material-icons",size:"24"},"sentiment_very_satisfied")),n.a.createElement("div",{className:"app-msg-input-send"},n.a.createElement("p",{className:"app-msg-input-send-p"},"0/200"),n.a.createElement("i",{className:"material-icons",onClick:function(){t({userId:o(),text:m,time:"10:33 PM"}),l("")}},"send"))))},o=t(4),u=t.n(o);t(17);var p=function(e){var a=e.users,t=e.msgData,r=Object(s.useState)(!1),c=Object(i.a)(r,2),m=c[0],l=c[1],o=Object(s.useRef)(null),p=function(){o.current.scrollIntoView({behavior:"smooth"}),l(!1)};return Object(s.useEffect)(p,[t]),n.a.createElement("div",{className:"app-msg-show-wrapper"},n.a.createElement("div",{id:"app-msg-show-id",className:"app-msg-show",onWheel:function(){var e=document.getElementById("app-msg-show-id");e&&function(e){var a=e||{scrollHeight:400,scrollTop:0,clientHeight:400},t=a.scrollHeight,s=a.scrollTop,n=t-a.clientHeight;n>0&&l(s/n<.95)}(e)}},t.map((function(e,t){var s=e.userId,r=e.text,c=e.time,m=a.find((function(e){return e.userId===s})).userName;return n.a.createElement("div",{className:"app-msg-show-item",key:t},n.a.createElement("div",{className:"app-msg-show-item-avatar"},n.a.createElement(u.a,{size:"24",name:m})),n.a.createElement("div",{className:"app-msg-show-item-text"},n.a.createElement("span",{className:"app-msg-show-item-time"},c),n.a.createElement("span",{className:"app-msg-show-item-username"},m),n.a.createElement("p",{className:"app-msg-show-item-p"},r)))})),n.a.createElement("div",{ref:o})),n.a.createElement("div",{className:"app-msg-anchor",style:{display:m?"block":"none"},onClick:p},n.a.createElement("i",{className:"material-icons arrow-down-icon"},"arrow_downward")))};var d=function(){return n.a.createElement("div",{className:"app-top-bar"},n.a.createElement("div",{className:"app-title"},"Top chat ",n.a.createElement("i",{className:"material-icons"},"arrow_drop_down")),n.a.createElement("div",{className:"app-top-bar-icon"},n.a.createElement("i",{className:"material-icons"},"more_vert")))},v=(t(18),[{userId:1,userName:"User James",avatarLink:""},{userId:2,userName:"User John",avatarLink:""},{userId:3,userName:"User Nick",avatarLink:""},{userId:4,userName:"User Dom",avatarLink:""},{userId:5,userName:"User Cherry",avatarLink:""},{userId:6,userName:"User Rol",avatarLink:""}]),E=[{userId:1,text:"message1",time:"7:43 AM"},{userId:3,text:"message2",time:"7:44 AM"},{userId:3,text:"message232",time:"7:45 AM"},{userId:1,text:"message efwefw",time:"7:46 AM"},{userId:2,text:"fwefowefwef",time:"7:47 AM"}];var g=function(){var e=Object(s.useState)(!0),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(s.useState)(E),o=Object(i.a)(c,2),u=o[0],g=o[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m8 offset-m2 l4 offset-l4 widget-container"},t&&n.a.createElement("div",null,n.a.createElement(d,null),n.a.createElement(p,{users:v,msgData:u}),n.a.createElement(l,{size:v.length,onInput:function(e){return g([].concat(Object(m.a)(u),[e]))}})),t&&n.a.createElement("div",{className:"hr"}),n.a.createElement("div",{className:"widget-hider",onClick:function(){return r(!t)}},t?"Hide Chat":"Show Chat"))))};c.a.render(n.a.createElement(g,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(19)}},[[6,1,2]]]);
//# sourceMappingURL=main.137ef6c4.chunk.js.map