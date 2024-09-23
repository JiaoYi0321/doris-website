"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[850100],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>T});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),y=r,T=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return a?n.createElement(T,s(s({ref:t},c),{},{components:a})):n.createElement(T,s({ref:t},c))}));function T(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},655248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"ADMIN-SET-TABLE-STATUS",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS",title:"ADMIN-SET-TABLE-STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ADMIN-SET-TABLE-STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-PARTITION-VERSION",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION"},next:{title:"SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-DISTRIBUTION"}},i={},p=[{value:"ADMIN-SET-TABLE-STATUS",id:"admin-set-table-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-set-table-status"},"ADMIN-SET-TABLE-STATUS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN SET TABLE STATUS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u8868\u7684\u72b6\u6001\uff0c\u4ec5\u652f\u6301OLAP\u8868\u3002"),(0,r.yg)("p",null,"\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u7528\u4e8e\u624b\u52a8\u5c06 OLAP \u8868\u72b6\u6001\u8bbe\u7f6e\u4e3a\u6307\u5b9a\u72b6\u6001\uff0c\u4ece\u800c\u4f7f\u5f97\u67d0\u4e9b\u7531\u4e8e\u8868\u72b6\u6001\u88ab\u963b\u788d\u7684\u4efb\u52a1\u80fd\u591f\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE table_name STATUS\n        PROPERTIES ("key" = "value", ...);\n')),(0,r.yg)("p",null,"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'"state"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a\u76ee\u6807\u72b6\u6001\uff0c\u5c06\u4f1a\u4fee\u6539 OLAP \u8868\u7684\u72b6\u6001\u81f3\u6b64\u72b6\u6001\u3002')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u5f53\u524d\u53ef\u4fee\u6539\u7684\u76ee\u6807\u72b6\u6001\u5305\u62ec\uff1a"),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"NORMAL"),(0,r.yg)("li",{parentName:"ol"},"ROLLUP"),(0,r.yg)("li",{parentName:"ol"},"SCHEMA_CHANGE"),(0,r.yg)("li",{parentName:"ol"},"BACKUP"),(0,r.yg)("li",{parentName:"ol"},"RESTORE"),(0,r.yg)("li",{parentName:"ol"},"WAITING_STABLE")),(0,r.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u8868\u7684\u72b6\u6001\u5df2\u7ecf\u662f\u6307\u5b9a\u7684\u72b6\u6001\uff0c\u5219\u4f1a\u88ab\u5ffd\u7565\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u6b64\u547d\u4ee4\u4e00\u822c\u53ea\u7528\u4e8e\u7d27\u6025\u6545\u969c\u4fee\u590d\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e\u8868 tbl1 \u7684\u72b6\u6001\u4e3a NORMAL\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'admin set table tbl1 status properties("state" = "NORMAL");\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e\u8868 tbl2 \u7684\u72b6\u6001\u4e3a SCHEMA_CHANGE\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'admin set table test_set_table_status status properties("state" = "SCHEMA_CHANGE");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SET, TABLE, STATUS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);