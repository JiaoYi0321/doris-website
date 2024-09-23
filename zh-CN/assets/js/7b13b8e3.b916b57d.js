"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[870170],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},687503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(58168),o=(n(296540),n(15680));const a={title:"Session Action",language:"zh-CN"},i=void 0,s={unversionedId:"admin-manual/http-actions/fe/session-action",id:"version-1.2/admin-manual/http-actions/fe/session-action",title:"Session Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/session-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/session-action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/session-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Session Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Query Profile Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/query-profile-action-controller"},next:{title:"System Action",permalink:"/zh-CN/docs/1.2/admin-manual/http-actions/fe/system-action"}},c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"session-action"},"Session Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GET /rest/v1/session\n")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Session Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7684\u4f1a\u8bdd\u4fe1\u606f\u3002"),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"\u65e0"),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": ["Id", "User", "Host", "Cluster", "Db", "Command", "Time", "State", "Info"],\n        "rows": [{\n            "User": "root",\n            "Command": "Sleep",\n            "State": "",\n            "Cluster": "default_cluster",\n            "Host": "10.81.85.89:31465",\n            "Time": "230",\n            "Id": "0",\n            "Info": "",\n            "Db": "db1"\n        }]\n    },\n    "count": 2\n}\n')),(0,o.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u540c ",(0,o.yg)("inlineCode",{parentName:"p"},"System Action"),"\u3002\u662f\u4e00\u4e2a\u8868\u683c\u7684\u63cf\u8ff0\u3002"))}d.isMDXComponent=!0}}]);