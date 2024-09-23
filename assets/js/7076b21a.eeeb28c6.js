"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[319175],{15680:(n,e,r)=>{r.d(e,{xA:()=>c,yg:()=>p});var t=r(296540);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function u(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},u=Object.keys(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(t=0;t<u.length;t++)r=u[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var o=t.createContext({}),d=function(n){var e=t.useContext(o),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},c=function(n){var e=d(n.components);return t.createElement(o.Provider,{value:e},n.children)},f="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,u=n.originalType,o=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),f=d(r),m=i,p=f["".concat(o,".").concat(m)]||f[m]||s[m]||u;return r?t.createElement(p,a(a({ref:e},c),{},{components:r})):t.createElement(p,a({ref:e},c))}));function p(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var u=r.length,a=new Array(u);a[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l[f]="string"==typeof n?n:i,a[1]=l;for(var d=2;d<u;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},849463:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>s,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var t=r(58168),i=(r(296540),r(15680));const u={title:"RUNNING_DIFFERENCE",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/running-difference",id:"version-3.0/sql-manual/sql-functions/numeric-functions/running-difference",title:"RUNNING_DIFFERENCE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/numeric-functions/running-difference.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/running-difference",permalink:"/docs/3.0/sql-manual/sql-functions/numeric-functions/running-difference",draft:!1,tags:[],version:"3.0",frontMatter:{title:"RUNNING_DIFFERENCE",language:"en"},sidebar:"docs",previous:{title:"MOD",permalink:"/docs/3.0/sql-manual/sql-functions/numeric-functions/mod"},next:{title:"uuid_numeric",permalink:"/docs/3.0/sql-manual/sql-functions/numeric-functions/uuid-numeric"}},o={},d=[{value:"running_difference",id:"running_difference",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},f="wrapper";function s(n){let{components:e,...r}=n;return(0,i.yg)(f,(0,t.A)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"running_difference"},"running_difference"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"T running_difference(T x)")),(0,i.yg)("p",null,"Calculates the difference between successive row values \u200b\u200bin the data block.\nThe result of the function depends on the affected data blocks and the order of data in the block."),(0,i.yg)("p",null,"The rows order used during the calculation of running_difference can differ from the order of rows returned to the user. The function will be deprecated in the future. Please use window function instead, below is the example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- running difference(x)\nSELECT running_difference(x) FROM t ORDER BY k;\n\n-- window function\nSELECT x - lag(x, 1, 0) OVER (ORDER BY k) FROM t;\n")),(0,i.yg)("h4",{id:"arguments"},"Arguments"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"x")," - A list of data.TINYINT,SMALLINT,INT,BIGINT,LARGEINT,FLOAT,DOUBLE,DATE,DATETIME,DECIMAL"),(0,i.yg)("h5",{id:"returned-value"},"Returned value"),(0,i.yg)("p",null,"Returns 0 for the first row and the difference from the previous row for each subsequent row"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS running_difference_test;\n\nCREATE TABLE running_difference_test (\n    `id` int NOT NULL COMMENT 'id',\n    `day` date COMMENT 'day', \n    `time_val` datetime COMMENT 'time_val',\n    `doublenum` double NULL COMMENT 'doublenum'\n)\nDUPLICATE KEY(id) \nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n                                                  \nINSERT into running_difference_test (id, day, time_val,doublenum) values ('1', '2022-10-28', '2022-03-12 10:41:00', null),\n                                                   ('2','2022-10-27', '2022-03-12 10:41:02', 2.6),\n                                                   ('3','2022-10-28', '2022-03-12 10:41:03', 2.5),\n                                                   ('4','2022-9-29', '2022-03-12 10:41:03', null),\n                                                   ('5','2022-10-31', '2022-03-12 10:42:01', 3.3),\n                                                   ('6', '2022-11-08', '2022-03-12 11:05:04', 4.7); \n\nSELECT * from running_difference_test ORDER BY id ASC;\n\n+------+------------+---------------------+-----------+\n| id   | day        | time_val            | doublenum |\n+------+------------+---------------------+-----------+\n|    1 | 2022-10-28 | 2022-03-12 10:41:00 |      NULL |\n|    2 | 2022-10-27 | 2022-03-12 10:41:02 |       2.6 |\n|    3 | 2022-10-28 | 2022-03-12 10:41:03 |       2.5 |\n|    4 | 2022-09-29 | 2022-03-12 10:41:03 |      NULL |\n|    5 | 2022-10-31 | 2022-03-12 10:42:01 |       3.3 |\n|    6 | 2022-11-08 | 2022-03-12 11:05:04 |       4.7 |\n+------+------------+---------------------+-----------+\n\nSELECT\n    id,\n    running_difference(id) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------+-------+\n| id   | delta |\n+------+-------+\n|    1 |     0 |\n|    2 |     1 |\n|    3 |     1 |\n|    4 |     1 |\n|    5 |     1 |\n|    6 |     1 |\n+------+-------+\n\nSELECT\n    day,\n    running_difference(day) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------------+-------+\n| day        | delta |\n+------------+-------+\n| 2022-10-28 |     0 |\n| 2022-10-27 |    -1 |\n| 2022-10-28 |     1 |\n| 2022-09-29 |   -29 |\n| 2022-10-31 |    32 |\n| 2022-11-08 |     8 |\n+------------+-------+\n\nSELECT\n    time_val,\n    running_difference(time_val) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+---------------------+-------+\n| time_val            | delta |\n+---------------------+-------+\n| 2022-03-12 10:41:00 |     0 |\n| 2022-03-12 10:41:02 |     2 |\n| 2022-03-12 10:41:03 |     1 |\n| 2022-03-12 10:41:03 |     0 |\n| 2022-03-12 10:42:01 |    58 |\n| 2022-03-12 11:05:04 |  1383 |\n+---------------------+-------+\n\nSELECT\n    doublenum,\n    running_difference(doublenum) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+-----------+----------------------+\n| doublenum | delta                |\n+-----------+----------------------+\n|      NULL |                 NULL |\n|       2.6 |                 NULL |\n|       2.5 | -0.10000000000000009 |\n|      NULL |                 NULL |\n|       3.3 |                 NULL |\n|       4.7 |   1.4000000000000004 |\n+-----------+----------------------+\n\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"running_difference"))}s.isMDXComponent=!0}}]);