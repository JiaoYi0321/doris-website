"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[566806],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),f=s,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},133584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(58168),s=(t(296540),t(15680));const i={title:"SUBSTRING",language:"en"},a=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/substring",id:"version-2.0/sql-manual/sql-functions/string-functions/substring",title:"SUBSTRING",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/substring.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/substring",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/substring",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SUBSTRING",language:"en"},sidebar:"docs",previous:{title:"SUBSTR",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/substr"},next:{title:"SUB_REPLACE",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/sub-replace"}},l={},u=[{value:"substring",id:"substring",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"substring"},"substring"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"VARCHAR substring(VARCHAR str, INT pos[, INT len])")),(0,s.yg)("p",null,"The forms without a ",(0,s.yg)("inlineCode",{parentName:"p"},"len")," argument return a substring from string ",(0,s.yg)("inlineCode",{parentName:"p"},"str")," starting at position ",(0,s.yg)("inlineCode",{parentName:"p"},"pos"),".\nThe forms with a ",(0,s.yg)("inlineCode",{parentName:"p"},"len")," argument return a substring len characters long from string ",(0,s.yg)("inlineCode",{parentName:"p"},"str"),", starting at position pos.\nIt is also possible to use a negative value for ",(0,s.yg)("inlineCode",{parentName:"p"},"pos"),". In this case,\nthe beginning of the substring is ",(0,s.yg)("inlineCode",{parentName:"p"},"pos")," characters from the end of the string, rather than the beginning.\nA negative value may be used for ",(0,s.yg)("inlineCode",{parentName:"p"},"pos")," in any of the forms of this function.\nA value of 0 for ",(0,s.yg)("inlineCode",{parentName:"p"},"pos")," returns an empty string."),(0,s.yg)("p",null,"For all forms of SUBSTRING(),\nthe position of the first character in the string from which the substring is to be extracted is reckoned as 1."),(0,s.yg)("p",null,"If len is less than 1, the result is the empty string."),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"mysql> select substring('abc1', 2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 0);\n+----------------------+\n| substring('abc1', 0) |\n+----------------------+\n|                      |\n+----------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"SUBSTRING, STRING\n")))}g.isMDXComponent=!0}}]);