"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[985743],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>A});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,A=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(A,i(i({ref:t},p),{},{components:r})):n.createElement(A,i({ref:t},p))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},801729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const l={title:"ADMIN-REPAIR-TABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",id:"version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",title:"ADMIN-REPAIR-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REPAIR-TABLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"ADMIN-REPAIR-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"INSTALL-PLUGIN",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/INSTALL-PLUGIN"},next:{title:"ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}},s={},c=[{value:"ADMIN-REPAIR-TABLE",id:"admin-repair-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"admin-repair-table"},"ADMIN-REPAIR-TABLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ADMIN REPAIR TABLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8bed\u53e5\u7528\u4e8e\u5c1d\u8bd5\u4f18\u5148\u4fee\u590d\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u8ba9\u7cfb\u7edf\u5c1d\u8bd5\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\uff0c\u5e76\u4e0d\u4fdd\u8bc1\u80fd\u591f\u4fee\u590d\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ADMIN SHOW REPLICA STATUS \u547d\u4ee4\u67e5\u770b\u4fee\u590d\u60c5\u51b5\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u9ed8\u8ba4\u7684 timeout \u662f 14400 \u79d2(4\u5c0f\u65f6)\u3002\u8d85\u65f6\u610f\u5473\u7740\u7cfb\u7edf\u5c06\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u9700\u8981\u91cd\u65b0\u4f7f\u7528\u8be5\u547d\u4ee4\u8bbe\u7f6e")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u4fee\u590d\u6307\u5b9a\u8868"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u4fee\u590d\u6307\u5b9a\u5206\u533a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ADMIN, REPAIR, TABLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);