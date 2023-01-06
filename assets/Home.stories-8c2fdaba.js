import{j as e,c as t}from"./cssUtils-09c0b384.js";import{F as b}from"./Footer-7327885d.js";import{P as f}from"./Page-eb528f6a.js";import{N as u,H as x}from"./Navbar-ce487071.js";import{S as w}from"./ScrollToTop-565a590c.js";import{L as N,B as v}from"./index-03b8123c.js";import{L as y,l as k}from"./Logo-0ffd78aa.js";import{B as l}from"./Button-44af9048.js";import{a as F,b as r,t as T}from"./TimelineItem-847c1be0.js";import{L as C,C as A}from"./LoadingCard-aabc1e8d.js";import{T as L}from"./Timeline-e2ca3e62.js";import{u as H}from"./useDevdottoArticlesMeta-45a66807.js";import{b as j}from"./useMediaQuery-f3cc2322.js";import{a as I,P as S}from"./ParallaxMountains-36ea5c0b.js";import{i as d,f as M,d as D,g as P,j as _,k as B}from"./index.esm-51a0c2e2.js";import{G as p}from"./iconBase-4e3618d4.js";import{H as a}from"./react-router-hash-link.esm-9085e478.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./logo-7615857d.js";import"./motion-f33a0d59.js";import"./mouseHover-f6e29944.js";import"./index.esm-568cca05.js";function V(i){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M488 348.78h-70.24l-15.1 87.44-48.78-87.44H169v-50h190v-157h129zm-145-273v207H158.13l-48.79 87.47-15.11-87.47H24v-207zM136.724 215.324c0-10.139-12.257-15.214-19.425-8.046-7.168 7.168-2.093 19.426 8.046 19.426 6.285 0 11.38-5.095 11.38-11.38zm60.945 0c-.068-10.12-12.32-15.122-19.452-7.943-7.131 7.18-2.047 19.399 8.073 19.399 6.314 0 11.422-5.141 11.38-11.456zm60.945 0c0-10.139-12.257-15.214-19.425-8.046-7.169 7.168-2.093 19.426 8.046 19.426 6.284 0 11.38-5.095 11.38-11.38z"}}]})(i)}function E(i){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z",clipRule:"evenodd"}}]})(i)}const G=({shouldShrinkButtons:i})=>e.jsxs("div",{className:t("flex gap-4 justify-around items-center mt-4 max-w-2xl mx-auto","flex-row","flex-wrap"),children:[e.jsx(l,{icon:e.jsx(M,{className:t({"text-4xl":i})}),isLabelHidden:i,isLight:!0,label:"Linkedin",to:"https://www.linkedin.com/in/timothy-william-james/",tooltip:"Find me on Linkedin"}),e.jsx(l,{icon:e.jsx(D,{className:t({"text-4xl":i})}),isLabelHidden:i,isLight:!0,label:"GitHub",to:"https://github.com/Tim-W-James",tooltip:"Find my projects on GitHub"}),e.jsx(l,{icon:e.jsx(P,{className:t({"text-4xl":i})}),isLabelHidden:i,isLight:!0,label:"Twitter",to:"https://twitter.com/TimWJames",tooltip:"Follow me on Twitter @TimWJames"})]}),R=()=>e.jsxs("div",{className:t("flex mt-8 mx-auto max-w-2xl items-center place-content-center","solid-background","flex-col"),children:[e.jsxs("h2",{id:"technologies",children:["Core Technologies",e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{className:t("flex gap-4 text-xl items-center place-content-center","flex-row","flex-wrap"),children:Object.entries(F).filter(([i,s])=>s.isCore).map(([i,s],o)=>e.jsxs(a,{className:t("inline-flex","items-center","hover:text-light-accent active:text-dark-accent active:underline"),title:`View all my projects that use ${i}`,to:`/projects?${new URLSearchParams({technologies:i.toLowerCase()}).toString()}`,children:[s.icon?e.jsxs(e.Fragment,{children:[s.icon," "]}):null,i]},o))})]}),W=()=>e.jsxs("div",{className:t("flex mx-auto items-center place-content-center px-8 mb-8","flex-col"),children:[e.jsxs("h2",{id:"about",children:[e.jsxs(a,{className:t("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#about`),to:"#about",children:["About Me"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{children:e.jsxs("ul",{className:t("list-disc text-xl text-left"),children:[e.jsxs("li",{children:["💼 ",e.jsx("b",{className:t("font-bold"),children:"Software Engineer"})," at"," ",e.jsx("a",{className:t("link"),href:"https://github.com/agiledigital",rel:"noreferrer",target:"_blank",title:"Agile Digital Website",children:"Agile Digital"})," ","since 2021"]}),e.jsxs("li",{children:["🎓"," ",e.jsx("b",{className:t("font-bold"),children:"Bachelor of Information Technology "}),"at the"," ",e.jsx("a",{className:t("link"),href:"https://www.anu.edu.au/",rel:"noreferrer",target:"_blank",title:"ANU",children:"Australian National University"})," ","with a ",e.jsx(r,{isInverted:!0,text:"GPA",tooltip:"Grade Point Average"})," ","of 6.3/7"]}),e.jsxs("li",{children:["📄 View my certifications on"," ",e.jsx("a",{className:t("link"),href:"https://www.credly.com/users/timjames/badges",rel:"noreferrer",target:"_blank",title:"Certifications",children:"Credly"})]}),e.jsxs("li",{children:["🗺️ Located in"," ",e.jsx("a",{className:t("link"),href:"https://www.google.com.au/maps/place/Canberra+ACT",rel:"noreferrer",target:"_blank",title:"Location",children:"Canberra, Australia"})]}),e.jsxs("li",{children:["📫 How to reach me:"," ",e.jsx("a",{className:t("link"),href:"mailto:tim.james.work9800@gmail.com",rel:"noreferrer",target:"_blank",title:"tim.james.work9800@gmail.com",children:"tim.james.work9800@gmail.com"})]})]})})]}),z=()=>{const i=!j("(max-width: 767px)");return e.jsxs("div",{className:t("mb-8"),children:[e.jsx("div",{className:t("flex mx-auto items-center place-content-center px-8","flex-col"),children:e.jsxs("h2",{className:t("mt-8 mb-0"),id:"projects",children:[e.jsxs(a,{className:t("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#projects`),to:"#projects",children:["Major Projects"," "]}),i?null:e.jsx("hr",{className:t("radial-border")})]})}),e.jsxs("section",{children:[e.jsx(L,{data:T,filterFunc:s=>!!s.isFeatured}),e.jsx("div",{className:t("flex justify-center"),children:e.jsx(l,{icon:e.jsx(d,{}),iconRight:!0,isLight:!0,label:"More Projects",mode:"route",to:"/projects",tooltip:"View more projects"})})]})]})},O=()=>e.jsxs("div",{className:t("flex mx-auto items-center place-content-center px-8 mt-8","flex-col"),children:[e.jsxs("h2",{id:"hobbies",children:[e.jsxs(a,{className:t("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#hobbies`),to:"#hobbies",children:["What I do When I'm Not Writing Code"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsx("section",{children:e.jsxs("ul",{className:t("list-disc text-xl text-left"),children:[e.jsxs("li",{children:["✨ ",e.jsx("b",{className:t("font-bold"),children:"Interests"}),": Hiking, Astronomy, Creative Writing, Philosophy, Guitar, Board Games"]}),e.jsxs("li",{children:["🎮 ",e.jsx("b",{className:t("font-bold"),children:"Video Games"}),": Hollow Knight, Monster Hunter, Subnautica - Find me on"," ",e.jsx("a",{className:t("link"),href:"https://steamcommunity.com/id/ExplosiveFridge",rel:"noreferrer",target:"_blank",title:"ExplosiveFridge",children:"Steam"})]}),e.jsxs("li",{children:["🎥 ",e.jsx("b",{className:t("font-bold"),children:"Movies"}),": Bladerunner 2049, Mad Max: Fury Road, What We Do in the Shadows"]}),e.jsxs("li",{children:["📺 ",e.jsx("b",{className:t("font-bold"),children:"TV Shows"}),": The Expanse, Breaking Bad, Game of Thrones"]}),e.jsxs("li",{children:["📚 ",e.jsx("b",{className:t("font-bold"),children:"Books"}),": Dune"]}),e.jsxs("li",{children:["🎵 ",e.jsx("b",{className:t("font-bold"),children:"Music"}),": Tame Impala - Find me on"," ",e.jsx("a",{className:t("link"),href:"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y",rel:"noreferrer",target:"_blank",title:"TimJ",children:"Spotify"})]}),e.jsxs("li",{children:["🐈 ",e.jsx("b",{className:t("font-bold"),children:"Pets"}),": I have a cat called Max"]})]})})]}),n=({heading:i,icon:s,body:o})=>e.jsxs("div",{className:t("mb-4"),children:[e.jsxs("h3",{className:t("mb-0 text-light-accent","inline-flex","items-center gap-1"),children:[s,i]}),e.jsx("p",{className:t("hyphens-none"),children:o})]}),$=()=>e.jsxs("div",{className:t("flex mx-auto px-8 mt-8","flex-col"),children:[e.jsxs("h2",{className:t("self-center mb-4"),id:"skills",children:[e.jsxs(a,{className:t("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#skills`),to:"#skills",children:["Skills"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsx("br",{}),e.jsxs("section",{className:t("text-left text-xl"),children:[e.jsx(n,{body:e.jsxs(e.Fragment,{children:["Familiar with"," ",e.jsx(r,{isInverted:!0,text:"Agile",tooltip:"Set of guiding principles for software development"})," ","principles and"," ",e.jsx(r,{isInverted:!0,text:"CI/CD",tooltip:"Continuous Integration and Delivery"}),". At"," ",e.jsx(a,{className:t("link"),title:"View my projects with Agile Digital",to:"projects?categories=Agile%2520Digital",children:"Agile Digital"}),", I have project experience working with teams using"," ",e.jsx(r,{isInverted:!0,text:"Kanban",tooltip:"Agile framework"}),". I collaborate effectively with other developers, frequently practicing pair programming and reviewing"," ",e.jsx(r,{isInverted:!0,text:"PR",tooltip:"Pull Request"}),"s. View my contributions on"," ",e.jsx("a",{className:t("link"),href:"https://github.com/Tim-W-James",rel:"noreferrer",target:"_blank",title:"View my contributions",children:"GitHub"}),"."]}),heading:e.jsx(e.Fragment,{children:"Agile Software Development"}),icon:e.jsx(_,{})}),e.jsx(n,{body:e.jsxs(e.Fragment,{children:["I strive for a exceptional level of quality in my work and proactively seek to improve my craft. I apply my creativity when","building software, and enjoy collaborating with clients to deliver the best possible"," ",e.jsx(r,{isInverted:!0,text:"UX",tooltip:"User Experience"}),"."]}),heading:e.jsx(e.Fragment,{children:"Attention to Detail"}),icon:e.jsx(E,{})}),e.jsx(n,{body:e.jsxs(e.Fragment,{children:["I convey ideas clearly in both written and verbal forms, maintaining a"," ",e.jsx(N,{className:t("link"),title:"View my blog",to:"/blog",children:"blog"})," ","and performing tech talks at"," ",e.jsx(a,{className:t("link"),title:"View my projects with Agile Digital",to:"projects?categories=Agile%2520Digital",children:"Agile Digital"}),". On a project with"," ",e.jsx(a,{className:t("link"),title:"View project details",to:"/projects?reset#Toyota Finance Australia",children:"Toyota Finance Australia"}),", I demonstrated my ability to work with a client of substantial scale. As a spokesperson for an"," ",e.jsx(a,{className:t("link"),title:"View project details",to:"/projects?reset#Siding Spring Observatory VR Experience",children:"ANU TechLauncher project"}),", I was granted the award for best pitch."]}),heading:e.jsx(e.Fragment,{children:"Concise and Confident Communicator"}),icon:e.jsx(V,{})}),e.jsx(n,{body:e.jsxs(e.Fragment,{children:["I ensure my code is robust and maintainable by adopting a functional programming style. I prefer strict typing across the tech stack, employ code quality tools like"," ",e.jsx("a",{className:t("link"),href:"https://www.npmjs.com/package/@tim-w-james/eslint-config",rel:"noreferrer",target:"_blank",title:"View my custom ESLint config",children:"ESLint"}),", and take a layered approach to testing. I take care to document my solutions, and continually address technical debt. By taking initiative with"," ",e.jsx(r,{isInverted:!0,text:"DX",tooltip:"Developer Experience"})," ","tooling and ",e.jsx(r,{isInverted:!0,text:"DevOps",tooltip:"Developer Operations"})," ","infrastructure I am able to boost my productivity. See my"," ",e.jsx(a,{className:t("link"),title:"View my tech stack",to:"/#technologies",children:"core tech stack"}),"."]}),heading:e.jsx(e.Fragment,{children:"Code Quality"}),icon:e.jsx(B,{})})]})]}),J=()=>{const i=H(2);return e.jsxs("div",{children:[e.jsxs("h2",{className:t("self-center mb-4"),id:"blog",children:[e.jsxs(a,{className:t("hash-link"),onClick:()=>navigator.clipboard.writeText(`${location.href.split("#")[0]||""}#blog`),to:"#blog",children:["Latest Blog Posts"," "]}),e.jsx("hr",{className:t("radial-border")})]}),e.jsxs("section",{children:[e.jsx("div",{className:t("flex gap-4 p-0 mx-2 justify-center","flex-wrap"),children:i.loading?[...Array(2).keys()].map(s=>e.jsx(C,{},s)):i.articles.map((s,o)=>e.jsx(A,{article:s},o))}),e.jsx("div",{className:t("flex justify-center mt-8"),children:e.jsx(l,{icon:e.jsx(d,{}),iconRight:!0,isLight:!0,label:"More Articles",mode:"route",to:"/blog",tooltip:"View more articles"})})]})]})},m=()=>{const i=j("(max-width: 670px)");return e.jsx(I,{children:e.jsxs("div",{className:t("text-center"),children:[e.jsx(S,{}),e.jsxs("header",{className:t("flex mt-56 items-center place-content-center","flex-col"),children:[e.jsx(y,{imageSrc:k}),e.jsxs("h1",{id:"timjames",children:["👋 Hello,",e.jsx("br",{}),"I'm ",e.jsx("b",{className:t("text-light-accent"),children:"Tim James"}),e.jsx("hr",{className:t("radial-border")}),"Full-Stack Developer"]})]}),e.jsx(G,{shouldShrinkButtons:i}),e.jsx(R,{}),e.jsxs("div",{className:t("solid-background"),children:[e.jsxs("div",{className:t("pt-8 mx-auto container"),children:[e.jsx(W,{}),e.jsx(J,{}),e.jsx(z,{}),e.jsx($,{}),e.jsx(O,{}),e.jsx("div",{className:t("flex justify-center mt-8"),children:e.jsx(l,{icon:e.jsx(d,{}),iconRight:!0,isLight:!0,label:"Contact Me",mode:"route",to:"/contact",tooltip:"Get in touch"})})]}),e.jsx("div",{className:t("pb-16")})]})]})})},g=m;try{m.displayName="Home",m.__docgenInfo={description:"",displayName:"Home",props:{}}}catch{}const ge={component:g,parameters:{backgrounds:{disable:!0},controls:{hideNoControlsWarning:!0}}},c=()=>e.jsxs(v,{children:[e.jsx(w,{}),e.jsx(u,{}),e.jsx(f,{content:e.jsx(g,{}),description:x.description,nonStandardLayout:!0,title:x.title}),e.jsx(b,{allowFixed:!0})]});var h;c.parameters={...c.parameters,storySource:{source:`() => <Router>
    <ScrollToTop />
    <Navbar />
    <Page content={<HomePage />} description={HOME.description} nonStandardLayout title={HOME.title} />
    <Footer allowFixed />
  </Router>`,...(h=c.parameters)==null?void 0:h.storySource}};const be=["Home"];export{c as Home,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=Home.stories-8c2fdaba.js.map