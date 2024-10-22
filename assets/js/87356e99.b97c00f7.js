"use strict";(self.webpackChunkbase=self.webpackChunkbase||[]).push([[585],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||y[m]||o;return n?t.createElement(d,l(l({ref:r},p),{},{components:n})):t.createElement(d,l({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7969:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(8168),a=(n(6540),n(5680));const o={},l=void 0,i={unversionedId:"linux/Arch Linux",id:"linux/Arch Linux",title:"Arch Linux",description:"Comandos",source:"@site/docs/linux/Arch Linux.md",sourceDirName:"linux",slug:"/linux/Arch Linux",permalink:"/base-de-conhecimento-fred/docs/linux/Arch Linux",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Isto \xe9 o in\xedcio",permalink:"/base-de-conhecimento-fred/docs/inicio"},next:{title:"Kubuntu",permalink:"/base-de-conhecimento-fred/docs/linux/Kubuntu"}},c={},u=[{value:"Comandos",id:"comandos",level:2},{value:"yay",id:"yay",level:3}],p={toc:u},s="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(s,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"comandos"},"Comandos"),(0,a.yg)("h3",{id:"yay"},"yay"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Instalar/atualizar pacote (precisa atualizar os repos pra atualizar, esp\xe9cie de  ",(0,a.yg)("inlineCode",{parentName:"li"},"apt update"),")")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yay -S nomeDoPacote\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Atualizar reposit\xf3rios:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yay --sync --refresh\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Atualizar tudo (n\xe3o precisa atualizar repos usando esse comando):")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yay -Syyu\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Remover pacote:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yay -R nomeDoPacote\n")))}y.isMDXComponent=!0}}]);