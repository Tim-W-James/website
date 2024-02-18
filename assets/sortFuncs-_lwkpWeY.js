var Wt=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(Wt(e,t,"read from private field"),s?s.call(e):t.get(e)),o=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},a=(e,t,s,r)=>(Wt(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var Bt=(e,t,s,r)=>({set _(n){a(e,t,n,s)},get _(){return i(e,t,r)}}),p=(e,t,s)=>(Wt(e,t,"access private method"),s);import{r as K}from"./index-B3pBfn-S.js";import{j as qe}from"./cssUtils-Dj2pf34W.js";import{z as C}from"./index-dIKOytT1.js";var Ht=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},St=typeof window>"u"||"Deno"in window;function k(){}function xe(e,t){return typeof e=="function"?e(t):e}function Xt(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ee(e,t){return Math.max(e+(t||0)-Date.now(),0)}function le(e,t){const{type:s="all",exact:r,fetchStatus:n,predicate:u,queryKey:h,stale:c}=e;if(h){if(r){if(t.queryHash!==he(h,t.options))return!1}else if(!Mt(t.queryKey,h))return!1}if(s!=="all"){const g=t.isActive();if(s==="active"&&!g||s==="inactive"&&g)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||typeof n<"u"&&n!==t.state.fetchStatus||u&&!u(t))}function de(e,t){const{exact:s,status:r,predicate:n,mutationKey:u}=e;if(u){if(!t.options.mutationKey)return!1;if(s){if(Qt(t.options.mutationKey)!==Qt(u))return!1}else if(!Mt(t.options.mutationKey,u))return!1}return!(r&&t.state.status!==r||n&&!n(t))}function he(e,t){return((t==null?void 0:t.queryKeyHashFn)||Qt)(e)}function Qt(e){return JSON.stringify(e,(t,s)=>Zt(s)?Object.keys(s).sort().reduce((r,n)=>(r[n]=s[n],r),{}):s)}function Mt(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!Mt(e[s],t[s])):!1}function Qe(e,t){if(e===t)return e;const s=fe(e)&&fe(t);if(s||Zt(e)&&Zt(t)){const r=s?e:Object.keys(e),n=r.length,u=s?t:Object.keys(t),h=u.length,c=s?[]:{};let g=0;for(let b=0;b<h;b++){const d=s?b:u[b];!s&&e[d]===void 0&&t[d]===void 0&&r.includes(d)?(c[d]=void 0,g++):(c[d]=Qe(e[d],t[d]),c[d]===e[d]&&e[d]!==void 0&&g++)}return n===h&&g===n?e:c}return t}function Yt(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function fe(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Zt(e){if(!pe(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const s=t.prototype;return!(!pe(s)||!s.hasOwnProperty("isPrototypeOf"))}function pe(e){return Object.prototype.toString.call(e)==="[object Object]"}function je(e){return new Promise(t=>{setTimeout(t,e)})}function te(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?Qe(e,t):t}function Le(e,t,s=0){const r=[...e,t];return s&&r.length>s?r.slice(1):r}function ke(e,t,s=0){const r=[t,...e];return s&&r.length>s?r.slice(0,-1):r}var it,J,lt,ve,Ke=(ve=class extends Ht{constructor(){super();o(this,it,void 0);o(this,J,void 0);o(this,lt,void 0);a(this,lt,t=>{if(!St&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){i(this,J)||this.setEventListener(i(this,lt))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,J))==null||t.call(this),a(this,J,void 0))}setEventListener(t){var s;a(this,lt,t),(s=i(this,J))==null||s.call(this),a(this,J,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){i(this,it)!==t&&(a(this,it,t),this.onFocus())}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){var t;return typeof i(this,it)=="boolean"?i(this,it):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},it=new WeakMap,J=new WeakMap,lt=new WeakMap,ve),Nt=new Ke,dt,X,ft,be,He=(be=class extends Ht{constructor(){super();o(this,dt,!0);o(this,X,void 0);o(this,ft,void 0);a(this,ft,t=>{if(!St&&window.addEventListener){const s=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",r)}}})}onSubscribe(){i(this,X)||this.setEventListener(i(this,ft))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,X))==null||t.call(this),a(this,X,void 0))}setEventListener(t){var s;a(this,ft,t),(s=i(this,X))==null||s.call(this),a(this,X,t(this.setOnline.bind(this)))}setOnline(t){i(this,dt)!==t&&(a(this,dt,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return i(this,dt)}},dt=new WeakMap,X=new WeakMap,ft=new WeakMap,be),$t=new He;function Be(e){return Math.min(1e3*2**e,3e4)}function Vt(e){return(e??"online")==="online"?$t.isOnline():!0}var Me=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Jt(e){return e instanceof Me}function Ae(e){let t=!1,s=0,r=!1,n,u,h;const c=new Promise((f,y)=>{u=f,h=y}),g=f=>{var y;r||(l(new Me(f)),(y=e.abort)==null||y.call(e))},b=()=>{t=!0},d=()=>{t=!1},D=()=>!Nt.isFocused()||e.networkMode!=="always"&&!$t.isOnline(),m=f=>{var y;r||(r=!0,(y=e.onSuccess)==null||y.call(e,f),n==null||n(),u(f))},l=f=>{var y;r||(r=!0,(y=e.onError)==null||y.call(e,f),n==null||n(),h(f))},v=()=>new Promise(f=>{var y;n=E=>{const w=r||!D();return w&&f(E),w},(y=e.onPause)==null||y.call(e)}).then(()=>{var f;n=void 0,r||(f=e.onContinue)==null||f.call(e)}),F=()=>{if(r)return;let f;try{f=e.fn()}catch(y){f=Promise.reject(y)}Promise.resolve(f).then(m).catch(y=>{var _;if(r)return;const E=e.retry??(St?0:3),w=e.retryDelay??Be,A=typeof w=="function"?w(s,y):w,I=E===!0||typeof E=="number"&&s<E||typeof E=="function"&&E(s,y);if(t||!I){l(y);return}s++,(_=e.onFail)==null||_.call(e,s,y),je(A).then(()=>{if(D())return v()}).then(()=>{t?l(y):F()})})};return Vt(e.networkMode)?F():v().then(F),{promise:c,cancel:g,continue:()=>(n==null?void 0:n())?c:Promise.resolve(),cancelRetry:b,continueRetry:d}}function Ge(){let e=[],t=0,s=m=>{m()},r=m=>{m()},n=m=>setTimeout(m,0);const u=m=>{n=m},h=m=>{let l;t++;try{l=m()}finally{t--,t||b()}return l},c=m=>{t?e.push(m):n(()=>{s(m)})},g=m=>(...l)=>{c(()=>{m(...l)})},b=()=>{const m=e;e=[],m.length&&n(()=>{r(()=>{m.forEach(l=>{s(l)})})})};return{batch:h,batchCalls:g,schedule:c,setNotifyFunction:m=>{s=m},setBatchNotifyFunction:m=>{r=m},setScheduler:u}}var M=Ge(),rt,we,De=(we=class{constructor(){o(this,rt,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Xt(this.gcTime)&&a(this,rt,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(St?1/0:5*60*1e3))}clearGcTimeout(){i(this,rt)&&(clearTimeout(i(this,rt)),a(this,rt,void 0))}},rt=new WeakMap,we),pt,yt,x,Y,j,S,At,nt,mt,Gt,H,V,Oe,Ne=(Oe=class extends De{constructor(t){super();o(this,mt);o(this,H);o(this,pt,void 0);o(this,yt,void 0);o(this,x,void 0);o(this,Y,void 0);o(this,j,void 0);o(this,S,void 0);o(this,At,void 0);o(this,nt,void 0);a(this,nt,!1),a(this,At,t.defaultOptions),p(this,mt,Gt).call(this,t.options),a(this,S,[]),a(this,x,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,a(this,pt,t.state||$e(this.options)),this.state=i(this,pt),this.scheduleGc()}get meta(){return this.options.meta}optionalRemove(){!i(this,S).length&&this.state.fetchStatus==="idle"&&i(this,x).remove(this)}setData(t,s){const r=te(this.state.data,t,this.options);return p(this,H,V).call(this,{data:r,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),r}setState(t,s){p(this,H,V).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var r;const s=i(this,Y);return(r=i(this,j))==null||r.cancel(t),s?s.then(k).catch(k):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(i(this,pt))}isActive(){return i(this,S).some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||i(this,S).some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Ee(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=i(this,S).find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=i(this,j))==null||s.continue()}onOnline(){var s;const t=i(this,S).find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=i(this,j))==null||s.continue()}addObserver(t){i(this,S).includes(t)||(i(this,S).push(t),this.clearGcTimeout(),i(this,x).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){i(this,S).includes(t)&&(a(this,S,i(this,S).filter(s=>s!==t)),i(this,S).length||(i(this,j)&&(i(this,nt)?i(this,j).cancel({revert:!0}):i(this,j).cancelRetry()),this.scheduleGc()),i(this,x).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return i(this,S).length}invalidate(){this.state.isInvalidated||p(this,H,V).call(this,{type:"invalidate"})}fetch(t,s){var b,d,D,m;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(i(this,Y))return(b=i(this,j))==null||b.continueRetry(),i(this,Y)}if(t&&p(this,mt,Gt).call(this,t),!this.options.queryFn){const l=i(this,S).find(v=>v.options.queryFn);l&&p(this,mt,Gt).call(this,l.options)}const r=new AbortController,n={queryKey:this.queryKey,meta:this.meta},u=l=>{Object.defineProperty(l,"signal",{enumerable:!0,get:()=>(a(this,nt,!0),r.signal)})};u(n);const h=()=>this.options.queryFn?(a(this,nt,!1),this.options.persister?this.options.persister(this.options.queryFn,n,this):this.options.queryFn(n)):Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),c={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:h};u(c),(d=this.options.behavior)==null||d.onFetch(c,this),a(this,yt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((D=c.fetchOptions)==null?void 0:D.meta))&&p(this,H,V).call(this,{type:"fetch",meta:(m=c.fetchOptions)==null?void 0:m.meta});const g=l=>{var v,F,f,y;Jt(l)&&l.silent||p(this,H,V).call(this,{type:"error",error:l}),Jt(l)||((F=(v=i(this,x).config).onError)==null||F.call(v,l,this),(y=(f=i(this,x).config).onSettled)==null||y.call(f,this.state.data,l,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return a(this,j,Ae({fn:c.fetchFn,abort:r.abort.bind(r),onSuccess:l=>{var v,F,f,y;if(typeof l>"u"){g(new Error(`${this.queryHash} data is undefined`));return}this.setData(l),(F=(v=i(this,x).config).onSuccess)==null||F.call(v,l,this),(y=(f=i(this,x).config).onSettled)==null||y.call(f,l,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:g,onFail:(l,v)=>{p(this,H,V).call(this,{type:"failed",failureCount:l,error:v})},onPause:()=>{p(this,H,V).call(this,{type:"pause"})},onContinue:()=>{p(this,H,V).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode})),a(this,Y,i(this,j).promise),i(this,Y)}},pt=new WeakMap,yt=new WeakMap,x=new WeakMap,Y=new WeakMap,j=new WeakMap,S=new WeakMap,At=new WeakMap,nt=new WeakMap,mt=new WeakSet,Gt=function(t){this.options={...i(this,At),...t},this.updateGcTime(this.options.gcTime)},H=new WeakSet,V=function(t){const s=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:t.meta??null,fetchStatus:Vt(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"pending"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return Jt(n)&&n.revert&&i(this,yt)?{...i(this,yt),fetchStatus:"idle"}:{...r,error:n,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=s(this.state),M.batch(()=>{i(this,S).forEach(r=>{r.onQueryUpdate()}),i(this,x).notify({query:this,type:"updated",action:t})})},Oe);function $e(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=typeof t<"u",r=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var B,Ce,ze=(Ce=class extends Ht{constructor(t={}){super();o(this,B,void 0);this.config=t,a(this,B,new Map)}build(t,s,r){const n=s.queryKey,u=s.queryHash??he(n,s);let h=this.get(u);return h||(h=new Ne({cache:this,queryKey:n,queryHash:u,options:t.defaultQueryOptions(s),state:r,defaultOptions:t.getQueryDefaults(n)}),this.add(h)),h}add(t){i(this,B).has(t.queryHash)||(i(this,B).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=i(this,B).get(t.queryHash);s&&(t.destroy(),s===t&&i(this,B).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){M.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return i(this,B).get(t)}getAll(){return[...i(this,B).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(r=>le(s,r))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(r=>le(t,r)):s}notify(t){M.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){M.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){M.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},B=new WeakMap,Ce),G,Dt,q,gt,N,W,Re,Ve=(Re=class extends De{constructor(t){super();o(this,N);o(this,G,void 0);o(this,Dt,void 0);o(this,q,void 0);o(this,gt,void 0);this.mutationId=t.mutationId,a(this,Dt,t.defaultOptions),a(this,q,t.mutationCache),a(this,G,[]),this.state=t.state||We(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...i(this,Dt),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){i(this,G).includes(t)||(i(this,G).push(t),this.clearGcTimeout(),i(this,q).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){a(this,G,i(this,G).filter(s=>s!==t)),this.scheduleGc(),i(this,q).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){i(this,G).length||(this.state.status==="pending"?this.scheduleGc():i(this,q).remove(this))}continue(){var t;return((t=i(this,gt))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var n,u,h,c,g,b,d,D,m,l,v,F,f,y,E,w,A,I,_,Q;const s=()=>(a(this,gt,Ae({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(R,z)=>{p(this,N,W).call(this,{type:"failed",failureCount:R,error:z})},onPause:()=>{p(this,N,W).call(this,{type:"pause"})},onContinue:()=>{p(this,N,W).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),i(this,gt).promise),r=this.state.status==="pending";try{if(!r){p(this,N,W).call(this,{type:"pending",variables:t}),await((u=(n=i(this,q).config).onMutate)==null?void 0:u.call(n,t,this));const z=await((c=(h=this.options).onMutate)==null?void 0:c.call(h,t));z!==this.state.context&&p(this,N,W).call(this,{type:"pending",context:z,variables:t})}const R=await s();return await((b=(g=i(this,q).config).onSuccess)==null?void 0:b.call(g,R,t,this.state.context,this)),await((D=(d=this.options).onSuccess)==null?void 0:D.call(d,R,t,this.state.context)),await((l=(m=i(this,q).config).onSettled)==null?void 0:l.call(m,R,null,this.state.variables,this.state.context,this)),await((F=(v=this.options).onSettled)==null?void 0:F.call(v,R,null,t,this.state.context)),p(this,N,W).call(this,{type:"success",data:R}),R}catch(R){try{throw await((y=(f=i(this,q).config).onError)==null?void 0:y.call(f,R,t,this.state.context,this)),await((w=(E=this.options).onError)==null?void 0:w.call(E,R,t,this.state.context)),await((I=(A=i(this,q).config).onSettled)==null?void 0:I.call(A,void 0,R,this.state.variables,this.state.context,this)),await((Q=(_=this.options).onSettled)==null?void 0:Q.call(_,void 0,R,t,this.state.context)),R}finally{p(this,N,W).call(this,{type:"error",error:R})}}}},G=new WeakMap,Dt=new WeakMap,q=new WeakMap,gt=new WeakMap,N=new WeakSet,W=function(t){const s=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Vt(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),M.batch(()=>{i(this,G).forEach(r=>{r.onMutationUpdate(t)}),i(this,q).notify({mutation:this,type:"updated",action:t})})},Re);function We(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var L,Ut,at,Pe,Je=(Pe=class extends Ht{constructor(t={}){super();o(this,L,void 0);o(this,Ut,void 0);o(this,at,void 0);this.config=t,a(this,L,[]),a(this,Ut,0)}build(t,s,r){const n=new Ve({mutationCache:this,mutationId:++Bt(this,Ut)._,options:t.defaultMutationOptions(s),state:r});return this.add(n),n}add(t){i(this,L).push(t),this.notify({type:"added",mutation:t})}remove(t){a(this,L,i(this,L).filter(s=>s!==t)),this.notify({type:"removed",mutation:t})}clear(){M.batch(()=>{i(this,L).forEach(t=>{this.remove(t)})})}getAll(){return i(this,L)}find(t){const s={exact:!0,...t};return i(this,L).find(r=>de(s,r))}findAll(t={}){return i(this,L).filter(s=>de(t,s))}notify(t){M.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){return a(this,at,(i(this,at)??Promise.resolve()).then(()=>{const t=i(this,L).filter(s=>s.state.isPaused);return M.batch(()=>t.reduce((s,r)=>s.then(()=>r.continue().catch(k)),Promise.resolve()))}).then(()=>{a(this,at,void 0)})),i(this,at)}},L=new WeakMap,Ut=new WeakMap,at=new WeakMap,Pe);function Xe(e){return{onFetch:(t,s)=>{const r=async()=>{var v,F,f,y,E;const n=t.options,u=(f=(F=(v=t.fetchOptions)==null?void 0:v.meta)==null?void 0:F.fetchMore)==null?void 0:f.direction,h=((y=t.state.data)==null?void 0:y.pages)||[],c=((E=t.state.data)==null?void 0:E.pageParams)||[],g={pages:[],pageParams:[]};let b=!1;const d=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(t.signal.aborted?b=!0:t.signal.addEventListener("abort",()=>{b=!0}),t.signal)})},D=t.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`))),m=async(w,A,I)=>{if(b)return Promise.reject();if(A==null&&w.pages.length)return Promise.resolve(w);const _={queryKey:t.queryKey,pageParam:A,direction:I?"backward":"forward",meta:t.options.meta};d(_);const Q=await D(_),{maxPages:R}=t.options,z=I?ke:Le;return{pages:z(w.pages,Q,R),pageParams:z(w.pageParams,A,R)}};let l;if(u&&h.length){const w=u==="backward",A=w?Ye:ye,I={pages:h,pageParams:c},_=A(n,I);l=await m(I,_,w)}else{l=await m(g,c[0]??n.initialPageParam);const w=e??h.length;for(let A=1;A<w;A++){const I=ye(n,l);l=await m(l,I)}}return l};t.options.persister?t.fetchFn=()=>{var n,u;return(u=(n=t.options).persister)==null?void 0:u.call(n,r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=r}}}function ye(e,{pages:t,pageParams:s}){const r=t.length-1;return e.getNextPageParam(t[r],t,s[r],s)}function Ye(e,{pages:t,pageParams:s}){var r;return(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,s[0],s)}var P,Z,tt,vt,bt,et,wt,Ot,Fe,Es=(Fe=class{constructor(e={}){o(this,P,void 0);o(this,Z,void 0);o(this,tt,void 0);o(this,vt,void 0);o(this,bt,void 0);o(this,et,void 0);o(this,wt,void 0);o(this,Ot,void 0);a(this,P,e.queryCache||new ze),a(this,Z,e.mutationCache||new Je),a(this,tt,e.defaultOptions||{}),a(this,vt,new Map),a(this,bt,new Map),a(this,et,0)}mount(){Bt(this,et)._++,i(this,et)===1&&(a(this,wt,Nt.subscribe(()=>{Nt.isFocused()&&(this.resumePausedMutations(),i(this,P).onFocus())})),a(this,Ot,$t.subscribe(()=>{$t.isOnline()&&(this.resumePausedMutations(),i(this,P).onOnline())})))}unmount(){var e,t;Bt(this,et)._--,i(this,et)===0&&((e=i(this,wt))==null||e.call(this),a(this,wt,void 0),(t=i(this,Ot))==null||t.call(this),a(this,Ot,void 0))}isFetching(e){return i(this,P).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return i(this,Z).findAll({...e,status:"pending"}).length}getQueryData(e){var t;return(t=i(this,P).find({queryKey:e}))==null?void 0:t.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);return t!==void 0?Promise.resolve(t):this.fetchQuery(e)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:s})=>{const r=s.data;return[t,r]})}setQueryData(e,t,s){const r=i(this,P).find({queryKey:e}),n=r==null?void 0:r.state.data,u=xe(t,n);if(typeof u>"u")return;const h=this.defaultQueryOptions({queryKey:e});return i(this,P).build(this,h).setData(u,{...s,manual:!0})}setQueriesData(e,t,s){return M.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,s)]))}getQueryState(e){var t;return(t=i(this,P).find({queryKey:e}))==null?void 0:t.state}removeQueries(e){const t=i(this,P);M.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=i(this,P),r={type:"active",...e};return M.batch(()=>(s.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){const s={revert:!0,...t},r=M.batch(()=>i(this,P).findAll(e).map(n=>n.cancel(s)));return Promise.all(r).then(k).catch(k)}invalidateQueries(e={},t={}){return M.batch(()=>{if(i(this,P).findAll(e).forEach(r=>{r.invalidate()}),e.refetchType==="none")return Promise.resolve();const s={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){const s={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},r=M.batch(()=>i(this,P).findAll(e).filter(n=>!n.isDisabled()).map(n=>{let u=n.fetch(void 0,s);return s.throwOnError||(u=u.catch(k)),n.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(k)}fetchQuery(e){const t=this.defaultQueryOptions(e);typeof t.retry>"u"&&(t.retry=!1);const s=i(this,P).build(this,t);return s.isStaleByTime(t.staleTime)?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(k).catch(k)}fetchInfiniteQuery(e){return e.behavior=Xe(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(k).catch(k)}resumePausedMutations(){return i(this,Z).resumePausedMutations()}getQueryCache(){return i(this,P)}getMutationCache(){return i(this,Z)}getDefaultOptions(){return i(this,tt)}setDefaultOptions(e){a(this,tt,e)}setQueryDefaults(e,t){i(this,vt).set(Qt(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...i(this,vt).values()];let s={};return t.forEach(r=>{Mt(e,r.queryKey)&&(s={...s,...r.defaultOptions})}),s}setMutationDefaults(e,t){i(this,bt).set(Qt(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...i(this,bt).values()];let s={};return t.forEach(r=>{Mt(e,r.mutationKey)&&(s={...s,...r.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...i(this,tt).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=he(t.queryKey,t)),typeof t.refetchOnReconnect>"u"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.throwOnError>"u"&&(t.throwOnError=!!t.suspense),typeof t.networkMode>"u"&&t.persister&&(t.networkMode="offlineFirst"),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...i(this,tt).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){i(this,P).clear(),i(this,Z).clear()}},P=new WeakMap,Z=new WeakMap,tt=new WeakMap,vt=new WeakMap,bt=new WeakMap,et=new WeakMap,wt=new WeakMap,Ot=new WeakMap,Fe),T,O,Tt,U,ut,Ct,$,It,Rt,Pt,ot,ht,st,Ft,ct,Et,_t,ee,qt,se,xt,ie,jt,re,Lt,ne,kt,ae,Kt,ue,zt,Ue,Se,Ze=(Se=class extends Ht{constructor(t,s){super();o(this,ct);o(this,_t);o(this,qt);o(this,xt);o(this,jt);o(this,Lt);o(this,kt);o(this,Kt);o(this,zt);o(this,T,void 0);o(this,O,void 0);o(this,Tt,void 0);o(this,U,void 0);o(this,ut,void 0);o(this,Ct,void 0);o(this,$,void 0);o(this,It,void 0);o(this,Rt,void 0);o(this,Pt,void 0);o(this,ot,void 0);o(this,ht,void 0);o(this,st,void 0);o(this,Ft,new Set);this.options=s,a(this,T,t),a(this,$,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,O).addObserver(this),me(i(this,O),this.options)?p(this,ct,Et).call(this):this.updateResult(),p(this,jt,re).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return oe(i(this,O),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return oe(i(this,O),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,p(this,Lt,ne).call(this),p(this,kt,ae).call(this),i(this,O).removeObserver(this)}setOptions(t,s){const r=this.options,n=i(this,O);if(this.options=i(this,T).defaultQueryOptions(t),Yt(this.options,r)||i(this,T).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,O),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");p(this,Kt,ue).call(this);const u=this.hasListeners();u&&ge(i(this,O),n,this.options,r)&&p(this,ct,Et).call(this),this.updateResult(s),u&&(i(this,O)!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&p(this,_t,ee).call(this);const h=p(this,qt,se).call(this);u&&(i(this,O)!==n||this.options.enabled!==r.enabled||h!==i(this,st))&&p(this,xt,ie).call(this,h)}getOptimisticResult(t){const s=i(this,T).getQueryCache().build(i(this,T),t),r=this.createResult(s,t);return es(this,r)&&(a(this,U,r),a(this,Ct,this.options),a(this,ut,i(this,O).state)),r}getCurrentResult(){return i(this,U)}trackResult(t){const s={};return Object.keys(t).forEach(r=>{Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:()=>(i(this,Ft).add(r),t[r])})}),s}getCurrentQuery(){return i(this,O)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=i(this,T).defaultQueryOptions(t),r=i(this,T).getQueryCache().build(i(this,T),s);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,s))}fetch(t){return p(this,ct,Et).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,U)))}createResult(t,s){var _;const r=i(this,O),n=this.options,u=i(this,U),h=i(this,ut),c=i(this,Ct),b=t!==r?t.state:i(this,Tt),{state:d}=t;let{error:D,errorUpdatedAt:m,fetchStatus:l,status:v}=d,F=!1,f;if(s._optimisticResults){const Q=this.hasListeners(),R=!Q&&me(t,s),z=Q&&ge(t,r,s,n);(R||z)&&(l=Vt(t.options.networkMode)?"fetching":"paused",d.dataUpdatedAt||(v="pending")),s._optimisticResults==="isRestoring"&&(l="idle")}if(s.select&&typeof d.data<"u")if(u&&d.data===(h==null?void 0:h.data)&&s.select===i(this,It))f=i(this,Rt);else try{a(this,It,s.select),f=s.select(d.data),f=te(u==null?void 0:u.data,f,s),a(this,Rt,f),a(this,$,null)}catch(Q){a(this,$,Q)}else f=d.data;if(typeof s.placeholderData<"u"&&typeof f>"u"&&v==="pending"){let Q;if(u!=null&&u.isPlaceholderData&&s.placeholderData===(c==null?void 0:c.placeholderData))Q=u.data;else if(Q=typeof s.placeholderData=="function"?s.placeholderData((_=i(this,Pt))==null?void 0:_.state.data,i(this,Pt)):s.placeholderData,s.select&&typeof Q<"u")try{Q=s.select(Q),a(this,$,null)}catch(R){a(this,$,R)}typeof Q<"u"&&(v="success",f=te(u==null?void 0:u.data,Q,s),F=!0)}i(this,$)&&(D=i(this,$),f=i(this,Rt),m=Date.now(),v="error");const y=l==="fetching",E=v==="pending",w=v==="error",A=E&&y;return{status:v,fetchStatus:l,isPending:E,isSuccess:v==="success",isError:w,isInitialLoading:A,isLoading:A,data:f,dataUpdatedAt:d.dataUpdatedAt,error:D,errorUpdatedAt:m,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>b.dataUpdateCount||d.errorUpdateCount>b.errorUpdateCount,isFetching:y,isRefetching:y&&!E,isLoadingError:w&&d.dataUpdatedAt===0,isPaused:l==="paused",isPlaceholderData:F,isRefetchError:w&&d.dataUpdatedAt!==0,isStale:ce(t,s),refetch:this.refetch}}updateResult(t){const s=i(this,U),r=this.createResult(i(this,O),this.options);if(a(this,ut,i(this,O).state),a(this,Ct,this.options),i(this,ut).data!==void 0&&a(this,Pt,i(this,O)),Yt(r,s))return;a(this,U,r);const n={},u=()=>{if(!s)return!0;const{notifyOnChangeProps:h}=this.options,c=typeof h=="function"?h():h;if(c==="all"||!c&&!i(this,Ft).size)return!0;const g=new Set(c??i(this,Ft));return this.options.throwOnError&&g.add("error"),Object.keys(i(this,U)).some(b=>{const d=b;return i(this,U)[d]!==s[d]&&g.has(d)})};(t==null?void 0:t.listeners)!==!1&&u()&&(n.listeners=!0),p(this,zt,Ue).call(this,{...n,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&p(this,jt,re).call(this)}},T=new WeakMap,O=new WeakMap,Tt=new WeakMap,U=new WeakMap,ut=new WeakMap,Ct=new WeakMap,$=new WeakMap,It=new WeakMap,Rt=new WeakMap,Pt=new WeakMap,ot=new WeakMap,ht=new WeakMap,st=new WeakMap,Ft=new WeakMap,ct=new WeakSet,Et=function(t){p(this,Kt,ue).call(this);let s=i(this,O).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(k)),s},_t=new WeakSet,ee=function(){if(p(this,Lt,ne).call(this),St||i(this,U).isStale||!Xt(this.options.staleTime))return;const s=Ee(i(this,U).dataUpdatedAt,this.options.staleTime)+1;a(this,ot,setTimeout(()=>{i(this,U).isStale||this.updateResult()},s))},qt=new WeakSet,se=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,O)):this.options.refetchInterval)??!1},xt=new WeakSet,ie=function(t){p(this,kt,ae).call(this),a(this,st,t),!(St||this.options.enabled===!1||!Xt(i(this,st))||i(this,st)===0)&&a(this,ht,setInterval(()=>{(this.options.refetchIntervalInBackground||Nt.isFocused())&&p(this,ct,Et).call(this)},i(this,st)))},jt=new WeakSet,re=function(){p(this,_t,ee).call(this),p(this,xt,ie).call(this,p(this,qt,se).call(this))},Lt=new WeakSet,ne=function(){i(this,ot)&&(clearTimeout(i(this,ot)),a(this,ot,void 0))},kt=new WeakSet,ae=function(){i(this,ht)&&(clearInterval(i(this,ht)),a(this,ht,void 0))},Kt=new WeakSet,ue=function(){const t=i(this,T).getQueryCache().build(i(this,T),this.options);if(t===i(this,O))return;const s=i(this,O);a(this,O,t),a(this,Tt,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},zt=new WeakSet,Ue=function(t){M.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(i(this,U))}),i(this,T).getQueryCache().notify({query:i(this,O),type:"observerResultsUpdated"})})},Se);function ts(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function me(e,t){return ts(e,t)||e.state.dataUpdatedAt>0&&oe(e,t,t.refetchOnMount)}function oe(e,t,s){if(t.enabled!==!1){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&ce(e,t)}return!1}function ge(e,t,s,r){return s.enabled!==!1&&(e!==t||r.enabled===!1)&&(!s.suspense||e.state.status!=="error")&&ce(e,s)}function ce(e,t){return e.isStaleByTime(t.staleTime)}function es(e,t){return!Yt(e.getCurrentResult(),t)}var Te=K.createContext(void 0),ss=e=>{const t=K.useContext(Te);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Qs=({client:e,children:t})=>(K.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),qe.jsx(Te.Provider,{value:e,children:t})),Ie=K.createContext(!1),is=()=>K.useContext(Ie);Ie.Provider;function rs(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var ns=K.createContext(rs()),as=()=>K.useContext(ns);function us(e,t){return typeof e=="function"?e(...t):!!e}var os=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},hs=e=>{K.useEffect(()=>{e.clearReset()},[e])},cs=({result:e,errorResetBoundary:t,throwOnError:s,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&us(s,[e.error,r]),ls=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},ds=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,fs=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function ps(e,t,s){const r=ss(s),n=is(),u=as(),h=r.defaultQueryOptions(e);h._optimisticResults=n?"isRestoring":"optimistic",ls(h),os(h,u),hs(u);const[c]=K.useState(()=>new t(r,h)),g=c.getOptimisticResult(h);if(K.useSyncExternalStore(K.useCallback(b=>{const d=n?()=>{}:c.subscribe(M.batchCalls(b));return c.updateResult(),d},[c,n]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),K.useEffect(()=>{c.setOptions(h,{listeners:!1})},[h,c]),ds(h,g))throw fs(h,c,u);if(cs({result:g,errorResetBoundary:u,throwOnError:h.throwOnError,query:r.getQueryCache().get(h.queryHash)}))throw g.error;return h.notifyOnChangeProps?g:c.trackResult(g)}function Ms(e,t){return ps(e,Ze,t)}const _e=C.object({type_of:C.string(),id:C.number(),title:C.string(),description:C.string(),readable_publish_date:C.string(),slug:C.string(),path:C.string(),url:C.string(),reading_time_minutes:C.number(),comments_count:C.number(),public_reactions_count:C.number(),positive_reactions_count:C.number(),collection_id:C.number().nullable().optional(),published_timestamp:C.string(),cover_image:C.string(),social_image:C.string(),tag_list:C.union([C.array(C.string()),C.string()])}),ys=C.array(_e);_e.extend({body_html:C.string(),body_markdown:C.string()});const ms="timwjames",gs="https://dev.to/api/articles",vs=e=>typeof e=="string"?JSON.parse(e):e,As=(e,t)=>async()=>{try{const s=`${gs}?${new URLSearchParams({username:ms,per_page:String(e),page:String(t??1)})}`,r=await vs((await fetch(s)).json()),n=ys.safeParse(r);if(!n.success){console.error(`Failed to validate response from [${s}]`,{cause:n.error});return}return n.data}catch(s){console.error("Failed to parse article meta",{cause:s});return}},bs=["Popularity","Latest","Quick Reads"],Ds=bs.map(e=>({value:e,label:e})),ws=(e,t)=>t.public_reactions_count-e.public_reactions_count,Os=(e,t)=>e.reading_time_minutes-t.reading_time_minutes,Cs=(e,t)=>new Date(t.published_timestamp).getTime()-new Date(e.published_timestamp).getTime(),Us=e=>{switch(e){case"Latest":return Cs;case"Quick Reads":return Os;case"Popularity":return ws;default:return()=>0}};export{Es as Q,ws as a,Us as b,Qs as c,As as d,Cs as e,Ds as s,Ms as u};