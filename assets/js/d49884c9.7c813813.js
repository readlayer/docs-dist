"use strict";(self.webpackChunkreadlayer_docs=self.webpackChunkreadlayer_docs||[]).push([[254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=n(7294),i=n(3905);const l=e=>{let{children:t,color:n="#fffe7e"}=e;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px"}},t)},o={sidebar_position:2,title:"Queries",description:"Different ways to search",slug:"/queries"},s=void 0,p={unversionedId:"queries",id:"queries",title:"Queries",description:"Different ways to search",source:"@site/docs/queries.mdx",sourceDirName:".",slug:"/queries",permalink:"/queries",draft:!1,editUrl:"https://github.com/readlayer/docs/edit/main/docs/queries.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Queries",description:"Different ways to search",slug:"/queries"},sidebar:"tutorialSidebar",previous:{title:"First steps",permalink:"/"},next:{title:"PDF reader",permalink:"/pdf"}},u={},c=[{value:"Types",id:"types",level:2},{value:"Strict",id:"strict",level:3},{value:"Examples",id:"examples",level:4},{value:"Regex",id:"regex",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Similar",id:"similar",level:3},{value:"Examples",id:"examples-2",level:4}],d={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("h3",{id:"strict"},"Strict"),(0,i.kt)("p",null,"Use it when you are looking for the exact term."),(0,i.kt)("p",null,"By default, it is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Diacritic-Sensitive"),(0,i.kt)("li",{parentName:"ul"},"Case-Insensitive"),(0,i.kt)("li",{parentName:"ul"},"Matches partial words")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can always change the diacritic, case sensitivity, or whole word matching directly in the item settings.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"page")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)(l,{mdxType:"HL"},"page"),"s are red")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can find that text on the same ",(0,i.kt)(l,{mdxType:"HL"},"page"))),(0,i.kt)("blockquote",null,(0,i.kt)(l,{mdxType:"HL"},"Page")," number 5"),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"canci\xf3n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"La cancion sonaba sin parar")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Toca otra vez esa ",(0,i.kt)(l,{mdxType:"HL"},"canci\xf3n"))),(0,i.kt)("h3",{id:"regex"},"Regex"),(0,i.kt)("p",null,"Use regular expressions to highlight."),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"East Midlands|West Midlands|London")),(0,i.kt)("p",null,'Goal: find any of the terms "East Midlands", "West Midlands", or "London".'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The differences between the ",(0,i.kt)(l,{mdxType:"HL"},"East Midlands")," and the ",(0,i.kt)(l,{mdxType:"HL"},"West Midlands")," I only found out when I moved to Cov.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"(\\p{N})+")),(0,i.kt)("p",null,"Goal: find numbers"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The current population increase is estimated at ",(0,i.kt)(l,{mdxType:"HL"},"67")," million people per year")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Page number ",(0,i.kt)(l,{mdxType:"HL"},"5"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"\\p{Sc}")),(0,i.kt)("p",null,"Goal: find currency symbols"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In November 2016, Tesla acquired SolarCity, in an all-stock ",(0,i.kt)(l,{mdxType:"HL"},"$"),"2.6 billion deal")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"(stop)\\w*")),(0,i.kt)("p",null,'Goal: find all words starting with "stop"'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please ",(0,i.kt)(l,{mdxType:"HL"},"stop")," there")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You are ",(0,i.kt)(l,{mdxType:"HL"},"stopping")," at the end")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)")),(0,i.kt)("p",null,"Goal: find email addresses in a page or document"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Contact me at ",(0,i.kt)(l,{mdxType:"HL"},(0,i.kt)("a",{parentName:"p",href:"mailto:gerard@online.com"},"gerard@online.com")),".")),(0,i.kt)("h3",{id:"similar"},"Similar"),(0,i.kt)("p",null,"Find similar terms or passages."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you use double ",(0,i.kt)("strong",{parentName:"p"},"quotes")," ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),", ReadLayer will behave in the same way as with the ",(0,i.kt)("a",{parentName:"p",href:"#strict"},"Strict")," query.\nYou can combine strict and similar terms or sentences.")),(0,i.kt)("p",null,"By default, this type of query will use your ",(0,i.kt)("strong",{parentName:"p"},"language")," settings defined in ",(0,i.kt)("em",{parentName:"p"},"Settings > Language"),".\nHowever, you can fine tune each of your queries to use a different language. Once you have created a new item, adjust its language in the item settings."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, ReadLayer finds related terms by inflection, not semantically.")),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},'"miR-378"')),(0,i.kt)("p",null,"Goal: find exact match"),(0,i.kt)("blockquote",null,(0,i.kt)(l,{mdxType:"HL"},"miR-378")," suppresses the proliferation, migration and invasion of colon cancer cells by inhibiting SDAD1"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},'"miR-378" "SDAD1"')),(0,i.kt)("p",null,'Goal: find passages where the terms "miR-378" and "SDAD1" are near each other'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We found that miR-378 expression was low in colon cancer tissues and cell lines. Overexpression of miR-378 not only inhibits the proliferation of colon cancer cells in vitro by inducing apoptosis, but also inhibits migration and invasion by inhibiting the EMT of colon cancer cells."),(0,i.kt)(l,{mdxType:"HL"},"SDAD1 is a direct target gene of miR-378"),". We also confirmed that miR-378 alleviated the malignant phenotypes of colon cancer cells by inhibiting the Wnt/\u03b2-catenin pathway. Conclusion: ",(0,i.kt)(l,{mdxType:"HL"},"miR-378 inhibits the proliferation, migration and invasion of colon cancer cells by targeting SDAD1"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},'"BORIS" regulation')),(0,i.kt)("p",null,'Goal: Find the term "BORIS" near related terms to "regulation".'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The evolution of epigenetic ",(0,i.kt)(l,{mdxType:"HL"},"regulators CTCF and BORIS"),"/CTCFL in amniotes.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This indicates that ",(0,i.kt)(l,{mdxType:"HL"},"BORIS might have important regulatory")," roles in tumor immortalization during tumorigenesis.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Query: ",(0,i.kt)("inlineCode",{parentName:"p"},"fire weld arrest")),(0,i.kt)("p",null,"Goal: Find passages that talk about the people arrested for starting a fire by welding"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The interior minister, Manuel Monsalve, confirmed that 17 people had been ",(0,i.kt)(l,{mdxType:"HL"},"arrested for possibly starting fires by such activities as welding")," or burning wool.")))}k.isMDXComponent=!0}}]);