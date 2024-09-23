"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[594257],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>g});var r=n(296540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=o(n),d=s,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(g,l(l({ref:t},i),{},{components:n})):r.createElement(g,l({ref:t},i))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:s,l[1]=u;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=n(58168),s=(n(296540),n(15680));const a={title:"Managing Compute Cluster",language:"en"},l=void 0,u={unversionedId:"compute-storage-decoupled/managing-compute-cluster",id:"version-3.0/compute-storage-decoupled/managing-compute-cluster",title:"Managing Compute Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/compute-storage-decoupled/managing-compute-cluster.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/managing-compute-cluster",permalink:"/docs/3.0/compute-storage-decoupled/managing-compute-cluster",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Managing Compute Cluster",language:"en"},sidebar:"docs",previous:{title:"Creating Cluster",permalink:"/docs/3.0/compute-storage-decoupled/creating-cluster"},next:{title:"File Cache",permalink:"/docs/3.0/compute-storage-decoupled/file-cache"}},c={},o=[{value:"Show all compute clusters",id:"show-all-compute-clusters",level:2},{value:"Grant compute cluster access privilege",id:"grant-compute-cluster-access-privilege",level:2},{value:"Revoke compute cluster access privilege",id:"revoke-compute-cluster-access-privilege",level:2},{value:"Set default compute cluster",id:"set-default-compute-cluster",level:2},{value:"Default compute cluster selection mechanism",id:"default-compute-cluster-selection-mechanism",level:2},{value:"Switch compute cluster",id:"switch-compute-cluster",level:2}],i={toc:o},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"In the compute-storage decoupled mode, users can organize one or more BE nodes into a compute cluster. This document introduces how to use the compute clusters. The main operations include:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Show all compute clusters"),(0,s.yg)("li",{parentName:"ul"},"Grant compute clusters to users"),(0,s.yg)("li",{parentName:"ul"},"Bind a compute cluster to user (",(0,s.yg)("inlineCode",{parentName:"li"},"default_cloud_cluster"),") for user-level isolation")),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},(0,s.yg)("inlineCode",{parentName:"p"},"cluster")," in this document refers to compute clusters.")),(0,s.yg)("h2",{id:"show-all-compute-clusters"},"Show all compute clusters"),(0,s.yg)("p",null,"Use the ",(0,s.yg)("inlineCode",{parentName:"p"},"show clusters")," command to check all compute clusters under the current instance."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"> mysql show clusters;\n+-------------------------------+------------+------------+\n| cluster                       | is_current | users      |\n+-------------------------------+------------+------------+\n| regression_test_cluster_name0 | FALSE      | root, jack |\n| regression_test_cluster_name5 | FALSE      |            |\n+-------------------------------+------------+------------+\n2 rows in set (0.01 sec)\n\nmysql SET PROPERTY 'default_cloud_cluster' = 'regression_test_cluster_name5';\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,s.yg)("h2",{id:"grant-compute-cluster-access-privilege"},"Grant compute cluster access privilege"),(0,s.yg)("p",null,"Use the MySQL Client to create a new user."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Syntax")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"GRANT USAGE_PRIV ON CLUSTER {cluster_name} TO {user}\n")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"// Use the root account to create a new Jack user in the MySQL Client.\n\nmysql CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\";\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql GRANT USAGE_PRIV ON CLUSTER regression_test_cluster_name0 TO jack;\nQuery OK, 0 rows affected (0.01 sec)\n\n// Log in to the MySQL Client via Jack.\n\nmysql use d1@regression_test_cluster_name0;\nDatabase changed\n\nmysql show grants for jack\\G\n*************************** 1. row ***************************\n UserIdentity: 'jack'@'%'\n     Password: Yes\n  GlobalPrivs: Admin_priv  (false)\n CatalogPrivs: NULL\nDatabasePrivs: internal.information_schema: Select_priv  (false)\n   TablePrivs: NULL\nResourcePrivs: NULL\n CloudCluster: regression_test_cluster_name0: Usage_priv  (false)\n   CloudStage: NULL\n1 row in set (0.00 sec)\n\nmysql select * from t1;\n+------+------+-------+\n| id   | name | score |\n+------+------+-------+\n|    1 | aaa  |    20 |\n|    2 | bbb  |   320 |\n|    3 | ccc  |    30 |\n|    4 | ddd  |   120 |\n|    5 | eee  |    30 |\n|    6 | fff  |    30 |\n|    7 | ggg  |    90 |\n|    8 | hhh  |    30 |\n+------+------+-------+\n8 rows in set (12.70 sec)\n\nmysql insert into t1 (id, name, score) values (8, \"hhh\", 30);\nQuery OK, 1 row affected (7.22 sec)\n{'label':'insert_6f40c1713baf4d61_9c33c0962c68ab07', 'status':'VISIBLE', 'txnId':'5462662627547136'}\n")),(0,s.yg)("p",null,"If you attempt to grant a Jack user the access privilege to a non-existent compute cluster, the system will not report an error. However, an error will be raised when the user attempts to execute the ",(0,s.yg)("inlineCode",{parentName:"p"},"use @cluster")," command."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql GRANT USAGE_PRIV ON CLUSTER not_exist_cluster TO jack;\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql show grants for jack\\G\n*************************** 1. row ***************************\n UserIdentity: 'jack'@'%'\n     Password: Yes\n  GlobalPrivs: Admin_priv  (false)\n CatalogPrivs: NULL\nDatabasePrivs: internal.information_schema: Select_priv  (false)\n   TablePrivs: NULL\nResourcePrivs: NULL\n CloudCluster: not_exist_cluster: Usage_priv  (false)\n   CloudStage: NULL\n1 row in set (0.00 sec)\n\nSwitch to the Jack account and execute use @not_exist_cluster, an error will be thrown.\n\nmysql use information_schema@not_exist_cluster;\nNo connection. Trying to reconnect...\nConnection id:    1\nCurrent database: *** NONE ***\n\nERROR 5091 (42000): Cluster not_exist_cluster not exist\n")),(0,s.yg)("h2",{id:"revoke-compute-cluster-access-privilege"},"Revoke compute cluster access privilege"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Syntax")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"REVOKE USAGE_PRIV ON CLUSTER {cluster_name} FROM {user}\n")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"// Use the root account to create a new Jack user in the MySQL Client.\nmysql REVOKE USAGE_PRIV ON CLUSTER regression_test_cluster_name0 FROM jack;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql show grants for jack\\G\n*************************** 1. row ***************************\n UserIdentity: 'jack'@'%'\n     Password: Yes\n  GlobalPrivs: Admin_priv  (false)\n CatalogPrivs: NULL\nDatabasePrivs: internal.information_schema: Select_priv  (false)\n   TablePrivs: NULL\nResourcePrivs: NULL\n CloudCluster: NULL\n   CloudStage: NULL\n1 row in set (0.01 sec)\n")),(0,s.yg)("h2",{id:"set-default-compute-cluster"},"Set default compute cluster"),(0,s.yg)("p",null,"Users can set a compute cluster as the default compute cluster."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Syntax")),(0,s.yg)("p",null,"Set the default compute cluster for the current user:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"SET PROPERTY 'default_cloud_cluster' = '{clusterName}';\n")),(0,s.yg)("p",null,"Set the default compute cluster for other users (requiring Admin privileges):"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"SET PROPERTY FOR {user} 'default_cloud_cluster' = '{clusterName}';\n")),(0,s.yg)("p",null,"Check the default compute cluster of the current user. The value of ",(0,s.yg)("inlineCode",{parentName:"p"},"default_cloud_cluster")," in the returned result will be the default compute cluster."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROPERTY;\n")),(0,s.yg)("p",null,"Check the default compute clusters of other users (requiring Admin privileges). The value of ",(0,s.yg)("inlineCode",{parentName:"p"},"default_cloud_cluster"),"in the returned result will be the default compute cluster."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PROPERTY FOR {user};\n")),(0,s.yg)("p",null,"Check all available compute clusters under the current instance:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW CLUSTERS;\n")),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("ul",{parentName:"admonition"},(0,s.yg)("li",{parentName:"ul"},"If the current user has Admin privileges, (e.g. ",(0,s.yg)("inlineCode",{parentName:"li"},"CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\""),"), then:",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"They can set the default compute cluster for themselves and other users;"),(0,s.yg)("li",{parentName:"ul"},"They can view the ",(0,s.yg)("inlineCode",{parentName:"li"},"PROPERTY")," for themselves and other users."))),(0,s.yg)("li",{parentName:"ul"},"If the current user does not have Admin privileges, (e.g. ",(0,s.yg)("inlineCode",{parentName:"li"},"CREATE USER jack1 IDENTIFIED BY '123456'"),"), then:",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"They can set the default compute cluster for themselves;"),(0,s.yg)("li",{parentName:"ul"},"They can view their own PROPERTY;"),(0,s.yg)("li",{parentName:"ul"},"They cannot view all compute clusters, as this operation requires the ",(0,s.yg)("inlineCode",{parentName:"li"},"GRANT ADMIN")," privilege."))),(0,s.yg)("li",{parentName:"ul"},"If a default compute cluster is not set for the current user, the system will trigger an error when the user executes data read/write operations. To solve this, the user can execute the ",(0,s.yg)("inlineCode",{parentName:"li"},"use @cluster")," command to specify the compute cluster for the current context, or use the ",(0,s.yg)("inlineCode",{parentName:"li"},"SET PROPERTY")," statement to set the default compute cluster."),(0,s.yg)("li",{parentName:"ul"},"If the current user has set a default compute cluster, but that cluster is later deleted, an error will also be triggered when executing data read/write operations. The user can execute the ",(0,s.yg)("inlineCode",{parentName:"li"},"use @cluster")," command to re-specify the compute cluster for the current context, or use the ",(0,s.yg)("inlineCode",{parentName:"li"},"SET PROPERTY")," statement to update the default compute cluster setting."))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"// Set the default compute cluster for the current user\nmysql SET PROPERTY 'default_cloud_cluster' = 'regression_test_cluster_name0';\nQuery OK, 0 rows affected (0.02 sec)\n\n// Show the default compute cluster of the current user\nmysql show PROPERTY;\n+------------------------+-------------------------------+\n| Key                    | Value                         |\n+------------------------+-------------------------------+\n| cpu_resource_limit     | -1                            |\n| default_cloud_cluster  | regression_test_cluster_name0 |\n| exec_mem_limit         | -1                            |\n| load_mem_limit         | -1                            |\n| max_query_instances    | -1                            |\n| max_user_connections   | 100                           |\n| quota.high             | 800                           |\n| quota.low              | 100                           |\n| quota.normal           | 400                           |\n| resource.cpu_share     | 1000                          |\n| resource.hdd_read_iops | 80                            |\n| resource.hdd_read_mbps | 30                            |\n| resource.io_share      | 1000                          |\n| resource.ssd_read_iops | 1000                          |\n| resource.ssd_read_mbps | 30                            |\n| resource_tags          |                               |\n| sql_block_rules        |                               |\n+------------------------+-------------------------------+\n17 rows in set (0.00 sec)\n\n// Use the root account to create a new Jack user in the MySQL Client\nmysql CREATE USER jack IDENTIFIED BY '123456' DEFAULT ROLE \"admin\";\nQuery OK, 0 rows affected (0.01 sec)\n\n// Set the default compute cluster for a Jack user\nmysql SET PROPERTY FOR jack 'default_cloud_cluster' = 'regression_test_cluster_name1';\nQuery OK, 0 rows affected (0.00 sec)\n\n// Show the default compute clusters of other users\nmysql show PROPERTY for jack;\n+------------------------+-------------------------------+\n| Key                    | Value                         |\n+------------------------+-------------------------------+\n| cpu_resource_limit     | -1                            |\n| default_cloud_cluster  | regression_test_cluster_name1 |\n| exec_mem_limit         | -1                            |\n| load_mem_limit         | -1                            |\n| max_query_instances    | -1                            |\n| max_user_connections   | 100                           |\n| quota.high             | 800                           |\n| quota.low              | 100                           |\n| quota.normal           | 400                           |\n| resource.cpu_share     | 1000                          |\n| resource.hdd_read_iops | 80                            |\n| resource.hdd_read_mbps | 30                            |\n| resource.io_share      | 1000                          |\n| resource.ssd_read_iops | 1000                          |\n| resource.ssd_read_mbps | 30                            |\n| resource_tags          |                               |\n| sql_block_rules        |                               |\n+------------------------+-------------------------------+\n17 rows in set (0.00 sec)\n")),(0,s.yg)("p",null,"If the compute cluster that is about to be set as default does not exist, as the default, the system will return an error and prompt the user to use the ",(0,s.yg)("inlineCode",{parentName:"p"},"SHOW CLUSTERS")," command to view all the valid compute clusters in the current warehouse."),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"SHOW CLUSTERS")," command will return a result set, where:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The ",(0,s.yg)("inlineCode",{parentName:"li"},"Cluster")," column shows the name of the compute clusters."),(0,s.yg)("li",{parentName:"ul"},"The ",(0,s.yg)("inlineCode",{parentName:"li"},"is_current")," column indicates whether the current user is using that compute cluster."),(0,s.yg)("li",{parentName:"ul"},"The ",(0,s.yg)("inlineCode",{parentName:"li"},"Users")," column shows which users have set that compute cluster as their default.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql SET PROPERTY 'default_cloud_cluster' = 'not_exist_cluster';\nERROR 5091 (42000): errCode = 2, detailMessage = Cluster not_exist_cluster not exist, use SQL 'SHOW CLUSTERS' to get a valid cluster\n\nmysql show clusters;\n+-------------------------------+------------+------------+\n| cluster                       | is_current | users      |\n+-------------------------------+------------+------------+\n| regression_test_cluster_name0 | FALSE      | root, jack |\n| regression_test_cluster_name5 | FALSE      |            |\n+-------------------------------+------------+------------+\n2 rows in set (0.01 sec)\n\nmysql SET PROPERTY 'default_cloud_cluster' = 'regression_test_cluster_name5';\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,s.yg)("h2",{id:"default-compute-cluster-selection-mechanism"},"Default compute cluster selection mechanism"),(0,s.yg)("p",null,"When the user has not explicitly set a default compute cluster, the system will automatically select a compute cluster which satifies the following conditions:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The compute cluster has an active backend."),(0,s.yg)("li",{parentName:"ul"},"The user has permission to use this compute cluster.")),(0,s.yg)("p",null,"Once a default compute cluster is established for a specific session, it will remain the default throughout that session, unless the user explicitly changes the default setting."),(0,s.yg)("p",null,"In different sessions, the system may automatically change the user's default compute cluster if any of the following occur:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"The user loses permission to use the compute cluster that was previously selected as the default."),(0,s.yg)("li",{parentName:"ul"},"Clusters have been added or removed."),(0,s.yg)("li",{parentName:"ul"},"The previously selected default compute cluster no longer has an active backend.")),(0,s.yg)("p",null,"Scenarios 1 and 2 will definitively trigger the system to automatically select a new default compute cluster, while scenario 3 may potentially lead to a change."),(0,s.yg)("h2",{id:"switch-compute-cluster"},"Switch compute cluster"),(0,s.yg)("p",null,"In a compute-storage decoupled architecture, the user can specify the database and compute cluster to be used."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Syntax")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"USE { [catalog_name.]database_name[@cluster_name] | @cluster_name }\n")),(0,s.yg)("p",null,"If the name of the database or compute cluster contains a reserved keyword, the respective name needs to be enclosed within backticks ","`","`` to denote it as a quoted identifier."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Example")),(0,s.yg)("p",null,"Use database ",(0,s.yg)("inlineCode",{parentName:"p"},"test_database"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"USE test_database\n\nUSE `test_database`\n")),(0,s.yg)("p",null,"Use compute cluster ",(0,s.yg)("inlineCode",{parentName:"p"},"test_cluster"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-SQL"},"USE @test_cluster\n\nUSE @`test_cluster`\n")),(0,s.yg)("p",null,"Use database ",(0,s.yg)("inlineCode",{parentName:"p"},"test_database")," and compute cluster ",(0,s.yg)("inlineCode",{parentName:"p"},"test_cluster"),":"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"USE test_database@test_cluster\n\nUSE `test_database`@`test_cluster`\n")))}m.isMDXComponent=!0}}]);