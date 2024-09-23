"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[511729],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>u});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(a),y=r,u=g["".concat(i,".").concat(y)]||g[y]||m[y]||o;return a?t.createElement(u,p(p({ref:n},d),{},{components:a})):t.createElement(u,p({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[g]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},735982:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(58168),r=(a(296540),a(15680));const o={title:"Node Action",language:"zh-CN"},p=void 0,l={unversionedId:"admin-manual/open-api/fe-http/node-action",id:"admin-manual/open-api/fe-http/node-action",title:"Node Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/node-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/node-action",permalink:"/zh-CN/docs/dev/admin-manual/open-api/fe-http/node-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Node Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Cluster Action",permalink:"/zh-CN/docs/dev/admin-manual/open-api/fe-http/cluster-action"},next:{title:"Query Profile Action",permalink:"/zh-CN/docs/dev/admin-manual/open-api/fe-http/query-profile-action"}},i={},s=[{value:"Request",id:"request",level:2},{value:"\u83b7\u53d6 fe, be, broker \u8282\u70b9\u4fe1\u606f",id:"\u83b7\u53d6-fe-be-broker-\u8282\u70b9\u4fe1\u606f",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f",id:"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f",level:2},{value:"Description",id:"description-1",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u503c",id:"\u4fee\u6539\u914d\u7f6e\u503c",level:2},{value:"Description",id:"description-2",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"\u64cd\u4f5c be \u8282\u70b9",id:"\u64cd\u4f5c-be-\u8282\u70b9",level:2},{value:"Description",id:"description-3",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-2",level:3},{value:"\u64cd\u4f5c fe \u8282\u70b9",id:"\u64cd\u4f5c-fe-\u8282\u70b9",level:2},{value:"Description",id:"description-4",level:3},{value:"Request body",id:"request-body-3",level:3},{value:"Response",id:"response-4",level:3},{value:"Examples",id:"examples-3",level:3}],d={toc:s},g="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(g,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/frontends")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/backends")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/brokers")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/fe")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/be")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/be")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/fe")),(0,r.yg)("h2",{id:"\u83b7\u53d6-fe-be-broker-\u8282\u70b9\u4fe1\u606f"},"\u83b7\u53d6 fe, be, broker \u8282\u70b9\u4fe1\u606f"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/frontends")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/backends")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/brokers")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u83b7\u53d6\u96c6\u7fa4\u83b7\u53d6 fe, be, broker \u8282\u70b9\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'frontends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "EditLogPort",\n            "HttpPort",\n            "QueryPort",\n            "RpcPort",\n            "ArrowFlightSqlPort",\n            "Role",\n            "IsMaster",\n            "ClusterId",\n            "Join",\n            "Alive",\n            "ReplayedJournalId",\n            "LastHeartbeat",\n            "IsHelper",\n            "ErrMsg",\n            "Version"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'backends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "BackendId",\n            "Cluster",\n            "IP",\n            "HostName",\n            "HeartbeatPort",\n            "BePort",\n            "HttpPort",\n            "BrpcPort",\n            "LastStartTime",\n            "LastHeartbeat",\n            "Alive",\n            "SystemDecommissioned",\n            "ClusterDecommissioned",\n            "TabletNum",\n            "DataUsedCapacity",\n            "AvailCapacity",\n            "TotalCapacity",\n            "UsedPct",\n            "MaxDiskUsedPct",\n            "ErrMsg",\n            "Version",\n            "Status"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'brokers:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "Port",\n            "Alive",\n            "LastStartTime",\n            "LastUpdateTime",\n            "ErrMsg"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("h2",{id:"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f"},"\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u4fe1\u606f"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.yg)("h3",{id:"description-1"},"Description"),(0,r.yg)("p",null,"configuration_name \u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u9879\u540d\u79f0\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","node_list \u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u5217\u8868\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","configuration_info \u7528\u4e8e\u83b7\u53d6\u8282\u70b9\u914d\u7f6e\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),(0,r.yg)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list"),(0,r.yg)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"type\n\u503c\u4e3a fe \u6216 be\uff0c\u7528\u4e8e\u6307\u5b9a\u83b7\u53d6 fe \u7684\u914d\u7f6e\u4fe1\u606f\u6216 be \u7684\u914d\u7f6e\u4fe1\u606f\u3002")),(0,r.yg)("h3",{id:"request-body"},"Request body"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),(0,r.yg)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list"),(0,r.yg)("br",{parentName:"p"}),"\n","\u65e0"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "conf_name": [\n        ""\n    ],\n    "node": [\n        ""\n    ]\n}\n\n\u82e5\u4e0d\u5e26body\uff0cbody\u4e2d\u7684\u53c2\u6570\u90fd\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002  \nconf_name \u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u54ea\u4e9b\u914d\u7f6e\u9879\u7684\u4fe1\u606f\uff0c \u9ed8\u8ba4\u8fd4\u56de\u6240\u6709\u914d\u7f6e\u9879\u4fe1\u606f\uff1b\nnode \u7528\u4e8e\u6307\u5b9a\u8fd4\u56de\u54ea\u4e9b\u8282\u70b9\u7684\u914d\u7f6e\u9879\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u5168\u90e8fe\u8282\u70b9\u6216be\u8282\u70b9\u914d\u7f6e\u9879\u4fe1\u606f\u3002\n')),(0,r.yg)("h3",{id:"response-1"},"Response"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend":[\n            ""\n        ],\n        "frontend":[\n            ""\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")," "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend": [\n            ""\n        ],\n        "frontend": [\n            ""\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info?type=fe")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "\u914d\u7f6e\u9879",\n            "\u8282\u70b9",\n            "\u8282\u70b9\u7c7b\u578b",\n            "\u914d\u7f6e\u503c\u7c7b\u578b",\n            "MasterOnly",\n            "\u914d\u7f6e\u503c",\n            "\u53ef\u4fee\u6539"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info?type=be")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "\u914d\u7f6e\u9879",\n            "\u8282\u70b9",\n            "\u8282\u70b9\u7c7b\u578b",\n            "\u914d\u7f6e\u503c\u7c7b\u578b",\n            "\u914d\u7f6e\u503c",\n            "\u53ef\u4fee\u6539"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6 fe agent_task_resend_wait_time_ms \u914d\u7f6e\u9879\u4fe1\u606f\uff1a"),(0,r.yg)("p",{parentName:"li"},"POST /rest/v2/manager/node/configuration_info?type=fe",(0,r.yg)("br",{parentName:"p"}),"\n","body:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "conf_name":[\n        "agent_task_resend_wait_time_ms"\n    ]\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "\u914d\u7f6e\u9879",\n            "\u8282\u70b9",\n            "\u8282\u70b9\u7c7b\u578b",\n            "\u914d\u7f6e\u503c\u7c7b\u578b",\n            "MasterOnly",\n            "\u914d\u7f6e\u503c",\n            "\u53ef\u4fee\u6539"\n        ],\n        "rows": [\n            [\n                "agent_task_resend_wait_time_ms",\n                "127.0.0.1:8030",\n                "FE",\n                "long",\n                "true",\n                "50000",\n                "true"\n            ]\n        ]\n    },\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u503c"},"\u4fee\u6539\u914d\u7f6e\u503c"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/fe")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/be")),(0,r.yg)("h3",{id:"description-2"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u4fee\u6539 fe \u6216 be \u8282\u70b9\u914d\u7f6e\u503c"),(0,r.yg)("h3",{id:"request-body-1"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "config_name":{\n        "node":[\n            ""\n        ],\n        "value":"",\n        "persist":\n    }\n}\n\nconfig_name\u4e3a\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\uff1b  \nnode\u4e3a\u5173\u952e\u5b57\uff0c\u8868\u793a\u8981\u4fee\u6539\u7684\u8282\u70b9\u5217\u8868;  \nvalue\u4e3a\u914d\u7f6e\u7684\u503c\uff1b  \npersist\u4e3a true \u8868\u793a\u6c38\u4e45\u4fee\u6539\uff0c false \u8868\u793a\u4e34\u65f6\u4fee\u6539\u3002\u6c38\u4e45\u4fee\u6539\u91cd\u542f\u540e\u80fd\u751f\u6548\uff0c \u4e34\u65f6\u4fee\u6539\u91cd\u542f\u540e\u5931\u6548\u3002\n')),(0,r.yg)("h3",{id:"response-2"},"Response"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "",\n    "code": 0,\n    "data": {\n        "failed":[\n            {\n                "config_name":"name",\n                "value"="",\n                "node":"",\n                "err_info":""\n            }\n        ]\n    },\n    "count": 0\n}\n\nfailed \u8868\u793a\u4fee\u6539\u5931\u8d25\u7684\u914d\u7f6e\u4fe1\u606f\u3002\n')),(0,r.yg)("h3",{id:"examples-1"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539 fe 127.0.0.1:8030 \u8282\u70b9\u4e2d agent_task_resend_wait_time_ms \u548c alter_table_timeout_second \u914d\u7f6e\u503c\uff1a"),(0,r.yg)("p",{parentName:"li"},"POST /rest/v2/manager/node/set_config/fe\nbody:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "agent_task_resend_wait_time_ms":{\n        "node":[\n            "127.0.0.1:8030"\n        ],\n        "value":"10000",\n        "persist":"true"\n    },\n    "alter_table_timeout_second":{\n        "node":[\n            "127.0.0.1:8030"\n        ],\n        "value":"true",\n        "persist":"true"\n    }\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "failed": [\n            {\n                "config_name": "alter_table_timeout_second",\n                "node": "10.81.85.89:8837",\n                "err_info": "Unsupported configuration value type.",\n                "value": "true"\n            }\n        ]\n    },\n    "count": 0\n}\n\nagent_task_resend_wait_time_ms \u914d\u7f6e\u503c\u4fee\u6539\u6210\u529f\uff0calter_table_timeout_second \u4fee\u6539\u5931\u8d25\u3002\n')))),(0,r.yg)("h2",{id:"\u64cd\u4f5c-be-\u8282\u70b9"},"\u64cd\u4f5c be \u8282\u70b9"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/be")),(0,r.yg)("h3",{id:"description-3"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u6dfb\u52a0/\u5220\u9664/\u4e0b\u7ebf be \u8282\u70b9"),(0,r.yg)("p",null,"action\uff1aADD/DROP/DECOMMISSION"),(0,r.yg)("h3",{id:"request-body-2"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "hostPorts": ["127.0.0.1:9050"],\n    "properties": {\n        "tag.location": "test"\n    }\n}\n\nhostPorts \u9700\u8981\u64cd\u4f5c\u7684\u4e00\u7ec4 be \u8282\u70b9\u5730\u5740 ip:heartbeat_port\nproperties \u6dfb\u52a0\u8282\u70b9\u65f6\u4f20\u5165\u7684\u914d\u7f6e\uff0c\u76ee\u524d\u53ea\u7528\u4e8e\u914d\u7f6e tag, \u4e0d\u4f20\u4f7f\u7528\u9ed8\u8ba4 tag\n')),(0,r.yg)("h3",{id:"response-3"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "Error",\n    "code": 1,\n    "data": "errCode = 2, detailMessage = Same backend already exists[127.0.0.1:9050]",\n    "count": 0\n}\n\nmsg Success/Error\ncode 0/1\ndata ""/\u62a5\u9519\u4fe1\u606f\n')),(0,r.yg)("h3",{id:"examples-2"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6dfb\u52a0 be \u8282\u70b9"),(0,r.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/ADD/be\nRequest body"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664 be \u8282\u70b9"),(0,r.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/DROP/be\nRequest body"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e0b\u7ebf be \u8282\u70b9"),(0,r.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/DECOMMISSION/be\nRequest body"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"\u64cd\u4f5c-fe-\u8282\u70b9"},"\u64cd\u4f5c fe \u8282\u70b9"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/fe")),(0,r.yg)("h3",{id:"description-4"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u6dfb\u52a0/\u5220\u9664 fe \u8282\u70b9"),(0,r.yg)("p",null,"action\uff1aADD/DROP"),(0,r.yg)("h3",{id:"request-body-3"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n\nrole FOLLOWER/OBSERVER\nhostPort \u9700\u8981\u64cd\u4f5c\u7684 fe \u8282\u70b9\u5730\u5740 ip:edit_log_port\n')),(0,r.yg)("h3",{id:"response-4"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "Error",\n    "code": 1,\n    "data": "errCode = 2, detailMessage = frontend already exists name: 127.0.0.1:9030_1670495889415, role: FOLLOWER, 127.0.0.1:9030",\n    "count": 0\n}\n\nmsg Success/Error\ncode 0/1\ndata ""/\u62a5\u9519\u4fe1\u606f\n')),(0,r.yg)("h3",{id:"examples-3"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6dfb\u52a0 FOLLOWER \u8282\u70b9"),(0,r.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/ADD/fe\nRequest body"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5220\u9664 FOLLOWER \u8282\u70b9"),(0,r.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/DROP/fe\nRequest body"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n')),(0,r.yg)("p",{parentName:"li"},"Response"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);