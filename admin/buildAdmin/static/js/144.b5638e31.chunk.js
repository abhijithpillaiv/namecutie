(self.webpackChunk_avp_10g=self.webpackChunk_avp_10g||[]).push([[144],{53480:function(e){e.exports={port:"http://localhost:9000/"}},30041:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(70885),i=t(72791),a=t(16871),s=t(74569),l=t.n(s),c=t(69998),o=t(33250),u=t(53480),d=t.n(u),m=t(80184);function f(){var e=(0,a.UO)().id,n=(0,i.useState)(null),t=(0,r.Z)(n,2),s=t[0],u=t[1];return(0,i.useEffect)((function(){l().get(d().port+"api/admin/getName/"+e).then((function(e){u(e)}))}),[]),s?(0,m.jsx)(c.Z,{edit:!0,props:s}):(0,m.jsx)(o.Z,{})}},69998:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(42982),i=t(70885),a=t(72791),s=t(74569),l=t.n(s),c=t(78983),o=t(53480),u=t.n(o),d=t(33250),m=t(15463),f=t(8301),p=t(24846),h=t(16871),x=t(80184);function j(e){var n=e.edit,t=e.props,s=(0,a.useState)(!0),o=(0,i.Z)(s,2),j=o[0],v=o[1],g=(0,a.useState)(""),b=(0,i.Z)(g,2),y=b[0],Z=b[1],N=(0,a.useState)(""),C=(0,i.Z)(N,2),k=C[0],S=C[1],w=(0,a.useState)([]),L=(0,i.Z)(w,2),U=L[0],_=L[1],E=(0,a.useState)(""),O=(0,i.Z)(E,2),q=O[0],A=O[1],F=(0,a.useState)(""),G=(0,i.Z)(F,2),M=G[0],z=G[1],B=(0,a.useState)(""),I=(0,i.Z)(B,2),J=I[0],R=I[1],T=(0,h.s0)();(0,a.useEffect)((function(){n?(_(t.data.ethni),Z(t.data.name),A(t.data.gender),S(t.data.meaning),z(t.data._id),v(!1)):v(!1)}),[n]);var V=function(){n?(v(!0),l().post(u().port+"api/admin/editName",{name:y,gender:q,meaning:k,ethni:U,like:0,id:M}).then((function(){alert("Names edited successfully"),v(!1),T(-1)}))):(v(!0),l().post(u().port+"api/admin/addName",{name:y,gender:q,meaning:k,ethni:U,like:0}).then((function(){alert("Name added successfully"),X(),v(!1)})))},X=function(){Z(""),A(""),S(""),_([]),A("")};return j?(0,x.jsx)(d.Z,{}):(0,x.jsxs)(c.lx,{children:[(0,x.jsxs)(c.rb,{className:"mb-3",children:[(0,x.jsx)(c.L8,{htmlFor:"name",className:"col-sm-2 col-form-label",children:"Name"}),(0,x.jsx)(c.b7,{sm:10,children:(0,x.jsx)(c.jO,{required:!0,value:y,onChange:function(e){return Z(e.target.value)},type:"name",id:"name"})})]}),(0,x.jsxs)(c.rb,{className:"mb-3",children:[(0,x.jsx)(c.L8,{htmlFor:"meaning",className:"col-sm-2 col-form-label",children:"Meaning"}),(0,x.jsx)(c.b7,{sm:10,children:(0,x.jsx)(c.jO,{required:!0,value:k,onChange:function(e){return S(e.target.value)},type:"text",id:"meaning"})})]}),(0,x.jsxs)("fieldset",{className:"row mb-3",children:[(0,x.jsx)("legend",{className:"col-form-label col-sm-2 pt-0",children:"Gender"}),(0,x.jsx)(c.b7,{sm:5,children:(0,x.jsxs)(c.LX,{required:!0,size:"sm",value:q,onChange:function(e){return A(e.target.value)},className:"mb-3","aria-label":"Small select example",children:[(0,x.jsx)("option",{value:"",children:"add New option"}),(0,x.jsx)("option",{value:"Boy",children:"Boy"}),(0,x.jsx)("option",{value:"Girl",children:"Girl"}),(0,x.jsx)("option",{value:"Unisex",children:"Unisex"})]})})]}),(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(c.L8,{htmlFor:"ethnic",className:"col-sm-2 col-form-label",children:"Ethnic"}),U?U.map((function(e,n){return(0,x.jsxs)("span",{children:[e,"  ",(0,x.jsx)(p.Z,{style:{cursor:"pointer",color:"red"},onClick:function(n){return function(e){e&&_((function(n){return n.filter((function(n){return n!==e}))}))}(e)},icon:m.x})," , "]},n)})):null,(0,x.jsxs)(c.YR,{size:"sm",className:"mt-3 mb-3",children:[(0,x.jsx)(c.jO,{placeholder:"add new value",value:J,onChange:function(e){return R(e.target.value)},type:"text"}),(0,x.jsxs)(c.wV,{style:{cursor:"pointer"},onClick:function(){J&&_((function(e){return[].concat((0,r.Z)(e),[J])})),R("")},children:["Click to add ",(0,x.jsx)(p.Z,{icon:f.J})]})]})]}),n?(0,x.jsx)(c.u5,{color:"success",onClick:V,children:"Update"}):y&&k&&q?(0,x.jsx)(c.u5,{onClick:V,color:"success",children:"Upload"}):(0,x.jsx)(c.u5,{color:"success",children:"Upload"}),(0,x.jsxs)("span",{style:{paddingLeft:"100px"},children:[" ",(0,x.jsx)(c.u5,{color:"primary",onClick:X,children:"Reset"})]})]})}},33250:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});t(72791);var r=t.p+"static/media/lodr.01b22d1dc21e0c6111cd.gif",i=t(80184);function a(){return(0,i.jsx)("img",{style:{height:"100px",width:"auto"},src:r,alt:"lodr"})}},8301:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z' class='ci-primary'/>"]},15463:function(e,n,t){"use strict";t.d(n,{x:function(){return r}});var r=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313' class='ci-primary'/>"]},42982:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(30907);var i=t(40181);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=144.b5638e31.chunk.js.map