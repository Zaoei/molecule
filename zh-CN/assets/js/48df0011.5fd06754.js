"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37429],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77325:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var i=t(87462),o=t(63366),a=(t(67294),t(3905)),r=["components"],c={title:"\u5feb\u6377\u952e\uff08Keybinding\uff09",sidebar_label:"\u5feb\u6377\u952e"},s=void 0,l={unversionedId:"guides/extend-keybinding",id:"version-1.0.0/guides/extend-keybinding",title:"\u5feb\u6377\u952e\uff08Keybinding\uff09",description:"Monaco Editor \u5185\u7f6e\u6765\u975e\u5e38\u5f3a\u5927\u7684 \u5feb\u6377\u952e\uff08Keybinding\uff09 \u670d\u52a1\uff0cMolecule \u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u79fb\u690d\u4e86 VSCode \u4e2d\u7684 Action2 \u62bd\u8c61\u7c7b\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u8fd9\u4e2a Action2 \u5bf9\u8c61\uff0c\u6765\u5b9e\u73b0\u4e00\u4e9b\u81ea\u5b9a\u4e49 Action\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/guides/extend-keybinding.md",sourceDirName:"guides",slug:"/guides/extend-keybinding",permalink:"/molecule/zh-CN/docs/guides/extend-keybinding",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/guides/extend-keybinding.md",tags:[],version:"1.0.0",frontMatter:{title:"\u5feb\u6377\u952e\uff08Keybinding\uff09",sidebar_label:"\u5feb\u6377\u952e"},sidebar:"docs",previous:{title:"\u989c\u8272\u4e3b\u9898",permalink:"/molecule/zh-CN/docs/guides/extend-color-theme"},next:{title:"\u5feb\u6377\u8bbf\u95ee",permalink:"/molecule/zh-CN/docs/guides/extend-quick-access"}},p={},m=[{value:"\u5b9a\u4e49 Action \u5bf9\u8c61",id:"\u5b9a\u4e49-action-\u5bf9\u8c61",level:2},{value:"\u6ce8\u518c Action",id:"\u6ce8\u518c-action",level:2},{value:"\u4e3b\u52a8\u6267\u884c Action",id:"\u4e3b\u52a8\u6267\u884c-action",level:2}],d={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor")," \u5185\u7f6e\u6765\u975e\u5e38\u5f3a\u5927\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5feb\u6377\u952e\uff08Keybinding\uff09")," \u670d\u52a1\uff0cMolecule \u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u79fb\u690d\u4e86 VSCode \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Action2")," \u62bd\u8c61\u7c7b\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Action2")," \u5bf9\u8c61\uff0c\u6765\u5b9e\u73b0\u4e00\u4e9b",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 Action"),"\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\n",(0,a.kt)("strong",{parentName:"p"},"\u5feb\u6377\u952e\u3001\u6267\u884c\u547d\u4ee4\u3001Command Palette")," \u7b49\u65b9\u5f0f\u6765\u89e6\u53d1\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u8be6\u7ec6\u9610\u8ff0\uff0c\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49 ",(0,a.kt)("strong",{parentName:"p"},"Keybinding Action"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u672c\u6587\u5185\u5bb9\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4ee5 ",(0,a.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u4e3a\u57fa\u7840\u6f14\u793a\u3002"))),(0,a.kt)("h2",{id:"\u5b9a\u4e49-action-\u5bf9\u8c61"},"\u5b9a\u4e49 Action \u5bf9\u8c61"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5148\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Action2")," \u62bd\u8c61\u7c7b\uff0c\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"KeybindingAction")," \u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/action/keybindingAction.ts"',title:'"src/extensions/action/keybindingAction.ts"'},"import { KeybindingWeight } from '@dtinsight/molecule/esm/monaco/common';\nimport { KeyCode, KeyMod } from '@dtinsight/molecule/esm/monaco';\nimport { Action2 } from '@dtinsight/molecule/esm/monaco/action';\n//@ts-ignore\nimport { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';\n\nexport class KeybindingAction extends Action2 {\n    static readonly ID = 'AutoSave';\n\n    constructor() {\n        super({\n            id: KeybindingAction.ID,\n            precondition: undefined, // Define some precondition\n            f1: false, // Not show in the Command Palette\n            keybinding: {\n                weight: KeybindingWeight.WorkbenchContrib,\n                when: undefined,\n                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_S),\n            },\n        });\n    }\n\n    run(accessor: any, ...args: any[]) {\n        alert('Save success!');\n        // do something\n    }\n}\n")),(0,a.kt)("p",null,"\u4ee3\u7801\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"keybinding")," \u5b57\u6bb5\u5219\u662f\u5feb\u6377\u952e\u7684\u4e3b\u8981\u90e8\u5206\u3002\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"primary")," \u8fd9\u91cc\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + S ")," \u7684",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u5408\u952e"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u89e6\u53d1\u51fd\u6570")," ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," \u6267\u884c\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"alert"),"\u3002 \u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," \u53c2\u6570\u4e3a \u5f53\u524d Action \u7684 ",(0,a.kt)("strong",{parentName:"p"},"ID"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"executeCommand(actionId)")," \u65b9\u6cd5",(0,a.kt)("a",{parentName:"p",href:"#%E4%B8%BB%E5%8A%A8%E6%89%A7%E8%A1%8C-action"},"\u4e3b\u52a8\u89e6\u53d1"),"\u8fd9\u4e2a Action\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u518c-action"},"\u6ce8\u518c Action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/action/index.ts"',title:'"src/extensions/action/index.ts"'},"activate(extensionCtx: IExtensionService): void {\n    // Register the Action\n    molecule.extension.registerAction(KeybindingAction);\n    // Or\n    // extensionCtx.registerAction(KeybindingAction);\n}\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u597d\u7684 Action \u5bf9\u8c61\uff0c\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExtensionService"},"ExtensionService")," \u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"registerAction")," \u65b9\u6cd5\u8fdb\u884c\u6ce8\u518c\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Action \u5bf9\u8c61\u540c\u6837\u8981\u5728\u6269\u5c55\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"activate")," \u7684\u9636\u6bb5\u8fdb\u884c\u6ce8\u518c\uff0c\u624d\u80fd\u751f\u6548\u3002"))),(0,a.kt)("h2",{id:"\u4e3b\u52a8\u6267\u884c-action"},"\u4e3b\u52a8\u6267\u884c Action"),(0,a.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"extend-keybinding"},"Keybinding"),"\u3001 ",(0,a.kt)("strong",{parentName:"p"},"Command Palette")," \u7684\u65b9\u5f0f\u89e6\u53d1 ",(0,a.kt)("strong",{parentName:"p"},"Action")," \u4ee5\u5916\uff0c\n\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExtensionService#executecommand"},"executeCommand")," \u65b9\u6cd5\u53bb",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u52a8\u89e6\u53d1"),"\u6267\u884c Action\u3002\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"KeybindingAction")," \u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.extension.executeCommand('AutoSave', args);\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5b8c\u6574\u7684\u793a\u4f8b\u8bf7\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/action"},"molecule-examples"),"\u3002"))}u.isMDXComponent=!0}}]);