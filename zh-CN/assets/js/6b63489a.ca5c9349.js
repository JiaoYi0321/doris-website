"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[423876],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>c});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},N=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=s(n),N=l,c=y["".concat(o,".").concat(N)]||y[N]||g[N]||r;return n?t.createElement(c,i(i({ref:a},m),{},{components:n})):t.createElement(c,i({ref:a},m))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[y]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}N.displayName="MDXCreateElement"},392265:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=n(58168),l=(n(296540),n(15680));const r={title:"INSERT",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT",id:"version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT",title:"INSERT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/INSERT",draft:!1,tags:[],version:"2.1",frontMatter:{title:"INSERT",language:"zh-CN"},sidebar:"docs",previous:{title:"CLEAN-PROFILE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CLEAN-PROFILE"},next:{title:"SELECT",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/SELECT"}},o={},s=[{value:"INSERT",id:"insert",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},y="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(y,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"insert"},"INSERT"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"INSERT"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u662f\u5b8c\u6210\u6570\u636e\u63d2\u5165\u64cd\u4f5c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,l.yg)("p",null," Parameters"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"tablet_name: \u5bfc\u5165\u6570\u636e\u7684\u76ee\u7684\u8868\u3002\u53ef\u4ee5\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"db_name.table_name")," \u5f62\u5f0f"),(0,l.yg)("p",{parentName:"blockquote"},"partitions: \u6307\u5b9a\u5f85\u5bfc\u5165\u7684\u5206\u533a\uff0c\u5fc5\u987b\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5206\u533a\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694"),(0,l.yg)("p",{parentName:"blockquote"},"label: \u4e3a Insert \u4efb\u52a1\u6307\u5b9a\u4e00\u4e2a label"),(0,l.yg)("p",{parentName:"blockquote"},"column_name: \u6307\u5b9a\u7684\u76ee\u7684\u5217\uff0c\u5fc5\u987b\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," \u4e2d\u5b58\u5728\u7684\u5217"),(0,l.yg)("p",{parentName:"blockquote"},"expression: \u9700\u8981\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5217\u7684\u5bf9\u5e94\u8868\u8fbe\u5f0f"),(0,l.yg)("p",{parentName:"blockquote"},"DEFAULT: \u8ba9\u5bf9\u5e94\u5217\u4f7f\u7528\u9ed8\u8ba4\u503c"),(0,l.yg)("p",{parentName:"blockquote"},"query: \u4e00\u4e2a\u666e\u901a\u67e5\u8be2\uff0c\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u5199\u5165\u5230\u76ee\u6807\u4e2d"),(0,l.yg)("p",{parentName:"blockquote"},"hint: \u7528\u4e8e\u6307\u793a ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u6267\u884c\u884c\u4e3a\u7684\u4e00\u4e9b\u6307\u793a\u7b26\u3002\u76ee\u524d hint \u6709\u4e09\u4e2a\u53ef\u9009\u503c",(0,l.yg)("inlineCode",{parentName:"p"},"/*+ STREAMING */"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"/*+ SHUFFLE */"),"\u6216",(0,l.yg)("inlineCode",{parentName:"p"},"/*+ NOSHUFFLE */")),(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"STREAMING\uff1a\u76ee\u524d\u65e0\u5b9e\u9645\u4f5c\u7528\uff0c\u53ea\u662f\u4e3a\u4e86\u517c\u5bb9\u4e4b\u524d\u7684\u7248\u672c\uff0c\u56e0\u6b64\u4fdd\u7559\u3002\uff08\u4e4b\u524d\u7684\u7248\u672c\u52a0\u4e0a\u8fd9\u4e2a hint \u4f1a\u8fd4\u56de label\uff0c\u73b0\u5728\u9ed8\u8ba4\u90fd\u4f1a\u8fd4\u56de label\uff09"),(0,l.yg)("li",{parentName:"ol"},"SHUFFLE\uff1a\u5f53\u76ee\u6807\u8868\u662f\u5206\u533a\u8868\uff0c\u5f00\u542f\u8fd9\u4e2a hint \u4f1a\u8fdb\u884c repartiiton\u3002"),(0,l.yg)("li",{parentName:"ol"},"NOSHUFFLE\uff1a\u5373\u4f7f\u76ee\u6807\u8868\u662f\u5206\u533a\u8868\uff0c\u4e5f\u4e0d\u4f1a\u8fdb\u884c repartiiton\uff0c\u4f46\u4f1a\u505a\u4e00\u4e9b\u5176\u4ed6\u64cd\u4f5c\u4ee5\u4fdd\u8bc1\u6570\u636e\u6b63\u786e\u843d\u5230\u5404\u4e2a\u5206\u533a\u4e2d\u3002"))),(0,l.yg)("p",null,"\u5bf9\u4e8e\u5f00\u542f\u4e86merge-on-write\u7684Unique\u8868\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528insert\u8bed\u53e5\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u7684\u64cd\u4f5c\u3002\u8981\u4f7f\u7528insert\u8bed\u53e5\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\uff0c\u9700\u8981\u5c06\u4f1a\u8bdd\u53d8\u91cfenable_unique_key_partial_update\u7684\u503c\u8bbe\u7f6e\u4e3atrue(\u8be5\u53d8\u91cf\u9ed8\u8ba4\u503c\u4e3afalse\uff0c\u5373\u9ed8\u8ba4\u65e0\u6cd5\u901a\u8fc7insert\u8bed\u53e5\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0)\u3002\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u65f6\uff0c\u63d2\u5165\u7684\u5217\u5fc5\u987b\u81f3\u5c11\u5305\u542b\u6240\u6709\u7684Key\u5217\uff0c\u540c\u65f6\u6307\u5b9a\u9700\u8981\u66f4\u65b0\u7684\u5217\u3002\u5982\u679c\u63d2\u5165\u884cKey\u5217\u7684\u503c\u5728\u539f\u8868\u4e2d\u5b58\u5728\uff0c\u5219\u5c06\u66f4\u65b0\u5177\u6709\u76f8\u540ckey\u5217\u503c\u90a3\u4e00\u884c\u7684\u6570\u636e\u3002\u5982\u679c\u63d2\u5165\u884cKey\u5217\u7684\u503c\u5728\u539f\u8868\u4e2d\u4e0d\u5b58\u5728\uff0c\u5219\u5c06\u5411\u8868\u4e2d\u63d2\u5165\u4e00\u6761\u65b0\u7684\u6570\u636e\uff0c\u6b64\u65f6insert\u8bed\u53e5\u4e2d\u6ca1\u6709\u6307\u5b9a\u7684\u5217\u5fc5\u987b\u6709\u9ed8\u8ba4\u503c\u6216\u53ef\u4ee5\u4e3anull\uff0c\u8fd9\u4e9b\u7f3a\u5931\u5217\u4f1a\u9996\u5148\u5c1d\u8bd5\u7528\u9ed8\u8ba4\u503c\u586b\u5145\uff0c\u5982\u679c\u8be5\u5217\u6ca1\u6709\u9ed8\u8ba4\u503c\uff0c\u5219\u5c1d\u8bd5\u4f7f\u7528null\u503c\u586b\u5145\uff0c\u5982\u679c\u8be5\u5217\u4e0d\u80fd\u4e3anull\uff0c\u5219\u672c\u6b21\u63d2\u5165\u5931\u8d25\u3002"),(0,l.yg)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u63a7\u5236insert\u8bed\u53e5\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\u7684\u4f1a\u8bdd\u53d8\u91cf",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"\u7684\u9ed8\u8ba4\u503c\u4e3atrue\uff0c\u5373insert\u8bed\u53e5\u9ed8\u8ba4\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u4e0d\u5141\u8bb8\u66f4\u65b0\u4e0d\u5b58\u5728\u7684key\u3002\u6240\u4ee5\uff0c\u5728\u4f7f\u7528insert\u8bed\u53e5\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u7684\u65f6\u5019\u5982\u679c\u5e0c\u671b\u80fd\u63d2\u5165\u4e0d\u5b58\u5728\u7684key\uff0c\u9700\u8981\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update"),"\u8bbe\u7f6e\u4e3atrue\u7684\u57fa\u7840\u4e0a\u540c\u65f6\u5c06",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict"),"\u8bbe\u7f6e\u4e3afalse\u3002"),(0,l.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,l.yg)("p",null,"\u5f53\u524d\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u65f6\uff0c\u5bf9\u4e8e\u6709\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff0c\u9ed8\u8ba4\u7684\u884c\u4e3a\u662f\u8fc7\u6ee4\uff0c\u6bd4\u5982\u5b57\u7b26\u4e32\u8d85\u957f\u7b49\u3002\u4f46\u662f\u5bf9\u4e8e\u6709\u8981\u6c42\u6570\u636e\u4e0d\u80fd\u591f\u88ab\u8fc7\u6ee4\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," \u6765\u786e\u4fdd\u5f53\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\u6389\u7684\u65f6\u5019\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u4e0d\u4f1a\u88ab\u6267\u884c\u6210\u529f\u3002"),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"test")," \u8868\u5305\u542b\u4e24\u4e2a\u5217",(0,l.yg)("inlineCode",{parentName:"p"},"c1"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"c2"),"\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5411",(0,l.yg)("inlineCode",{parentName:"li"},"test"),"\u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")),(0,l.yg)("p",null,"\u5176\u4e2d\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761\u8bed\u53e5\u662f\u4e00\u6837\u7684\u6548\u679c\u3002\u5728\u4e0d\u6307\u5b9a\u76ee\u6807\u5217\u65f6\uff0c\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u987a\u5e8f\u6765\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u76ee\u6807\u5217\u3002\n\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u8868\u8fbe\u7684\u610f\u601d\u662f\u4e00\u6837\u7684\uff0c\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"c2"),"\u5217\u7684\u9ed8\u8ba4\u503c\uff0c\u6765\u5b8c\u6210\u6570\u636e\u5bfc\u5165\u3002"),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5411",(0,l.yg)("inlineCode",{parentName:"li"},"test"),"\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n")),(0,l.yg)("p",null,"\u5176\u4e2d\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761\u8bed\u53e5\u6548\u679c\u4e00\u6837\uff0c\u5411",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u4e24\u6761\u6570\u636e\n\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u6548\u679c\u5df2\u77e5\uff0c\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"c2"),"\u5217\u7684\u9ed8\u8ba4\u503c\u5411",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u8868\u4e2d\u5bfc\u5165\u4e24\u6761\u6570\u636e"),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u5411 ",(0,l.yg)("inlineCode",{parentName:"li"},"test")," \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u5411 ",(0,l.yg)("inlineCode",{parentName:"li"},"test")," \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a partition \u548c label")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"INSERT\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u67e5\u770b\u8fd4\u56de\u7ed3\u679c"),(0,l.yg)("p",{parentName:"li"},"INSERT \u64cd\u4f5c\u662f\u4e00\u4e2a\u540c\u6b65\u64cd\u4f5c\uff0c\u8fd4\u56de\u7ed3\u679c\u5373\u8868\u793a\u64cd\u4f5c\u7ed3\u675f\u3002\u7528\u6237\u9700\u8981\u6839\u636e\u8fd4\u56de\u7ed3\u679c\u7684\u4e0d\u540c\uff0c\u8fdb\u884c\u5bf9\u5e94\u7684\u5904\u7406\u3002"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6267\u884c\u6210\u529f\uff0c\u7ed3\u679c\u96c6\u4e3a\u7a7a"),(0,l.yg)("p",{parentName:"li"},"\u5982\u679c insert \u5bf9\u5e94 select \u8bed\u53e5\u7684\u7ed3\u679c\u96c6\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl1 select * from empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"Query OK")," \u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"0 rows affected")," \u8868\u793a\u6ca1\u6709\u6570\u636e\u88ab\u5bfc\u5165\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6267\u884c\u6210\u529f\uff0c\u7ed3\u679c\u96c6\u4e0d\u4e3a\u7a7a"),(0,l.yg)("p",{parentName:"li"},"\u5728\u7ed3\u679c\u96c6\u4e0d\u4e3a\u7a7a\u7684\u60c5\u51b5\u4e0b\u3002\u8fd4\u56de\u7ed3\u679c\u5206\u4e3a\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,l.yg)("ol",{parentName:"li"},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Insert \u6267\u884c\u6210\u529f\u5e76\u53ef\u89c1\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'insert_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 with label my_label1 select * from tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> insert into tbl1 select * from tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"Query OK")," \u8868\u793a\u6267\u884c\u6210\u529f\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"4 rows affected")," \u8868\u793a\u603b\u5171\u67094\u884c\u6570\u636e\u88ab\u5bfc\u5165\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"2 warnings")," \u8868\u793a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570\u3002"),(0,l.yg)("p",{parentName:"li"},"\u540c\u65f6\u4f1a\u8fd4\u56de\u4e00\u4e2a json \u4e32\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'insert_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n")),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"label")," \u4e3a\u7528\u6237\u6307\u5b9a\u7684 label \u6216\u81ea\u52a8\u751f\u6210\u7684 label\u3002Label \u662f\u8be5 Insert Into \u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\u3002\u6bcf\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u90fd\u6709\u4e00\u4e2a\u5728\u5355 database \u5185\u90e8\u552f\u4e00\u7684 Label\u3002"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"status")," \u8868\u793a\u5bfc\u5165\u6570\u636e\u662f\u5426\u53ef\u89c1\u3002\u5982\u679c\u53ef\u89c1\uff0c\u663e\u793a ",(0,l.yg)("inlineCode",{parentName:"p"},"visible"),"\uff0c\u5982\u679c\u4e0d\u53ef\u89c1\uff0c\u663e\u793a ",(0,l.yg)("inlineCode",{parentName:"p"},"committed"),"\u3002"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"txnId")," \u4e3a\u8fd9\u4e2a insert \u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1\u7684 id\u3002"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"err")," \u5b57\u6bb5\u4f1a\u663e\u793a\u4e00\u4e9b\u5176\u4ed6\u975e\u9884\u671f\u9519\u8bef\u3002"),(0,l.yg)("p",{parentName:"li"},"\u5f53\u9700\u8981\u67e5\u770b\u88ab\u8fc7\u6ee4\u7684\u884c\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'show load where label="xxx";\n')),(0,l.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 URL \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\uff0c\u5177\u4f53\u89c1\u540e\u9762 ",(0,l.yg)("strong",{parentName:"p"},"\u67e5\u770b\u9519\u8bef\u884c")," \u5c0f\u7ed3\u3002"),(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"\u6570\u636e\u4e0d\u53ef\u89c1\u662f\u4e00\u4e2a\u4e34\u65f6\u72b6\u6001\uff0c\u8fd9\u6279\u6570\u636e\u6700\u7ec8\u662f\u4e00\u5b9a\u53ef\u89c1\u7684")),(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u67e5\u770b\u8fd9\u6279\u6570\u636e\u7684\u53ef\u89c1\u72b6\u6001\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"show transaction where id=4005;\n")),(0,l.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"TransactionStatus")," \u5217\u5982\u679c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"visible"),"\uff0c\u5219\u8868\u8ff0\u6570\u636e\u53ef\u89c1\u3002")))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6267\u884c\u5931\u8d25"),(0,l.yg)("p",{parentName:"li"},"\u6267\u884c\u5931\u8d25\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u6570\u636e\u88ab\u6210\u529f\u5bfc\u5165\uff0c\u5e76\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> insert into tbl1 select * from tbl2 where k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=__shard_2/error_log_insert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n')),(0,l.yg)("p",{parentName:"li"},"\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR 1064 (HY000): all partitions have no load data")," \u663e\u793a\u5931\u8d25\u539f\u56e0\u3002\u540e\u9762\u7684 url \u53ef\u4ee5\u7528\u4e8e\u67e5\u8be2\u9519\u8bef\u7684\u6570\u636e\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'show load warnings on "url";\n')),(0,l.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u67e5\u770b\u5230\u5177\u4f53\u9519\u8bef\u884c\u3002")))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8d85\u65f6\u65f6\u95f4"),(0,l.yg)("p",{parentName:"li"},"INSERT \u64cd\u4f5c\u7684\u8d85\u65f6\u65f6\u95f4\u7531 ",(0,l.yg)("a",{parentName:"p",href:"../../../../advanced/variables.md"},"\u4f1a\u8bdd\u53d8\u91cf")," ",(0,l.yg)("inlineCode",{parentName:"p"},"insert_timeout")," \u63a7\u5236\u3002\u9ed8\u8ba4\u4e3a4\u5c0f\u65f6\u3002\u8d85\u65f6\u5219\u4f5c\u4e1a\u4f1a\u88ab\u53d6\u6d88\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Label \u548c\u539f\u5b50\u6027"),(0,l.yg)("p",{parentName:"li"},"INSERT \u64cd\u4f5c\u540c\u6837\u80fd\u591f\u4fdd\u8bc1\u5bfc\u5165\u7684\u539f\u5b50\u6027\uff0c\u53ef\u4ee5\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"../../../../data-operate/import/import-scenes/load-atomicity.md"},"\u5bfc\u5165\u4e8b\u52a1\u548c\u539f\u5b50\u6027")," \u6587\u6863\u3002"),(0,l.yg)("p",{parentName:"li"},"\u5f53\u9700\u8981\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"CTE(Common Table Expressions)")," \u4f5c\u4e3a insert \u64cd\u4f5c\u4e2d\u7684\u67e5\u8be2\u90e8\u5206\u65f6\uff0c\u5fc5\u987b\u6307\u5b9a ",(0,l.yg)("inlineCode",{parentName:"p"},"WITH LABEL")," \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"column")," \u90e8\u5206\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u8fc7\u6ee4\u9608\u503c"),(0,l.yg)("p",{parentName:"li"},"\u4e0e\u5176\u4ed6\u5bfc\u5165\u65b9\u5f0f\u4e0d\u540c\uff0cINSERT \u64cd\u4f5c\u4e0d\u80fd\u6307\u5b9a\u8fc7\u6ee4\u9608\u503c\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"\uff09\u3002\u9ed8\u8ba4\u7684\u8fc7\u6ee4\u9608\u503c\u4e3a 1\uff0c\u5373\u7d20\u6709\u9519\u8bef\u884c\u90fd\u53ef\u4ee5\u88ab\u5ffd\u7565\u3002"),(0,l.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u6709\u8981\u6c42\u6570\u636e\u4e0d\u80fd\u591f\u88ab\u8fc7\u6ee4\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,l.yg)("a",{parentName:"p",href:"../../../../advanced/variables.md"},"\u4f1a\u8bdd\u53d8\u91cf")," ",(0,l.yg)("inlineCode",{parentName:"p"},"enable_insert_strict")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," \u6765\u786e\u4fdd\u5f53\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\u6389\u7684\u65f6\u5019\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," \u4e0d\u4f1a\u88ab\u6267\u884c\u6210\u529f\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6027\u80fd\u95ee\u9898"),(0,l.yg)("p",{parentName:"li"},"\u4e0d\u5efa\u8bae\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"VALUES")," \u65b9\u5f0f\u8fdb\u884c\u5355\u884c\u7684\u63d2\u5165\u3002\u5982\u679c\u5fc5\u987b\u8fd9\u6837\u4f7f\u7528\uff0c\u8bf7\u5c06\u591a\u884c\u6570\u636e\u5408\u5e76\u5230\u4e00\u4e2a INSERT \u8bed\u53e5\u4e2d\u8fdb\u884c\u6279\u91cf\u63d0\u4ea4\u3002"))))}g.isMDXComponent=!0}}]);