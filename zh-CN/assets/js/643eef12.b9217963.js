"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[211461],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=p(n),E=r,u=c["".concat(o,".").concat(E)]||c[E]||m[E]||i;return n?a.createElement(u,l(l({ref:t},y),{},{components:n})):a.createElement(u,l({ref:t},y))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=E;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},237921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const i={title:"CREATE-ENCRYPT-KEY",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",title:"CREATE-ENCRYPT-KEY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CREATE-ENCRYPT-KEY",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-POLICY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY"},next:{title:"CREATE-RESOURCE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE"}},o={},p=[{value:"CREATE-ENCRYPTKEY",id:"create-encryptkey",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],y={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-encryptkey"},"CREATE-ENCRYPTKEY"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE ENCRYPTKEY"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u6b64\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5\u3002\u6267\u884c\u6b64\u547d\u4ee4\u9700\u8981\u7528\u6237\u62e5\u6709 ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN")," \u6743\u9650\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY key_name AS "key_string"\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"key_name"),": \u8981\u521b\u5efa\u5bc6\u94a5\u7684\u540d\u5b57, \u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u7684\u540d\u5b57\u3002\u6bd4\u5982\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"db1.my_key"),"\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"key_string"),": \u8981\u521b\u5efa\u5bc6\u94a5\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.yg)("p",null,"\u5982\u679c ",(0,r.yg)("inlineCode",{parentName:"p"},"key_name")," \u4e2d\u5305\u542b\u4e86\u6570\u636e\u5e93\u540d\u5b57\uff0c\u90a3\u4e48\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5\u4f1a\u521b\u5efa\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u5426\u5219\u8fd9\u4e2a\u51fd\u6570\u5c06\u4f1a\u521b\u5efa\u5728\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u7684\u6570\u636e\u5e93\u3002\u65b0\u5bc6\u94a5\u7684\u540d\u5b57\u4e0d\u80fd\u591f\u4e0e\u5bf9\u5e94\u6570\u636e\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5bc6\u94a5\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u521b\u5efa\u5931\u8d25\u3002"),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5bc6\u94a5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5"),(0,r.yg)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u9700\u5728\u5bc6\u94a5\u524d\u6dfb\u52a0\u5173\u952e\u5b57 ",(0,r.yg)("inlineCode",{parentName:"p"},"KEY"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"key"),"\uff0c\u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"key_name")," \u7a7a\u683c\u9694\u5f00\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6               |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+--------------------------------------------------------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+--------------------------------------------------------------------+\n| Doris is Great                                                     |\n+--------------------------------------------------------------------+\n1 row in set (0.01 sec)\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, ENCRYPTKEY\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);