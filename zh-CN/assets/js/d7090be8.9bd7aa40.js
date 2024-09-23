"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[280328],{15680:(r,e,a)=>{a.d(e,{xA:()=>s,yg:()=>m});var n=a(296540);function t(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function l(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,n)}return a}function y(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function i(r,e){if(null==r)return{};var a,n,t=function(r,e){if(null==r)return{};var a,n,t={},l=Object.keys(r);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(t[a]=r[a]);return t}(r,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(t[a]=r[a])}return t}var c=n.createContext({}),o=function(r){var e=n.useContext(c),a=e;return r&&(a="function"==typeof r?r(e):y(y({},e),r)),a},s=function(r){var e=o(r.components);return n.createElement(c.Provider,{value:e},r.children)},u="mdxType",f={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(r,e){var a=r.components,t=r.mdxType,l=r.originalType,c=r.parentName,s=i(r,["components","mdxType","originalType","parentName"]),u=o(a),p=t,m=u["".concat(c,".").concat(p)]||u[p]||f[p]||l;return a?n.createElement(m,y(y({ref:e},s),{},{components:a})):n.createElement(m,y({ref:e},s))}));function m(r,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof r||t){var l=a.length,y=new Array(l);y[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=r,i[u]="string"==typeof r?r:t,y[1]=i;for(var o=2;o<l;o++)y[o]=a[o];return n.createElement.apply(null,y)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},380268:(r,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>y,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(58168),t=(a(296540),a(15680));const l={title:"ARRAY_FILTER",language:"zh-CN"},y=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-filter",id:"sql-manual/sql-functions/array-functions/array-filter",title:"ARRAY_FILTER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-filter.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-filter",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-filter",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_FILTER",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_MAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-map"},next:{title:"ARRAY_AVG",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-avg"}},c={},o=[{value:"array_filter",id:"array_filter",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:o},u="wrapper";function f(r){let{components:e,...a}=r;return(0,t.yg)(u,(0,n.A)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_filter"},"array_filter"),(0,t.yg)("p",null,"array_filter(lambda,array)"),(0,t.yg)("p",null,"array array_filter(array arr, array_bool filter_column)"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<T> array_filter(lambda, ARRAY<T> arr)\nARRAY<T> array_filter(ARRAY<T> arr, ARRAY<Bool> filter_column)\n")),(0,t.yg)("p",null,"\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u8ba1\u7b97\u7b5b\u9009\u53e6\u5916\u7684\u8f93\u5165\u53c2\u6570 ARRAY \u5217\u7684\u6570\u636e\u3002\n\u5e76\u8fc7\u6ee4\u6389\u5728\u7ed3\u679c\u4e2d 0 \u548c NULL \u7684\u503c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_filter(x->x>0, array1);\narray_filter(x->(x+2)=10, array1);\narray_filter(x->(abs(x)-2)>0, array1);\narray_filter(c_array,[0,1,0]);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mysql [test]>select c_array,array_filter(c_array,[0,1,0]) from array_test;\n+-----------------+----------------------------------------------------+\n| c_array         | array_filter(`c_array`, ARRAY(FALSE, TRUE, FALSE)) |\n+-----------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [2]                                                |\n| [6, 7, 8]       | [7]                                                |\n| []              | []                                                 |\n| NULL            | NULL                                               |\n+-----------------+----------------------------------------------------+\n\nmysql [test]>select array_filter(x->(x > 1),[1,2,3,0,null]);\n+----------------------------------------------------------------------------------------------+\n| array_filter(ARRAY(1, 2, 3, 0, NULL), array_map([x] -> (x(0) > 1), ARRAY(1, 2, 3, 0, NULL))) |\n+----------------------------------------------------------------------------------------------+\n| [2, 3]                                                                                       |\n+----------------------------------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->x>0,c_array2) from array_test2;\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> x(0) > 0, `c_array2`)) |\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [10, 20, 80]                                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [10, 12, 13]                                                     |\n|    3 | [1]             | [-100]                  | []                                                               |\n|    4 | NULL            | NULL                    | NULL                                                             |\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select *, array_filter(x->x%2=0,c_array2) from array_test2;\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> x(0) % 2 = 0, `c_array2`)) |\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [10, 20, -40, 80, -100]                                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [10, 12]                                                             |\n|    3 | [1]             | [-100]                  | [-100]                                                               |\n|    4 | NULL            | NULL                    | NULL                                                                 |\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->(x*(-10)>0),c_array2) from array_test2;\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> (x(0) * (-10) > 0), `c_array2`)) |\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [-40, -100]                                                                |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | []                                                                         |\n|    3 | [1]             | [-100]                  | [-100]                                                                     |\n|    4 | NULL            | NULL                    | NULL                                                                       |\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->x>0, array_map((x,y)->(x>y), c_array1,c_array2)) as res from array_test2;\n+------+-----------------+-------------------------+--------+\n| id   | c_array1        | c_array2                | res    |\n+------+-----------------+-------------------------+--------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 1] |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | []     |\n|    3 | [1]             | [-100]                  | [1]    |\n|    4 | NULL            | NULL                    | NULL   |\n+------+-----------------+-------------------------+--------+\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,FILTER,ARRAY_FILTER"))}f.isMDXComponent=!0}}]);