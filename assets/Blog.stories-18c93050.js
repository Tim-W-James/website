import{j as e,c as o}from"./cssUtils-d3b3e467.js";import{F as Q}from"./Footer-c971d7bd.js";import{N as k,B as b}from"./Navbar-716eed48.js";import{R as N,P as M}from"./Page-e101d38b.js";import{S as D}from"./ScrollToTop-11595ade.js";import{a as q,B as $}from"./index-cf646f8d.js";import{B as v}from"./Button-89e53e06.js";import{S as G,M as z}from"./MultiSelection-f22ffb10.js";import{S as I}from"./SearchField-5277d3ca.js";import{B as J,L as H}from"./BlogCardLoading-53842a0c.js";import{s as h,u as U,a as V,b as W,d as K,Q as X,c as Y}from"./sortFuncs-d630d80f.js";import{u as Z,a as ee,d as te,e as se}from"./encodeQueryParams-46445292.js";import{F as oe}from"./index-1ac04985.js";import{b as re,c as ae}from"./index.esm-ebe005ee.js";import{r as a}from"./index-61bf1805.js";import"./useMediaQuery-d14f0f77.js";import"./iframe-2966dd8a.js";import"../sb-preview/runtime.js";import"./logo-7f2f81ce.js";import"./mouseHover-f6e29944.js";import"./lib-312f2a70.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-e697fdb3.js";import"./index.esm-4446c677.js";import"./assertThisInitialized-384d22bc.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./index-2801d3c9.js";import"./index.esm-8319b366.js";import"./index-8d024dd2.js";const ie=(i,n)=>{const r=i.toLowerCase();return r.length===0||n.title.toLowerCase().includes(r)||n.description.toLowerCase().includes(r)||typeof n.tag_list!="string"&&n.tag_list.some(m=>m.toLowerCase().includes(r))},x=h[0],B=30,ne=()=>{const[i,n]=a.useState([]),[r,m]=a.useState(x),[F,R]=a.useState([]),[p,g]=a.useState(""),{status:d,data:c}=U(["devdotto","articlesMeta",B,1],K(B));a.useEffect(()=>{R(c?[...new Set(c.flatMap(t=>t.tag_list))].map(t=>{const s=c.filter(l=>l.tag_list.includes(t)).length;return{value:t,count:s,label:`${t} (${s})`}}).filter(t=>t.count>0).sort((t,s)=>s.count-t.count):[])},[c]);const A=a.useCallback(t=>{t.preventDefault(),g(t.target.value)},[]),[_,S]=a.useState(!1),w=a.useCallback(()=>{n([]),m(x),g(""),S(!0),setTimeout(()=>{S(!1)},500)},[]),C=q(),[j,E]=Z("blogOptions",{tags:[],sort:x,searchText:""}),u=ee();a.useEffect(()=>{if(u.toString()){if(u.get("reset"))return w(),C({hash:window.location.hash,search:""},{replace:!0}),()=>{};n([]),te(u.get("technologies")??"").forEach(t=>{const s=i.find(l=>l.value.toLowerCase()===t.toLowerCase());s&&n(l=>[...l,s])}),m(h.find(t=>{var s;return t.value.toLowerCase()===((s=u.get("sort"))==null?void 0:s.toLowerCase())})??x),g(u.get("searchText")??"")}else n(j.tags),m(j.sort),g(j.searchText);return()=>{}},[]),a.useEffect(()=>{var t;E({tags:i,sort:r,searchText:p}),C({hash:window.location.hash,search:`?${new URLSearchParams(JSON.parse(JSON.stringify({tags:se(i.map(s=>s.value))||void 0,sort:r.value===((t=h[0])==null?void 0:t.value)?void 0:r.value,searchText:p||void 0}))).toString()}`},{replace:!0})},[p,r,i]);const y=a.useMemo(()=>d==="loading"||d==="error"||!c?[]:c.sort(V).sort(W(r.value)).filter(t=>{const s=i.map(l=>l.value);return ie(p,t)&&(i.length===0||typeof t.tag_list!="string"&&t.tag_list.filter(l=>s.includes(l)).length!==0)}).map((t,s)=>e.jsx(J,{article:t},s)),[c,p,r.value,i,d]);return e.jsx("div",{children:e.jsxs(oe,{transitionDuration:200,children:[e.jsxs("div",{className:o("mx-auto mb-8 flex max-w-2xl items-center justify-center gap-4","flex-row","flex-wrap"),children:[e.jsx(v,{icon:e.jsx(re,{}),isLight:!0,label:"DEV.to",to:"https://dev.to/timwjames",tooltip:"Find my personal blog @timwjames"}),e.jsx(v,{icon:e.jsx(ae,{}),isLight:!0,label:"Medium",to:"https://medium.com/@twjames",tooltip:"Find my professional @twjames"})]}),e.jsxs("section",{"aria-label":"Search Controls",className:o("mx-auto mb-4 flex place-content-center items-center","flex-col"),children:[e.jsxs("div",{className:o("flex w-full gap-4"),children:[e.jsx(I,{handleChange:A,searchText:p}),e.jsx(v,{childProps:{onClick:w,type:"reset"},className:o("!-mt-1 !px-2 !py-2 !text-3xl"),icon:_?e.jsx("span",{className:o("inline-block","leading-0","motion-safe:animate-spin"),children:e.jsx(N,{})}):e.jsx(N,{}),iconRight:!0,isLabelHidden:!0,isLight:!0,label:"Reset",mode:"button",tooltip:"Reset search and filter options"})]}),e.jsxs("div",{className:o("flex w-full gap-4","flex-wrap"),children:[e.jsx("div",{className:o("z-30 min-w-fit grow"),children:e.jsx(G,{options:h,selectedOption:r,setSelectedOption:m})}),e.jsx("div",{className:o("z-20 grow"),children:e.jsx(z,{options:F,placeholder:"Filter by tags...",selectedOptions:i,setSelectedOptions:n})})]})]}),e.jsx("section",{"aria-label":"Blogs",className:o("flex justify-center gap-4 p-0","flex-wrap"),"data-chromatic":"ignore",children:d==="loading"?[...Array(6).keys()].map(t=>e.jsx(H,{},t)):d==="error"||!c?e.jsxs("div",{className:o("mb-8 text-center text-xl "),children:[e.jsx("span",{className:o("text-danger"),children:"Something went wrong"})," - Try again later"]}):y.length===0?e.jsxs("div",{className:o("mb-8 text-center text-xl "),children:[e.jsx("span",{className:o("text-danger"),children:"No articles found"})," - Try a different filter"]}):y})]})})},P=ne,Me={component:P,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},le=new X({defaultOptions:{queries:{staleTime:10*(60*1e3),cacheTime:60*(60*1e3)}}}),f=()=>e.jsx(Y,{client:le,children:e.jsxs($,{children:[e.jsx(D,{}),e.jsx(k,{}),e.jsx(M,{description:b.description,title:b.title,children:e.jsx(P,{})}),e.jsx(Q,{allowFixed:!0})]})});var L,O,T;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Page description={BLOG.description} title={BLOG.title}>
        <BlogPage />
      </Page>
      <Footer allowFixed />
    </Router>
  </QueryClientProvider>`,...(T=(O=f.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const De=["Blog"];export{f as Blog,De as __namedExportsOrder,Me as default};
//# sourceMappingURL=Blog.stories-18c93050.js.map