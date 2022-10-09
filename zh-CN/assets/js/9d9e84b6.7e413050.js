"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72697],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={id:"molecule.component.IScrollbarProps",title:"Interface: IScrollbarProps",sidebar_label:"IScrollbarProps",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/molecule.component.IScrollbarProps",id:"version-1.0.0/api/interfaces/molecule.component.IScrollbarProps",title:"Interface: IScrollbarProps",description:"molecule.component.IScrollbarProps",source:"@site/versioned_docs/version-1.0.0/api/interfaces/molecule.component.IScrollbarProps.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.component.IScrollbarProps",permalink:"/molecule/zh-CN/docs/api/interfaces/molecule.component.IScrollbarProps",draft:!1,editUrl:null,tags:[],version:"1.0.0",frontMatter:{id:"molecule.component.IScrollbarProps",title:"Interface: IScrollbarProps",sidebar_label:"IScrollbarProps",custom_edit_url:null},sidebar:"api",previous:{title:"IPaneConfigs",permalink:"/molecule/zh-CN/docs/api/interfaces/molecule.component.IPaneConfigs"},next:{title:"ISearchProps",permalink:"/molecule/zh-CN/docs/api/interfaces/molecule.component.ISearchProps"}},s={},u=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"isShowShadow",id:"isshowshadow",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"thumbStyle",id:"thumbstyle",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"trackStyle",id:"trackstyle",level:3},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule.component"},"component"),".IScrollbarProps"),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ScrollbarProps")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"IScrollbarProps"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"isshowshadow"},"isShowShadow"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"isShowShadow"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/3e6bc450/src/components/scrollable/index.tsx#L6"},"components/scrollable/index.tsx:6")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"thumbstyle"},"thumbStyle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"thumbStyle"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"CSSProperties")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/3e6bc450/src/components/scrollable/index.tsx#L8"},"components/scrollable/index.tsx:8")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trackstyle"},"trackStyle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"trackStyle"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"CSSProperties")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/3e6bc450/src/components/scrollable/index.tsx#L7"},"components/scrollable/index.tsx:7")))}d.isMDXComponent=!0}}]);