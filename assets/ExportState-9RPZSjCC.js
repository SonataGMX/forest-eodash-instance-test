import{b0 as j,g as y,e as g,S as ge,a as f,b as a,p as h,f as I,I as k,ae as J,O as w,ag as U,b1 as fe,h as L,b2 as W,i as $,ah as H,b3 as q,P as G,aj as K,b4 as be,M as S,ak as x,b5 as Q,F as N,ac as he,af as ke,b6 as Ce,b7 as pe,b8 as Ve,b9 as Se,ba as xe,ad as _e,ai as Ie,bb as Ae,bc as Pe,bd as Te,be as Be,c as C,t as Ne,v as we,bf as Le,u as $e,R as De,C as z,_ as ze,bg as Fe,bh as Re,r as Ee,$ as A,a0 as Oe,a1 as r,bi as Me,a9 as b,aa as F,a3 as P,bj as T,a6 as R,bk as je,a5 as Je,aH as Ue,bl as We,a7 as He,V as E,bm as qe,a8 as _,bn as B,aW as O,as as Ge,at as Ke}from"./index-RrS5gAoe.js";import Qe from"./PopUp-WVmcp8O3.js";import{a as Xe}from"./index-BC9luf_3.js";import{V as X}from"./VImg-Cdtvr9Vn.js";import"./VOverlay-BqFgFUbm.js";import"./forwardRefs-DEqdtXuP.js";import"./transition-BZXE6F8s.js";const Ye=j("v-spacer","div","VSpacer"),Y=y()({name:"VCardActions",props:g(),setup(e,l){let{slots:n}=l;return ge({VBtn:{slim:!0,variant:"text"}}),f(()=>a("div",{class:["v-card-actions",e.class],style:e.style},[n.default?.()])),{}}}),Ze=h({opacity:[Number,String],...g(),...I()},"VCardSubtitle"),ea=y()({name:"VCardSubtitle",props:Ze(),setup(e,l){let{slots:n}=l;return f(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),Z=j("v-card-title"),aa=h({start:Boolean,end:Boolean,icon:k,image:String,text:String,...J(),...g(),...w(),...U(),...fe(),...I(),...L(),...W({variant:"flat"})},"VAvatar"),M=y()({name:"VAvatar",props:aa(),setup(e,l){let{slots:n}=l;const{themeClasses:t}=$(e),{borderClasses:c}=H(e),{colorClasses:o,colorStyles:u,variantClasses:d}=q(e),{densityClasses:s}=G(e),{roundedClasses:i}=K(e),{sizeClasses:v,sizeStyles:m}=be(e);return f(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,o.value,s.value,i.value,v.value,d.value,e.class],style:[u.value,m.value,e.style]},{default:()=>[n.default?a(x,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?a(X,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(S,{key:"icon",icon:e.icon},null):e.text,Q(!1,"v-avatar")]})),{}}}),ta=h({appendAvatar:String,appendIcon:k,prependAvatar:String,prependIcon:k,subtitle:[String,Number],title:[String,Number],...g(),...w()},"VCardItem"),na=y()({name:"VCardItem",props:ta(),setup(e,l){let{slots:n}=l;return f(()=>{const t=!!(e.prependAvatar||e.prependIcon),c=!!(t||n.prepend),o=!!(e.appendAvatar||e.appendIcon),u=!!(o||n.append),d=!!(e.title!=null||n.title),s=!!(e.subtitle!=null||n.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[c&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(x,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):a(N,null,[e.prependAvatar&&a(M,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[d&&a(Z,{key:"title"},{default:()=>[n.title?.()??e.title]}),s&&a(ea,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),u&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(x,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):a(N,null,[e.appendIcon&&a(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(M,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),sa=h({opacity:[Number,String],...g(),...I()},"VCardText"),ee=y()({name:"VCardText",props:sa(),setup(e,l){let{slots:n}=l;return f(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),la=h({appendAvatar:String,appendIcon:k,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:k,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...J(),...g(),...w(),...he(),...ke(),...Ce(),...pe(),...Ve(),...U(),...Se(),...I(),...L(),...W({variant:"elevated"})},"VCard"),ia=y()({name:"VCard",directives:{Ripple:xe},props:la(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:c}=$(e),{borderClasses:o}=H(e),{colorClasses:u,colorStyles:d,variantClasses:s}=q(e),{densityClasses:i}=G(e),{dimensionStyles:v}=_e(e),{elevationClasses:m}=Ie(e),{loaderClasses:ae}=Ae(e),{locationStyles:te}=Pe(e),{positionClasses:ne}=Te(e),{roundedClasses:se}=K(e),p=Be(e,n),le=C(()=>e.link!==!1&&p.isLink.value),V=C(()=>!e.disabled&&e.link!==!1&&(e.link||p.isClickable.value));return f(()=>{const ie=le.value?"a":e.tag,de=!!(t.title||e.title!=null),oe=!!(t.subtitle||e.subtitle!=null),re=de||oe,ce=!!(t.append||e.appendAvatar||e.appendIcon),ue=!!(t.prepend||e.prependAvatar||e.prependIcon),ve=!!(t.image||e.image),me=re||ue||ce,ye=!!(t.text||e.text!=null);return Ne(a(ie,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":V.value},c.value,o.value,u.value,i.value,m.value,ae.value,ne.value,se.value,s.value,e.class],style:[d.value,v.value,te.value,e.style],href:p.href.value,onClick:V.value&&p.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[ve&&a("div",{key:"image",class:"v-card__image"},[t.image?a(x,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(X,{key:"image-img",cover:!0,src:e.image},null)]),a(Le,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),me&&a(na,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ye&&a(ee,{key:"text"},{default:()=>[t.text?.()??e.text]}),t.default?.(),t.actions&&a(Y,null,{default:t.actions}),Q(V.value,"v-card")]}),[[we("ripple"),V.value&&e.ripple]])}),{}}}),da=h({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...g(),...L()},"VDivider"),oa=y()({name:"VDivider",props:da(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:c}=$(e),{textColorClasses:o,textColorStyles:u}=$e(De(e,"color")),d=C(()=>{const s={};return e.length&&(s[e.vertical?"height":"width"]=z(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=z(e.thickness)),s});return f(()=>{const s=a("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},c.value,o.value,e.class],style:[d.value,u.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return t.default?a("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[s,a("div",{class:"v-divider__content"},[t.default()]),s]):s}),{}}}),D=e=>(Ge("data-v-b8c788e8"),e=e(),Ke(),e),ra=D(()=>b("h5",{class:"text-h5"},"Storytelling map configuration",-1)),ca=D(()=>b("p",{class:"text-body-2"},[_(" Copy and paste this code into the map "),b("b",null,"layers field"),_(" of the storytelling editor: ")],-1)),ua={class:"pa-3 code-block"},va={style:{position:"absolute",bottom:"15px"}},ma={key:0,class:"text-success mr-3"},ya=D(()=>b("small",null,"copied!",-1)),ga={__name:"ExportState",props:Fe({getLayers:{type:Function,default:Me}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Re(e,"modelValue"),n=e,t=Ee(!1),c=[{id:Symbol(),copyFn:async()=>await B(u.value,t),copyAs:"simple map"},{id:Symbol(),copyFn:async()=>await B(JSON.stringify(n.getLayers()),t),copyAs:"layers configuration"},{id:Symbol(),copyFn:async()=>await B(o.value,t),copyAs:"map tour section"}],o=C(()=>{const[d,s,i]=O.value,v="### <!--{ layers=",m=`zoom="${i}" center=[${[d,s]}] animationOptions={duration:500}}-->
#### Tour step title
Text describing the current step of the tour and why it is interesting what the map shows currently
`;return`${v}'${JSON.stringify(T(n.getLayers()))}' ${m}`}),u=C(()=>{const[d,s,i]=O.value,v='## Map Example <!--{as="eox-map" style="width: 100%; height: 500px;" layers=',m=`zoom="${i}" center=[${[d,s]}] }-->`;return`${v}'${JSON.stringify(T(n.getLayers()))}' ${m}`});return(d,s)=>(A(),Oe(Qe,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i)},{default:r(()=>[a(ia,{style:{"max-height":"498px"}},{default:r(()=>[a(Z,{class:"bg-primary",style:{"max-height":"49px"}},{default:r(()=>[ra]),_:1}),a(ee,{class:"py-5 overflow-auto",style:{height:"400px"}},{default:r(()=>[ca,b("div",ua,F(P(T)(e.getLayers())),1),b("div",va,[a(Xe,null,{default:r(()=>[t.value?(A(),R("div",ma,[a(S,{color:"success",left:"",icon:[P(je)]},null,8,["icon"]),ya])):Je("v-if",!0)]),_:1})]),a(Ue,{class:"d-flex pt-3 justify-end"},{default:r(()=>[a(We,{cols:"6",class:"flex-column align-center text-end"},{default:r(()=>[(A(),R(N,null,He(c,i=>a(E,{class:"text-body-2",onClick:i.copyFn,key:i.id,small:"",variant:"text","prepend-icon":[P(qe)]},{default:r(()=>[_(" copy as "+F(i.copyAs),1)]),_:2},1032,["onClick","prepend-icon"])),64))]),_:1})]),_:1})]),_:1}),a(oa),a(Y,{style:{"max-height":"49px"}},{default:r(()=>[a(Ye),a(E,{variant:"text",onClick:s[0]||(s[0]=i=>l.value=!l.value)},{default:r(()=>[_(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Sa=ze(ga,[["__scopeId","data-v-b8c788e8"]]);export{Sa as default};