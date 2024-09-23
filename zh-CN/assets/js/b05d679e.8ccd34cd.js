"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[363137],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),E=a,g=u["".concat(i,".").concat(E)]||u[E]||m[E]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=E;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},410681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-SYSTEM-DROP-BACKEND",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND",id:"version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND",title:"ALTER-SYSTEM-DROP-BACKEND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-SYSTEM-DROP-BACKEND",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DROP-OBSERVER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-OBSERVER"},next:{title:"ALTER-SYSTEM-DROP-BROKER",permalink:"/zh-CN/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER"}},i={},p=[{value:"ALTER-SYSTEM-DROP-BACKEND",id:"alter-system-drop-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-system-drop-backend"},"ALTER-SYSTEM-DROP-BACKEND"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER SYSTEM DROP BACKEND"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664 BACKEND \u8282\u70b9\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u901a\u8fc7 host \u548c port \u67e5\u627e backend")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...]\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u901a\u8fc7 backend_id \u67e5\u627e backend")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP BACKEND "id1","id2"...;\n')),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"host \u53ef\u4ee5\u662f\u4e3b\u673a\u540d\u6216\u8005ip\u5730\u5740"),(0,a.yg)("li",{parentName:"ol"},"heartbeat_port \u4e3a\u8be5\u8282\u70b9\u7684\u5fc3\u8df3\u7aef\u53e3"),(0,a.yg)("li",{parentName:"ol"},"\u589e\u52a0\u548c\u5220\u9664\u8282\u70b9\u4e3a\u540c\u6b65\u64cd\u4f5c\u3002\u8fd9\u4e24\u79cd\u64cd\u4f5c\u4e0d\u8003\u8651\u8282\u70b9\u4e0a\u5df2\u6709\u7684\u6570\u636e\uff0c\u8282\u70b9\u76f4\u63a5\u4ece\u5143\u6570\u636e\u4e2d\u5220\u9664\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664\u4e24\u4e2a\u8282\u70b9"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP BACKEND "host1:port", "host2:port";\n')),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM DROP BACKEND "id1", "id2";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, DROP, BACKEND, ALTER SYSTEM\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);