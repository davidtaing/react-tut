(this["webpackJsonpreact-tut"]=this["webpackJsonpreact-tut"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),u=(a(9),a(1)),o=function(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},s=function(e){var t=function(t){return r.a.createElement(o,{value:e.squares[t],onClick:function(){return e.onClick(t)}})};return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},t(0),t(1),t(2)),r.a.createElement("div",{className:"board-row"},t(3),t(4),t(5)),r.a.createElement("div",{className:"board-row"},t(6),t(7),t(8)))};function i(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(u.a)(t[a],3),r=n[0],c=n[1],l=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}l.a.render(r.a.createElement((function(){var e,t=r.a.useState(0),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!0),m=Object(u.a)(o,2),f=m[0],v=m[1],E=Object(n.useState)([{squares:Array(9).fill(null)}]),d=Object(u.a)(E,2),b=d[0],g=d[1],k=b,p=k[c],q=i(p.squares),N=k.map((function(e,t){var a=t?"Go to move #"+t:"Go to game start";return r.a.createElement("li",{ley:t},r.a.createElement("button",{onClick:function(){return function(e){l(e),v(e%2===0)}(t)}},a))}));return e=q?"Winner: "+q:"Next player: "+(f?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(s,{squares:p.squares,onClick:function(e){return function(e){var t=b.slice(0,c+1),a=t[t.length-1].squares.slice();i(a)||a[e]||(a[e]=f?"X":"O",g(t.concat([{squares:a}])),l(t.length),v(!f))}(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,N)))}),null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.bbc0908c.chunk.js.map