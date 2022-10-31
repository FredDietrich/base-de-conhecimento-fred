"use strict";(self.webpackChunkbase=self.webpackChunkbase||[]).push([[829],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>d});var a=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=a.createContext({}),i=function(e){var r=a.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},l=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var o=e.components,t=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(o),d=t,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return o?a.createElement(f,p(p({ref:r},l),{},{components:o})):a.createElement(f,p({ref:r},l))}));function d(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var n=o.length,p=new Array(n);p[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,p[1]=s;for(var i=2;i<n;i++)p[i]=o[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7885:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var a=o(7462),t=(o(7294),o(3905));const n={},p=void 0,s={unversionedId:"programacao/Javascript",id:"programacao/Javascript",title:"Javascript",description:"Convers\xe3o para number",source:"@site/docs/programacao/Javascript.md",sourceDirName:"programacao",slug:"/programacao/Javascript",permalink:"/base-de-conhecimento-fred/docs/programacao/Javascript",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/base-de-conhecimento-fred/docs/programacao/Java"},next:{title:"Typescript",permalink:"/base-de-conhecimento-fred/docs/programacao/Typescript"}},c={},i=[{value:"Convers\xe3o para number",id:"convers\xe3o-para-number",level:2},{value:"Convers\xe3o truthy/falsey para boolean",id:"convers\xe3o-truthyfalsey-para-boolean",level:2}],l={toc:i};function u(e){let{components:r,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"convers\xe3o-para-number"},"Convers\xe3o para number"),(0,t.kt)("p",null,"\xc9 poss\xedvel converter algo para number utilizando o atalho ",(0,t.kt)("inlineCode",{parentName:"p"},"+")," no js. Ir\xe1 retornar um number parseado a partir da vari\xe1vel, ou NaN (not a number), conforme exemplos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'+oQueQuiserConverter\ntypeof +"2" //retorno esperado: "number"\n+"2" + +"2" //retorno esperado: 4\n+"abacaxi" //retorno esperado: NaN\n')),(0,t.kt)("h2",{id:"convers\xe3o-truthyfalsey-para-boolean"},"Convers\xe3o truthy/falsey para boolean"),(0,t.kt)("p",null,"Em muitos casos utilizamos n\xe3o booleanos em contexto booleano, e isto \xe9 ok, mas em casos de type safety onde precisamos de um boolean, mas temos um truthy/falsey, \xe9 poss\xedvel utilizar o atalho ",(0,t.kt)("inlineCode",{parentName:"p"},"!!"),", o primeiro exclama\xe7\xe3o ir\xe1 inverter a condi\xe7\xe3o, retornando o contr\xe1rio do esperado, j\xe1 em boolean, o segundo, \xe9 apenas para que n\xe3o se perca o valor original, reinvertendo. Conforme exemplos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'const truthy = 123\nconst falsey = ""\ntypeof !!truthy //retorno esperado: "boolean"\ntypeof !!falsey //retorno esperado: "boolean"\n')))}u.isMDXComponent=!0}}]);