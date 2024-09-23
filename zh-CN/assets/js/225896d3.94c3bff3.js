"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77010],{15680:(n,e,t)=>{t.d(e,{xA:()=>o,yg:()=>m});var a=t(296540);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=a.createContext({}),y=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):g(g({},e),n)),t},o=function(n){var e=y(n.components);return a.createElement(p.Provider,{value:e},n.children)},s="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,p=n.parentName,o=i(n,["components","mdxType","originalType","parentName"]),s=y(t),d=l,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||r;return t?a.createElement(m,g(g({ref:e},o),{},{components:t})):a.createElement(m,g({ref:e},o))}));function m(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,g=new Array(r);g[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[s]="string"==typeof n?n:l,g[1]=i;for(var y=2;y<r;y++)g[y]=t[y];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},899730:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var a=t(58168),l=(t(296540),t(15680));const r={title:"Seatunnel Doris Sink",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},g=void 0,i={unversionedId:"ecosystem/seatunnel",id:"version-2.1/ecosystem/seatunnel",title:"Seatunnel Doris Sink",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/ecosystem/seatunnel.md",sourceDirName:"ecosystem",slug:"/ecosystem/seatunnel",permalink:"/zh-CN/docs/ecosystem/seatunnel",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Seatunnel Doris Sink",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"ecosystem",previous:{title:"DBT Doris Adapter",permalink:"/zh-CN/docs/ecosystem/dbt-doris-adapter"},next:{title:"Kyuubi",permalink:"/zh-CN/docs/ecosystem/kyuubi"}},p={},y=[{value:"Connector-V2",id:"connector-v2",level:2},{value:"\u63d2\u4ef6\u4ee3\u7801",id:"\u63d2\u4ef6\u4ee3\u7801",level:3},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"Connector-V1",id:"connector-v1",level:2},{value:"Flink Doris Sink",id:"flink-doris-sink",level:3},{value:"Spark Sink Doris",id:"spark-sink-doris",level:3}],o={toc:y},s="wrapper";function u(n){let{components:e,...t}=n;return(0,l.yg)(s,(0,a.A)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"SeaTunnel \u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u6613\u7528\u7684\u8d85\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u6570\u636e\u96c6\u6210\u5e73\u53f0\uff0c\u652f\u6301\u6d77\u91cf\u6570\u636e\u7684\u5b9e\u65f6\u540c\u6b65\u3002\u6bcf\u5929\u7a33\u5b9a\u9ad8\u6548\u5730\u540c\u6b65\u6570\u767e\u4ebf\u6570\u636e"),(0,l.yg)("h2",{id:"connector-v2"},"Connector-V2"),(0,l.yg)("p",null,"2.3.1 \u7248\u672c\u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/2.3.1/category/sink-v2"},"Apache SeaTunnel Connector-V2")," \u652f\u6301\u4e86 Doris Sink\uff0c\u5e76\u4e14\u652f\u6301 exactly-once \u7684\u7cbe\u51c6\u4e00\u6b21\u5199\u5165\u548c CDC \u6570\u636e\u540c\u6b65"),(0,l.yg)("h3",{id:"\u63d2\u4ef6\u4ee3\u7801"},"\u63d2\u4ef6\u4ee3\u7801"),(0,l.yg)("p",null,"SeaTunnel Doris Sink ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/seatunnel-connectors-v2/connector-doris"},"\u63d2\u4ef6\u4ee3\u7801")),(0,l.yg)("h3",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,l.yg)("p",null,"Doris \u96c6\u7fa4 FE \u8282\u70b9\u5730\u5740\uff0c\u683c\u5f0f\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},'"fe_ip:fe_http_port,..."')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"username [string]")),(0,l.yg)("p",null,"Doris \u7528\u6237\u540d"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"password [string]")),(0,l.yg)("p",null,"Doris \u7528\u6237\u5bc6\u7801"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table.identifier [string]")),(0,l.yg)("p",null,"Doris \u8868\u540d\u79f0\uff0c\u683c\u5f0f\u4e3a DBName.TableName"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sink.label-prefix [string]")),(0,l.yg)("p",null,"Stream Load \u5bfc\u5165\u4f7f\u7528\u7684\u6807\u7b7e\u524d\u7f00\u3002\u5728 2pc \u573a\u666f\u4e0b\uff0c\u9700\u8981\u5168\u5c40\u552f\u4e00\u6027\u6765\u4fdd\u8bc1 SeaTunnel \u7684 EOS \u8bed\u4e49"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sink.enable-2pc [bool]")),(0,l.yg)("p",null,"\u662f\u5426\u542f\u7528\u4e24\u9636\u6bb5\u63d0\u4ea4 (2pc)\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u4ee5\u786e\u4fdd exact - once \u8bed\u4e49\u3002\u5173\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\uff0c\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"../data-operate/import/stream-load-manual.md"},"\u8fd9\u91cc")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"sink.enable-delete [bool]")),(0,l.yg)("p",null,"\u662f\u5426\u542f\u7528\u5220\u9664\u3002\u8be5\u9009\u9879\u9700\u8981 Doris \u8868\u5f00\u542f\u6279\u91cf\u5220\u9664\u529f\u80fd (\u9ed8\u8ba4\u5f00\u542f 0.15+ \u7248\u672c)\uff0c\u4e14\u53ea\u652f\u6301 Unique \u8868\u6a21\u578b\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u94fe\u63a5\u83b7\u5f97\u66f4\u591a\u7ec6\u8282\uff1a"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/delete/batch-delete-manual"},"\u6279\u91cf\u5220\u9664")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"doris.config [map]")),(0,l.yg)("p",null,"Stream Load ",(0,l.yg)("inlineCode",{parentName:"p"},"data_desc")," \u7684\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e2a\u94fe\u63a5\u83b7\u5f97\u66f4\u591a\u7ec6\u8282\uff1a"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../data-operate/import/stream-load-manual.md"},"\u66f4\u591a Stream Load \u53c2\u6570")),(0,l.yg)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.yg)("p",null,"\u4f7f\u7528 JSON \u683c\u5f0f\u5bfc\u5165\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "doris_fe:8030"\n        username = root\n        password = ""\n        table.identifier = "test.table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_json"\n        doris.config = {\n            format="json"\n            read_json_by_line="true"\n        }\n    }\n}\n\n')),(0,l.yg)("p",null,"\u4f7f\u7528 CSV \u683c\u5f0f\u5bfc\u5165\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "doris_fe:8030"\n        username = root\n        password = ""\n        table.identifier = "test.table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_csv"\n        doris.config = {\n          format = "csv"\n          column_separator = ","\n          line_delimiter = "\\n"\n        }\n    }\n}\n')),(0,l.yg)("h2",{id:"connector-v1"},"Connector-V1"),(0,l.yg)("p",null,"2.1.0 \u7684 Apache SeaTunnel \u652f\u6301 Doris \u7684\u8fde\u63a5\u5668\uff0cSeaTunnel \u53ef\u4ee5\u901a\u8fc7 Spark \u5f15\u64ce\u548c Flink \u5f15\u64ce\u540c\u6b65\u6570\u636e\u81f3 Doris \u4e2d\u3002"),(0,l.yg)("h3",{id:"flink-doris-sink"},"Flink Doris Sink"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6\u4ee3\u7801")),(0,l.yg)("p",null,"Seatunnel Flink Sink Doris ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"\u63d2\u4ef6\u4ee3\u7801")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u53c2\u6570\u5217\u8868")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u5f15\u64ce"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"interval"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.*"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Flink")))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,l.yg)("p",null,"Doris Fe Http \u8bbf\u95ee\u5730\u5740\uff0ceg: 127.0.01:8030"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"database [string]")),(0,l.yg)("p",null,"\u5199\u5165 Doris \u7684\u5e93\u540d"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table [string]")),(0,l.yg)("p",null,"\u5199\u5165 Doris \u7684\u8868\u540d"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"user [string]")),(0,l.yg)("p",null,"Doris \u8bbf\u95ee\u7528\u6237"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"password [string]")),(0,l.yg)("p",null,"Doris \u8bbf\u95ee\u7528\u6237\u5bc6\u7801"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_size [int]")),(0,l.yg)("p",null,"\u5355\u6b21\u5199 Doris \u7684\u6700\u5927\u884c\u6570\uff0c\u9ed8\u8ba4\u503c 100"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"interval [int]")),(0,l.yg)("p",null,"flush \u95f4\u9694\u65f6\u95f4 (\u6beb\u79d2)\uff0c\u8d85\u8fc7\u8be5\u65f6\u95f4\u540e\u5f02\u6b65\u7ebf\u7a0b\u5c06 \u7f13\u5b58\u4e2d\u6570\u636e\u5199\u5165 Doris\u3002\u8bbe\u7f6e\u4e3a 0 \u8868\u793a\u5173\u95ed\u5b9a\u671f\u5199\u5165\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_retries [int]")),(0,l.yg)("p",null,"\u5199 Doris \u5931\u8d25\u4e4b\u540e\u7684\u91cd\u8bd5\u6b21\u6570"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"doris.* [string]")),(0,l.yg)("p",null,"Stream load \u7684\u5bfc\u5165\u53c2\u6570\u3002\u4f8b\u5982:'doris.column_separator' = ', '\u7b49"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../data-operate/import/stream-load-manual.md"},"\u66f4\u591a Stream Load \u53c2\u6570\u914d\u7f6e")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Examples")),(0,l.yg)("p",null,"Socket \u6570\u636e\u5199\u5165 Doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env {\n  execution.parallelism = 1\n}\nsource {\n    SocketStream {\n      host = 127.0.0.1\n      port = 9999\n      result_table_name = "socket"\n      field_name = "info"\n    }\n}\ntransform {\n}\nsink {\n  DorisSink {\n      fenodes = "127.0.0.1:8030"\n      user = root\n      password = 123456\n      database = test\n      table = test_tbl\n      batch_size = 5\n      max_retries = 1\n      interval = 5000\n    }\n}\n\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u542f\u52a8\u547d\u4ee4")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"sh bin/start-seatunnel-flink.sh --config config/flink.streaming.conf\n")),(0,l.yg)("h3",{id:"spark-sink-doris"},"Spark Sink Doris"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6\u4ee3\u7801")),(0,l.yg)("p",null,"Spark Sink Doris \u7684\u63d2\u4ef6\u4ee3\u7801\u5728",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"\u8fd9\u91cc")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u53c2\u6570\u5217\u8868")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u8981"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5f15\u64ce\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.*"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Spark")))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"fenodes [string]")),(0,l.yg)("p",null,"Doris Fe \u8282\u70b9\u5730\u5740:8030"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"database [string]")),(0,l.yg)("p",null,"\u5199\u5165 Doris \u7684\u5e93\u540d"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table [string]")),(0,l.yg)("p",null,"\u5199\u5165 Doris \u7684\u8868\u540d"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"user [string]")),(0,l.yg)("p",null,"Doris \u8bbf\u95ee\u7528\u6237"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"password [string]")),(0,l.yg)("p",null,"Doris \u8bbf\u95ee\u7528\u6237\u5bc6\u7801"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_size [string]")),(0,l.yg)("p",null,"Spark \u901a\u8fc7 Stream Load \u65b9\u5f0f\u5199\u5165\uff0c\u6bcf\u4e2a\u6279\u6b21\u63d0\u4ea4\u6761\u6570"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"doris. [string]")),(0,l.yg)("p",null,"Stream Load \u65b9\u5f0f\u5199\u5165\u7684 Http \u53c2\u6570\u4f18\u5316\uff0c\u5728\u5b98\u7f51\u53c2\u6570\u524d\u52a0\u4e0a'Doris.'\u524d\u7f00"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"../data-operate/import/stream-load-manual.md"},"\u66f4\u591a Stream Load \u53c2\u6570\u914d\u7f6e")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Examples")),(0,l.yg)("p",null,"Hive \u8fc1\u79fb\u6570\u636e\u81f3 Doris"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'env{\n  spark.app.name = "hive2doris-template"\n}\n\nspark {\n  spark.sql.catalogImplementation = "hive"\n}\n\nsource {\n  hive {\n    preSql = "select * from tmp.test"\n    result_table_name = "test"\n  }\n}\n\ntransform {\n}\n\n\nsink {\n\nConsole {\n\n  }\n\nDoris {\n   fenodes="xxxx:8030"\n   database="tmp"\n   table="test"\n   user="root"\n   password="root"\n   batch_size=1000\n   doris.column_separator="\\t"\n   doris.columns="date_key,date_value,day_in_year,day_in_month"\n   }\n}\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u542f\u52a8\u547d\u4ee4")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"sh bin/start-waterdrop-spark.sh --master local[4] --deploy-mode client --config ./config/spark.conf\n")))}u.isMDXComponent=!0}}]);