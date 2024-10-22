"use strict";(self.webpackChunkbase=self.webpackChunkbase||[]).push([[135],{5680:(e,r,n)=>{n.d(r,{xA:()=>m,yg:()=>f});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},m=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=a,f=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return n?t.createElement(f,i(i({ref:r},m),{},{components:n})):t.createElement(f,i({ref:r},m))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6377:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=n(8168),a=(n(6540),n(5680));const o={},i=void 0,p={unversionedId:"programacao/Java",id:"programacao/Java",title:"Java",description:"Implementando interfaces sem classe pr\xf3pria",source:"@site/docs/programacao/Java.md",sourceDirName:"programacao",slug:"/programacao/Java",permalink:"/base-de-conhecimento-fred/en/docs/programacao/Java",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ubuntu",permalink:"/base-de-conhecimento-fred/en/docs/linux/Ubuntu"},next:{title:"Javascript",permalink:"/base-de-conhecimento-fred/en/docs/programacao/Javascript"}},c={},s=[{value:"Implementando interfaces sem classe pr\xf3pria",id:"implementando-interfaces-sem-classe-pr\xf3pria",level:2}],m={toc:s},l="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(l,(0,t.A)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"implementando-interfaces-sem-classe-pr\xf3pria"},"Implementando interfaces sem classe pr\xf3pria"),(0,a.yg)("p",null,"Em alguns casos, precisamos rapidamente implementar uma interface (comum em callbacks do retrofit, por exemplo), para isso, podemos usar a keyword ",(0,a.yg)("inlineCode",{parentName:"p"},"new")," diretamente, conforme exemplo:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'interface ICumprimentadorTraduzido {\n    String oi(String nome);\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ICumprimentadorTraduzido portuguesTradutor = new ICumprimentadorTraduzido() {\n            @Override\n            public String oi(String nome) {\n                return "Oi " + nome;\n            }\n        };\n        ICumprimentadorTraduzido inglesTradutor = new ICumprimentadorTraduzido() {\n            @Override\n            public String oi(String nome) {\n                return "Hi " + nome;\n            }\n        };\n        // Tamb\xe9m \xe9 poss\xedvel usar lambda, do Java 8:\n        ICumprimentadorTraduzido espanholTradutor = (String nome) -> "Hola " + nome;\n        String oiEmPortugues = portuguesTradutor.oi("Fred");\n        String oiEmIngles = inglesTradutor.oi("Fred");\n        String oiEmEspanhol = espanholTradutor.oi("Fred");\n        System.out.println(oiEmPortugues); // -> Oi Fred\n        System.out.println(oiEmIngles); // -> Hi Fred\n        System.out.prinln(oiEmEspanhol); // -> Hola Fred\n    }\n}\n')))}u.isMDXComponent=!0}}]);