"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[118281],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,y=c["".concat(i,".").concat(d)]||c[d]||p[d]||l;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},571370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW STORAGE VAULTS",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-VAULTS",id:"sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-VAULTS",title:"SHOW STORAGE VAULTS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-VAULTS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-VAULTS",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-VAULTS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW STORAGE VAULTS",language:"en"}},i={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Keywords",id:"keywords",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The SHOW STORAGE VAULTS command is used to display information about all storage vaults configured in the system. Storage vaults are used to manage external storage locations for data."),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    SHOW STORAGE VAULTS\n")),(0,r.yg)("h2",{id:"return-values"},"Return Values"),(0,r.yg)("p",null,"This command returns a result set with the following columns:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"StorageVaultName"),": The name of the storage vault."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"StorageVaultId"),": The id of the storage vault."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Properties"),": A JSON string containing the configuration properties of the vault."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"IsDefault"),": Indicates whether this vault is set as the default (TRUE or FALSE).")),(0,r.yg)("h2",{id:"related-commands"},"Related Commands"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../Data-Definition-Statements/CREATE-STORAGE-VAULT.md"},"CREATE STORAGE VAULT")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT"},"GRANT")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE"},"REVOKE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../Data-Definition-Statements/SET-DEFAULT-STORAGE-VAULT.md"},"SET DEFAULT STORAGE VAULT"))),(0,r.yg)("h2",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, STORAGE VAULTS\n")))}p.isMDXComponent=!0}}]);