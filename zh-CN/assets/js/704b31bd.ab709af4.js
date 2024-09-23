"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[986154],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var i=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),h=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(a),u=r,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||n;return a?i.createElement(g,o(o({ref:t},p),{},{components:a})):i.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<n;h++)o[h]=a[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},353598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var i=a(58168),r=(a(296540),a(15680));const n={title:"Migrate data lakehouse from BigQuery to Apache Doris, saving $4,500 per month",summary:"Dien Tran Thanh shares his firsthand experience, proven best practices, and insightful suggestions for migrating from BigQuery to Apache Doris to build a more cost-efficient data warehouse.",description:"Dien Tran Thanh shares his firsthand experience, proven best practices, and insightful suggestions for migrating from BigQuery to Apache Doris to build a more cost-efficient data warehouse.",date:"2024-07-19",author:"Dien, Tran Thanh",tags:["Best Practice"],image:"/images/migrate-lakehouse-from-bigquery-to-apache-doris.jpg"},o=void 0,s={permalink:"/zh-CN/blog/migrate-lakehouse-from-bigquery-to-doris",source:"@site/blog/migrate-lakehouse-from-bigquery-to-doris.md",title:"Migrate data lakehouse from BigQuery to Apache Doris, saving $4,500 per month",description:"Dien Tran Thanh shares his firsthand experience, proven best practices, and insightful suggestions for migrating from BigQuery to Apache Doris to build a more cost-efficient data warehouse.",date:"2024-07-19T00:00:00.000Z",formattedDate:"2024\u5e747\u670819\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Dien, Tran Thanh"}],frontMatter:{title:"Migrate data lakehouse from BigQuery to Apache Doris, saving $4,500 per month",summary:"Dien Tran Thanh shares his firsthand experience, proven best practices, and insightful suggestions for migrating from BigQuery to Apache Doris to build a more cost-efficient data warehouse.",description:"Dien Tran Thanh shares his firsthand experience, proven best practices, and insightful suggestions for migrating from BigQuery to Apache Doris to build a more cost-efficient data warehouse.",date:"2024-07-19",author:"Dien, Tran Thanh",tags:["Best Practice"],image:"/images/migrate-lakehouse-from-bigquery-to-apache-doris.jpg"},prevItem:{title:"Apache Doris 2.1.5 just released",permalink:"/zh-CN/blog/release-note-2.1.5"},nextItem:{title:"Apache Doris version 2.0.13 has been released",permalink:"/zh-CN/blog/release-note-2.0.13"}},l={authorsImageUrls:[void 0]},h=[{value:"The problem posed",id:"the-problem-posed",level:2},{value:"Approach to the problem",id:"approach-to-the-problem",level:2},{value:"Problem solving",id:"problem-solving",level:2},{value:"Migrate ETL streams from data sources",id:"migrate-etl-streams-from-data-sources",level:3},{value:"Migrate data marts flow",id:"migrate-data-marts-flow",level:3},{value:"Migrate services pointing to BigQuery",id:"migrate-services-pointing-to-bigquery",level:3},{value:"Migrate dashboards in Metabase",id:"migrate-dashboards-in-metabase",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Evaluation",id:"evaluation",level:2},{value:"Advantages of the new system",id:"advantages-of-the-new-system",level:2},{value:"Disadvantages of the new system",id:"disadvantages-of-the-new-system",level:2},{value:"Key lessons from this migration process",id:"key-lessons-from-this-migration-process",level:2},{value:"References",id:"references",level:2}],p={toc:h},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"Special Thanks",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The Apache Doris community would like to extend our gratitude to Dien for sharing his valuable experience and best practices in migrating from BigQuery to Apache Doris in this insightful and informative article. Dien is also an active member of the Apache Doris open-source ",(0,r.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"community"),", and we are truly appreciative of his ongoing support.")),(0,r.yg)("p",null,"This article is written by ",(0,r.yg)("a",{parentName:"p",href:"https://www.linkedin.com/in/dien-tran-thanh-19275b14a/"},"Dien, Tran Thanh")," and originally posted on ",(0,r.yg)("a",{parentName:"p",href:"https://dientt.medium.com/migrate-data-platform-t%E1%BB%AB-bigquery-sang-apache-doris-gi%C3%BAp-gi%E1%BA%A3m-chi-ph%C3%AD-t%E1%BB%AB-6-000-xu%E1%BB%91ng-c%C3%B2n-1-500-40ba9b22967e"},"Medium"),"."),(0,r.yg)("h2",{id:"the-problem-posed"},"The problem posed"),(0,r.yg)("p",null,"To cut BigQuery costs, my previous employer who worked at a retail company (Regrettably, I'm not at liberty to disclose the name) asked me as an Advisor to research and design a data platform on-premises. In the data-driven company, it spent about $6,000 on BigQuery (The current scanning cost is $8.44 per TB \u2014 Pay-as-you-go, not including taxes and storage fees). "),(0,r.yg)("p",null,"I summarize the sources of the high BigQuery cost into the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"ETL"),": More than 500 tables drawn from CRM system, OMS system, tracking on web/app, affiliates, marketplace, and social media... (Only the tables necessary for the current requirements are stored. For tables that are not actively needed, the data is stored as Parquet files in Google Cloud Storage (GCS)).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Tables"),": The departments built nearly 120 tables in the data mart, including the reports of accounting, marketing, sales, operations, and BOD.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Dashboards"),": There are 45 dashboards, each having 7\u201310 charts on average.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Queries"),": The systems running campaigns interact with BigQuery, as they need to query through a large volume of data (coded in Java, reading data from BigQuery)."))),(0,r.yg)("p",null,"The situation was complicated. After reviewing the data usage, I realized that the existing data lakehouse has already optimized the use of BigQuery. They have applied the techniques suggested by Google, such as partitioning, clustering, materialized views, denormalization, and caching. Additionally, they have workers monitoring the audit logs to detect expensive queries and alerts to ensure the queries follow the established rules. That is to say, there was little room for further optimization on the BigQuery side."),(0,r.yg)("p",null,"Given this scenario, using an open-source on-premises solution appeared to be the choice. However, this would come with the trade-off of increased operational costs. Those who have migrated from a cloud-based solution to an on-premises one will understand the challenges associated with this decision."),(0,r.yg)("h2",{id:"approach-to-the-problem"},"Approach to the problem"),(0,r.yg)("p",null,"The key requirements for this migration process are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Leverage the existing ETL pipeline with minimal changes.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reuse the existing data marts that have been built by various teams. As 90% of them are built using SQL, the new data lakehouse system needs to have strong SQL support to enable the reuse of the existing workflows.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ensure the current services (written in Java) can seamlessly connect to the new lakehouse, with minimal changes to the application logic.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Rebuild the existing dashboards on Metabase (a BI tool). This could be challenging as there might be differences in syntax or support for certain functions (e.g., window functions) between BigQuery and the new system.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Achieve good system performance, stability, flexibility, and easy scalability.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Hopefully, be able to read data from Apache Iceberg, as this is where the Machine Learning team exports their model results.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Hopefully, store vector data for the AI chatbot.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Ensure the new data lakehouse is easy for the existing teams to learn and adopt, especially in terms of SQL syntax.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The long-term maintenance costs of the new system should be low, with a reasonable initial effort to understand the operational aspects."))),(0,r.yg)("p",null,"Based on the information provided, I found ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris"),", an open source data warehouse, to be a suitable solution. (A friend introduced it to me before, when performing this migration, I had 5 months of experience working with Doris.) "),(0,r.yg)("p",null,"Around 20TB of data needs to be scanned daily. According to BigQuery charts, the peak hours are 00:00\u201306:00, 8:30\u201311:00 and 14:30\u201316 :00). I use the following hardware configuration:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"3 Follower nodes, each with 20GB RAM, 12 CPU, and 200GB SSD")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"1 Observer node with 8GB RAM, 8 CPU, and 100GB SSD")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"3 Backend nodes, each with 64GB RAM, 32 CPU, and 3TB SSD"))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"apache-doris-architecture",src:a(100920).A,width:"1280",height:"1080"})),(0,r.yg)("p",null,"With this configuration, the estimated monthly cost is around 37 million VND (using a server service provided by a Vietnamese company and the pricing may vary across different providers.)."),(0,r.yg)("p",null,"Reasons to choose Apache Doris:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris is being actively developed by Baidu to meet their own needs. It is widely used by other major tech companies such as Alibaba, Tencent, and Xiaomi... and recently many technology companies in India.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The Doris community, while smaller compared to Clickhouse, has an active Slack group where users can get support and direct answers from the developers, including those who have previously encountered and resolved similar issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris supports the MySQL protocol, allowing applications and tools that can connect to MySQL to also connect to Doris.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris provides high availability, where data can still be queried even if a node goes down, as long as the table's replication settings are configured properly.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris can be scaled both horizontally and vertically. In cases where local storage is insufficient, data can be stored on HDFS, S3, GCS, and accessed using federated queries.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Doris' performance is optimized through the Massive Parallel Processing architecture, and features like predicate pushdown, partitioning, various Indexing mechanisms, and rollup (very useful). It also uses a columnar data format and provides flexible join capabilities, including broadcast joins and local joins utilizing replicas to avoid data shuffling. It provides more flexible upsert than ClickHouse."))),(0,r.yg)("p",null,"There are many more reasons, but I've only highlighted a part of them above."),(0,r.yg)("h2",{id:"problem-solving"},"Problem solving"),(0,r.yg)("h3",{id:"migrate-etl-streams-from-data-sources"},"Migrate ETL streams from data sources"),(0,r.yg)("p",null,"Below is the high-level data architecture of the data flow before migration:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Migrate ETL streams from data sources",src:a(720596).A,width:"1280",height:"467"})),(0,r.yg)("p",null,"The company has saved costs by using open-source solutions for the ETL processing components, and it used only GCS and BigQuery. I will not delve into the details of the architecture here but keep the explanation simple to provide a high-level understanding of the migration process. If a more comprehensive solution is required, there are options like Apache Iceberg and Trino that can be leveraged for ad-hoc processing, A/B testing, etc."),(0,r.yg)("p",null,"This is the architecture after migration."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Migrate ETL streams from data sources",src:a(106561).A,width:"1280",height:"467"})),(0,r.yg)("p",null,"To minimize the changes, we have used a similar architecture, where Apache Doris provides a connector that allows Apache Flink to directly upsert data into it."),(0,r.yg)("p",null,"The File Storage Service is provided by the server company. (The client connection is similar to S3, and I guess the underlying core could be MinIO.)"),(0,r.yg)("p",null,"Apache Doris supports reading real-time data directly from Kafka and performing simple ETL, but to reduce the burden on Doris and leverage the processing capabilities of Apache Flink, we have only created an abstraction to push the data into Doris, which is quite straightforward."),(0,r.yg)("p",null,"Migrating the old data is more challenging, and we have implemented the following steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1"),": A script reads the schema for each table on BigQuery, and then creates corresponding tables with the same schema and partition columns on Doris (luckily, we don't have to deal with complex data types). Currently, Doris does not support clustering columns, but it does provide various indexes such as Bitmap Index, Prefix Index, Bloom Filter Index, and Inverted Index, depending on the use case.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2"),": A script exports each table from BigQuery into Parquet files and stores them in GCS.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3"),": A script directly reads the files from GCS and loads them into Doris (Doris supports reading data from File Storage System quite easily, requiring only a simple SQL statement)."))),(0,r.yg)("p",null,"During the migration, we have prepared scripts and techniques to ensure data consistency between BigQuery and Doris when the new ETL flow on Doris starts consuming the new data."),(0,r.yg)("h3",{id:"migrate-data-marts-flow"},"Migrate data marts flow"),(0,r.yg)("p",null,"This part is quite straightforward as the old flow used Apache Airflow, where they defined SQL (easy to manage SQL version when building Data Marts) and then used the Google Cloud BigQuery Operator to interact with BigQuery. In this part, I have replaced the BigQuery Operator with the MySQL Operator to connect to Doris. The Doris SQL is compatible with 90% of the old flow, so I can reuse the old SQL statements."),(0,r.yg)("h3",{id:"migrate-services-pointing-to-bigquery"},"Migrate services pointing to BigQuery"),(0,r.yg)("p",null,"This part is also easy as the majority of the services use simple custom SQL. The tables they use are mostly pre-calculated (denormalized, big tables, or materialized views), so there is almost no need for changes, except for the connection part to Doris, but we don't have to change the code logic."),(0,r.yg)("h3",{id:"migrate-dashboards-in-metabase"},"Migrate dashboards in Metabase"),(0,r.yg)("p",null,"When Metabase connects to Doris, some dashboards will throw errors due to different function syntax. For example, Doris uses the Window Functions such as ",(0,r.yg)("inlineCode",{parentName:"p"},"LEAD(expr, offset, default) OVER (partition_by_clause order_by_clause)"),", while in BigQuery, it is ",(0,r.yg)("inlineCode",{parentName:"p"},"LEAD(expr) OVER (partition_by_clause order_by_clause)"),". Such difference can lead to logical errors, so we need to remove those charts and rebuild the new syntax on Doris."),(0,r.yg)("h3",{id:"monitoring"},"Monitoring"),(0,r.yg)("p",null,"After all the migration, we use Airflow to check the data of both BigQuery and Doris for each table and each chart. When a table has a discrepancy, we will zoom in to handle it. Overall, we haven't seen any complex errors, and the discrepancy rate is less than 5%."),(0,r.yg)("h2",{id:"evaluation"},"Evaluation"),(0,r.yg)("p",null,"After the ETL pipeline ran stably for a week, I provided the team with a trial version. After 4 weeks of testing, the performance remained stable, with occasional failures of a Frontend (FE) node. (When one FE node died, the system could still be queried though. Only backend failures would impact performance since that means the parallel server capacity could not be fully utilized. When a failure occurred, the system would self-recover within 2 seconds). During peak hours, queries were often slow because the ETL job consuming over 70% of the resources. The solution was to reconfigure the resource allocation to restrict the ETL account from consuming more than 40% of resources. (Doris provides a ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/blog/multi-tenant-workload-isolation-in-apache-doris"},"mechanism")," to share resources between account groups, where normally unused resources can be borrowed, but during contention each group is limited to its allocated portion, so limiting ETL to 40% resolved the issue during high concurrent usage.)"),(0,r.yg)("p",null,"The team plans to run the old and new systems in parallel for another 2-3 weeks. If everything checks out, they will then shut down the BigQuery pipeline."),(0,r.yg)("p",null,"Currently, the new system is not fully optimized, and the team hasn't utilized all the features that Apache Doris provides. With more time to explore, it seems they could solve many more problems."),(0,r.yg)("p",null,"The implementation was carried out by 1 Data Engineer, 1 Software Engineer, and 1 Data Analyst over 4 weeks."),(0,r.yg)("h2",{id:"advantages-of-the-new-system"},"Advantages of the new system"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The biggest advantage is the cost savings. The monthly cost has been reduced from $6,000 to $1,500.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It supports seamless data import from Apache Iceberg. The Machine Learning and data mining team can directly import data without needing to create a separate pipeline like with BigQuery.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It supports ",(0,r.yg)("a",{parentName:"p",href:"https://python.langchain.com/v0.2/docs/integrations/vectorstores/apache_doris/"},"vector data storage")," for AI chatbots. Data can be directly imported from the File Store Service (S3) instead of having to push it to Redis as before.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It provides efficient data aggregation through the Rollup mechanism.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It allows hybrid hot and cold storage within a single table. The older, less frequently accessed data can be stored in cold storage on the File Store Service, with Doris automatically retrieving the cold data when needed (though this may incur a slight performance penalty)."))),(0,r.yg)("h2",{id:"disadvantages-of-the-new-system"},"Disadvantages of the new system"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"It is difficult to maintain, as it requires significant time to adjust the many configuration parameters (over 100) to ensure the system operates as expected.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Users may encounter OOM errors if too many users access the system at the same time, as different queries compete for RAM resources (in this case, some users may encounter errors while others do not, depending on the process and group_account).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Data replication between nodes can sometimes lose synchronization due to network issues or other reasons, and the automatic replication retry mechanism may not be successful. In such cases, it is necessary to set up an external worker mechanism for automatic handling (Doris manages a storage unit called Tablet. The metadata on each node records the ETL data into a specific table, and the metadata version gets updated. Doris provides a SQL-based method to handle desynchronization).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"New versions may occasionally have bugs, so it's recommended to check if the ",(0,r.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2gmq5o30h-455W226d79zP3L96ZhXIoQ"},"community")," has reported any issues before deciding to upgrade.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Limited support for processing Vietnamese text, with the full-text search feature not performing well in Vietnamese.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The servers used are provided by a Vietnamese company, which seems to be using OpenStack, so they can occasionally be unstable. The occasional node disconnections require intervention from the provider. However, due to the high availability feature, Doris can still be used, though performance may be reduced during these periods (node disconnections are not frequent, occurring around once every few months). If the disconnection happens on a BE node, data rebalancing may be required if there are active ETL jobs at that time."))),(0,r.yg)("h2",{id:"key-lessons-from-this-migration-process"},"Key lessons from this migration process"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The bandwidth requirements were not properly estimated, so Doris sometimes exceeds the read capacity when reading data from the old tables stored in GCS.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The migration team was not fully dedicated to the task, spending only 70% of their time on the migration and 30% on other responsibilities. This intermittent work led to lower-than-expected performance. (I worked part-time.)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For real-time data streams, the recorded storage files are very small in size, so it is necessary to adjust the compaction configuration so that Doris can merge files in groups, which will give better query performance.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"We spent significant time manually inspecting the data mart tables to determine the appropriate index type. However, this process can be automated by leveraging a metadata management tool like Datahub.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The data quality validation process was not thorough enough. We should use a more comprehensive approach combining count, sum, and dimensional checks to ensure high data accuracy.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"We realized that the old system, built by the management, was designed with extensibility, integration, and migration in mind, so I hardly changed the flow or logic but made the most of the old system. It is a valuable lesson to learn from the legacy system's architecture."))),(0,r.yg)("p",null,"This article does not go into depth on the technical details of the new data lakehouse techniques, and the process of selecting the appropriate technologies is not discussed in detail, either."),(0,r.yg)("p",null,"Now, the data lakehouse has been used stably by the teams for weeks, and both the CTO and CFO are happy with it. However, it will require more extensive usage to enable a more objective evaluation."),(0,r.yg)("p",null,"Note: Using BigQuery is still more convenient than Doris, as Doris is an open-source solution and can have some minor issues. Doris requires more complex techniques to ensure a stable cluster, or it will require more effort in cluster maintenance. However, if you use Doris for an extended period and develop a good understanding of how to operate it, the maintenance costs are not particularly high."),(0,r.yg)("p",null,"Nevertheless, I still prefer using BigQuery. :D"),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Debezium: ",(0,r.yg)("a",{parentName:"p",href:"https://debezium.io/"},"https://debezium.io/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Apache Doris: ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"https://doris.apache.org/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Tencent blog: ",(0,r.yg)("a",{parentName:"p",href:"https://medium.com/geekculture/tencent-data-engineer-why-we-go-from-clickhouse-to-apache-doris-db120f324290"},"https://medium.com/geekculture/tencent-data-engineer-why-we-go-from-clickhouse-to-apache-doris-db120f324290")))))}d.isMDXComponent=!0},100920:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/apache-doris-architecture-3b2a8b33e45ebdfc64dd873c547eb8b1.png"},106561:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/migrate-etl-streams-from-data-sources-2-75508eb1c2632d093290faad010c4194.png"},720596:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/migrate-etl-streams-from-data-sources-a183600c5e7182e9ab0838d3a2bea3d5.png"}}]);