(this["webpackJsonpcandy-crush-delete"]=this["webpackJsonpcandy-crush-delete"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(7),u=n.n(a),i=(n(12),n(6)),o=n(3),f=n(0),s=function(t){var e=t.score;return Object(f.jsx)("div",{className:"score-board",children:Object(f.jsxs)("h2",{children:["Score: ",e]})})},d=n.p+"static/media/blue-candy.73120c15.png",v=n.p+"static/media/green-candy.599f7016.png",b=n.p+"static/media/orange-candy.f106b2cd.png",l=n.p+"static/media/purple-candy.ae25b8a5.png",j=n.p+"static/media/red-candy.3658b37c.png",p=n.p+"static/media/yellow-candy.a3d87a9b.png",g=n.p+"static/media/blank.fbcb9179.png",h=n.p+"static/media/cclogo.5424ed0a.jpg",O=[d,b,l,j,p,v],m=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),u=Object(o.a)(a,2),d=u[0],v=u[1],b=Object(r.useState)(null),l=Object(o.a)(b,2),j=l[0],p=l[1],m=Object(r.useState)(0),y=Object(o.a)(m,2),x=y[0],D=y[1],E=function(){for(var t=function(t){var e=[t,t+8,t+16,t+24],r=n[t],c=n[t]===g;if(e.every((function(t){return n[t]===r&&!c})))return D((function(t){return t+4})),e.forEach((function(t){return n[t]=g})),{v:!0}},e=0;e<=39;e++){var r=t(e);if("object"===typeof r)return r.v}},S=function(){for(var t=function(t){var e=[t,t+1,t+2,t+3],r=n[t],c=n[t]===g;return[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,62,63,64].includes(t)?"continue":e.every((function(t){return n[t]===r&&!c}))?(D((function(t){return t+4})),e.forEach((function(t){return n[t]=g})),{v:!0}):void 0},e=0;e<64;e++){var r=t(e);if("continue"!==r&&"object"===typeof r)return r.v}},A=function(){for(var t=function(t){var e=[t,t+8,t+16],r=n[t],c=n[t]===g;if(e.every((function(t){return n[t]===r&&!c})))return D((function(t){return t+3})),e.forEach((function(t){return n[t]=g})),{v:!0}},e=0;e<=47;e++){var r=t(e);if("object"===typeof r)return r.v}},I=function(){for(var t=function(t){var e=[t,t+1,t+2],r=n[t],c=n[t]===g;return[6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64].includes(t)?"continue":e.every((function(t){return n[t]===r&&!c}))?(D((function(t){return t+3})),e.forEach((function(t){return n[t]=g})),{v:!0}):void 0},e=0;e<64;e++){var r=t(e);if("continue"!==r&&"object"===typeof r)return r.v}},M=function(){for(var t=0;t<=55;t++){if([0,1,2,3,4,5,6,7].includes(t)&&n[t]===g){var e=Math.floor(Math.random()*O.length);n[t]=O[e]}n[t+8]===g&&(n[t+8]=n[t],n[t]=g)}},N=function(t){v(t.target)},k=function(t){p(t.target)},w=function(){var t=parseInt(d.getAttribute("data-id")),e=parseInt(j.getAttribute("data-id"));n[e]=d.getAttribute("src"),n[t]=j.getAttribute("src");var r=[t-1,t-8,t+1,t+8].includes(e),a=E(),u=S(),o=A(),f=I();e&&r&&(f||u||a||o)?(v(null),p(null)):(n[e]=j.getAttribute("src"),n[t]=d.getAttribute("src"),c(Object(i.a)(n)))};return Object(r.useEffect)((function(){!function(){for(var t=[],e=0;e<64;e++){var n=O[Math.floor(Math.random()*O.length)];t.push(n)}c(t)}()}),[]),Object(r.useEffect)((function(){var t=setInterval((function(){E(),S(),A(),I(),M(),c(Object(i.a)(n))}),100);return function(){return clearInterval(t)}}),[E,S,A,I,M,n]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(s,{score:x}),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"game",children:n.map((function(t,e){return Object(f.jsx)("img",{src:t,alt:t,"data-id":e,draggable:!0,onDragStart:N,onDragOver:function(t){return t.preventDefault()},onDragEnter:function(t){return t.preventDefault()},onDragLeave:function(t){return t.preventDefault()},onDrop:k,onDragEnd:w},e)}))}),Object(f.jsx)("img",{className:"cclogo",src:h})]})]})};u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3d56dbbd.chunk.js.map