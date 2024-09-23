"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[622796],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),g=l,y=c["".concat(a,".").concat(g)]||c[g]||p[g]||i;return t?r.createElement(y,o(o({ref:n},d),{},{components:t})):r.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[c]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},255663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(58168),l=(t(296540),t(15680));const i={title:"SUBSTRING_INDEX",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/substring-index",id:"version-2.1/sql-manual/sql-functions/string-functions/substring-index",title:"SUBSTRING_INDEX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/substring-index.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/substring-index",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/substring-index",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SUBSTRING_INDEX",language:"zh-CN"},sidebar:"docs",previous:{title:"SPLIT_BY_STRING",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/split-by-string"},next:{title:"MONEY_FORMAT",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/money-format"}},a={},u=[{value:"substring_index",id:"substring_index",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,l.yg)(c,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"substring_index"},"substring_index"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u81ea Apache Doris  1.2 \u7248\u672c\u8d77\u652f\u6301")),(0,l.yg)("p",null,"SUBSTRING_INDEX"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"VARCHAR substring_index(VARCHAR content, VARCHAR delimiter, INT field)")),(0,l.yg)("p",null,"\u8fd4\u56de content \u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u5728 delimiter \u51fa\u73b0 field \u6b21\u7684\u4f4d\u7f6e\u6309\u5982\u4e0b\u89c4\u5219\u622a\u53d6\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n","\u5982\u679c field > 0\uff0c\u5219\u4ece\u5de6\u8fb9\u7b97\u8d77\uff0c\u8fd4\u56de\u622a\u53d6\u4f4d\u7f6e\u524d\u7684\u5b50\u4e32\uff1b",(0,l.yg)("br",{parentName:"p"}),"\n","\u5982\u679c field < 0\uff0c\u5219\u4ece\u53f3\u8fb9\u7b97\u8d77\uff0c\u8fd4\u56de\u622a\u53d6\u4f4d\u7f6e\u540e\u7684\u5b50\u4e32\uff1b\n\u5982\u679c field = 0\uff0c\u8fd4\u56de\u4e00\u4e2a\u7a7a\u4e32\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"content")," \u4e0d\u4e3a null\uff09, \u6216\u8005 Null\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"content")," = null\uff09\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"delimiter \u5927\u5c0f\u5199\u654f\u611f\uff0c\u4e14\u662f\u591a\u5b57\u8282\u5b89\u5168\u7684\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"delimiter")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"field")," \u53c2\u6570\u9700\u8981\u662f\u5e38\u91cf\uff0c\u4e0d\u652f\u6301\u53d8\u91cf\u3002")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'mysql> select substring_index("hello world", " ", 1);\n+----------------------------------------+\n| substring_index("hello world", " ", 1) |\n+----------------------------------------+\n| hello                                  |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", 2);\n+----------------------------------------+\n| substring_index("hello world", " ", 2) |\n+----------------------------------------+\n| hello world                            |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", -1);\n+-----------------------------------------+\n| substring_index("hello world", " ", -1) |\n+-----------------------------------------+\n| world                                   |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -2);\n+-----------------------------------------+\n| substring_index("hello world", " ", -2) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -3);\n+-----------------------------------------+\n| substring_index("hello world", " ", -3) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", 0);\n+----------------------------------------+\n| substring_index("hello world", " ", 0) |\n+----------------------------------------+\n|                                        |\n+----------------------------------------+\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SUBSTRING_INDEX, SUBSTRING\n")))}p.isMDXComponent=!0}}]);