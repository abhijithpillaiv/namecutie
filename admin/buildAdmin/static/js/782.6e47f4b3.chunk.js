(self.webpackChunk_avp_10g=self.webpackChunk_avp_10g||[]).push([[782],{53480:function(t){t.exports={port:"http://localhost:9000/"}},78472:function(t,s,n){"use strict";n.r(s),n.d(s,{default:function(){return f}});var a=n(70885),e=n(74569),i=n.n(e),r=n(72791),c=n(43504),o=n(53480),l=n(80184);function u(t){var s=t.post,n=o.port+"image/";return(0,l.jsxs)("div",{className:"post",children:[void 0===s.image?null:(0,l.jsx)("img",{className:"postImg",src:n+s.image,alt:""}),(0,l.jsxs)("div",{className:"postInfo",children:[(0,l.jsx)("div",{className:"postCats"}),(0,l.jsx)(c.rU,{to:"/admin/singlePost/".concat(s._id),className:"link",children:(0,l.jsx)("span",{className:"postTitle",children:s.title})}),(0,l.jsx)("hr",{})]})]})}function p(t){var s=t.posts;return(0,l.jsx)("div",{className:"posts",children:s?s.map((function(t,s){return(0,l.jsx)(u,{post:t},s)})):(0,l.jsx)("h1",{children:" Waiting for the post"})})}var d=n(33250);var f=function(){var t=(0,r.useState)(null),s=(0,a.Z)(t,2),n=s[0],e=s[1];return(0,r.useEffect)((function(){i().get(o.port+"api/admin/getBlog").then((function(t){e(t.data)}))}),[]),n?(0,l.jsx)(p,{posts:n}):(0,l.jsx)(d.Z,{})}},33250:function(t,s,n){"use strict";n.d(s,{Z:function(){return i}});n(72791);var a=n.p+"static/media/lodr.01b22d1dc21e0c6111cd.gif",e=n(80184);function i(){return(0,e.jsx)("img",{style:{height:"100px",width:"auto"},src:a,alt:"lodr"})}}}]);
//# sourceMappingURL=782.6e47f4b3.chunk.js.map