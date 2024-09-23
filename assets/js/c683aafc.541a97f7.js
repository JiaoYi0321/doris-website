"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[748568],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),d=s,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},351643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(58168),s=(t(296540),t(15680));const a={title:"ucase",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/ucase",id:"version-1.2/sql-manual/sql-functions/string-functions/ucase",title:"ucase",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/string-functions/ucase.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/ucase",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/ucase",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ucase",language:"en"},sidebar:"docs",previous:{title:"upper",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/upper"},next:{title:"initcap",permalink:"/docs/1.2/sql-manual/sql-functions/string-functions/initcap"}},c={},l=[{value:"ucase",id:"ucase",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"keywords",id:"keywords",level:3}],u={toc:l},p="wrapper";function f(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"ucase"},"ucase"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"INT ucase(VARCHAR str)")),(0,s.yg)("p",null,"Convert all strings in parameters to uppercase. Another alias for this function is ",(0,s.yg)("a",{parentName:"p",href:"/docs/1.2/sql-manual/sql-functions/string-functions/upper"},"upper"),"."),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"UCASE\n")))}f.isMDXComponent=!0}}]);