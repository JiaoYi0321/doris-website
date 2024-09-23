"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[513930],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(t),d=a,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[y]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},268163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"AES_DECRYPT",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt",id:"version-3.0/sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt",title:"AES_DECRYPT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/aes-decrypt",draft:!1,tags:[],version:"3.0",frontMatter:{title:"AES_DECRYPT",language:"zh-CN"},sidebar:"docs",previous:{title:"AES_ENCRYPT",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/aes-encrypt"},next:{title:"MD5",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/md5"}},s={},c=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:c},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"AES \u89e3\u5bc6\u51fd\u6570\u3002\u8be5\u51fd\u6570\u4e0e MySQL \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_DECRYPT")," \u51fd\u6570\u884c\u4e3a\u4e00\u81f4\u3002\u9ed8\u8ba4\u91c7\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_128_ECB")," \u7b97\u6cd5\uff0cpadding \u6a21\u5f0f\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"PKCS7"),"\u3002\u5e95\u5c42\u4f7f\u7528 OpenSSL \u5e93\u8fdb\u884c\u89e3\u5bc6\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR AES_ENCRYPT(VARCHAR str, VARCHAR key_str[, VARCHAR init_vector][, VARCHAR encryption_mode])")),(0,a.yg)("p",null,"\u8fd4\u56de\u89e3\u5bc6\u540e\u7684\u7ed3\u679c\uff0c\u5176\u4e2d\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"str")," \u4e3a\u5f85\u89e3\u5bc6\u6587\u672c\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"key_str")," \u4e3a\u5bc6\u94a5\u3002\u6ce8\u610f\u6b64\u5bc6\u94a5\u5e76\u975e 16 \u8fdb\u5236\u7f16\u7801\uff0c\u800c\u662f\u7f16\u7801\u540e\u7684\u5b57\u7b26\u4e32\u8868\u793a\u3002\u4f8b\u5982\u5bf9\u4e8e 128 \u4f4d\u5bc6\u94a5\u52a0\u5bc6\uff0c",(0,a.yg)("inlineCode",{parentName:"li"},"key_str")," \u957f\u5ea6\u5e94\u4e3a 16\u3002\u5982\u679c\u5bc6\u94a5\u957f\u5ea6\u4e0d\u8db3\uff0c\u4f7f\u7528",(0,a.yg)("strong",{parentName:"li"},"\u96f6\u586b\u5145"),"\u8865\u9f50\u3002\u5982\u679c\u957f\u5ea6\u8d85\u51fa\uff0c\u4f7f\u7528\u5faa\u73af\u5f02\u6216\u7684\u65b9\u5f0f\u6c42\u51fa\u6700\u7ec8\u5bc6\u94a5\u3002\u4f8b\u5982\u7b97\u6cd5\u4f7f\u7528\u7684 128 \u4f4d\u5bc6\u94a5\u4e3a ",(0,a.yg)("inlineCode",{parentName:"li"},"key"),"\uff0c\u5219 ",(0,a.yg)("inlineCode",{parentName:"li"},"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ...")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"init_vector")," \u4e3a\u7b97\u6cd5\u4e2d\u4f7f\u7528\u5230\u7684\u521d\u59cb\u5411\u91cf\uff0c\u4ec5\u5728\u7279\u5b9a\u7b97\u6cd5\u4e0b\u751f\u6548\uff0c\u5982\u4e0d\u6307\u5b9a\uff0c\u5219 Doris \u4f7f\u7528\u5185\u7f6e\u5411\u91cf\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"encryption_mode")," \u4e3a\u52a0\u5bc6\u7b97\u6cd5\uff0c\u53ef\u9009\u503c\u89c1\u4e8e\uff1a",(0,a.yg)("a",{parentName:"li",href:"../../../query/query-variables/variables"},"\u53d8\u91cf"),"\u3002")),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"\u622a\u6b62 3.0.2\uff0c\u4e24\u53c2\u6570\u7248\u672c\uff0c\u4f1a\u65e0\u89c6 session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"block_encryption_mode"),"\uff0c\u59cb\u7ec8\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"AES_128_ECB")," \u7b97\u6cd5\u8fdb\u884c\u89e3\u5bc6\u3002\u56e0\u6b64\u4e0d\u63a8\u8350\u8c03\u7528\u3002"),(0,a.yg)("p",{parentName:"admonition"},"3.0.3 \u8d77\uff0c\u8be5\u884c\u4e3a\u6062\u590d\u6b63\u5e38\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set block_encryption_mode='';\nQuery OK, 0 rows affected (0.10 sec)\n\nmysql> select aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n+--------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='), '***', '', 'AES_128_ECB') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n1 row in set (0.14 sec)\n\nmysql> set block_encryption_mode=\"AES_256_CBC\";\nQuery OK, 0 rows affected (0.10 sec)\n\nmysql> select aes_decrypt(from_base64('3dym0E7/+1zbrLIaBVNHSw=='),'F3229A0B371ED2D9441B830D21A390C3'); -- since 3.0.3\n+--------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('3dym0E7/+1zbrLIaBVNHSw=='), '***', '', 'AES_256_CBC') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select AES_DECRYPT(FROM_BASE64('tsmK1HzbpnEdR2//WhO+MA=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+------------------------------------------------------------------------------------------+\n| aes_decrypt(from_base64('tsmK1HzbpnEdR2//WhO+MA=='), '***', '0123456789', 'AES_256_CBC') |\n+------------------------------------------------------------------------------------------+\n| text                                                                                     |\n+------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AES_DECRYPT, AES, DECRYPT\n")))}u.isMDXComponent=!0}}]);