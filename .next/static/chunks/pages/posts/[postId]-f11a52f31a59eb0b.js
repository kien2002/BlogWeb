(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{3282:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[postId]",function(){return t(3598)}])},3475:function(e,s,t){"use strict";var n=t(5893);t(7294);var r=t(5675),c=t.n(r),l=t(1664),a=t.n(l);s.Z=function(){return(0,n.jsxs)("div",{className:"author flex py-5",children:[(0,n.jsx)(c(),{src:"/image/author.png",alt:"",className:"rounded-full",width:50,height:50}),(0,n.jsx)("div",{className:"flex flex-col justify-center py-4",children:(0,n.jsx)(a(),{href:"/",legacyBehavior:!0,children:(0,n.jsx)("a",{className:"text-sm font-bold text-gray-700 hover:text-gray-600 ml-2 ",children:"Paimon"})})})]})}},1858:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var n=t(5893),r=t(5675),c=t.n(r);function l(){return(0,n.jsxs)("div",{className:"text-center py-10",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-orange-600 py-10",children:"Something Went Wrong"}),(0,n.jsx)(c(),{src:"/images/not_found.png",width:400,height:400,alt:""})]})}},4566:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var n=t(5893);function r(){return(0,n.jsx)("div",{className:"flex justify-center py-14",children:(0,n.jsx)("span",{className:"loader"})})}},5529:function(e,s,t){"use strict";t.d(s,{Z:function(){return h}});var n=t(5893),r=t(9008),c=t.n(r);t(7294);var l=t(1664),a=t.n(l),i=t(3990),x=function(){return(0,n.jsx)("section",{className:"bg-gray-100 mt-20",children:(0,n.jsxs)("div",{className:"container mx-auto md:px-20 py-16 text-center",children:[(0,n.jsx)("h1",{className:"font-bold text-3xl",children:"SUBCRIBLE"}),(0,n.jsx)("div",{className:"py-4",children:(0,n.jsx)("input",{type:"text",className:"shadow border rounded-2xl w-9/12 py-3 text-gray-700 focus:outline-none focus:shadow-slate-400",placeholder:"Enter your email"})}),(0,n.jsx)("button",{className:"bg-orange-400 px-20 py-3 rounded-full text-gray-100",children:"Subcribe"})]})})},o=function(){return(0,n.jsxs)("footer",{className:"bg-gray-100",children:[(0,n.jsx)(x,{}),(0,n.jsx)("div",{className:"container mx-auto flex justify-center py-12",children:(0,n.jsxs)("div",{className:"py-5",children:[(0,n.jsxs)("div",{className:"flex gap-6 justify-center",children:[(0,n.jsxs)(a(),{href:"",children:[" ",(0,n.jsx)(i.AgZ,{color:"#888888"})," "]}),(0,n.jsxs)(a(),{href:"",children:[" ",(0,n.jsx)(i.Fwv,{color:"#888888"})," "]}),(0,n.jsxs)(a(),{href:"",children:[" ",(0,n.jsx)(i.Rne,{color:"#888888"})," "]})]}),(0,n.jsx)("p",{className:"py-5 text-gray-400",children:"Copyright @2023 Allright"})]})})]})},d=function(){return(0,n.jsx)("header",{className:"bg-gray-100",children:(0,n.jsxs)("div",{className:"xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-3",children:[(0,n.jsx)("div",{className:"md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0",children:(0,n.jsx)("input",{type:"text",placeholder:"Search",className:"input-text"})}),(0,n.jsx)("div",{className:"shrink w-80 sm:order-2",children:(0,n.jsx)(a(),{href:"/",className:"font-serif font-bold text-3xl ",children:"Design"})}),(0,n.jsx)("div",{className:"w-96 order-3 flex justify-center",children:(0,n.jsxs)("div",{className:"flex gap-6",children:[(0,n.jsxs)(a(),{href:"",children:[" ",(0,n.jsx)(i.AgZ,{color:"#888888"})," "]}),(0,n.jsxs)(a(),{href:"",children:[" ",(0,n.jsx)(i.Fwv,{color:"#888888"})," "]}),(0,n.jsxs)(a(),{href:"",children:[" ",(0,n.jsx)(i.Rne,{color:"#888888"})," "]})]})})]})})},h=function(e){let{children:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{children:(0,n.jsx)("title",{children:"Blog"})}),(0,n.jsx)(d,{}),(0,n.jsx)("main",{children:s}),(0,n.jsx)(o,{})]})}},9633:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var n=t(9734);let r=e=>fetch(e).then(e=>e.json());function c(e){let{data:s,error:t}=(0,n.ZP)("".concat("http://localhost:3000/").concat(e),r);return{data:s,isLoading:!t&&!s,isError:t}}},3598:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return p},default:function(){return N}});var n=t(5893),r=t(5529),c=t(3475),l=t(5675),a=t.n(l),i=t(1664),x=t.n(i),o=t(9633),d=t(4566),h=t(1858);function j(){let{data:e,isLoading:s,isError:t}=(0,o.Z)("api/post");return s?(0,n.jsx)(d.Z,{}):t?(0,n.jsx)(h.Z,{}):(0,n.jsxs)("section",{className:"pt-20",children:[(0,n.jsx)("h1",{className:"font-bold text-3xl py-10",children:"Related"}),(0,n.jsx)("div",{className:"flex flex-col gap-10",children:e.map((e,s)=>(0,n.jsx)(u,{data:e},s))})]})}function u(e){let{data:s}=e,{id:t,title:r,category:l,img:i,published:o,author:d}=s;return(0,n.jsxs)("div",{className:"flex gap-5",children:[(0,n.jsx)("div",{className:"image flex flex-col justify-start",children:(0,n.jsx)(x(),{href:"/posts/".concat(t),legacyBehavior:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(a(),{src:i||"",className:"rounded",width:300,height:200,alt:""})})})}),(0,n.jsxs)("div",{className:"info flex justify-center flex-col",children:[(0,n.jsxs)("div",{className:"cat",children:[(0,n.jsx)(x(),{href:"/posts/".concat(t),legacyBehavior:!0,children:(0,n.jsx)("a",{className:"text-orange-600 hover:text-orange-800",children:l||"No Category"})}),(0,n.jsx)(x(),{href:"/posts/".concat(t),legacyBehavior:!0,children:(0,n.jsxs)("a",{className:"text-gray-800 hover:text-gray-600",children:["- ",o||""]})})]}),(0,n.jsx)("div",{className:"title",children:(0,n.jsx)(x(),{href:"/posts/".concat(t),legacyBehavior:!0,children:(0,n.jsx)("a",{className:"text-xl font-bold text-gray-800 hover:text-gray-600",children:r||"No Title"})})}),d?(0,n.jsx)(c.Z,{...d}):(0,n.jsx)(n.Fragment,{})]})]})}var f=t(1163),m=t(9734),p=!0;function N(e){let{fallback:s}=e,t=(0,f.useRouter)(),{postId:r}=t.query,{data:c,isLoading:l,isError:a}=(0,o.Z)("api/post/".concat(r));return l?(0,n.jsx)(d.Z,{}):a?(0,n.jsx)(h.Z,{}):(0,n.jsx)(m.J$,{value:{fallback:s},children:(0,n.jsx)(g,{...c})})}function g(e){let{title:s,img:t,subtitle:l,description:i,author:x}=e;return(0,n.jsx)(r.Z,{children:(0,n.jsxs)("section",{className:"container mx-auto md:px-2 py-16 w-1/2",children:[(0,n.jsx)("div",{className:"flex justify-center",children:x?(0,n.jsx)(c.Z,{...x}):(0,n.jsx)(n.Fragment,{})}),(0,n.jsxs)("div",{className:"post py-10",children:[(0,n.jsx)("h1",{className:"font-bold text-4xl text-center pb-5",children:s||"No Title"}),(0,n.jsx)("p",{className:"text-gray-500 text-xl text-center",children:l||"No Title"}),(0,n.jsx)("div",{className:"py-10",children:(0,n.jsx)(a(),{src:t||"/",width:900,height:600,alt:""})}),(0,n.jsx)("div",{className:"content text-gray-600 text-lg flex flex-col gap-4",children:i||"No Description"})]}),(0,n.jsx)(j,{})]})})}},1163:function(e,s,t){e.exports=t(880)}},function(e){e.O(0,[609,174,774,888,179],function(){return e(e.s=3282)}),_N_E=e.O()}]);