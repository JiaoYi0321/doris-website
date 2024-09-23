"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[459943],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(t),f=a,y=h["".concat(i,".").concat(f)]||h[f]||p[f]||l;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=f;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[h]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},424274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"XXHASH_32",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/hash-functions/xxhash-32",id:"version-2.1/sql-manual/sql-functions/hash-functions/xxhash-32",title:"XXHASH_32",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/hash-functions/xxhash-32.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/xxhash-32",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/xxhash-32",draft:!1,tags:[],version:"2.1",frontMatter:{title:"XXHASH_32",language:"zh-CN"},sidebar:"docs",previous:{title:"MURMUR_HASH3_64",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/murmur-hash3-64"},next:{title:"XXHASH_64",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/xxhash-64"}},i={},c=[{value:"xxhash_32",id:"xxhash_32",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},h="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(h,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"xxhash_32"},"xxhash_32"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT XXHASH_32(VARCHAR input, ...)")),(0,a.yg)("p",null,"\u8fd4\u56de\u8f93\u5165\u5b57\u7b26\u4e32\u768432\u4f4dxxhash\u503c\u3002"),(0,a.yg)("p",null,"\u6ce8\uff1a\u5728\u8ba1\u7b97hash\u503c\u65f6\uff0c\u66f4\u63a8\u8350\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_32"),"\uff0c\u800c\u4e0d\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"murmur_hash3_32"),"\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select xxhash_32(NULL);\n+-----------------+\n| xxhash_32(NULL) |\n+-----------------+\n|            NULL |\n+-----------------+\n\nmysql> select xxhash_32(\"hello\");\n+--------------------+\n| xxhash_32('hello') |\n+--------------------+\n|          -83855367 |\n+--------------------+\n\nmysql> select xxhash_32(\"hello\", \"world\");\n+-----------------------------+\n| xxhash_32('hello', 'world') |\n+-----------------------------+\n|                  -920844969 |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"HASH_32,HASH"))}p.isMDXComponent=!0}}]);