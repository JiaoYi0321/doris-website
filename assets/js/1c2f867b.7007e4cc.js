"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[579794],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),u=r,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},750419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const i={title:"DBeaver",language:"en"},o=void 0,l={unversionedId:"ecosystem/bi/dbeaver",id:"version-3.0/ecosystem/bi/dbeaver",title:"DBeaver",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/bi/dbeaver.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/dbeaver",permalink:"/docs/3.0/ecosystem/bi/dbeaver",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DBeaver",language:"en"},sidebar:"ecosystem",previous:{title:"Apache Superset",permalink:"/docs/3.0/ecosystem/bi/apache-superset"},next:{title:"DataGrip",permalink:"/docs/3.0/ecosystem/bi/datagrip"}},s={},c=[{value:"introduce",id:"introduce",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Add data source",id:"add-data-source",level:2},{value:"Function support",id:"function-support",level:2}],p={toc:c},g="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(g,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduce"},"introduce"),(0,r.yg)("p",null,"DBeaver is a cross-platform database tool for developers, database administrators, analysts and anyone who works with data."),(0,r.yg)("p",null,"Apache Doris is highly compatible with the MySQL protocol. You can use DBeaver's MySQL driver to connect to Apache Doris and query data in the internal catalog and external catalog."),(0,r.yg)("h2",{id:"preconditions"},"Preconditions"),(0,r.yg)("p",null,"Dbeaver installed\nYou can visit ",(0,r.yg)("a",{parentName:"p",href:"https://dbeaver.io"},"https://dbeaver.io")," to download and install DBeaver"),(0,r.yg)("h2",{id:"add-data-source"},"Add data source"),(0,r.yg)("admonition",{title:"Note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Currently verified using DBeaver version 24.0.0")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start DBeaver")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click the plus sign (",(0,r.yg)("strong",{parentName:"p"},"+"),") icon in the upper left corner of the DBeaver window, or select ",(0,r.yg)("strong",{parentName:"p"},"Database > New Database Connection")," in the menu bar to open the ",(0,r.yg)("strong",{parentName:"p"},"Connect to a database")," interface."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"add connection 1",src:a(988520).A,width:"1280",height:"756"})),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"add connection 2",src:a(273795).A,width:"1280",height:"585"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the MySQL driver"),(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"Select your database")," window, select ",(0,r.yg)("strong",{parentName:"p"},"MySQL"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"chose driver",src:a(956218).A,width:"1280",height:"1268"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure Doris connection"),(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"main")," tab of the ",(0,r.yg)("strong",{parentName:"p"},"Connection Settings")," window, configure the following connection information:"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Server Host: FE host IP address of the Doris cluster.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Port: FE query port of Doris cluster, such as 9030.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Database: The target database in the Doris cluster.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Username: The username used to log in to the Doris cluster, such as admin.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Password: User password used to log in to the Doris cluster."),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Database can be used to distinguish between internal catalog and external catalog. If only the Database name is filled in, the current data source will be connected to the internal catalog by default. If the format is catalog.db, the current data source will be connected to the catalog filled in Database by default, as shown in DBeaver The database tables are also database tables in the connected catalog, so you can use DBeaver's MySQL driver to create multiple Doris data sources to manage different Catalogs in Doris.")),(0,r.yg)("admonition",{parentName:"li",title:"Note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Managing the external catalog connected to Doris through the Database form of catalog.db requires Doris version 2.1.0 and above."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"internal catalog\n",(0,r.yg)("img",{alt:"connect internal catalog",src:a(712725).A,width:"1280",height:"1248"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"external catalog\n",(0,r.yg)("img",{alt:"connect external catalog",src:a(343628).A,width:"1280",height:"1248"})))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Test data source connection"),(0,r.yg)("p",{parentName:"li"},"After filling in the connection information, click Test Connection in the lower left corner to verify the accuracy of the database connection information. DBeaver returns to the following dialog box to confirm the configuration of the connection information. Click OK to confirm that the configured connection information is correct. Then click Finish in the lower right corner to complete the connection configuration.\n",(0,r.yg)("img",{alt:"test connection",src:a(263687).A,width:"1280",height:"1248"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connect to database"),(0,r.yg)("p",{parentName:"li"},"After the database connection is established, you can see the created data source connection in the database connection navigation on the left, and you can connect and manage the database through DBeaver.\n",(0,r.yg)("img",{alt:"create connection",src:a(545374).A,width:"1280",height:"756"})))),(0,r.yg)("h2",{id:"function-support"},"Function support"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"fully support"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Visual viewing class",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Databases",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Tables"),(0,r.yg)("li",{parentName:"ul"},"Views"))),(0,r.yg)("li",{parentName:"ul"},"Users",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Administer"))),(0,r.yg)("li",{parentName:"ul"},"Session Manager"),(0,r.yg)("li",{parentName:"ul"},"System Info",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Session Variables"),(0,r.yg)("li",{parentName:"ul"},"Global Variables"),(0,r.yg)("li",{parentName:"ul"},"Engines"),(0,r.yg)("li",{parentName:"ul"},"Charsets"),(0,r.yg)("li",{parentName:"ul"},"User Priviages"),(0,r.yg)("li",{parentName:"ul"},"Plugin"))),(0,r.yg)("li",{parentName:"ul"},"Operation class",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"SQL editor"),(0,r.yg)("li",{parentName:"ul"},"SQL console"))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"basic support"),(0,r.yg)("p",{parentName:"li"},"  The basic support part means that you can click to view without error, but due to protocol compatibility issues, there may be incomplete display."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Visual viewing class",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"dash board"),(0,r.yg)("li",{parentName:"ul"},"Users/user/properties"),(0,r.yg)("li",{parentName:"ul"},"Session Status"),(0,r.yg)("li",{parentName:"ul"},"Global Status"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"not support"),(0,r.yg)("p",{parentName:"li"},"The unsupported part means that when using DBeaver to manage Doris, errors may be reported when performing certain visual operations, or some visual operations are not verified.\nSuch as visual creation of database tables, schema change, addition, deletion and modification of data, etc."))))}d.isMDXComponent=!0},988520:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver1-08e265526a12a1b560d84b179eac1238.png"},273795:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver2-a7f26e8015598024cb730df1f3f341d2.png"},956218:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver3-599f75b71d72b8454f6641c2e575f96c.png"},712725:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver4-9b79f13badba5713605d6647f4648ed9.png"},343628:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver5-f92fa21b93bffc3ce13dfb830da8dd13.png"},263687:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver6-fac1178b7798f028a57c79991dd9a036.png"},545374:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dbeaver7-68de28fe0f0fe59c23972aa3bc39c354.png"}}]);