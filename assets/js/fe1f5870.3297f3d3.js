"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[278027],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},254281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const i={title:"RESTORE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",title:"RESTORE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"RESTORE",language:"en"},sidebar:"docs",previous:{title:"CANCEL-BACKUP",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP"},next:{title:"CANCEL-RESTORE",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE"}},l={},p=[{value:"RESTORE",id:"restore",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"restore"},"RESTORE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"RESTORE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to restore the data backed up by the BACKUP command to the specified database. This command is an asynchronous operation. After the submission is successful, you need to check the progress through the SHOW RESTORE command. Restoring tables of type OLAP is only supported."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT [db_name].{snapshot_name}\nFROM `repository_name`\n[ON|EXCLUDE] (\n    `table_name` [PARTITION (`p1`, ...)] [AS `tbl_alias`],\n    ...\n)\nPROPERTIES ("key"="value", ...);\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There can only be one executing BACKUP or RESTORE task under the same database."),(0,r.yg)("li",{parentName:"ul"},"The tables and partitions that need to be restored are identified in the ON clause. If no partition is specified, all partitions of the table are restored by default. The specified table and partition must already exist in the warehouse backup."),(0,r.yg)("li",{parentName:"ul"},"Tables and partitions that do not require recovery are identified in the EXCLUDE clause. All partitions of all other tables in the warehouse except the specified table or partition will be restored."),(0,r.yg)("li",{parentName:"ul"},"The table name backed up in the warehouse can be restored to a new table through the AS statement. But the new table name cannot already exist in the database. The partition name cannot be modified."),(0,r.yg)("li",{parentName:"ul"},"You can restore the backed up tables in the warehouse to replace the existing tables of the same name in the database, but you must ensure that the table structures of the two tables are exactly the same. The table structure includes: table name, column, partition, Rollup, etc."),(0,r.yg)("li",{parentName:"ul"},"You can specify some partitions of the recovery table, and the system will check whether the partition Range or List can match."),(0,r.yg)("li",{parentName:"ul"},"PROPERTIES currently supports the following properties:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},'"backup_timestamp" = "2018-05-04-16-45-08": Specifies which time version of the corresponding backup to restore, required. This information can be obtained with the ',(0,r.yg)("inlineCode",{parentName:"li"},"SHOW SNAPSHOT ON repo;")," statement."),(0,r.yg)("li",{parentName:"ul"},'"replication_num" = "3": Specifies the number of replicas for the restored table or partition. Default is 3. If restoring an existing table or partition, the number of replicas must be the same as the number of replicas of the existing table or partition. At the same time, there must be enough hosts to accommodate multiple replicas.'),(0,r.yg)("li",{parentName:"ul"},'"reserve_replica" = "true": Default is false. When this property is true, the replication_num property is ignored and the restored table or partition will have the same number of replication as before the backup. Supports multiple tables or multiple partitions within a table with different replication number.'),(0,r.yg)("li",{parentName:"ul"},"\"reserve_dynamic_partition_enable\" = \"true\": Default is false. When this property is true, the restored table will have the same value of 'dynamic_partition_enable' as before the backup. if this property is not true, the restored table will set 'dynamic_partition_enable=false'."),(0,r.yg)("li",{parentName:"ul"},'"timeout" = "3600": The task timeout period, the default is one day. in seconds.'),(0,r.yg)("li",{parentName:"ul"},'"meta_version" = 40: Use the specified meta_version to read the previously backed up metadata. Note that this parameter is used as a temporary solution and is only used to restore the data backed up by the old version of Doris. The latest version of the backup data already contains the meta version, no need to specify it.'),(0,r.yg)("li",{parentName:"ul"},'"clean_tables" : Indicates whether to clean up tables that do not belong to the restore target. For example, if the target db before the restore has tables that are not present in the snapshot, specifying ',(0,r.yg)("inlineCode",{parentName:"li"},"clean_tables")," can drop these extra tables and move them into the recycle bin during the restore.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This feature is supported since the Apache Doris 1.2.6  version"))),(0,r.yg)("li",{parentName:"ul"},'"clean_partitions": Indicates whether to clean up partitions that do not belong to the restore target. For example, if the target table before the restore has partitions that are not present in the snapshot, specifying ',(0,r.yg)("inlineCode",{parentName:"li"},"clean_partitions")," can drop these extra partitions and move them into the recycle bin during the restore.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This feature is supported since the Apache Doris 1.2.6  version")))))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Restore the table backup_tbl in backup snapshot_1 from example_repo to database example_db1, the time version is "2018-05-04-16-45-08". Revert to 1 copy:')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-16-45-08",\n    "replication_num" = "1"\n);\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},'Restore partitions p1, p2 of table backup_tbl in backup snapshot_2 from example_repo, and table backup_tbl2 to database example_db1, rename it to new_tbl, and the time version is "2018-05-04-17-11-01". The default reverts to 3 replicas:')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-17-11-01"\n);\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'Restore all tables except for table backup_tbl in backup snapshot_3 from example_repo to database example_db1, the time version is "2018-05-04-18-12-18".')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'RESTORE SNAPSHOT example_db1.`snapshot_3`\nFROM `example_repo`\nEXCLUDE ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-18-12-18"\n);\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"RESTORE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"There can only be one ongoing recovery operation under the same database.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The table backed up in the warehouse can be restored and replaced with the existing table of the same name in the database, but the table structure of the two tables must be completely consistent. The table structure includes: table name, columns, partitions, materialized views, and so on.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When specifying a partial partition of the recovery table, the system will check whether the partition range can match.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Efficiency of recovery operations:"),(0,r.yg)("p",{parentName:"li"},"In the case of the same cluster size, the time-consuming of the restore operation is basically the same as the time-consuming of the backup operation. If you want to speed up the recovery operation, you can first restore only one copy by setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"replication_num")," parameter, and then adjust the number of copies by ",(0,r.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY"},"ALTER TABLE PROPERTY"),", complete the copy."))))}m.isMDXComponent=!0}}]);