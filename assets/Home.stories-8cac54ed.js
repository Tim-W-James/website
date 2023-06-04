import{j as e,c as t,a as re}from"./cssUtils-c95a03d3.js";import{F as se}from"./Footer-cfda3890.js";import{N as ie,H as z}from"./Navbar-e8d7aed6.js";import{P as ae}from"./Page-574312d4.js";import{S as oe}from"./ScrollToTop-9c340e0a.js";import{L as ne,B as le}from"./index-c9ae3a6c.js";import{B as g}from"./Button-e2e62926.js";import{L as ce,l as de}from"./Logo-312abe52.js";import{j as me,k as H,l as pe,m as ue,n as he,b as xe,c as fe,d as ge}from"./index.esm-32e9765f.js";import{a as je,b as be,c as ye}from"./index.esm-0b1d0876.js";import{H as f}from"./react-router-hash-link.esm-5e949a14.js";import{u as we,e as ke,d as Ne,Q as _e,c as ve}from"./sortFuncs-ef248f6b.js";import{L as Ce,B as Le}from"./BlogCardLoading-beb9493b.js";import{r as s}from"./index-8db94870.js";import{F as N}from"./index-bc2affff.js";import{a as Ie,t as Ae,b as j}from"./TimelineItem-8a0d51be.js";import{T as Fe}from"./Timeline-242eb7e3.js";import{u as B}from"./useMediaQuery-4d2756a2.js";import{u as Q,f as Ee,a as Re,P as Te,b as Me,L as Pe,d as Se,m as O}from"./features-animation-b5289ee7.js";import{G as W}from"./iconBase-3663c682.js";import{a as De,P as He}from"./ParallaxMountains-df74c3b5.js";import"./iframe-0a6e3f50.js";import"../sb-preview/runtime.js";import"./logo-7f2f81ce.js";import"./mouseHover-f6e29944.js";import"./lib-0b8df509.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.esm-5cca5c2b.js";import"./index-302a0035.js";import"./index.esm-f5582ba4.js";function J(){const r=s.useRef(!1);return Q(()=>(r.current=!0,()=>{r.current=!1}),[]),r}function Be(){const r=J(),[a,i]=s.useState(0),o=s.useCallback(()=>{r.current&&i(a+1)},[a]);return[s.useCallback(()=>Ee.postRender(o),[o]),a]}class Ve extends s.Component{getSnapshotBeforeUpdate(a){const i=this.props.childRef.current;if(i&&a.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ze({children:r,isPresent:a}){const i=s.useId(),o=s.useRef(null),h=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:n,height:m,top:p,left:w}=h.current;if(a||!o.current||!n||!m)return;o.current.dataset.motionPopId=i;const x=document.createElement("style");return document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${n}px !important;
            height: ${m}px !important;
            top: ${p}px !important;
            left: ${w}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[a]),s.createElement(Ve,{isPresent:a,childRef:o,sizeRef:h},s.cloneElement(r,{ref:o}))}const F=({children:r,initial:a,isPresent:i,onExitComplete:o,custom:h,presenceAffectsLayout:n,mode:m})=>{const p=Re(Oe),w=s.useId(),x=s.useMemo(()=>({id:w,initial:a,isPresent:i,custom:h,onExitComplete:l=>{p.set(l,!0);for(const d of p.values())if(!d)return;o&&o()},register:l=>(p.set(l,!1),()=>p.delete(l))}),n?void 0:[i]);return s.useMemo(()=>{p.forEach((l,d)=>p.set(d,!1))},[i]),s.useEffect(()=>{!i&&!p.size&&o&&o()},[i]),m==="popLayout"&&(r=s.createElement(ze,{isPresent:i},r)),s.createElement(Te.Provider,{value:x},r)};function Oe(){return new Map}function $e(r){return s.useEffect(()=>()=>r(),[])}const y=r=>r.key||"";function Ue(r,a){r.forEach(i=>{const o=y(i);a.set(o,i)})}function qe(r){const a=[];return s.Children.forEach(r,i=>{s.isValidElement(i)&&a.push(i)}),a}const Ge=({children:r,custom:a,initial:i=!0,onExitComplete:o,exitBeforeEnter:h,presenceAffectsLayout:n=!0,mode:m="sync"})=>{const p=s.useContext(Me).forceRender||Be()[0],w=J(),x=qe(r);let l=x;const d=s.useRef(new Map).current,k=s.useRef(l),_=s.useRef(new Map).current,L=s.useRef(!0);if(Q(()=>{L.current=!1,Ue(x,_),k.current=l}),$e(()=>{L.current=!0,_.clear(),d.clear()}),L.current)return s.createElement(s.Fragment,null,l.map(c=>s.createElement(F,{key:y(c),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:n,mode:m},c)));l=[...l];const I=k.current.map(y),V=x.map(y),X=I.length;for(let c=0;c<X;c++){const u=I[c];V.indexOf(u)===-1&&!d.has(u)&&d.set(u,void 0)}return m==="wait"&&d.size&&(l=[]),d.forEach((c,u)=>{if(V.indexOf(u)!==-1)return;const A=_.get(u);if(!A)return;const Y=I.indexOf(u);let v=c;if(!v){const Z=()=>{_.delete(u),d.delete(u);const ee=k.current.findIndex(te=>te.key===u);if(k.current.splice(ee,1),!d.size){if(k.current=x,w.current===!1)return;p(),o&&o()}};v=s.createElement(F,{key:y(A),isPresent:!1,onExitComplete:Z,custom:a,presenceAffectsLayout:n,mode:m},A),d.set(u,v)}l.splice(Y,0,v)}),l=l.map(c=>{const u=c.key;return d.has(u)?c:s.createElement(F,{key:y(c),isPresent:!0,presenceAffectsLayout:n,mode:m},c)}),s.createElement(s.Fragment,null,d.size?l:l.map(c=>s.cloneElement(c)))},Qe="__carousel_ml4io_1",We={_carousel:Qe},$=30,E=()=>{const{status:r,data:a}=we(["devdotto","articlesMeta",$,1],Ne($)),i=s.useCallback(()=>{var n;(n=document.getElementById("carousel"))==null||n.scrollBy({left:384,behavior:"smooth"})},[]),o=s.useCallback(()=>{var n;(n=document.getElementById("carousel"))==null||n.scrollBy({left:-384,behavior:"smooth"})},[]),h=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]??""}#blog`),[]);return e.jsxs("div",{children:[e.jsxs("h2",{className:t("mb-4 self-center"),id:"blog",children:[e.jsxs(f,{className:t("hash-link"),onClick:h,to:"#blog",children:["Latest Blog Posts"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsxs("section",{"aria-labelledby":"blog",children:[e.jsx("div",{className:re()("p-0 pb-4 mx-2","px-1/10","max-sm:px-1","overflow-auto snap-x","flex gap-4",We._carousel),"data-chromatic":"ignore",id:"carousel",children:r==="loading"?[...Array(4).keys()].map(n=>e.jsx(Ce,{isCarouselItem:!0},n)):r==="error"?e.jsxs("div",{className:t("mb-8 text-center text-xl"),children:[e.jsx("span",{className:t("text-danger"),children:"Something went wrong"})," - Try again later"]}):a.sort(ke).map((n,m)=>e.jsx(Le,{article:n,isCarouselItem:!0},m))}),e.jsxs("div",{className:t("mx-auto mt-8 flex items-center justify-center gap-4"),children:[e.jsx(g,{icon:e.jsx(me,{}),isLabelHidden:!0,isLight:!0,label:"Scroll carousel left",mode:"button",onClick:o,tooltip:"Scroll carousel left"}),e.jsx(g,{icon:e.jsx(je,{}),iconRight:!0,isLight:!0,label:"View All",mode:"route",to:"/blog?reset",tooltip:"View more articles"}),e.jsx(g,{icon:e.jsx(H,{}),isLabelHidden:!0,isLight:!0,label:"Scroll carousel right",mode:"button",onClick:i,tooltip:"Scroll carousel right"})]})]})]})};try{E.displayName="BlogPostsCarousel",E.__docgenInfo={description:"",displayName:"BlogPostsCarousel",props:{}}}catch{}const R=()=>{const r=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]??""}#about`),[]);return e.jsx("div",{className:t("mx-auto mb-8 flex place-content-center items-center px-8","flex-col"),children:e.jsxs(N,{transitionDuration:200,children:[e.jsxs("h2",{id:"about",children:[e.jsxs(f,{className:t("hash-link"),onClick:r,to:"#about",children:["About Me"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{"aria-labelledby":"about",children:e.jsxs("ul",{className:t("list-disc text-left text-xl"),children:[e.jsxs("li",{children:["💼 ",e.jsx("b",{className:t("font-bold"),children:"Software Engineer"})," at"," ",e.jsx("a",{"aria-label":"Agile Digital",className:t("link"),href:"https://github.com/agiledigital",rel:"noreferrer",target:"_blank",title:"Agile Digital Website",children:"Agile Digital"})," ","since 2021"]}),e.jsxs("li",{children:["🎓"," ",e.jsxs("b",{className:t("font-bold"),children:["Bachelor of Information Technology"," "]}),"at the"," ",e.jsx("a",{"aria-label":"Australian National University",className:t("link"),href:"https://www.anu.edu.au/",rel:"noreferrer",target:"_blank",title:"ANU",children:"Australian National University"})]}),e.jsxs("li",{children:["🗺️ Located in"," ",e.jsx("a",{"aria-label":"Canberra, Australia",className:t("link"),href:"https://www.google.com.au/maps/place/Canberra+ACT",rel:"noreferrer",target:"_blank",title:"Location",children:"Canberra, Australia"})]}),e.jsxs("li",{children:["📫 How to reach me:"," ",e.jsx("a",{className:t("link"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]}),e.jsxs("li",{children:["📄"," ",e.jsx("a",{className:t("link"),href:`${location.href}assets/pdfs/tim_james_cv.pdf`,rel:"noreferrer",target:"_blank",title:"CV / Resume",children:"CV / Resume"})]}),e.jsxs("li",{children:["🏆 View my certifications on"," ",e.jsx("a",{"aria-label":"Credly",className:t("link"),href:"https://www.credly.com/users/timjames/badges",rel:"noreferrer",target:"_blank",title:"Certifications",children:"Credly"})]})]})})]})})};try{R.displayName="AboutMe",R.__docgenInfo={description:"",displayName:"AboutMe",props:{}}}catch{}const T=()=>{const r=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]??""}#technologies`),[]);return e.jsx("div",{className:t("mx-auto mt-8 flex max-w-2xl place-content-center items-center","solid-background","flex-col"),children:e.jsxs(N,{transitionDuration:200,children:[e.jsxs("h2",{id:"technologies",children:[e.jsxs(f,{className:t("hash-link"),onClick:r,to:"#technologies",children:["Core Technologies"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{"aria-labelledby":"technologies",className:t("flex place-content-center items-center gap-4 text-xl","flex-row","flex-wrap"),children:Object.entries(Ie).filter(([a,i])=>i.isCore).map(([a,i],o)=>e.jsxs(f,{"aria-label":a,className:t("inline-flex","items-center","hover:text-light-accent active:text-dark-accent","active:underline"),title:`View all my projects that use ${a}`,to:`/projects?${new URLSearchParams({technologies:a.toLowerCase()}).toString()}`,children:[i.icon?e.jsxs(e.Fragment,{children:[i.icon," "]}):null,a]},o))})]})})};try{T.displayName="CoreTechnologies",T.__docgenInfo={description:"",displayName:"CoreTechnologies",props:{}}}catch{}const M=()=>{const r=!B("(max-width: 767px)"),a=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]??""}#projects`),[]),i=s.useCallback(o=>!!o.isFeatured,[]);return e.jsxs("div",{className:t("mb-8"),children:[e.jsx("div",{className:t("mx-auto flex place-content-center items-center px-8","flex-col"),children:e.jsxs("h2",{className:t("mb-0 mt-8"),id:"projects",children:[e.jsxs(f,{className:t("hash-link"),onClick:a,to:"#projects",children:["Major Projects"," "]}),r?null:e.jsx("hr",{className:t("radial-border")})]})}),e.jsxs("section",{"aria-labelledby":"projects",children:[e.jsx(Fe,{data:Ae,filterFunc:i}),e.jsx("div",{className:t("flex justify-center"),children:e.jsx(g,{icon:e.jsx(H,{}),iconRight:!0,isLight:!0,label:"More Projects",mode:"route",to:"/projects?reset",tooltip:"View more projects"})})]})]})};try{M.displayName="MajorProjects",M.__docgenInfo={description:"",displayName:"MajorProjects",props:{}}}catch{}const b=({heading:r,icon:a,children:i,startClosed:o})=>{const[h,n]=s.useState(!o),m=s.useCallback(()=>n(p=>!p),[]);return e.jsx("div",{className:t("mb-4"),children:e.jsxs(Pe,{features:Se,children:[e.jsxs(O.button,{"aria-expanded":h,className:t("mb-2 min-w-0 cursor-pointer p-2 text-light-accent","hover:text-dark-accent active:text-main-brand","acrylic-dark inline-flex w-full items-center","rounded-md","gap-2"),onClick:m,children:[a,e.jsx("h3",{className:t("mb-1 grow text-left"),id:r,children:r}),h?e.jsx(be,{className:t("text-3xl")}):e.jsx(ye,{className:t("text-3xl")})]}),e.jsx(Ge,{children:h?e.jsx(O.section,{animate:{opacity:1,y:0,transition:{duration:.25}},"aria-labelledby":r,className:t("hyphens-none text-left"),exit:{opacity:0,y:"-10%",transition:{duration:.25}},id:`${r}-content`,initial:{opacity:0,y:"-10%"},children:i}):""})]})})};try{b.displayName="Accordion",b.__docgenInfo={description:"",displayName:"Accordion",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"Element"}},startClosed:{defaultValue:null,description:"",name:"startClosed",required:!1,type:{name:"boolean"}}}}}catch{}const Je=""+new URL("pdfs/tim_james_cv.pdf",import.meta.url).href;function Ke(r){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M488 348.78h-70.24l-15.1 87.44-48.78-87.44H169v-50h190v-157h129zm-145-273v207H158.13l-48.79 87.47-15.11-87.47H24v-207zM136.724 215.324c0-10.139-12.257-15.214-19.425-8.046-7.168 7.168-2.093 19.426 8.046 19.426 6.285 0 11.38-5.095 11.38-11.38zm60.945 0c-.068-10.12-12.32-15.122-19.452-7.943-7.131 7.18-2.047 19.399 8.073 19.399 6.314 0 11.422-5.141 11.38-11.456zm60.945 0c0-10.139-12.257-15.214-19.425-8.046-7.169 7.168-2.093 19.426 8.046 19.426 6.284 0 11.38-5.095 11.38-11.38z"}}]})(r)}function Xe(r){return W({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z",clipRule:"evenodd"}}]})(r)}const P=()=>{const r=B("(max-width: 1050px)"),a=s.useCallback(()=>navigator.clipboard.writeText(`${location.href.split("#")[0]??""}#skills`),[]);return e.jsxs("div",{className:t("mx-auto mt-8 flex px-8","flex-col"),children:[e.jsxs("h2",{className:t("mb-4 self-center"),id:"skills",children:[e.jsxs(f,{className:t("hash-link"),onClick:a,to:"#skills",children:["Skills"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsxs("section",{"aria-labelledby":"skills",className:t("text-left text-xl"),children:[e.jsx(b,{heading:"Agile Software Development",icon:e.jsx(pe,{}),children:e.jsxs(e.Fragment,{children:["Familiar with"," ",e.jsx(j,{isInverted:!0,text:"Agile",tooltip:"Set of guiding principles for software development"})," ","principles and"," ",e.jsx(j,{isInverted:!0,text:"CI/CD",tooltip:"Continuous Integration and Delivery"}),". At"," ",e.jsx(f,{"aria-label":"Agile Digital",className:t("link"),title:"View my projects with Agile Digital",to:"projects?categories=Agile%2520Digital",children:"Agile Digital"}),", I have project experience working with teams using"," ",e.jsx(j,{isInverted:!0,text:"Kanban",tooltip:"Agile framework"}),". I collaborate effectively with other developers, frequently practicing pair programming and reviewing"," ",e.jsx(j,{isInverted:!0,text:"PR",tooltip:"Pull Request"}),"s. View my contributions on"," ",e.jsx("a",{"aria-label":"GitHub",className:t("link"),href:"https://github.com/Tim-W-James",rel:"noreferrer",target:"_blank",title:"View my contributions",children:"GitHub"}),"."]})}),e.jsx(b,{heading:"Attention to Detail",icon:e.jsx(Xe,{}),children:e.jsxs(e.Fragment,{children:["I strive for a exceptional level of quality in my work and proactively seek to improve my craft. I apply my creativity when"," building software, and enjoy collaborating with clients to deliver the best possible"," ",e.jsx(j,{isInverted:!0,text:"UX",tooltip:"User Experience"}),". To ensure my work is inclusive, I place an emphasis on accessibility."]})}),e.jsx(b,{heading:"Concise Communication",icon:e.jsx(Ke,{}),children:e.jsxs(e.Fragment,{children:["I convey ideas clearly in both written and verbal forms, maintaining a"," ",e.jsx(ne,{"aria-label":"blog",className:t("link"),title:"View my blog",to:"/blog",children:"blog"})," ","and performing tech talks at"," ",e.jsx(f,{"aria-label":"Agile Digital",className:t("link"),title:"View my projects with Agile Digital",to:"projects?categories=Agile%2520Digital",children:"Agile Digital"}),". On a project with"," ",e.jsx(f,{"aria-label":"Toyota Finance Australia",className:t("link"),title:"View project details",to:"/projects?reset#Toyota Finance Australia",children:"Toyota Finance Australia"}),", I demonstrated my ability to work with a client of substantial scale. As a spokesperson for an"," ",e.jsx(f,{"aria-label":"ANU TechLauncher project",className:t("link"),title:"View project details",to:"/projects?reset#Siding Spring Observatory VR Experience",children:"ANU TechLauncher project"}),", I was granted the award for best pitch."]})}),e.jsx(b,{heading:"Quality Code",icon:e.jsx(ue,{}),children:e.jsxs(e.Fragment,{children:["I ensure my code is robust and maintainable by adopting a functional programming style. I employ strict typing across the tech stack, employ code quality tools like"," ",e.jsx("a",{"aria-label":"ESLint",className:t("link"),href:"https://www.npmjs.com/package/@tim-w-james/eslint-config",rel:"noreferrer",target:"_blank",title:"View my custom ESLint config",children:"ESLint"}),", and take a layered approach to testing. I take care to document my solutions, and continually address technical debt. By taking initiative with ",e.jsx(j,{isInverted:!0,text:"DX",tooltip:"Developer Experience"})," ","tooling and ",e.jsx(j,{isInverted:!0,text:"DevOps",tooltip:"Developer Operations"})," ","infrastructure I am able to boost my productivity. See my"," ",e.jsx(f,{"aria-label":"core tech stack",className:t("link"),title:"View my tech stack",to:"/#technologies",children:"core tech stack"}),"."]})}),e.jsx("hr",{className:t("radial-border my-8")}),e.jsx(b,{heading:"CV / Resume",icon:e.jsx(he,{}),startClosed:!0,children:e.jsx("iframe",{height:r?"500px":"1000px",src:Je,title:"CV",width:"100%"})}),e.jsx("hr",{className:t("radial-border mt-6")})]})]})};try{P.displayName="Skills",P.__docgenInfo={description:"",displayName:"Skills",props:{}}}catch{}const S=({shouldShrinkButtons:r})=>e.jsxs("section",{"aria-label":"Social Links",className:t("mx-auto mt-4 flex max-w-2xl items-center justify-around gap-4","flex-row","flex-wrap"),children:[e.jsx(g,{icon:e.jsx(xe,{className:t({"text-4xl":r})}),isLabelHidden:r,isLight:!0,label:"Linkedin",to:"https://www.linkedin.com/in/timothy-william-james/",tooltip:"Find me on Linkedin"}),e.jsx(g,{icon:e.jsx(fe,{className:t({"text-4xl":r})}),isLabelHidden:r,isLight:!0,label:"GitHub",to:"https://github.com/Tim-W-James",tooltip:"Find my projects on GitHub"}),e.jsx(g,{icon:e.jsx(ge,{className:t({"text-4xl":r})}),isLabelHidden:r,isLight:!0,label:"Twitter",to:"https://twitter.com/TimWJames",tooltip:"Follow me on Twitter @TimWJames"})]});try{S.displayName="SocialLinks",S.__docgenInfo={description:"",displayName:"SocialLinks",props:{shouldShrinkButtons:{defaultValue:null,description:"",name:"shouldShrinkButtons",required:!0,type:{name:"boolean"}}}}}catch{}const D=()=>{const r=B("(max-width: 670px)");return e.jsx(De,{children:e.jsxs("div",{className:t("text-center"),children:[e.jsx(He,{}),e.jsx(N,{transitionDuration:400,children:e.jsxs("header",{className:t("mt-56 flex place-content-center items-center","flex-col"),children:[e.jsx(ce,{imageSrc:de}),e.jsxs("h1",{id:"timjames",children:["👋 Hello,",e.jsx("br",{}),"I'm ",e.jsx("b",{className:t("text-light-accent"),children:"Tim James"}),e.jsx("hr",{className:t("radial-border")}),"Full-Stack Developer"]})]})}),e.jsxs("main",{children:[e.jsx(N,{transitionDuration:400,children:e.jsx(S,{shouldShrinkButtons:r})}),e.jsx(T,{}),e.jsxs("div",{className:t("solid-background"),children:[e.jsx("div",{className:t("container mx-auto pt-8"),children:e.jsxs(N,{transitionDuration:400,children:[e.jsx(R,{}),e.jsx(E,{}),e.jsx(M,{}),e.jsx(P,{}),e.jsx("div",{className:t("mt-8 flex justify-center"),children:e.jsx(g,{icon:e.jsx(H,{}),iconRight:!0,isLight:!0,label:"Contact Me",mode:"route",to:"/contact",tooltip:"Get in touch"})})]})}),e.jsx("div",{className:t("pb-16")})]})]})]})})},K=D;try{D.displayName="Home",D.__docgenInfo={description:"",displayName:"Home",props:{}}}catch{}const At={component:K,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},Ye=new _e({defaultOptions:{queries:{staleTime:10*(60*1e3),cacheTime:60*(60*1e3)}}}),C=()=>e.jsx(ve,{client:Ye,children:e.jsxs(le,{children:[e.jsx(oe,{}),e.jsx(ie,{}),e.jsx(ae,{content:e.jsx(K,{}),description:z.description,nonStandardLayout:!0,title:z.title}),e.jsx(se,{allowFixed:!0})]})});var U,q,G;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`() => <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Page content={<HomePage />} description={HOME.description} nonStandardLayout title={HOME.title} />
      <Footer allowFixed />
    </Router>
  </QueryClientProvider>`,...(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Ft=["Home"];export{C as Home,Ft as __namedExportsOrder,At as default};
//# sourceMappingURL=Home.stories-8cac54ed.js.map