import{a as b,j as t,c as v}from"./cssUtils-d3b3e467.js";import{a as x,i as g,b as k}from"./useMediaQuery-3280bb9b.js";import{s as M}from"./mouseHover-f6e29944.js";import{L as j}from"./index-cf646f8d.js";import{r as B}from"./index-61bf1805.js";const q="__acrylicButton_11xhj_1",V="__appearInactive_11xhj_20",L="__dark_11xhj_20",T="__light_11xhj_24",H="__safari_11xhj_31",r={_acrylicButton:q,_appearInactive:V,_dark:L,_light:T,"shadow-inset-center":"_shadow-inset-center_11xhj_1",_safari:H},p=({label:e,tooltip:o,icon:d,isLight:m,isLabelHidden:l,iconRight:h,disabled:i,appearInactive:_,className:a,...n})=>{const f=x(),s=b()(r._acrylicButton,e&&!l?"px-8":"px-4 h-fit",m&&!i?"acrylic-light":"acrylic-dark",m&&!i?r._light:r._dark,{[r._safari]:g||k},{[r._appearInactive]:!!_}),u=B.useCallback(y=>M(y,!1,f),[f]),c=t.jsx("span",{className:v("flex items-center justify-between gap-2"),children:h?t.jsxs(t.Fragment,{children:[l?null:e,d]}):t.jsxs(t.Fragment,{children:[d,l?null:e]})});switch(n.mode){case"route":return t.jsx(j,{"aria-label":e,className:s+(a?` ${a}`:""),onMouseMove:u,title:e&&o,to:n.to??"/",type:"button",children:c});case"button":return t.jsx("button",{"aria-label":e,className:s+(a?` ${a}`:""),disabled:i,onClick:n.onClick,onMouseMove:u,title:e&&o,type:"button",...n.childProps,children:c});default:return t.jsx("a",{"aria-label":e,className:`${s} ${a??""}`,href:n.to??"/",onMouseMove:u,rel:"noreferrer",target:"_blank",title:e&&o,type:"button",children:c})}},P=p;try{p.displayName="Button",p.__docgenInfo={description:"Custom button component",displayName:"Button",props:{label:{defaultValue:null,description:"Label display text",name:"label",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"Title to display on hover",name:"tooltip",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Icon element to display next to the label",name:"icon",required:!1,type:{name:"Element"}},isLight:{defaultValue:null,description:"Whether to use the light or dark theme",name:"isLight",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"Conditionally hide the label",name:"isLabelHidden",required:!1,type:{name:"boolean"}},iconRight:{defaultValue:null,description:"Position the icon to the right, left by default",name:"iconRight",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable the button",name:"disabled",required:!1,type:{name:"boolean"}},appearInactive:{defaultValue:null,description:"Appear disabled, but still interactive for accessibility reasons",name:"appearInactive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class names to append to the defaults",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:`Whether to route to a SPA route or an external link
Treat as a primitive HTML button with an onClick`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"route"'},{value:'"anchor"'},{value:'"button"'}]}},to:{defaultValue:null,description:"href or link for the anchor or route respectively",name:"to",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click event",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},childProps:{defaultValue:null,description:"Props to pass to the HTML button",name:"childProps",required:!1,type:{name:'Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">'}}}}}catch{}export{P as B};
//# sourceMappingURL=Button-932fda21.js.map