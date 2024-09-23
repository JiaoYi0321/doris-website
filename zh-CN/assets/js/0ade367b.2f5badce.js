"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[794627],{15680:(n,e,t)=>{t.d(e,{xA:()=>c,yg:()=>d});var o=t(296540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=o.createContext({}),i=function(n){var e=o.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=i(n.components);return o.createElement(a.Provider,{value:e},n.children)},p="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,a=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),p=i(t),y=r,d=p["".concat(a,".").concat(y)]||p[y]||f[y]||s;return t?o.createElement(d,l(l({ref:e},c),{},{components:t})):o.createElement(d,l({ref:e},c))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,l=new Array(s);l[0]=y;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=n,u[p]="string"==typeof n?n:r,l[1]=u;for(var i=2;i<s;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},336538:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var o=t(58168),r=(t(296540),t(15680));const s={title:"JSON_QUOTE",language:"zh-CN"},l=void 0,u={unversionedId:"sql-manual/sql-functions/json-functions/json-quote",id:"version-2.0/sql-manual/sql-functions/json-functions/json-quote",title:"JSON_QUOTE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/json-functions/json-quote.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-quote",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-quote",draft:!1,tags:[],version:"2.0",frontMatter:{title:"JSON_QUOTE",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_OBJECT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-object"},next:{title:"JSON_UNQUOTE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/json-functions/json-unquote"}},a={},i=[{value:"json_quote",id:"json_quote",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},p="wrapper";function f(n){let{components:e,...t}=n;return(0,r.yg)(p,(0,o.A)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"json_quote"},"json_quote"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR json_quote(VARCHAR)")),(0,r.yg)("p",null,'\u5c06json_value\u7528\u53cc\u5f15\u53f7\uff08"\uff09\u62ec\u8d77\u6765\uff0c\u8df3\u8fc7\u5176\u4e2d\u5305\u542b\u7684\u7279\u6b8a\u8f6c\u4e49\u5b57\u7b26'),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'MySQL> SELECT json_quote(\'null\'), json_quote(\'"null"\');\n+--------------------+----------------------+\n| json_quote(\'null\') | json_quote(\'"null"\') |\n+--------------------+----------------------+\n| "null"             | "\\"null\\""           |\n+--------------------+----------------------+\n\n\nMySQL> SELECT json_quote(\'[1, 2, 3]\');\n+-------------------------+\n| json_quote(\'[1, 2, 3]\') |\n+-------------------------+\n| "[1, 2, 3]"             |\n+-------------------------+\n\n\nMySQL> SELECT json_quote(null);\n+------------------+\n| json_quote(null) |\n+------------------+\n| NULL             |\n+------------------+\n\nMySQL> select json_quote("\\n\\b\\r\\t");\n+------------------------+\n| json_quote(\'\\n\\b\\r\\t\') |\n+------------------------+\n| "\\n\\b\\r\\t"             |\n+------------------------+\n')),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"json,quote,json_quote"))}f.isMDXComponent=!0}}]);