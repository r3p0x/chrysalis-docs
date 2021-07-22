(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[770],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3396:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={},u="IOTA Hub Migration Guide",l={unversionedId:"guides/hub_guide",id:"guides/hub_guide",isDocsHomePage:!1,title:"IOTA Hub Migration Guide",description:"This guide outlines how to switch from IOTA Hub to using Wallet.rs or its bindings instead.",source:"@site/docs/guides/hub_guide.md",sourceDirName:"guides",slug:"/guides/hub_guide",permalink:"/guides/hub_guide",editUrl:"https://github.com/iotaledger/chrysalis-docs/tree/main/docs/docs/guides/hub_guide.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"How the IOTA Chrysalis Phase 2 Token Migration Works",permalink:"/guides/migration-mechanism"},next:{title:"Backup and Security",permalink:"/guides/backup_security"}},c=[],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-hub-migration-guide"},"IOTA Hub Migration Guide"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This guide outlines how to switch from IOTA Hub to using ",(0,a.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/"},"Wallet.rs")," or its ",(0,a.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/libraries/index.html"},"bindings")," instead."))),(0,a.kt)("p",null,"Because of the unique features of IOTA 1.0, it was difficult to manage IOTA transactions with just a library. With the Chrysalis update, we have updated to be more accommodating to industry wide standards and developers. "),(0,a.kt)("p",null,"IOTA Hub was deprecated with the Chrysalis upgrade and will not work with the new protocol changes. If you somehow still use Hub, we recommend that you to switch our new wallet library ",(0,a.kt)("a",{parentName:"p",href:"https://client-lib.docs.iota.org/"},"Iota.rs"),", or its ",(0,a.kt)("a",{parentName:"p",href:"https://client-lib.docs.iota.org/libraries/index.html"},"bindings"),", where you can easily manage IOTA addresses, deposits, and withdrawals for user accounts."),(0,a.kt)("p",null,"To upgrade from Hub to a Chrysalis implementation you will need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integrate the Chrysalis network using ",(0,a.kt)("a",{parentName:"li",href:"https://wallet-lib.docs.iota.org/"},"Wallet.rs")," as mentioned in the ",(0,a.kt)("a",{parentName:"li",href:"/guides/exchange_guide"},"Exchange section"),"."),(0,a.kt)("li",{parentName:"ul"},"Pause withdrawals/deposits."),(0,a.kt)("li",{parentName:"ul"},"Make sure all balances have been swept and all deposits have been processed."),(0,a.kt)("li",{parentName:"ul"},"Transfer all IOTA to a generated migration address (instructions to be provided)."),(0,a.kt)("li",{parentName:"ul"},"Once migrated, transfer the IOTA coins to your host wallet account on your wallet.rs implementation.")))}p.isMDXComponent=!0}}]);