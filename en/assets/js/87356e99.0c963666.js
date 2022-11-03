"use strict";(self.webpackChunkbase=self.webpackChunkbase||[]).push([[96],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"linux/Arch Linux",id:"linux/Arch Linux",title:"Arch Linux",description:"Comandos",source:"@site/docs/linux/Arch Linux.md",sourceDirName:"linux",slug:"/linux/Arch Linux",permalink:"/base-de-conhecimento-fred/en/docs/linux/Arch Linux",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Isto \xe9 o in\xedcio",permalink:"/base-de-conhecimento-fred/en/docs/inicio"},next:{title:"Ubuntu",permalink:"/base-de-conhecimento-fred/en/docs/linux/Ubuntu"}},c={},u=[{value:"Comandos",id:"comandos",level:2},{value:"yay",id:"yay",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"comandos"},"Comandos"),(0,a.kt)("h3",{id:"yay"},"yay"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instalar/atualizar pacote (precisa atualizar os repos pra atualizar, esp\xe9cie de  ",(0,a.kt)("inlineCode",{parentName:"li"},"apt update"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S nomeDoPacote\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Atualizar reposit\xf3rios:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yay --sync --refresh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Atualizar tudo (n\xe3o precisa atualizar repos usando esse comando):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yay -Syyu\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remover pacote:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yay -R nomeDoPacote\n")))}s.isMDXComponent=!0}}]);