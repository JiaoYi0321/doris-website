"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[162554],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},802457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV6_STRING_TO_NUM",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv6-string-to-num",id:"version-2.1/sql-manual/sql-functions/ip-functions/ipv6-string-to-num",title:"IPV6_STRING_TO_NUM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv6-string-to-num.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv6-string-to-num",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num",draft:!1,tags:[],version:"2.1",frontMatter:{title:"IPV6_STRING_TO_NUM",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV6_NUM_TO_STRING",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-num-to-string"},next:{title:"IPV6_STRING_TO_NUM_OR_DEFAULT",permalink:"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num-or-default"}},a={},u=[{value:"IPV6_STRING_TO_NUM",id:"ipv6_string_to_num",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv6_string_to_num"},"IPV6_STRING_TO_NUM"),(0,i.yg)("p",null,"IPV6_STRING_TO_NUM"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR IPV6_STRING_TO_NUM(VARCHAR ipv6_string)")),(0,i.yg)("p",null,"IPv6NumToString \u7684\u53cd\u5411\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a IP \u5730\u5740\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684 IPv6 \u5730\u5740\u3002\n\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u5305\u542b\u6709\u6548\u7684 IPv4 \u5730\u5740\uff0c\u5219\u8fd4\u56de\u5176\u7b49\u6548\u7684 IPv6 \u5730\u5740\u3002"),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"\u5982\u679c\u8f93\u5165\u975e\u6cd5\u7684 IP \u5730\u5740\u6216\u8005 ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u4f1a\u629b\u51fa\u5f02\u5e38"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select hex(ipv6_string_to_num('1111::ffff'));\n+---------------------------------------+\n| hex(ipv6_string_to_num('1111::ffff')) |\n+---------------------------------------+\n| 1111000000000000000000000000FFFF      |\n+---------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num('192.168.0.1'));\n+----------------------------------------+\n| hex(ipv6_string_to_num('192.168.0.1')) |\n+----------------------------------------+\n| 00000000000000000000FFFFC0A80001       |\n+----------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select hex(ipv6_string_to_num('notaaddress'));\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Invalid IPv6 value\n\nmysql> select addr_src, hex(ipv6_string_to_num(addr_src)) from ipv4_string_test where addr_src is null;\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Null Input, you may consider convert it to a valid default IPv6 value like '::' first\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV6_STRING_TO_NUM, IP"))}d.isMDXComponent=!0}}]);