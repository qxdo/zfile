var V=(m,i,a)=>new Promise((c,o)=>{var d=e=>{try{l(a.next(e))}catch(t){o(t)}},p=e=>{try{l(a.throw(e))}catch(t){o(t)}},l=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,p);l((a=a.apply(m,i)).next())});import{X as h,_ as u,r as w,o as y,a as D,b as P,e as _,m as b,j as v,O as E,u as g,P as T}from"./index.965ac11d.js";import{D as A}from"./base.b65bdcd1.js";import{E as O}from"./dialog.bc6c9616.js";import"./overlay.73d3f939.js";/* empty css               */import"./index.efd5e5c6.js";import"./scroll.06c8f1a5.js";import"./focus-trap.2030fc87.js";import"./refs.45a892d9.js";import"./event.776e7e11.js";const R={class:"dialog-footer"},q={__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup(m,{emit:i}){const a=m,c=h(()=>new Promise((e,t)=>{(function(){return V(this,null,function*(){try{const r=yield u(()=>import("./base-editor.5b9d1ebf.js").then(function(n){return n.b}),["assets/base-editor.5b9d1ebf.js","assets/index.965ac11d.js","assets/index.6db9fd01.css","assets/vue.runtime.esm-bundler.e1e535bc.js"]);yield u(()=>Promise.resolve({}),["assets/base-editor.079785da.css"]),yield u(()=>Promise.resolve({}),["assets/vuepress.95aa9197.css"]);const f=yield u(()=>import("./vuepress.549e0153.js").then(function(n){return n.v}),["assets/vuepress.549e0153.js","assets/index.965ac11d.js","assets/index.6db9fd01.css"]),s=yield u(()=>import("./prism.be667f0e.js").then(function(n){return n.p}),["assets/prism.be667f0e.js","assets/index.965ac11d.js","assets/index.6db9fd01.css"]);r.use(f,{Prism:s}),e(r)}catch(r){t(r)}})})()})),o=w(""),d=!0;y(()=>{o.value=a.modelValue});const p=()=>{i("update:visible",!1)},l=()=>{i("update:modelValue",o.value),i("update:visible",!1)};return(e,t)=>{const r=A,f=O;return D(),P(f,{modelValue:d,"onUpdate:modelValue":t[1]||(t[1]=s=>d=s),"destroy-on-close":!0,onClose:p,title:a.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:_(()=>[b("span",R,[v(r,{onClick:p},{default:_(()=>[E("\u53D6\u6D88")]),_:1}),v(r,{type:"primary",onClick:l},{default:_(()=>[E("\u4FDD\u5B58")]),_:1})])]),default:_(()=>[v(g(c),{modelValue:g(o),"onUpdate:modelValue":t[0]||(t[0]=s=>T(o)?o.value=s:null),height:"70vh"},null,8,["modelValue"])]),_:1},8,["title"])}}};export{q as default};