import{j as e}from"./jsx-runtime-ccada58e.js";import{r as l}from"./index-f1f749bf.js";import{c as t}from"./cssUtils-1e7dba99.js";import{C as p}from"./index.esm-966ec57a.js";const d="Tim James",m=" | ",f="Full-Stack Software Engineer 🚀",x="Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, Tailwind, AWS, and ForgeRock.",h=(a,n,s)=>{l.useEffect(()=>{document.title=a?`${a}${m}${d}`:`${d}${m}${f}`;const c=document.querySelector("meta[name='description']");c&&c.setAttribute("content",n||x);const r=document.querySelector("link[rel='canonical']");r&&s&&r.setAttribute("href",s)},[s,n,a])},g=()=>e.jsx("div",{className:t("flex justify-center"),children:e.jsx("span",{className:t("inline-block","leading-0","animate-spin","text-light-accent text-7xl"),children:e.jsx(p,{})})}),u=({title:a,description:n,canonical:s,nonStandardLayout:c,content:r,fallback:o})=>(h(a,n,s),l.useEffect(()=>{const i=document.querySelector(".grecaptcha-badge");i&&(a==="Contact"?i.classList.add("captcha-show"):i.classList.remove("captcha-show"))},[a]),c?e.jsx(l.Suspense,{fallback:o,children:r}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t("fixed bg-dark-shades w-screen h-screen -z-10")}),e.jsxs("div",{className:t("my-10 mx-auto pt-10 px-8 container"),children:[e.jsx("header",{className:t("flex mx-auto items-center place-content-center px-8 text-center","flex-col"),children:e.jsxs("h1",{className:t("text-light-accent font-bold"),id:a,children:[a,e.jsx("hr",{className:t("radial-border")})]})}),e.jsx("main",{children:e.jsx(l.Suspense,{fallback:o||e.jsx(g,{}),children:r})})]})]}));try{u.displayName="Page",u.__docgenInfo={description:"Wrapper for page content that sets the title.",displayName:"Page",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},canonical:{defaultValue:null,description:"",name:"canonical",required:!1,type:{name:"string"}},nonStandardLayout:{defaultValue:null,description:"",name:"nonStandardLayout",required:!1,type:{name:"boolean"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"Element"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Element"}}}}}catch{}export{u as P};
//# sourceMappingURL=Page-65e343ec.js.map