"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84050],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"i18n",sidebar_label:"i18n"},s=void 0,c={unversionedId:"guides/extend-locales",id:"version-0.9.0-beta.2/guides/extend-locales",title:"i18n",description:"Molecule has built-in a simple internationalization (i18n) solution to support our basic internationalization needs. We have built-in three basic languages: simplified Chinese (zh-CN), English (en default) and Korean (ko-KR).",source:"@site/versioned_docs/version-0.9.0-beta.2/guides/extend-locales.md",sourceDirName:"guides",slug:"/guides/extend-locales",permalink:"/molecule/docs/0.9.0-beta.2/guides/extend-locales",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/versioned_docs/version-0.9.0-beta.2/guides/extend-locales.md",tags:[],version:"0.9.0-beta.2",frontMatter:{title:"i18n",sidebar_label:"i18n"},sidebar:"docs",previous:{title:"QuickAccess",permalink:"/molecule/docs/0.9.0-beta.2/guides/extend-quick-access"},next:{title:"Settings",permalink:"/molecule/docs/0.9.0-beta.2/guides/extend-settings"}},p={},u=[{value:"Switch language",id:"switch-language",level:2},{value:"LocaleService",id:"localeservice",level:2},{value:"Custom language",id:"custom-language",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Molecule has built-in a simple ",(0,o.kt)("strong",{parentName:"p"},"internationalization (i18n)")," solution to support our basic internationalization needs. We have built-in three basic languages: ",(0,o.kt)("strong",{parentName:"p"},"simplified Chinese (zh-CN)"),", ",(0,o.kt)("strong",{parentName:"p"},"English (en default)")," and ",(0,o.kt)("strong",{parentName:"p"},"Korean (ko-KR)"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All code demos in this part are based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," project in ",(0,o.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start"),"."))),(0,o.kt)("h2",{id:"switch-language"},"Switch language"),(0,o.kt)("p",null,"We provide ",(0,o.kt)("strong",{parentName:"p"},"2 ways")," to switch languages by default. The first way is to use the shortcut key ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + L"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Display Language",src:n(94740).Z,width:"1270",height:"240"})),(0,o.kt)("p",null,"The second way is to use the shortcut key ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + ,")," to open the ",(0,o.kt)("a",{parentName:"p",href:"./extend-settings"},"Settings")," panel in the ",(0,o.kt)("a",{parentName:"p",href:"./extend-workbench"},"Editor"),", and then modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," field in the ",(0,o.kt)("strong",{parentName:"p"},"JSON")," configuration:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select Display Language",src:n(57885).Z,width:"1000",height:"452"})),(0,o.kt)("p",null,"After the modification is completed, Molecule will pop up an update message in the ",(0,o.kt)("a",{parentName:"p",href:"./extend-builtin-ui#notification"},"Notification")," bar, and then we can select ",(0,o.kt)("strong",{parentName:"p"},"Reload")," to reload the page application."),(0,o.kt)("h2",{id:"localeservice"},(0,o.kt)("a",{parentName:"h2",href:"../api/classes/molecule.LocaleService"},"LocaleService")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LocaleService")," provides some basic ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.LocaleService"},"API")," methods, these methods can help us to complete the expansion of internationalization functions, for example:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Localize")," an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.locale.localize('sourceKey', 'default value');\n")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("strong",{parentName:"p"},"current")," localized language:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Set the zh-CN as the current locale language\nmolecule.locale.setCurrentLocale('zh-CN');\n")),(0,o.kt)("h2",{id:"custom-language"},"Custom language"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internationalized language")," is also an extension of Molecule. We provide a very convenient way to ",(0,o.kt)("strong",{parentName:"p"},"customize the language"),", which is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," files to define internationalized ",(0,o.kt)("strong",{parentName:"p"},"language package")," data."),(0,o.kt)("p",null,"Let's take a look at an example!"),(0,o.kt)("p",null,"First, you can create a new folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," directory in your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"src/extensions/i18n\n\u251c\u2500\u2500 index.ts\n\u2514\u2500\u2500 zh-CN.json\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," is used to define localized extension objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';\n\nconst zhCN = require('./zh-CN.json');\nconst locales = [zhCN];\n\nexport const ExtendLocales: IExtension = {\n    id: 'ExtendLocales',\n    name: 'Extend locales',\n    contributes: {\n        [IContributeType.Languages]: locales,\n    },\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zh-CN.json")," is a language pack resource file of type ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ILocale"},"ILocale"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "custom-zh-CN",\n    "name": "\u7b80\u4f53\u4e2d\u6587 - \u81ea\u5b9a\u4e49",\n    "inherit": "zh-CN",\n    "source": {\n        "menu.file": "\u6587\u4ef6",\n        "menu.newFile": "\u65b0\u5efa\u4efb\u52a1",\n        "demo.running": "\u8fd0\u884c",\n        "demo.dataSourceManagement": "\u6570\u636e\u6e90\u7ba1\u7406",\n        "demo.terminal": "\u7ec8\u7aef"\n    }\n}\n')),(0,o.kt)("p",null,"Among these properties, ",(0,o.kt)("inlineCode",{parentName:"p"},"inherit")," is optional, indicating whether to ",(0,o.kt)("strong",{parentName:"p"},"inherit")," the existing ",(0,o.kt)("strong",{parentName:"p"},"(zh-CN/en)")," language files, and ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," indicates the specific localized data, whose content is expressed in the form of ",(0,o.kt)("strong",{parentName:"p"},"key-value"),"."),(0,o.kt)("p",null,"After adding the language pack resource file, ",(0,o.kt)("strong",{parentName:"p"},"refresh")," the entire page. You can open the language switch panel with the shortcut key ",(0,o.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + L"),", and then you can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u7b80\u4f53\u4e2d\u6587 - \u81ea\u5b9a\u4e49")," option."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unfortunately, although Molecule uses React to build the entire application, it is currently unable to ",(0,o.kt)("strong",{parentName:"p"},"switch languages in real time")," due to architectural reasons. The entire page application needs to be reloaded to refresh the locale."))))}m.isMDXComponent=!0},94740:function(e,t,n){t.Z=n.p+"assets/images/extend-language-5995fbf9d50eaba45d858e0a7e39b048.png"},57885:function(e,t,n){t.Z=n.p+"assets/images/extend-language2-e672a1fac76104ca0b21273e0080ddfb.png"}}]);