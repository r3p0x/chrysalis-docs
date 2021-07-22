(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[303],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return b}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),b=a,m=f["".concat(s,".").concat(b)]||f[b]||u[b]||n;return r?i.createElement(m,o(o({ref:t},p),{},{components:r})):i.createElement(m,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8633:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var i=r(2122),a=r(9756),n=(r(7294),r(3905)),o=["components"],l={slug:"/libraries/"},s="Libraries",c={unversionedId:"libraries/overview",id:"libraries/overview",isDocsHomePage:!1,title:"Libraries",description:"The IOTA client libraries allow you to easily integrate IOTA into your own applications. You can choose a library to match your use case.",source:"@site/docs/libraries/overview.md",sourceDirName:"libraries",slug:"/libraries/",permalink:"/libraries/",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/docs/libraries/overview.md",version:"current",frontMatter:{slug:"/libraries/"},sidebar:"mySidebar",previous:{title:"Node Software",permalink:"/node_software"},next:{title:"IOTA Client Library",permalink:"/libraries/client"}},p=[{value:"Utilities",id:"utilities",children:[]}],u={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"libraries"},"Libraries"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The IOTA client libraries allow you to easily integrate IOTA into your own applications. You can choose a library to match your use case.")),(0,n.kt)("p",null,"The official IOTA libraries serve as ",(0,n.kt)("inlineCode",{parentName:"p"},"one-source-code-of-truth")," to IOTA users and provide binding to other programming languages. You can read more about core principles behind IOTA client libraries in the following blog ",(0,n.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"post"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/libraries/client"},"client-lib"),": a general purpose IOTA client library for interacting with the IOTA network (Tangle)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/libraries/wallet"},"wallet-lib"),": a stateful library specifically designed to be used for IOTA value-based transfers ."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.c"},"iota.c"),": a special-purpose library in C for embedded devices (with microcontrollers) covering a basic features of ",(0,n.kt)("inlineCode",{parentName:"li"},"client-lib")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"wallet-lib.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.js/tree/chrysalis"},"iota.js"),": an initial IOTA client library in Typescript that can be used in a web browser."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/tree/chrysalis/phase2"},"iota.go"),": an initial IOTA client library in Golang.")),(0,n.kt)("div",{class:"iframe-wrapper"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/N2VW3zJQmso",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"overview-libs",src:r(4776).Z})),(0,n.kt)("p",null,"All libraries are in active development. The libraries target the Chrysalis testnet and no longer work with the previous IOTA mainnet."),(0,n.kt)("p",null,"The IOTA foundation is in charge of maintaining the official client libraries.  You can find the libraries source code in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger"},"Official GitHub repository"),"."),(0,n.kt)("h2",{id:"utilities"},"Utilities"),(0,n.kt)("h4",{id:"developer-tools"},(0,n.kt)("strong",{parentName:"h4"},"Developer tools")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://explorer.iota.org/chrysalis"},"Official explorer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://faucet.testnet.chrysalis2.com/"},"Testnet faucet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet"},"Commandline wallet"))),(0,n.kt)("hr",null))}f.isMDXComponent=!0},4776:function(e,t,r){"use strict";t.Z=r.p+"assets/images/overview-libraries-bb1c7f4145c1e8e1b477f9267bb743ee.svg"}}]);