import{L as qc,M as Li,w as h,N as me,i as ae,O as rn,X as Yc,x as Rd,P as $c,S as Zc,Q as Es,U as zi,u as Na,V as Vt,W as fs,Y as $t,Z as mi,$ as Fo,a0 as Cd,a1 as Kc,a2 as yr,a3 as br,a4 as Oo,a5 as Gi,a6 as ko,a7 as Jc,a8 as Nd,a9 as Pd,aa as pr,ab as Qc,ac as Bo,ad as zo,ae as eu,af as tu,ag as Ld,ah as Cr,ai as Dd,aj as nu,ak as Ud,al as Id,am as Fd}from"./react-DnbZbiEq.js";import{q as Od,B as kd,s as Go,t as iu,u as ru,v as Bd}from"./railgun-engine-CcqnAZft.js";import{a1 as zd,a2 as Gd,a3 as Yt,a4 as Pa,a5 as Vi,_ as Vd,a6 as Kn,a7 as Ts,a8 as su,a9 as au,aa as ou,ab as lu,ac as Hd,ad as jd,ae as yl,af as Wd,ag as Xd,ah as qd,ai as Yd}from"./web3-BLQ0acpL.js";import{d as gt}from"./railgun-shared-CJtLqcIK.js";import{d as Ft}from"./railgun-wallet-CEaUhN5a.js";import{a as $d,k as Vo,c as Zd,M as Kd,t as cu,C as Jd,B as uu}from"./ethers-BgwcOcCU.js";import"./railgun-wasm-CL3CrBe4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Qd(){const{scrollY:n}=qc(),e=Li(n,[0,100],[.3,.9]),t=Li(n,[0,100],[8,16]),i=Li(n,[0,50],[1,.98]),r=Li(n,[0,100],[.1,.3]);return h.jsx(me.header,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:30,delay:.1},className:"fixed top-0 left-0 right-0 z-40 safe-top",children:h.jsx("div",{className:"mx-auto px-4 sm:px-6",children:h.jsxs(me.div,{style:{scale:i,backgroundColor:`rgba(13, 13, 13, ${e.get()})`,backdropFilter:`blur(${t.get()}px)`,borderColor:`rgba(74, 222, 128, ${r.get()})`},className:"flex items-center justify-between h-16 sm:h-20 mt-3 sm:mt-4 px-4 sm:px-6 max-w-2xl mx-auto rounded-2xl border",children:[h.jsx(me.div,{className:"flex items-center gap-2",whileHover:{scale:1.02},whileTap:{scale:.98},children:h.jsx(me.img,{src:"/assets/green.png",alt:"Liquyn",className:"h-7 sm:h-8 w-auto",initial:{opacity:0,rotate:-10},animate:{opacity:1,rotate:0},transition:{delay:.3,type:"spring",stiffness:200}})}),h.jsx(zd.Custom,{children:({account:s,chain:a,openAccountModal:o,openChainModal:l,openConnectModal:c,mounted:f})=>{const d=f,m=d&&s&&a;return h.jsx("div",{...!d&&{"aria-hidden":!0,style:{opacity:0,pointerEvents:"none",userSelect:"none"}},children:m?a.unsupported?h.jsx(me.button,{onClick:l,whileHover:{scale:1.02},whileTap:{scale:.98},animate:{boxShadow:["0 0 0 rgba(239, 68, 68, 0)","0 0 15px rgba(239, 68, 68, 0.3)","0 0 0 rgba(239, 68, 68, 0)"]},transition:{duration:2,repeat:1/0},className:`px-4 py-2 bg-error/10 border border-error/30 text-error 
                                     font-medium rounded-xl text-sm`,children:"Wrong network"}):h.jsxs(me.div,{className:"flex items-center gap-2",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},children:[h.jsxs(me.button,{onClick:l,whileHover:{scale:1.05},whileTap:{scale:.95},className:`hidden sm:flex items-center gap-2 px-3 py-2 btn-ghost text-sm rounded-lg
                                     hover:bg-white/5`,children:[a.hasIcon&&a.iconUrl&&h.jsx(me.img,{alt:a.name??"Chain",src:a.iconUrl,className:"w-4 h-4 rounded-full",layoutId:"chain-icon"}),h.jsx("span",{className:"text-white/70",children:a.name})]}),h.jsx(me.button,{onClick:o,whileHover:{scale:1.02,backgroundColor:"rgba(255, 255, 255, 0.1)"},whileTap:{scale:.98},className:"px-3 py-2 sm:px-4 btn-ghost text-sm rounded-lg",children:h.jsx(me.span,{className:"text-white font-medium",initial:{opacity:0},animate:{opacity:1},children:s.displayName})})]}):h.jsx(me.button,{onClick:c,whileHover:{scale:1.05,boxShadow:"0 0 20px rgba(74, 222, 128, 0.3)"},whileTap:{scale:.95},initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.4,type:"spring",stiffness:300},className:`px-4 py-2 sm:px-5 sm:py-2.5 bg-accent text-dark-900 font-semibold 
                                     rounded-xl text-sm sm:text-base`,children:"Connect"})})}})]})})})}function eh({children:n}){return h.jsxs("div",{className:"min-h-screen relative",children:[h.jsxs("div",{className:"fixed inset-0 pointer-events-none z-[1]",children:[h.jsx("div",{className:"absolute inset-x-0 top-0 h-[600px]",style:{background:`
              radial-gradient(ellipse 100% 100% at 50% -30%, rgba(74, 222, 128, 0.15) 0%, rgba(34, 197, 94, 0.05) 40%, transparent 70%),
              radial-gradient(ellipse 80% 60% at 30% 20%, rgba(74, 222, 128, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 70% 20%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)
            `}}),h.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]",style:{background:"radial-gradient(ellipse at center, rgba(74, 222, 128, 0.03) 0%, transparent 60%)"}}),h.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[300px]",style:{background:"linear-gradient(to top, rgba(3, 7, 18, 0.8) 0%, transparent 100%)"}}),h.jsx("div",{className:"absolute inset-0 opacity-[0.02]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}})]}),h.jsx(Qd,{}),h.jsx("main",{className:"relative z-10 pt-24 sm:pt-28 pb-8 safe-bottom",children:n})]})}const th=(n,e)=>{const t=new Array(n.length+e.length);for(let i=0;i<n.length;i++)t[i]=n[i];for(let i=0;i<e.length;i++)t[n.length+i]=e[i];return t},nh=(n,e)=>({classGroupId:n,validator:e}),du=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),ps="-",bl=[],ih="arbitrary..",rh=n=>{const e=ah(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return sh(a);const o=a.split(ps),l=o[0]===""&&o.length>1?1:0;return hu(o,l,e)},getConflictingClassGroupIds:(a,o)=>{if(o){const l=i[a],c=t[a];return l?c?th(c,l):l:c||bl}return t[a]||bl}}},hu=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const r=n[e],s=t.nextPart.get(r);if(s){const c=hu(n,e+1,s);if(c)return c}const a=t.validators;if(a===null)return;const o=e===0?n.join(ps):n.slice(e).join(ps),l=a.length;for(let c=0;c<l;c++){const f=a[c];if(f.validator(o))return f.classGroupId}},sh=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),i=e.slice(0,t);return i?ih+i:void 0})(),ah=n=>{const{theme:e,classGroups:t}=n;return oh(t,e)},oh=(n,e)=>{const t=du();for(const i in n){const r=n[i];Ho(r,t,i,e)}return t},Ho=(n,e,t,i)=>{const r=n.length;for(let s=0;s<r;s++){const a=n[s];lh(a,e,t,i)}},lh=(n,e,t,i)=>{if(typeof n=="string"){ch(n,e,t);return}if(typeof n=="function"){uh(n,e,t,i);return}dh(n,e,t,i)},ch=(n,e,t)=>{const i=n===""?e:fu(e,n);i.classGroupId=t},uh=(n,e,t,i)=>{if(hh(n)){Ho(n(i),e,t,i);return}e.validators===null&&(e.validators=[]),e.validators.push(nh(t,n))},dh=(n,e,t,i)=>{const r=Object.entries(n),s=r.length;for(let a=0;a<s;a++){const[o,l]=r[a];Ho(l,fu(e,o),t,i)}},fu=(n,e)=>{let t=n;const i=e.split(ps),r=i.length;for(let s=0;s<r;s++){const a=i[s];let o=t.nextPart.get(a);o||(o=du(),t.nextPart.set(a,o)),t=o}return t},hh=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,fh=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),i=Object.create(null);const r=(s,a)=>{t[s]=a,e++,e>n&&(e=0,i=t,t=Object.create(null))};return{get(s){let a=t[s];if(a!==void 0)return a;if((a=i[s])!==void 0)return r(s,a),a},set(s,a){s in t?t[s]=a:r(s,a)}}},La="!",Sl=":",ph=[],Ml=(n,e,t,i,r)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:i,isExternal:r}),mh=n=>{const{prefix:e,experimentalParseClassName:t}=n;let i=r=>{const s=[];let a=0,o=0,l=0,c;const f=r.length;for(let v=0;v<f;v++){const g=r[v];if(a===0&&o===0){if(g===Sl){s.push(r.slice(l,v)),l=v+1;continue}if(g==="/"){c=v;continue}}g==="["?a++:g==="]"?a--:g==="("?o++:g===")"&&o--}const d=s.length===0?r:r.slice(l);let m=d,u=!1;d.endsWith(La)?(m=d.slice(0,-1),u=!0):d.startsWith(La)&&(m=d.slice(1),u=!0);const x=c&&c>l?c-l:void 0;return Ml(s,u,m,x)};if(e){const r=e+Sl,s=i;i=a=>a.startsWith(r)?s(a.slice(r.length)):Ml(ph,!1,a,void 0,!0)}if(t){const r=i;i=s=>t({className:s,parseClassName:r})}return i},gh=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,i)=>{e.set(t,1e6+i)}),t=>{const i=[];let r=[];for(let s=0;s<t.length;s++){const a=t[s],o=a[0]==="[",l=e.has(a);o||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(a)):r.push(a)}return r.length>0&&(r.sort(),i.push(...r)),i}},xh=n=>({cache:fh(n.cacheSize),parseClassName:mh(n),sortModifiers:gh(n),...rh(n)}),vh=/\s+/,_h=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,a=[],o=n.trim().split(vh);let l="";for(let c=o.length-1;c>=0;c-=1){const f=o[c],{isExternal:d,modifiers:m,hasImportantModifier:u,baseClassName:x,maybePostfixModifierPosition:v}=t(f);if(d){l=f+(l.length>0?" "+l:l);continue}let g=!!v,p=i(g?x.substring(0,v):x);if(!p){if(!g){l=f+(l.length>0?" "+l:l);continue}if(p=i(x),!p){l=f+(l.length>0?" "+l:l);continue}g=!1}const y=m.length===0?"":m.length===1?m[0]:s(m).join(":"),M=u?y+La:y,S=M+p;if(a.indexOf(S)>-1)continue;a.push(S);const R=r(p,g);for(let T=0;T<R.length;++T){const C=R[T];a.push(M+C)}l=f+(l.length>0?" "+l:l)}return l},yh=(...n)=>{let e=0,t,i,r="";for(;e<n.length;)(t=n[e++])&&(i=pu(t))&&(r&&(r+=" "),r+=i);return r},pu=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=pu(n[i]))&&(t&&(t+=" "),t+=e);return t},bh=(n,...e)=>{let t,i,r,s;const a=l=>{const c=e.reduce((f,d)=>d(f),n());return t=xh(c),i=t.cache.get,r=t.cache.set,s=o,o(l)},o=l=>{const c=i(l);if(c)return c;const f=_h(l,t);return r(l,f),f};return s=a,(...l)=>s(yh(...l))},Sh=[],wt=n=>{const e=t=>t[n]||Sh;return e.isThemeGetter=!0,e},mu=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,gu=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Mh=/^\d+\/\d+$/,wh=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Eh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Th=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ah=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Rh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,xi=n=>Mh.test(n),je=n=>!!n&&!Number.isNaN(Number(n)),kn=n=>!!n&&Number.isInteger(Number(n)),Fs=n=>n.endsWith("%")&&je(n.slice(0,-1)),En=n=>wh.test(n),Ch=()=>!0,Nh=n=>Eh.test(n)&&!Th.test(n),xu=()=>!1,Ph=n=>Ah.test(n),Lh=n=>Rh.test(n),Dh=n=>!Me(n)&&!we(n),Uh=n=>$i(n,yu,xu),Me=n=>mu.test(n),ei=n=>$i(n,bu,Nh),Os=n=>$i(n,Bh,je),wl=n=>$i(n,vu,xu),Ih=n=>$i(n,_u,Lh),Nr=n=>$i(n,Su,Ph),we=n=>gu.test(n),tr=n=>Zi(n,bu),Fh=n=>Zi(n,zh),El=n=>Zi(n,vu),Oh=n=>Zi(n,yu),kh=n=>Zi(n,_u),Pr=n=>Zi(n,Su,!0),$i=(n,e,t)=>{const i=mu.exec(n);return i?i[1]?e(i[1]):t(i[2]):!1},Zi=(n,e,t=!1)=>{const i=gu.exec(n);return i?i[1]?e(i[1]):t:!1},vu=n=>n==="position"||n==="percentage",_u=n=>n==="image"||n==="url",yu=n=>n==="length"||n==="size"||n==="bg-size",bu=n=>n==="length",Bh=n=>n==="number",zh=n=>n==="family-name",Su=n=>n==="shadow",Gh=()=>{const n=wt("color"),e=wt("font"),t=wt("text"),i=wt("font-weight"),r=wt("tracking"),s=wt("leading"),a=wt("breakpoint"),o=wt("container"),l=wt("spacing"),c=wt("radius"),f=wt("shadow"),d=wt("inset-shadow"),m=wt("text-shadow"),u=wt("drop-shadow"),x=wt("blur"),v=wt("perspective"),g=wt("aspect"),p=wt("ease"),y=wt("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],R=()=>[...S(),we,Me],T=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto","contain","none"],N=()=>[we,Me,l],b=()=>[xi,"full","auto",...N()],E=()=>[kn,"none","subgrid",we,Me],L=()=>["auto",{span:["full",kn,we,Me]},kn,we,Me],V=()=>[kn,"auto",we,Me],G=()=>["auto","min","max","fr",we,Me],q=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Y=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...N()],I=()=>[xi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],D=()=>[n,we,Me],ne=()=>[...S(),El,wl,{position:[we,Me]}],re=()=>["no-repeat",{repeat:["","x","y","space","round"]}],oe=()=>["auto","cover","contain",Oh,Uh,{size:[we,Me]}],ce=()=>[Fs,tr,ei],Q=()=>["","none","full",c,we,Me],Pe=()=>["",je,tr,ei],ze=()=>["solid","dashed","dotted","double"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>[je,Fs,El,wl],ve=()=>["","none",x,we,Me],Ie=()=>["none",je,we,Me],_e=()=>["none",je,we,Me],We=()=>[je,we,Me],pt=()=>[xi,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[En],breakpoint:[En],color:[Ch],container:[En],"drop-shadow":[En],ease:["in","out","in-out"],font:[Dh],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[En],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[En],shadow:[En],spacing:["px",je],text:[En],"text-shadow":[En],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",xi,Me,we,g]}],container:["container"],columns:[{columns:[je,Me,we,o]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:R()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{start:b()}],end:[{end:b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:["visible","invisible","collapse"],z:[{z:[kn,"auto",we,Me]}],basis:[{basis:[xi,"full","auto",o,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[je,xi,"auto","initial","none",Me]}],grow:[{grow:["",je,we,Me]}],shrink:[{shrink:["",je,we,Me]}],order:[{order:[kn,"first","last","none",we,Me]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":G()}],"auto-rows":[{"auto-rows":G()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...q(),"normal"]}],"justify-items":[{"justify-items":[...Y(),"normal"]}],"justify-self":[{"justify-self":["auto",...Y()]}],"align-content":[{content:["normal",...q()]}],"align-items":[{items:[...Y(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Y(),{baseline:["","last"]}]}],"place-content":[{"place-content":q()}],"place-items":[{"place-items":[...Y(),"baseline"]}],"place-self":[{"place-self":["auto",...Y()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:I()}],w:[{w:[o,"screen",...I()]}],"min-w":[{"min-w":[o,"screen","none",...I()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...I()]}],h:[{h:["screen","lh",...I()]}],"min-h":[{"min-h":["screen","lh","none",...I()]}],"max-h":[{"max-h":["screen","lh",...I()]}],"font-size":[{text:["base",t,tr,ei]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,we,Os]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Fs,Me]}],"font-family":[{font:[Fh,Me,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,we,Me]}],"line-clamp":[{"line-clamp":[je,"none",we,Os]}],leading:[{leading:[s,...N()]}],"list-image":[{"list-image":["none",we,Me]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",we,Me]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ze(),"wavy"]}],"text-decoration-thickness":[{decoration:[je,"from-font","auto",we,ei]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[je,"auto",we,Me]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",we,Me]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",we,Me]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ne()}],"bg-repeat":[{bg:re()}],"bg-size":[{bg:oe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},kn,we,Me],radial:["",we,Me],conic:[kn,we,Me]},kh,Ih]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:ce()}],"gradient-via-pos":[{via:ce()}],"gradient-to-pos":[{to:ce()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:Q()}],"rounded-s":[{"rounded-s":Q()}],"rounded-e":[{"rounded-e":Q()}],"rounded-t":[{"rounded-t":Q()}],"rounded-r":[{"rounded-r":Q()}],"rounded-b":[{"rounded-b":Q()}],"rounded-l":[{"rounded-l":Q()}],"rounded-ss":[{"rounded-ss":Q()}],"rounded-se":[{"rounded-se":Q()}],"rounded-ee":[{"rounded-ee":Q()}],"rounded-es":[{"rounded-es":Q()}],"rounded-tl":[{"rounded-tl":Q()}],"rounded-tr":[{"rounded-tr":Q()}],"rounded-br":[{"rounded-br":Q()}],"rounded-bl":[{"rounded-bl":Q()}],"border-w":[{border:Pe()}],"border-w-x":[{"border-x":Pe()}],"border-w-y":[{"border-y":Pe()}],"border-w-s":[{"border-s":Pe()}],"border-w-e":[{"border-e":Pe()}],"border-w-t":[{"border-t":Pe()}],"border-w-r":[{"border-r":Pe()}],"border-w-b":[{"border-b":Pe()}],"border-w-l":[{"border-l":Pe()}],"divide-x":[{"divide-x":Pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ze(),"hidden","none"]}],"divide-style":[{divide:[...ze(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...ze(),"none","hidden"]}],"outline-offset":[{"outline-offset":[je,we,Me]}],"outline-w":[{outline:["",je,tr,ei]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",f,Pr,Nr]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",d,Pr,Nr]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:Pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[je,ei]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":Pe()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",m,Pr,Nr]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[je,we,Me]}],"mix-blend":[{"mix-blend":[...W(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":W()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[je]}],"mask-image-linear-from-pos":[{"mask-linear-from":$()}],"mask-image-linear-to-pos":[{"mask-linear-to":$()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":$()}],"mask-image-t-to-pos":[{"mask-t-to":$()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":$()}],"mask-image-r-to-pos":[{"mask-r-to":$()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":$()}],"mask-image-b-to-pos":[{"mask-b-to":$()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":$()}],"mask-image-l-to-pos":[{"mask-l-to":$()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":$()}],"mask-image-x-to-pos":[{"mask-x-to":$()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":$()}],"mask-image-y-to-pos":[{"mask-y-to":$()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[we,Me]}],"mask-image-radial-from-pos":[{"mask-radial-from":$()}],"mask-image-radial-to-pos":[{"mask-radial-to":$()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":S()}],"mask-image-conic-pos":[{"mask-conic":[je]}],"mask-image-conic-from-pos":[{"mask-conic-from":$()}],"mask-image-conic-to-pos":[{"mask-conic-to":$()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ne()}],"mask-repeat":[{mask:re()}],"mask-size":[{mask:oe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",we,Me]}],filter:[{filter:["","none",we,Me]}],blur:[{blur:ve()}],brightness:[{brightness:[je,we,Me]}],contrast:[{contrast:[je,we,Me]}],"drop-shadow":[{"drop-shadow":["","none",u,Pr,Nr]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",je,we,Me]}],"hue-rotate":[{"hue-rotate":[je,we,Me]}],invert:[{invert:["",je,we,Me]}],saturate:[{saturate:[je,we,Me]}],sepia:[{sepia:["",je,we,Me]}],"backdrop-filter":[{"backdrop-filter":["","none",we,Me]}],"backdrop-blur":[{"backdrop-blur":ve()}],"backdrop-brightness":[{"backdrop-brightness":[je,we,Me]}],"backdrop-contrast":[{"backdrop-contrast":[je,we,Me]}],"backdrop-grayscale":[{"backdrop-grayscale":["",je,we,Me]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[je,we,Me]}],"backdrop-invert":[{"backdrop-invert":["",je,we,Me]}],"backdrop-opacity":[{"backdrop-opacity":[je,we,Me]}],"backdrop-saturate":[{"backdrop-saturate":[je,we,Me]}],"backdrop-sepia":[{"backdrop-sepia":["",je,we,Me]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",we,Me]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[je,"initial",we,Me]}],ease:[{ease:["linear","initial",p,we,Me]}],delay:[{delay:[je,we,Me]}],animate:[{animate:["none",y,we,Me]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,we,Me]}],"perspective-origin":[{"perspective-origin":R()}],rotate:[{rotate:Ie()}],"rotate-x":[{"rotate-x":Ie()}],"rotate-y":[{"rotate-y":Ie()}],"rotate-z":[{"rotate-z":Ie()}],scale:[{scale:_e()}],"scale-x":[{"scale-x":_e()}],"scale-y":[{"scale-y":_e()}],"scale-z":[{"scale-z":_e()}],"scale-3d":["scale-3d"],skew:[{skew:We()}],"skew-x":[{"skew-x":We()}],"skew-y":[{"skew-y":We()}],transform:[{transform:[we,Me,"","none","gpu","cpu"]}],"transform-origin":[{origin:R()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:pt()}],"translate-x":[{"translate-x":pt()}],"translate-y":[{"translate-y":pt()}],"translate-z":[{"translate-z":pt()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",we,Me]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",we,Me]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[je,tr,ei,Os]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Vh=bh(Gh);function Ne(...n){return Vh(Gd(n))}function Xn(n,e=4){const t=typeof n=="string"?parseFloat(n):n;return isNaN(t)?"0":t<1e-4&&t>0?"<0.0001":t>=1e6?`${(t/1e6).toFixed(2)}M`:t>=1e3?`${(t/1e3).toFixed(2)}K`:t.toFixed(e)}function Tl(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(n)}function Fi(n){return n<60?`${n}s`:n<3600?`${Math.floor(n/60)}m`:`${Math.floor(n/3600)}h ${Math.floor(n%3600/60)}m`}const Pn="0x0000000000000000000000000000000000000000",Hh={1:[{symbol:"ETH",name:"Ethereum",decimals:18,address:Pn,chainId:1,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",chainId:1,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},{symbol:"USDT",name:"Tether USD",decimals:6,address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",chainId:1,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"}],42161:[{symbol:"ETH",name:"Ethereum",decimals:18,address:Pn,chainId:42161,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",chainId:42161,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},{symbol:"ARB",name:"Arbitrum",decimals:18,address:"0x912CE59144191C1204E64559FE8253a0e49E6548",chainId:42161,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png"}],10:[{symbol:"ETH",name:"Ethereum",decimals:18,address:Pn,chainId:10,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",chainId:10,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},{symbol:"OP",name:"Optimism",decimals:18,address:"0x4200000000000000000000000000000000000042",chainId:10,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png"}],137:[{symbol:"MATIC",name:"Polygon",decimals:18,address:Pn,chainId:137,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",chainId:137,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}],8453:[{symbol:"ETH",name:"Ethereum",decimals:18,address:Pn,chainId:8453,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",chainId:8453,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}],56:[{symbol:"BNB",name:"BNB",decimals:18,address:Pn,chainId:56,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:18,address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",chainId:56,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}],43114:[{symbol:"AVAX",name:"Avalanche",decimals:18,address:Pn,chainId:43114,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",chainId:43114,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}],146:[{symbol:"S",name:"Sonic",decimals:18,address:Pn,chainId:146,logo:"https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png"},{symbol:"USDC",name:"USD Coin",decimals:6,address:"0x29219dd400f2Bf60E5a23d13Be72B486D4038894",chainId:146,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},{symbol:"WETH",name:"Wrapped Ether",decimals:18,address:"0x50c42dEAcD8Fc9773493ED674b675bE577f2634b",chainId:146,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"}]},Al=[{symbol:"USDC",name:"USD Coin",decimals:6,address:"0xb88339CB7199b77E23DB6E890353E22632Ba630f",chainId:Yt,logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},{symbol:"HYPE",name:"Hyperliquid",decimals:18,address:Pn,chainId:Yt,logo:"/assets/green.png"}],jh=n=>Hh[n]||[];function Hi({isOpen:n,onClose:e,title:t,children:i,className:r}){ae.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[n]);const s=h.jsx(rn,{children:n&&h.jsxs(h.Fragment,{children:[h.jsx(me.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:e,className:"fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"}),h.jsxs(me.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{type:"spring",damping:25,stiffness:300},className:Ne("fixed z-[101]","inset-0 m-auto","h-fit","w-[calc(100%-32px)] max-w-md","bg-dark-800 border border-dark-400/30","rounded-2xl","max-h-[80vh]","overflow-hidden","shadow-xl shadow-black/20",r),children:[t&&h.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-dark-400/30",children:[h.jsx("h2",{className:"text-lg font-semibold text-white",children:t}),h.jsx("button",{onClick:e,className:"p-2 -mr-2 rounded-lg hover:bg-dark-600 transition-colors",children:h.jsx(Yc,{className:"w-5 h-5 text-white/60"})})]}),h.jsx("div",{className:"p-5 overflow-y-auto max-h-[calc(80vh-80px)] no-scrollbar",children:i})]})]})});return typeof document<"u"?Rd.createPortal(s,document.body):s}function Wh({selectedChainId:n,selectedChainKey:e,onSelect:t,label:i,disabled:r,chains:s}){const[a,o]=ae.useState(!1),[l,c]=ae.useState(""),f=s||Pa,d=e?f.find(u=>u.key===e):f.find(u=>u.id===n&&!u.isTestnet),m=f.filter(u=>u.name.toLowerCase().includes(l.toLowerCase())||u.shortName.toLowerCase().includes(l.toLowerCase()));return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"space-y-2",children:[i&&h.jsx("label",{className:"text-sm text-white/50 font-medium",children:i}),h.jsxs("button",{onClick:()=>!r&&o(!0),disabled:r,className:Ne("w-full flex items-center justify-between gap-2 px-4 py-3.5","bg-dark-700 border border-dark-400/30 rounded-xl","hover:border-accent/30 active:scale-[0.99] transition-all duration-200","disabled:opacity-50 disabled:cursor-not-allowed"),children:[h.jsx("div",{className:"flex items-center gap-3 min-w-0",children:d?h.jsxs(h.Fragment,{children:[h.jsx("img",{src:d.logo,alt:d.name,className:"w-7 h-7 rounded-full flex-shrink-0",onError:u=>{u.target.src="https://via.placeholder.com/28"}}),h.jsx("span",{className:"font-medium text-white truncate",children:d.name})]}):h.jsx("span",{className:"text-white/40",children:"Select chain"})}),h.jsx($c,{className:"w-4 h-4 text-white/40 flex-shrink-0"})]})]}),h.jsxs(Hi,{isOpen:a,onClose:()=>{o(!1),c("")},title:"Select Chain",children:[h.jsxs("div",{className:"relative mb-4",children:[h.jsx(Zc,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"}),h.jsx("input",{type:"text",placeholder:"Search chains...",value:l,onChange:u=>c(u.target.value),className:"input-field pl-10",autoFocus:!1})]}),h.jsx("div",{className:"space-y-1",children:m.map(u=>{const x=e?u.key===e:u.id===n&&!u.isTestnet;return h.jsxs(me.button,{whileTap:{scale:.98},onClick:()=>{t(u.id,u.key),o(!1),c("")},className:Ne("w-full touch-item",x?"bg-accent/10 border border-accent/30":"hover:bg-dark-600/50"),children:[h.jsx("img",{src:u.logo,alt:u.name,className:"w-8 h-8 rounded-full",onError:v=>{v.target.src="https://via.placeholder.com/32"}}),h.jsxs("div",{className:"flex-1 text-left",children:[h.jsx("span",{className:"font-medium text-white",children:u.name}),u.isTestnet&&h.jsx("span",{className:"ml-2 text-xs px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded",children:"Testnet"})]}),x&&h.jsx(Es,{className:"w-5 h-5 text-accent"})]},u.key)})})]})]})}function Xh({chainId:n,selectedToken:e,onSelect:t,label:i,disabled:r}){const[s,a]=ae.useState(!1),[o,l]=ae.useState(""),f=(n?jh(n):[]).filter(d=>d.symbol.toLowerCase().includes(o.toLowerCase())||d.name.toLowerCase().includes(o.toLowerCase()));return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"space-y-2",children:[i&&h.jsx("label",{className:"text-sm text-white/50 font-medium",children:i}),h.jsxs("button",{onClick:()=>!r&&n&&a(!0),disabled:r||!n,className:Ne("w-full flex items-center justify-between gap-2 px-4 py-3.5","bg-dark-700 border border-dark-400/30 rounded-xl","hover:border-accent/30 active:scale-[0.99] transition-all duration-200","disabled:opacity-50 disabled:cursor-not-allowed"),children:[h.jsx("div",{className:"flex items-center gap-3 min-w-0",children:e?h.jsxs(h.Fragment,{children:[h.jsx("img",{src:e.logo,alt:e.symbol,className:"w-7 h-7 rounded-full flex-shrink-0",onError:d=>{d.target.src="https://via.placeholder.com/28"}}),h.jsx("div",{className:"text-left min-w-0",children:h.jsx("div",{className:"font-medium text-white truncate",children:e.symbol})})]}):h.jsx("span",{className:"text-white/40",children:n?"Select token":"Select chain first"})}),h.jsx($c,{className:"w-4 h-4 text-white/40 flex-shrink-0"})]})]}),h.jsxs(Hi,{isOpen:s,onClose:()=>{a(!1),l("")},title:"Select Token",children:[h.jsxs("div",{className:"relative mb-4",children:[h.jsx(Zc,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"}),h.jsx("input",{type:"text",placeholder:"Search tokens...",value:o,onChange:d=>l(d.target.value),className:"input-field pl-10",autoFocus:!1})]}),h.jsxs("div",{className:"space-y-1",children:[f.map(d=>{const m=e?.address===d.address;return h.jsxs(me.button,{whileTap:{scale:.98},onClick:()=>{t(d),a(!1),l("")},className:Ne("w-full touch-item",m?"bg-accent/10 border border-accent/30":"hover:bg-dark-600/50"),children:[h.jsx("img",{src:d.logo,alt:d.symbol,className:"w-8 h-8 rounded-full",onError:u=>{u.target.src="https://via.placeholder.com/32"}}),h.jsxs("div",{className:"flex-1 text-left",children:[h.jsx("div",{className:"font-medium text-white",children:d.symbol}),h.jsx("div",{className:"text-xs text-white/40",children:d.name})]}),m&&h.jsx(Es,{className:"w-5 h-5 text-accent"})]},d.address)}),f.length===0&&h.jsx("div",{className:"text-center py-8 text-white/40",children:"No tokens found"})]})]})]})}function qh({steps:n,currentStep:e,className:t}){return h.jsx("div",{className:Ne("space-y-2",t),children:n.map((i,r)=>{const s=e!==void 0&&r===e,a=e!==void 0&&r<e,o=Vi[i.fromChain],l=Vi[i.toChain];return h.jsxs(me.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:r*.1},className:Ne("flex items-center gap-3 p-3 rounded-xl transition-all",s&&"bg-accent/10 border border-accent/30",a&&"bg-accent/5 border border-accent/20",!s&&!a&&"bg-dark-700/50"),children:[h.jsx("div",{className:Ne("flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold flex-shrink-0",s&&"bg-accent text-dark-900",a&&"bg-accent/50 text-white",!s&&!a&&"bg-dark-500 text-white/50"),children:a?"✓":r+1}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("span",{className:Ne("px-2 py-0.5 text-[10px] font-medium uppercase rounded-full",i.type==="swap"&&"bg-white/10 text-white/60",i.type==="bridge"&&"bg-accent/20 text-accent",i.type==="cross"&&"bg-warning/20 text-warning"),children:i.type}),i.tool&&h.jsxs("span",{className:"text-[10px] text-white/30",children:["via ",i.tool]})]}),h.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[h.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[h.jsx("img",{src:i.fromToken.logo,alt:i.fromToken.symbol,className:"w-4 h-4 rounded-full flex-shrink-0",onError:c=>{c.target.src="https://via.placeholder.com/16"}}),h.jsx("span",{className:"text-white font-medium truncate",children:i.fromToken.symbol}),i.fromChain!==i.toChain&&h.jsxs("span",{className:"text-white/30 text-xs hidden sm:inline",children:["(",o?.shortName,")"]})]}),h.jsx(zi,{className:"w-3 h-3 text-white/30 flex-shrink-0"}),h.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[h.jsx("img",{src:i.toToken.logo,alt:i.toToken.symbol,className:"w-4 h-4 rounded-full flex-shrink-0",onError:c=>{c.target.src="https://via.placeholder.com/16"}}),h.jsx("span",{className:"text-white font-medium truncate",children:i.toToken.symbol}),i.fromChain!==i.toChain&&h.jsxs("span",{className:"text-white/30 text-xs hidden sm:inline",children:["(",l?.shortName,")"]})]})]})]})]},r)})})}var Rl;(function(n){n.ETH="eth",n.POL="pol",n.BSC="bsc",n.DAI="dai",n.FTM="ftm",n.AVA="ava",n.ARB="arb",n.OPT="opt",n.ONE="one",n.FSN="fsn",n.MOR="mor",n.CEL="cel",n.FUS="fus",n.TLO="tlo",n.CRO="cro",n.BOB="bob",n.RSK="rsk",n.VEL="vel",n.MOO="moo",n.MAM="mam",n.AUR="aur",n.EVM="evm",n.ARN="arn",n.ERA="era",n.PZE="pze",n.LNA="lna",n.BAS="bas",n.SCL="scl",n.MOD="mod",n.MNT="mnt",n.BLS="bls",n.SEI="sei",n.FRA="fra",n.TAI="tai",n.GRA="gra",n.IMX="imx",n.KAI="kai",n.XLY="xly",n.OPB="opb",n.WCC="wcc",n.LSK="lsk",n.ABS="abs",n.BER="ber",n.SON="son",n.UNI="uni",n.APE="ape",n.SOE="soe",n.INK="ink",n.LNS="lns",n.SWL="swl",n.CRN="crn",n.ETL="etl",n.SUP="sup",n.HYP="hyp",n.XDC="xdc",n.BOC="boc",n.VIC="vic",n.FLR="flr",n.KAT="kat",n.VAN="van",n.RON="ron",n.PLU="plu",n.NIB="nib",n.HPL="hpl",n.SOP="sop",n.PLA="pla",n.FLW="flw",n.HMI="hmi",n.MON="mon",n.STA="sta",n.MEG="meg",n.BOT="bot",n.SOL="sol",n.TER="ter",n.OAS="oas",n.SUI="sui",n.BTC="btc",n.BCH="bch",n.LTC="ltc",n.DGE="dge",n.TRN="trn"})(Rl||(Rl={}));var Da;(function(n){n[n.ETH=1]="ETH",n[n.POL=137]="POL",n[n.BSC=56]="BSC",n[n.DAI=100]="DAI",n[n.FTM=250]="FTM",n[n.AVA=43114]="AVA",n[n.ARB=42161]="ARB",n[n.OPT=10]="OPT",n[n.ONE=16666e5]="ONE",n[n.FSN=32659]="FSN",n[n.MOR=1285]="MOR",n[n.CEL=42220]="CEL",n[n.FUS=122]="FUS",n[n.TLO=40]="TLO",n[n.CRO=25]="CRO",n[n.BOB=288]="BOB",n[n.RSK=30]="RSK",n[n.VEL=106]="VEL",n[n.MOO=1284]="MOO",n[n.MAM=1088]="MAM",n[n.AUR=1313161554]="AUR",n[n.EVM=9001]="EVM",n[n.ARN=42170]="ARN",n[n.ERA=324]="ERA",n[n.PZE=1101]="PZE",n[n.LNA=59144]="LNA",n[n.BAS=8453]="BAS",n[n.SCL=534352]="SCL",n[n.MOD=34443]="MOD",n[n.MNT=5e3]="MNT",n[n.BLS=81457]="BLS",n[n.SEI=1329]="SEI",n[n.FRA=252]="FRA",n[n.TAI=167e3]="TAI",n[n.GRA=1625]="GRA",n[n.IMX=13371]="IMX",n[n.KAI=8217]="KAI",n[n.XLY=196]="XLY",n[n.OPB=204]="OPB",n[n.WCC=480]="WCC",n[n.LSK=1135]="LSK",n[n.ABS=2741]="ABS",n[n.BER=80094]="BER",n[n.SON=146]="SON",n[n.UNI=130]="UNI",n[n.APE=33139]="APE",n[n.SOE=1868]="SOE",n[n.INK=57073]="INK",n[n.LNS=232]="LNS",n[n.SWL=1923]="SWL",n[n.CRN=21e6]="CRN",n[n.ETL=42793]="ETL",n[n.SUP=55244]="SUP",n[n.HYP=999]="HYP",n[n.XDC=50]="XDC",n[n.BOC=60808]="BOC",n[n.VIC=88]="VIC",n[n.FLR=14]="FLR",n[n.KAT=747474]="KAT",n[n.VAN=1480]="VAN",n[n.RON=2020]="RON",n[n.PLU=98866]="PLU",n[n.NIB=6900]="NIB",n[n.HPL=1337]="HPL",n[n.SOP=50104]="SOP",n[n.PLA=9745]="PLA",n[n.FLW=747]="FLW",n[n.HMI=43111]="HMI",n[n.MON=143]="MON",n[n.STA=988]="STA",n[n.MEG=4326]="MEG",n[n.BOT=3637]="BOT",n[n.SOL=0x416edef1601be]="SOL",n[n.TER=0x41feef8a540be]="TER",n[n.OAS=0x65d650afb73e]="OAS",n[n.SUI=927e13]="SUI",n[n.BTC=20000000000001]="BTC",n[n.BCH=20000000000002]="BCH",n[n.LTC=20000000000003]="LTC",n[n.DGE=20000000000004]="DGE",n[n.TRN=728126428]="TRN"})(Da||(Da={}));var Di;(function(n){n.EVM="EVM",n.SVM="SVM",n.MVM="MVM",n.UTXO="UTXO",n.TVM="TVM"})(Di||(Di={}));const Yn=(()=>{const n={integrator:"lifi-sdk",apiUrl:"https://li.quest/v1",rpcUrls:{},chains:[],providers:[],preloadChains:!0,debug:!1};let e;return{set loading(t){e=t},get(){return n},set(t){const{chains:i,providers:r,rpcUrls:s,...a}=t;return Object.assign(n,a),i&&this.setChains(i),r&&this.setProviders(r),s&&this.setRPCUrls(s),n},getProvider(t){return n.providers.find(i=>i.type===t)},setProviders(t){const i=new Map(n.providers.map(r=>[r.type,r]));for(const r of t)i.set(r.type,r);n.providers=Array.from(i.values())},setChains(t){const i=t.reduce((r,s)=>(s.metamask?.rpcUrls?.length&&(r[s.id]=s.metamask.rpcUrls),r),{});this.setRPCUrls(i,[Da.SOL]),n.chains=t,e=void 0},async getChains(){return e&&await e,n.chains},async getChainById(t){e&&await e;const i=n.chains?.find(r=>r.id===t);if(!i)throw new Error(`ChainId ${t} not found`);return i},setRPCUrls(t,i){for(const r in t){const s=Number(r),a=t[s];if(a?.length){if(!n.rpcUrls[s]?.length)n.rpcUrls[s]=Array.from(a);else if(!i?.includes(s)){const o=a.filter(l=>!n.rpcUrls[s]?.includes(l));n.rpcUrls[s].push(...o)}}}},async getRPCUrls(){return e&&await e,n.rpcUrls}}})();var cn;(function(n){n.RPCError="RPCError",n.ProviderError="ProviderError",n.ServerError="ServerError",n.TransactionError="TransactionError",n.ValidationError="ValidationError",n.BalanceError="BalanceError",n.NotFoundError="NotFoundError",n.UnknownError="UnknownError",n.SlippageError="SlippageError",n.HTTPError="HTTPError"})(cn||(cn={}));var pn;(function(n){n[n.InternalError=1e3]="InternalError",n[n.ValidationError=1001]="ValidationError",n[n.TransactionUnderpriced=1002]="TransactionUnderpriced",n[n.TransactionFailed=1003]="TransactionFailed",n[n.Timeout=1004]="Timeout",n[n.ProviderUnavailable=1005]="ProviderUnavailable",n[n.NotFound=1006]="NotFound",n[n.ChainSwitchError=1007]="ChainSwitchError",n[n.TransactionUnprepared=1008]="TransactionUnprepared",n[n.GasLimitError=1009]="GasLimitError",n[n.TransactionCanceled=1010]="TransactionCanceled",n[n.SlippageError=1011]="SlippageError",n[n.SignatureRejected=1012]="SignatureRejected",n[n.BalanceError=1013]="BalanceError",n[n.AllowanceRequired=1014]="AllowanceRequired",n[n.InsufficientFunds=1015]="InsufficientFunds",n[n.ExchangeRateUpdateCanceled=1016]="ExchangeRateUpdateCanceled",n[n.WalletChangedDuringExecution=1017]="WalletChangedDuringExecution",n[n.TransactionExpired=1018]="TransactionExpired",n[n.TransactionSimulationFailed=1019]="TransactionSimulationFailed",n[n.TransactionConflict=1020]="TransactionConflict",n[n.TransactionNotFound=1021]="TransactionNotFound",n[n.TransactionRejected=1022]="TransactionRejected",n[n.RateLimitExceeded=1023]="RateLimitExceeded",n[n.ThirdPartyError=1024]="ThirdPartyError",n[n.InsufficientGas=1025]="InsufficientGas"})(pn||(pn={}));var Ua;(function(n){n.UnknownError="Unknown error occurred.",n.SlippageError="The slippage is larger than the defined threshold. Please request a new route to get a fresh quote.",n.GasLimitLow="Gas limit is too low.",n.TransactionUnderpriced="Transaction is underpriced.",n.TransactionReverted="Transaction was reverted."})(Ua||(Ua={}));const Yh=n=>{let e=n;for(;e?.cause;)e=e.cause;return e};class Mu extends Error{code;cause;constructor(e,t,i,r){super(i),this.name=e,this.code=t,this.cause=r;const s=Yh(this.cause);s?.stack&&(this.stack=s.stack)}}class wu extends Mu{constructor(e){super(cn.ValidationError,pn.ValidationError,e)}}const Ia="3.15.3";class Fa extends Error{step;process;code;name="SDKError";cause;constructor(e,t,i){const r=`${e.message?`[${e.name}] ${e.message}`:"Unknown error occurred"}
LI.FI SDK version: ${Ia}`;super(r),this.name="SDKError",this.step=t,this.process=i,this.cause=e,this.stack=this.cause.stack,this.code=e.code}}const $h=new Map([[400,{type:cn.ValidationError,code:pn.ValidationError}],[404,{type:cn.NotFoundError,code:pn.NotFound}],[409,{type:cn.SlippageError,code:pn.SlippageError,message:Ua.SlippageError}],[424,{type:cn.ServerError,code:pn.ThirdPartyError}],[429,{type:cn.ServerError,code:pn.RateLimitExceeded}],[500,{type:cn.ServerError,code:pn.InternalError}]]),Zh=n=>$h.get(n)??{type:cn.ServerError,code:pn.InternalError},Kh=n=>{const e=n.status||n.status===0?n.status:"",t=n.statusText||"",i=`${e} ${t}`.trim();return`Request failed with ${i?`status code ${i}`:"an unknown error"}`};class Jh extends Mu{response;status;url;fetchOptions;type;responseBody;constructor(e,t,i){const r=Zh(e.status),s=r?.message?`
${r.message}`:"",a=Kh(e)+s;super(cn.HTTPError,r.code,a),this.type=r.type,this.response=e,this.status=e.status,this.message=a,this.url=t,this.fetchOptions=i}async buildAdditionalDetails(){this.type&&(this.message=`[${this.type}] ${this.message}`);try{this.responseBody=await this.response.json(),this.responseBody&&(this.message+=this.message.endsWith(".")?` ${this.responseBody?.message.toString()}`:`. ${this.responseBody?.message.toString()}`)}catch{}return this}}function Qh(n){return new Promise(e=>{setTimeout(()=>e(null),n)})}const Cl={retries:1},ef=({retries:n,...e})=>({...e}),As=async(n,e={retries:Cl.retries})=>{const{userId:t,integrator:i,widgetVersion:r,apiKey:s,requestInterceptor:a}=Yn.get();if(!i)throw new Fa(new wu("You need to provide the Integrator property. Please see documentation https://docs.li.fi/integrate-li.fi-js-sdk/set-up-the-sdk"));e.retries=e.retries??Cl.retries;try{s&&(e.headers={...e.headers,"x-lifi-api-key":s}),t&&(e.headers={...e.headers,"x-lifi-userid":t}),r&&(e.headers={...e.headers,"x-lifi-widget":r}),Ia&&(e.headers={...e.headers,"x-lifi-sdk":Ia}),e.headers={...e.headers,"x-lifi-integrator":i},a&&(e=await a(e));const o=await fetch(n,ef(e));if(!o.ok)throw new Jh(o,n,e);return await o.json()}catch(o){const l=e.retries??0;if(l>0&&o.status===500)return await Qh(500),As(n,{...e,retries:l-1});throw await o.buildAdditionalDetails?.(),new Fa(o)}};class tf extends Map{maxSize;constructor(e){super(),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}const Lr=new tf(8192);function Eu(n,{enabled:e=!0,id:t}){if(!e||!t)return n();if(Lr.get(t))return Lr.get(t);const i=n().finally(()=>Lr.delete(t));return Lr.set(t,i),i}const nf=async(n,e)=>{if(!("taskId"in n&&n.taskId)&&!("txHash"in n&&n.txHash))throw new Fa(new wu('Either "taskId" or "txHash" must be provided and non-empty.'));const t=new URLSearchParams(n);return await As(`${Yn.get().apiUrl}/status?${t}`,{signal:e?.signal})},jo=async(n,e)=>{if(n)for(const r of Object.keys(n))n[r]||delete n[r];const t=new URLSearchParams(n).toString();return(await Eu(()=>As(`${Yn.get().apiUrl}/chains?${t}`,{signal:e?.signal}),{id:`${jo.name}.${t}`})).chains};async function Tu(n,e){if(n)for(const r of Object.keys(n))n[r]||delete n[r];const t=new URLSearchParams(n).toString();return n?.extended,await Eu(()=>As(`${Yn.get().apiUrl}/tokens?${t}`,{signal:e?.signal}),{id:`${Tu.name}.${t}`})}function rf(n){if(!n.integrator)throw new Error("Integrator not found. Please see documentation https://docs.li.fi/integrate-li.fi-js-sdk/set-up-the-sdk");const e=Yn.set(n);return n.disableVersionCheck,e}async function sf(){Yn.loading=jo({chainTypes:[Di.EVM,Di.SVM,Di.UTXO,Di.MVM]}).then(n=>Yn.setChains(n)).catch(),await Yn.loading}function af(n){const e=rf(n);return e.preloadChains&&sf(),e}af({integrator:"liquyn-swap",apiKey:"07bbc064-8482-437e-b270-dbca23da1b44.644090d2-cdf2-4939-b5a3-a29d5b9e8572"});let ti=null,of=null,ks=null;async function ms(){if(ti!==null)return ti;try{const n=await jo();if(of=n,n.find(r=>r.id===999))return ti=999,999;if(n.find(r=>r.id===Yt))return ti=Yt,Yt;const i=n.find(r=>r.name.toLowerCase()==="hyperliquid"||r.name.toLowerCase().includes("hyperliquid")||r.name.toLowerCase().includes("hyperevm")||r.key?.toLowerCase()==="hyperliquid"||r.key?.toLowerCase()==="hyp"||r.key?.toLowerCase()==="hpl");return i&&(i.id===999||i.id===Yt)?(ti=i.id,i.id):(ti=Yt,Yt)}catch{return ti=Yt,Yt}}async function lf(){if(ks!==null)return ks;try{const n=await ms(),t=(await Tu({chains:[n]})).tokens[n]||[];return ks=t,t}catch{return[]}}function cf(n){const e=n.steps.map(i=>({type:i.type,tool:i.tool,toolLogo:i.toolDetails?.logoURI,fromChain:i.action.fromChainId,toChain:i.action.toChainId,fromToken:{symbol:i.action.fromToken.symbol,name:i.action.fromToken.name||i.action.fromToken.symbol,decimals:i.action.fromToken.decimals,address:i.action.fromToken.address,chainId:i.action.fromChainId,logo:i.action.fromToken.logoURI},toToken:{symbol:i.action.toToken.symbol,name:i.action.toToken.name||i.action.toToken.symbol,decimals:i.action.toToken.decimals,address:i.action.toToken.address,chainId:i.action.toChainId,logo:i.action.toToken.logoURI},fromAmount:i.action.fromAmount,toAmount:i.estimate.toAmount,estimatedTime:i.estimate.executionDuration}));return{id:n.id,fromChain:n.fromChainId,toChain:n.toChainId,fromToken:{symbol:n.fromToken.symbol,name:n.fromToken.name||n.fromToken.symbol,decimals:n.fromToken.decimals,address:n.fromToken.address,chainId:n.fromChainId,logo:n.fromToken.logoURI},toToken:{symbol:n.toToken.symbol,name:n.toToken.name||n.toToken.symbol,decimals:n.toToken.decimals,address:n.toToken.address,chainId:n.toChainId,logo:n.toToken.logoURI},fromAmount:n.fromAmount,toAmount:n.toAmount,estimatedTime:n.steps.reduce((i,r)=>i+r.estimate.executionDuration,0),gasCost:n.gasCostUSD||"0",gasCostUSD:n.gasCostUSD||"0",steps:e,slippage:.5,_rawRoute:n}}async function gs(n,e,t,i,r,s=.5){try{const a=await ms(),o=await lf();let l=t;const c=t.toLowerCase()==="0xeb62eee3685fc4c43992febcd9e75443aef550ab",f=t.toLowerCase()==="0x0000000000000000000000000000000000000000";if(c){const u=o.find(x=>x.symbol.toUpperCase()==="USDC"||x.symbol.toUpperCase()==="USDC.E");u&&(l=u.address)}else if(f){const u=o.find(x=>x.symbol.toUpperCase()==="HYPE"||x.symbol.toUpperCase()==="WHYPE"||x.address.toLowerCase()==="0x0000000000000000000000000000000000000000");u?l=u.address:l="0x0000000000000000000000000000000000000000"}const{getRoutesApi:d}=await Vd(async()=>{const{getRoutesApi:u}=await Promise.resolve().then(()=>Up);return{getRoutesApi:u}},void 0);return(await d({fromChainId:n,toChainId:a,fromTokenAddress:e,toTokenAddress:l,fromAmount:i,fromAddress:r,slippage:s/100})).routes.map(cf)}catch(a){const o=a instanceof Error?a.message:"Unknown error";throw o.includes("toChainId")||o.includes("allowed values")?new Error(`Chain ID ${await ms()} not recognized. Please check LI.FI chain support.`):o.includes("invalid")||o.includes("deny list")?new Error("Token not supported for bridging to Hyperliquid. LI.FI may have limited token support."):a}}async function uf(n,e,t){const i=t||await ms();try{const s=await nf({txHash:n,fromChain:e,toChain:i}),a=s.sending,o=s.receiving,l=s.bridgeExplorerLink,c=s.tool;return{status:s.status,substatus:s.substatus,substatusMessage:s.substatusMessage,bridgeExplorerLink:l,fromChain:a?{chainId:a.chainId,txHash:a.txHash,amount:a.amount||"0",token:{symbol:a.token?.symbol||"",decimals:a.token?.decimals||18}}:void 0,toChain:o?{chainId:o.chainId,txHash:o.txHash,amount:o.amount,token:{symbol:o.token?.symbol||"",decimals:o.token?.decimals||18}}:void 0,tool:c}}catch{return{status:"NOT_FOUND"}}}const Ke={ETHEREUM:1,POLYGON:137,ARBITRUM:42161,BSC:56},df={[Ke.ETHEREUM]:gt.NetworkName.Ethereum,[Ke.POLYGON]:gt.NetworkName.Polygon,[Ke.ARBITRUM]:gt.NetworkName.Arbitrum,[Ke.BSC]:gt.NetworkName.BNBChain},hf={[gt.NetworkName.Ethereum]:Ke.ETHEREUM,[gt.NetworkName.Polygon]:Ke.POLYGON,[gt.NetworkName.Arbitrum]:Ke.ARBITRUM,[gt.NetworkName.BNBChain]:Ke.BSC};function Au(){return[{id:"bridge_to_railgun",label:"Bridge to Privacy Chain",description:"Transfer funds to a Railgun-supported chain"},{id:"shield",label:"Shield Funds",description:"Enter Railgun private balance using ZK proofs"},{id:"wait",label:"Anonymity Period",description:"Wait for anonymity set to grow (recommended)"},{id:"unshield",label:"Unshield Funds",description:"Exit to a new public address"},{id:"bridge_to_hyperliquid",label:"Bridge to Hyperliquid",description:"Transfer to final destination"}]}function Wo(n){return Object.values(Ke).includes(n)}function Rs(n){return df[n]}function Ru(n){return hf[n]}function ff(n){return n&&Wo(n)?n:Ke.ARBITRUM}function pf(n){switch(n){case Ke.ETHEREUM:return"Ethereum";case Ke.POLYGON:return"Polygon";case Ke.ARBITRUM:return"Arbitrum";case Ke.BSC:return"BNB Chain";default:return"Unknown"}}var Bs,Nl;function mf(){if(Nl)return Bs;Nl=1,Bs=e;const n=Od();function e(t,i,r){if(typeof i!="number")throw new Error("second argument must be a Number");let s,a,o,l,c,f=!0,d;Array.isArray(t)?(s=[],o=a=t.length):(l=Object.keys(t),s={},o=a=l.length);function m(x){function v(){r&&r(x,s),r=null}f?n(v):v()}function u(x,v,g){if(s[x]=g,v&&(c=!0),--o===0||v)m(v);else if(!c&&d<a){let p;l?(p=l[d],d+=1,t[p](function(y,M){u(p,y,M)})):(p=d,d+=1,t[p](function(y,M){u(p,y,M)}))}}d=i,o?l?l.some(function(x,v){return t[x](function(g,p){u(x,g,p)}),v===i-1}):t.some(function(x,v){return x(function(g,p){u(v,g,p)}),v===i-1}):m(null),f=!1}return Bs}var zs={},Pl;function gf(){return Pl||(Pl=1,(function(n){n.compare=function(u,x){if(kd.isBuffer(u)){for(var v=Math.min(u.length,x.length),g=0;g<v;g++){var p=u[g]-x[g];if(p)return p}return u.length-x.length}return u<x?-1:u>x?1:0};function e(u){return u!==void 0&&u!==""}function t(u,x){return Object.hasOwnProperty.call(u,x)}function i(u,x){return Object.hasOwnProperty.call(u,x)&&x}var r=n.lowerBoundKey=function(u){return i(u,"gt")||i(u,"gte")||i(u,"min")||(u.reverse?i(u,"end"):i(u,"start"))||void 0},s=n.lowerBound=function(u,x){var v=r(u);return v?u[v]:x},a=n.lowerBoundInclusive=function(u){return!t(u,"gt")},o=n.upperBoundInclusive=function(u){return!t(u,"lt")},l=n.lowerBoundExclusive=function(u){return!a(u)},c=n.upperBoundExclusive=function(u){return!o(u)},f=n.upperBoundKey=function(u){return i(u,"lt")||i(u,"lte")||i(u,"max")||(u.reverse?i(u,"start"):i(u,"end"))||void 0},d=n.upperBound=function(u,x){var v=f(u);return v?u[v]:x};n.start=function(u,x){return u.reverse?d(u,x):s(u,x)},n.end=function(u,x){return u.reverse?s(u,x):d(u,x)},n.startInclusive=function(u){return u.reverse?o(u):a(u)},n.endInclusive=function(u){return u.reverse?a(u):o(u)};function m(u){return u}n.toLtgt=function(u,x,v,g,p){x=x||{},v=v||m;var y=arguments.length>3,M=n.lowerBoundKey(u),S=n.upperBoundKey(u);return M?M==="gt"?x.gt=v(u.gt,!1):x.gte=v(u[M],!1):y&&(x.gte=v(g,!1)),S?S==="lt"?x.lt=v(u.lt,!0):x.lte=v(u[S],!0):y&&(x.lte=v(p,!0)),u.reverse!=null&&(x.reverse=!!u.reverse),t(x,"max")&&delete x.max,t(x,"min")&&delete x.min,t(x,"start")&&delete x.start,t(x,"end")&&delete x.end,x},n.contains=function(u,x,v){v=v||n.compare;var g=s(u);if(e(g)){var p=v(x,g);if(p<0||p===0&&l(u))return!1}var y=d(u);if(e(y)){var p=v(x,y);if(p>0||p===0&&c(u))return!1}return!0},n.filter=function(u,x){return function(v){return n.contains(u,v,x)}}})(zs)),zs}var Gs,Ll;function Cu(){if(Ll)return Gs;Ll=1;const n=gf(),e=Symbol("none");return Gs=function(i){const r=n.lowerBound(i,e),s=n.upperBound(i,e),a=n.lowerBoundExclusive(i,e),o=n.upperBoundExclusive(i,e);return r!==e&&s!==e?IDBKeyRange.bound(r,s,a,o):r!==e?IDBKeyRange.lowerBound(r,a):s!==e?IDBKeyRange.upperBound(s,o):null},Gs}var Vs,Dl;function Nu(){if(Dl)return Vs;Dl=1;const n=Go().Buffer,e=(function(){if(globalThis.TextDecoder){const r=new TextDecoder("utf-8");return r.decode.bind(r)}else return function(s){return i(s).toString()}})(),t=(function(){if(globalThis.TextDecoder){const r=new TextDecoder("utf-8");return r.decode.bind(r)}else return function(s){return n.from(s).toString()}})();function i(r){const s=n.from(r.buffer);return r.byteLength===r.buffer.byteLength?s:s.slice(r.byteOffset,r.byteOffset+r.byteLength)}return Vs=function(r,s){return r instanceof Uint8Array?s?i(r):e(r):r instanceof ArrayBuffer?s?n.from(r):t(r):s?n.from(String(r)):String(r)},Vs}var Hs,Ul;function xf(){if(Ul)return Hs;Ul=1;const n=iu(),e=ru().AbstractIterator,t=Cu(),i=Nu(),r=function(){};Hs=s;function s(a,o,l){if(e.call(this,a),this._limit=l.limit,this._count=0,this._callback=null,this._cache=[],this._completed=!1,this._aborted=!1,this._error=null,this._transaction=null,this._keys=l.keys,this._values=l.values,this._keyAsBuffer=l.keyAsBuffer,this._valueAsBuffer=l.valueAsBuffer,this._limit===0){this._completed=!0;return}let c;try{c=t(l)}catch{this._completed=!0;return}this.createIterator(o,c,l.reverse)}return n(s,e),s.prototype.createIterator=function(a,o,l){const c=this.db.db.transaction([a],"readonly"),d=c.objectStore(a).openCursor(o,l?"prev":"next");d.onsuccess=m=>{const u=m.target.result;u&&this.onItem(u)},this._transaction=c,c.onabort=()=>{this.onAbort(this._transaction.error||new Error("aborted by user"))},c.oncomplete=()=>{this.onComplete()}},s.prototype.onItem=function(a){this._cache.push(a.key,a.value),(this._limit<=0||++this._count<this._limit)&&a.continue(),this.maybeNext()},s.prototype.onAbort=function(a){this._aborted=!0,this._error=a,this.maybeNext()},s.prototype.onComplete=function(){this._completed=!0,this.maybeNext()},s.prototype.maybeNext=function(){this._callback&&(this._next(this._callback),this._callback=null)},s.prototype._next=function(a){if(this._aborted){const o=this._error;this._error=null,this._nextTick(a,o)}else if(this._cache.length>0){let o=this._cache.shift(),l=this._cache.shift();this._keys&&o!==void 0?o=this._deserializeKey(o,this._keyAsBuffer):o=void 0,this._values&&l!==void 0?l=this._deserializeValue(l,this._valueAsBuffer):l=void 0,this._nextTick(a,null,o,l)}else this._completed?this._nextTick(a):this._callback=a},s.prototype._deserializeKey=i,s.prototype._deserializeValue=i,s.prototype._end=function(a){if(this._aborted||this._completed)return this._nextTick(a,this._error);this.onItem=r,this.onAbort=a,this.onComplete=a},Hs}var js,Il;function vf(){if(Il)return js;Il=1;const n=Go().Buffer,e=(function(){if(globalThis.TextEncoder){const t=new TextEncoder("utf-8");return t.encode.bind(t)}else return n.from})();return js=function(t,i){return i?n.isBuffer(t)?t:e(String(t)):String(t)},js}var Ws={},Fl;function _f(){return Fl||(Fl=1,(function(n){const e=Go().Buffer;n.test=function(t){return function(r){try{return r.cmp(t,0),!0}catch{return!1}}},n.bufferKeys=n.test(e.alloc(0))})(Ws)),Ws}var Xs,Ol;function yf(){return Ol||(Ol=1,Xs=function(e,t,i,r,s){if(r.limit===0)return e._nextTick(s);const a=e.db.transaction([t],"readwrite"),o=a.objectStore(t);let l=0;a.oncomplete=function(){s()},a.onabort=function(){s(a.error||new Error("aborted by user"))};const c=o.openKeyCursor?"openKeyCursor":"openCursor",f=r.reverse?"prev":"next";o[c](i,f).onsuccess=function(d){const m=d.target.result;m&&(o.delete(m.key).onsuccess=function(){(r.limit<=0||++l<r.limit)&&m.continue()})}}),Xs}var qs,kl;function bf(){if(kl)return qs;kl=1,qs=f;const n=ru().AbstractLevelDOWN,e=iu(),t=mf(),i=xf(),r=vf(),s=Nu(),a=_f(),o=yf(),l=Cu(),c="level-js-";function f(d,m){if(!(this instanceof f))return new f(d,m);if(n.call(this,{bufferKeys:a.bufferKeys(indexedDB),snapshots:!0,permanence:!0,clear:!0,getMany:!0}),m=m||{},typeof d!="string")throw new Error("constructor requires a location string argument");this.location=d,this.prefix=m.prefix==null?c:m.prefix,this.version=parseInt(m.version||1,10)}return e(f,n),f.prototype.type="level-js",f.prototype._open=function(d,m){const u=indexedDB.open(this.prefix+this.location,this.version);u.onerror=function(){m(u.error||new Error("unknown error"))},u.onsuccess=()=>{this.db=u.result,m()},u.onupgradeneeded=x=>{const v=x.target.result;v.objectStoreNames.contains(this.location)||v.createObjectStore(this.location)}},f.prototype.store=function(d){return this.db.transaction([this.location],d).objectStore(this.location)},f.prototype.await=function(d,m){const u=d.transaction;u.onabort=function(){m(u.error||new Error("aborted by user"))},u.oncomplete=function(){m(null,d.result)}},f.prototype._get=function(d,m,u){const x=this.store("readonly");let v;try{v=x.get(d)}catch(g){return this._nextTick(u,g)}this.await(v,function(g,p){if(g)return u(g);if(p===void 0)return u(new Error("NotFound"));u(null,s(p,m.asBuffer))})},f.prototype._getMany=function(d,m,u){const x=m.asBuffer,v=this.store("readonly"),g=d.map(p=>y=>{let M;try{M=v.get(p)}catch(S){return y(S)}M.onsuccess=()=>{const S=M.result;y(null,S===void 0?S:s(S,x))},M.onerror=S=>{S.stopPropagation(),y(M.error)}});t(g,16,u)},f.prototype._del=function(d,m,u){const x=this.store("readwrite");let v;try{v=x.delete(d)}catch(g){return this._nextTick(u,g)}this.await(v,u)},f.prototype._put=function(d,m,u,x){const v=this.store("readwrite");let g;try{g=v.put(m,d)}catch(p){return this._nextTick(x,p)}this.await(g,x)},f.prototype._serializeKey=function(d){return r(d,this.supports.bufferKeys)},f.prototype._serializeValue=function(d){return r(d,!0)},f.prototype._iterator=function(d){return new i(this,this.location,d)},f.prototype._batch=function(d,m,u){if(d.length===0)return this._nextTick(u);const x=this.store("readwrite"),v=x.transaction;let g=0,p;v.onabort=function(){u(p||v.error||new Error("aborted by user"))},v.oncomplete=function(){u()};function y(){const M=d[g++],S=M.key;let R;try{R=M.type==="del"?x.delete(S):x.put(M.value,S)}catch(T){p=T,v.abort();return}g<d.length&&(R.onsuccess=y)}y()},f.prototype._clear=function(d,m){let u,x;try{u=l(d)}catch{return this._nextTick(m)}if(d.limit>=0)return o(this,this.location,u,d,m);try{const v=this.store("readwrite");x=u?v.delete(u):v.clear()}catch(v){return this._nextTick(m,v)}this.await(x,m)},f.prototype._close=function(d){this.db.close(),this._nextTick(d)},f.prototype.upgrade=function(d){if(this.status!=="open")return this._nextTick(d,new Error("cannot upgrade() before open()"));const m=this.iterator(),u={},x=this;m._deserializeKey=m._deserializeValue=y,v();function v(M){if(M)return p(M);m.next(g)}function g(M,S,R){if(M||S===void 0)return p(M);const T=x._serializeKey(s(S,!0)),C=x._serializeValue(s(R,!0));x._batch([{type:"del",key:S},{type:"put",key:T,value:C}],u,v)}function p(M){m.end(function(S){d(M||S)})}function y(M){return M}},f.destroy=function(d,m,u){typeof m=="function"&&(u=m,m=c);const x=indexedDB.deleteDatabase(m+d);x.onsuccess=function(){u()},x.onerror=function(v){u(v)}},qs}var Sf=bf();const Mf=$d(Sf);let fi={status:"uninitialized"},dr=null;const Oa=new Set;function wf(n){return Oa.add(n),n(fi),()=>{Oa.delete(n)}}function Dr(n){fi={...fi,...n},Oa.forEach(e=>e(fi))}function Ef(){return fi}function $n(){return fi.status==="ready"}const Tf=["https://poi-node.railgun.org"],Af={[Ke.ETHEREUM]:{chainId:Ke.ETHEREUM,providers:[{provider:"https://eth.llamarpc.com",priority:1,weight:1,maxLogsPerBatch:1,stallTimeout:5e3},{provider:"https://cloudflare-eth.com",priority:2,weight:1,maxLogsPerBatch:1,stallTimeout:5e3}]},[Ke.POLYGON]:{chainId:Ke.POLYGON,providers:[{provider:"https://polygon-rpc.com",priority:1,weight:1,maxLogsPerBatch:1,stallTimeout:5e3},{provider:"https://polygon.llamarpc.com",priority:2,weight:1,maxLogsPerBatch:1,stallTimeout:5e3}]},[Ke.ARBITRUM]:{chainId:Ke.ARBITRUM,providers:[{provider:"https://arbitrum-one.publicnode.com",priority:1,weight:1,maxLogsPerBatch:1,stallTimeout:5e3},{provider:"https://rpc.ankr.com/arbitrum",priority:2,weight:1,maxLogsPerBatch:1,stallTimeout:5e3},{provider:"https://1rpc.io/arb",priority:3,weight:1,maxLogsPerBatch:1,stallTimeout:5e3}]},[Ke.BSC]:{chainId:Ke.BSC,providers:[{provider:"https://bsc-dataseed1.defibit.io",priority:1,weight:1,maxLogsPerBatch:1,stallTimeout:5e3},{provider:"https://bsc-dataseed2.defibit.io",priority:2,weight:1,maxLogsPerBatch:1,stallTimeout:5e3}]}},Rf="railgun-artifacts",Ui="artifacts";function Bl(){return new Promise((n,e)=>{const t=indexedDB.open(Rf,1);t.onerror=()=>{console.error("[RAILGUN] Failed to open artifact database:",t.error),e(t.error)},t.onsuccess=()=>{n(t.result)},t.onupgradeneeded=i=>{const r=i.target.result;r.objectStoreNames.contains(Ui)||r.createObjectStore(Ui)}})}const Pu={get:async n=>{try{const e=await Bl();return new Promise(t=>{const i=e.transaction(Ui,"readonly"),s=i.objectStore(Ui).get(n);s.onerror=()=>{console.warn("[RAILGUN] Failed to get artifact:",n),t(null)},s.onsuccess=()=>{t(s.result||null)},i.oncomplete=()=>{e.close()}})}catch(e){return console.warn("[RAILGUN] Artifact store get error:",e),null}},store:async(n,e,t)=>{try{const i=await Bl();return new Promise((r,s)=>{const a=i.transaction(Ui,"readwrite"),l=a.objectStore(Ui).put(t,e);l.onerror=()=>{console.warn("[RAILGUN] Failed to store artifact:",e),s(l.error)},l.onsuccess=()=>{r()},a.oncomplete=()=>{i.close()}})}catch(i){console.warn("[RAILGUN] Artifact store put error:",i)}},exists:async n=>{try{return await Pu.get(n)!==null}catch{return!1}}};function Cf(n){return Mf(n)}async function Nf(n){return dr||(fi.status==="ready"?!0:(dr=Pf(n),dr))}async function Pf(n){try{console.log("[RAILGUN] Starting engine initialization..."),Dr({status:"initializing",error:void 0});const e=n?.walletSource??"liquynswap",t=n?.poiConfig?.nodeURLs??Tf,i=n?.shouldDebug??!1;Dr({status:"downloading_artifacts"}),console.log("[RAILGUN] Calling startRailgunEngine...");const r=Cf("railgun-db");console.log("[RAILGUN] Database path:",r),await Ft.startRailgunEngine(e,r,i,Pu,!1,!1,t),console.log("[RAILGUN] Engine started, setting up callbacks..."),Ft.setOnBalanceUpdateCallback(async a=>{i&&gt.isDefined(a)}),Ft.setOnUTXOMerkletreeScanCallback(a=>{i&&gt.isDefined(a)}),Ft.setOnTXIDMerkletreeScanCallback(a=>{i&&gt.isDefined(a)}),console.log("[RAILGUN] Callbacks set, loading initial provider...");const s=Ke.ETHEREUM;try{await Lu(s)}catch(a){console.warn("[RAILGUN] Initial provider load failed, continuing without:",a)}return Dr({status:"ready"}),console.log("[RAILGUN] Engine initialized successfully"),!0}catch(e){console.error("[RAILGUN] Engine initialization failed:",e);let t="Unknown error during engine initialization";return e instanceof Error?(t=e.message,e.stack&&console.error("[RAILGUN] Stack trace:",e.stack)):typeof e=="string"?t=e:e&&typeof e=="object"&&(t=JSON.stringify(e)),console.error("[RAILGUN] Error message:",t),Dr({status:"error",error:t}),dr=null,!1}}const zl=new Set;async function Lu(n){if(zl.has(n))return!0;if(!Wo(n))return console.warn(`[RAILGUN] Chain ${n} is not supported`),!1;const e=Rs(n),t=Af[n];if(!gt.NETWORK_CONFIG[e])return console.warn(`[RAILGUN] Network ${e} not found in config`),!1;try{return await Ft.loadProvider(t,e,6e4),zl.add(n),console.log(`[RAILGUN] Provider loaded for ${e}`),!0}catch(i){return console.warn(`[RAILGUN] Failed to load provider for ${e}:`,i),!1}}async function Du(n){return $n()?Lu(n):(console.error("[RAILGUN] Engine not ready, cannot load provider"),!1)}let yn={status:"none"};const ka=new Set;function Lf(n){return ka.add(n),n(yn),()=>{ka.delete(n)}}function gn(n){yn={...yn,...n},ka.forEach(e=>e(yn))}function Df(){return yn}function Xo(){return yn.status==="ready"&&gt.isDefined(yn.walletId)}function Uu(){return yn.walletId}function Uf(){return yn.railgunAddress}const If=`Sign this message to create your private RAILGUN wallet for Liquyn.

This does not cost any gas and will not submit any transactions.

Your RAILGUN wallet will be derived deterministically from this signature,
meaning you'll always get the same private wallet when signing with this address.`,qo="liquyn_railgun_wallet_id";function Ff(n){try{return localStorage.getItem(`${qo}_${n.toLowerCase()}`)}catch{return null}}function Of(n,e){try{localStorage.setItem(`${qo}_${n.toLowerCase()}`,e)}catch{console.warn("[RAILGUN] Failed to store wallet ID")}}function kf(n){try{localStorage.removeItem(`${qo}_${n.toLowerCase()}`)}catch{}}function Bf(n){const e=Vo(n),t=Zd(e).slice(0,16);return Kd.fromEntropy(t).phrase}function Iu(n){return Vo(cu(`liquyn_railgun_encryption_${n.toLowerCase()}`)).slice(2)}async function zf(n,e){if(!$n())return gn({status:"error",error:"RAILGUN engine not initialized"}),null;const t=Ff(e);if(t){if(await Gf(t,e))return t;kf(e)}gn({status:"awaiting_signature"});try{const i=await n.signMessage(If);gn({status:"creating"});const r=Bf(i),s=Iu(e),a=await Ft.createRailgunWallet(s,r,void 0);if(!a)throw new Error("Failed to create RAILGUN wallet");const{id:o,railgunAddress:l}=a;return Of(e,o),gn({status:"ready",walletId:o,railgunAddress:l,error:void 0}),console.log("[RAILGUN] Wallet created successfully"),console.log("[RAILGUN] Address:",l),Fu(o),o}catch(i){const r=i instanceof Error?i.message:"Unknown error";console.error("[RAILGUN] Wallet creation failed:",r);const s=r.toLowerCase().includes("user rejected")||r.toLowerCase().includes("user denied");return gn({status:"error",error:s?"Signature request rejected":r}),null}}async function Gf(n,e){if(!$n())return gn({status:"error",error:"RAILGUN engine not initialized"}),!1;gn({status:"loading"});try{const t=Iu(e),i=await Ft.loadWalletByID(t,n,!1);if(!i)throw new Error("Wallet not found");return gn({status:"ready",walletId:i.id,railgunAddress:i.railgunAddress,error:void 0}),console.log("[RAILGUN] Wallet loaded successfully"),Fu(n),!0}catch(t){const i=t instanceof Error?t.message:"Unknown error";return console.error("[RAILGUN] Failed to load wallet:",i),gn({status:"none",error:void 0}),!1}}async function Gl(){const{walletId:n}=yn;if(n)try{await Ft.unloadWalletByID(n)}catch{}gn({status:"none",walletId:void 0,railgunAddress:void 0,error:void 0})}async function Fu(n){try{const e=Object.values(Ke).map(t=>Rs(t));for(const t of e)try{await Ft.refreshBalances({name:t},[n])}catch(i){console.warn(`[RAILGUN] Balance scan failed for ${t}:`,i)}}catch(e){console.warn("[RAILGUN] Background scan error:",e)}}const Vf={[Ke.ETHEREUM]:30,[Ke.POLYGON]:50,[Ke.ARBITRUM]:.1,[Ke.BSC]:3},Hf={[Ke.ETHEREUM]:3500,[Ke.POLYGON]:.5,[Ke.ARBITRUM]:3500,[Ke.BSC]:600},Vl={shield:500000n,unshield:800000n};function Ou(n){const e=Rs(n),t=Vf[n],i=Hf[n],r=Number(Vl.shield)*t*1e-9,s=Number(Vl.unshield)*t*1e-9,a=(r*i).toFixed(2),o=(s*i).toFixed(2),l=((r+s)*i).toFixed(2),c=n===Ke.ETHEREUM?180:30,f=n===Ke.ETHEREUM?180:30,d=600;return{chainId:n,networkName:e,shieldFeeUSD:a,unshieldFeeUSD:o,totalFeeUSD:l,estimatedShieldTime:c,estimatedUnshieldTime:f,recommendedWaitTime:d,totalEstimatedTime:c+f+d}}async function jf(n,e,t,i){const r=gt.NETWORK_CONFIG[e];if(!r)throw new Error(`Network ${e} not configured`);const s=await n.getAddress(),a=r.proxyContract,o=new Jd(t,["function allowance(address owner, address spender) view returns (uint256)","function approve(address spender, uint256 amount) returns (bool)"],n);try{return await o.allowance(s,a)>=i?(console.log("[RAILGUN] Sufficient allowance already exists"),!0):(console.log("[RAILGUN] Approving token spend..."),await(await o.approve(a,i)).wait(),console.log("[RAILGUN] Token approval confirmed"),!0)}catch(l){throw console.error("[RAILGUN] Token approval failed:",l),l}}async function Wf(n,e,t){if(!$n())return{success:!1,error:"RAILGUN engine not initialized"};if(!Xo())return{success:!1,error:"RAILGUN wallet not ready"};const i=Ru(e.networkName);i&&(await Du(i)||console.warn(`[RAILGUN] Could not load provider for ${e.networkName}, continuing anyway`));const r=Uu(),s=Uf();if(!r||!s)return{success:!1,error:"Wallet not available"};const a=o=>{t&&t({status:"idle",currentStep:0,totalSteps:5,...o})};try{a({status:"preparing",currentStep:1,message:"Preparing shield transaction..."});const{networkName:o,tokenAddress:l,amount:c,fromAddress:f}=e,d={tokenAddress:l,amount:c,recipientAddress:s};a({status:"awaiting_approval",currentStep:2,message:"Checking token approval..."}),await jf(n,o,l,c);const m=Ft.getShieldPrivateKeySignatureMessage();a({status:"awaiting_approval",currentStep:2,message:"Please sign the shield message..."});const u=await n.signMessage(m),x=await Ft.gasEstimateForShield(gt.TXIDVersion.V2_PoseidonMerkle,o,u,[d],[],f),v={evmGasType:gt.EVMGasType.Type2,gasEstimate:x.gasEstimate,maxFeePerGas:50000000000n,maxPriorityFeePerGas:2000000000n};a({status:"shielding",currentStep:3,message:"Building shield transaction..."});const g=await Ft.populateShield(gt.TXIDVersion.V2_PoseidonMerkle,o,u,[d],[],v);if(!gt.isDefined(g)||!gt.isDefined(g.transaction))throw new Error("Failed to populate shield transaction");a({status:"shielding",currentStep:3,message:"Submitting shield transaction..."});const p=await n.sendTransaction({to:g.transaction.to,data:g.transaction.data,value:g.transaction.value??0n,gasLimit:v.gasEstimate,maxFeePerGas:v.maxFeePerGas,maxPriorityFeePerGas:v.maxPriorityFeePerGas});a({status:"shielding",currentStep:3,txHash:p.hash,message:"Waiting for confirmation..."});const y=await p.wait();if(!y||y.status!==1)throw new Error("Shield transaction failed");return a({status:"shielded",currentStep:4,shieldTxHash:p.hash,message:"Funds shielded successfully!"}),console.log("[RAILGUN] Shield successful:",p.hash),{success:!0,txHash:p.hash}}catch(o){const l=o instanceof Error?o.message:"Unknown error";return console.error("[RAILGUN] Shield failed:",l),a({status:"failed",error:l,message:`Shield failed: ${l}`}),{success:!1,error:l}}}async function Xf(n,e,t){if(!$n())return{success:!1,error:"RAILGUN engine not initialized"};if(!Xo())return{success:!1,error:"RAILGUN wallet not ready"};const i=Ru(e.networkName);i&&(await Du(i)||console.warn(`[RAILGUN] Could not load provider for ${e.networkName}, continuing anyway`));const r=Uu();if(!r)return{success:!1,error:"Wallet not available"};const s=a=>{t&&t({status:"idle",currentStep:0,totalSteps:5,...a})};try{s({status:"preparing",currentStep:4,message:"Preparing unshield transaction..."});const{networkName:a,tokenAddress:o,amount:l,toAddress:c}=e,f={tokenAddress:o,amount:l,recipientAddress:c};s({status:"generating_proof",currentStep:4,message:"Estimating gas..."});const d=await qf(n),m=await Ft.gasEstimateForUnprovenUnshield(gt.TXIDVersion.V2_PoseidonMerkle,a,r,d,[f],[],c,0n,!1),u={evmGasType:gt.EVMGasType.Type2,gasEstimate:m.gasEstimate,maxFeePerGas:50000000000n,maxPriorityFeePerGas:2000000000n};s({status:"generating_proof",currentStep:4,message:"Generating zero-knowledge proof (this may take a minute)..."});const x=y=>{s({status:"generating_proof",currentStep:4,message:`Generating proof: ${Math.round(y*100)}%`,proofProgress:{current:Math.round(y*100),total:100}})};try{await Ft.generateUnshieldProof(gt.TXIDVersion.V2_PoseidonMerkle,a,r,d,[f],[],c,0n,!1,x)}catch(y){throw console.error("[RAILGUN] Proof generation error:",y),new Error("Failed to generate unshield proof")}s({status:"unshielding",currentStep:5,message:"Building unshield transaction..."});const v=await Ft.populateProvedUnshield(gt.TXIDVersion.V2_PoseidonMerkle,a,r,[f],[],c,0n,!1,u);if(!gt.isDefined(v)||!gt.isDefined(v.transaction))throw new Error("Failed to populate unshield transaction");s({status:"unshielding",currentStep:5,message:"Submitting unshield transaction..."});const g=await n.sendTransaction({to:v.transaction.to,data:v.transaction.data,value:v.transaction.value??0n,gasLimit:u.gasEstimate,maxFeePerGas:u.maxFeePerGas,maxPriorityFeePerGas:u.maxPriorityFeePerGas});s({status:"unshielding",currentStep:5,txHash:g.hash,message:"Waiting for confirmation..."});const p=await g.wait();if(!p||p.status!==1)throw new Error("Unshield transaction failed");return s({status:"completed",currentStep:5,unshieldTxHash:g.hash,message:"Unshield completed successfully!"}),console.log("[RAILGUN] Unshield successful:",g.hash),{success:!0,txHash:g.hash}}catch(a){const o=a instanceof Error?a.message:"Unknown error";return console.error("[RAILGUN] Unshield failed:",o),s({status:"failed",error:o,message:`Unshield failed: ${o}`}),{success:!1,error:o}}}async function qf(n){const e=await n.getAddress();return Vo(cu(`liquyn_railgun_encryption_${e.toLowerCase()}`))}async function Yf(n,e,t,i,r=!1){try{const s=await Wf(n,e,i);if(!s.success)return{success:!1,error:s.error||"Shield operation failed"};if(!r){const l=Ou(e.networkName).recommendedWaitTime;i({status:"waiting",currentStep:4,totalSteps:5,shieldTxHash:s.txHash,waitTimeRemaining:l,estimatedCompletion:Date.now()+l*1e3,message:`Waiting for anonymity set (${Math.ceil(l/60)} min)...`});const c=Date.now();for(;Date.now()-c<l*1e3;){const f=(Date.now()-c)/1e3,d=Math.max(0,Math.ceil(l-f));i({status:"waiting",currentStep:4,totalSteps:5,shieldTxHash:s.txHash,waitTimeRemaining:d,estimatedCompletion:Date.now()+d*1e3,message:`Building anonymity set... ${d}s remaining`}),await $f(1e3)}}const a=await Xf(n,t,i);return a.success?(i({status:"completed",currentStep:5,totalSteps:5,shieldTxHash:s.txHash,unshieldTxHash:a.txHash,message:"Privacy operation completed!"}),{success:!0,shieldTxHash:s.txHash,unshieldTxHash:a.txHash}):{success:!1,shieldTxHash:s.txHash,error:a.error||"Unshield operation failed"}}catch(s){const a=s instanceof Error?s.message:"Unknown error";return i({status:"failed",currentStep:0,totalSteps:5,error:a,message:`Privacy operation failed: ${a}`}),{success:!1,error:a}}}function $f(n){return new Promise(e=>setTimeout(e,n))}function Zf({fromChainId:n,fromTokenAddress:e,toTokenAddress:t,amount:i,slippage:r=.5,privacyEnabled:s,enabled:a=!0}){const{address:o}=Kn(),l=Na({queryKey:["standard-routes",n,e,t,i,o,r],queryFn:async()=>!n||!e||!o||!i||i==="0"?[]:(await gs(n,e,t,i,o,r)).map(m=>({...m,isPrivate:!1})),enabled:a&&!!n&&!!e&&!!o&&!!i&&i!=="0",staleTime:3e4,refetchInterval:3e4,retry:1}),c=Na({queryKey:["privacy-routes",n,e,t,i,o,r],queryFn:async()=>{if(!n||!e||!o||!i||i==="0")return[];const d=ff(Wo(n)?n:void 0),m=Ou(d),u=pf(d);let x=[];if(n!==d){const y=Jf(d);x=await gs(n,e,y,i,o,r)}const v=x[0]||await Qf(d,e,t,i,o,r);if(!v)return[];const g=Au().map(y=>({...y,status:"pending"}));return[{...v,isPrivate:!0,privacyChainId:d,privacyChainName:u,shieldFeeUSD:m.shieldFeeUSD,unshieldFeeUSD:m.unshieldFeeUSD,privacyFeeUSD:m.totalFeeUSD,recommendedWaitTime:m.recommendedWaitTime,estimatedTime:v.estimatedTime+m.totalEstimatedTime,gasCostUSD:(parseFloat(v.gasCostUSD)+parseFloat(m.totalFeeUSD)).toFixed(2),gasCost:(parseFloat(v.gasCost)+parseFloat(m.totalFeeUSD)).toFixed(2),privacySteps:g}]},enabled:a&&s&&!!n&&!!e&&!!o&&!!i&&i!=="0",staleTime:3e4,refetchInterval:3e4,retry:1}),f=ae.useMemo(()=>{const d=l.data||[],m=c.data||[];return[...d,...m]},[l.data,c.data]);return{standardRoutes:l.data||[],privacyRoutes:c.data||[],allRoutes:f,isLoading:l.isLoading||s&&c.isLoading,isFetched:l.isFetched&&(!s||c.isFetched),error:l.error||c.error||null,refetch:()=>{l.refetch(),s&&c.refetch()}}}function Kf(){const{address:n}=Kn(),{data:e}=Ts(),[t,i]=ae.useState({status:"idle",currentStepId:null,steps:[],overallProgress:0}),r=ae.useCallback(async()=>{if(!e)return null;try{return await new uu(e.transport).getSigner()}catch(o){return console.error("[Privacy] Failed to get signer:",o),null}},[e]),s=ae.useCallback(()=>{i({status:"idle",currentStepId:null,steps:[],overallProgress:0})},[]),a=ae.useCallback(async(o,l)=>{if(!n)return i(u=>({...u,status:"failed",error:"Wallet not connected"})),!1;if(!$n())return i(u=>({...u,status:"failed",error:"RAILGUN engine not initialized. Please wait or refresh the page."})),!1;if(!Xo())return i(u=>({...u,status:"failed",error:"RAILGUN wallet not ready. Please enable privacy mode first."})),!1;const c=await r();if(!c)return i(u=>({...u,status:"failed",error:"Could not get wallet signer"})),!1;const f=Au().map(u=>({...u,status:"pending"}));i({status:"executing",currentStepId:"bridge_to_railgun",steps:f,overallProgress:0});try{d("bridge_to_railgun","in_progress"),await Hl(1e3),d("bridge_to_railgun","completed");const u=Rs(o.privacyChainId),x={networkName:u,tokenAddress:o.fromToken.address,tokenDecimals:o.fromToken.decimals,amount:BigInt(o.fromAmount),fromAddress:n},v={networkName:u,tokenAddress:o.toToken.address,tokenDecimals:o.toToken.decimals,amount:BigInt(o.toAmount),toAddress:l||n,walletId:""},g=await Yf(c,x,v,p=>{m(p)},!1);if(!g.success)throw new Error(g.error||"Privacy operation failed");return d("bridge_to_hyperliquid","in_progress"),await Hl(2e3),d("bridge_to_hyperliquid","completed"),i(p=>({...p,status:"completed",currentStepId:null,overallProgress:100,shieldTxHash:g.shieldTxHash,unshieldTxHash:g.unshieldTxHash})),!0}catch(u){const x=u instanceof Error?u.message:"Unknown error";return i(v=>({...v,status:"failed",error:x})),!1}function d(u,x,v){i(g=>{const p=g.steps.map(S=>S.id===u?{...S,status:x,txHash:v}:S),y=p.filter(S=>S.status==="completed").length,M=Math.round(y/p.length*100);return{...g,steps:p,currentStepId:x==="in_progress"?u:g.currentStepId,overallProgress:M}})}function m(u){u.status==="shielding"||u.status==="preparing"||u.status==="awaiting_approval"||u.status==="generating_proof"?d("shield","in_progress",u.txHash):u.status==="shielded"||u.status==="waiting"?(d("shield","completed",u.shieldTxHash),d("wait","in_progress"),u.waitTimeRemaining!==void 0&&i(x=>({...x,steps:x.steps.map(v=>v.id==="wait"?{...v,estimatedTime:u.waitTimeRemaining}:v)}))):u.status==="unshielding"?(d("wait","completed"),d("unshield","in_progress")):u.status==="completed"&&d("unshield","completed",u.unshieldTxHash)}},[n,r]);return{executionState:t,executePrivacyRoute:a,reset:s,isExecuting:t.status==="executing"}}function Jf(n){const e={1:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",137:"0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",42161:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",56:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"};return e[n]||e[42161]}async function Qf(n,e,t,i,r,s){try{return(await gs(n,e,t,i,r,s))[0]||null}catch{return null}}function Hl(n){return new Promise(e=>setTimeout(e,n))}function Oi(n){return"isPrivate"in n&&n.isPrivate===!0}function ep({quote:n,isLoading:e,error:t}){if(e)return h.jsx(me.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-dark-800/50 border border-dark-400/30 rounded-2xl p-5",children:h.jsxs("div",{className:"flex items-center justify-center gap-3 py-6",children:[h.jsx(Vt,{className:"w-5 h-5 text-accent animate-spin"}),h.jsx("span",{className:"text-white/50",children:"Finding best route..."})]})});if(t)return h.jsx(me.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-dark-800/50 border border-error/20 rounded-2xl p-5",children:h.jsxs("div",{className:"flex items-center gap-3 text-error",children:[h.jsx(fs,{className:"w-5 h-5 flex-shrink-0"}),h.jsx("span",{className:"text-sm",children:t})]})});if(!n)return null;const i=Xn(Number(n.toAmount)/Math.pow(10,n.toToken.decimals),4),r=Oi(n),s=r?n:null;return h.jsxs(me.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`bg-dark-800/50 border rounded-2xl overflow-hidden ${r?"border-purple-500/30":"border-dark-400/30"}`,children:[r&&h.jsxs("div",{className:"px-5 py-2.5 bg-purple-500/10 border-b border-purple-500/20 flex items-center gap-2",children:[h.jsx($t,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"text-sm font-medium text-purple-400",children:"Privacy Route via Railgun"}),h.jsx("span",{className:"text-xs text-purple-400/60 ml-auto",children:s?.privacyChainName})]}),h.jsxs("div",{className:"p-5 border-b border-dark-400/20",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsx("span",{className:"text-sm text-white/50",children:"You will receive"}),h.jsxs("div",{className:"flex items-center gap-1 text-xs text-white/40",children:[h.jsx(mi,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["~",Fi(n.estimatedTime)]})]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:n.toToken.logo,alt:n.toToken.symbol,className:"w-9 h-9 rounded-full",onError:a=>{a.target.src="https://via.placeholder.com/36"}}),h.jsxs("div",{children:[h.jsxs("div",{className:"text-xl sm:text-2xl font-semibold text-white",children:[i," ",h.jsx("span",{className:"text-accent",children:n.toToken.symbol})]}),h.jsx("div",{className:"text-sm text-white/40",children:"on Hyperliquid"})]})]})]}),h.jsxs("div",{className:"p-5 border-b border-dark-400/20",children:[h.jsx("h4",{className:"text-sm text-white/50 mb-3",children:"Route"}),h.jsx(qh,{steps:n.steps})]}),h.jsxs("div",{className:"p-5 space-y-2.5",children:[h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[h.jsx(Fo,{className:"w-4 h-4"}),h.jsx("span",{children:"Gas"})]}),h.jsx("span",{className:"text-white",children:Tl(parseFloat(n.gasCostUSD))})]}),h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2 text-white/50",children:[h.jsx(Cd,{className:"w-4 h-4"}),h.jsx("span",{children:"Slippage"})]}),h.jsxs("span",{className:"text-white",children:[n.slippage,"%"]})]}),r&&s&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"my-3 border-t border-purple-500/20"}),h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2 text-purple-400/70",children:[h.jsx($t,{className:"w-4 h-4"}),h.jsx("span",{children:"Privacy Fees"})]}),h.jsx("span",{className:"text-purple-400",children:Tl(parseFloat(s.privacyFeeUSD))})]}),h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2 text-purple-400/70",children:[h.jsx(Kc,{className:"w-4 h-4"}),h.jsx("span",{children:"Anonymity Wait"})]}),h.jsx("span",{className:"text-purple-400",children:Fi(s.recommendedWaitTime)})]})]})]})]})}const tp={idle:{icon:mi,color:"text-white/50",bgColor:"bg-dark-600",message:"Ready to execute"},pending:{icon:Vt,color:"text-accent",bgColor:"bg-accent/10",message:"Preparing transaction...",animate:!0},signing:{icon:Oo,color:"text-warning",bgColor:"bg-warning/10",message:"Confirm in your wallet",subMessage:"Review and approve the transaction"},processing:{icon:Vt,color:"text-accent",bgColor:"bg-accent/10",message:"Bridging to Hyperliquid...",subMessage:"Your tokens are being transferred",animate:!0},completed:{icon:br,color:"text-accent",bgColor:"bg-accent/10",message:"Bridge complete!",subMessage:"Your tokens have arrived"},failed:{icon:yr,color:"text-error",bgColor:"bg-error/10",message:"Transaction failed",subMessage:"Please try again"}};function np({step:n,index:e,stepStatus:t,totalSteps:i}){const r=Vi[n.fromChain],s=Vi[n.toChain],a=()=>{if(t.startTime&&t.endTime)return Fi(Math.round((t.endTime-t.startTime)/1e3));if(t.startTime&&t.status==="active"){const o=Math.round((Date.now()-t.startTime)/1e3);return`${Fi(o)}...`}return`~${Fi(n.estimatedTime)}`};return h.jsxs(me.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:e*.1},className:Ne("relative flex items-start gap-3 p-3 rounded-xl transition-all duration-300",t.status==="active"&&"bg-accent/5 border border-accent/20",t.status==="complete"&&"bg-accent/5",t.status==="failed"&&"bg-error/5 border border-error/20",t.status==="pending"&&"opacity-50"),children:[h.jsxs("div",{className:"flex flex-col items-center",children:[h.jsx("div",{className:Ne("w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium",t.status==="complete"&&"bg-accent/20 text-accent",t.status==="active"&&"bg-accent/20 text-accent",t.status==="failed"&&"bg-error/20 text-error",t.status==="pending"&&"bg-dark-600 text-white/50"),children:t.status==="complete"?h.jsx(br,{className:"w-4 h-4"}):t.status==="active"?h.jsx(Vt,{className:"w-4 h-4 animate-spin"}):t.status==="failed"?h.jsx(yr,{className:"w-4 h-4"}):e+1}),e<i-1&&h.jsx("div",{className:Ne("w-0.5 h-8 mt-1",t.status==="complete"?"bg-accent/40":"bg-dark-500")})]}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("span",{className:"text-xs font-medium text-white/50 uppercase tracking-wide",children:n.type==="swap"?"Swap":n.type==="bridge"?"Bridge":"Cross-chain"}),h.jsxs("span",{className:"text-xs text-white/30",children:["via ",n.tool]})]}),h.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[r&&h.jsx("img",{src:r.logo,alt:r.name,className:"w-4 h-4 rounded-full",onError:o=>{o.target.style.display="none"}}),h.jsx("span",{className:"text-white/70",children:n.fromToken.symbol})]}),h.jsx(zi,{className:"w-3 h-3 text-white/30"}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[s&&h.jsx("img",{src:s.logo,alt:s.name,className:"w-4 h-4 rounded-full",onError:o=>{o.target.style.display="none"}}),h.jsx("span",{className:"text-white/70",children:n.toToken.symbol})]})]}),h.jsxs("div",{className:"flex items-center gap-3 mt-1.5 text-xs text-white/40",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx(mi,{className:"w-3 h-3"}),h.jsx("span",{children:a()})]}),t.txHash&&h.jsxs("a",{href:`https://explorer.hyperliquid.xyz/tx/${t.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-accent hover:text-accent/80 transition-colors",title:"View on HyperEVM Explorer",children:[h.jsxs("span",{className:"font-mono",children:[t.txHash.slice(0,6),"...",t.txHash.slice(-4)]}),h.jsx(Gi,{className:"w-3 h-3"})]})]})]})]})}function ip({status:n,steps:e,stepStatuses:t,onClose:i,onRetry:r}){const s=tp[n.status],a=s.icon,o=t||(e||[]).map((l,c)=>c<n.currentStep?{status:"complete"}:c===n.currentStep&&(n.status==="processing"||n.status==="signing")?{status:"active",startTime:Date.now()}:{status:"pending"});return h.jsx(rn,{children:n.status!=="idle"&&h.jsxs(me.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5",children:[h.jsxs("div",{className:"flex items-center gap-4 mb-5 pb-4 border-b border-dark-400/20",children:[h.jsx("div",{className:Ne("w-12 h-12 rounded-full flex items-center justify-center",s.bgColor),children:h.jsx(a,{className:Ne("w-6 h-6",s.color,s.animate&&"animate-spin")})}),h.jsxs("div",{className:"flex-1",children:[h.jsx("p",{className:Ne("font-semibold text-lg",s.color),children:s.message}),s.subMessage&&h.jsx("p",{className:"text-sm text-white/50",children:s.subMessage}),n.totalSteps>0&&!s.subMessage&&h.jsxs("p",{className:"text-sm text-white/40",children:["Step ",Math.min(n.currentStep+1,n.totalSteps)," of ",n.totalSteps]})]})]}),e&&e.length>0&&h.jsx("div",{className:"space-y-1 mb-5",children:e.map((l,c)=>h.jsx(np,{step:l,index:c,stepStatus:o[c]||{status:"pending"},totalSteps:e.length},c))}),(!e||e.length===0)&&n.totalSteps>0&&h.jsxs("div",{className:"mb-5",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs text-white/40 mb-2",children:[h.jsx("span",{children:"Progress"}),h.jsxs("span",{children:[n.currentStep," / ",n.totalSteps]})]}),h.jsx("div",{className:"h-2 bg-dark-600 rounded-full overflow-hidden",children:h.jsx(me.div,{initial:{width:0},animate:{width:`${n.currentStep/n.totalSteps*100}%`},className:Ne("h-full rounded-full",n.status==="completed"?"bg-accent":"bg-accent/70")})})]}),n.error&&h.jsx(me.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"p-3 bg-error/10 border border-error/30 rounded-xl mb-4",children:h.jsx("p",{className:"text-sm text-error",children:n.error})}),n.txHash&&h.jsxs("div",{className:"flex items-center justify-between p-3 bg-dark-700 rounded-xl text-sm mb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-white/40",children:"Transaction:"}),h.jsxs("code",{className:"text-accent font-mono text-xs",children:[n.txHash.slice(0,10),"...",n.txHash.slice(-8)]})]}),h.jsxs("a",{href:`https://explorer.hyperliquid.xyz/tx/${n.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-accent hover:text-accent/80 transition-colors",children:[h.jsx("span",{className:"text-xs",children:"View"}),h.jsx(Gi,{className:"w-3.5 h-3.5"})]})]}),h.jsxs("div",{className:"flex gap-3",children:[n.status==="failed"&&r&&h.jsxs("button",{onClick:r,className:"flex-1 flex items-center justify-center gap-2 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-xl transition-colors",children:[h.jsx(ko,{className:"w-4 h-4"}),"Retry"]}),(n.status==="completed"||n.status==="failed")&&i&&h.jsx("button",{onClick:i,className:Ne("py-3 font-medium rounded-xl transition-colors",n.status==="failed"&&r?"flex-1 bg-dark-600 hover:bg-dark-500 text-white":"w-full bg-accent hover:bg-accent/90 text-dark-900"),children:n.status==="completed"?"Done":"Close"})]})]})})}const rp={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}},exit:{opacity:0,transition:{staggerChildren:.05,staggerDirection:-1}}},sp={hidden:{opacity:0,y:20,scale:.95},show:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:400,damping:28}},exit:{opacity:0,y:-10,scale:.95,filter:"blur(4px)",transition:{duration:.2}}};function ap(n){if(n.length===0)return{recommended:null,fastest:null,cheapest:null};const e=n[0],t=[...n].sort((r,s)=>r.estimatedTime-s.estimatedTime)[0],i=[...n].sort((r,s)=>{const a=parseFloat(r.gasCostUSD||"0"),o=parseFloat(s.gasCostUSD||"0");return a-o})[0];return{recommended:e,fastest:t,cheapest:i}}function op({type:n}){const e={recommended:{icon:Nd,label:"Best",color:"text-accent bg-accent/10"},fastest:{icon:Jc,label:"Fastest",color:"text-yellow-400 bg-yellow-400/10"},cheapest:{icon:Fo,label:"Cheapest",color:"text-blue-400 bg-blue-400/10"},private:{icon:$t,label:"Private",color:"text-purple-400 bg-purple-400/10"}},{icon:t,label:i,color:r}=e[n];return h.jsxs(me.span,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},className:Ne("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",r),children:[h.jsx(t,{className:"w-3 h-3"}),i]})}function lp({route:n,isSelected:e,onSelect:t,tags:i}){const r=Oi(n),s=r?n:null,a=n.steps.map(c=>({name:c.tool,logo:c.toolLogo,type:c.type})),o=parseFloat(n.toAmount)/Math.pow(10,n.toToken.decimals),l=parseFloat(n.fromAmount)/Math.pow(10,n.fromToken.decimals);return h.jsxs(me.button,{layout:!0,layoutId:`route-${n.id}`,variants:sp,whileHover:{scale:1.015,boxShadow:e?r?"0 0 30px rgba(168, 85, 247, 0.2)":"0 0 30px rgba(74, 222, 128, 0.2)":"0 0 20px rgba(255, 255, 255, 0.05)"},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:25,layout:{type:"spring",stiffness:300,damping:30}},onClick:t,className:Ne("w-full p-4 rounded-xl border text-left",e?r?"bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/5":"bg-accent/10 border-accent/40 shadow-lg shadow-accent/5":r?"bg-dark-700/50 border-purple-500/20 hover:border-purple-500/40":"bg-dark-700/50 border-dark-400/30 hover:border-dark-300/50"),children:[h.jsx(rn,{mode:"popLayout",children:i.length>0&&h.jsx(me.div,{layout:!0,className:"flex flex-wrap gap-1.5 mb-3",children:i.map(c=>h.jsx(op,{type:c},c))})}),h.jsxs(me.div,{layout:!0,className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(me.img,{src:n.fromToken.logo,alt:n.fromToken.symbol,className:"w-6 h-6 rounded-full",onError:c=>{c.target.src="https://via.placeholder.com/24"},whileHover:{scale:1.1}}),h.jsxs("span",{className:"font-medium text-white",children:[Xn(l)," ",n.fromToken.symbol]}),h.jsx(me.div,{animate:{x:[0,4,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:h.jsx(zi,{className:"w-4 h-4 text-white/40"})}),h.jsx(me.img,{src:n.toToken.logo,alt:n.toToken.symbol,className:"w-6 h-6 rounded-full",onError:c=>{c.target.src="https://via.placeholder.com/24"},whileHover:{scale:1.1}}),h.jsxs("span",{className:"font-semibold text-accent",children:[Xn(o)," ",n.toToken.symbol]})]}),h.jsx(rn,{mode:"wait",children:e&&h.jsx(me.div,{initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:0,rotate:180},transition:{type:"spring",stiffness:500,damping:25},children:h.jsx(Es,{className:"w-5 h-5 text-accent"})})})]}),h.jsxs(me.div,{layout:!0,className:"flex items-center gap-4 text-sm text-white/50",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(mi,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:Fi(n.estimatedTime)})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(Fo,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["$",Xn(parseFloat(n.gasCostUSD||"0"),2)," gas"]})]}),r&&s&&h.jsxs(me.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"flex items-center gap-1.5 text-purple-400/70",children:[h.jsx($t,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["via ",s.privacyChainName]})]})]}),h.jsx(me.div,{layout:!0,className:"mt-3 pt-3 border-t border-dark-400/20",children:h.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[h.jsx("span",{className:"text-xs text-white/30",children:"Via:"}),a.map((c,f)=>h.jsxs(me.div,{className:"flex items-center gap-1.5 px-2 py-1 bg-dark-600/50 rounded-lg",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:f*.05},whileHover:{scale:1.05,backgroundColor:"rgba(255,255,255,0.1)"},children:[c.logo&&h.jsx("img",{src:c.logo,alt:c.name,className:"w-4 h-4 rounded-full",onError:d=>{d.target.style.display="none"}}),h.jsx("span",{className:"text-xs text-white/70",children:c.name}),h.jsx("span",{className:Ne("text-[10px] px-1 rounded",c.type==="swap"?"bg-blue-500/20 text-blue-300":c.type==="bridge"?"bg-purple-500/20 text-purple-300":"bg-accent/20 text-accent"),children:c.type})]},f))]})})]})}function cp({routes:n,selectedRoute:e,onSelectRoute:t,isLoading:i}){if(i)return h.jsx(me.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{type:"spring",stiffness:300,damping:25},className:"bg-dark-800/80 border border-dark-400/30 rounded-2xl p-6",children:h.jsxs("div",{className:"flex items-center justify-center gap-3 text-white/50",children:[h.jsx(me.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:h.jsx(Vt,{className:"w-5 h-5"})}),h.jsx(me.span,{animate:{opacity:[.5,1,.5]},transition:{duration:1.5,repeat:1/0},children:"Finding best routes..."})]})});if(n.length===0)return null;const{recommended:r,fastest:s,cheapest:a}=ap(n),o=l=>{const c=[];return Oi(l)&&c.push("private"),l.id===r?.id&&c.push("recommended"),l.id===s?.id&&s?.id!==r?.id&&c.push("fastest"),l.id===a?.id&&a?.id!==r?.id&&a?.id!==s?.id&&c.push("cheapest"),c};return h.jsxs(me.div,{layout:!0,initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.98},transition:{type:"spring",stiffness:300,damping:25},className:"bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5 overflow-hidden",children:[h.jsxs(me.div,{layout:!0,className:"flex items-center justify-between mb-4",children:[h.jsxs(me.h3,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},className:"text-sm font-medium text-white/70",children:[n.length," Route",n.length!==1?"s":""," Found"]},n.length),h.jsx("span",{className:"text-xs text-white/40",children:"Select the best route for you"})]}),h.jsx(me.div,{variants:rp,initial:"hidden",animate:"show",exit:"exit",className:"space-y-3",children:h.jsx(rn,{mode:"popLayout",children:n.slice(0,5).map(l=>h.jsx(lp,{route:l,isSelected:e?.id===l.id,onSelect:()=>t(l),tags:o(l)},l.id))})}),h.jsx(rn,{children:n.length>5&&h.jsxs(me.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"text-center text-xs text-white/30 mt-3",children:["+ ",n.length-5," more routes available"]})})]})}const jl=[.5,1,3],Wl=.1,Ur=50,up=5,dp=.5;function hp({slippage:n,onSlippageChange:e}){const[t,i]=ae.useState(!1),[r,s]=ae.useState(""),[a,o]=ae.useState(!1),l=ae.useRef(null),c=ae.useRef(null),f=jl.includes(n);ae.useEffect(()=>{f||(s(n.toString()),o(!0))},[n,f]),ae.useEffect(()=>{const g=p=>{l.current&&c.current&&!l.current.contains(p.target)&&!c.current.contains(p.target)&&i(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]);const d=g=>{o(!1),s(""),e(g)},m=g=>{if(g===""||/^\d*\.?\d*$/.test(g)){s(g),o(!0);const p=parseFloat(g);!isNaN(p)&&p>=Wl&&p<=Ur&&e(p)}},u=()=>{const g=parseFloat(r);isNaN(g)||g<Wl?(s(""),o(!1),e(.5)):g>Ur&&(s(Ur.toString()),e(Ur))},x=n>up,v=n<dp;return h.jsxs("div",{className:"relative",children:[h.jsxs("button",{ref:c,onClick:()=>i(!t),className:Ne("flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200","hover:bg-dark-600 active:scale-95",t&&"bg-dark-600",x&&"text-warning"),children:[h.jsx(Pd,{className:Ne("w-4 h-4",t&&"rotate-90 transition-transform")}),h.jsxs("span",{className:"text-sm font-medium",children:[n,"%"]}),x&&h.jsx(pr,{className:"w-3.5 h-3.5"})]}),h.jsx(rn,{children:t&&h.jsxs(me.div,{ref:l,initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.15},className:Ne("absolute right-0 top-full mt-2 z-50","w-72 p-4","bg-dark-800 border border-dark-400/30 rounded-xl","shadow-xl shadow-black/20"),children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h3",{className:"text-sm font-semibold text-white",children:"Slippage Tolerance"}),h.jsx("button",{onClick:()=>i(!1),className:"p-1 hover:bg-dark-600 rounded-lg transition-colors",children:h.jsx(Yc,{className:"w-4 h-4 text-white/50"})})]}),h.jsx("p",{className:"text-xs text-white/50 mb-4",children:"Your transaction will revert if the price changes unfavorably by more than this percentage."}),h.jsx("div",{className:"flex gap-2 mb-4",children:jl.map(g=>h.jsxs("button",{onClick:()=>d(g),className:Ne("flex-1 py-2.5 rounded-lg text-sm font-medium transition-all","active:scale-95",n===g&&!a?"bg-accent text-dark-900":"bg-dark-600 text-white/70 hover:bg-dark-500"),children:[g,"%"]},g))}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-xs text-white/50",children:"Custom"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"text",inputMode:"decimal",placeholder:"0.5",value:r,onChange:g=>m(g.target.value),onBlur:u,onFocus:()=>o(!0),className:Ne("w-full px-4 py-3 pr-12","bg-dark-700 border rounded-xl","text-white placeholder-white/30","focus:outline-none transition-colors",a&&r?"border-accent/40 focus:border-accent":"border-dark-400/30 focus:border-dark-300/50")}),h.jsx("span",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-white/50",children:"%"}),a&&r&&h.jsx(Es,{className:"absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-accent"})]})]}),h.jsxs(rn,{children:[x&&h.jsx(me.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-4",children:h.jsxs("div",{className:"flex items-start gap-2 p-3 bg-warning/10 border border-warning/30 rounded-lg",children:[h.jsx(pr,{className:"w-4 h-4 text-warning flex-shrink-0 mt-0.5"}),h.jsxs("div",{className:"text-xs",children:[h.jsx("span",{className:"font-medium text-warning",children:"High slippage warning"}),h.jsx("p",{className:"text-warning/70 mt-0.5",children:"Your transaction may be frontrun and result in an unfavorable swap."})]})]})}),v&&h.jsx(me.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-4",children:h.jsxs("div",{className:"flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg",children:[h.jsx(pr,{className:"w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5"}),h.jsxs("div",{className:"text-xs",children:[h.jsx("span",{className:"font-medium text-blue-400",children:"Low slippage"}),h.jsx("p",{className:"text-blue-400/70 mt-0.5",children:"Your transaction may fail due to small price fluctuations."})]})]})})]}),h.jsx("div",{className:"mt-4 pt-4 border-t border-dark-400/20",children:h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-white/40",children:"Current setting"}),h.jsxs("span",{className:Ne("font-medium",x?"text-warning":"text-accent"),children:[n,"% slippage"]})]})})]})})]})}const Xl=[{icon:h.jsx(mi,{className:"w-4 h-4"}),label:"Time",standard:"2-10 min",private:"15-60+ min",highlight:"negative"},{icon:h.jsx(eu,{className:"w-4 h-4"}),label:"Fees",standard:"Lower",private:"Higher (~2x)",highlight:"negative"},{icon:h.jsx(tu,{className:"w-4 h-4"}),label:"Traceability",standard:"Full on-chain",private:"Broken",highlight:"positive"},{icon:h.jsx(Ld,{className:"w-4 h-4"}),label:"Steps",standard:"1-2",private:"4-5",highlight:"neutral"}];function fp({enabled:n,onToggle:e,disabled:t,disabledReason:i}){const[r,s]=ae.useState(!1),[a,o]=ae.useState(!1),l=()=>{t||(n?e(!1):o(!0))},c=()=>{e(!0),o(!1)},f=t?i||"Privacy mode is currently unavailable":n?"Switch to standard mode":"Enable privacy mode";return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:()=>s(!0),className:"p-1.5 hover:bg-dark-600 rounded-lg transition-colors",title:"Learn about Privacy Mode",children:h.jsx(Qc,{className:"w-4 h-4 text-white/40 hover:text-white/60"})}),h.jsxs("button",{onClick:l,disabled:t,title:f,className:Ne("flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200","active:scale-95",t&&"opacity-50 cursor-not-allowed",n?"bg-purple-500/20 border border-purple-500/40 text-purple-400":"bg-dark-600 hover:bg-dark-500 text-white/70"),children:[n?h.jsx($t,{className:"w-4 h-4"}):h.jsx(Bo,{className:"w-4 h-4"}),h.jsx("span",{className:"text-sm font-medium",children:n?"Private":"Standard"})]})]}),h.jsx(Hi,{isOpen:r,onClose:()=>s(!1),title:"Privacy Mode",children:h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl",children:[h.jsx($t,{className:"w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-medium text-purple-400 mb-1",children:"What is Privacy Mode?"}),h.jsxs("p",{className:"text-sm text-white/60 leading-relaxed",children:["Privacy Mode routes your funds through ",h.jsx("span",{className:"text-purple-400 font-medium",children:"Railgun"}),", an EVM-based privacy protocol that uses zero-knowledge proofs to break the on-chain transaction link between your source and destination addresses."]})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-semibold text-white mb-3",children:"How it Works"}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(nr,{number:1,text:"Bridge from source chain to Railgun-supported chain"}),h.jsx(nr,{number:2,text:"Shield funds into Railgun private balance"}),h.jsx(nr,{number:3,text:"Wait for anonymity (recommended)"}),h.jsx(nr,{number:4,text:"Unshield to new address"}),h.jsx(nr,{number:5,text:"Bridge to Hyperliquid"})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-semibold text-white mb-3",children:"Trade-offs"}),h.jsxs("div",{className:"bg-dark-700/50 rounded-xl overflow-hidden border border-dark-400/20",children:[h.jsxs("div",{className:"grid grid-cols-3 gap-4 px-4 py-2.5 bg-dark-600/50 border-b border-dark-400/20",children:[h.jsx("span",{className:"text-xs font-medium text-white/40",children:"Aspect"}),h.jsx("span",{className:"text-xs font-medium text-white/40 text-center",children:"Standard"}),h.jsx("span",{className:"text-xs font-medium text-purple-400 text-center",children:"Private"})]}),Xl.map((d,m)=>h.jsxs("div",{className:Ne("grid grid-cols-3 gap-4 px-4 py-3",m!==Xl.length-1&&"border-b border-dark-400/10"),children:[h.jsxs("div",{className:"flex items-center gap-2 text-white/60",children:[d.icon,h.jsx("span",{className:"text-sm",children:d.label})]}),h.jsx("span",{className:"text-sm text-white/50 text-center",children:d.standard}),h.jsx("span",{className:Ne("text-sm text-center font-medium",d.highlight==="positive"&&"text-green-400",d.highlight==="negative"&&"text-yellow-400",d.highlight==="neutral"&&"text-white/70"),children:d.private})]},d.label))]})]}),h.jsxs("div",{className:"p-3 bg-dark-700/50 rounded-xl border border-dark-400/20",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[h.jsx(zo,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"text-sm font-medium text-white",children:"Supported Privacy Chains"})]}),h.jsxs("p",{className:"text-xs text-white/50",children:["Railgun is available on ",h.jsx("span",{className:"text-white/70",children:"Arbitrum"}),", ",h.jsx("span",{className:"text-white/70",children:"Polygon"}),",",h.jsx("span",{className:"text-white/70",children:" BSC"}),", and ",h.jsx("span",{className:"text-white/70",children:"Ethereum"}),". Your funds will automatically route through one of these chains."]})]}),h.jsx("button",{onClick:()=>s(!1),className:"w-full py-3 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors",children:"Got it"})]})}),h.jsx(Hi,{isOpen:a,onClose:()=>o(!1),title:"Enable Privacy Mode?",children:h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl",children:[h.jsx(pr,{className:"w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-medium text-yellow-400 mb-1",children:"Please Note"}),h.jsx("p",{className:"text-sm text-white/60 leading-relaxed",children:"Privacy Mode will increase transaction time and fees. Your funds will be routed through the Railgun protocol to break the on-chain link."})]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("div",{className:"p-3 bg-dark-700/50 rounded-xl border border-dark-400/20 text-center",children:[h.jsx(mi,{className:"w-5 h-5 text-yellow-400 mx-auto mb-1"}),h.jsx("span",{className:"text-xs text-white/40 block",children:"Est. Time"}),h.jsx("span",{className:"text-sm font-medium text-white",children:"15-60+ min"})]}),h.jsxs("div",{className:"p-3 bg-dark-700/50 rounded-xl border border-dark-400/20 text-center",children:[h.jsx(eu,{className:"w-5 h-5 text-yellow-400 mx-auto mb-1"}),h.jsx("span",{className:"text-xs text-white/40 block",children:"Extra Fees"}),h.jsx("span",{className:"text-sm font-medium text-white",children:"~2x gas"})]})]}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>o(!1),className:"flex-1 py-3 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors",children:"Cancel"}),h.jsxs("button",{onClick:c,className:"flex-1 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2",children:[h.jsx($t,{className:"w-4 h-4"}),"Enable Privacy"]})]})]})})]})}function nr({number:n,text:e}){return h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0",children:h.jsx("span",{className:"text-xs font-medium text-purple-400",children:n})}),h.jsx("span",{className:"text-sm text-white/60",children:e})]})}const pp={bridge_to_railgun:zi,shield:$t,wait:Kc,unshield:Bo,bridge_to_hyperliquid:zi},mp={bridge_to_railgun:{active:"Transferring to privacy chain...",complete:"Arrived on privacy chain"},shield:{active:"Shielding funds into private balance...",complete:"Funds shielded successfully"},wait:{active:"Building anonymity set...",complete:"Anonymity period complete"},unshield:{active:"Unshielding to new address...",complete:"Funds unshielded"},bridge_to_hyperliquid:{active:"Bridging to Hyperliquid...",complete:"Arrived on Hyperliquid"}};function gp({step:n,index:e,totalSteps:t}){const i=pp[n.id],r=mp[n.id];return h.jsxs(me.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:e*.1},className:Ne("relative flex items-start gap-3 p-3 rounded-xl transition-all duration-300",n.status==="in_progress"&&"bg-purple-500/10 border border-purple-500/30",n.status==="completed"&&"bg-purple-500/5",n.status==="failed"&&"bg-error/5 border border-error/20",n.status==="pending"&&"opacity-50"),children:[h.jsxs("div",{className:"flex flex-col items-center",children:[h.jsx("div",{className:Ne("w-10 h-10 rounded-full flex items-center justify-center",n.status==="completed"&&"bg-purple-500/20",n.status==="in_progress"&&"bg-purple-500/20",n.status==="failed"&&"bg-error/20",n.status==="pending"&&"bg-dark-600"),children:n.status==="completed"?h.jsx(br,{className:"w-5 h-5 text-purple-400"}):n.status==="in_progress"?h.jsx(Vt,{className:"w-5 h-5 text-purple-400 animate-spin"}):n.status==="failed"?h.jsx(yr,{className:"w-5 h-5 text-error"}):h.jsx(i,{className:"w-5 h-5 text-white/40"})}),e<t-1&&h.jsx("div",{className:Ne("w-0.5 h-6 mt-1",n.status==="completed"?"bg-purple-500/40":"bg-dark-500")})]}),h.jsxs("div",{className:"flex-1 min-w-0 pt-1",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("span",{className:Ne("text-sm font-medium",n.status==="completed"&&"text-purple-400",n.status==="in_progress"&&"text-purple-400",n.status==="failed"&&"text-error",n.status==="pending"&&"text-white/50"),children:n.label}),n.id==="shield"&&n.status==="completed"&&h.jsx(zo,{className:"w-3.5 h-3.5 text-purple-400"}),n.id==="unshield"&&n.status==="completed"&&h.jsx(tu,{className:"w-3.5 h-3.5 text-purple-400"})]}),h.jsx("p",{className:"text-xs text-white/40",children:n.status==="in_progress"?r.active:n.status==="completed"?r.complete:n.description}),n.id==="wait"&&n.status==="in_progress"&&n.estimatedTime!==void 0&&h.jsxs(me.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},className:"mt-2 flex items-center gap-2",children:[h.jsx(mi,{className:"w-3.5 h-3.5 text-purple-400"}),h.jsx("span",{className:"text-sm font-mono text-purple-400",children:n.estimatedTime>0?`${n.estimatedTime}s remaining`:"Almost done..."})]}),n.txHash&&h.jsx("div",{className:"flex items-center gap-2 mt-2",children:h.jsxs("a",{href:`https://arbiscan.io/tx/${n.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors",children:[h.jsxs("span",{className:"font-mono",children:[n.txHash.slice(0,8),"...",n.txHash.slice(-6)]}),h.jsx(Gi,{className:"w-3 h-3"})]})}),n.error&&h.jsx("p",{className:"text-xs text-error mt-1",children:n.error})]})]})}function xp({executionState:n,onClose:e,onRetry:t}){const{status:i,steps:r,overallProgress:s,error:a,shieldTxHash:o,unshieldTxHash:l}=n;if(i==="idle"||r.length===0)return null;const c={executing:{icon:Vt,color:"text-purple-400",bgColor:"bg-purple-500/10",message:"Privacy transaction in progress",animate:!0},completed:{icon:$t,color:"text-purple-400",bgColor:"bg-purple-500/10",message:"Privacy bridge complete!",animate:!1},failed:{icon:yr,color:"text-error",bgColor:"bg-error/10",message:"Privacy transaction failed",animate:!1},idle:{icon:Vt,color:"text-purple-400",bgColor:"bg-purple-500/10",message:"Preparing...",animate:!0}},f=c[i]||c.executing,d=f.icon;return h.jsx(rn,{children:h.jsxs(me.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"bg-dark-800/80 border border-purple-500/20 rounded-2xl p-5",children:[h.jsxs("div",{className:"flex items-center gap-4 mb-5 pb-4 border-b border-purple-500/20",children:[h.jsx("div",{className:Ne("w-12 h-12 rounded-full flex items-center justify-center",f.bgColor),children:h.jsx(d,{className:Ne("w-6 h-6",f.color,f.animate&&"animate-spin")})}),h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("p",{className:Ne("font-semibold text-lg",f.color),children:f.message}),h.jsx($t,{className:"w-4 h-4 text-purple-400"})]}),i==="executing"&&h.jsxs("p",{className:"text-sm text-white/40",children:[s,"% complete"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 mb-4 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg",children:[h.jsx(zo,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"text-sm text-purple-400",children:"Privacy Mode via Railgun"})]}),h.jsx("div",{className:"mb-5",children:h.jsx("div",{className:"h-2 bg-dark-600 rounded-full overflow-hidden",children:h.jsx(me.div,{initial:{width:0},animate:{width:`${s}%`},transition:{duration:.5},className:Ne("h-full rounded-full",i==="completed"?"bg-purple-500":"bg-purple-500/70")})})}),h.jsx("div",{className:"space-y-1 mb-5",children:r.map((m,u)=>h.jsx(gp,{step:m,index:u,totalSteps:r.length},m.id))}),(o||l)&&h.jsxs("div",{className:"p-3 bg-dark-700 rounded-xl mb-4 space-y-2",children:[o&&h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx($t,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"text-white/40",children:"Shield TX:"})]}),h.jsxs("a",{href:`https://arbiscan.io/tx/${o}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors",children:[h.jsxs("code",{className:"font-mono text-xs",children:[o.slice(0,8),"...",o.slice(-6)]}),h.jsx(Gi,{className:"w-3.5 h-3.5"})]})]}),l&&h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Bo,{className:"w-4 h-4 text-purple-400"}),h.jsx("span",{className:"text-white/40",children:"Unshield TX:"})]}),h.jsxs("a",{href:`https://arbiscan.io/tx/${l}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors",children:[h.jsxs("code",{className:"font-mono text-xs",children:[l.slice(0,8),"...",l.slice(-6)]}),h.jsx(Gi,{className:"w-3.5 h-3.5"})]})]})]}),a&&h.jsx(me.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"p-3 bg-error/10 border border-error/30 rounded-xl mb-4",children:h.jsx("p",{className:"text-sm text-error",children:a})}),h.jsxs("div",{className:"flex gap-3",children:[i==="failed"&&t&&h.jsxs("button",{onClick:t,className:"flex-1 flex items-center justify-center gap-2 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 font-medium rounded-xl transition-colors",children:[h.jsx(ko,{className:"w-4 h-4"}),"Retry"]}),(i==="completed"||i==="failed")&&e&&h.jsx("button",{onClick:e,className:Ne("py-3 font-medium rounded-xl transition-colors",i==="failed"&&t?"flex-1 bg-dark-600 hover:bg-dark-500 text-white":"w-full bg-purple-500 hover:bg-purple-600 text-white"),children:i==="completed"?"Done":"Close"})]})]})})}function vp({isOpen:n,onClose:e,onSwitch:t,fromChainName:i,fromChainLogo:r,currentChainName:s,isLoading:a}){return h.jsx(Hi,{isOpen:n,onClose:e,title:"Switch Network",children:h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl",children:[h.jsx(Cr,{className:"w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"}),h.jsxs("div",{children:[h.jsx("h4",{className:"font-medium text-yellow-400 mb-1",children:"Network Change Required"}),h.jsxs("p",{className:"text-sm text-white/60 leading-relaxed",children:["To bridge from ",h.jsx("span",{className:"text-yellow-400 font-medium",children:i}),", you need to switch your wallet to that network."]})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-semibold text-white mb-3",children:"Network Switch"}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"flex-1 p-3 bg-dark-700/50 rounded-xl border border-dark-400/20 text-center",children:[h.jsx("span",{className:"text-xs text-white/40 block mb-1",children:"Current"}),h.jsx("span",{className:"text-sm font-medium text-white/70",children:s||"Unknown"})]}),h.jsx("div",{className:"p-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg",children:h.jsx(Cr,{className:"w-4 h-4 text-yellow-400"})}),h.jsxs("div",{className:"flex-1 p-3 bg-dark-700/50 rounded-xl border border-yellow-500/30 text-center",children:[h.jsx("span",{className:"text-xs text-white/40 block mb-1",children:"Target"}),h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[r&&h.jsx("img",{src:r,alt:i,className:"w-4 h-4 rounded-full",onError:o=>{o.target.style.display="none"}}),h.jsx("span",{className:"text-sm font-medium text-yellow-400",children:i})]})]})]})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-semibold text-white mb-3",children:"What Happens"}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(Ys,{icon:h.jsx(Jc,{className:"w-4 h-4"}),text:"Your wallet will prompt you to switch networks"}),h.jsx(Ys,{icon:h.jsx(br,{className:"w-4 h-4"}),text:"Approve the network switch in your wallet"}),h.jsx(Ys,{icon:h.jsx(Cr,{className:"w-4 h-4"}),text:"You'll be ready to bridge from the selected chain"})]})]}),h.jsxs("div",{className:"p-3 bg-dark-700/50 rounded-xl border border-dark-400/20",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[h.jsx(pr,{className:"w-4 h-4 text-yellow-400"}),h.jsx("span",{className:"text-sm font-medium text-white",children:"Note"})]}),h.jsxs("p",{className:"text-xs text-white/50",children:["Make sure you have tokens on ",h.jsx("span",{className:"text-white/70",children:i})," to proceed with the bridge. You can always change your source chain if needed."]})]}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:e,className:"flex-1 py-3 bg-dark-600 hover:bg-dark-500 text-white font-medium rounded-xl transition-colors",children:"Cancel"}),h.jsx("button",{onClick:t,disabled:a,className:"flex-1 py-3 bg-yellow-500 hover:bg-yellow-600 text-dark-900 font-medium rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:a?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin"}),"Switching..."]}):h.jsxs(h.Fragment,{children:[h.jsx(Cr,{className:"w-4 h-4"}),"Switch Network"]})})]})]})})}function Ys({icon:n,text:e}){return h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center flex-shrink-0 text-yellow-400",children:n}),h.jsx("span",{className:"text-sm text-white/60",children:e})]})}const _p={hover:{type:"spring",stiffness:400,damping:25}};function as({variant:n="primary",size:e="md",isLoading:t=!1,className:i,children:r,disabled:s,...a}){const o={primary:"bg-accent text-dark-900 font-semibold",secondary:"bg-transparent border border-accent/30 text-accent font-medium",ghost:"bg-dark-600/50 border border-dark-400/30 text-white/80 font-medium"},l={sm:"px-3 py-2 text-sm rounded-lg",md:"px-5 py-2.5 text-base rounded-xl",lg:"px-6 py-3.5 text-base rounded-xl"},c={primary:"rgba(74, 222, 128, 0.4)",secondary:"rgba(74, 222, 128, 0.2)",ghost:"rgba(255, 255, 255, 0.1)"},f=s||t;return h.jsxs(me.button,{whileHover:f?void 0:{scale:1.02,boxShadow:`0 0 30px ${c[n]}`},whileTap:f?void 0:{scale:.97},transition:_p.hover,initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:Ne("relative inline-flex items-center justify-center gap-2","disabled:opacity-50 disabled:cursor-not-allowed","overflow-hidden",o[n],l[e],i),disabled:f,...a,children:[n==="primary"&&!f&&h.jsx(me.div,{className:"absolute inset-0 opacity-0",whileHover:{opacity:1},transition:{duration:.3},style:{background:"linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",backgroundSize:"200% 200%"},animate:{backgroundPosition:["0% 0%","200% 200%"]}}),h.jsxs(me.span,{className:"relative z-10 flex items-center gap-2",animate:t?{opacity:.7}:{opacity:1},children:[t&&h.jsx(me.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,rotate:360},transition:{opacity:{duration:.2},scale:{type:"spring",stiffness:500,damping:25},rotate:{duration:1,repeat:1/0,ease:"linear"}},children:h.jsx(Vt,{className:"w-4 h-4"})}),r]}),h.jsx(me.div,{className:"absolute inset-0 pointer-events-none",initial:{opacity:0},whileTap:{opacity:[0,.3,0],scale:[.8,1.2]},transition:{duration:.4},style:{background:"radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"}})]})}const Yo="0x6b9e773128f453f5c2c60935ee2de2cbc5390a24",$o="0xb88339CB7199b77E23DB6E890353E22632Ba630f",Zo=[{name:"approve",type:"function",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{name:"allowance",type:"function",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{name:"balanceOf",type:"function",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]}],yp=[{name:"depositUsdc",type:"function",inputs:[{name:"amount",type:"uint256"}],outputs:[]}];async function bp(n,e){try{return await n.readContract({address:$o,abi:Zo,functionName:"balanceOf",args:[e]})}catch{return BigInt(0)}}async function Sp(n,e,t){try{return await n.readContract({address:$o,abi:Zo,functionName:"allowance",args:[e,Yo]})>=t}catch{return!1}}async function Mp(n,e,t){try{const[i]=await n.getAddresses(),r=await n.writeContract({address:$o,abi:Zo,functionName:"approve",args:[Yo,t],account:i,chain:au});return await e.waitForTransactionReceipt({hash:r}),{success:!0,txHash:r}}catch(i){return{success:!1,error:i instanceof Error?i.message:"Approval failed"}}}async function wp(n,e,t,i){try{const[r]=await n.getAddresses(),s=su(t,6);i?.("checking","Checking USDC balance...");const a=await bp(e,r);if(a<s)return{success:!1,error:`Insufficient USDC balance. Have: ${Number(a)/1e6}, Need: ${t}`};if(i?.("checking","Checking approval..."),!await Sp(e,r,s)){i?.("approving","Approving USDC...");const c=await Mp(n,e,s);if(!c.success)return c}i?.("depositing","Depositing to Hyperliquid...");const l=await n.writeContract({address:Yo,abi:yp,functionName:"depositUsdc",args:[s],account:r,chain:au});return await e.waitForTransactionReceipt({hash:l}),i?.("completed","Deposit successful!"),{success:!0,txHash:l}}catch(r){const s=r instanceof Error?r.message:"Deposit failed";return i?.("failed",s),{success:!1,error:s}}}function Ep(){const{address:n}=Kn(),{data:e}=Ts(),t=ou({chainId:Yt}),[i,r]=ae.useState("idle"),[s,a]=ae.useState(""),[o,l]=ae.useState(null),[c,f]=ae.useState(null),d=ae.useCallback(async u=>{if(!e||!t||!n)return f("Wallet not connected"),r("failed"),!1;f(null),l(null),r("checking"),a("Initializing...");try{const x=await wp(e,t,u,(v,g)=>{r(v),g&&a(g)});return x.success?(l(x.txHash||null),r("completed"),a("Deposit successful!"),!0):(f(x.error||"Deposit failed"),r("failed"),a(x.error||"Deposit failed"),!1)}catch(x){const v=x instanceof Error?x.message:"Unknown error";return f(v),r("failed"),a(v),!1}},[e,t,n]),m=ae.useCallback(()=>{r("idle"),a(""),l(null),f(null)},[]);return{status:i,statusMessage:s,txHash:o,error:c,deposit:d,reset:m,isDepositing:i==="checking"||i==="approving"||i==="depositing"}}const Tp={idle:Oo,checking:Vt,approving:Vt,depositing:Vt,completed:br,failed:yr},ql={idle:"text-white/50",checking:"text-accent",approving:"text-warning",depositing:"text-accent",completed:"text-accent",failed:"text-error"},Ap={idle:"bg-dark-600",checking:"bg-accent/10",approving:"bg-warning/10",depositing:"bg-accent/10",completed:"bg-accent/10",failed:"bg-error/10"};function Rp({amount:n,isOpen:e=!1,onClose:t,onSuccess:i,onError:r,inline:s=!1,className:a,autoStart:o=!1}){const{isConnected:l}=Kn(),{status:c,statusMessage:f,txHash:d,error:m,deposit:u,reset:x,isDepositing:v}=Ep(),[g,p]=ae.useState(!1);ae.useEffect(()=>{o&&l&&!g&&c==="idle"&&y()},[o,l,g,c]),ae.useEffect(()=>{c==="completed"&&d?i?.(d):c==="failed"&&m&&r?.(m)},[c,d,m,i,r]);const y=async()=>{l&&(p(!0),await u(n))},M=()=>{x(),p(!1),t?.()},S=Tp[c],R=c==="checking"||c==="approving"||c==="depositing",T=h.jsxs("div",{className:Ne("space-y-5",a),children:[h.jsxs("div",{className:"text-center",children:[h.jsx("h3",{className:"text-lg font-semibold text-white mb-1",children:"Deposit to Hyperliquid"}),h.jsxs("p",{className:"text-sm text-white/50",children:["Deposit ",n," USDC to your trading account"]})]}),h.jsxs("div",{className:"flex flex-col items-center py-5",children:[h.jsx("div",{className:Ne("w-16 h-16 rounded-full flex items-center justify-center mb-3",Ap[c]),children:h.jsx(S,{className:Ne("w-8 h-8",ql[c],R&&"animate-spin")})}),h.jsx(rn,{mode:"wait",children:h.jsx(me.p,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},className:Ne("text-sm font-medium",ql[c]),children:f||"Ready to deposit"},f)})]}),h.jsxs("div",{className:"flex items-center justify-center gap-3 p-3 bg-dark-700/50 rounded-xl",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center",children:h.jsx(Oo,{className:"w-4 h-4 text-white/50"})}),h.jsx("span",{className:"text-sm text-white/70",children:"Wallet"})]}),h.jsx(zi,{className:Ne("w-4 h-4",c==="depositing"?"text-accent animate-pulse":"text-white/20")}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:"/assets/green.png",alt:"Hyperliquid",className:"w-8 h-8"}),h.jsx("span",{className:"text-sm text-white/70",children:"Trading"})]})]}),d&&h.jsxs("div",{className:"flex items-center justify-center gap-2 p-3 bg-accent/5 border border-accent/20 rounded-xl",children:[h.jsx("span",{className:"text-sm text-white/50",children:"Tx:"}),h.jsxs("code",{className:"text-sm text-accent font-mono",children:[d.slice(0,8),"...",d.slice(-6)]}),h.jsx("a",{href:`https://explorer.hyperliquid.xyz/tx/${d}`,target:"_blank",rel:"noopener noreferrer",className:"p-1 hover:bg-accent/10 rounded transition-colors",children:h.jsx(Gi,{className:"w-3.5 h-3.5 text-accent"})})]}),m&&h.jsxs("div",{className:"flex items-center gap-2 p-3 bg-error/5 border border-error/20 rounded-xl",children:[h.jsx(fs,{className:"w-4 h-4 text-error flex-shrink-0"}),h.jsx("span",{className:"text-sm text-error",children:m})]}),h.jsxs("div",{className:"space-y-2",children:[c==="idle"&&h.jsx(as,{onClick:y,disabled:!l||v,className:"w-full",size:"lg",children:l?"Deposit to Hyperliquid":"Connect Wallet First"}),(c==="completed"||c==="failed")&&h.jsxs("div",{className:"flex gap-2",children:[c==="failed"&&h.jsx(as,{onClick:()=>{x(),y()},variant:"primary",className:"flex-1",children:"Try Again"}),h.jsx(as,{onClick:M,variant:"ghost",className:"flex-1",children:c==="completed"?"Done":"Close"})]})]})]});return s?T:h.jsx(Hi,{isOpen:e,onClose:M,children:T})}function Cp({fromChainId:n,fromTokenAddress:e,toTokenAddress:t,amount:i,slippage:r=.5,enabled:s=!0}){const{address:a}=Kn();return Na({queryKey:["lifi-routes",n,e,t,i,a,r],queryFn:async()=>!n||!e||!a||!i||i==="0"?[]:await gs(n,e,t,i,a,r),enabled:s&&!!n&&!!e&&!!a&&!!i&&i!=="0"&&parseFloat(i)>0,staleTime:3e4,refetchInterval:3e4,retry:1})}const Np=[{patterns:[/insufficient funds/i,/insufficient balance/i,/not enough balance/i,/balance too low/i],code:"INSUFFICIENT_FUNDS",title:"Insufficient Balance",message:"You don't have enough tokens for this transaction.",action:"Try a smaller amount or add funds to your wallet.",isRetryable:!1},{patterns:[/insufficient.*gas/i,/gas required exceeds/i,/out of gas/i,/intrinsic gas too low/i],code:"INSUFFICIENT_GAS",title:"Not Enough Gas",message:"You don't have enough native tokens to pay for gas.",action:"Add more ETH/native tokens to your wallet for gas fees.",isRetryable:!1},{patterns:[/user rejected/i,/user denied/i,/user cancelled/i,/rejected by user/i,/action_rejected/i,/canceled/i],code:"USER_REJECTED",title:"Transaction Cancelled",message:"You rejected the transaction in your wallet.",action:"Click 'Bridge' again when you're ready to proceed.",isRetryable:!1},{patterns:[/slippage/i,/price impact too high/i,/price changed/i,/swap failed.*price/i,/min amount/i],code:"SLIPPAGE_TOO_HIGH",title:"Price Changed",message:"The price moved too much during the transaction.",action:"Try again or increase your slippage tolerance in settings.",isRetryable:!0},{patterns:[/network error/i,/connection.*failed/i,/network request failed/i,/fetch failed/i,/econnreset/i,/socket hang up/i],code:"NETWORK_ERROR",title:"Network Issue",message:"Could not connect to the network.",action:"Check your internet connection and try again.",isRetryable:!0},{patterns:[/rpc.*error/i,/rpc.*failed/i,/provider error/i,/internal json-rpc error/i,/execution reverted/i],code:"RPC_ERROR",title:"RPC Error",message:"The blockchain node returned an error.",action:"Wait a moment and try again. The network may be congested.",isRetryable:!0},{patterns:[/timeout/i,/timed out/i,/request timeout/i,/deadline exceeded/i],code:"TIMEOUT",title:"Request Timeout",message:"The request took too long to complete.",action:"Try again. If it persists, the network may be congested.",isRetryable:!0},{patterns:[/hyperliquid.*not.*supported/i,/not.*supported.*li\.?fi/i,/toChainId must be equal/i,/destination chain.*not supported/i,/chain.*not.*allowed/i],code:"ROUTE_NOT_FOUND",title:"Hyperliquid Not Supported",message:"LI.FI does not currently support Hyperliquid as a destination chain.",action:"Check back later as LI.FI continues to add new chains.",isRetryable:!1},{patterns:[/no route/i,/route not found/i,/no path/i,/cannot find route/i,/no quotes/i,/no available routes/i],code:"ROUTE_NOT_FOUND",title:"No Route Available",message:"No bridge route found for this token pair.",action:"Try a different token, amount, or source chain.",isRetryable:!1},{patterns:[/bridge.*error/i,/bridge.*failed/i,/bridging failed/i,/cross-chain.*failed/i],code:"BRIDGE_ERROR",title:"Bridge Error",message:"The bridge transaction failed.",action:"Try again or select a different route.",isRetryable:!0},{patterns:[/approval.*failed/i,/approve.*failed/i,/allowance/i,/permit/i],code:"APPROVAL_FAILED",title:"Approval Failed",message:"Token approval transaction failed.",action:"Try approving the token again.",isRetryable:!0},{patterns:[/transaction.*failed/i,/tx.*failed/i,/execution failed/i,/call exception/i,/revert/i],code:"TRANSACTION_FAILED",title:"Transaction Failed",message:"The transaction could not be completed.",action:"Check your token balance and try again.",isRetryable:!0},{patterns:[/wallet not connected/i,/no wallet/i,/connect wallet/i,/not connected/i],code:"WALLET_NOT_CONNECTED",title:"Wallet Not Connected",message:"Your wallet is not connected.",action:"Connect your wallet to continue.",isRetryable:!1}],Ir={title:"Something Went Wrong",message:"An unexpected error occurred.",action:"Please try again. If the problem persists, contact support.",isRetryable:!0};function $s(n){for(const e of Np)for(const t of e.patterns)if(t.test(n))return{code:e.code,title:e.title,message:e.message,action:e.action,isRetryable:e.isRetryable};return{code:"UNKNOWN",title:Ir.title,message:n||Ir.message,action:Ir.action,isRetryable:Ir.isRetryable}}const Pp="https://li.quest/v1",Lp="07bbc064-8482-437e-b270-dbca23da1b44.644090d2-cdf2-4939-b5a3-a29d5b9e8572";async function Ko(n,e={}){const t=`${Pp}${n}`,i={"Content-Type":"application/json","x-lifi-api-key":Lp,...e.headers},r=await fetch(t,{...e,headers:i}),s=await r.json();if(!r.ok)throw new Error(s.message||`API error: ${r.status}`);return s}async function ku(n){const e=new URLSearchParams({fromChain:n.fromChain.toString(),toChain:n.toChain.toString(),fromToken:n.fromToken,toToken:n.toToken,fromAmount:n.fromAmount,fromAddress:n.fromAddress,slippage:(n.slippage||.01).toString(),integrator:n.integrator||"liquyn-swap"});return Ko(`/quote?${e}`)}async function Dp(n){const e={fromChainId:n.fromChainId,toChainId:n.toChainId,fromTokenAddress:n.fromTokenAddress,toTokenAddress:n.toTokenAddress,fromAmount:n.fromAmount,fromAddress:n.fromAddress,options:{slippage:n.slippage||.01,order:"RECOMMENDED"}};return Ko("/advanced/routes",{method:"POST",body:JSON.stringify(e)})}async function Bu(n){const e=new URLSearchParams({txHash:n.txHash,fromChain:n.fromChain.toString(),toChain:n.toChain.toString()});return n.bridge&&e.append("bridge",n.bridge),Ko(`/status?${e}`)}const Up=Object.freeze(Object.defineProperty({__proto__:null,getQuoteApi:ku,getRoutesApi:Dp,getTransactionStatus:Bu},Symbol.toStringTag,{value:"Module"})),Zs=3,Ip=5e3,Fp=60,Op=["network","timeout","connection","rate limit","temporary","unavailable","try again","rpc","nonce"];function kp(n){const e=(n instanceof Error?n.message:n).toLowerCase();return Op.some(t=>e.includes(t))}function Bp(){const{address:n}=Kn(),{data:e}=Ts(),t=ou(),[i,r]=ae.useState({status:{status:"idle",currentStep:0,totalSteps:0},stepExecutions:[],retryCount:0,lastError:null,canRetry:!1}),s=ae.useRef(null),a=ae.useRef(null),o=ae.useCallback(()=>{a.current&&(a.current.abort(),a.current=null),r({status:{status:"idle",currentStep:0,totalSteps:0},stepExecutions:[],retryCount:0,lastError:null,canRetry:!1}),s.current=null},[]),l=ae.useCallback(async(d,m=!1)=>{if(!n||!e||!t)return r(g=>({...g,status:{status:"failed",currentStep:0,totalSteps:0,error:"Wallet not connected"},lastError:$s("Wallet not connected"),canRetry:!1})),!1;s.current=d,a.current=new AbortController;const u=d;if(!u._rawRoute)return r(g=>({...g,status:{status:"failed",currentStep:0,totalSteps:0,error:"No route data available"},lastError:$s("No route data available. Please refresh the quote and try again."),canRetry:!1})),!1;const x=u._rawRoute,v=[{status:"pending"}];r(g=>({...g,status:{status:"pending",currentStep:0,totalSteps:1},stepExecutions:v,lastError:null,canRetry:!1,retryCount:m?g.retryCount+1:0}));try{r(S=>({...S,status:{status:"pending",currentStep:1,totalSteps:1},stepExecutions:[{status:"active",startTime:Date.now()}]}));const g=await ku({fromChain:x.fromChainId,toChain:x.toChainId,fromToken:x.fromToken.address,toToken:x.toToken.address,fromAmount:x.fromAmount,fromAddress:n,slippage:.01});if(!g.transactionRequest)throw new Error("No transaction data in quote response");const p=g.transactionRequest;if(x.fromToken.address!=="0x0000000000000000000000000000000000000000"){const S=g.estimate?.approvalAddress||p.to,R=await zp(x.fromToken.address,n,S,t),T=BigInt(x.fromAmount);if(R<T){r(N=>({...N,status:{...N.status,status:"signing"}}));const C=await Gp(x.fromToken.address,S,T,e);await t.waitForTransactionReceipt({hash:C})}}r(S=>({...S,status:{...S.status,status:"signing"}}));const y=await e.sendTransaction({to:p.to,data:p.data,value:BigInt(p.value||"0"),chain:void 0});if(r(S=>({...S,status:{...S.status,status:"processing",txHash:y},stepExecutions:[{...S.stepExecutions[0],txHash:y}]})),(await t.waitForTransactionReceipt({hash:y})).status==="reverted")throw new Error("Transaction reverted");return x.fromChainId!==x.toChainId&&await Vp(y,x.fromChainId,x.toChainId,g.tool||"unknown"),r(S=>({...S,status:{status:"completed",currentStep:1,totalSteps:1},stepExecutions:[{status:"complete",endTime:Date.now(),txHash:y}],canRetry:!1})),!0}catch(g){if(a.current?.signal.aborted)return!1;const p=g instanceof Error?g.message:"Execution failed",y=$s(p),M=kp(p)&&i.retryCount<Zs;return r(S=>({...S,status:{status:"failed",currentStep:S.status.currentStep,totalSteps:S.status.totalSteps,error:y.message},stepExecutions:[{status:"failed",error:y.message}],lastError:y,canRetry:M})),!1}},[n,e,t,i.retryCount]),c=ae.useCallback(async()=>!s.current||i.retryCount>=Zs?!1:l(s.current,!0),[l,i.retryCount]),f=ae.useCallback(async d=>l(d,!1),[l]);return{...i,execute:f,retry:c,reset:o,isExecuting:["pending","signing","processing"].includes(i.status.status),maxRetries:Zs}}async function zp(n,e,t,i){try{return await i.readContract({address:n,abi:lu,functionName:"allowance",args:[e,t]})}catch{return BigInt(0)}}async function Gp(n,e,t,i){const r=t+t/BigInt(100);return await i.writeContract({address:n,abi:lu,functionName:"approve",args:[e,r]})}async function Vp(n,e,t,i){let r=0;for(;r<Fp;){try{const s=await Bu({txHash:n,fromChain:e,toChain:t,bridge:i});if(s.status==="DONE")return;if(s.status==="FAILED")throw new Error(s.substatusMessage||"Bridge transaction failed")}catch{}r++,await new Promise(s=>setTimeout(s,Ip))}}const Hp=1e4,jp=120;function Wp({txHash:n,fromChainId:e,toChainId:t=Yt,pollInterval:i=Hp,enabled:r=!0,onComplete:s,onFailed:a}){const[o,l]=ae.useState(null),[c,f]=ae.useState(!1),[d,m]=ae.useState(null),u=ae.useRef(0),x=ae.useRef(null),v=ae.useRef(!0);ae.useEffect(()=>(v.current=!0,()=>{v.current=!1,x.current&&clearInterval(x.current)}),[]);const g=ae.useCallback(async()=>{if(!n||!e)return null;try{const M=await uf(n,e,t);return v.current?(l(M),m(null),M.status==="DONE"?(s?.(M),M):((M.status==="FAILED"||M.status==="INVALID")&&a?.(M),M)):null}catch(M){if(!v.current)return null;const S=M instanceof Error?M:new Error("Failed to fetch status");return m(S),null}},[n,e,t,s,a]),p=ae.useCallback(()=>{x.current&&(clearInterval(x.current),x.current=null),f(!1),u.current=0},[]),y=ae.useCallback(()=>{!n||!e||x.current||(f(!0),u.current=0,g(),x.current=setInterval(async()=>{if(u.current+=1,u.current>=jp){p(),m(new Error("Transaction status polling timed out"));return}const M=await g();M&&(M.status==="DONE"||M.status==="FAILED"||M.status==="INVALID")&&p()},i))},[n,e,i,g,p]);return ae.useEffect(()=>(r&&n&&e?y():p(),()=>{p()}),[r,n,e,y,p]),{status:o,isPolling:c,error:d,startPolling:y,stopPolling:p,refetch:g}}function Xp(n){if(!n)return"Checking transaction status...";switch(n.status){case"NOT_FOUND":return"Transaction not found. It may still be processing.";case"PENDING":return n.substatus==="WAIT_SOURCE_CONFIRMATIONS"?"Waiting for source chain confirmation...":n.substatus==="WAIT_DESTINATION_TRANSACTION"?"Waiting for destination chain transaction...":n.substatus==="BRIDGE_NOT_AVAILABLE"?"Bridge is temporarily unavailable. Please wait...":n.substatusMessage||"Transaction is being processed...";case"DONE":return"Transaction complete!";case"FAILED":return n.substatusMessage||"Transaction failed.";case"INVALID":return"Invalid transaction hash.";default:return"Unknown status"}}function qp(n=!0,e){const[t,i]=ae.useState(Ef),r=ae.useRef(!1);ae.useEffect(()=>wf(o=>{i(o)}),[]);const s=ae.useCallback(async()=>Nf(e),[e]);return ae.useEffect(()=>{n&&!r.current&&t.status==="uninitialized"&&(r.current=!0,s())},[n,s,t.status]),{state:t,isReady:t.status==="ready",isInitializing:t.status==="initializing"||t.status==="downloading_artifacts",hasError:t.status==="error",error:t.error,initialize:s}}function Yp(n=!1){const{address:e,isConnected:t}=Kn(),{data:i}=Ts(),[r,s]=ae.useState(Df);ae.useEffect(()=>Lf(f=>{s(f)}),[]);const a=ae.useCallback(async()=>{if(!i)return null;try{return await new uu(i.transport).getSigner()}catch(c){return console.error("[RAILGUN] Failed to get signer:",c),null}},[i]),o=ae.useCallback(async()=>{if(!t||!e)return console.error("[RAILGUN] Wallet not connected"),null;if(!$n())return console.error("[RAILGUN] Engine not ready"),null;const c=await a();return c?zf(c,e):(console.error("[RAILGUN] Could not get signer"),null)},[t,e,a]),l=ae.useCallback(async()=>{await Gl()},[]);return ae.useEffect(()=>{n&&t&&e&&$n()&&r.status==="none"&&o()},[n,t,e,r.status,o]),ae.useEffect(()=>{!t&&r.status!=="none"&&Gl()},[t,r.status]),ae.useMemo(()=>({state:r,isReady:r.status==="ready",isLoading:r.status==="loading"||r.status==="creating",isAwaitingSignature:r.status==="awaiting_signature",hasError:r.status==="error",error:r.error,railgunAddress:r.railgunAddress,createWallet:o,disconnect:l}),[r,o,l])}function $p(){const{address:n,isConnected:e,chainId:t}=Kn(),{switchChain:i}=Hd(),{isReady:r,isInitializing:s,error:a}=qp(!0),{isReady:o,isLoading:l,isAwaitingSignature:c,railgunAddress:f,createWallet:d,error:m}=Yp(!1),u=ae.useRef(null),[x,v]=ae.useState(null),[g,p]=ae.useState(null),[y,M]=ae.useState(null),[S,R]=ae.useState(Al[0]),[T,C]=ae.useState(""),[N,b]=ae.useState(1),[E,L]=ae.useState(!1),[V,G]=ae.useState(!1),[q,Y]=ae.useState(!1),[z,I]=ae.useState(null),[D,ne]=ae.useState(!1),[re,oe]=ae.useState(!1),ce=async qe=>{if(qe&&!o&&r){oe(!0);const Zt=await d();oe(!1),Zt&&ne(!0)}else ne(qe)},{data:Q,isLoading:Pe}=jd({address:n,token:y?.address==="0x0000000000000000000000000000000000000000"?void 0:y?.address,chainId:x}),ze=ae.useMemo(()=>{if(!T||!y||parseFloat(T)<=0)return"0";try{return su(T,y.decimals).toString()}catch{return"0"}},[T,y]),W=ae.useMemo(()=>!Q||!T||parseFloat(T)<=0?!0:parseFloat(Q.formatted)>=parseFloat(T),[Q,T]),{data:$,isLoading:ve,error:Ie,isFetched:_e,refetch:We}=Cp({fromChainId:x,fromTokenAddress:y?.address||null,toTokenAddress:S.address,amount:ze,slippage:N,enabled:!!x&&!!y&&!!T&&parseFloat(T)>0&&W&&!D}),{standardRoutes:pt,privacyRoutes:Ye,isLoading:nt,isFetched:ot,error:Ge,refetch:xt}=Zf({fromChainId:x,fromTokenAddress:y?.address||null,toTokenAddress:S.address,amount:ze,slippage:N,privacyEnabled:D,enabled:!!x&&!!y&&!!T&&parseFloat(T)>0&&W&&D}),P=ae.useMemo(()=>D?[...Ye,...pt]:$||[],[D,Ye,pt,$]),dt=D?nt:ve,$e=D?Ge:Ie,it=D?ot:_e,Ae=()=>{D?xt():We()};ae.useEffect(()=>{P&&P.length>0?I(P[0]):I(null)},[P]);const{status:A,stepExecutions:_,execute:F,retry:Z,reset:J,isExecuting:X,lastError:be,canRetry:le,retryCount:Re,maxRetries:Ue}=Bp(),{executionState:ee,executePrivacyRoute:de,reset:Se,isExecuting:Ee}=Kf(),se=X||Ee,{status:Be,isPolling:U}=Wp({txHash:A.txHash,fromChainId:x||void 0,enabled:!!A.txHash&&A.status==="processing",onComplete:()=>{},onFailed:()=>{}}),he=x&&t!==x,ie=g?Pa.find(qe=>qe.key===g)?.name:Pa.find(qe=>qe.id===x)?.name,xe=x?Vi[x]?.logo:void 0,te=t?Vi[t]?.name:void 0;ae.useEffect(()=>{M(null),C(""),I(null)},[x,g]),ae.useEffect(()=>{se&&u.current&&setTimeout(()=>{u.current?.scrollIntoView({behavior:"smooth",block:"center"})},100)},[se]);const K=ae.useMemo(()=>e?x?y?!T||parseFloat(T)<=0?{text:"Enter Amount",disabled:!0,variant:"primary"}:Pe?{text:"Checking Balance...",disabled:!0,variant:"primary",showLoader:!0}:W?he?{text:`Switch to ${ie||"Source Chain"}`,disabled:!1,variant:"primary"}:dt?{text:"Finding Best Routes...",disabled:!0,variant:"primary",showLoader:!0}:$e?{text:"No Route Available",disabled:!0,variant:"error"}:it&&(!P||P.length===0)?{text:"No Route Found",disabled:!0,variant:"error"}:se?{text:D&&Ee?"Privacy Bridging...":"Bridging...",disabled:!0,variant:"primary",showLoader:!0}:z?{text:Oi(z)?"Private Bridge to Hyperliquid":"Bridge to Hyperliquid",disabled:!1,variant:"primary"}:{text:"Select a Route",disabled:!0,variant:"primary"}:{text:"Insufficient Balance",disabled:!0,variant:"error"}:{text:"Select Token",disabled:!0,variant:"primary"}:{text:"Select Source Chain",disabled:!0,variant:"primary"}:{text:"Connect Wallet",disabled:!0,variant:"primary"},[e,x,y,T,Pe,W,he,dt,$e,it,P,se,z,ie,D,Ee]),ue=()=>{x&&i?.({chainId:x}),Y(!1)},Oe=async()=>{if(he&&x){Y(!0);return}if(!z)return;let qe=!1;Oi(z)?qe=await de(z):qe=await F(z),qe&&E&&S.symbol==="USDC"&&G(!0)},lt=async()=>{await Z()},rt=()=>{if(Q){const Zt=y?.address==="0x0000000000000000000000000000000000000000"?Math.max(0,parseFloat(Q.formatted)-.01):parseFloat(Q.formatted);C(Zt.toString())}},at=ae.useMemo(()=>{if(!e)return null;if(s)return{type:"info",message:"Initializing privacy engine... This may take a moment on first load."};if(a&&!D)return null;if(a&&D)return{type:"warning",title:"Privacy Mode Unavailable",message:"The privacy engine could not be initialized. Standard bridging is still available."};if(D&&m)return{type:"error",title:"Privacy Wallet Error",message:m};if(be&&A.status==="failed")return{type:"error",title:be.title,message:be.message,action:be.action,canRetry:le};if(!W&&T&&parseFloat(T)>0){const qe=parseFloat(T),Zt=Q?parseFloat(Q.formatted):0;return{type:"error",message:`You need ${Xn(qe.toString(),4)} ${y?.symbol} but only have ${Xn(Zt.toString(),4)}`}}return $e?{type:"error",message:$e.message||"Failed to find a route. Try a different amount or token."}:it&&(!P||P.length===0)&&!dt&&T&&parseFloat(T)>0&&W?{type:"warning",message:"No bridge route found for this pair. Try a larger amount or different token."}:he&&x?{type:"info",message:"You need to switch networks to bridge from this chain."}:U&&Be?{type:"info",message:Xp(Be)}:null},[e,W,T,Q,y,$e,it,P,dt,he,x,be,A.status,le,U,Be,s,a,D,m]);return h.jsxs("div",{className:"w-full max-w-md mx-auto space-y-6 px-4 sm:px-0",children:[h.jsx(me.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"bg-dark-800/80 border border-dark-400/30 rounded-2xl p-5 sm:p-6",children:h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-sm font-medium text-white/50",children:"From"}),D&&h.jsxs("span",{className:"flex items-center gap-1 px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded-full",children:[h.jsx($t,{className:"w-3 h-3 text-purple-400"}),h.jsx("span",{className:"text-xs font-medium text-purple-400",children:"Private"})]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(fp,{enabled:D,onToggle:ce,disabled:se||l||!r,disabledReason:se?"Cannot change during transaction":l?"Wallet is loading...":!r&&s?"Privacy engine is initializing...":!r&&a?"Privacy engine unavailable":r?void 0:"Privacy engine not ready"}),h.jsx(hp,{slippage:N,onSlippageChange:b})]})]}),Q&&y&&h.jsxs("div",{className:Ne("text-xs",!W&&T&&parseFloat(T)>0?"text-red-400":"text-white/40"),children:["Balance: ",Xn(Q.formatted)," ",y.symbol]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsx(Wh,{selectedChainId:x,selectedChainKey:g,onSelect:(qe,Zt)=>{v(qe),p(Zt||null)}}),h.jsx(Xh,{chainId:x,selectedToken:y,onSelect:M})]}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"number",inputMode:"decimal",placeholder:"0.0",value:T,onChange:qe=>C(qe.target.value),disabled:!y,className:Ne("w-full bg-dark-700 border rounded-xl px-4 py-4 pr-16","text-xl sm:text-2xl font-semibold text-white placeholder-white/20","focus:outline-none","disabled:opacity-50 disabled:cursor-not-allowed","transition-colors duration-200",!W&&T&&parseFloat(T)>0?"border-red-500/50 focus:border-red-500":"border-dark-400/30 focus:border-accent/40")}),Q&&y&&h.jsx("button",{onClick:rt,className:`absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold 
                           text-accent bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors`,children:"MAX"})]}),h.jsx("div",{className:"flex items-center justify-center",children:h.jsx("div",{className:"p-2 bg-dark-700 border border-dark-400/30 rounded-xl",children:h.jsx(Dd,{className:"w-4 h-4 text-white/40"})})}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("span",{className:"text-sm font-medium text-white/50",children:"To (Hyperliquid)"}),h.jsx("div",{className:"flex gap-2",children:Al.map(qe=>h.jsxs("button",{onClick:()=>R(qe),className:Ne("flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all","active:scale-[0.98]",S.symbol===qe.symbol?"bg-accent/10 border border-accent/40":"bg-dark-700 border border-dark-400/30 hover:border-dark-300/50"),children:[h.jsx("img",{src:qe.logo,alt:qe.symbol,className:"w-5 h-5 rounded-full",onError:Zt=>{Zt.target.src="https://via.placeholder.com/20"}}),h.jsx("span",{className:Ne("font-medium text-sm",S.symbol===qe.symbol?"text-accent":"text-white/70"),children:qe.symbol})]},qe.symbol))}),h.jsxs("div",{className:"flex items-center gap-2.5 p-3 bg-dark-700/50 rounded-xl border border-dark-400/20",children:[h.jsx("img",{src:"/assets/green.png",alt:"Hyperliquid",className:"h-7 w-auto"}),h.jsxs("div",{children:[h.jsx("div",{className:"text-sm font-medium text-white",children:"Hyperliquid"}),h.jsxs("div",{className:"text-xs text-white/40",children:["Chain ID: ",Yt]})]})]})]}),S.symbol==="USDC"&&h.jsxs("div",{className:"flex items-center justify-between p-3 bg-dark-700/50 rounded-xl border border-dark-400/20",children:[h.jsxs("div",{className:"flex-1",children:[h.jsx("span",{className:"text-sm text-white/90",children:"Auto-deposit to trading"}),h.jsx("p",{className:"text-[11px] text-white/40 mt-0.5",children:E?"USDC will be ready to trade immediately":"You can deposit manually after bridging"})]}),h.jsx("button",{onClick:()=>L(!E),className:Ne("relative w-10 h-5 rounded-full transition-colors duration-200 ml-3",E?"bg-accent":"bg-dark-500"),children:h.jsx(me.div,{animate:{x:E?20:2},transition:{type:"spring",stiffness:500,damping:30},className:"absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"})})]}),h.jsx(rn,{children:(re||c)&&h.jsx(me.div,{initial:{opacity:0,y:-10,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-10,height:0},className:"p-3 rounded-xl text-sm bg-purple-500/10 border border-purple-500/20",children:h.jsxs("div",{className:"flex items-center gap-3",children:[c?h.jsx(nu,{className:"w-5 h-5 text-purple-400 animate-pulse"}):h.jsx(Vt,{className:"w-5 h-5 text-purple-400 animate-spin"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-purple-400",children:c?"Sign to Enable Privacy":"Setting Up Privacy Wallet"}),h.jsx("p",{className:"text-purple-400/70 text-xs mt-0.5",children:c?"Please sign the message in your wallet to create your private RAILGUN wallet":"Creating your RAILGUN private wallet..."})]})]})})}),D&&o&&f&&h.jsx(me.div,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:"p-2 rounded-lg bg-purple-500/5 border border-purple-500/10",children:h.jsxs("div",{className:"flex items-center gap-2 text-xs text-purple-400",children:[h.jsx($t,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"text-purple-400/60",children:"Private Address:"}),h.jsxs("code",{className:"font-mono text-purple-400/80 truncate max-w-[180px]",children:[f.slice(0,12),"...",f.slice(-8)]})]})}),h.jsx(rn,{mode:"wait",children:at&&h.jsxs(me.div,{initial:{opacity:0,y:-10,height:0},animate:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-10,height:0},className:Ne("p-3 rounded-xl text-sm",at.type==="error"&&"bg-red-500/10 border border-red-500/20",at.type==="warning"&&"bg-yellow-500/10 border border-yellow-500/20",at.type==="info"&&"bg-blue-500/10 border border-blue-500/20"),children:[h.jsxs("div",{className:"flex items-start gap-2",children:[at.type==="error"&&h.jsx(fs,{className:"w-4 h-4 mt-0.5 flex-shrink-0 text-red-400"}),at.type==="warning"&&h.jsx(fs,{className:"w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400"}),at.type==="info"&&h.jsx(Qc,{className:"w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400"}),h.jsxs("div",{className:"flex-1",children:[at.title&&h.jsx("p",{className:Ne("font-medium mb-0.5",{"text-red-400":at.type==="error","text-yellow-400":at.type==="warning","text-blue-400":at.type==="info"}),children:at.title}),h.jsx("p",{className:Ne({"text-red-400/80":at.type==="error","text-yellow-400/80":at.type==="warning","text-blue-400/80":at.type==="info"}),children:at.message}),at.action&&h.jsx("p",{className:"text-white/50 mt-1 text-xs",children:at.action})]})]}),at.canRetry&&h.jsxs("button",{onClick:lt,className:"mt-2 w-full flex items-center justify-center gap-2 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors",children:[h.jsx(ko,{className:"w-4 h-4"}),"Retry (",Re,"/",Ue,")"]})]})}),h.jsx(as,{onClick:Oe,disabled:K.disabled,className:Ne("w-full",K.variant==="error"&&"bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30",K.variant==="warning"&&"bg-yellow-500/20 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/30"),size:"lg",children:h.jsxs("span",{className:"flex items-center justify-center gap-2",children:[K.showLoader&&h.jsx(Vt,{className:"w-4 h-4 animate-spin"}),K.text]})})]})}),(dt||P&&P.length>0)&&h.jsx(cp,{routes:P||[],selectedRoute:z,onSelectRoute:I,isLoading:dt}),z&&!dt&&h.jsx(ep,{quote:z,isLoading:!1,error:void 0}),h.jsxs("div",{ref:u,children:[!D&&h.jsx(ip,{status:A,steps:z?.steps,stepStatuses:_,onClose:()=>{J(),A.status==="completed"&&(C(""),I(null),Ae())},onRetry:le?lt:void 0}),D&&ee.status!=="idle"&&h.jsx(xp,{executionState:ee,onClose:()=>{Se(),ee.status==="completed"&&(C(""),I(null),Ae())},onRetry:ee.status==="failed"?()=>{z&&Oi(z)&&de(z)}:void 0})]}),h.jsx(vp,{isOpen:q,onClose:()=>Y(!1),onSwitch:ue,fromChainName:ie||"Unknown Chain",fromChainLogo:xe,currentChainName:te}),V&&z&&h.jsx(Rp,{amount:Xn(Number(z.toAmount)/Math.pow(10,z.toToken.decimals),2),isOpen:V,onClose:()=>G(!1),onSuccess:()=>{G(!1),C("")}})]})}const Jo="182",Zp=0,Yl=1,Kp=2,os=1,Jp=2,hr=3,Zn=0,Ht=1,xn=2,Dn=0,ki=1,xs=2,$l=3,Zl=4,Qp=5,ci=100,em=101,tm=102,nm=103,im=104,rm=200,sm=201,am=202,om=203,Ba=204,za=205,lm=206,cm=207,um=208,dm=209,hm=210,fm=211,pm=212,mm=213,gm=214,Ga=0,Va=1,Ha=2,ji=3,ja=4,Wa=5,Xa=6,qa=7,zu=0,xm=1,vm=2,bn=0,Gu=1,Vu=2,Hu=3,ju=4,Wu=5,Xu=6,qu=7,Yu=300,pi=301,Wi=302,Ya=303,$a=304,Cs=306,Za=1e3,Ln=1001,Ka=1002,Nt=1003,_m=1004,Fr=1005,Dt=1006,Ks=1007,di=1008,tn=1009,$u=1010,Zu=1011,gr=1012,Qo=1013,Mn=1014,vn=1015,In=1016,el=1017,tl=1018,xr=1020,Ku=35902,Ju=35899,Qu=1021,ed=1022,dn=1023,Fn=1026,hi=1027,td=1028,nl=1029,Xi=1030,il=1031,rl=1033,ls=33776,cs=33777,us=33778,ds=33779,Ja=35840,Qa=35841,eo=35842,to=35843,no=36196,io=37492,ro=37496,so=37488,ao=37489,oo=37490,lo=37491,co=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,go=37814,xo=37815,vo=37816,_o=37817,yo=37818,bo=37819,So=37820,Mo=37821,wo=36492,Eo=36494,To=36495,Ao=36283,Ro=36284,Co=36285,No=36286,ym=3200,bm=0,Sm=1,Wn="",Qt="srgb",qi="srgb-linear",vs="linear",ut="srgb",vi=7680,Kl=519,Mm=512,wm=513,Em=514,sl=515,Tm=516,Am=517,al=518,Rm=519,Jl=35044,Ql="300 es",_n=2e3,_s=2001;function nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cm(){const n=ys("canvas");return n.style.display="block",n}const ec={};function tc(...n){const e="THREE."+n.shift();console.log(e,...n)}function ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function et(...n){const e="THREE."+n.shift();console.error(e,...n)}function vr(...n){const e=n.join(" ");e in ec||(ec[e]=!0,ke(...n))}function Nm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Po=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Pm(n,e){return(n%e+e)%e}function Qs(n,e,t){return(1-t)*n+t*e}function ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],m=s[a+0],u=s[a+1],x=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d;return}if(o>=1){e[t+0]=m,e[t+1]=u,e[t+2]=x,e[t+3]=v;return}if(d!==v||l!==m||c!==u||f!==x){let g=l*m+c*u+f*x+d*v;g<0&&(m=-m,u=-u,x=-x,v=-v,g=-g);let p=1-o;if(g<.9995){const y=Math.acos(g),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,l=l*p+m*o,c=c*p+u*o,f=f*p+x*o,d=d*p+v*o}else{l=l*p+m*o,c=c*p+u*o,f=f*p+x*o,d=d*p+v*o;const y=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=y,c*=y,f*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],m=s[a+1],u=s[a+2],x=s[a+3];return e[t]=o*x+f*d+l*u-c*m,e[t+1]=l*x+f*m+c*d-o*u,e[t+2]=c*x+f*u+o*m-l*d,e[t+3]=f*x-o*d-l*m-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),m=l(i/2),u=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=m*f*d+c*u*x,this._y=c*u*d-m*f*x,this._z=c*f*x+m*u*d,this._w=c*f*d-m*u*x;break;case"YXZ":this._x=m*f*d+c*u*x,this._y=c*u*d-m*f*x,this._z=c*f*x-m*u*d,this._w=c*f*d+m*u*x;break;case"ZXY":this._x=m*f*d-c*u*x,this._y=c*u*d+m*f*x,this._z=c*f*x+m*u*d,this._w=c*f*d-m*u*x;break;case"ZYX":this._x=m*f*d-c*u*x,this._y=c*u*d+m*f*x,this._z=c*f*x-m*u*d,this._w=c*f*d+m*u*x;break;case"YZX":this._x=m*f*d+c*u*x,this._y=c*u*d+m*f*x,this._z=c*f*x-m*u*d,this._w=c*f*d-m*u*x;break;case"XZY":this._x=m*f*d-c*u*x,this._y=c*u*d-m*f*x,this._z=c*f*x+m*u*d,this._w=c*f*d+m*u*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],d=t[10],m=i+o+d;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(f-l)*u,this._y=(s-c)*u,this._z=(a-r)*u}else if(i>o&&i>d){const u=2*Math.sqrt(1+i-o-d);this._w=(f-l)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-i-d);this._w=(s-c)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+d-i-o);this._w=(a-r)/u,this._x=(s+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new k,nc=new Mr;class Ve{constructor(e,t,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],m=i[2],u=i[5],x=i[8],v=r[0],g=r[3],p=r[6],y=r[1],M=r[4],S=r[7],R=r[2],T=r[5],C=r[8];return s[0]=a*v+o*y+l*R,s[3]=a*g+o*M+l*T,s[6]=a*p+o*S+l*C,s[1]=c*v+f*y+d*R,s[4]=c*g+f*M+d*T,s[7]=c*p+f*S+d*C,s[2]=m*v+u*y+x*R,s[5]=m*g+u*M+x*T,s[8]=m*p+u*S+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,m=o*l-f*s,u=c*s-a*l,x=t*d+i*m+r*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*c-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=m*v,e[4]=(f*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=u*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Ve,ic=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){const n={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wn?vs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qi]:{primaries:e,whitePoint:i,transfer:vs,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Je=Lm();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _i;class Dm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_i===void 0&&(_i=ys("canvas")),_i.width=e.width,_i.height=e.height;const r=_i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Un(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Um=0;class ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Im=0;const ia=new k;class Ot extends Ki{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Ln,r=Ln,s=Dt,a=di,o=dn,l=tn,c=Ot.DEFAULT_ANISOTROPY,f=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Sr(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Yu;Ot.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],u=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(f-m)<.01&&Math.abs(d-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(u+1)/2,R=(p+1)/2,T=(f+m)/4,C=(d+v)/4,N=(x+g)/4;return M>S&&M>R?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=C/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=N/s),this.set(i,r,s,t),this}let y=Math.sqrt((g-x)*(g-x)+(d-v)*(d-v)+(m-f)*(m-f));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(d-v)/y,this.z=(m-f)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fm extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ol(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Fm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class id extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Om extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),kr.subVectors(this.max,rr),yi.subVectors(e.a,rr),bi.subVectors(e.b,rr),Si.subVectors(e.c,rr),Bn.subVectors(bi,yi),zn.subVectors(Si,bi),ni.subVectors(yi,Si);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ni.z,ni.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ni.z,0,-ni.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ni.y,ni.x,0];return!ra(t,yi,bi,Si,kr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,yi,bi,Si,kr))?!1:(Br.crossVectors(Bn,zn),t=[Br.x,Br.y,Br.z],ra(t,yi,bi,Si,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new k,new k,new k,new k,new k,new k,new k,new k],sn=new k,Or=new wr,yi=new k,bi=new k,Si=new k,Bn=new k,zn=new k,ni=new k,rr=new k,kr=new k,Br=new k,ii=new k;function ra(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ii.fromArray(n,s);const o=r.x*Math.abs(ii.x)+r.y*Math.abs(ii.y)+r.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),f=i.dot(ii);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const km=new wr,sr=new k,sa=new k;class Er{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):km.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(sa)),this.expandByPoint(sr.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new k,aa=new k,zr=new k,Gn=new k,oa=new k,Gr=new k,la=new k;class ll{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){aa.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Gn.dot(this.direction),l=-Gn.dot(zr),c=Gn.lengthSq(),f=Math.abs(1-a*a);let d,m,u,x;if(f>0)if(d=a*l-o,m=a*o-l,x=s*f,d>=0)if(m>=-x)if(m<=x){const v=1/f;d*=v,m*=v,u=d*(d+a*m+2*o)+m*(a*d+m+2*l)+c}else m=s,d=Math.max(0,-(a*m+o)),u=-d*d+m*(m+2*l)+c;else m=-s,d=Math.max(0,-(a*m+o)),u=-d*d+m*(m+2*l)+c;else m<=-x?(d=Math.max(0,-(-a*s+o)),m=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+m*(m+2*l)+c):m<=x?(d=0,m=Math.min(Math.max(-s,-l),s),u=m*(m+2*l)+c):(d=Math.max(0,-(a*s+o)),m=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+m*(m+2*l)+c);else m=a>0?-s:s,d=Math.max(0,-(a*m+o)),u=-d*d+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(aa).addScaledVector(zr,m),u}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,r=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,r=(e.min.x-m.x)*c),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-m.z)*d,l=(e.max.z-m.z)*d):(o=(e.max.z-m.z)*d,l=(e.min.z-m.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,r,s){oa.subVectors(t,e),Gr.subVectors(i,e),la.crossVectors(oa,Gr);let a=this.direction.dot(la),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(Gr.crossVectors(Gn,Gr));if(l<0)return null;const c=o*this.direction.dot(oa.cross(Gn));if(c<0||l+c>a)return null;const f=-o*Gn.dot(la);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,l,c,f,d,m,u,x,v,g){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,d,m,u,x,v,g)}set(e,t,i,r,s,a,o,l,c,f,d,m,u,x,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=m,p[3]=u,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const m=a*f,u=a*d,x=o*f,v=o*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=u+x*c,t[5]=m-v*c,t[9]=-o*l,t[2]=v-m*c,t[6]=x+u*c,t[10]=a*l}else if(e.order==="YXZ"){const m=l*f,u=l*d,x=c*f,v=c*d;t[0]=m+v*o,t[4]=x*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=u*o-x,t[6]=v+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*f,u=l*d,x=c*f,v=c*d;t[0]=m-v*o,t[4]=-a*d,t[8]=x+u*o,t[1]=u+x*o,t[5]=a*f,t[9]=v-m*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*f,u=a*d,x=o*f,v=o*d;t[0]=l*f,t[4]=x*c-u,t[8]=m*c+v,t[1]=l*d,t[5]=v*c+m,t[9]=u*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,u=a*c,x=o*l,v=o*c;t[0]=l*f,t[4]=v-m*d,t[8]=x*d+u,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=u*d+x,t[10]=m-v*d}else if(e.order==="XZY"){const m=a*l,u=a*c,x=o*l,v=o*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=m*d+v,t[5]=a*f,t[9]=u*d-x,t[2]=x*d-u,t[6]=o*f,t[10]=v*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,zm)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Vn.crossVectors(i,Xt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Vn.crossVectors(i,Xt)),Vn.normalize(),Vr.crossVectors(Xt,Vn),r[0]=Vn.x,r[4]=Vr.x,r[8]=Xt.x,r[1]=Vn.y,r[5]=Vr.y,r[9]=Xt.y,r[2]=Vn.z,r[6]=Vr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],m=i[9],u=i[13],x=i[2],v=i[6],g=i[10],p=i[14],y=i[3],M=i[7],S=i[11],R=i[15],T=r[0],C=r[4],N=r[8],b=r[12],E=r[1],L=r[5],V=r[9],G=r[13],q=r[2],Y=r[6],z=r[10],I=r[14],D=r[3],ne=r[7],re=r[11],oe=r[15];return s[0]=a*T+o*E+l*q+c*D,s[4]=a*C+o*L+l*Y+c*ne,s[8]=a*N+o*V+l*z+c*re,s[12]=a*b+o*G+l*I+c*oe,s[1]=f*T+d*E+m*q+u*D,s[5]=f*C+d*L+m*Y+u*ne,s[9]=f*N+d*V+m*z+u*re,s[13]=f*b+d*G+m*I+u*oe,s[2]=x*T+v*E+g*q+p*D,s[6]=x*C+v*L+g*Y+p*ne,s[10]=x*N+v*V+g*z+p*re,s[14]=x*b+v*G+g*I+p*oe,s[3]=y*T+M*E+S*q+R*D,s[7]=y*C+M*L+S*Y+R*ne,s[11]=y*N+M*V+S*z+R*re,s[15]=y*b+M*G+S*I+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],m=e[10],u=e[14],x=e[3],v=e[7],g=e[11],p=e[15],y=l*u-c*m,M=o*u-c*d,S=o*m-l*d,R=a*u-c*f,T=a*m-l*f,C=a*d-o*f;return t*(v*y-g*M+p*S)-i*(x*y-g*R+p*T)+r*(x*M-v*R+p*C)-s*(x*S-v*T+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],m=e[10],u=e[11],x=e[12],v=e[13],g=e[14],p=e[15],y=d*g*c-v*m*c+v*l*u-o*g*u-d*l*p+o*m*p,M=x*m*c-f*g*c-x*l*u+a*g*u+f*l*p-a*m*p,S=f*v*c-x*d*c+x*o*u-a*v*u-f*o*p+a*d*p,R=x*d*l-f*v*l-x*o*m+a*v*m+f*o*g-a*d*g,T=t*y+i*M+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(v*m*s-d*g*s-v*r*u+i*g*u+d*r*p-i*m*p)*C,e[2]=(o*g*s-v*l*s+v*r*c-i*g*c-o*r*p+i*l*p)*C,e[3]=(d*l*s-o*m*s-d*r*c+i*m*c+o*r*u-i*l*u)*C,e[4]=M*C,e[5]=(f*g*s-x*m*s+x*r*u-t*g*u-f*r*p+t*m*p)*C,e[6]=(x*l*s-a*g*s-x*r*c+t*g*c+a*r*p-t*l*p)*C,e[7]=(a*m*s-f*l*s+f*r*c-t*m*c-a*r*u+t*l*u)*C,e[8]=S*C,e[9]=(x*d*s-f*v*s-x*i*u+t*v*u+f*i*p-t*d*p)*C,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*p+t*o*p)*C,e[11]=(f*o*s-a*d*s-f*i*c+t*d*c+a*i*u-t*o*u)*C,e[12]=R*C,e[13]=(f*v*r-x*d*r+x*i*m-t*v*m-f*i*g+t*d*g)*C,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*g-t*o*g)*C,e[15]=(a*d*r-f*o*r+f*i*l-t*d*l-a*i*m+t*o*m)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,d=o+o,m=s*c,u=s*f,x=s*d,v=a*f,g=a*d,p=o*d,y=l*c,M=l*f,S=l*d,R=i.x,T=i.y,C=i.z;return r[0]=(1-(v+p))*R,r[1]=(u+S)*R,r[2]=(x-M)*R,r[3]=0,r[4]=(u-S)*T,r[5]=(1-(m+p))*T,r[6]=(g+y)*T,r[7]=0,r[8]=(x+M)*C,r[9]=(g-y)*C,r[10]=(1-(m+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Mi.set(r[0],r[1],r[2]).length();const a=Mi.set(r[4],r[5],r[6]).length(),o=Mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),an.copy(this);const c=1/s,f=1/a,d=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=f,an.elements[5]*=f,an.elements[6]*=f,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=_n,l=!1){const c=this.elements,f=2*s/(t-e),d=2*s/(i-r),m=(t+e)/(t-e),u=(i+r)/(i-r);let x,v;if(l)x=s/(a-s),v=a*s/(a-s);else if(o===_n)x=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===_s)x=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=_n,l=!1){const c=this.elements,f=2/(t-e),d=2/(i-r),m=-(t+e)/(t-e),u=-(i+r)/(i-r);let x,v;if(l)x=1/(a-s),v=a/(a-s);else if(o===_n)x=-2/(a-s),v=-(a+s)/(a-s);else if(o===_s)x=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mi=new k,an=new yt,Bm=new k(0,0,0),zm=new k(1,1,1),Vn=new k,Vr=new k,Xt=new k,sc=new yt,ac=new Mr;class On{constructor(e=0,t=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],m=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,u),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gm=0;const oc=new k,wi=new Mr,Rn=new yt,Hr=new k,ar=new k,Vm=new k,Hm=new Mr,lc=new k(1,0,0),cc=new k(0,1,0),uc=new k(0,0,1),dc={type:"added"},jm={type:"removed"},Ei={type:"childadded",child:null},ca={type:"childremoved",child:null};class kt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new k,t=new On,i=new Mr,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ve}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ar,Hr,this.up):Rn.lookAt(Hr,ar,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Rn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),m=a(e.skeletons),u=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),u.length>0&&(i.animations=u),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new k(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new k,Cn=new k,ua=new k,Nn=new k,Ti=new k,Ai=new k,hc=new k,da=new k,ha=new k,fa=new k,pa=new St,ma=new St,ga=new St;class un{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){on.subVectors(r,t),Cn.subVectors(i,t),ua.subVectors(e,t);const a=on.dot(on),o=on.dot(Cn),l=on.dot(ua),c=Cn.dot(Cn),f=Cn.dot(ua),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const m=1/d,u=(c*l-o*f)*m,x=(a*f-o*l)*m;return s.set(1-u-x,x,u)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,i),ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pa,s.x),a.addScaledVector(ma,s.y),a.addScaledVector(ga,s.z),a}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Cn.subVectors(e,t),on.cross(Cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ti.subVectors(r,i),Ai.subVectors(s,i),da.subVectors(e,i);const l=Ti.dot(da),c=Ai.dot(da);if(l<=0&&c<=0)return t.copy(i);ha.subVectors(e,r);const f=Ti.dot(ha),d=Ai.dot(ha);if(f>=0&&d<=f)return t.copy(r);const m=l*d-f*c;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Ti,a);fa.subVectors(e,s);const u=Ti.dot(fa),x=Ai.dot(fa);if(x>=0&&u<=x)return t.copy(s);const v=u*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ai,o);const g=f*x-u*d;if(g<=0&&d-f>=0&&u-x>=0)return hc.subVectors(s,r),o=(d-f)/(d-f+(u-x)),t.copy(r).addScaledVector(hc,o);const p=1/(g+v+m);return a=v*p,o=m*p,t.copy(i).addScaledVector(Ti,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Pm(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xa(a,s,e+1/3),this.g=xa(a,s,e),this.b=xa(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.workingToColorSpace(Lt.copy(this),e),Math.round(Ze(Lt.r*255,0,255))*65536+Math.round(Ze(Lt.g*255,0,255))*256+Math.round(Ze(Lt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Qt){Je.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(jr);const i=Qs(Hn.h,jr.h,t),r=Qs(Hn.s,jr.s,t),s=Qs(Hn.l,jr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new st;st.NAMES=sd;let Wm=0;class Ji extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=ki,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fn extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new k,Wr=new tt;let Xm=0;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jl&&(e.usage=this.usage),e}}class ad extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class od extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qm=0;const Jt=new yt,va=new kt,Ri=new k,qt=new wr,or=new wr,At=new k;class Ct extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?od:ad)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];or.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(qt.min,or.min),qt.expandByPoint(At),At.addVectors(qt.max,or.max),qt.expandByPoint(At)):(qt.expandByPoint(or.min),qt.expandByPoint(or.max))}qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)At.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),At.add(Ri)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new k,l[N]=new k;const c=new k,f=new k,d=new k,m=new tt,u=new tt,x=new tt,v=new k,g=new k;function p(N,b,E){c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),m.fromBufferAttribute(s,N),u.fromBufferAttribute(s,b),x.fromBufferAttribute(s,E),f.sub(c),d.sub(c),u.sub(m),x.sub(m);const L=1/(u.x*x.y-x.x*u.y);isFinite(L)&&(v.copy(f).multiplyScalar(x.y).addScaledVector(d,-u.y).multiplyScalar(L),g.copy(d).multiplyScalar(u.x).addScaledVector(f,-x.x).multiplyScalar(L),o[N].add(v),o[b].add(v),o[E].add(v),l[N].add(g),l[b].add(g),l[E].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,b=y.length;N<b;++N){const E=y[N],L=E.start,V=E.count;for(let G=L,q=L+V;G<q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new k,S=new k,R=new k,T=new k;function C(N){R.fromBufferAttribute(r,N),T.copy(R);const b=o[N];M.copy(b),M.sub(R.multiplyScalar(R.dot(b))).normalize(),S.crossVectors(T,b);const L=S.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,L)}for(let N=0,b=y.length;N<b;++N){const E=y[N],L=E.start,V=E.count;for(let G=L,q=L+V;G<q;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,u=i.count;m<u;m++)i.setXYZ(m,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,f=new k,d=new k;if(e)for(let m=0,u=e.count;m<u;m+=3){const x=e.getX(m+0),v=e.getX(m+1),g=e.getX(m+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,u=t.count;m<u;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(m+0,f.x,f.y,f.z),i.setXYZ(m+1,f.x,f.y,f.z),i.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,m=new c.constructor(l.length*f);let u=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*f;for(let p=0;p<f;p++)m[x++]=c[u++]}return new nn(m,f,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const m=c[f],u=e(m,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,m=c.length;d<m;d++){const u=c[d];f.push(u.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let m=0,u=d.length;m<u;m++)f.push(d[m].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new yt,ri=new ll,Xr=new Er,pc=new k,qr=new k,Yr=new k,$r=new k,_a=new k,Zr=new k,mc=new k,Kr=new k;class Rt extends kt{constructor(e=new Ct,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(_a.fromBufferAttribute(d,e),a?Zr.addScaledVector(_a,f):Zr.addScaledVector(_a.sub(t),f))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),ri.copy(e.ray).recast(e.near),!(Xr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Xr,pc)===null||ri.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(fc.copy(s).invert(),ri.copy(e.ray).applyMatrix4(fc),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,m=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=m.length;x<v;x++){const g=m[x],p=a[g.materialIndex],y=Math.max(g.start,u.start),M=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let S=y,R=M;S<R;S+=3){const T=o.getX(S),C=o.getX(S+1),N=o.getX(S+2);r=Jr(this,p,e,i,c,f,d,T,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let g=x,p=v;g<p;g+=3){const y=o.getX(g),M=o.getX(g+1),S=o.getX(g+2);r=Jr(this,a,e,i,c,f,d,y,M,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=m.length;x<v;x++){const g=m[x],p=a[g.materialIndex],y=Math.max(g.start,u.start),M=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let S=y,R=M;S<R;S+=3){const T=S,C=S+1,N=S+2;r=Jr(this,p,e,i,c,f,d,T,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let g=x,p=v;g<p;g+=3){const y=g,M=g+1,S=g+2;r=Jr(this,a,e,i,c,f,d,y,M,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Ym(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zn,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:n}}function Jr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,qr),n.getVertexPosition(l,Yr),n.getVertexPosition(c,$r);const f=Ym(n,e,t,i,qr,Yr,$r,mc);if(f){const d=new k;un.getBarycoord(mc,qr,Yr,$r,d),r&&(f.uv=un.getInterpolatedAttribute(r,o,l,c,d,new tt)),s&&(f.uv1=un.getInterpolatedAttribute(s,o,l,c,d,new tt)),a&&(f.normal=un.getInterpolatedAttribute(a,o,l,c,d,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const m={a:o,b:l,c,normal:new k,materialIndex:0};un.getNormal(qr,Yr,$r,m.normal),f.face=m,f.barycoord=d}return f}class Tr extends Ct{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let m=0,u=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(f,3)),this.setAttribute("uv",new bt(d,2));function x(v,g,p,y,M,S,R,T,C,N,b){const E=S/C,L=R/N,V=S/2,G=R/2,q=T/2,Y=C+1,z=N+1;let I=0,D=0;const ne=new k;for(let re=0;re<z;re++){const oe=re*L-G;for(let ce=0;ce<Y;ce++){const Q=ce*E-V;ne[v]=Q*y,ne[g]=oe*M,ne[p]=q,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[p]=T>0?1:-1,f.push(ne.x,ne.y,ne.z),d.push(ce/C),d.push(1-re/N),I+=1}}for(let re=0;re<N;re++)for(let oe=0;oe<C;oe++){const ce=m+oe+Y*re,Q=m+oe+Y*(re+1),Pe=m+(oe+1)+Y*(re+1),ze=m+(oe+1)+Y*re;l.push(ce,Q,ze),l.push(Q,Pe,ze),D+=6}o.addGroup(u,D,b),u+=D,m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Yi(n[t]);for(const r in i)e[r]=i[r]}return e}function $m(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ld(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Zm={clone:Yi,merge:It};var Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new k,gc=new tt,xc=new tt;class en extends cd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,xc),t.subVectors(xc,gc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Ni=1;class Qm extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Ci,Ni,e,t);r.layers=this.layers,this.add(r);const s=new en(Ci,Ni,e,t);s.layers=this.layers,this.add(s);const a=new en(Ci,Ni,e,t);a.layers=this.layers,this.add(a);const o=new en(Ci,Ni,e,t);o.layers=this.layers,this.add(o);const l=new en(Ci,Ni,e,t);l.layers=this.layers,this.add(l);const c=new en(Ci,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,m,u),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ud extends Ot{constructor(e=[],t=pi,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ud(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tr(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Yi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Dn});s.uniforms.tEquirect.value=t;const a=new Rt(r,s),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Dt),new Qm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ii extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=f.position.distanceTo(d.position),u=.02,x=.005;c.inputState.pinching&&m>u+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=u-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class cl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(e),this.density=t}clone(){return new cl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tg extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ng extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Nt,f=Nt,d,m){super(null,a,o,l,c,f,r,s,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ba=new k,ig=new k,rg=new Ve;class li{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ba.subVectors(i,t).cross(ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rg.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new Er,sg=new tt(.5,.5),Qr=new k;class hd{constructor(e=new li,t=new li,i=new li,r=new li,s=new li,a=new li){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],d=s[5],m=s[6],u=s[7],x=s[8],v=s[9],g=s[10],p=s[11],y=s[12],M=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-a,u-f,p-x,R-y).normalize(),r[1].setComponents(c+a,u+f,p+x,R+y).normalize(),r[2].setComponents(c+o,u+d,p+v,R+M).normalize(),r[3].setComponents(c-o,u-d,p-v,R-M).normalize(),i)r[4].setComponents(l,m,g,S).normalize(),r[5].setComponents(c-l,u-m,p-g,R-S).normalize();else if(r[4].setComponents(c-l,u-m,p-g,R-S).normalize(),t===_n)r[5].setComponents(c+l,u+m,p+g,R+S).normalize();else if(t===_s)r[5].setComponents(l,m,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);const t=sg.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fd extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bs=new k,Ss=new k,vc=new yt,lr=new ll,es=new Er,Sa=new k,_c=new k;class yc extends kt{constructor(e=new Ct,t=new fd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bs.fromBufferAttribute(t,r-1),Ss.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bs.distanceTo(Ss);e.setAttribute("lineDistance",new bt(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),es.radius+=s,e.ray.intersectsSphere(es)===!1)return;vc.copy(r).invert(),lr.copy(e.ray).applyMatrix4(vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,m=i.attributes.position;if(f!==null){const u=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let v=u,g=x-1;v<g;v+=c){const p=f.getX(v),y=f.getX(v+1),M=ts(this,e,lr,l,p,y,v);M&&t.push(M)}if(this.isLineLoop){const v=f.getX(x-1),g=f.getX(u),p=ts(this,e,lr,l,v,g,x-1);p&&t.push(p)}}else{const u=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=u,g=x-1;v<g;v+=c){const p=ts(this,e,lr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=ts(this,e,lr,l,x-1,u,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ts(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(bs.fromBufferAttribute(o,r),Ss.fromBufferAttribute(o,s),t.distanceSqToSegment(bs,Ss,Sa,_c)>i)return;Sa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Sa);if(!(c<e.near||c>e.far))return{distance:c,point:_c.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Lo extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bc=new yt,Do=new ll,ns=new Er,is=new k;class Ma extends kt{constructor(e=new Ct,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(r),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;bc.copy(r).invert(),Do.copy(e.ray).applyMatrix4(bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const m=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let x=m,v=u;x<v;x++){const g=c.getX(x);is.fromBufferAttribute(d,g),Sc(is,g,l,r,e,t,this)}}else{const m=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let x=m,v=u;x<v;x++)is.fromBufferAttribute(d,x),Sc(is,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sc(n,e,t,i,r,s,a){const o=Do.distanceSqToPoint(n);if(o<t){const l=new k;Do.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class _r extends Ot{constructor(e,t,i=Mn,r,s,a,o=Nt,l=Nt,c,f=Fn,d=1){if(f!==Fn&&f!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:d};super(m,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ag extends _r{constructor(e,t=Mn,i=pi,r,s,a=Nt,o=Nt,l,c=Fn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pd extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends Ct{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new k,S=new k,R=new k;for(let T=0;T<t.length;T+=3)u(t[T+0],M),u(t[T+1],S),u(t[T+2],R),l(M,S,R,y)}function l(y,M,S,R){const T=R+1,C=[];for(let N=0;N<=T;N++){C[N]=[];const b=y.clone().lerp(S,N/T),E=M.clone().lerp(S,N/T),L=T-N;for(let V=0;V<=L;V++)V===0&&N===T?C[N][V]=b:C[N][V]=b.clone().lerp(E,V/L)}for(let N=0;N<T;N++)for(let b=0;b<2*(T-N)-1;b++){const E=Math.floor(b/2);b%2===0?(m(C[N][E+1]),m(C[N+1][E]),m(C[N][E])):(m(C[N][E+1]),m(C[N+1][E+1]),m(C[N+1][E]))}}function c(y){const M=new k;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(y),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function f(){const y=new k;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const S=g(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(S,1-R)}x(),d()}function d(){for(let y=0;y<a.length;y+=6){const M=a[y+0],S=a[y+2],R=a[y+4],T=Math.max(M,S,R),C=Math.min(M,S,R);T>.9&&C<.1&&(M<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function m(y){s.push(y.x,y.y,y.z)}function u(y,M){const S=y*3;M.x=e[S+0],M.y=e[S+1],M.z=e[S+2]}function x(){const y=new k,M=new k,S=new k,R=new k,T=new tt,C=new tt,N=new tt;for(let b=0,E=0;b<s.length;b+=9,E+=6){y.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),S.set(s[b+6],s[b+7],s[b+8]),T.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),N.set(a[E+4],a[E+5]),R.copy(y).add(M).add(S).divideScalar(3);const L=g(R);v(T,E+0,y,L),v(C,E+2,M,L),v(N,E+4,S,L)}}function v(y,M,S,R){R<0&&y.x===1&&(a[M]=y.x-1),S.x===0&&S.z===0&&(a[M]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.vertices,e.indices,e.radius,e.detail)}}class Ms extends ul{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ms(e.radius,e.detail)}}class Ns extends Ct{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,m=t/l,u=[],x=[],v=[],g=[];for(let p=0;p<f;p++){const y=p*m-a;for(let M=0;M<c;M++){const S=M*d-s;x.push(S,-y,0),v.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,S=y+c*(p+1),R=y+1+c*(p+1),T=y+1+c*p;u.push(M,S,T),u.push(S,R,T)}this.setIndex(u),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class dl extends Ct{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],f=[];let d=e;const m=(t-e)/r,u=new k,x=new tt;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const p=s+g/i*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),x.x=(u.x/t+1)/2,x.y=(u.y/t+1)/2,f.push(x.x,x.y)}d+=m}for(let v=0;v<r;v++){const g=v*(i+1);for(let p=0;p<i;p++){const y=p+g,M=y,S=y+i+1,R=y+i+2,T=y+1;o.push(M,S,T),o.push(S,R,T)}}this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mr extends Ct{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new k,m=new k,u=[],x=[],v=[],g=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const T=R/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+M*o),x.push(d.x,d.y,d.z),m.copy(d).normalize(),v.push(m.x,m.y,m.z),g.push(T+S,1-M),y.push(c++)}f.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const M=f[p][y+1],S=f[p][y],R=f[p+1][y],T=f[p+1][y+1];(p!==0||a>0)&&u.push(M,S,T),(p!==i-1||l<Math.PI)&&u.push(S,R,T)}this.setIndex(u),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ws extends Ct{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],f=new k,d=new k,m=new k;for(let u=0;u<=i;u++)for(let x=0;x<=r;x++){const v=x/r*s,g=u/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(d,f).normalize(),l.push(m.x,m.y,m.z),c.push(x/r),c.push(u/i)}for(let u=1;u<=i;u++)for(let x=1;x<=r;x++){const v=(r+1)*u+x-1,g=(r+1)*(u-1)+x-1,p=(r+1)*(u-1)+x,y=(r+1)*u+x;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class og extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lg extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class md extends cd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ug extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Mc(n,e,t,i){const r=dg(i);switch(t){case Qu:return n*e;case td:return n*e/r.components*r.byteLength;case nl:return n*e/r.components*r.byteLength;case Xi:return n*e*2/r.components*r.byteLength;case il:return n*e*2/r.components*r.byteLength;case ed:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case rl:return n*e*4/r.components*r.byteLength;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case to:return Math.max(n,16)*Math.max(e,8)/4;case Ja:case eo:return Math.max(n,8)*Math.max(e,8)/2;case no:case io:case so:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wo:case Eo:case To:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ao:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Co:case No:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dg(n){switch(n){case tn:case $u:return{byteLength:1,components:1};case gr:case Zu:case In:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case Mn:case Qo:case vn:return{byteLength:4,components:1};case Ku:case Ju:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function gd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hg(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,d=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,f),o.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const f=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,f);else{d.sort((u,x)=>u.start-x.start);let m=0;for(let u=1;u<d.length;u++){const x=d[m],v=d[u];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++m,d[m]=v)}d.length=m+1;for(let u=0,x=d.length;u<x;u++){const v=d[u];n.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_g=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ag=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Px=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:_g,aomap_pars_fragment:yg,batching_pars_vertex:bg,batching_vertex:Sg,begin_vertex:Mg,beginnormal_vertex:wg,bsdfs:Eg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ug,color_vertex:Ig,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:kg,displacementmap_pars_vertex:Bg,displacementmap_vertex:zg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Vg,colorspace_fragment:Hg,colorspace_pars_fragment:jg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:qg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:s0,envmap_vertex:$g,fog_vertex:Zg,fog_pars_vertex:Kg,fog_fragment:Jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:r0,lights_toon_fragment:a0,lights_toon_pars_fragment:o0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:h0,lights_fragment_maps:f0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:v0,map_fragment:_0,map_pars_fragment:y0,map_particle_fragment:b0,map_particle_pars_fragment:S0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:w0,morphinstance_vertex:E0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:N0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:U0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:G0,premultiplied_alpha_fragment:V0,project_vertex:H0,dithering_fragment:j0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:$0,shadowmap_vertex:Z0,shadowmask_pars_fragment:K0,skinbase_vertex:J0,skinning_pars_vertex:Q0,skinning_vertex:ex,skinnormal_vertex:tx,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:rx,tonemapping_pars_fragment:sx,transmission_fragment:ax,transmission_pars_fragment:ox,uv_pars_fragment:lx,uv_pars_vertex:cx,uv_vertex:ux,worldpos_vertex:dx,background_vert:hx,background_frag:fx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:xx,depth_vert:vx,depth_frag:_x,distance_vert:yx,distance_frag:bx,equirect_vert:Sx,equirect_frag:Mx,linedashed_vert:wx,linedashed_frag:Ex,meshbasic_vert:Tx,meshbasic_frag:Ax,meshlambert_vert:Rx,meshlambert_frag:Cx,meshmatcap_vert:Nx,meshmatcap_frag:Px,meshnormal_vert:Lx,meshnormal_frag:Dx,meshphong_vert:Ux,meshphong_frag:Ix,meshphysical_vert:Fx,meshphysical_frag:Ox,meshtoon_vert:kx,meshtoon_frag:Bx,points_vert:zx,points_frag:Gx,shadow_vert:Vx,shadow_frag:Hx,sprite_vert:jx,sprite_frag:Wx},pe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},mn={basic:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new st(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new st(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:It([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:It([pe.lights,pe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};mn.physical={uniforms:It([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const rs={r:0,b:0,g:0},ai=new On,Xx=new yt;function qx(n,e,t,i,r,s,a){const o=new st(0);let l=s===!0?0:1,c,f,d=null,m=0,u=null;function x(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function v(M){let S=!1;const R=x(M);R===null?p(o,l):R&&R.isColor&&(p(R,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,S){const R=x(S);R&&(R.isCubeTexture||R.mapping===Cs)?(f===void 0&&(f=new Rt(new Tr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Yi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ai.copy(S.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),f.material.uniforms.envMap.value=R,f.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(ai)),f.material.toneMapped=Je.getTransfer(R.colorSpace)!==ut,(d!==R||m!==R.version||u!==n.toneMapping)&&(f.material.needsUpdate=!0,d=R,m=R.version,u=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Rt(new Ns(2,2),new wn({name:"BackgroundMaterial",uniforms:Yi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Je.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||m!==R.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,m=R.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(rs,ld(n)),i.buffers.color.setClear(rs.r,rs.g,rs.b,S,a)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:v,addToRenderList:g,dispose:y}}function Yx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,a=!1;function o(E,L,V,G,q){let Y=!1;const z=d(G,V,L);s!==z&&(s=z,c(s.object)),Y=u(E,G,V,q),Y&&x(E,G,V,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(E,L,V,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function f(E){return n.deleteVertexArray(E)}function d(E,L,V){const G=V.wireframe===!0;let q=i[E.id];q===void 0&&(q={},i[E.id]=q);let Y=q[L.id];Y===void 0&&(Y={},q[L.id]=Y);let z=Y[G];return z===void 0&&(z=m(l()),Y[G]=z),z}function m(E){const L=[],V=[],G=[];for(let q=0;q<t;q++)L[q]=0,V[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:G,object:E,attributes:{},index:null}}function u(E,L,V,G){const q=s.attributes,Y=L.attributes;let z=0;const I=V.getAttributes();for(const D in I)if(I[D].location>=0){const re=q[D];let oe=Y[D];if(oe===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),re===void 0||re.attribute!==oe||oe&&re.data!==oe.data)return!0;z++}return s.attributesNum!==z||s.index!==G}function x(E,L,V,G){const q={},Y=L.attributes;let z=0;const I=V.getAttributes();for(const D in I)if(I[D].location>=0){let re=Y[D];re===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));const oe={};oe.attribute=re,re&&re.data&&(oe.data=re.data),q[D]=oe,z++}s.attributes=q,s.attributesNum=z,s.index=G}function v(){const E=s.newAttributes;for(let L=0,V=E.length;L<V;L++)E[L]=0}function g(E){p(E,0)}function p(E,L){const V=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;V[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),q[E]!==L&&(n.vertexAttribDivisor(E,L),q[E]=L)}function y(){const E=s.newAttributes,L=s.enabledAttributes;for(let V=0,G=L.length;V<G;V++)L[V]!==E[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function M(E,L,V,G,q,Y,z){z===!0?n.vertexAttribIPointer(E,L,V,q,Y):n.vertexAttribPointer(E,L,V,G,q,Y)}function S(E,L,V,G){v();const q=G.attributes,Y=V.getAttributes(),z=L.defaultAttributeValues;for(const I in Y){const D=Y[I];if(D.location>=0){let ne=q[I];if(ne===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const re=ne.normalized,oe=ne.itemSize,ce=e.get(ne);if(ce===void 0)continue;const Q=ce.buffer,Pe=ce.type,ze=ce.bytesPerElement,W=Pe===n.INT||Pe===n.UNSIGNED_INT||ne.gpuType===Qo;if(ne.isInterleavedBufferAttribute){const $=ne.data,ve=$.stride,Ie=ne.offset;if($.isInstancedInterleavedBuffer){for(let _e=0;_e<D.locationSize;_e++)p(D.location+_e,$.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<D.locationSize;_e++)g(D.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let _e=0;_e<D.locationSize;_e++)M(D.location+_e,oe/D.locationSize,Pe,re,ve*ze,(Ie+oe/D.locationSize*_e)*ze,W)}else{if(ne.isInstancedBufferAttribute){for(let $=0;$<D.locationSize;$++)p(D.location+$,ne.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let $=0;$<D.locationSize;$++)g(D.location+$);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let $=0;$<D.locationSize;$++)M(D.location+$,oe/D.locationSize,Pe,re,oe*ze,oe/D.locationSize*$*ze,W)}}else if(z!==void 0){const re=z[I];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(D.location,re);break;case 3:n.vertexAttrib3fv(D.location,re);break;case 4:n.vertexAttrib4fv(D.location,re);break;default:n.vertexAttrib1fv(D.location,re)}}}}y()}function R(){N();for(const E in i){const L=i[E];for(const V in L){const G=L[V];for(const q in G)f(G[q].object),delete G[q];delete L[V]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const V in L){const G=L[V];for(const q in G)f(G[q].object),delete G[q];delete L[V]}delete i[E.id]}function C(E){for(const L in i){const V=i[L];if(V[E.id]===void 0)continue;const G=V[E.id];for(const q in G)f(G[q].object),delete G[q];delete V[E.id]}}function N(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function $x(n,e,t){let i;function r(c){i=c}function s(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function a(c,f,d){d!==0&&(n.drawArraysInstanced(i,c,f,d),t.update(f,i,d))}function o(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let u=0;for(let x=0;x<d;x++)u+=f[x];t.update(u,i,1)}function l(c,f,d,m){if(d===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let x=0;x<c.length;x++)a(c[x],f[x],m[x]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,f,0,m,0,d);let x=0;for(let v=0;v<d;v++)x+=f[v]*m[v];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==tn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vn&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(ke("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:R,samples:T}}function Kx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new li,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const u=d.length!==0||m||i!==0||r;return r=m,i=d.length,u},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){t=f(d,m,0)},this.setState=function(d,m,u){const x=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const y=s?0:i,M=y*4;let S=p.clippingState||null;l.value=S,S=f(x,m,M,u);for(let R=0;R!==M;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,m,u,x){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const p=u+v*4,y=m.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,S=u;M!==v;++M,S+=4)a.copy(d[M]).applyMatrix4(y,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Jx(n){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=pi:o===$a&&(a.mapping=Wi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ya||o===$a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qn=4,wc=[.125,.215,.35,.446,.526,.582],ui=20,Qx=256,cr=new md,Ec=new st;let wa=null,Ea=0,Ta=0,Aa=!1;const ev=new k;class Tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ev}=s;wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ea,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,Pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:In,format:dn,colorSpace:qi,depthBuffer:!1},r=Ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tv(s)),this._blurMaterial=iv(s,e,t),this._ggxMaterial=nv(s,e,t)}return r}_compileMaterial(e){const t=new Rt(new Ct,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,i,r,s){const l=new en(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,u=d.toneMapping;d.getClearColor(Ec),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new Tr,new fn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Ec),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const R=this._cubeSize;Pi(r,S*R,M>2?R:0,R,R),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=u,d.autoClear=m,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Pi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),m=0+c*1.25,u=d*m,{_lodMax:x}=this,v=this._sizeLods[i],g=3*v*(i>x-qn?i-x+qn:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=x-t,Pi(s,g,p,3*v,2*v),r.setRenderTarget(s),r.render(o,cr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Pi(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(o,cr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=c;const m=c.uniforms,u=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*ui-1),v=s/x,g=isFinite(s)?1+Math.floor(f*v):ui;g>ui&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ui}`);const p=[];let y=0;for(let C=0;C<ui;++C){const N=C/v,b=Math.exp(-N*N/2);p.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;m.envMap.value=e.texture,m.samples.value=g,m.weights.value=p,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:M}=this;m.dTheta.value=x,m.mipInt.value=M-i;const S=this._sizeLods[r],R=3*S*(r>M-qn?r-M+qn:0),T=4*(this._cubeSize-S);Pi(t,R,T,3*S,2*S),l.setRenderTarget(t),l.render(d,cr)}}function tv(n){const e=[],t=[],i=[];let r=n;const s=n-qn+1+wc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-qn?l=wc[a-n+qn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,d=1+c,m=[f,f,d,f,d,d,f,f,d,d,f,d],u=6,x=6,v=3,g=2,p=1,y=new Float32Array(v*x*u),M=new Float32Array(g*x*u),S=new Float32Array(p*x*u);for(let T=0;T<u;T++){const C=T%3*2/3-1,N=T>2?0:-1,b=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];y.set(b,v*x*T),M.set(m,g*x*T);const E=[T,T,T,T,T,T];S.set(E,p*x*T)}const R=new Ct;R.setAttribute("position",new nn(y,v)),R.setAttribute("uv",new nn(M,g)),R.setAttribute("faceIndex",new nn(S,p)),i.push(new Rt(R,null)),r>qn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ac(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=Cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nv(n,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ps(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function iv(n,e,t){const i=new Float32Array(ui),r=new k(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Rc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Cc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ya||l===$a,f=l===pi||l===Wi;if(c||f){let d=e.get(o);const m=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new Tc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return c&&u&&u.height>0||f&&u&&r(u)?(t===null&&(t=new Tc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vr("WebGLRenderer: "+i+" extension not supported."),r}}}function av(n,e,t,i){const r={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",a),delete r[m.id];const u=s.get(m);u&&(e.remove(u),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(d,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(d){const m=d.attributes;for(const u in m)e.update(m[u],n.ARRAY_BUFFER)}function c(d){const m=[],u=d.index,x=d.attributes.position;let v=0;if(u!==null){const y=u.array;v=u.version;for(let M=0,S=y.length;M<S;M+=3){const R=y[M+0],T=y[M+1],C=y[M+2];m.push(R,T,T,C,C,R)}}else if(x!==void 0){const y=x.array;v=x.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const R=M+0,T=M+1,C=M+2;m.push(R,T,T,C,C,R)}}else return;const g=new(nd(m)?od:ad)(m,1);g.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function f(d){const m=s.get(d);if(m){const u=d.index;u!==null&&m.version<u.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function ov(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,u){n.drawElements(i,u,s,m*a),t.update(u,i,1)}function c(m,u,x){x!==0&&(n.drawElementsInstanced(i,u,s,m*a,x),t.update(u,i,x))}function f(m,u,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,m,0,x);let g=0;for(let p=0;p<x;p++)g+=u[p];t.update(g,i,1)}function d(m,u,x,v){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<m.length;p++)c(m[p]/a,u[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,u,0,s,m,0,v,0,x);let p=0;for(let y=0;y<x;y++)p+=u[y]*v[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function lv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cv(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let m=i.get(o);if(m===void 0||m.count!==d){let u=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",u)};m!==void 0&&m.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let R=o.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*T*4*d),N=new id(C,R,T,d);N.type=vn,N.needsUpdate=!0;const b=S*4;for(let E=0;E<d;E++){const L=p[E],V=y[E],G=M[E],q=R*T*4*E;for(let Y=0;Y<L.count;Y++){const z=Y*b;x===!0&&(r.fromBufferAttribute(L,Y),C[q+z+0]=r.x,C[q+z+1]=r.y,C[q+z+2]=r.z,C[q+z+3]=0),v===!0&&(r.fromBufferAttribute(V,Y),C[q+z+4]=r.x,C[q+z+5]=r.y,C[q+z+6]=r.z,C[q+z+7]=0),g===!0&&(r.fromBufferAttribute(G,Y),C[q+z+8]=r.x,C[q+z+9]=r.y,C[q+z+10]=r.z,C[q+z+11]=G.itemSize===4?r.w:1)}}m={count:d,texture:N,size:new tt(R,T)},i.set(o,m),o.addEventListener("dispose",u)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];const x=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function uv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const dv={[Gu]:"LINEAR_TONE_MAPPING",[Vu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[ju]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[qu]:"NEUTRAL_TONE_MAPPING",[Wu]:"CUSTOM_TONE_MAPPING"};function hv(n,e,t,i,r){const s=new Sn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Sn(e,t,{type:In,depthBuffer:!1,stencilBuffer:!1}),o=new Ct;o.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bt([0,2,0,0,2,0],2));const l=new og({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Rt(o,l),f=new md(-1,1,1,-1,0,1);let d=null,m=null,u=!1,x,v=null,g=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),a.setSize(y,M);for(let S=0;S<g.length;S++){const R=g[S];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const M=s.width,S=s.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(M,S)}},this.begin=function(y,M){if(u||y.toneMapping===bn&&g.length===0)return!1;if(v=M,M!==null){const S=M.width,R=M.height;(s.width!==S||s.height!==R)&&this.setSize(S,R)}return p===!1&&y.setRenderTarget(s),x=y.toneMapping,y.toneMapping=bn,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=x,u=!0;let S=s,R=a;for(let T=0;T<g.length;T++){const C=g[T];if(C.enabled!==!1&&(C.render(y,R,S,M),C.needsSwap!==!1)){const N=S;S=R,R=N}}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,l.defines={},Je.getTransfer(d)===ut&&(l.defines.SRGB_TRANSFER="");const T=dv[m];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(v),y.render(c,f),v=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const xd=new Ot,Uo=new _r(1,1),vd=new id,_d=new Om,yd=new ud,Nc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Uc=new Float32Array(4);function Qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Nc[r];if(s===void 0&&(s=new Float32Array(r),Nc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ls(n,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Uc.set(i),n.uniformMatrix2fv(this.addr,!1,Uc),Tt(t,i)}}function vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),Tt(t,i)}}function _v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Lc.set(i),n.uniformMatrix4fv(this.addr,!1,Lc),Tt(t,i)}}function yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function wv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?al:sl,s=Uo):s=xd,t.setTexture2D(e||s,r)}function Cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_d,r)}function Nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yd,r)}function Pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vd,r)}function Lv(n){switch(n){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return wv;case 36294:return Ev;case 36295:return Tv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Dv(n,e){n.uniform1fv(this.addr,e)}function Uv(n,e){const t=Qi(e,this.size,2);n.uniform2fv(this.addr,t)}function Iv(n,e){const t=Qi(e,this.size,3);n.uniform3fv(this.addr,t)}function Fv(n,e){const t=Qi(e,this.size,4);n.uniform4fv(this.addr,t)}function Ov(n,e){const t=Qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kv(n,e){const t=Qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bv(n,e){const t=Qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Vv(n,e){n.uniform3iv(this.addr,e)}function Hv(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Wv(n,e){n.uniform2uiv(this.addr,e)}function Xv(n,e){n.uniform3uiv(this.addr,e)}function qv(n,e){n.uniform4uiv(this.addr,e)}function Yv(n,e,t){const i=this.cache,r=e.length,s=Ls(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uo:a=xd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function $v(n,e,t){const i=this.cache,r=e.length,s=Ls(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_d,s[a])}function Zv(n,e,t){const i=this.cache,r=e.length,s=Ls(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||yd,s[a])}function Kv(n,e,t){const i=this.cache,r=e.length,s=Ls(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||vd,s[a])}function Jv(n){switch(n){case 5126:return Dv;case 35664:return Uv;case 35665:return Iv;case 35666:return Fv;case 35674:return Ov;case 35675:return kv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return Hv;case 5125:return jv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}}class Qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lv(t.type)}}class e_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jv(t.type)}}class t_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Ic(n,e){n.seq.push(e),n.map[e.id]=e}function n_(n,e,t){const i=n.name,r=i.length;for(Ra.lastIndex=0;;){const s=Ra.exec(i),a=Ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ic(t,c===void 0?new Qv(o,n,e):new e_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new t_(o),Ic(t,d)),t=d}}}class hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);n_(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const i_=37297;let r_=0;function s_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Oc=new Ve;function a_(n){Je._getMatrix(Oc,Je.workingColorSpace,n);const e=`mat3( ${Oc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case vs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+s_(n.getShaderSource(e),o)}else return s}function o_(n,e){const t=a_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const l_={[Gu]:"Linear",[Vu]:"Reinhard",[Hu]:"Cineon",[ju]:"ACESFilmic",[Xu]:"AgX",[qu]:"Neutral",[Wu]:"Custom"};function c_(n,e){const t=l_[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new k;function u_(){Je.getLuminanceCoefficients(ss);const n=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function h_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fr(n){return n!==""}function Bc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(n){return n.replace(p_,g_)}const m_=new Map;function g_(n,e){let t=He[e];if(t===void 0){const i=m_.get(e);if(i!==void 0)t=He[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(n){return n.replace(x_,v_)}function v_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const __={[os]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function y_(n){return __[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b_={[pi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE_UV"};function S_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const M_={[Wi]:"ENVMAP_MODE_REFRACTION"};function w_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":M_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E_={[zu]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};function T_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":E_[n.combine]||"ENVMAP_BLENDING_NONE"}function A_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function R_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=y_(t),c=S_(t),f=w_(t),d=T_(t),m=A_(t),u=d_(t),x=h_(s),v=r.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(g=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?He.tonemapping_pars_fragment:"",t.toneMapping!==bn?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,o_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Io(a),a=Bc(a,t),a=zc(a,t),o=Io(o),o=Bc(o,t),o=zc(o,t),a=Gc(a),o=Gc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+g+a,S=y+p+o,R=Fc(r,r.VERTEX_SHADER,M),T=Fc(r,r.FRAGMENT_SHADER,S);r.attachShader(v,R),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(R)||"",q=r.getShaderInfoLog(T)||"",Y=V.trim(),z=G.trim(),I=q.trim();let D=!0,ne=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,T);else{const re=kc(r,R,"vertex"),oe=kc(r,T,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+re+`
`+oe)}else Y!==""?ke("WebGLProgram: Program Info Log:",Y):(z===""||I==="")&&(ne=!1);ne&&(L.diagnostics={runnable:D,programLog:Y,vertexShader:{log:z,prefix:g},fragmentShader:{log:I,prefix:p}})}r.deleteShader(R),r.deleteShader(T),N=new hs(r,v),b=f_(r,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,i_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let C_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P_(e),t.set(e,i)),i}}class P_{constructor(e){this.id=C_++,this.code=e,this.usedTimes=0}}function L_(n,e,t,i,r,s,a){const o=new rd,l=new N_,c=new Set,f=[],d=new Map,m=r.logarithmicDepthBuffer;let u=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,E,L,V,G){const q=V.fog,Y=G.geometry,z=b.isMeshStandardMaterial?V.environment:null,I=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),D=I&&I.mapping===Cs?I.image.height:null,ne=x[b.type];b.precision!==null&&(u=r.getMaxPrecision(b.precision),u!==b.precision&&ke("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=re!==void 0?re.length:0;let ce=0;Y.morphAttributes.position!==void 0&&(ce=1),Y.morphAttributes.normal!==void 0&&(ce=2),Y.morphAttributes.color!==void 0&&(ce=3);let Q,Pe,ze,W;if(ne){const rt=mn[ne];Q=rt.vertexShader,Pe=rt.fragmentShader}else Q=b.vertexShader,Pe=b.fragmentShader,l.update(b),ze=l.getVertexShaderID(b),W=l.getFragmentShaderID(b);const $=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ie=G.isInstancedMesh===!0,_e=G.isBatchedMesh===!0,We=!!b.map,pt=!!b.matcap,Ye=!!I,nt=!!b.aoMap,ot=!!b.lightMap,Ge=!!b.bumpMap,xt=!!b.normalMap,P=!!b.displacementMap,dt=!!b.emissiveMap,$e=!!b.metalnessMap,it=!!b.roughnessMap,Ae=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,F=b.iridescence>0,Z=b.sheen>0,J=b.transmission>0,X=Ae&&!!b.anisotropyMap,be=A&&!!b.clearcoatMap,le=A&&!!b.clearcoatNormalMap,Re=A&&!!b.clearcoatRoughnessMap,Ue=F&&!!b.iridescenceMap,ee=F&&!!b.iridescenceThicknessMap,de=Z&&!!b.sheenColorMap,Se=Z&&!!b.sheenRoughnessMap,Ee=!!b.specularMap,se=!!b.specularColorMap,Be=!!b.specularIntensityMap,U=J&&!!b.transmissionMap,he=J&&!!b.thicknessMap,ie=!!b.gradientMap,xe=!!b.alphaMap,te=b.alphaTest>0,K=!!b.alphaHash,ue=!!b.extensions;let Oe=bn;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const lt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:Pe,defines:b.defines,customVertexShaderID:ze,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:_e,batchingColor:_e&&G._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&G.instanceColor!==null,instancingMorph:Ie&&G.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:qi,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:pt,envMap:Ye,envMapMode:Ye&&I.mapping,envMapCubeUVHeight:D,aoMap:nt,lightMap:ot,bumpMap:Ge,normalMap:xt,displacementMap:P,emissiveMap:dt,normalMapObjectSpace:xt&&b.normalMapType===Sm,normalMapTangentSpace:xt&&b.normalMapType===bm,metalnessMap:$e,roughnessMap:it,anisotropy:Ae,anisotropyMap:X,clearcoat:A,clearcoatMap:be,clearcoatNormalMap:le,clearcoatRoughnessMap:Re,dispersion:_,iridescence:F,iridescenceMap:Ue,iridescenceThicknessMap:ee,sheen:Z,sheenColorMap:de,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:se,specularIntensityMap:Be,transmission:J,transmissionMap:U,thicknessMap:he,gradientMap:ie,opaque:b.transparent===!1&&b.blending===ki&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:te,alphaHash:K,combine:b.combine,mapUv:We&&v(b.map.channel),aoMapUv:nt&&v(b.aoMap.channel),lightMapUv:ot&&v(b.lightMap.channel),bumpMapUv:Ge&&v(b.bumpMap.channel),normalMapUv:xt&&v(b.normalMap.channel),displacementMapUv:P&&v(b.displacementMap.channel),emissiveMapUv:dt&&v(b.emissiveMap.channel),metalnessMapUv:$e&&v(b.metalnessMap.channel),roughnessMapUv:it&&v(b.roughnessMap.channel),anisotropyMapUv:X&&v(b.anisotropyMap.channel),clearcoatMapUv:be&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:Ee&&v(b.specularMap.channel),specularColorMapUv:se&&v(b.specularColorMap.channel),specularIntensityMapUv:Be&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:he&&v(b.thicknessMap.channel),alphaMapUv:xe&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||Ae),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(We||xe),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ve,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:dt&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&b.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)E.push(L),E.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(E,b),M(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function y(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function M(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const E=x[b.type];let L;if(E){const V=mn[E];L=Zm.clone(V.uniforms)}else L=b.uniforms;return L}function R(b,E){let L=d.get(E);return L!==void 0?++L.usedTimes:(L=new R_(n,E,b,s),f.push(L),d.set(E,L)),L}function T(b){if(--b.usedTimes===0){const E=f.indexOf(b);f[E]=f[f.length-1],f.pop(),d.delete(b.cacheKey),b.destroy()}}function C(b){l.remove(b)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:f,dispose:N}}function D_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,m,u,x,v,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:u,groupOrder:x,renderOrder:d.renderOrder,z:v,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=u,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function o(d,m,u,x,v,g){const p=a(d,m,u,x,v,g);u.transmission>0?i.push(p):u.transparent===!0?r.push(p):t.push(p)}function l(d,m,u,x,v,g){const p=a(d,m,u,x,v,g);u.transmission>0?i.unshift(p):u.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,m){t.length>1&&t.sort(d||U_),i.length>1&&i.sort(m||Hc),r.length>1&&r.sort(m||Hc)}function f(){for(let d=e,m=n.length;d<m;d++){const u=n[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function I_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new jc,n.set(i,[a])):r>=s.length?(a=new jc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function F_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new st};break;case"SpotLight":t={position:new k,direction:new k,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function O_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k_=0;function B_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z_(n){const e=new F_,t=O_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new yt,a=new yt;function o(c){let f=0,d=0,m=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let u=0,x=0,v=0,g=0,p=0,y=0,M=0,S=0,R=0,T=0,C=0;c.sort(B_);for(let b=0,E=c.length;b<E;b++){const L=c[b],V=L.color,G=L.intensity,q=L.distance;let Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Xi?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=V.r*G,d+=V.g*G,m+=V.b*G;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],G);C++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const I=L.shadow,D=t.get(L);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,i.directionalShadow[u]=D,i.directionalShadowMap[u]=Y,i.directionalShadowMatrix[u]=L.shadow.matrix,y++}i.directional[u]=z,u++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(V).multiplyScalar(G),z.distance=q,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[v]=z;const I=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,I.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=I.matrix,L.castShadow){const D=t.get(L);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=Y,S++}v++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(V).multiplyScalar(G),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=z,g++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const I=L.shadow,D=t.get(L);D.shadowIntensity=I.intensity,D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,D.shadowCameraNear=I.camera.near,D.shadowCameraFar=I.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=L.shadow.matrix,M++}i.point[x]=z,x++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(G),z.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[p]=z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==u||N.pointLength!==x||N.spotLength!==v||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==R||N.numLightProbes!==C)&&(i.directional.length=u,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,N.directionalLength=u,N.pointLength=x,N.spotLength=v,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=R,N.numLightProbes=C,i.version=k_++)}function l(c,f){let d=0,m=0,u=0,x=0,v=0;const g=f.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(M.isSpotLight){const S=i.spot[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),u++}else if(M.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Wc(n){const e=new z_(n),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function G_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wc(n),e.set(r,[o])):s>=a.length?(o=new Wc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],W_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Xc=new yt,ur=new k,Ca=new k;function X_(n,e,t){let i=new hd;const r=new tt,s=new tt,a=new St,o=new lg,l=new cg,c={},f=t.maxTextureSize,d={[Zn]:Ht,[Ht]:Zn,[xn]:xn},m=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:V_,fragmentShader:H_}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const x=new Ct;x.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rt(x,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let p=this.type;this.render=function(T,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===Jp&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=os);const b=n.getRenderTarget(),E=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Dn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Y=>Y.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Y=T.length;q<Y;q++){const z=T[q],I=z.shadow;if(I===void 0){ke("WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const D=I.getFrameExtents();if(r.multiply(D),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,I.mapSize.y=s.y)),I.map===null||G===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===hr){if(z.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Sn(r.x,r.y,{format:Xi,type:In,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),I.map.texture.name=z.name+".shadowMap",I.map.depthTexture=new _r(r.x,r.y,vn),I.map.depthTexture.name=z.name+".shadowMapDepth",I.map.depthTexture.format=Fn,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nt,I.map.depthTexture.magFilter=Nt}else{z.isPointLight?(I.map=new dd(r.x),I.map.depthTexture=new ag(r.x,Mn)):(I.map=new Sn(r.x,r.y),I.map.depthTexture=new _r(r.x,r.y,Mn)),I.map.depthTexture.name=z.name+".shadowMap",I.map.depthTexture.format=Fn;const re=n.state.buffers.depth.getReversed();this.type===os?(I.map.depthTexture.compareFunction=re?al:sl,I.map.depthTexture.minFilter=Dt,I.map.depthTexture.magFilter=Dt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Nt,I.map.depthTexture.magFilter=Nt)}I.camera.updateProjectionMatrix()}const ne=I.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(I.map.isWebGLCubeRenderTarget)n.setRenderTarget(I.map,re),n.clear();else{re===0&&(n.setRenderTarget(I.map),n.clear());const oe=I.getViewport(re);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a)}if(z.isPointLight){const oe=I.camera,ce=I.matrix,Q=z.distance||oe.far;Q!==oe.far&&(oe.far=Q,oe.updateProjectionMatrix()),ur.setFromMatrixPosition(z.matrixWorld),oe.position.copy(ur),Ca.copy(oe.position),Ca.add(j_[re]),oe.up.copy(W_[re]),oe.lookAt(Ca),oe.updateMatrixWorld(),ce.makeTranslation(-ur.x,-ur.y,-ur.z),Xc.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Xc,oe.coordinateSystem,oe.reversedDepth)}else I.updateMatrices(z);i=I.getFrustum(),S(C,N,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===hr&&y(I,N),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,E,L)};function y(T,C){const N=e.update(v);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Sn(r.x,r.y,{format:Xi,type:In})),m.uniforms.shadow_pass.value=T.map.depthTexture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,N,m,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,N,u,v,null)}function M(T,C,N,b){let E=null;const L=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)E=L;else if(E=N.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=E.uuid,G=C.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let Y=q[G];Y===void 0&&(Y=E.clone(),q[G]=Y,C.addEventListener("dispose",R)),E=Y}if(E.visible=C.visible,E.wireframe=C.wireframe,b===hr?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=n.properties.get(E);V.light=N}return E}function S(T,C,N,b,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===hr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const G=e.update(T),q=T.material;if(Array.isArray(q)){const Y=G.groups;for(let z=0,I=Y.length;z<I;z++){const D=Y[z],ne=q[D.materialIndex];if(ne&&ne.visible){const re=M(T,ne,b,E);T.onBeforeShadow(n,T,C,N,G,re,D),n.renderBufferDirect(N,null,G,re,T,D),T.onAfterShadow(n,T,C,N,G,re,D)}}}else if(q.visible){const Y=M(T,q,b,E);T.onBeforeShadow(n,T,C,N,G,Y,null),n.renderBufferDirect(N,null,G,Y,T,null),T.onAfterShadow(n,T,C,N,G,Y,null)}}const V=T.children;for(let G=0,q=V.length;G<q;G++)S(V[G],C,N,b,E)}function R(T){T.target.removeEventListener("dispose",R);for(const N in c){const b=c[N],E=T.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const q_={[Ga]:Va,[Ha]:Xa,[ja]:qa,[ji]:Wa,[Va]:Ga,[Xa]:Ha,[qa]:ja,[Wa]:ji};function Y_(n,e){function t(){let U=!1;const he=new St;let ie=null;const xe=new St(0,0,0,0);return{setMask:function(te){ie!==te&&!U&&(n.colorMask(te,te,te,te),ie=te)},setLocked:function(te){U=te},setClear:function(te,K,ue,Oe,lt){lt===!0&&(te*=Oe,K*=Oe,ue*=Oe),he.set(te,K,ue,Oe),xe.equals(he)===!1&&(n.clearColor(te,K,ue,Oe),xe.copy(he))},reset:function(){U=!1,ie=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,he=!1,ie=null,xe=null,te=null;return{setReversed:function(K){if(he!==K){const ue=e.get("EXT_clip_control");K?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return he},setTest:function(K){K?$(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(K){ie!==K&&!U&&(n.depthMask(K),ie=K)},setFunc:function(K){if(he&&(K=q_[K]),xe!==K){switch(K){case Ga:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case ja:n.depthFunc(n.EQUAL);break;case Wa:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=K}},setLocked:function(K){U=K},setClear:function(K){te!==K&&(he&&(K=1-K),n.clearDepth(K),te=K)},reset:function(){U=!1,ie=null,xe=null,te=null,he=!1}}}function r(){let U=!1,he=null,ie=null,xe=null,te=null,K=null,ue=null,Oe=null,lt=null;return{setTest:function(rt){U||(rt?$(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(rt){he!==rt&&!U&&(n.stencilMask(rt),he=rt)},setFunc:function(rt,at,qe){(ie!==rt||xe!==at||te!==qe)&&(n.stencilFunc(rt,at,qe),ie=rt,xe=at,te=qe)},setOp:function(rt,at,qe){(K!==rt||ue!==at||Oe!==qe)&&(n.stencilOp(rt,at,qe),K=rt,ue=at,Oe=qe)},setLocked:function(rt){U=rt},setClear:function(rt){lt!==rt&&(n.clearStencil(rt),lt=rt)},reset:function(){U=!1,he=null,ie=null,xe=null,te=null,K=null,ue=null,Oe=null,lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},d={},m=new WeakMap,u=[],x=null,v=!1,g=null,p=null,y=null,M=null,S=null,R=null,T=null,C=new st(0,0,0),N=0,b=!1,E=null,L=null,V=null,G=null,q=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,I=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),z=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),z=I>=2);let ne=null,re={};const oe=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Q=new St().fromArray(oe),Pe=new St().fromArray(ce);function ze(U,he,ie,xe){const te=new Uint8Array(4),K=n.createTexture();n.bindTexture(U,K),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<ie;ue++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(he+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return K}const W={};W[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(ji),Ge(!1),xt(Yl),$(n.CULL_FACE),nt(Dn);function $(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function ve(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Ie(U,he){return d[U]!==he?(n.bindFramebuffer(U,he),d[U]=he,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(U,he){let ie=u,xe=!1;if(U){ie=m.get(he),ie===void 0&&(ie=[],m.set(he,ie));const te=U.textures;if(ie.length!==te.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ue=te.length;K<ue;K++)ie[K]=n.COLOR_ATTACHMENT0+K;ie.length=te.length,xe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ie)}function We(U){return x!==U?(n.useProgram(U),x=U,!0):!1}const pt={[ci]:n.FUNC_ADD,[em]:n.FUNC_SUBTRACT,[tm]:n.FUNC_REVERSE_SUBTRACT};pt[nm]=n.MIN,pt[im]=n.MAX;const Ye={[rm]:n.ZERO,[sm]:n.ONE,[am]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[hm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[lm]:n.DST_ALPHA,[om]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[dm]:n.ONE_MINUS_DST_COLOR,[cm]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[pm]:n.ONE_MINUS_CONSTANT_COLOR,[mm]:n.CONSTANT_ALPHA,[gm]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(U,he,ie,xe,te,K,ue,Oe,lt,rt){if(U===Dn){v===!0&&(ve(n.BLEND),v=!1);return}if(v===!1&&($(n.BLEND),v=!0),U!==Qp){if(U!==g||rt!==b){if((p!==ci||S!==ci)&&(n.blendEquation(n.FUNC_ADD),p=ci,S=ci),rt)switch(U){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",U);break}else switch(U){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",U);break}y=null,M=null,R=null,T=null,C.set(0,0,0),N=0,g=U,b=rt}return}te=te||he,K=K||ie,ue=ue||xe,(he!==p||te!==S)&&(n.blendEquationSeparate(pt[he],pt[te]),p=he,S=te),(ie!==y||xe!==M||K!==R||ue!==T)&&(n.blendFuncSeparate(Ye[ie],Ye[xe],Ye[K],Ye[ue]),y=ie,M=xe,R=K,T=ue),(Oe.equals(C)===!1||lt!==N)&&(n.blendColor(Oe.r,Oe.g,Oe.b,lt),C.copy(Oe),N=lt),g=U,b=!1}function ot(U,he){U.side===xn?ve(n.CULL_FACE):$(n.CULL_FACE);let ie=U.side===Ht;he&&(ie=!ie),Ge(ie),U.blending===ki&&U.transparent===!1?nt(Dn):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;o.setTest(xe),xe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function xt(U){U!==Zp?($(n.CULL_FACE),U!==L&&(U===Yl?n.cullFace(n.BACK):U===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),L=U}function P(U){U!==V&&(z&&n.lineWidth(U),V=U)}function dt(U,he,ie){U?($(n.POLYGON_OFFSET_FILL),(G!==he||q!==ie)&&(n.polygonOffset(he,ie),G=he,q=ie)):ve(n.POLYGON_OFFSET_FILL)}function $e(U){U?$(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function it(U){U===void 0&&(U=n.TEXTURE0+Y-1),ne!==U&&(n.activeTexture(U),ne=U)}function Ae(U,he,ie){ie===void 0&&(ne===null?ie=n.TEXTURE0+Y-1:ie=ne);let xe=re[ie];xe===void 0&&(xe={type:void 0,texture:void 0},re[ie]=xe),(xe.type!==U||xe.texture!==he)&&(ne!==ie&&(n.activeTexture(ie),ne=ie),n.bindTexture(U,he||W[U]),xe.type=U,xe.texture=he)}function A(){const U=re[ne];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function Z(){try{n.texSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function J(){try{n.texSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function le(){try{n.texStorage2D(...arguments)}catch(U){et("WebGLState:",U)}}function Re(){try{n.texStorage3D(...arguments)}catch(U){et("WebGLState:",U)}}function Ue(){try{n.texImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function ee(){try{n.texImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function de(U){Q.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Q.copy(U))}function Se(U){Pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Pe.copy(U))}function Ee(U,he){let ie=c.get(he);ie===void 0&&(ie=new WeakMap,c.set(he,ie));let xe=ie.get(U);xe===void 0&&(xe=n.getUniformBlockIndex(he,U.name),ie.set(U,xe))}function se(U,he){const xe=c.get(he).get(U);l.get(he)!==xe&&(n.uniformBlockBinding(he,xe,U.__bindingPointIndex),l.set(he,xe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ne=null,re={},d={},m=new WeakMap,u=[],x=null,v=!1,g=null,p=null,y=null,M=null,S=null,R=null,T=null,C=new st(0,0,0),N=0,b=!1,E=null,L=null,V=null,G=null,q=null,Q.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:ve,bindFramebuffer:Ie,drawBuffers:_e,useProgram:We,setBlending:nt,setMaterial:ot,setFlipSided:Ge,setCullFace:xt,setLineWidth:P,setPolygonOffset:dt,setScissorTest:$e,activeTexture:it,bindTexture:Ae,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Ue,texImage3D:ee,updateUBOMapping:Ee,uniformBlockBinding:se,texStorage2D:le,texStorage3D:Re,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:be,scissor:de,viewport:Se,reset:Be}}function $_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,f=new WeakMap;let d;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return u?new OffscreenCanvas(A,_):ys("canvas")}function v(A,_,F){let Z=1;const J=Ae(A);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Z*J.width),be=Math.floor(Z*J.height);d===void 0&&(d=x(X,be));const le=_?x(X,be):d;return le.width=X,le.height=be,le.getContext("2d").drawImage(A,0,0,X,be),ke("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+be+")."),le}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,_,F,Z,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=_;if(_===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),_===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const be=J?vs:Je.getTransfer(Z);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=be===ut?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(A,_){let F;return A?_===null||_===Mn||_===xr?F=n.DEPTH24_STENCIL8:_===vn?F=n.DEPTH32F_STENCIL8:_===gr&&(F=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mn||_===xr?F=n.DEPTH_COMPONENT24:_===vn?F=n.DEPTH_COMPONENT32F:_===gr&&(F=n.DEPTH_COMPONENT16),F}function R(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),N(_),_.isVideoTexture&&f.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),E(_)}function N(A){const _=i.get(A);if(_.__webglInit===void 0)return;const F=A.source,Z=m.get(F);if(Z){const J=Z[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(A),Object.keys(Z).length===0&&m.delete(F)}i.remove(A)}function b(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const F=A.source,Z=m.get(F);delete Z[_.__cacheKey],a.memory.textures--}function E(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let J=0;J<_.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=A.textures;for(let Z=0,J=F.length;Z<J;Z++){const X=i.get(F[Z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(A)}let L=0;function V(){L=0}function G(){const A=L;return A>=r.maxTextures&&ke("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function q(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Y(A,_){const F=i.get(A);if(A.isVideoTexture&&$e(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const Z=A.image;if(Z===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function z(A,_){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){W(F,A,_);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function I(A,_){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){W(F,A,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function D(A,_){const F=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){$(F,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const ne={[Za]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},re={[Nt]:n.NEAREST,[_m]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Ks]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},oe={[Mm]:n.NEVER,[Rm]:n.ALWAYS,[wm]:n.LESS,[sl]:n.LEQUAL,[Em]:n.EQUAL,[al]:n.GEQUAL,[Tm]:n.GREATER,[Am]:n.NOTEQUAL};function ce(A,_){if(_.type===vn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===Ks||_.magFilter===Fr||_.magFilter===di||_.minFilter===Dt||_.minFilter===Ks||_.minFilter===Fr||_.minFilter===di)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ne[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ne[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ne[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,re[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nt||_.minFilter!==Fr&&_.minFilter!==di||_.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Q(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const Z=_.source;let J=m.get(Z);J===void 0&&(J={},m.set(Z,J));const X=q(_);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;const be=J[A.__cacheKey];be!==void 0&&(J[A.__cacheKey].usedTimes--,be.usedTimes===0&&b(_)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return F}function Pe(A,_,F){return Math.floor(Math.floor(A/F)/_)}function ze(A,_,F,Z){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,Z,_.data);else{X.sort((ee,de)=>ee.start-de.start);let be=0;for(let ee=1;ee<X.length;ee++){const de=X[be],Se=X[ee],Ee=de.start+de.count,se=Pe(Se.start,_.width,4),Be=Pe(de.start,_.width,4);Se.start<=Ee+1&&se===Be&&Pe(Se.start+Se.count-1,_.width,4)===se?de.count=Math.max(de.count,Se.start+Se.count-de.start):(++be,X[be]=Se)}X.length=be+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ee=0,de=X.length;ee<de;ee++){const Se=X[ee],Ee=Math.floor(Se.start/4),se=Math.ceil(Se.count/4),Be=Ee%_.width,U=Math.floor(Ee/_.width),he=se,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Be,U,he,ie,F,Z,_.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function W(A,_,F){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const J=Q(A,_),X=_.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+F);const be=i.get(X);if(X.version!==be.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const le=Je.getPrimaries(Je.workingColorSpace),Re=_.colorSpace===Wn?null:Je.getPrimaries(_.colorSpace),Ue=_.colorSpace===Wn||le===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ee=v(_.image,!1,r.maxTextureSize);ee=it(_,ee);const de=s.convert(_.format,_.colorSpace),Se=s.convert(_.type);let Ee=M(_.internalFormat,de,Se,_.colorSpace,_.isVideoTexture);ce(Z,_);let se;const Be=_.mipmaps,U=_.isVideoTexture!==!0,he=be.__version===void 0||J===!0,ie=X.dataReady,xe=R(_,ee);if(_.isDepthTexture)Ee=S(_.format===hi,_.type),he&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ee,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ee.width,ee.height,0,de,Se,null));else if(_.isDataTexture)if(Be.length>0){U&&he&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,Be[0].width,Be[0].height);for(let te=0,K=Be.length;te<K;te++)se=Be[te],U?ie&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,se.width,se.height,de,Se,se.data):t.texImage2D(n.TEXTURE_2D,te,Ee,se.width,se.height,0,de,Se,se.data);_.generateMipmaps=!1}else U?(he&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,ee.width,ee.height),ie&&ze(_,ee,de,Se)):t.texImage2D(n.TEXTURE_2D,0,Ee,ee.width,ee.height,0,de,Se,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,Be[0].width,Be[0].height,ee.depth);for(let te=0,K=Be.length;te<K;te++)if(se=Be[te],_.format!==dn)if(de!==null)if(U){if(ie)if(_.layerUpdates.size>0){const ue=Mc(se.width,se.height,_.format,_.type);for(const Oe of _.layerUpdates){const lt=se.data.subarray(Oe*ue/se.data.BYTES_PER_ELEMENT,(Oe+1)*ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Oe,se.width,se.height,1,de,lt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,ee.depth,de,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ee,se.width,se.height,ee.depth,0,se.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,ee.depth,de,Se,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ee,se.width,se.height,ee.depth,0,de,Se,se.data)}else{U&&he&&t.texStorage2D(n.TEXTURE_2D,xe,Ee,Be[0].width,Be[0].height);for(let te=0,K=Be.length;te<K;te++)se=Be[te],_.format!==dn?de!==null?U?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,se.width,se.height,de,se.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ee,se.width,se.height,0,se.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ie&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,se.width,se.height,de,Se,se.data):t.texImage2D(n.TEXTURE_2D,te,Ee,se.width,se.height,0,de,Se,se.data)}else if(_.isDataArrayTexture)if(U){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ee,ee.width,ee.height,ee.depth),ie)if(_.layerUpdates.size>0){const te=Mc(ee.width,ee.height,_.format,_.type);for(const K of _.layerUpdates){const ue=ee.data.subarray(K*te/ee.data.BYTES_PER_ELEMENT,(K+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,de,Se,ue)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Se,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,de,Se,ee.data);else if(_.isData3DTexture)U?(he&&t.texStorage3D(n.TEXTURE_3D,xe,Ee,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Se,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,de,Se,ee.data);else if(_.isFramebufferTexture){if(he)if(U)t.texStorage2D(n.TEXTURE_2D,xe,Ee,ee.width,ee.height);else{let te=ee.width,K=ee.height;for(let ue=0;ue<xe;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ee,te,K,0,de,Se,null),te>>=1,K>>=1}}else if(Be.length>0){if(U&&he){const te=Ae(Be[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ee,te.width,te.height)}for(let te=0,K=Be.length;te<K;te++)se=Be[te],U?ie&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de,Se,se):t.texImage2D(n.TEXTURE_2D,te,Ee,de,Se,se);_.generateMipmaps=!1}else if(U){if(he){const te=Ae(ee);t.texStorage2D(n.TEXTURE_2D,xe,Ee,te.width,te.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Se,ee)}else t.texImage2D(n.TEXTURE_2D,0,Ee,de,Se,ee);g(_)&&p(Z),be.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function $(A,_,F){if(_.image.length!==6)return;const Z=Q(A,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const X=i.get(J);if(J.version!==X.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const be=Je.getPrimaries(Je.workingColorSpace),le=_.colorSpace===Wn?null:Je.getPrimaries(_.colorSpace),Re=_.colorSpace===Wn||be===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ue=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Ue&&!ee?de[K]=v(_.image[K],!0,r.maxCubemapSize):de[K]=ee?_.image[K].image:_.image[K],de[K]=it(_,de[K]);const Se=de[0],Ee=s.convert(_.format,_.colorSpace),se=s.convert(_.type),Be=M(_.internalFormat,Ee,se,_.colorSpace),U=_.isVideoTexture!==!0,he=X.__version===void 0||Z===!0,ie=J.dataReady;let xe=R(_,Se);ce(n.TEXTURE_CUBE_MAP,_);let te;if(Ue){U&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Be,Se.width,Se.height);for(let K=0;K<6;K++){te=de[K].mipmaps;for(let ue=0;ue<te.length;ue++){const Oe=te[ue];_.format!==dn?Ee!==null?U?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Oe.width,Oe.height,Ee,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,Be,Oe.width,Oe.height,0,Oe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Oe.width,Oe.height,Ee,se,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,Be,Oe.width,Oe.height,0,Ee,se,Oe.data)}}}else{if(te=_.mipmaps,U&&he){te.length>0&&xe++;const K=Ae(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Be,K.width,K.height)}for(let K=0;K<6;K++)if(ee){U?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Ee,se,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,de[K].width,de[K].height,0,Ee,se,de[K].data);for(let ue=0;ue<te.length;ue++){const lt=te[ue].image[K].image;U?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,lt.width,lt.height,Ee,se,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,Be,lt.width,lt.height,0,Ee,se,lt.data)}}else{U?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,se,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Ee,se,de[K]);for(let ue=0;ue<te.length;ue++){const Oe=te[ue];U?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ee,se,Oe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,Be,Ee,se,Oe.image[K])}}}g(_)&&p(n.TEXTURE_CUBE_MAP),X.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ve(A,_,F,Z,J,X){const be=s.convert(F.format,F.colorSpace),le=s.convert(F.type),Re=M(F.internalFormat,be,le,F.colorSpace),Ue=i.get(_),ee=i.get(F);if(ee.__renderTarget=_,!Ue.__hasExternalTextures){const de=Math.max(1,_.width>>X),Se=Math.max(1,_.height>>X);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Re,de,Se,_.depth,0,be,le,null):t.texImage2D(J,X,Re,de,Se,0,be,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),dt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,ee.__webglTexture,0,P(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,ee.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(A,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const Z=_.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,X=S(_.stencilBuffer,J),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;dt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),X,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,A)}else{const Z=_.textures;for(let J=0;J<Z.length;J++){const X=Z[J],be=s.convert(X.format,X.colorSpace),le=s.convert(X.type),Re=M(X.internalFormat,be,le,X.colorSpace);dt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(_),Re,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(_),Re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(A,_,F){const Z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ce(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ue=s.convert(_.depthTexture.format),ee=s.convert(_.depthTexture.type);let de;_.depthTexture.format===Fn?de=n.DEPTH_COMPONENT24:_.depthTexture.format===hi&&(de=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,de,_.width,_.height,0,Ue,ee,null)}}else Y(_.depthTexture,0);const X=J.__webglTexture,be=P(_),le=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Re=_.depthTexture.format===hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fn)dt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,le,X,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Re,le,X,0);else if(_.depthTexture.format===hi)dt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,le,X,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Re,le,X,0);else throw new Error("Unknown depthTexture format")}function We(A){const _=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Z}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)_e(_.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?_e(_.__webglFramebuffer[0],A,0):_e(_.__webglFramebuffer,A,0)}else if(F){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ie(_.__webglDepthbuffer[Z],A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ie(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(A,_,F){const Z=i.get(A);_!==void 0&&ve(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&We(A)}function Ye(A){const _=A.texture,F=i.get(A),Z=i.get(_);A.addEventListener("dispose",C);const J=A.textures,X=A.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let Re=0;Re<_.mipmaps.length;Re++)F.__webglFramebuffer[le][Re]=n.createFramebuffer()}else F.__webglFramebuffer[le]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)F.__webglFramebuffer[le]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(be)for(let le=0,Re=J.length;le<Re;le++){const Ue=i.get(J[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&dt(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Re=J[le];F.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const Ue=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),de=M(Re.internalFormat,Ue,ee,Re.colorSpace,A.isXRRenderTarget===!0),Se=P(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,de,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,F.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(n.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)ve(F.__webglFramebuffer[le][Re],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re);else ve(F.__webglFramebuffer[le],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let le=0,Re=J.length;le<Re;le++){const Ue=J[le],ee=i.get(Ue);let de=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ee.__webglTexture),ce(de,Ue),ve(F.__webglFramebuffer,A,Ue,n.COLOR_ATTACHMENT0+le,de,0),g(Ue)&&p(de)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),ce(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)ve(F.__webglFramebuffer[Re],A,_,n.COLOR_ATTACHMENT0,le,Re);else ve(F.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,le,0);g(_)&&p(le),t.unbindTexture()}A.depthBuffer&&We(A)}function nt(A){const _=A.textures;for(let F=0,Z=_.length;F<Z;F++){const J=_[F];if(g(J)){const X=y(A),be=i.get(J).__webglTexture;t.bindTexture(X,be),p(X),t.unbindTexture()}}}const ot=[],Ge=[];function xt(A){if(A.samples>0){if(dt(A)===!1){const _=A.textures,F=A.width,Z=A.height;let J=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(A),le=_.length>1;if(le)for(let Ue=0;Ue<_.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ue=0;Ue<_.length;Ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ue]);const ee=i.get(_[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,n.NEAREST),l===!0&&(ot.length=0,Ge.length=0,ot.push(n.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ot.push(X),Ge.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ue=0;Ue<_.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ue]);const ee=i.get(_[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function P(A){return Math.min(r.maxSamples,A.samples)}function dt(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $e(A){const _=a.render.frame;f.get(A)!==_&&(f.set(A,_),A.update())}function it(A,_){const F=A.colorSpace,Z=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==qi&&F!==Wn&&(Je.getTransfer(F)===ut?(Z!==dn||J!==tn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",F)),_}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=I,this.setTextureCube=D,this.rebindTextures=pt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z_(n,e){function t(i,r=Wn){let s;const a=Je.getTransfer(r);if(i===tn)return n.UNSIGNED_BYTE;if(i===el)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ku)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$u)return n.BYTE;if(i===Zu)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===Qo)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===Qu)return n.ALPHA;if(i===ed)return n.RGB;if(i===dn)return n.RGBA;if(i===Fn)return n.DEPTH_COMPONENT;if(i===hi)return n.DEPTH_STENCIL;if(i===td)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===Xi)return n.RG;if(i===il)return n.RG_INTEGER;if(i===rl)return n.RGBA_INTEGER;if(i===ls||i===cs||i===us||i===ds)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===eo||i===to)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===ro||i===so||i===ao||i===oo||i===lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===no||i===io)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ro)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===so)return s.COMPRESSED_R11_EAC;if(i===ao)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oo)return s.COMPRESSED_RG11_EAC;if(i===lo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===co||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===xo||i===vo||i===_o||i===yo||i===bo||i===So||i===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===co)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ho)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===po)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===go)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_o)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===So)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wo||i===Eo||i===To)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wo)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===To)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ao||i===Ro||i===Co||i===No)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===No)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wn({vertexShader:K_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ey extends Ki{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,m=null,u=null,x=null;const v=typeof XRWebGLBinding<"u",g=new Q_,p={},y=t.getContextAttributes();let M=null,S=null;const R=[],T=[],C=new tt;let N=null;const b=new en;b.viewport=new St;const E=new en;E.viewport=new St;const L=[b,E],V=new ug;let G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=R[W];return $===void 0&&($=new ya,R[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=R[W];return $===void 0&&($=new ya,R[W]=$),$.getGripSpace()},this.getHand=function(W){let $=R[W];return $===void 0&&($=new ya,R[W]=$),$.getHandSpace()};function Y(W){const $=T.indexOf(W.inputSource);if($===-1)return;const ve=R[$];ve!==void 0&&(ve.update(W.inputSource,W.frame,c||a),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",I);for(let W=0;W<R.length;W++){const $=T[W];$!==null&&(T[W]=null,R[W].disconnect($))}G=null,q=null,g.reset();for(const W in p)delete p[W];e.setRenderTarget(M),u=null,m=null,d=null,r=null,S=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",z),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=y.stencil?hi:Fn,Ie=y.stencil?xr:Mn);const We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=this.getBinding(),m=d.createProjectionLayer(We),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),S=new Sn(m.textureWidth,m.textureHeight,{format:dn,type:tn,depthTexture:new _r(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const ve={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Sn(u.framebufferWidth,u.framebufferHeight,{format:dn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(W){for(let $=0;$<W.removed.length;$++){const ve=W.removed[$],Ie=T.indexOf(ve);Ie>=0&&(T[Ie]=null,R[Ie].disconnect(ve))}for(let $=0;$<W.added.length;$++){const ve=W.added[$];let Ie=T.indexOf(ve);if(Ie===-1){for(let We=0;We<R.length;We++)if(We>=T.length){T.push(ve),Ie=We;break}else if(T[We]===null){T[We]=ve,Ie=We;break}if(Ie===-1)break}const _e=R[Ie];_e&&_e.connect(ve)}}const D=new k,ne=new k;function re(W,$,ve){D.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const Ie=D.distanceTo(ne),_e=$.projectionMatrix.elements,We=ve.projectionMatrix.elements,pt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),nt=(_e[9]+1)/_e[5],ot=(_e[9]-1)/_e[5],Ge=(_e[8]-1)/_e[0],xt=(We[8]+1)/We[0],P=pt*Ge,dt=pt*xt,$e=Ie/(-Ge+xt),it=$e*-Ge;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(it),W.translateZ($e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_e[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ae=pt+$e,A=Ye+$e,_=P-it,F=dt+(Ie-it),Z=nt*Ye/A*Ae,J=ot*Ye/A*Ae;W.projectionMatrix.makePerspective(_,F,Z,J,Ae,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let $=W.near,ve=W.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),V.near=E.near=b.near=$,V.far=E.far=b.far=ve,(G!==V.near||q!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),G=V.near,q=V.far),V.layers.mask=W.layers.mask|6,b.layers.mask=V.layers.mask&3,E.layers.mask=V.layers.mask&5;const Ie=W.parent,_e=V.cameras;oe(V,Ie);for(let We=0;We<_e.length;We++)oe(_e[We],Ie);_e.length===2?re(V,b,E):V.projectionMatrix.copy(b.projectionMatrix),ce(W,V,Ie)};function ce(W,$,ve){ve===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Po*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(W){l=W,m!==null&&(m.fixedFoveation=W),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(W){return p[W]};let Q=null;function Pe(W,$){if(f=$.getViewerPose(c||a),x=$,f!==null){const ve=f.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let Ie=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,Ie=!0);for(let Ye=0;Ye<ve.length;Ye++){const nt=ve[Ye];let ot=null;if(u!==null)ot=u.getViewport(nt);else{const xt=d.getViewSubImage(m,nt);ot=xt.viewport,Ye===0&&(e.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(S))}let Ge=L[Ye];Ge===void 0&&(Ge=new en,Ge.layers.enable(Ye),Ge.viewport=new St,L[Ye]=Ge),Ge.matrix.fromArray(nt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(nt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ie===!0&&V.cameras.push(Ge)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Ye=d.getDepthInformation(ve[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,r.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ye=0;Ye<ve.length;Ye++){const nt=ve[Ye].camera;if(nt){let ot=p[nt];ot||(ot=new pd,p[nt]=ot);const Ge=d.getCameraImage(nt);ot.sourceTexture=Ge}}}}for(let ve=0;ve<R.length;ve++){const Ie=T[ve],_e=R[ve];Ie!==null&&_e!==void 0&&_e.update(Ie,$,c||a)}Q&&Q(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const ze=new gd;ze.setAnimationLoop(Pe),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}const oi=new On,ty=new yt;function ny(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ld(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),m(g,p),p.isMeshPhysicalMaterial&&u(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ht&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ht&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,S=y.envMapRotation;M&&(g.envMap.value=M,oi.copy(S),oi.x*=-1,oi.y*=-1,oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),g.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(oi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function m(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iy(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;i.uniformBlockBinding(y,S)}function c(y,M){let S=r[y.id];S===void 0&&(x(y),S=f(y),r[y.id]=S,y.addEventListener("dispose",g));const R=M.program;i.updateUBOMapping(y,R);const T=e.render.frame;s[y.id]!==T&&(m(y),s[y.id]=T)}function f(y){const M=d();y.__bindingPointIndex=M;const S=n.createBuffer(),R=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const M=r[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,C=S.length;T<C;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,E=N.length;b<E;b++){const L=N[b];if(u(L,T,b,R)===!0){const V=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let Y=0;Y<G.length;Y++){const z=G[Y],I=v(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,V+q,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,q),q+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,M,S,R){const T=y.value,C=M+"_"+S;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const N=R[C];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return R[C]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function x(y){const M=y.uniforms;let S=0;const R=16;for(let C=0,N=M.length;C<N;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,L=b.length;E<L;E++){const V=b[E],G=Array.isArray(V.value)?V.value:[V.value];for(let q=0,Y=G.length;q<Y;q++){const z=G[q],I=v(z),D=S%R,ne=D%I.boundary,re=D+ne;S+=ne,re!==0&&R-re<I.storage&&(S+=R-re),V.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=I.storage}}}const T=S%R;return T>0&&(S+=R-T),y.__size=S,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const ry=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hn=null;function sy(){return hn===null&&(hn=new ng(ry,16,16,Xi,In),hn.name="DFG_LUT",hn.minFilter=Dt,hn.magFilter=Dt,hn.wrapS=Ln,hn.wrapT=Ln,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}class ay{constructor(e={}){const{canvas:t=Cm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1,outputBufferType:u=tn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const v=u,g=new Set([rl,il,nl]),p=new Set([tn,Mn,gr,xr,el,tl]),y=new Uint32Array(4),M=new Int32Array(4);let S=null,R=null;const T=[],C=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let E=!1;this._outputColorSpace=Qt;let L=0,V=0,G=null,q=-1,Y=null;const z=new St,I=new St;let D=null;const ne=new st(0);let re=0,oe=t.width,ce=t.height,Q=1,Pe=null,ze=null;const W=new St(0,0,oe,ce),$=new St(0,0,oe,ce);let ve=!1;const Ie=new hd;let _e=!1,We=!1;const pt=new yt,Ye=new k,nt=new St,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function xt(){return G===null?Q:1}let P=i;function dt(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),P===null){const O="webgl2";if(P=dt(O,w),P===null)throw dt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw et("WebGLRenderer: "+w.message),w}let $e,it,Ae,A,_,F,Z,J,X,be,le,Re,Ue,ee,de,Se,Ee,se,Be,U,he,ie,xe,te;function K(){$e=new sv(P),$e.init(),ie=new Z_(P,$e),it=new Zx(P,$e,e,ie),Ae=new Y_(P,$e),it.reversedDepthBuffer&&m&&Ae.buffers.depth.setReversed(!0),A=new lv(P),_=new D_,F=new $_(P,$e,Ae,_,it,ie,A),Z=new Jx(b),J=new rv(b),X=new hg(P),xe=new Yx(P,X),be=new av(P,X,A,xe),le=new uv(P,be,X,A),Be=new cv(P,it,F),Se=new Kx(_),Re=new L_(b,Z,J,$e,it,xe,Se),Ue=new ny(b,_),ee=new I_,de=new G_($e),se=new qx(b,Z,J,Ae,le,x,l),Ee=new X_(b,le,it),te=new iy(P,A,it,Ae),U=new $x(P,$e,A),he=new ov(P,$e,A),A.programs=Re.programs,b.capabilities=it,b.extensions=$e,b.properties=_,b.renderLists=ee,b.shadowMap=Ee,b.state=Ae,b.info=A}K(),v!==tn&&(N=new hv(v,t.width,t.height,r,s));const ue=new ey(b,P);this.xr=ue,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(oe,ce,!1))},this.getSize=function(w){return w.set(oe,ce)},this.setSize=function(w,O,j=!0){if(ue.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,ce=O,t.width=Math.floor(w*Q),t.height=Math.floor(O*Q),j===!0&&(t.style.width=w+"px",t.style.height=O+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(oe*Q,ce*Q).floor()},this.setDrawingBufferSize=function(w,O,j){oe=w,ce=O,Q=j,t.width=Math.floor(w*j),t.height=Math.floor(O*j),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(v===tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,O,j,H){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,O,j,H),Ae.viewport(z.copy(W).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy($)},this.setScissor=function(w,O,j,H){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,O,j,H),Ae.scissor(I.copy($).multiplyScalar(Q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(w){Ae.setScissorTest(ve=w)},this.setOpaqueSort=function(w){Pe=w},this.setTransparentSort=function(w){ze=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,j=!0){let H=0;if(w){let B=!1;if(G!==null){const fe=G.texture.format;B=g.has(fe)}if(B){const fe=G.texture.type,ye=p.has(fe),ge=se.getClearColor(),Te=se.getClearAlpha(),Ce=ge.r,Fe=ge.g,Le=ge.b;ye?(y[0]=Ce,y[1]=Fe,y[2]=Le,y[3]=Te,P.clearBufferuiv(P.COLOR,0,y)):(M[0]=Ce,M[1]=Fe,M[2]=Le,M[3]=Te,P.clearBufferiv(P.COLOR,0,M))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),j&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),se.dispose(),ee.dispose(),de.dispose(),_.dispose(),Z.dispose(),J.dispose(),le.dispose(),xe.dispose(),te.dispose(),Re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fl),ue.removeEventListener("sessionend",pl),Jn.stop()};function Oe(w){w.preventDefault(),tc("WebGLRenderer: Context Lost."),E=!0}function lt(){tc("WebGLRenderer: Context Restored."),E=!1;const w=A.autoReset,O=Ee.enabled,j=Ee.autoUpdate,H=Ee.needsUpdate,B=Ee.type;K(),A.autoReset=w,Ee.enabled=O,Ee.autoUpdate=j,Ee.needsUpdate=H,Ee.type=B}function rt(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const O=w.target;O.removeEventListener("dispose",at),qe(O)}function qe(w){Zt(w),_.remove(w)}function Zt(w){const O=_.get(w).programs;O!==void 0&&(O.forEach(function(j){Re.releaseProgram(j)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,j,H,B,fe){O===null&&(O=ot);const ye=B.isMesh&&B.matrixWorld.determinant()<0,ge=Sd(w,O,j,H,B);Ae.setMaterial(H,ye);let Te=j.index,Ce=1;if(H.wireframe===!0){if(Te=be.getWireframeAttribute(j),Te===void 0)return;Ce=2}const Fe=j.drawRange,Le=j.attributes.position;let Xe=Fe.start*Ce,ht=(Fe.start+Fe.count)*Ce;fe!==null&&(Xe=Math.max(Xe,fe.start*Ce),ht=Math.min(ht,(fe.start+fe.count)*Ce)),Te!==null?(Xe=Math.max(Xe,0),ht=Math.min(ht,Te.count)):Le!=null&&(Xe=Math.max(Xe,0),ht=Math.min(ht,Le.count));const vt=ht-Xe;if(vt<0||vt===1/0)return;xe.setup(B,H,ge,j,Te);let _t,ft=U;if(Te!==null&&(_t=X.get(Te),ft=he,ft.setIndex(_t)),B.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*xt()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(B.isLine){let De=H.linewidth;De===void 0&&(De=1),Ae.setLineWidth(De*xt()),B.isLineSegments?ft.setMode(P.LINES):B.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else B.isPoints?ft.setMode(P.POINTS):B.isSprite&&ft.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,ct=B._multiDrawCounts,Qe=B._multiDrawCount,jt=Te?X.get(Te).bytesPerElement:1,gi=_.get(H).currentProgram.getUniforms();for(let Wt=0;Wt<Qe;Wt++)gi.setValue(P,"_gl_DrawID",Wt),ft.render(De[Wt]/jt,ct[Wt])}else if(B.isInstancedMesh)ft.renderInstances(Xe,vt,B.count);else if(j.isInstancedBufferGeometry){const De=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ct=Math.min(j.instanceCount,De);ft.renderInstances(Xe,vt,ct)}else ft.render(Xe,vt)};function hl(w,O,j){w.transparent===!0&&w.side===xn&&w.forceSinglePass===!1?(w.side=Ht,w.needsUpdate=!0,Rr(w,O,j),w.side=Zn,w.needsUpdate=!0,Rr(w,O,j),w.side=xn):Rr(w,O,j)}this.compile=function(w,O,j=null){j===null&&(j=w),R=de.get(j),R.init(O),C.push(R),j.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(R.pushLight(B),B.castShadow&&R.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(R.pushLight(B),B.castShadow&&R.pushShadow(B))}),R.setupLights();const H=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const ge=fe[ye];hl(ge,j,B),H.add(ge)}else hl(fe,j,B),H.add(fe)}),R=C.pop(),H},this.compileAsync=function(w,O,j=null){const H=this.compile(w,O,j);return new Promise(B=>{function fe(){if(H.forEach(function(ye){_.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){B(w);return}setTimeout(fe,10)}$e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ds=null;function bd(w){Ds&&Ds(w)}function fl(){Jn.stop()}function pl(){Jn.start()}const Jn=new gd;Jn.setAnimationLoop(bd),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Ds=w,ue.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},ue.addEventListener("sessionstart",fl),ue.addEventListener("sessionend",pl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const j=ue.enabled===!0&&ue.isPresenting===!0,H=N!==null&&(G===null||j)&&N.begin(b,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,O,G),R=de.get(w,C.length),R.init(O),C.push(R),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(pt,_n,O.reversedDepth),We=this.localClippingEnabled,_e=Se.init(this.clippingPlanes,We),S=ee.get(w,T.length),S.init(),T.push(S),ue.enabled===!0&&ue.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&Us(ye,O,-1/0,b.sortObjects)}Us(w,O,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(Pe,ze),Ge=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Ge&&se.addToRenderList(S,w),this.info.render.frame++,_e===!0&&Se.beginShadows();const B=R.state.shadowsArray;if(Ee.render(B,w,O),_e===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&N.hasRenderPass())===!1){const ye=S.opaque,ge=S.transmissive;if(R.setupLights(),O.isArrayCamera){const Te=O.cameras;if(ge.length>0)for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const Le=Te[Ce];gl(ye,ge,w,Le)}Ge&&se.render(w);for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const Le=Te[Ce];ml(S,w,Le,Le.viewport)}}else ge.length>0&&gl(ye,ge,w,O),Ge&&se.render(w),ml(S,w,O)}G!==null&&V===0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G)),H&&N.end(b),w.isScene===!0&&w.onAfterRender(b,w,O),xe.resetDefaultState(),q=-1,Y=null,C.pop(),C.length>0?(R=C[C.length-1],_e===!0&&Se.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Us(w,O,j,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){H&&nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pt);const ye=le.update(w),ge=w.material;ge.visible&&S.push(w,ye,ge,j,nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const ye=le.update(w),ge=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),nt.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),nt.copy(ye.boundingSphere.center)),nt.applyMatrix4(w.matrixWorld).applyMatrix4(pt)),Array.isArray(ge)){const Te=ye.groups;for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const Le=Te[Ce],Xe=ge[Le.materialIndex];Xe&&Xe.visible&&S.push(w,ye,Xe,j,nt.z,Le)}}else ge.visible&&S.push(w,ye,ge,j,nt.z,null)}}const fe=w.children;for(let ye=0,ge=fe.length;ye<ge;ye++)Us(fe[ye],O,j,H)}function ml(w,O,j,H){const{opaque:B,transmissive:fe,transparent:ye}=w;R.setupLightsView(j),_e===!0&&Se.setGlobalState(b.clippingPlanes,j),H&&Ae.viewport(z.copy(H)),B.length>0&&Ar(B,O,j),fe.length>0&&Ar(fe,O,j),ye.length>0&&Ar(ye,O,j),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function gl(w,O,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[H.id]===void 0){const Xe=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:Xe?In:tn,minFilter:di,samples:it.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const fe=R.state.transmissionRenderTarget[H.id],ye=H.viewport||z;fe.setSize(ye.z*b.transmissionResolutionScale,ye.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Te=b.getActiveCubeFace(),Ce=b.getActiveMipmapLevel();b.setRenderTarget(fe),b.getClearColor(ne),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),Ge&&se.render(j);const Fe=b.toneMapping;b.toneMapping=bn;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),R.setupLightsView(H),_e===!0&&Se.setGlobalState(b.clippingPlanes,H),Ar(w,j,H),F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ht=0,vt=O.length;ht<vt;ht++){const _t=O[ht],{object:ft,geometry:De,material:ct,group:Qe}=_t;if(ct.side===xn&&ft.layers.test(H.layers)){const jt=ct.side;ct.side=Ht,ct.needsUpdate=!0,xl(ft,j,H,De,ct,Qe),ct.side=jt,ct.needsUpdate=!0,Xe=!0}}Xe===!0&&(F.updateMultisampleRenderTarget(fe),F.updateRenderTargetMipmap(fe))}b.setRenderTarget(ge,Te,Ce),b.setClearColor(ne,re),Le!==void 0&&(H.viewport=Le),b.toneMapping=Fe}function Ar(w,O,j){const H=O.isScene===!0?O.overrideMaterial:null;for(let B=0,fe=w.length;B<fe;B++){const ye=w[B],{object:ge,geometry:Te,group:Ce}=ye;let Fe=ye.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),ge.layers.test(j.layers)&&xl(ge,O,j,Te,Fe,Ce)}}function xl(w,O,j,H,B,fe){w.onBeforeRender(b,O,j,H,B,fe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(b,O,j,H,w,fe),B.transparent===!0&&B.side===xn&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,b.renderBufferDirect(j,O,H,B,w,fe),B.side=Zn,B.needsUpdate=!0,b.renderBufferDirect(j,O,H,B,w,fe),B.side=xn):b.renderBufferDirect(j,O,H,B,w,fe),w.onAfterRender(b,O,j,H,B,fe)}function Rr(w,O,j){O.isScene!==!0&&(O=ot);const H=_.get(w),B=R.state.lights,fe=R.state.shadowsArray,ye=B.state.version,ge=Re.getParameters(w,B.state,fe,O,j),Te=Re.getProgramCacheKey(ge);let Ce=H.programs;H.environment=w.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(w.isMeshStandardMaterial?J:Z).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ce===void 0&&(w.addEventListener("dispose",at),Ce=new Map,H.programs=Ce);let Fe=Ce.get(Te);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===ye)return _l(w,ge),Fe}else ge.uniforms=Re.getUniforms(w),w.onBeforeCompile(ge,b),Fe=Re.acquireProgram(ge,Te),Ce.set(Te,Fe),H.uniforms=ge.uniforms;const Le=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=Se.uniform),_l(w,ge),H.needsLights=wd(w),H.lightsStateVersion=ye,H.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function vl(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=hs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function _l(w,O){const j=_.get(w);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Sd(w,O,j,H,B){O.isScene!==!0&&(O=ot),F.resetTextureUnits();const fe=O.fog,ye=H.isMeshStandardMaterial?O.environment:null,ge=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:qi,Te=(H.isMeshStandardMaterial?J:Z).get(H.envMap||ye),Ce=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!j.morphAttributes.position,Xe=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let vt=bn;H.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(vt=b.toneMapping);const _t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=_t!==void 0?_t.length:0,De=_.get(H),ct=R.state.lights;if(_e===!0&&(We===!0||w!==Y)){const Ut=w===Y&&H.id===q;Se.setState(H,w,Ut)}let Qe=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ct.state.version||De.outputColorSpace!==ge||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==Te||H.fog===!0&&De.fog!==fe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Se.numPlanes||De.numIntersection!==Se.numIntersection)||De.vertexAlphas!==Ce||De.vertexTangents!==Fe||De.morphTargets!==Le||De.morphNormals!==Xe||De.morphColors!==ht||De.toneMapping!==vt||De.morphTargetsCount!==ft)&&(Qe=!0):(Qe=!0,De.__version=H.version);let jt=De.currentProgram;Qe===!0&&(jt=Rr(H,O,B));let gi=!1,Wt=!1,er=!1;const mt=jt.getUniforms(),Bt=De.uniforms;if(Ae.useProgram(jt.program)&&(gi=!0,Wt=!0,er=!0),H.id!==q&&(q=H.id,Wt=!0),gi||Y!==w){Ae.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(P,"projectionMatrix",w.projectionMatrix),mt.setValue(P,"viewMatrix",w.matrixWorldInverse);const zt=mt.map.cameraPosition;zt!==void 0&&zt.setValue(P,Ye.setFromMatrixPosition(w.matrixWorld)),it.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Wt=!0,er=!0)}if(De.needsLights&&(ct.state.directionalShadowMap.length>0&&mt.setValue(P,"directionalShadowMap",ct.state.directionalShadowMap,F),ct.state.spotShadowMap.length>0&&mt.setValue(P,"spotShadowMap",ct.state.spotShadowMap,F),ct.state.pointShadowMap.length>0&&mt.setValue(P,"pointShadowMap",ct.state.pointShadowMap,F)),B.isSkinnedMesh){mt.setOptional(P,B,"bindMatrix"),mt.setOptional(P,B,"bindMatrixInverse");const Ut=B.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),mt.setValue(P,"boneTexture",Ut.boneTexture,F))}B.isBatchedMesh&&(mt.setOptional(P,B,"batchingTexture"),mt.setValue(P,"batchingTexture",B._matricesTexture,F),mt.setOptional(P,B,"batchingIdTexture"),mt.setValue(P,"batchingIdTexture",B._indirectTexture,F),mt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(P,"batchingColorTexture",B._colorsTexture,F));const Kt=j.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Be.update(B,j,jt),(Wt||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,mt.setValue(P,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bt.envMap.value=Te,Bt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Bt.envMapIntensity.value=O.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=sy()),Wt&&(mt.setValue(P,"toneMappingExposure",b.toneMappingExposure),De.needsLights&&Md(Bt,er),fe&&H.fog===!0&&Ue.refreshFogUniforms(Bt,fe),Ue.refreshMaterialUniforms(Bt,H,Q,ce,R.state.transmissionRenderTarget[w.id]),hs.upload(P,vl(De),Bt,F)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(hs.upload(P,vl(De),Bt,F),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(P,"center",B.center),mt.setValue(P,"modelViewMatrix",B.modelViewMatrix),mt.setValue(P,"normalMatrix",B.normalMatrix),mt.setValue(P,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ut=H.uniformsGroups;for(let zt=0,Is=Ut.length;zt<Is;zt++){const Qn=Ut[zt];te.update(Qn,jt),te.bind(Qn,jt)}}return jt}function Md(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function wd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,O,j){const H=_.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=O,_.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:j,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const j=_.get(w);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0};const Ed=P.createFramebuffer();this.setRenderTarget=function(w,O=0,j=0){G=w,L=O,V=j;let H=null,B=!1,fe=!1;if(w){const ge=_.get(w);if(ge.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(P.FRAMEBUFFER,ge.__webglFramebuffer),z.copy(w.viewport),I.copy(w.scissor),D=w.scissorTest,Ae.viewport(z),Ae.scissor(I),Ae.setScissorTest(D),q=-1;return}else if(ge.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(ge.__hasExternalTextures)F.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Fe=w.depthTexture;if(ge.__boundDepthTexture!==Fe){if(Fe!==null&&_.has(Fe)&&(w.width!==Fe.image.width||w.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Ce=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[O])?H=Ce[O][j]:H=Ce[O],B=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?H=_.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[j]:H=Ce,z.copy(w.viewport),I.copy(w.scissor),D=w.scissorTest}else z.copy(W).multiplyScalar(Q).floor(),I.copy($).multiplyScalar(Q).floor(),D=ve;if(j!==0&&(H=Ed),Ae.bindFramebuffer(P.FRAMEBUFFER,H)&&Ae.drawBuffers(w,H),Ae.viewport(z),Ae.scissor(I),Ae.setScissorTest(D),B){const ge=_.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,j)}else if(fe){const ge=O;for(let Te=0;Te<w.textures.length;Te++){const Ce=_.get(w.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,j,ge)}}else if(w!==null&&j!==0){const ge=_.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,j)}q=-1},this.readRenderTargetPixels=function(w,O,j,H,B,fe,ye,ge=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Ae.bindFramebuffer(P.FRAMEBUFFER,Te);try{const Ce=w.textures[ge],Fe=Ce.format,Le=Ce.type;if(!it.textureFormatReadable(Fe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Le)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&j>=0&&j<=w.height-B&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(O,j,H,B,ie.convert(Fe),ie.convert(Le),fe))}finally{const Ce=G!==null?_.get(G).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(w,O,j,H,B,fe,ye,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(O>=0&&O<=w.width-H&&j>=0&&j<=w.height-B){Ae.bindFramebuffer(P.FRAMEBUFFER,Te);const Ce=w.textures[ge],Fe=Ce.format,Le=Ce.type;if(!it.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(O,j,H,B,ie.convert(Fe),ie.convert(Le),0);const ht=G!==null?_.get(G).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,ht);const vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nm(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Xe),P.deleteSync(vt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,j=0){const H=Math.pow(2,-j),B=Math.floor(w.image.width*H),fe=Math.floor(w.image.height*H),ye=O!==null?O.x:0,ge=O!==null?O.y:0;F.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,ye,ge,B,fe),Ae.unbindTexture()};const Td=P.createFramebuffer(),Ad=P.createFramebuffer();this.copyTextureToTexture=function(w,O,j=null,H=null,B=0,fe=null){fe===null&&(B!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let ye,ge,Te,Ce,Fe,Le,Xe,ht,vt;const _t=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(j!==null)ye=j.max.x-j.min.x,ge=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,Ce=j.min.x,Fe=j.min.y,Le=j.isBox3?j.min.z:0;else{const Kt=Math.pow(2,-B);ye=Math.floor(_t.width*Kt),ge=Math.floor(_t.height*Kt),w.isDataArrayTexture?Te=_t.depth:w.isData3DTexture?Te=Math.floor(_t.depth*Kt):Te=1,Ce=0,Fe=0,Le=0}H!==null?(Xe=H.x,ht=H.y,vt=H.z):(Xe=0,ht=0,vt=0);const ft=ie.convert(O.format),De=ie.convert(O.type);let ct;O.isData3DTexture?(F.setTexture3D(O,0),ct=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(F.setTexture2DArray(O,0),ct=P.TEXTURE_2D_ARRAY):(F.setTexture2D(O,0),ct=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gi=P.getParameter(P.UNPACK_SKIP_PIXELS),Wt=P.getParameter(P.UNPACK_SKIP_ROWS),er=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le);const mt=w.isDataArrayTexture||w.isData3DTexture,Bt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Kt=_.get(w),Ut=_.get(O),zt=_.get(Kt.__renderTarget),Is=_.get(Ut.__renderTarget);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Qn=0;Qn<Te;Qn++)mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(w).__webglTexture,B,Le+Qn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(O).__webglTexture,fe,vt+Qn)),P.blitFramebuffer(Ce,Fe,ye,ge,Xe,ht,ye,ge,P.DEPTH_BUFFER_BIT,P.NEAREST);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||_.has(w)){const Kt=_.get(w),Ut=_.get(O);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,Td),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ad);for(let zt=0;zt<Te;zt++)mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,B,Le+zt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,B),Bt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,fe,vt+zt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,fe),B!==0?P.blitFramebuffer(Ce,Fe,ye,ge,Xe,ht,ye,ge,P.COLOR_BUFFER_BIT,P.NEAREST):Bt?P.copyTexSubImage3D(ct,fe,Xe,ht,vt+zt,Ce,Fe,ye,ge):P.copyTexSubImage2D(ct,fe,Xe,ht,Ce,Fe,ye,ge);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Bt?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(ct,fe,Xe,ht,vt,ye,ge,Te,ft,De,_t.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(ct,fe,Xe,ht,vt,ye,ge,Te,ft,_t.data):P.texSubImage3D(ct,fe,Xe,ht,vt,ye,ge,Te,ft,De,_t):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Xe,ht,ye,ge,ft,De,_t.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Xe,ht,_t.width,_t.height,ft,_t.data):P.texSubImage2D(P.TEXTURE_2D,fe,Xe,ht,ye,ge,ft,De,_t);P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,er),fe===0&&O.generateMipmaps&&P.generateMipmap(ct),Ae.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){L=0,V=0,G=null,Ae.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const ln={primary:4906624,secondary:2278750,bright:8843180};function oy(){const n=ae.useRef(null),e=ae.useRef(!1);return ae.useEffect(()=>{if(!n.current||e.current)return;e.current=!0;const t=n.current,i=new tg;i.fog=new cl(198418,.012);const r=new en(65,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=45;const s=new ay({antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(s.domElement);const a={x:0,y:0,targetX:0,targetY:0},o=new Ii;i.add(o);const l=new Rt(new Ms(1,2),new fn({color:ln.bright,transparent:!0,opacity:.85}));o.add(l);const c=new Rt(new Ms(1.4,1),new fn({color:ln.primary,wireframe:!0,transparent:!0,opacity:.4}));o.add(c);const f=[];[2,2.6,3.2].forEach((I,D)=>{const ne=new Rt(new ws(I,.02,32,100),new fn({color:ln.primary,transparent:!0,opacity:.35-D*.08}));ne.rotation.x=Math.PI/2+D*.25,ne.rotation.y=D*.4,f.push(ne),o.add(ne)}),[1.8,2.8,4].forEach((I,D)=>{const ne=new Rt(new mr(I,32,32),new fn({color:ln.primary,transparent:!0,opacity:.04/(D+1)}));o.add(ne)});const d=8,m=[];for(let I=0;I<d;I++){const D=new Ii;D.rotation.x=I/d*.6-.3,D.rotation.z=I/d*.4-.2,i.add(D);const ne=12+I*2.2,re=.12-I*.008,oe=new Rt(new ws(ne,.008,8,128),new fn({color:ln.secondary,transparent:!0,opacity:.1}));oe.rotation.x=Math.PI/2,D.add(oe);const ce=new Rt(new mr(.35,32,32),new fn({color:ln.primary,transparent:!0,opacity:.8}));ce.position.x=ne,D.add(ce);const Q=new Rt(new mr(.8,16,16),new fn({color:ln.primary,transparent:!0,opacity:.12}));ce.add(Q),m.push({group:D,radius:ne,speed:re,node:ce,glow:Q,angle:I/d*Math.PI*2})}const u=400,x=new Ct,v=new Float32Array(u*3),g=new Float32Array(u),p=[];for(let I=0;I<u;I++){const D=I%d;v[I*3]=0,v[I*3+1]=0,v[I*3+2]=0,g[I]=Math.random(),p.push({orbitIndex:D,progress:Math.random(),speed:.003+Math.random()*.004,offset:new k((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.3)})}x.setAttribute("position",new nn(v,3));const y=new Ma(x,new Lo({color:ln.bright,size:.1,transparent:!0,opacity:.7,blending:xs,sizeAttenuation:!0}));i.add(y);const M=150,S=new Ct,R=new Float32Array(M*3);for(let I=0;I<M;I++)R[I*3]=(Math.random()-.5)*80,R[I*3+1]=(Math.random()-.5)*50,R[I*3+2]=(Math.random()-.5)*30-15;S.setAttribute("position",new nn(R,3));const T=new Ma(S,new Lo({color:ln.primary,size:.05,transparent:!0,opacity:.3,blending:xs}));i.add(T);const C=[];let N=0;function b(){const I=new Rt(new dl(.5,.6,64),new fn({color:ln.primary,transparent:!0,opacity:.5,side:xn}));I.rotation.x=Math.PI/2+(Math.random()-.5)*.2,i.add(I),C.push({mesh:I,progress:0})}const E=[];for(let I=0;I<d;I++){const D=[];for(let Q=0;Q<=30;Q++){const Pe=Q/30,ze=m[I].radius*(1-Pe),W=m[I].angle+Pe*.5;D.push(new k(Math.cos(W)*ze*(1-Pe*.3),Math.sin(W)*ze*(1-Pe*.3)*.3,Pe*2-1))}const re=new Ct().setFromPoints(D),oe=new fd({color:ln.primary,transparent:!0,opacity:.08});E.push(oe);const ce=new yc(re,oe);i.add(ce)}let L=0,V=!0,G=performance.now();function q(){if(!V)return;requestAnimationFrame(q);const I=performance.now(),D=Math.min((I-G)/1e3,.1);G=I,L+=D,a.x+=(a.targetX-a.x)*.03,a.y+=(a.targetY-a.y)*.03,r.position.x=a.x*4,r.position.y=a.y*3,r.lookAt(0,0,0),l.rotation.x+=D*.3,l.rotation.y+=D*.5;const ne=1+Math.sin(L*2)*.05;l.scale.setScalar(ne),c.rotation.x-=D*.2,c.rotation.y+=D*.3,f.forEach((ce,Q)=>{ce.rotation.z+=D*(.2+Q*.08)*(Q%2===0?1:-1)}),o.rotation.y=L*.05,m.forEach((ce,Q)=>{ce.angle+=D*ce.speed,ce.group.rotation.y=ce.angle;const Pe=1+Math.sin(L*1.5+Q*.7)*.15;ce.node.scale.setScalar(Pe),ce.glow.material.opacity=.08+Math.sin(L*2+Q)*.04});const re=x.attributes.position.array;for(let ce=0;ce<u;ce++){const Q=p[ce];Q.progress+=Q.speed,Q.progress>=1&&(Q.progress=0,Q.orbitIndex=Math.floor(Math.random()*d));const Pe=m[Q.orbitIndex],ze=new k;Pe.node.getWorldPosition(ze);const W=Q.progress,$=W*W*(3-2*W);re[ce*3]=ze.x*(1-$)+Q.offset.x,re[ce*3+1]=ze.y*(1-$)+Q.offset.y,re[ce*3+2]=ze.z*(1-$)+Q.offset.z}x.attributes.position.needsUpdate=!0;const oe=S.attributes.position.array;for(let ce=0;ce<M;ce++)oe[ce*3+1]+=Math.sin(L*.5+ce*.1)*.005,oe[ce*3]+=Math.cos(L*.3+ce*.05)*.003;S.attributes.position.needsUpdate=!0,N+=D,N>1.5&&(N=0,b());for(let ce=C.length-1;ce>=0;ce--){const Q=C[ce];Q.progress+=D*.4;const Pe=1+Q.progress*25;Q.mesh.scale.setScalar(Pe),Q.mesh.material.opacity=.4*(1-Q.progress),Q.progress>=1&&(i.remove(Q.mesh),Q.mesh.geometry.dispose(),Q.mesh.material.dispose(),C.splice(ce,1))}E.forEach((ce,Q)=>{ce.opacity=.05+Math.sin(L*1.5+Q*.5)*.03}),s.render(i,r)}q();const Y=I=>{a.targetX=I.clientX/window.innerWidth*2-1,a.targetY=-(I.clientY/window.innerHeight)*2+1},z=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("mousemove",Y),window.addEventListener("resize",z),()=>{V=!1,window.removeEventListener("mousemove",Y),window.removeEventListener("resize",z),t.contains(s.domElement)&&t.removeChild(s.domElement),i.traverse(I=>{(I instanceof Rt||I instanceof Ma||I instanceof yc)&&(I.geometry.dispose(),Array.isArray(I.material)?I.material.forEach(D=>D.dispose()):I.material.dispose())}),s.dispose(),e.current=!1}},[]),h.jsx("div",{ref:n,className:"fixed inset-0 pointer-events-none",style:{zIndex:0,opacity:.75,maskImage:"radial-gradient(ellipse 90% 80% at 50% 45%, black 20%, transparent 70%)",WebkitMaskImage:"radial-gradient(ellipse 90% 80% at 50% 45%, black 20%, transparent 70%)"}})}const ly=new Ud,cy={...yl({accentColor:"#4ADE80",accentColorForeground:"#030712",borderRadius:"large",fontStack:"system",overlayBlur:"small"}),colors:{...yl().colors,modalBackground:"#0c1219",modalBackdrop:"rgba(3, 7, 18, 0.9)",profileForeground:"#0c1219",menuItemBackground:"rgba(74, 222, 128, 0.06)",closeButton:"rgba(255, 255, 255, 0.5)",closeButtonBackground:"rgba(255, 255, 255, 0.06)",modalBorder:"rgba(74, 222, 128, 0.15)",generalBorder:"rgba(74, 222, 128, 0.1)",actionButtonSecondaryBackground:"rgba(74, 222, 128, 0.08)",connectButtonBackground:"#0c1219",connectButtonInnerBackground:"#0a0f1a",selectedOptionBorder:"rgba(74, 222, 128, 0.5)"}},uy={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.02,delayChildren:.1}}},dy={hidden:{opacity:0,y:30,rotateX:-90},visible:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:150,damping:12}}},hy={hidden:{opacity:0,y:40,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:200,damping:20}}},fy={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:20}}};function py({text:n,className:e,accentWord:t}){const i=n.split(" ");return h.jsx(me.span,{variants:uy,initial:"hidden",animate:"visible",className:e,style:{display:"inline-flex",flexWrap:"wrap",justifyContent:"center",gap:"0.3em"},children:i.map((r,s)=>h.jsx("span",{style:{display:"inline-flex"},children:r.split("").map((a,o)=>h.jsx(me.span,{variants:dy,className:r===t?"text-accent":"",style:{display:"inline-block"},children:a},`${s}-${o}`))},s))})}function my(){const n=ae.useRef(null),{scrollYProgress:e}=qc(),t=Li(e,[0,.3],[0,50]),i=Li(e,[0,.2],[1,.8]);return h.jsxs(h.Fragment,{children:[h.jsx(oy,{}),h.jsx(eh,{children:h.jsxs("div",{ref:n,className:"max-w-7xl mx-auto relative",children:[h.jsxs(me.div,{className:"text-center px-4 pt-4 pb-8 sm:pt-8 sm:pb-12",style:{y:t,opacity:i},children:[h.jsx(me.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1},children:h.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3",children:[h.jsx(py,{text:"Bridge to Hyperliquid",accentWord:"Hyperliquid"}),h.jsxs(me.span,{initial:{opacity:0,x:-10,filter:"blur(4px)"},animate:{opacity:1,x:0,filter:"blur(0px)"},transition:{delay:1.2,duration:.6,type:"spring",stiffness:120,damping:20},className:"inline-flex items-baseline gap-3 ml-4",children:[h.jsx("span",{className:"italic font-medium text-accent",children:"privately"}),h.jsx(me.span,{initial:{opacity:0,scale:0,rotate:-180},animate:{opacity:1,scale:1,rotate:0},transition:{delay:1.6,duration:.5,type:"spring",stiffness:200,damping:15},className:"inline-flex items-center",children:h.jsx(nu,{className:"w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent/80 translate-y-0.5"})})]})]})}),h.jsx(me.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},className:"text-base sm:text-lg text-white/50 max-w-lg mx-auto",children:"Swap and bridge from any chain to Hyperliquid in one transaction."})]}),h.jsx(me.div,{initial:{opacity:0,y:30,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{delay:1,type:"spring",stiffness:200,damping:25},children:h.jsx($p,{})}),h.jsx("div",{className:"mt-12 sm:mt-16 px-4 pb-8",children:h.jsx(me.div,{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},transition:{staggerChildren:.15},children:[{title:"One-Click",desc:"Single transaction bridging"},{title:"Best Rates",desc:"LI.FI finds optimal routes"},{title:"Auto-Deposit",desc:"Start trading instantly"}].map(r=>h.jsxs(me.div,{variants:hy,whileHover:{scale:1.05,boxShadow:"0 0 30px rgba(74, 222, 128, 0.15)"},whileTap:{scale:.98},className:`p-4 bg-dark-800/30 border border-dark-400/20 rounded-xl text-center cursor-default
                                 hover:border-accent/30 transition-colors`,children:[h.jsx("div",{className:"text-sm font-semibold text-white mb-1",children:r.title}),h.jsx("div",{className:"text-xs text-white/40",children:r.desc})]},r.title))})}),h.jsxs("div",{className:"text-center px-4 pb-12",children:[h.jsx(me.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5},className:"text-xs text-white/30 mb-4",children:"Supported Chains"}),h.jsx(me.div,{className:"flex flex-wrap items-center justify-center gap-3",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-30px"},transition:{staggerChildren:.05},children:[{name:"ETH",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",color:"#627EEA"},{name:"ARB",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png",color:"#28A0F0"},{name:"OP",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png",color:"#FF0420"},{name:"MATIC",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png",color:"#8247E5"},{name:"BASE",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png",color:"#0052FF"},{name:"BNB",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png",color:"#F0B90B"},{name:"AVAX",logo:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png",color:"#E84142"},{name:"SONIC",logo:"https://s2.coinmarketcap.com/static/img/coins/64x64/32684.png",color:"#1DB4F4"}].map(r=>h.jsxs(me.div,{variants:fy,whileHover:{scale:1.1,boxShadow:`0 0 20px ${r.color}40`},whileTap:{scale:.95},className:`flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-800/30 rounded-lg border border-dark-400/20
                                 hover:border-white/20 transition-colors cursor-default`,children:[h.jsx("img",{src:r.logo,alt:r.name,className:"w-4 h-4 rounded-full",onError:s=>{s.target.style.display="none"}}),h.jsx("span",{className:"text-xs text-white/50",children:r.name})]},r.name))})]})]})})]})}function gy(){return h.jsx(Wd,{config:Xd,children:h.jsx(Id,{client:ly,children:h.jsx(qd,{theme:cy,modalSize:"compact",children:h.jsx(my,{})})})})}globalThis.Buffer=Bd;Fd.createRoot(document.getElementById("root")).render(h.jsx(ae.StrictMode,{children:h.jsx(gy,{})}));const wy=Object.freeze(Object.defineProperty({__proto__:null,default:Yd},Symbol.toStringTag,{value:"Module"}));export{wy as e};
