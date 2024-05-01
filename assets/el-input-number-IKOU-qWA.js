import{aJ as Ne,s as Me,bh as Je,aB as Qe,bd as ze,d as G,bi as Ze,bj as De,aD as Ae,av as Ce,bk as et,ao as V,o as B,c as U,C as Z,O as se,ap as F,x as t,G as _e,e as ne,w as q,b3 as tt,D,ar as Ie,Q as le,N as oe,as as fe,bl as lt,bm as nt,bn as at,bo as ot,aE as xe,an as ve,r as te,bp as st,a_ as Oe,bq as rt,br as ut,bs as it,b4 as dt,v as ct,f as Be,T as mt,bt as ft,bu as vt,at as $e,ak as we,bv as Te,aM as H,aT as Se,ba as re,bw as ce,aQ as ee,a as Fe,aG as Ue,aL as be,am as We,bc as bt,ax as me,b8 as gt,M as ge,aY as yt,bx as pt,by as ht,bz as Vt,L as ye,R as wt,bg as je,j as Le,aI as he,au as de,aZ as He,bA as St,bB as Et,n as Ve,aF as kt,aO as Ye,aP as Nt,t as Pe,aU as Ct,h as It,bb as Bt,F as pe,z as Ee}from"./index-7zrOSOGY.js";const Tt=(...e)=>l=>{e.forEach(o=>{Ne(o)?o(l):o.value=l})},Lt=(e,l,o)=>{let a={offsetX:0,offsetY:0};const c=s=>{const b=s.clientX,m=s.clientY,{offsetX:y,offsetY:d}=a,N=e.value.getBoundingClientRect(),w=N.left,C=N.top,$=N.width,R=N.height,K=document.documentElement.clientWidth,L=document.documentElement.clientHeight,x=-w+y,P=-C+d,S=K-w-$+y,E=L-C-R+d,j=O=>{const p=Math.min(Math.max(y+O.clientX-b,x),S),f=Math.min(Math.max(d+O.clientY-m,P),E);a={offsetX:p,offsetY:f},e.value&&(e.value.style.transform=`translate(${ze(p)}, ${ze(f)})`)},Y=()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",Y)};document.addEventListener("mousemove",j),document.addEventListener("mouseup",Y)},u=()=>{l.value&&e.value&&l.value.addEventListener("mousedown",c)},i=()=>{l.value&&e.value&&l.value.removeEventListener("mousedown",c)};Me(()=>{Je(()=>{o.value?u():i()})}),Qe(()=>{i()})},Pt=100,Mt=600,Ke={beforeMount(e,l){const o=l.value,{interval:a=Pt,delay:c=Mt}=Ne(o)?{}:o;let u,i;const s=()=>Ne(o)?o():o.handler(),b=()=>{i&&(clearTimeout(i),i=void 0),u&&(clearInterval(u),u=void 0)};e.addEventListener("mousedown",m=>{m.button===0&&(b(),s(),document.addEventListener("mouseup",()=>b(),{once:!0}),i=setTimeout(()=>{u=setInterval(()=>{s()},a)},c))})}},qe=Symbol("dialogInjectionKey"),At=["aria-level"],$t=["aria-label"],Ft=["id"],Rt=G({name:"ElDialogContent"}),zt=G({...Rt,props:Ze,emits:De,setup(e){const l=e,{t:o}=Ae(),{Close:a}=lt,{dialogRef:c,headerRef:u,bodyId:i,ns:s,style:b}=Ce(qe),{focusTrapRef:m}=Ce(et),y=V(()=>[s.b(),s.is("fullscreen",l.fullscreen),s.is("draggable",l.draggable),s.is("align-center",l.alignCenter),{[s.m("center")]:l.center},l.customClass]),d=Tt(m,c),N=V(()=>l.draggable);return Lt(c,u,N),(w,C)=>(B(),U("div",{ref:t(d),class:F(t(y)),style:oe(t(b)),tabindex:"-1"},[Z("header",{ref_key:"headerRef",ref:u,class:F(t(s).e("header"))},[se(w.$slots,"header",{},()=>[Z("span",{role:"heading","aria-level":w.ariaLevel,class:F(t(s).e("title"))},_e(w.title),11,At)]),w.showClose?(B(),U("button",{key:0,"aria-label":t(o)("el.dialog.close"),class:F(t(s).e("headerbtn")),type:"button",onClick:C[0]||(C[0]=$=>w.$emit("close"))},[ne(t(Ie),{class:F(t(s).e("close"))},{default:q(()=>[(B(),D(tt(w.closeIcon||t(a))))]),_:1},8,["class"])],10,$t)):le("v-if",!0)],2),Z("div",{id:t(i),class:F(t(s).e("body"))},[se(w.$slots,"default")],10,Ft),w.$slots.footer?(B(),U("footer",{key:0,class:F(t(s).e("footer"))},[se(w.$slots,"footer")],2)):le("v-if",!0)],6))}});var xt=fe(zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Yt=["aria-label","aria-labelledby","aria-describedby"],Kt=G({name:"ElDialog",inheritAttrs:!1}),Xt=G({...Kt,props:nt,emits:at,setup(e,{expose:l}){const o=e,a=ot();xe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},V(()=>!!a.title)),xe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},V(()=>!!o.customClass));const c=ve("dialog"),u=te(),i=te(),s=te(),{visible:b,titleId:m,bodyId:y,style:d,overlayDialogStyle:N,rendered:w,zIndex:C,afterEnter:$,afterLeave:R,beforeLeave:K,handleClose:L,onModalClick:x,onOpenAutoFocus:P,onCloseAutoFocus:S,onCloseRequested:E,onFocusoutPrevented:j}=st(o,u);Oe(qe,{dialogRef:u,headerRef:i,bodyId:y,ns:c,rendered:w,style:d});const Y=vt(x),O=V(()=>o.draggable&&!o.fullscreen);return l({visible:b,dialogContentRef:s}),(p,f)=>(B(),D(ft,{to:p.appendTo,disabled:p.appendTo!=="body"?!1:!p.appendToBody},[ne(mt,{name:"dialog-fade",onAfterEnter:t($),onAfterLeave:t(R),onBeforeLeave:t(K),persisted:""},{default:q(()=>[Be(ne(t(rt),{"custom-mask-event":"",mask:p.modal,"overlay-class":p.modalClass,"z-index":t(C)},{default:q(()=>[Z("div",{role:"dialog","aria-modal":"true","aria-label":p.title||void 0,"aria-labelledby":p.title?void 0:t(m),"aria-describedby":t(y),class:F(`${t(c).namespace.value}-overlay-dialog`),style:oe(t(N)),onClick:f[0]||(f[0]=(...k)=>t(Y).onClick&&t(Y).onClick(...k)),onMousedown:f[1]||(f[1]=(...k)=>t(Y).onMousedown&&t(Y).onMousedown(...k)),onMouseup:f[2]||(f[2]=(...k)=>t(Y).onMouseup&&t(Y).onMouseup(...k))},[ne(t(ut),{loop:"",trapped:t(b),"focus-start-el":"container",onFocusAfterTrapped:t(P),onFocusAfterReleased:t(S),onFocusoutPrevented:t(j),onReleaseRequested:t(E)},{default:q(()=>[t(w)?(B(),D(xt,it({key:0,ref_key:"dialogContentRef",ref:s},p.$attrs,{"custom-class":p.customClass,center:p.center,"align-center":p.alignCenter,"close-icon":p.closeIcon,draggable:t(O),fullscreen:p.fullscreen,"show-close":p.showClose,title:p.title,"aria-level":p.headerAriaLevel,onClose:t(L)}),dt({header:q(()=>[p.$slots.title?se(p.$slots,"title",{key:1}):se(p.$slots,"header",{key:0,close:t(L),titleId:t(m),titleClass:t(c).e("title")})]),default:q(()=>[se(p.$slots,"default")]),_:2},[p.$slots.footer?{name:"footer",fn:q(()=>[se(p.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):le("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Yt)]),_:3},8,["mask","overlay-class","z-index"]),[[ct,t(b)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var _t=fe(Xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Il=$e(_t),Ot=we({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:Te,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>e===null||H(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),Ut={[Se]:(e,l)=>l!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[re]:e=>H(e)||ce(e),[ee]:e=>H(e)||ce(e)},Wt=["aria-label","onKeydown"],jt=["aria-label","onKeydown"],Ht=G({name:"ElInputNumber"}),qt=G({...Ht,props:Ot,emits:Ut,setup(e,{expose:l,emit:o}){const a=e,{t:c}=Ae(),u=ve("input-number"),i=te(),s=Fe({currentValue:a.modelValue,userInput:null}),{formItem:b}=Ue(),m=V(()=>H(a.modelValue)&&a.modelValue<=a.min),y=V(()=>H(a.modelValue)&&a.modelValue>=a.max),d=V(()=>{const n=K(a.step);return be(a.precision)?Math.max(K(a.modelValue),n):(n>a.precision,a.precision)}),N=V(()=>a.controls&&a.controlsPosition==="right"),w=We(),C=bt(),$=V(()=>{if(s.userInput!==null)return s.userInput;let n=s.currentValue;if(ce(n))return"";if(H(n)){if(Number.isNaN(n))return"";be(a.precision)||(n=n.toFixed(a.precision))}return n}),R=(n,r)=>{if(be(r)&&(r=d.value),r===0)return Math.round(n);let g=String(n);const T=g.indexOf(".");if(T===-1||!g.replace(".","").split("")[T+r])return n;const X=g.length;return g.charAt(X-1)==="5"&&(g=`${g.slice(0,Math.max(0,X-1))}6`),Number.parseFloat(Number(g).toFixed(r))},K=n=>{if(ce(n))return 0;const r=n.toString(),g=r.indexOf(".");let T=0;return g!==-1&&(T=r.length-g-1),T},L=(n,r=1)=>H(n)?R(n+a.step*r):s.currentValue,x=()=>{if(a.readonly||C.value||y.value)return;const n=Number($.value)||0,r=L(n);E(r),o(re,s.currentValue)},P=()=>{if(a.readonly||C.value||m.value)return;const n=Number($.value)||0,r=L(n,-1);E(r),o(re,s.currentValue)},S=(n,r)=>{const{max:g,min:T,step:I,precision:z,stepStrictly:X,valueOnClear:_}=a;g<T&&je("InputNumber","min should not be greater than max.");let M=Number(n);if(ce(n)||Number.isNaN(M))return null;if(n===""){if(_===null)return null;M=Le(_)?{min:T,max:g}[_]:_}return X&&(M=R(Math.round(M/I)*I,z)),be(z)||(M=R(M,z)),(M>g||M<T)&&(M=M>g?g:T,r&&o(ee,M)),M},E=(n,r=!0)=>{var g;const T=s.currentValue,I=S(n);if(!r){o(ee,I);return}T!==I&&(s.userInput=null,o(ee,I),o(Se,I,T),a.validateEvent&&((g=b==null?void 0:b.validate)==null||g.call(b,"change").catch(z=>he())),s.currentValue=I)},j=n=>{s.userInput=n;const r=n===""?null:Number(n);o(re,r),E(r,!1)},Y=n=>{const r=n!==""?Number(n):"";(H(r)&&!Number.isNaN(r)||n==="")&&E(r),s.userInput=null},O=()=>{var n,r;(r=(n=i.value)==null?void 0:n.focus)==null||r.call(n)},p=()=>{var n,r;(r=(n=i.value)==null?void 0:n.blur)==null||r.call(n)},f=n=>{o("focus",n)},k=n=>{var r;o("blur",n),a.validateEvent&&((r=b==null?void 0:b.validate)==null||r.call(b,"blur").catch(g=>he()))};return me(()=>a.modelValue,n=>{const r=S(s.userInput),g=S(n,!0);!H(r)&&(!r||r!==g)&&(s.currentValue=g,s.userInput=null)},{immediate:!0}),Me(()=>{var n;const{min:r,max:g,modelValue:T}=a,I=(n=i.value)==null?void 0:n.input;if(I.setAttribute("role","spinbutton"),Number.isFinite(g)?I.setAttribute("aria-valuemax",String(g)):I.removeAttribute("aria-valuemax"),Number.isFinite(r)?I.setAttribute("aria-valuemin",String(r)):I.removeAttribute("aria-valuemin"),I.setAttribute("aria-valuenow",s.currentValue||s.currentValue===0?String(s.currentValue):""),I.setAttribute("aria-disabled",String(C.value)),!H(T)&&T!=null){let z=Number(T);Number.isNaN(z)&&(z=null),o(ee,z)}}),gt(()=>{var n,r;const g=(n=i.value)==null?void 0:n.input;g==null||g.setAttribute("aria-valuenow",`${(r=s.currentValue)!=null?r:""}`)}),l({focus:O,blur:p}),(n,r)=>(B(),U("div",{class:F([t(u).b(),t(u).m(t(w)),t(u).is("disabled",t(C)),t(u).is("without-controls",!n.controls),t(u).is("controls-right",t(N))]),onDragstart:r[1]||(r[1]=ye(()=>{},["prevent"]))},[n.controls?Be((B(),U("span",{key:0,role:"button","aria-label":t(c)("el.inputNumber.decrease"),class:F([t(u).e("decrease"),t(u).is("disabled",t(m))]),onKeydown:ge(P,["enter"])},[ne(t(Ie),null,{default:q(()=>[t(N)?(B(),D(t(yt),{key:0})):(B(),D(t(pt),{key:1}))]),_:1})],42,Wt)),[[t(Ke),P]]):le("v-if",!0),n.controls?Be((B(),U("span",{key:1,role:"button","aria-label":t(c)("el.inputNumber.increase"),class:F([t(u).e("increase"),t(u).is("disabled",t(y))]),onKeydown:ge(x,["enter"])},[ne(t(Ie),null,{default:q(()=>[t(N)?(B(),D(t(ht),{key:0})):(B(),D(t(Vt),{key:1}))]),_:1})],42,jt)),[[t(Ke),x]]):le("v-if",!0),ne(t(wt),{id:n.id,ref_key:"input",ref:i,type:"number",step:n.step,"model-value":t($),placeholder:n.placeholder,readonly:n.readonly,disabled:t(C),size:t(w),max:n.max,min:n.min,name:n.name,label:n.label,"validate-event":!1,onWheel:r[0]||(r[0]=ye(()=>{},["prevent"])),onKeydown:[ge(ye(x,["prevent"]),["up"]),ge(ye(P,["prevent"]),["down"])],onBlur:k,onFocus:f,onInput:j,onChange:Y},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Gt=fe(qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Jt=$e(Gt),Ge=Symbol("sliderContextKey"),Qt=we({modelValue:{type:de([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:Te,inputSize:Te,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:de(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:de(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:He,default:"top"},marks:{type:de(Object)},validateEvent:{type:Boolean,default:!0}}),ke=e=>H(e)||St(e)&&e.every(H),Zt={[ee]:ke,[re]:ke,[Se]:ke},Dt=(e,l,o)=>{const a=te();return Me(async()=>{e.range?(Array.isArray(e.modelValue)?(l.firstValue=Math.max(e.min,e.modelValue[0]),l.secondValue=Math.min(e.max,e.modelValue[1])):(l.firstValue=e.min,l.secondValue=e.max),l.oldValue=[l.firstValue,l.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?l.firstValue=e.min:l.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),l.oldValue=l.firstValue),Et(window,"resize",o),await Ve(),o()}),{sliderWrapper:a}},el=e=>V(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((o,a)=>o-a).filter(o=>o<=e.max&&o>=e.min).map(o=>({point:o,position:(o-e.min)*100/(e.max-e.min),mark:e.marks[o]})):[]),tl=(e,l,o)=>{const{form:a,formItem:c}=Ue(),u=kt(),i=te(),s=te(),b={firstButton:i,secondButton:s},m=V(()=>e.disabled||(a==null?void 0:a.disabled)||!1),y=V(()=>Math.min(l.firstValue,l.secondValue)),d=V(()=>Math.max(l.firstValue,l.secondValue)),N=V(()=>e.range?`${100*(d.value-y.value)/(e.max-e.min)}%`:`${100*(l.firstValue-e.min)/(e.max-e.min)}%`),w=V(()=>e.range?`${100*(y.value-e.min)/(e.max-e.min)}%`:"0%"),C=V(()=>e.vertical?{height:e.height}:{}),$=V(()=>e.vertical?{height:N.value,bottom:w.value}:{width:N.value,left:w.value}),R=()=>{u.value&&(l.sliderSize=u.value[`client${e.vertical?"Height":"Width"}`])},K=f=>{const k=e.min+f*(e.max-e.min)/100;if(!e.range)return i;let n;return Math.abs(y.value-k)<Math.abs(d.value-k)?n=l.firstValue<l.secondValue?"firstButton":"secondButton":n=l.firstValue>l.secondValue?"firstButton":"secondButton",b[n]},L=f=>{const k=K(f);return k.value.setPosition(f),k},x=f=>{l.firstValue=f,S(e.range?[y.value,d.value]:f)},P=f=>{l.secondValue=f,e.range&&S([y.value,d.value])},S=f=>{o(ee,f),o(re,f)},E=async()=>{await Ve(),o(Se,e.range?[y.value,d.value]:e.modelValue)},j=f=>{var k,n,r,g,T,I;if(m.value||l.dragging)return;R();let z=0;if(e.vertical){const X=(r=(n=(k=f.touches)==null?void 0:k.item(0))==null?void 0:n.clientY)!=null?r:f.clientY;z=(u.value.getBoundingClientRect().bottom-X)/l.sliderSize*100}else{const X=(I=(T=(g=f.touches)==null?void 0:g.item(0))==null?void 0:T.clientX)!=null?I:f.clientX,_=u.value.getBoundingClientRect().left;z=(X-_)/l.sliderSize*100}if(!(z<0||z>100))return L(z)};return{elFormItem:c,slider:u,firstButton:i,secondButton:s,sliderDisabled:m,minValue:y,maxValue:d,runwayStyle:C,barStyle:$,resetSize:R,setPosition:L,emitChange:E,onSliderWrapperPrevent:f=>{var k,n;((k=b.firstButton.value)!=null&&k.dragging||(n=b.secondButton.value)!=null&&n.dragging)&&f.preventDefault()},onSliderClick:f=>{j(f)&&E()},onSliderDown:async f=>{const k=j(f);k&&(await Ve(),k.value.onButtonDown(f))},setFirstValue:x,setSecondValue:P}},{left:ll,down:nl,right:al,up:ol,home:sl,end:rl,pageUp:ul,pageDown:il}=Nt,dl=(e,l,o)=>{const a=te(),c=te(!1),u=V(()=>l.value instanceof Function),i=V(()=>u.value&&l.value(e.modelValue)||e.modelValue),s=Ye(()=>{o.value&&(c.value=!0)},50),b=Ye(()=>{o.value&&(c.value=!1)},50);return{tooltip:a,tooltipVisible:c,formatValue:i,displayTooltip:s,hideTooltip:b}},cl=(e,l,o)=>{const{disabled:a,min:c,max:u,step:i,showTooltip:s,precision:b,sliderSize:m,formatTooltip:y,emitChange:d,resetSize:N,updateDragging:w}=Ce(Ge),{tooltip:C,tooltipVisible:$,formatValue:R,displayTooltip:K,hideTooltip:L}=dl(e,y,s),x=te(),P=V(()=>`${(e.modelValue-c.value)/(u.value-c.value)*100}%`),S=V(()=>e.vertical?{bottom:P.value}:{left:P.value}),E=()=>{l.hovering=!0,K()},j=()=>{l.hovering=!1,l.dragging||L()},Y=v=>{a.value||(v.preventDefault(),z(v),window.addEventListener("mousemove",X),window.addEventListener("touchmove",X),window.addEventListener("mouseup",_),window.addEventListener("touchend",_),window.addEventListener("contextmenu",_),x.value.focus())},O=v=>{a.value||(l.newPosition=Number.parseFloat(P.value)+v/(u.value-c.value)*100,M(l.newPosition),d())},p=()=>{O(-i.value)},f=()=>{O(i.value)},k=()=>{O(-i.value*4)},n=()=>{O(i.value*4)},r=()=>{a.value||(M(0),d())},g=()=>{a.value||(M(100),d())},T=v=>{let A=!0;[ll,nl].includes(v.key)?p():[al,ol].includes(v.key)?f():v.key===sl?r():v.key===rl?g():v.key===il?k():v.key===ul?n():A=!1,A&&v.preventDefault()},I=v=>{let A,J;return v.type.startsWith("touch")?(J=v.touches[0].clientY,A=v.touches[0].clientX):(J=v.clientY,A=v.clientX),{clientX:A,clientY:J}},z=v=>{l.dragging=!0,l.isClick=!0;const{clientX:A,clientY:J}=I(v);e.vertical?l.startY=J:l.startX=A,l.startPosition=Number.parseFloat(P.value),l.newPosition=l.startPosition},X=v=>{if(l.dragging){l.isClick=!1,K(),N();let A;const{clientX:J,clientY:ae}=I(v);e.vertical?(l.currentY=ae,A=(l.startY-l.currentY)/m.value*100):(l.currentX=J,A=(l.currentX-l.startX)/m.value*100),l.newPosition=l.startPosition+A,M(l.newPosition)}},_=()=>{l.dragging&&(setTimeout(()=>{l.dragging=!1,l.hovering||L(),l.isClick||M(l.newPosition),d()},0),window.removeEventListener("mousemove",X),window.removeEventListener("touchmove",X),window.removeEventListener("mouseup",_),window.removeEventListener("touchend",_),window.removeEventListener("contextmenu",_))},M=async v=>{if(v===null||Number.isNaN(+v))return;v<0?v=0:v>100&&(v=100);const A=100/((u.value-c.value)/i.value);let ae=Math.round(v/A)*A*(u.value-c.value)*.01+c.value;ae=Number.parseFloat(ae.toFixed(b.value)),ae!==e.modelValue&&o(ee,ae),!l.dragging&&e.modelValue!==l.oldValue&&(l.oldValue=e.modelValue),await Ve(),l.dragging&&K(),C.value.updatePopper()};return me(()=>l.dragging,v=>{w(v)}),{disabled:a,button:x,tooltip:C,tooltipVisible:$,showTooltip:s,wrapperStyle:S,formatValue:R,handleMouseEnter:E,handleMouseLeave:j,onButtonDown:Y,onKeyDown:T,setPosition:M}},ml=(e,l,o,a)=>({stops:V(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const i=(e.max-e.min)/e.step,s=100*e.step/(e.max-e.min),b=Array.from({length:i-1}).map((m,y)=>(y+1)*s);return e.range?b.filter(m=>m<100*(o.value-e.min)/(e.max-e.min)||m>100*(a.value-e.min)/(e.max-e.min)):b.filter(m=>m>100*(l.firstValue-e.min)/(e.max-e.min))}),getStopStyle:i=>e.vertical?{bottom:`${i}%`}:{left:`${i}%`}}),fl=(e,l,o,a,c,u)=>{const i=m=>{c(ee,m),c(re,m)},s=()=>e.range?![o.value,a.value].every((m,y)=>m===l.oldValue[y]):e.modelValue!==l.oldValue,b=()=>{var m,y;e.min>e.max&&je("Slider","min should not be greater than max.");const d=e.modelValue;e.range&&Array.isArray(d)?d[1]<e.min?i([e.min,e.min]):d[0]>e.max?i([e.max,e.max]):d[0]<e.min?i([e.min,d[1]]):d[1]>e.max?i([d[0],e.max]):(l.firstValue=d[0],l.secondValue=d[1],s()&&(e.validateEvent&&((m=u==null?void 0:u.validate)==null||m.call(u,"change").catch(N=>he())),l.oldValue=d.slice())):!e.range&&typeof d=="number"&&!Number.isNaN(d)&&(d<e.min?i(e.min):d>e.max?i(e.max):(l.firstValue=d,s()&&(e.validateEvent&&((y=u==null?void 0:u.validate)==null||y.call(u,"change").catch(N=>he())),l.oldValue=d)))};b(),me(()=>l.dragging,m=>{m||b()}),me(()=>e.modelValue,(m,y)=>{l.dragging||Array.isArray(m)&&Array.isArray(y)&&m.every((d,N)=>d===y[N])&&l.firstValue===m[0]&&l.secondValue===m[1]||b()},{deep:!0}),me(()=>[e.min,e.max],()=>{b()})},vl=we({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:He,default:"top"}}),bl={[ee]:e=>H(e)},gl=["tabindex"],yl=G({name:"ElSliderButton"}),pl=G({...yl,props:vl,emits:bl,setup(e,{expose:l,emit:o}){const a=e,c=ve("slider"),u=Fe({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:a.modelValue}),{disabled:i,button:s,tooltip:b,showTooltip:m,tooltipVisible:y,wrapperStyle:d,formatValue:N,handleMouseEnter:w,handleMouseLeave:C,onButtonDown:$,onKeyDown:R,setPosition:K}=cl(a,u,o),{hovering:L,dragging:x}=Pe(u);return l({onButtonDown:$,onKeyDown:R,setPosition:K,hovering:L,dragging:x}),(P,S)=>(B(),U("div",{ref_key:"button",ref:s,class:F([t(c).e("button-wrapper"),{hover:t(L),dragging:t(x)}]),style:oe(t(d)),tabindex:t(i)?-1:0,onMouseenter:S[0]||(S[0]=(...E)=>t(w)&&t(w)(...E)),onMouseleave:S[1]||(S[1]=(...E)=>t(C)&&t(C)(...E)),onMousedown:S[2]||(S[2]=(...E)=>t($)&&t($)(...E)),onTouchstart:S[3]||(S[3]=(...E)=>t($)&&t($)(...E)),onFocus:S[4]||(S[4]=(...E)=>t(w)&&t(w)(...E)),onBlur:S[5]||(S[5]=(...E)=>t(C)&&t(C)(...E)),onKeydown:S[6]||(S[6]=(...E)=>t(R)&&t(R)(...E))},[ne(t(Ct),{ref_key:"tooltip",ref:b,visible:t(y),placement:P.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":P.tooltipClass,disabled:!t(m),persistent:""},{content:q(()=>[Z("span",null,_e(t(N)),1)]),default:q(()=>[Z("div",{class:F([t(c).e("button"),{hover:t(L),dragging:t(x)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],46,gl))}});var Xe=fe(pl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const hl=we({mark:{type:de([String,Object]),default:void 0}});var Vl=G({name:"ElSliderMarker",props:hl,setup(e){const l=ve("slider"),o=V(()=>Le(e.mark)?e.mark:e.mark.label),a=V(()=>Le(e.mark)?void 0:e.mark.style);return()=>It("div",{class:l.e("marks-text"),style:a.value},o.value)}});const wl=["id","role","aria-label","aria-labelledby"],Sl={key:1},El=G({name:"ElSlider"}),kl=G({...El,props:Qt,emits:Zt,setup(e,{expose:l,emit:o}){const a=e,c=ve("slider"),{t:u}=Ae(),i=Fe({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:s,slider:b,firstButton:m,secondButton:y,sliderDisabled:d,minValue:N,maxValue:w,runwayStyle:C,barStyle:$,resetSize:R,emitChange:K,onSliderWrapperPrevent:L,onSliderClick:x,onSliderDown:P,setFirstValue:S,setSecondValue:E}=tl(a,i,o),{stops:j,getStopStyle:Y}=ml(a,i,N,w),{inputId:O,isLabeledByFormItem:p}=Bt(a,{formItemContext:s}),f=We(),k=V(()=>a.inputSize||f.value),n=V(()=>a.label||u("el.slider.defaultLabel",{min:a.min,max:a.max})),r=V(()=>a.range?a.rangeStartLabel||u("el.slider.defaultRangeStartLabel"):n.value),g=V(()=>a.formatValueText?a.formatValueText(v.value):`${v.value}`),T=V(()=>a.rangeEndLabel||u("el.slider.defaultRangeEndLabel")),I=V(()=>a.formatValueText?a.formatValueText(A.value):`${A.value}`),z=V(()=>[c.b(),c.m(f.value),c.is("vertical",a.vertical),{[c.m("with-input")]:a.showInput}]),X=el(a);fl(a,i,N,w,o,s);const _=V(()=>{const h=[a.min,a.max,a.step].map(Q=>{const ue=`${Q}`.split(".")[1];return ue?ue.length:0});return Math.max.apply(null,h)}),{sliderWrapper:M}=Dt(a,i,R),{firstValue:v,secondValue:A,sliderSize:J}=Pe(i),ae=h=>{i.dragging=h};return Oe(Ge,{...Pe(a),sliderSize:J,disabled:d,precision:_,emitChange:K,resetSize:R,updateDragging:ae}),l({onSliderClick:x}),(h,Q)=>{var ue,Re;return B(),U("div",{id:h.range?t(O):void 0,ref_key:"sliderWrapper",ref:M,class:F(t(z)),role:h.range?"group":void 0,"aria-label":h.range&&!t(p)?t(n):void 0,"aria-labelledby":h.range&&t(p)?(ue=t(s))==null?void 0:ue.labelId:void 0,onTouchstart:Q[2]||(Q[2]=(...W)=>t(L)&&t(L)(...W)),onTouchmove:Q[3]||(Q[3]=(...W)=>t(L)&&t(L)(...W))},[Z("div",{ref_key:"slider",ref:b,class:F([t(c).e("runway"),{"show-input":h.showInput&&!h.range},t(c).is("disabled",t(d))]),style:oe(t(C)),onMousedown:Q[0]||(Q[0]=(...W)=>t(P)&&t(P)(...W)),onTouchstart:Q[1]||(Q[1]=(...W)=>t(P)&&t(P)(...W))},[Z("div",{class:F(t(c).e("bar")),style:oe(t($))},null,6),ne(Xe,{id:h.range?void 0:t(O),ref_key:"firstButton",ref:m,"model-value":t(v),vertical:h.vertical,"tooltip-class":h.tooltipClass,placement:h.placement,role:"slider","aria-label":h.range||!t(p)?t(r):void 0,"aria-labelledby":!h.range&&t(p)?(Re=t(s))==null?void 0:Re.labelId:void 0,"aria-valuemin":h.min,"aria-valuemax":h.range?t(A):h.max,"aria-valuenow":t(v),"aria-valuetext":t(g),"aria-orientation":h.vertical?"vertical":"horizontal","aria-disabled":t(d),"onUpdate:modelValue":t(S)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),h.range?(B(),D(Xe,{key:0,ref_key:"secondButton",ref:y,"model-value":t(A),vertical:h.vertical,"tooltip-class":h.tooltipClass,placement:h.placement,role:"slider","aria-label":t(T),"aria-valuemin":t(v),"aria-valuemax":h.max,"aria-valuenow":t(A),"aria-valuetext":t(I),"aria-orientation":h.vertical?"vertical":"horizontal","aria-disabled":t(d),"onUpdate:modelValue":t(E)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):le("v-if",!0),h.showStops?(B(),U("div",Sl,[(B(!0),U(pe,null,Ee(t(j),(W,ie)=>(B(),U("div",{key:ie,class:F(t(c).e("stop")),style:oe(t(Y)(W))},null,6))),128))])):le("v-if",!0),t(X).length>0?(B(),U(pe,{key:2},[Z("div",null,[(B(!0),U(pe,null,Ee(t(X),(W,ie)=>(B(),U("div",{key:ie,style:oe(t(Y)(W.position)),class:F([t(c).e("stop"),t(c).e("marks-stop")])},null,6))),128))]),Z("div",{class:F(t(c).e("marks"))},[(B(!0),U(pe,null,Ee(t(X),(W,ie)=>(B(),D(t(Vl),{key:ie,mark:W.mark,style:oe(t(Y)(W.position))},null,8,["mark","style"]))),128))],2)],64)):le("v-if",!0)],38),h.showInput&&!h.range?(B(),D(t(Jt),{key:0,ref:"input","model-value":t(v),class:F(t(c).e("input")),step:h.step,disabled:t(d),controls:h.showInputControls,min:h.min,max:h.max,debounce:h.debounce,size:t(k),"onUpdate:modelValue":t(S),onChange:t(K)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):le("v-if",!0)],42,wl)}}});var Nl=fe(kl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]);const Bl=$e(Nl);export{Bl as E,Il as a};
