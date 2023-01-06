import{j as e,c as a}from"./cssUtils-09c0b384.js";import{F}from"./Footer-7327885d.js";import{P}from"./Page-eb528f6a.js";import{N as A,B as L}from"./Navbar-ce487071.js";import{S as E}from"./ScrollToTop-565a590c.js";import{a as k,B as D}from"./index-03b8123c.js";import{r as c}from"./index-f1f749bf.js";import{B as f}from"./Button-44af9048.js";import{C as M,L as Q}from"./LoadingCard-aabc1e8d.js";import{S as G,M as $}from"./MultiSelection-f5d5a2b0.js";import{S as z}from"./SearchField-bcfcce40.js";import{u as J}from"./useDevdottoArticlesMeta-45a66807.js";import{u as V,a as W,d as q,e as I,R as b}from"./index.esm-7142e0aa.js";import{V as U,W as H}from"./index.esm-568cca05.js";import"./useMediaQuery-f3cc2322.js";import"./logo-7615857d.js";import"./motion-f33a0d59.js";import"./mouseHover-f6e29944.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-51a0c2e2.js";import"./iconBase-4e3618d4.js";import"./hoist-non-react-statics.cjs-63c3687f.js";import"./extends-08eae36a.js";import"./inheritsLoose-5ea60741.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./index-96c5f47c.js";const K=["Popularity","Latest","Quick Reads"],m=K.map(s=>({value:s,label:s})),B=(s,o)=>o.public_reactions_count-s.public_reactions_count,X=(s,o)=>s.reading_time_minutes-o.reading_time_minutes,Y=(s,o)=>new Date(o.published_timestamp).getTime()-new Date(s.published_timestamp).getTime(),Z=s=>{switch(s){case"Latest":return Y;case"Quick Reads":return X;case"Popularity":return B;default:return()=>0}},ee=(s,o)=>{const i=s.toLowerCase();return i.length===0||o.title.toLowerCase().includes(i)||o.description.toLowerCase().includes(i)||o.tag_list.some(l=>l.toLowerCase().includes(i))},te=()=>{const s=J(100),[o,i]=c.useState([]),[l,d]=c.useState(m[0]),[O,T]=c.useState([]),[p,g]=c.useState("");c.useEffect(()=>{T(s.loading?[]:[...new Set(s.articles.flatMap(t=>t.tag_list))].map(t=>{const r=s.articles.filter(n=>n.tag_list.includes(t)).length;return{value:t,count:r,label:`${t} (${r})`}}).filter(t=>t.count>0).sort((t,r)=>r.count-t.count))},[s.articles,s.loading]);const _=t=>{t.preventDefault(),g(t.target.value)},[C,j]=c.useState(!1),w=()=>{i([]),d(m[0]),g(""),j(!0),setTimeout(()=>{j(!1)},500)},S=k(),[x,R]=V("blogOptions",{tags:[],sort:m[0],searchText:""}),u=W();c.useEffect(()=>{if(u.toString()){if(u.get("reset"))return w(),S({hash:window.location.hash,search:""}),()=>{};i([]),q(u.get("technologies")||"").forEach(t=>{const r=o.find(n=>n.value.toLowerCase()===t.toLowerCase());r&&i(n=>[...n,r])}),d(m.find(t=>{var r;return t.value.toLowerCase()===((r=u.get("sort"))==null?void 0:r.toLowerCase())})||m[0]),g(u.get("searchText")||"")}else i(x.tags),d(x.sort),g(x.searchText);return()=>{}},[]),c.useEffect(()=>{var t;R({tags:o,sort:l,searchText:p}),S({hash:window.location.hash,search:"?"+new URLSearchParams(JSON.parse(JSON.stringify({tags:I(o.map(r=>r.value))||void 0,sort:l.value===((t=m[0])==null?void 0:t.value)?void 0:l.value,searchText:p||void 0}))).toString()})},[p,l,o]);const v=s.loading?[]:s.articles.sort(B).sort(Z(l.value)).filter(t=>{const r=o.map(n=>n.value);return ee(p,t)&&(o.length===0||t.tag_list.filter(n=>r.includes(n)).length!==0)}).map((t,r)=>e.jsx(M,{article:t},r));return e.jsx("div",{children:e.jsxs("section",{children:[e.jsxs("div",{className:a("flex gap-4 justify-center items-center max-w-2xl mx-auto mb-8","flex-row","flex-wrap"),children:[e.jsx(f,{icon:e.jsx(U,{}),isLight:!0,label:"DEV.to",to:"https://dev.to/timwjames",tooltip:"Find my personal blog @timwjames"}),e.jsx(f,{icon:e.jsx(H,{}),isLight:!0,label:"Medium",to:"https://medium.com/@twjames",tooltip:"Find my professional @twjames"})]}),e.jsxs("div",{className:a("flex mx-auto items-center place-content-center mb-4","flex-col"),children:[e.jsxs("div",{className:a("w-full flex gap-4"),children:[e.jsx(z,{handleChange:_,searchText:p}),e.jsx(f,{className:a("h-11","flex"),icon:C?e.jsx("span",{className:a("inline-block","leading-0","motion-safe:animate-spin"),children:e.jsx(b,{})}):e.jsx(b,{}),iconRight:!0,isLight:!0,label:"Reset",mode:"button",onClick:w,tooltip:"Reset search and filters options"})]}),e.jsxs("div",{className:a("flex gap-4 w-full","flex-wrap"),children:[e.jsx("div",{className:a("z-30 grow min-w-fit"),children:e.jsx(G,{options:m,selectedOption:l,setSelectedOption:d})}),e.jsx("div",{className:a("z-20 grow"),children:e.jsx($,{options:O,placeholder:"Filter by tags...",selectedOptions:o,setSelectedOptions:i})})]})]}),e.jsx("div",{className:a("flex gap-4 p-0 justify-center","flex-wrap"),children:s.loading?[...Array(6).keys()].map(t=>e.jsx(Q,{},t)):v.length===0?e.jsxs("div",{className:a("text-center mb-8 text-xl "),children:[e.jsx("span",{className:a("text-danger"),children:"No Articles Found"})," - Try a different filter"]}):v})]})})},N=te,Te={component:N,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},h=()=>e.jsxs(D,{children:[e.jsx(E,{}),e.jsx(A,{}),e.jsx(P,{content:e.jsx(N,{}),description:L.description,title:L.title}),e.jsx(F,{allowFixed:!0})]});var y;h.parameters={...h.parameters,storySource:{source:`() => <Router>
    <ScrollToTop />
    <Navbar />
    <Page content={<BlogPage />} description={BLOG.description} title={BLOG.title} />
    <Footer allowFixed />
  </Router>`,...(y=h.parameters)==null?void 0:y.storySource}};const _e=["Blog"];export{h as Blog,_e as __namedExportsOrder,Te as default};
//# sourceMappingURL=Blog.stories-d70edf2c.js.map