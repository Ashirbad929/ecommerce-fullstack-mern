"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[781],{231:function(e,t,r){r.d(t,{CP:function(){return o},Gu:function(){return f},k4:function(){return p},n3:function(){return u},sT:function(){return s},yr:function(){return i}});var n=r(4165),c=r(5861),a=r(1243),o=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat("https://ecommerce-mern-5e1j.onrender.com/api","/categories"),{headers:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat("https://ecommerce-mern-5e1j.onrender.com/api","/category/").concat(t),{headers:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.delete("".concat("https://ecommerce-mern-5e1j.onrender.com/api","/category/").concat(t),{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r,c){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.put("".concat("https://ecommerce-mern-5e1j.onrender.com/api","/category/").concat(t),r,{headers:{authtoken:c}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post("".concat("https://ecommerce-mern-5e1j.onrender.com/api","/category"),t,{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("".concat("https://ecommerce-mern-5e1j.onrender.com/api","/category/subs/").concat(t),{headers:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4967:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(9439),c=r(1413),a=r(2791),o=r(6473),u=r(4951),s=r(7027),i=r(183),p=r(4215),f=r(6533),d=r(7689),h=r(1087),l=r(763),m=r.n(l),Z=r(6137),g=r(9434),x=r(3936),v=r(184),j=o.Z.Meta,y=u.Z.Text,w=function(e){var t=e.product,r=e.loading,u=(0,g.I0)(),l=((0,d.s0)(),t.title),w=t.description,k=t.images,b=t.slug,S=t.price,N=k&&k.length?k[0][0].url:"",I=(0,a.useState)(!0),C=(0,n.Z)(I,2),P=C[0],T=C[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){T(!1)}),800);return function(){return clearTimeout(e)}}),[r]),(0,v.jsxs)(o.Z,{hoverable:!0,loading:r||P,cover:r||P?(0,v.jsx)(i.Z.Image,{style:{width:"100%",height:"auto",paddingBottom:"60%"}}):(0,v.jsx)("img",{src:N,alt:l}),actions:[(0,v.jsxs)(h.rU,{to:"/product/".concat(b),children:[(0,v.jsx)(p.Z,{})," ",(0,v.jsx)("br",{})," view"]}),(0,v.jsxs)("a",{onClick:function(){var e=[];if("undefined"!==typeof window){localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))),e.push((0,c.Z)((0,c.Z)({},t),{},{count:1}));var r=m().uniqWith(e,m().isEqual);console.log("unique",r),localStorage.setItem("cart",JSON.stringify(r)),u((0,Z.P)(e)),u((0,x.F)(!0))}s.ZP.info("Added to cart")},children:[(0,v.jsx)(f.Z,{})," ",(0,v.jsx)("br",{}),"Add to cart"]})],className:"product-card",children:[(0,v.jsx)(j,{title:l,description:"".concat(w&&w.substring(0,35),"...")}),(0,v.jsx)(j,{title:(0,v.jsxs)(y,{style:{color:"#008080"},children:["\u20b9",S]})})]})}},5781:function(e,t,r){r.r(t);var n=r(9439),c=r(2791),a=r(7689),o=r(231),u=r(7027),s=(r(5306),r(4967)),i=r(184);t.default=function(){var e=(0,c.useState)({}),t=(0,n.Z)(e,2),r=t[0],p=t[1],f=(0,c.useState)([]),d=(0,n.Z)(f,2),h=d[0],l=d[1],m=(0,c.useState)(!1),Z=(0,n.Z)(m,2),g=Z[0],x=Z[1],v=(0,a.UO)().slug;return(0,c.useEffect)((function(){x(!0),(0,o.n3)(v).then((function(e){p(e.data.category),l(e.data.products),x(!1)})).catch((function(e){u.ZP.error("backend error")}))}),[]),(0,i.jsxs)("div",{className:"category-items",children:[g?(0,i.jsx)("h4",{children:"loading..."}):(0,i.jsxs)("h4",{className:"category-items-header",children:[" fetched ",h.length,'  items from  "',r.name,'"category']}),(0,i.jsx)("div",{className:"products",children:h.map((function(e){return(0,i.jsx)(s.Z,{product:e},e._id)}))})]})}},5306:function(){}}]);
//# sourceMappingURL=781.d006e915.chunk.js.map