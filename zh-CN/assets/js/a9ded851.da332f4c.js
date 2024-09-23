"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[172942],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},407132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const o={title:"STRING",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-data-types/string-type/STRING",id:"version-2.1/sql-manual/sql-data-types/string-type/STRING",title:"STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-data-types/string-type/STRING.md",sourceDirName:"sql-manual/sql-data-types/string-type",slug:"/sql-manual/sql-data-types/string-type/STRING",permalink:"/zh-CN/docs/sql-manual/sql-data-types/string-type/STRING",draft:!1,tags:[],version:"2.1",frontMatter:{title:"STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"VARCHAR",permalink:"/zh-CN/docs/sql-manual/sql-data-types/string-type/VARCHAR"},next:{title:"ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-data-types/semi-structured/ARRAY"}},s={},p=[{value:"description",id:"description",level:2},{value:"keywords",id:"keywords",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"description"),(0,a.yg)("p",null,"STRING"),(0,a.yg)("p",null,"\u53d8\u957f\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u652f\u6301 1048576 \u5b57\u8282\uff081MB\uff09\uff0c\u53ef\u8c03\u5927\u5230 2147483643 \u5b57\u8282\uff082G\uff09\uff0c\u53ef\u901a\u8fc7 be \u914d\u7f6e ",(0,a.yg)("inlineCode",{parentName:"p"},"string_type_length_soft_limit_bytes"),"\u8c03\u6574\u3002String \u7c7b\u578b\u53ea\u80fd\u7528\u5728 value \u5217\uff0c\u4e0d\u80fd\u7528\u5728 key \u5217\u548c\u5206\u533a \u5206\u6876\u5217\nString \u7c7b\u578b\u53ea\u80fd\u7528\u5728 value \u5217\uff0c\u4e0d\u80fd\u7528\u5728 key \u5217\u548c\u5206\u533a\u5206\u6876\u5217\u3002"),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a\u53d8\u957f\u5b57\u7b26\u4e32\u662f\u4ee5 UTF-8 \u7f16\u7801\u5b58\u50a8\u7684\uff0c\u56e0\u6b64\u901a\u5e38\u82f1\u6587\u5b57\u7b26\u5360 1 \u4e2a\u5b57\u8282\uff0c\u4e2d\u6587\u5b57\u7b26\u5360 3 \u4e2a\u5b57\u8282\u3002"),(0,a.yg)("h2",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"STRING"))}y.isMDXComponent=!0}}]);