import{d as B,I as E,J as F,r as h,o as i,c as r,e as p,w as S,x as a,p as K,K as L,L as g,M,F as R,N as $,O as z,P as J,Q as y,C as o,G as O,z as U,R as A,S as G,U as P,A as Q,B as T,V as W,W as j,_ as q}from"./index-7zrOSOGY.js";const v=c=>(Q("data-v-ae005679"),c=c(),T(),c),H={class:"vueapp-menu"},X={class:"vueapp-menu_content"},Y=["onClick"],Z=v(()=>o("img",{src:W,alt:""},null,-1)),ee={key:0,class:"select"},te={class:"vueapp-menu_content-item-title"},ae={key:0,class:"vueapp-menu_empty"},se=v(()=>o("img",{src:j},null,-1)),ne=v(()=>o("span",null,"暂无数据...",-1)),oe=[se,ne],le=B({__name:"menu",setup(c){const x=E(),{allData:f,optionData:l,appData:n,asideValue:u,drawer:I,formData:k}=F(x),_=h();function w(t){return!I.value||n.value[u.value].length===0?!1:n.value[u.value].some(e=>e.meta[l.value.title]===t)}function V(t){const e=n.value[u.value].findIndex(m=>m.name===t.name);if(e!==-1){n.value[u.value].splice(e,1);return}n.value[u.value].push(t),k.value.asideLast&&window.sessionStorage.setItem("appData",JSON.stringify(n.value))}const d=h();d.value=f.value;function C(t){d.value=f.value.filter(e=>e.meta[l.value.title].includes(t))}return(t,e)=>{const m=A,D=G,b=P;return i(),r("div",H,[p(D,{onSubmit:e[1]||(e[1]=g(()=>{},["prevent"])),onKeyup:e[2]||(e[2]=M(g(()=>{},["stop"]),["enter"]))},{default:S(()=>[p(m,{modelValue:a(_),"onUpdate:modelValue":e[0]||(e[0]=s=>K(_)?_.value=s:null),"prefix-icon":a(L),placeholder:"请输入搜索内容",clearable:"",onInput:C},null,8,["modelValue","prefix-icon"])]),_:1}),p(b,{style:{height:"100%",margin:"15px 0"}},{default:S(()=>[o("div",X,[(i(!0),r(R,null,U(a(d),(s,N)=>(i(),r("div",{class:"vueapp-menu_content-item",key:N,onClick:ue=>V(s)},[o("div",{class:"vueapp-menu_content-item-icon",style:$({background:s.meta[a(l).color]})},[z(t.$slots,"icon",{data:s.meta},()=>[Z],!0),w(s.meta[a(l).title])?(i(),r("div",ee,[p(a(J),{color:"#fff"})])):y("",!0)],4),o("div",te,O(s.meta[a(l).title]),1)],8,Y))),128)),a(d).length===0?(i(),r("div",ae,oe)):y("",!0)])]),_:3})])}}}),re=q(le,[["__scopeId","data-v-ae005679"]]);export{re as default};
